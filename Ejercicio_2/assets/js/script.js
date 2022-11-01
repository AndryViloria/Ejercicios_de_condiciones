const mensaje = document.getElementById("mensj");

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {

    const sticker_1 = document.getElementById("sticker1").value;
    const sticker_2 = document.getElementById("sticker2").value;
    const sticker_3 = document.getElementById("sticker3").value;
    

    const total = Number(sticker_1) + Number(sticker_2) + Number(sticker_3);

    if (total <=10){
        mensj.innerHTML= "Llevas " + total + " stickers";
    } else {
        mensj.innerHTML= 'Llevas muchos stickers';
    }
});