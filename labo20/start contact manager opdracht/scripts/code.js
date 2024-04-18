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
// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();
    // indien ok, bewaar de ingegeven data.
    let personenHTML = document.getElementById("lstPersonen");
    let errorMessages = document.getElementsByClassName('invalid');
    let indexBestaandPersoon = 0;
    if (errorMessages.length > 0) return;
    let persoon = {
        voornaam: document.getElementById('txtVoornaam').value,
        familienaam: document.getElementById('txtFamilienaam').value,
        geboorteDatum: document.getElementById('txtGeboorteDatum').value,
        email: document.getElementById('txtEmail').value,
        aantalKinderen: document.getElementById('txtAantalKinderen').value
    };
    // een nieuw aangemaakte persoon voegen we toe
    let bestaatPersoon = false;
    for (let i = 0; i < personen.length; i++) {
        if (personen[i].email === persoon.email) {
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
    // een bestaande persoon in de lijst passen we aan
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
    else {
        if((personen[indexBestaandPersoon].voornaam !== persoon.voornaam) || (personen[indexBestaandPersoon].familienaam !== persoon.familienaam)) {
            let changePersoon = personenHTML[indexBestaandPersoon];
            if(personen[indexBestaandPersoon].voornaam !== persoon.voornaam) {
                personen[indexBestaandPersoon].voornaam = document.getElementById('txtVoornaam').value;
                changePersoon.innerText = `${persoon.voornaam}  ${persoon.familienaam}`;
            }
            else {
                personen[indexBestaandPersoon].familienaam = document.getElementById('txtFamilienaam').value;
                changePersoon.innerText = `${persoon.voornaam}  ${persoon.familienaam}`;
            }
        }
        else {
            personen[indexBestaandPersoon].voornaam = document.getElementById('txtVoornaam').value;
            personen[indexBestaandPersoon].familienaam = document.getElementById('txtFamilienaam').value;
            personen[indexBestaandPersoon].geboorteDatum = document.getElementById('txtGeboorteDatum').value;
            personen[indexBestaandPersoon].email = document.getElementById('txtEmail').value;
            personen[indexBestaandPersoon].aantalKinderen = document.getElementById('txtAantalKinderen').value;
        }
    }

};
// Event listener (btnNieuw click)
    const bewerkNieuwePersoon = () => {
        console.log("Klik op de knop nieuw");
        // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
        document.getElementById("txtVoornaam").value = "";
        document.getElementById("txtFamilienaam").value = "";
        document.getElementById("txtGeboorteDatum").value = "";
        document.getElementById("txtEmail").value = "";
        document.getElementById("txtAantalKinderen").value = "";
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
// onze setup functie die de event listeners registreert
    const setup = () => {
        let btnBewaar = document.getElementById("btnBewaar");
        btnBewaar.addEventListener("click", bewaarBewerktePersoon);

        let btnNieuw = document.getElementById("btnNieuw");
        btnNieuw.addEventListener("click", bewerkNieuwePersoon);

        let lstPersonen = document.getElementById("lstPersonen");
        // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
        // moet de data van die persoon getoond worden in het formulier
        lstPersonen.addEventListener('change',klikOptie);
        showList();
    };
    window.addEventListener("load", setup);