let personen=[
    {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: new Date('2010-10-10'),
        email: 'jan@example.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }
];
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    valideer();
    let personenHTML = document.getElementById("lstPersonen");
    let errorMessages = document.getElementsByClassName('invalid');
    let indexBestaandPersoon = 0;
    if (errorMessages.length > 0) return;
    let persoon = {
        voornaam: document.getElementById('txtVoornaam').value,
        familienaam: document.getElementById('txtFamilienaam').value,
        geboorteDatum: new Date (document.getElementById('txtGeboorteDatum').value),
        email: document.getElementById('txtEmail').value,
        aantalKinderen: document.getElementById('txtAantalKinderen').value
    };
    let bestaatPersoon = false;
    for (let i = 0; i < personen.length; i++) {
        if (personenHTML.selectedIndex > -1) {
            bestaatPersoon = true;
            indexBestaandPersoon = i;
        }
    }
    if (!bestaatPersoon) {
        personen.push(persoon);
        let option = document.createElement("option");
        option.textContent = persoon.voornaam + ' ' + persoon.familienaam;
        option.value = persoon.voornaam + ' ' + persoon.familienaam;
        personenHTML.appendChild(option);
    }
    else {
        let options = document.querySelectorAll("option");
        if(options[personenHTML.selectedIndex].textContent !== (persoon.voornaam + ' ' + persoon.familienaam)){
            options[personenHTML.selectedIndex].textContent = persoon.voornaam + ' ' + persoon.familienaam;
            personen[indexBestaandPersoon].voornaam = persoon.voornaam;
            personen[indexBestaandPersoon].familienaam = persoon.familienaam;
        }
        personen[indexBestaandPersoon].geboorteDatum = persoon.geboorteDatum;
        personen[indexBestaandPersoon].email = persoon.email;
        personen[indexBestaandPersoon].aantalKinderen = persoon.aantalKinderen;
    }
};
const bewerkNieuwePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen").options;
    console.log("Klik op de knop nieuw");
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    for(let i = 0; i < lstPersonen.length; i++){
        lstPersonen[i].selected = false;
    }
};
const klikOptie = (event) => {
    let persoon = event.target.selectedIndex;
    document.getElementById("txtVoornaam").value = personen[persoon].voornaam;
    document.getElementById("txtFamilienaam").value = personen[persoon].familienaam;
    document.getElementById("txtGeboorteDatum").value = personen[persoon].geboorteDatum.toLocaleDateString('en-CA');
    document.getElementById("txtEmail").value = personen[persoon].email;
    document.getElementById("txtAantalKinderen").value = personen[persoon].aantalKinderen;
}
const showList = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    for(let i = 0; i < personen.length; i++){
        let option = document.createElement("option");
        option.textContent = personen[i].voornaam + ' ' + personen[i].familienaam;
        option.value = personen[i].voornaam + ' ' + personen[i].familienaam;
        lstPersonen.appendChild(option);
    }
}
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);
    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener('change',klikOptie);
    showList();
};
window.addEventListener("load", setup);