let visitor = document.getElementById('visitors');
let worker = document.getElementById('workers');
let containerButton = document.getElementById('containerButton');
let formVisit = document.getElementById('formVisit');
let formWorker = document.getElementById('formWorker');
let saveWorker = document.getElementById('saveWorker');
let saveVisitor = document.getElementById('saveVisitor');

visitor.addEventListener('click', event => {
  containerButton.style.display = "none";
  formVisit.style.display = "block";


})
worker.addEventListener('click', event => {
  containerButton.style.display = "none";
  formWorker.style.display = "block";

})
saveWorker.addEventListener('click', event => {
  location.href = './index.html'
})
saveVisitor.addEventListener('click', event => {
  location.href = './index.html'
})
