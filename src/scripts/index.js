singIn.addEventListener('click', event => {
  buttonsInit.style.display = 'none';
  formAdmin.style.display = 'block';  
})

goHome.addEventListener('click', event => {
  buttonsInit.style.display = 'block';
  formAdmin.style.display = 'none';
});

openPage.addEventListener('click', event => {
  if (adminMail.value == "worker@mail.com" && adminPassword.value == "123456") {
    location.href = 'views/view2.html';
  }else {
    adminMail.value = '';
    adminPassword.value = '';
    alert('Discula las molestias NO eres un administrador');
    buttonsInit.style.display = 'block';
    formAdmin.style.display = 'none';
  }
})

initFastAccess.addEventListener('click', event => {
  location.href = 'views/view1.html'
})