const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click",calculate);
}

const calculate = () => {
    let price = document.getElementsByClassName("price");
    let amount = document.getElementsByClassName("amount");
    let Btw = document.getElementsByClassName("btw");
    let subtotal = document.getElementsByClassName("subtotal")
    let total = document.getElementById("total");

    let subtotal1 = ((parseFloat(price[0].textContent))*amount[0].value) + ((parseFloat(price[0].textContent) * amount[0].value) * (parseInt(Btw[0].textContent,10)) / 100);
    let subtotal2 = ((parseFloat(price[1].textContent))*amount[1].value) + ((parseFloat(price[1].textContent) * amount[1].value) * (parseInt(Btw[1].textContent,10)) / 100);
    let subtotal3 = ((parseFloat(price[2].textContent))*amount[2].value) + ((parseFloat(price[2].textContent) * amount[2].value) * (parseInt(Btw[2].textContent,10)) / 100);
    subtotal[0].textContent = subtotal1.toFixed(2) + " Eur";
    subtotal[1].textContent = subtotal2.toFixed(2) + " Eur";
    subtotal[2].textContent = subtotal3.toFixed(2) + " Eur";
    total.textContent = (subtotal1 + subtotal2 + subtotal3).toFixed(2) + " Eur";
}

window.addEventListener("load", setup);