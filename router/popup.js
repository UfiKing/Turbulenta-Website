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