let personen = [];
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
        personenHTML.innerHTML = `<option value="${persoon.voornaam}  ${persoon.familienaam}">${persoon.voornaam}  ${persoon.familienaam}</option>`;
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

// onze setup functie die de event listeners registreert
    const setup = () => {
        let btnBewaar = document.getElementById("btnBewaar");
        btnBewaar.addEventListener("click", bewaarBewerktePersoon);

        let btnNieuw = document.getElementById("btnNieuw");
        btnNieuw.addEventListener("click", bewerkNieuwePersoon);

        let lstPersonen = document.getElementById("lstPersonen");
        // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
        // moet de data van die persoon getoond worden in het formulier
    };

    window.addEventListener("load", setup);