let doc = document;

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