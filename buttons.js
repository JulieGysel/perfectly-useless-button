function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

function setPosition(el, top, left) {
    el.style.position = "absolute";
    el.style.top = `${top}px`;
    el.style.left = `${left}px`;

    console.log({ position: el.style.position, top: el.style.top, left: el.style.left });
}

var border = 100;
var width = window.innerWidth - border;
var heigth = window.innerHeight - border;

var button = document.getElementsByTagName("button")[0];
var posX = getOffset(button).left;
var posY = getOffset(button).top;

// setPosition(button, posY - 100, posX - 100);

function moveButton() {
    console.log(button, posX, posY);

    var newY = getRandom(border, heigth);
    var newX = getRandom(border, width);
    console.log(newX, newY);


    setTimeout(
        () => setPosition(button, newY, newX),
        // 100
        0
    );
}
