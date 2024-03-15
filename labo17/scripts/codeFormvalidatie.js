const setup = () => {
    let btnValideer=document.getElementById("btnValideer");
    btnValideer.addEventListener("click", validate);
};
const validate = () => {
    validateVoornaam();
    validateFamilienaam();
    validateGeboortedatum();
    validateEmail();
    validateAantalKinderen();
    validateProficiat();
};
const validateVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        txtVoornaam.className="invalid";
        errVoornaam.innerHTML = "max. 30 karakters";
    } else {
        txtVoornaam.className="";
        errVoornaam.innerHTML = "";
    }
};
const validateFamilienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let errFamilienaam = document.getElementById("errFamilienaam");
    let familienaam = txtFamilienaam.value.trim();

    if(familienaam.length === 0){
        txtFamilienaam.className="invalid";
        errFamilienaam.innerHTML="verplicht veld";
    }
    else if(familienaam.length > 50){
        txtFamilienaam.className = "invalid";
        errFamilienaam.innerHTML= "max 50 karakters";
    }
    else {
        txtFamilienaam.className = "";
        errFamilienaam.innerHTML = "";
    }
};
const validateGeboortedatum = () => {
    let txtDatum = document.getElementById("txtGeboortedatum");
    let errDatum = document.getElementById("errGeboortedatum");
    let datum = txtDatum.value.trim();
    let syntax = /^\d{4}-\d{2}-\d{2}$/;

    if(datum.length === 0){
        txtDatum.className = "invalid";
        errDatum.innerHTML = "verplicht veld";
    }
    else if(!syntax.test(datum)){
        txtDatum.className = "invalid";
        errDatum.innerHTML = "formaat is niet jjjj-mm-dd";
    }
    else {
        txtDatum.className = "";
        errDatum.innerHTML = "";
    }
};
const validateEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();

    if(email.length === 0){
        txtEmail.className = "invalid";
        errEmail.innerHTML = "verplicht veld";
    }
    else if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        txtEmail.className = "invalid";
        errEmail.innerHTML = "geen geldig email adress";
    }
    else {
        txtEmail.className = "";
        errEmail.innerHTML = "";
    }
};
const validateAantalKinderen = () => {
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    let errAantalKinderen = document.getElementById("errAantalKinderen");
    let aantalKinderen = txtAantalKinderen.value.trim();

    if(!isNaN(aantalKinderen)){
        if(aantalKinderen > 98){
            txtAantalKinderen.className = "invalid";
            errAantalKinderen.innerHTML = "is te vruchtbaar";
        }
        else if(aantalKinderen < 0){
            txtAantalKinderen.className = "invalid";
            errAantalKinderen.innerHTML = "is geen positief getal"
        }
        else {
            txtAantalKinderen.className = "";
            errAantalKinderen.innerHTML = "";
        }
    }
};
const validateProficiat = () => {
    let invalids = document.getElementsByClassName("invalid");
    if(invalids.length === 0){
        window.alert("Proficiat!")
    }
};
window.addEventListener("load", setup);