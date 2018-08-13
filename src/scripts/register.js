homePage.addEventListener('click', event =>{
  location.href = '../index.html'
});

visitor.addEventListener('click', event => {
  containerButton.style.display = "none";
  formVisit.style.display = "block";
});

worker.addEventListener('click', event => {
  containerButton.style.display = "none";
  formWorker.style.display = "block";
});

goHomeV.addEventListener('click', event => {
  containerButton.style.display = "block";
  formVisit.style.display = "none";
});

goHomeW.addEventListener('click', event => {
  containerButton.style.display = "block";
  formWorker.style.display = "none";
});

showCamera.addEventListener('click', event => {
  camera.style.display = 'block';
  let player = document.getElementById('player');
  let snapshotCanvas = document.getElementById('snapshot');
  let captureButton = document.getElementById('capture');
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
        videoTracks.forEach(function(track) {track.stop()});
        player.style.display = 'none';

  });

  navigator.mediaDevices.getUserMedia({video: true})
      .then(handleSuccess);
    
  
      saveVisitor.addEventListener('click', event => {
        const valueCompanyV = companyVisit.value;
        const valueNameV = nameVisitor.value;
        const valueWhoV = whoVisit.value;
        const valueEmailV = emailVisit.value;
        if (valueCompanyV == '' || valueEmailV == '' || valueNameV == '' || valueWhoV == '') {    
          containerButton.style.display = "block";
          formVisit.style.display = "none";
          alert('Tu registro NO fue completado, por favor, ingresa todos los datos requeridos');
          } else {
        const registerVisitorKey = database.ref().child('Visitors').push().key;
        let visitor = {
          visitorName:valueNameV,
          visitorEmail:valueEmailV,
          visitorCompany:valueCompanyV,
          visitorVisit:valueWhoV
        };
        database.ref(`Visitors/${registerVisitorKey}`).set(visitor);
          document.getElementById('companyVisit').value = '';
          document.getElementById('nameVisitor').value = '';
          document.getElementById('whoVisit').value = '';
          document.getElementById('emailVisit').value = '';
          document.getElementById('saveVisitor').value = '';
         containerButton.style.display = "block";
         formVisit.style.display = "none";
      };
      });
  
})

showCameraW.addEventListener('click', event => {
  cameraW.style.display = 'block';
  let playerW = document.getElementById('playerW');
  let snapshotCanvasW = document.getElementById('snapshotW');
  let captureButtonW = document.getElementById('captureW');
  let videoTracksW;


  const handleSuccess = (stream) => {
    // Attach the video stream to the video element and autoplay.
    playerW.srcObject = stream;
    videoTracksW = stream.getVideoTracks();

  };

  captureButtonW.addEventListener('click', () => {
    let contextW = snapshot.getContext('2d');
    // Draw the video frame to the canvas.
    contextW.drawImage(playerW, 0, 0, snapshotCanvasW.width,
        snapshotCanvasW.height);
        videoTracksW.forEach(function(track) {track.stop()});
        
  });

  navigator.mediaDevices.getUserMedia({video: true})
      .then(handleSuccess);
saveWorker.addEventListener('click', event => {
  const valuecompanyW =companyWorker.value;
  const valuenameW = nameWorker.value;
  if (valuecompanyW == '' ||valuenameW == '') {
    containerButton.style.display = "block";
    formWorker.style.display = "none";
    alert('Tu registro NO fue completado, por favor, ingresa todos los datos requeridos');
    } else {
  const  registerWorkerKey = database.ref().child('Visitors').push().key;
  let worker = {
    workerName:valuenameW,
    workerCompany:valuecompanyW
  };
  database.ref(`Workers/${registerWorkerKey}`).set(worker);
  document.getElementById('companyWorker').value = '';
  document.getElementById('nameWorker').value = '';
  containerButton.style.display = "block";
  formWorker.style.display = "none";
 };
});
    
  
     

})


