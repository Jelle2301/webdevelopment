const setup = () => {
    program1();
    program2();
}

const program1 = () => {
    let student= {
        voornaam : "Jan",
        familienaam : "Janssens",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993-12-31"),
        adres : {
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"],
        aantalAutos : 2
    };
    let text = JSON.stringify(student);
    console.log(text);
}

const program2 = () => {
    let student = JSON.parse('{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}');
    console.log(student.geboorteDatum);
}
window.addEventListener("load", setup);