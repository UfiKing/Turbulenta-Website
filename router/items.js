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

const createBanner = (content) => {

    const span = doc.createElement("span");
    span.setAttribute("class", "bannerBox");

    const title = doc.createElement("h1");
    title.append(content.title);

    const text = doc.createElement("p");
    text.setAttribute("class", "bannerText");
    text.append(content.text);

    const img = doc.createElement("img");
    img.setAttribute("class", "bannerImg");
    img.setAttribute("src", content.imgSrc);
    img.setAttribute("alt", "Banner");

    span.appendChild(title);
    span.appendChild(text);
    span.appendChild(img);

    const main = doc.getElementsByTagName("main")[0];
    main.appendChild(span);

}

const createArtefactGrid = (content) => {
    /*naredi h2 element, vanj vstavi kar si poslal v funkcijo kot naslov*/
    const title = doc.createElement("h2");
    title.append(content.title);
    /*izdelaj span element, dodeli mu class*/
    const span = doc.createElement("span");
    span.setAttribute("class", "itemsBox");

    /*vsak element arr pretvori v zapakirano celoto elementov*/
    const spanContent = content.artefacts.map(
        (el) => {

            const button = doc.createElement("button");
            button.setAttribute("id", `item${el.id}`)
            button.setAttribute("class", "item");
            button.setAttribute("onclick", `openPic(${el.id})`);

            const img = doc.createElement("img");
            img.setAttribute("id", `image${el.id}`);
            img.setAttribute("src", el.src);
            img.setAttribute("alt", "Artefact");

            button.append(img);

            return button;
        });

    /*vsak del arr namesti na grid*/
    spanContent.forEach((el) => span.appendChild(el));
    /*poišči kam želiš dati*/
    const main = doc.getElementsByTagName("main")[0];
    /*vstavi*/
    main.appendChild(title);
    main.appendChild(span);

}

/*SPROŽI NA LOAD*/

window.onload = createBanner({
    title: "Artefacts",
    text: "Items in the Hall of Artifacts.",
    imgSrc: "../images/kat.png"
})

window.onload = createArtefactGrid({
    title: "Season 1",
    artefacts: [
        { id: 1, src: "../images/items/RingOfSafetyDistance.png" },
        { id: 2, src: "../images/items/RoyalRoseLongbow.png" },
        { id: 3, src: "../images/items/VinegraspShield.png" },
        { id: 4, src: "../images/items/RapidsGlaive.png" },
        { id: 5, src: "../images/items/ConchShellOfTheMaokah.png" },
        { id: 6, src: "../images/items/Bailar.png" },
        { id: 7, src: "../images/items/EchoBracelet.png" },
        { id: 8, src: "../images/items/LightningStone.png" },
        { id: 9, src: "../images/items/HelmOfShidin.png" },
        { id: 10, src: "../images/items/RodOfKadram.png" }
    ]
});

window.onload = createArtefactGrid({
    title: "Season 2",
    artefacts: [
        { id: 11, src: "../images/items/TormentDagger.png" },
        { id: 12, src: "../images/items/Hugfish.png" },
        { id: 13, src: "../images/items/DreadlordsCleaver.png" },
        { id: 14, src: "../images/items/VeilOfMidnight.png" },
        { id: 15, src: "../images/items/DemodandTriangleOfAncestralMemory.png" },
        { id: 16, src: "../images/items/CrystalOfBedlam.png" },
        { id: 17, src: "../images/items/ShieldOfSlaad.png" },
        { id: 18, src: "../images/items/ClokworkCrossbow.png" },
    ]
});