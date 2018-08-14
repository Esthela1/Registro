let showCameraW = document.getElementById('showCameraW');
let cameraW = document.getElementById('cameraW');
// formulario de workers
let companyWorker = document.getElementById('companyWorker');
let nameWorker = document.getElementById('nameWorker');
let saveWorker = document.getElementById('saveWorker');
// variables para Firebase
let database = firebase.database(); // base de datos en tiempo real
let storage = firebase.storage(); // base de datos para archivos
let goHomeW = document.getElementById('goHomeW');


goHomeW.addEventListener('click', event => {
 location.href = '../index.html'
});

showCameraW.addEventListener('click', event => {
  cameraW.style.display = 'block';
  let player = document.getElementById('player');
  let snapshotCanvas = document.getElementById('snapshot');
  let captureButton = document.getElementById('capture');
  let perrito = document.getElementById('perrito');
  let videoTracks;

  const handleSuccess = (stream) => {
    // Attach the video stream to the video element and autoplay.
    player.srcObject = stream;
    videoTracks = stream.getVideoTracks();

  };

  captureButton.addEventListener('click', () => {
    let context = snapshot.getContext('2d');
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, snapshotCanvas.width,
        snapshotCanvas.height);
        perrito.setAttribute('src', snapshotCanvas.toDataURL('image/png'));
        snapshotCanvas.style.display = 'none';
        videoTracks.forEach((track) => {track.stop()});
        player.style.display = 'none';
  });

  navigator.mediaDevices.getUserMedia({video: true})
      .then(handleSuccess);
})
