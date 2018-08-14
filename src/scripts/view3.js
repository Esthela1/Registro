let start = document.getElementById('start');
  start.addEventListener('click', event => {
    location.href ='../index.html';
  })
  let cardVisitor = document.getElementById('cardVisitor');
  let cardWorker = document.getElementById('cardWorker');
  const allVisitors = () => {
  firebase.database().ref('Visitantes').on('child_added', (newVisitor) => {
    cardVisitor.innerHTML +=
    `<div id="cardPublication-${newVisitor.val().visitorName}" class="card publication">
    <div  class="card-body">
      <p>${newVisitor.val().visitorEmail}</p>
      <p>${newVisitor.val().visitorCompany}</p>
      <p>${newVisitor.val().visitorVisit}</p>
      <img id="perrito" src="${newVisitor.val().visitorPhoto}" alt="">
    </div>
  </div>`
  })
  }

  const allWorkers = () => {
  firebase.database().ref('Trabajadores').on('child_added', (newWorker) => {
    cardWorker.innerHTML +=
    `<div id="cardPublication-${newWorker.val().workerName}" class="card publication">
    <div  class="card-body">
      <p>${newWorker.val().workerCompany}</p>
      <img id="perrito" src="${newWorker.val().workerPhoto}" alt="">
    </div>
  </div>`
  })
  }

  window.onload = allVisitors(), allWorkers();
