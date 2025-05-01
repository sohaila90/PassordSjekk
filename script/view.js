updateView();
function updateView() {
    app.innerHTML = /*html*/`
    <h1>Passordsjekk</h1>
    <h3>Skriv inn et passord</h3>
   <input onchange="writePassword(this.value)" type="text">
   <button onclick="passwordBtn()">Sjekk</button>
   <h3>${message}</h3>
   
    `;
}