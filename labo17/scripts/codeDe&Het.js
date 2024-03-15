const setup = () => {
   let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
   let zinInWoorden = zin.toLowerCase().split(' ');
   for(let i = 0; i < zinInWoorden.length; i++){
      if(zinInWoorden[i] === "de"){
         zinInWoorden[i] = "het";
      }
   }
   let mooieString = zinInWoorden.join('  ').trim();
   console.log(mooieString);
}
window.addEventListener("load", setup);