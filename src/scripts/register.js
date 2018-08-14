const redirectIndex = () =>{
  location.href = '../index.html'
}

homePage.addEventListener('click', redirectIndex);
endRegister.addEventListener('click', redirectIndex);

visitor.addEventListener('click', event => {
  containerButton.style.display = "none";
  formVisit.style.display = "block";
});

worker.addEventListener('click', event => {
 location.href = '../views/vieworkers.html'
});

goHomeV.addEventListener('click', event => {
  containerButton.style.display = "block";
  formVisit.style.display = "none";
});


showCamera.addEventListener('click', event => {
  camera.style.display = 'block';
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
        valuePhotoV = perrito2;
        perrito.style.display = 'none';
        //console.log(valuePhotoV);
        snapshotCanvas.style.display = 'none';
        videoTracks.forEach((track)=> {track.stop()});
        player.style.display = 'none';

  });

  navigator.mediaDevices.getUserMedia({video: true})
})

const createVisitor = () => {
  const valueCompanyV = companyVisit.value;
  const valueNameV = nameVisitor.value;
  const valueWhoV = whoVisit.value;
  const valueEmailV = emailVisit.value;
  if (valueCompanyV == '' || valueEmailV == '' || valueNameV == '' || valueWhoV == '') {    
    containerButton.style.display = "block";
    formVisit.style.display = "none";
    alert('Tu registro NO fue completado, por favor, ingresa todos los datos requeridos');
    } else {
  const registerVisitorKey = baseDeDatos.ref().child('Visitors').push().key;
  let visitor = {
    visitorName:valueNameV,
    visitorEmail:valueEmailV,
    visitorCompany:valueCompanyV,
    visitorVisit:valueWhoV,
    visitorPhoto: valuePhotoV

  };
  baseDeDatos.ref(`Visitors/${registerVisitorKey}`).set(visitor);
    document.getElementById('companyVisit').value = '';
    document.getElementById('nameVisitor').value = '';
    document.getElementById('whoVisit').value = '';
    document.getElementById('emailVisit').value = '';
    document.getElementById('saveVisitor').value = '';
   containerButton.style.display = "block";
   formVisit.style.display = "none";
  alert('Tu registro fue exitoso, espera un momento por favor');
};
};
saveVisitor.addEventListener('click', () => {
  createVisitor();
  // redirectIndex();
});
