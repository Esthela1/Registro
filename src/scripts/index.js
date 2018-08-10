singIn.addEventListener('click', event => {
  buttonsInit.style.display = 'none';
  formAdmin.style.display = 'block';  
})
openPage.addEventListener('click', event => {
  if (adminMail.value == "worker@mail.com" && adminPassword.value == "123456") {
    window.location.href = 'views/view2.html';
  }else {
    adminMail.value = '';
    adminPassword.value = '';
    alert('Discula las molestias NO eres un administrador');
    buttonsInit.style.display = 'block';
    formAdmin.style.display = 'none';
  }
})
initFastAccess.addEventListener('click', event => {
  window.location.href = 'views/view1.html'
})