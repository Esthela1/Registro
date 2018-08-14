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
    `<div class="card">
    <div class="card-body">
        <section id="cardVisitor">
        <img class = "fotito" id="perrito" src="${newVisitor.val().visitorPhoto}" alt="">
      <div class= "col-6">
      <p><span class="icon-user3"></span>${newVisitor.val().visitorName}</p>    
      <p><span class="icon-direction"></span> ${newVisitor.val().visitorEmail}</p>
      <p><span class="icon-office"></span>${newVisitor.val().visitorCompany}</p>
      <p><span class="icon-user4"></span>${newVisitor.val().visitorVisit}</p>
      </div>
        </section>
    </div>
</div>`
  })
  // cardWorker.style.display = 'none'; 
  // cardVisitor.style.display = 'none';

})


coWorkers.addEventListener('click', event => {
firebase.database().ref('Workers').on('child_added', (newWorker) => {
    cardWorker.innerHTML += 
    `<div class="card">
    <div class="card-body">
        <section id="cardWorker">
        <img class="fotito" id="perrito" src="${newWorker.val().workerPhoto}" alt="">
      <div class = "col-6"
      <p> <span class="icon-user4"></span> Worker:${newWorker.val().workerName}
      <p><span class="icon-office"></span>Empresa:${newWorker.val().workerCompany}</p>
      </div>
        </section>
    </div>
</div>`   
  })
  // cardVisitor.style.display = 'none';
  // cardWorker.style.display = 'block'; 
 

})

 }
