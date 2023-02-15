// const questions = [
//   {
//     title: "What is your name?",
//     cancel: true,
//   },
//   { title: "Where do you work?" },
//   { title: "What are you doing right now?", cancel: false },
// ];

// const ask = ({ title, cancel }) => {
//   return new Promise((resolve) => {
//     const form = document.createElement("form");

//     form.insertAdjacentHTML(
//       "afterbegin",
//       `<fieldset>
//         <label for"input">${title}</label>
//         <input id="input" type="text" name="input" />
//         <button type="submit">Submit</button>
//       </fieldset>
//     `
//     );

//     if (cancel) {
//       const cancelButton = document.createElement("button");
//       cancelButton.type = "button";
//       cancelButton.textContent = "Cancel";

//       form.appendChild(cancelButton);

//       cancelButton.addEventListener("click", () => {
//         resolve(null);
//         form.remove();
//       });
//     }

//     form.addEventListener(
//       "submit",
//       (event) => {
//         event.preventDefault();

//         const inputValue = event.target.input.value;

//         resolve(inputValue);

//         form.remove();
//       },
//       { once: true }
//     );

//     document.body.appendChild(form);
//   });
// };

// const askMany = async () => {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// };

// askMany();

const form = document.getElementById("form");

const getUploads = () => {
  return form.addEventListener(
    "submit",
    (ev) => {
      ev.preventDefault();

      getBase64(ev.target.file.files[0]);

      ev.target.file.files.length = 0;
    },
    { once: true }
  );
};

const getBase64 = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    console.log("Converting to base 64...");
    console.log(reader.result);
    console.log("Do something with file... For example: send to API");
  };

  reader.onerror = (error) => {
    console.log("Error: ", error);
  };
};
