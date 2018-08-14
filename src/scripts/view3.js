  let start = document.getElementById('start');
  start.addEventListener('click', event => {
    location.href ='../index.html';
  })
  let coWorkers = document.getElementById('coWorkers');
  let coVisitors = document.getElementById('coVisitors');
  let cardVisitor = document.getElementById('cardVisitor');
  let cardWorker = document.getElementById('cardWorker');

  coWorkers.addEventListener('click', event =>{
  firebase.database().ref('Visitors').on('child_added', (newVisitor) => { 
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
})


coVisitors.addEventListener('click', event => {
firebase.database().ref('Workers').on('child_added', (newWorker) => {
    cardWorker.innerHTML += 
    `<div id="cardPublication-${newWorker.val().workerName}" class="card publication">
    <div  class="card-body">
      <p>${newWorker.val().workerCompany}</p>
      <img id="perrito" src="${newWorker.val().workerPhoto}" alt="">
    </div> 
  </div>`
  })
})

