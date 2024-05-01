const setup = () => {
    let btnGo = document.getElementById('search');
    btnGo.addEventListener('click', search);
    loadFromLocalStorage();
}
const search = () => {
    let searchInput = document.getElementById('commando').value.trim();
    let searchCommand = searchInput.substring(0,2);
    let searchTarget = searchInput.substring(2);
    searchTarget.replace(" ", "+");
    if(searchCommand.substring(0,1) !== '/') return window.alert('Invalid command');
    let link = "";
    let historyObject = null;
    switch(searchCommand) {
        case "/g":
            link = `https://www.google.com/search?q=${searchTarget}`;
             historyObject = {
                site: 'Google',
                text: searchTarget,
                link: link
            };
            break;
        case "/y":
            link = `https://www.youtube.com/results?search_query=${searchTarget}`;
            historyObject = {
                site: 'Youtube',
                text: searchTarget,
                link: link
            };
            break;
        case "/t":
            link = `https://twitter.com/hashtag/${searchTarget}`;
            historyObject = {
                site: 'Twitter',
                text: searchTarget,
                link: link
            }
            break;
        case "/i":
            link = `https://www.instagram.com/explore/tags/${searchTarget}/`;
            historyObject = {
                site: 'Instagram',
                text: searchTarget,
                link: link
            }
            break;
        default:
            window.alert('Unknown command prefix');
    }
    if(historyObject !== null){
        window.open(link)
        makeCard(historyObject.site,historyObject.text,historyObject.link);
    }
}
const cardGo = (event) => {
    window.open(event.currentTarget.getAttribute('data-link'));
}
const makeCard = (site,text,link) => {
    let containerRow = document.getElementsByClassName("row")[0];
    let h1 = document.createElement("h1");
    h1.textContent = site;
    let p = document.createElement("p");
    p.textContent = text;

    let buttonGo = document.createElement("button");
    buttonGo.textContent= 'Go!';
    buttonGo.setAttribute('value','Go!');
    buttonGo.classList.add('btnGo');
    buttonGo.setAttribute('data-link',link);
    buttonGo.addEventListener('click',cardGo);

    let cardBody = document.createElement("div");
    cardBody.className = "cardBody";
    cardBody.appendChild(h1);
    cardBody.appendChild(p);
    cardBody.appendChild(buttonGo);

    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-3");
    card.setAttribute('data-link', link);
    card.setAttribute('data-text',text);
    card.setAttribute('data-site', site);
    card.appendChild(cardBody);
    switch(site){
        case 'Google':
            card.classList.add("google");
            break;
        case 'Twitter':
            card.classList.add("twitter");
            break;
        case 'Instagram':
            card.classList.add("instagram");
            break;
        case 'Youtube':
            card.classList.add("youtube");
            break;
    }
    containerRow.appendChild(card);

    let searchBar = document.getElementById('commando');
    searchBar.value = '';
    saveToLocalStorage();
}
const saveToLocalStorage = () => {
    let savedCards = [];
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        let saveCard = {
            site: card.getAttribute('data-site'),
            text: card.getAttribute('data-text'),
            link: card.getAttribute('data-link')
        };
        savedCards.push(saveCard);
    });
    localStorage.setItem("savedCards", JSON.stringify(savedCards));
}
const loadFromLocalStorage = () => {
    let jsonSavedCards = localStorage.getItem("savedCards");
    if(jsonSavedCards){
        JSON.parse(jsonSavedCards).forEach(savedCard => {
            makeCard(savedCard.site,savedCard.text,savedCard.link);
        });
    }
}
window.addEventListener("load", setup);