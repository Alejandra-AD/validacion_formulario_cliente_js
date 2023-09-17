
const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;



formulario.addEventListener('submit', e => {
   e.preventDefault(); //detiene lo que hace el navegador por defecto
   console.log(userName.value);
  //validando user name con js
  if(!regUserName.test(userName.value)) {
    console.log("formato no válido")
    return;
  }

  console.log(userEmail.value);

   // devuelve true o false
 if (!regUserEmail.test(userEmail.value)) {
    console.log("formato no váilido");
    return;
}
console.log(userEmail.value);


});