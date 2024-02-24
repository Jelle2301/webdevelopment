const namen = ['Jens','Klaas','Jan','Dries','Rob'];
console.log(namen);
console.log(namen[0],namen[2],namen[4]);
function VoegNaamToe() {
    const result = prompt('Wat is uw je naam ?');
    namen.push(result);
}
VoegNaamToe();
console.log(namen);

const familie = 'Mijn familie bestaat uit ' + namen;
console.log(familie);
