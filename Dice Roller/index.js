function rollDice(){
    const ndice = document.getElementById("ndice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images = [];


    for(let i=0;i<ndice;i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="die_faces/${value}.png">`);
    }

    console.log(images);
    diceresult.textContent= `dice: ${values.join(`, `)}`;
    diceimages.innerHTML = images.join('');
}