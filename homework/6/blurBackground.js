const videoElement = document.getElementById("video");
const canvas = document.getElementById("canvas");

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const blurBtn = document.getElementById("blur-btn");
const unblurBtn = document.getElementById("unblur-btn");

startBtn.addEventListener("click", (e) => {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  unblurBtn.disabled = false;
  blurBtn.disabled = false;

  startVideoStream();
});

stopBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  unblurBtn.disabled = true;
  blurBtn.disabled = true;

  unblurBtn.hidden = true;
  blurBtn.hidden = false;

  videoElement.hidden = false;
  canvas.hidden = true;

  stopVideoStream();
});

blurBtn.addEventListener("click", () => {
  blurBtn.hidden = true;
  unblurBtn.hidden = false;

  videoElement.hidden = true;
  canvas.hidden = false;

  loadBodyPix();
});

unblurBtn.addEventListener("click", () => {
  blurBtn.hidden = false;
  unblurBtn.hidden = true;

  videoElement.hidden = false;
  canvas.hidden = true;
});

videoElement.onplaying = () => {
  canvas.height = videoElement.videoHeight;
  canvas.width = videoElement.videoWidth;
};

const startVideoStream = () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      videoElement.srcObject = stream;
      videoElement.play();
    })
    .catch((err) => {
      startBtn.disabled = false;
      blurBtn.disabled = true;
      stopBtn.disabled = true;
      alert(`Что-то не так со стримом: ${err}`);
    });
};

const stopVideoStream = () => {
  const stream = videoElement.srcObject;

  stream.getTracks().forEach((track) => track.stop());
  videoElement.srcObject = null;
};

const loadBodyPix = () => {
  options = {
    multiplier: 0.75,
    stride: 32,
    quantBytes: 4,
  };
  bodyPix
    .load(options)
    .then((net) => perform(net))
    .catch((err) => console.log(err));
};

const perform = async (net) => {
  while (startBtn.disabled && blurBtn.hidden) {
    const segmentation = await net.segmentPerson(video);

    const backgroundBlurAmount = 10;
    const edgeBlurAmount = 2;
    const flipHorizontal = true;

    bodyPix.drawBokehEffect(
      canvas,
      videoElement,
      segmentation,
      backgroundBlurAmount,
      edgeBlurAmount,
      flipHorizontal
    );
  }
};
