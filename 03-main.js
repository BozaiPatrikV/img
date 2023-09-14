function villanykortefelkapcsol(){
    const csere = document.getElementById("csere");
    csere.setAttribute("src", "pic_bulbon.gif");
}

function villanykortelekapcsol(){
    const csere = document.getElementById("csere");
    csere.setAttribute("src", "pic_bulboff.gif");
}

function bevitelFocus(){
    console.log("Belekattintott a beviteli mezőbe!")
}

function bevitelBlur(){
    const bevtel = document.getElementById("bevitel")
    const beirtErtek = bevtel.value;
    console.log("Mezőbe Írt érték:", beirtErtek);
}

function bevitelInput(){
    const bekezdes = document.getElementById("uzenet");
    bekezdes.innerHTML = "Nyisd meg a consolt! (ctrl+shift+i)";
}

function uzenetPiros(){
    const uzenet = document.getElementById("uzenet")
    uzenet.style.color = "red";
    uzenet.style.backgroundColor ="#AAAAAA";
}
