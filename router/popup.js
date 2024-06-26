/*MAKE LIFE EASIER*/

let doc = document;

/*UPORABNE FUNKCIJE*/

let usePic = 0;

const openPic = (num) => {
    let picBox = document.getElementById("popup");
    let pic = document.getElementById("popItem" + num);
    picBox.style.display = "flex";
    pic.style.display = "block";
    usePic = num;
}

const closePic = () => {
    let picBox = document.getElementById("popup");
    let pic = document.getElementById("popItem" + usePic);
    picBox.style.display = "none";
    pic.style.display = "none";
}

/*IZDELAJ VSEBINO*/

/*Funkcija za izdelavo grida*/
const createArtefactGrid = (contentArr, titleText) => {
    /*naredi h2 element, vanj vstavi kar si poslal v funkcijo kot naslov*/
    let title = doc.createElement("h2");
    title.append(titleText);
    /*izdelaj span element, dodeli mu class*/
    let span = doc.createElement("span");
    span.setAttribute("class", "itemsBox");

    /*vsak element arr pretvori v zapakirano celoto elementov*/
    let spanContent = contentArr.map(
        (el) => {

            let div = doc.createElement("div");
            div.setAttribute("id", `item${el[0]}`)
            div.setAttribute("class", "item");

            let button = doc.createElement("button");
            button.setAttribute("onclick", `openPic(${el[0]})`);

            let img = doc.createElement("img");
            img.setAttribute("id", `image${el[0]}`);
            img.setAttribute("src", el[1])

            button.append(img);
            div.appendChild(button);

            return div;
        });

    /*vsak del arr namesti na grid*/
    spanContent.forEach((el) => span.appendChild(el));
    /*poišči kam želiš dati*/
    let main = doc.getElementsByTagName("main")[0];
    /*vstavi*/
    main.appendChild(title);
    main.appendChild(span);
}

/*SPROŽI NA LOAD*/

/*ko se naloži stran, zaženi izbrano funkcijo*/
/*večina vsebine so samo kaj funkcija želi od teme*/
/*želi 3 stvari, želi id, želi kje najti sliko, oboje v array ker je vsaka slika posamič in želi vedeti naslov vsega skupaj*/
window.onload = createArtefactGrid([
    [1, "../images/items/RingOfSafetyDistance.png"],
    [2, "../images/items/RoyalRoseLongbow.png"],
    [3, "../images/items/VinegraspShield.png"],
    [4, "../images/items/RapidsGlaive.png"],
    [5, "../images/items/ConchShellOfTheMaokah.png"],
    [6, "../images/items/Bailar.png"],
    [7, "../images/items/EchoBracelet.png"],
    [8, "../images/items/LightningStone.png"],
    [9, "../images/items/HelmOfShidin.png"],
    [10, "../images/items/RodOfKadram.png"]
],
    "Season 1 Artefacts");

/*Ista fora, druga vsebina*/
window.onload = createArtefactGrid([
    [11, "../images/items/TormentDagger.png"],
    [12, "../images/items/Hugfish.png"],
    [13, "../images/items/DreadlordsCleaver.png"],
    [14, "../images/items/VeilOfMidnight.png"],
    [15, "../images/items/DemodandTriangleOfAncestralMemory.png"],
    [16, "../images/items/CrystalOfBedlam.png"],
    [17, "../images/items/ShieldOfSlaad.png"],
    [18, "../images/items/ClokworkCrossbow.png"],
],
    "Season 2 Artefacts");