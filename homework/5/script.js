const elems = {
  display: document.getElementById("displayMain"),
  displayInfo: document.getElementById("displayOperations"),
  displayInd: document.getElementById("indicater"),
  ac: document.getElementById("ac"),
  ce: document.getElementById("ce"),
  divide: document.getElementById("divide"),
  multiply: document.getElementById("multiply"),
  minus: document.getElementById("minus"),
  plus: document.getElementById("plus"),
  eq: document.getElementById("equal"),
  dot: document.getElementById("dot"),
  zero: document.getElementById("zero"),
  one: document.getElementById("one"),
  two: document.getElementById("two"),
  three: document.getElementById("three"),
  four: document.getElementById("four"),
  five: document.getElementById("five"),
  six: document.getElementById("six"),
  seven: document.getElementById("seven"),
  eight: document.getElementById("eight"),
  nine: document.getElementById("nine"),
};

for (const btn in elems) {
  if (btn === "display" || btn === "displayInfo" || btn === "displayInd")
    continue;
  (function (button) {
    elems[button].addEventListener("click", function () {
      calculate(button);
    });

    if (button === "ac" || button === "ce" || button === "eq") {
      document.addEventListener("keyup", function (event) {
        if (button === getChar(event, true)) {
          calculate(getChar(event, true));
        }
      });
    } else {
      document.addEventListener("varkeypress", function (event) {
        if (toStr(button) === getChar(event)) {
          calculate(getChar(event), true);
        }
      });
    }
  })(btn);
}

function getChar(event, add) {
  const keyMap = {
    13: "equal",
    35: "ce",
    46: "ac",
  };

  if (add) {
    return keyMap[event.which];
  } else {
    if (event.which == null) {
      if (event.keyCode < 32) return "eq";
      return String.fromCharCode(event.keyCode);
    }

    if (event.which != 0 && event.charCode != 0) {
      if (event.which < 32) return "eq";
      return String.fromCharCode(event.which);
    }
  }

  return "";
}

function toStr(btn) {
  const btns = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    zero: "0",
    divide: "/",
    multiply: "*",
    plus: "+",
    minus: "-",
    dot: ".",
  };
  if (btn === "ce") return "";
  return btns[btn];
}

function removeZero(str) {
  let result = str;

  const senseOperators = ["+", "-"];

  let dotCond, firstZero, operZero;

  for (let i = 0; i < result.length - 1; i++) {
    dotCond = result[i + 1] !== ".";
    firstZero = i === 0 && result[i] === "0" && dotCond;
    operZero =
      senseOperators.indexOf(result[i - 1]) !== -1 &&
      result[i] === "0" &&
      dotCond;

    if (firstZero || operZero) {
      result = result.slice(0, i) + result.slice(i + 1);
      ++i;
    }
  }

  return result;
}

function fixOper(str) {
  let result = str;
  const operators1 = ["*", "/"];
  const operators2 = ["+", "-"];
  let cond, optCond;

  for (let i = 0; i < result.length - 1; i++) {
    cond =
      operators1.indexOf(result[i]) !== -1 &&
      operators1.indexOf(result[i + 1]) !== -1;

    if (cond) {
      result = result.slice(0, i) + result.slice(i + 1);
    }
  }

  for (let i = 0; i < result.length - 1; i++) {
    cond = operators2.indexOf(result[i]) !== -1 && result[i] === result[i + 1];
    optCond = result[i] === "-" && result[i + 1] === "+";

    if (cond) {
      result = result.slice(0, i) + result.slice(i + 1);
    } else if (optCond) {
      result = result.slice(0, i + 1) + result.slice(i + 2);
    }
  }

  for (let i = 0; i < result.length - 2; i++) {
    if (
      operators1.indexOf(result[i]) !== -1 &&
      operators2.indexOf(result[i + 1]) !== -1 &&
      operators1.indexOf(result[i + 2]) !== -1
    ) {
      result = result.slice(0, i + 2) + result.slice(i + 3);
    }
  }

  for (let i = 0; i < result.length - 1; i++) {
    if (
      operators2.indexOf(result[i]) !== -1 &&
      operators1.indexOf(result[i + 1]) !== -1
    ) {
      result = result.slice(0, i + 1) + result.slice(i + 2);
    }
  }

  if (operators1.indexOf(result[0]) !== -1) {
    result = "0";
  }

  return result;
}

function removeLast(str) {
  const operators = ["+", "-", "*", "/"];
  let result = str;

  if (str.length === 1) {
    return "0";
  } else {
    for (let i = result.length - 1; i > 0; i--) {
      if (operators.indexOf(result[i]) !== -1) {
        return result.slice(0, i);
      } else if (operators.indexOf(result[i - 1]) !== -1) {
        return result.slice(0, i);
      } else continue;
    }
  }
}

const max = {
  add: function () {
    if (!elems.displayInd.classList.toggle("max")) {
      elems.displayInd.classList.toggle("max");
    }
  },
  remove: function () {
    if (elems.displayInd.classList.toggle("max")) {
      elems.displayInd.classList.toggle("max");
    }
  },
};

function calculate(btn, isFromKey) {
  const operators = ["minus", "plus", "divide", "multiply"];

  if (btn === "ac") {
    elems.display.innerText = "0";
    elems.displayInfo.innerText = "0";
    max.remove();
    console.log("max removed");
    return;
  }

  if (btn === "ce") {
    const result = removeLast(elems.displayInfo.innerText);
    if (!result) {
      elems.displayInfo.innerText = "0";
    } else {
      elems.displayInfo.innerText = result;
    }
    max.remove();
  }

  if (btn === "eq") {
    elems.displayInfo.innerText = elems.display.innerText;
    max.remove();
    return;
  }

  let operations = elems.displayInfo.innerText;

  if (operations.length < 32) {
    if (isFromKey) {
      operations += btn;
    } else {
      operations += toStr(btn);
    }
  } else {
    max.add();
  }

  operations = removeZero(operations);
  operations = fixOper(operations);
  elems.displayInfo.innerText = operations;

  let calc = `${eval(elems.display.innerText)}`;
  if (operators.indexOf(btn) === -1) {
    calc = `${eval(operations)}`;
  }

  if (calc.length < 14) {
    if (!calc) {
      elems.display.innerText = "0";
    } else {
      elems.display.innerText = calc;
    }
  } else if (calc < 1) {
    elems.display.innerText = (+calc).toPrecision(7);
  } else {
    elems.display.innerText = (+calc).toPrecision(9);
  }
}
