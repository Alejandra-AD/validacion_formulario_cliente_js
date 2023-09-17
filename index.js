
const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const alertName = document.getElementById('alertName');
const alertEmail = document.getElementById('alertEmail');
const alertSuccess = document.getElementById('alertSuccess');


formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //detiene lo que hace el navegador por defecto
    console.log(userName.value);
    //validando user name con js
    if (!regUserName.test(userName.value) || !userName.value.trim()){
        console.log("formato no válido name");
        // pintarAlertaName();
        return;
    }

    console.log(userEmail.value);

    // devuelve true o false
    if (!regUserEmail.test(userEmail.value)||!userEmail.value.trim()) {
        console.log("formato no váilido email");
        // pintarAlertaEmail();
        return;
    }
    console.log(userEmail.value);

    pintarMensajeExito();

});


// const pintarAlertaName = () => {

//     alertName.classList.remove("d-none");

// }
// const pintarAlertaEmail = () => {


//     alertEmail.classList.remove("d-none");


// }

const pintarMensajeExito = () => {


    alertSuccess.classList.remove("d-none");

}