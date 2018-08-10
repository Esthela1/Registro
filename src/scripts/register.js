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
