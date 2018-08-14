 window.onload = () => { 
  let start = document.getElementById('start');
  start.addEventListener('click', event => {
    location.href ='../views/view2.html';
  })
  let coWorkers = document.getElementById('coWorkers');
  let coVisitors = document.getElementById('coVisitors');
  let cardVisitor = document.getElementById('cardVisitor');
  let cardWorker = document.getElementById('cardWorker');

  coVisitors.addEventListener('click', event =>{
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
  // cardWorker.style.display = 'none'; 
  // cardVisitor.style.display = 'none';

})


coWorkers.addEventListener('click', event => {
firebase.database().ref('Workers').on('child_added', (newWorker) => {
    cardWorker.innerHTML += 
    `<div id="cardPublication-${newWorker.val().workerName}" class="card publication">
    <div  class="card-body">
      <p>${newWorker.val().workerCompany}</p>
      <img id="perrito" src="${newWorker.val().workerPhoto}" alt="">
    </div> 
  </div>`
  })
  // cardVisitor.style.display = 'none';
  // cardWorker.style.display = 'block'; 
 

})

 }
