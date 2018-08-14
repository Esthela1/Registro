let showCameraW = document.getElementById('showCameraW');
let cameraW = document.getElementById('cameraW');
// formulario de workers
let companyWorker = document.getElementById('companyWorker');
let nameWorker = document.getElementById('nameWorker');
let saveWorker = document.getElementById('saveWorker');
let goHomeW = document.getElementById('goHomeW');
let valuePhotoW;


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
        let perrito2 = perrito.src;
        valuePhotoW=perrito2;
        perrito.style.display = 'none';
        //console.log(perrito2);
        snapshotCanvas.style.display = 'none';
        videoTracks.forEach((track) => {track.stop()});
        player.style.display = 'none';
  });

  navigator.mediaDevices.getUserMedia({video: true})
      .then(handleSuccess);


})

saveWorker.addEventListener('click', event => {
  const valuecompanyW =companyWorker.value;
  const valuenameW = nameWorker.value;
  if (valuecompanyW == '' ||valuenameW == '') {
    containerButton.style.display = "block";
    formWorker.style.display = "none";
    alert('Tu registro NO fue completado, por favor, ingresa todos los datos requeridos');
    } else {
  const  registerWorkerKey = database.ref().child('Trabajadores').push().key;
  let worker = {
    workerName:valuenameW,
    workerCompany:valuecompanyW,
    workerPhoto: valuePhotoW
  }
  database.ref(`Trabajadores/${registerWorkerKey}`).set(worker);
  document.getElementById('companyWorker').value = '';
  document.getElementById('nameWorker').value = '';
  alert('Tu registro fue exitoso')
  location.href = '../index.html'
 }
})
