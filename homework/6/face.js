const WIDTH = 1280;
const HEIGHT = 720;

const video = document.getElementById("webcam");

const videoCanvas = document.getElementById("video");
const videoCanvasCtx = videoCanvas.getContext("2d");

const faceCanvas = document.getElementById("face");
const faceCanvasCtx = faceCanvas.getContext("2d");

const faceDetector = new FaceDetector();

const connectToWebCam = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      width: WIDTH,
      height: HEIGHT,
    },
  });

  videoCanvas.width = WIDTH;
  videoCanvas.height = HEIGHT;

  faceCanvas.width = WIDTH;
  faceCanvas.height = HEIGHT;

  video.srcObject = stream;

  await video.play();
};

const censor = (boundingBox) => {
  faceCanvasCtx.imageSmoothingEnabled = false;

  faceCanvasCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);

  // draw the small face
  faceCanvasCtx.drawImage(
    // 5 source args
    video, // where does the source come from?
    boundingBox.x, // where do we start the source pull from?
    boundingBox.y,
    boundingBox.width,
    boundingBox.height,
    // 4 draw args
    boundingBox.x, // where should we start drawing the x and y?
    boundingBox.y,
    10,
    10
  );
  // take that face back out and draw it back normal size
  // draw the small face back on, but scaled up
  const width = boundingBox.width;
  const height = boundingBox.height;
  faceCanvasCtx.drawImage(
    faceCanvas, // source
    boundingBox.x, // where do we start the source pull from?
    boundingBox.y,
    10,
    10,
    //drawing args
    boundingBox.x,
    boundingBox.y,
    width,
    height
  );
};

const draw = ({ boundingBox: { left, top, width, height } }) => {
  videoCanvasCtx.lineWidth = 2;
  videoCanvasCtx.strokeStyle = "#ffc600";

  videoCanvasCtx.clearRect(0, 0, videoCanvas.width, videoCanvas.height);
  censor(boundingBox);
  videoCanvasCtx.strokeRect(left, top, width, height);
};

const detect = async () => {
  const faces = await faceDetector.detect(video);
  faces.forEach((face) => draw(face));
  requestAnimationFrame(detect);
};

connectToWebCam().then(detect).catch(console.error);
