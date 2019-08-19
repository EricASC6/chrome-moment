// Javascript

// Get div with the id of time
const time = document.querySelector('#time h1');


const updateTime = () => {
    const today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    hour = hour > 12 ? hour - 12: hour;

    time.textContent = `${hour}:${addZero(minute)}:${addZero(second)}`;

    setTimeout(updateTime, 1);
}

function addZero(time) {
    time = time < 10 ? `0${time}`: time;
    return time;
}

// Get element with the id of name
const name = document.querySelector('#name');

function displayName() {
    if (localStorage.getItem("name") === null) {
        name.textContent = "[Enter Your Name]";
    } else {
        name.textContent = localStorage.getItem("name");
    }
}

name.addEventListener("blur", storeNameContent);
name.addEventListener("keypress", storeNameContent);

function storeNameContent(e) {
    if (e.keyCode === 13) {
        localStorage.setItem("name", e.target.innerHTML);
        e.target.blur();
    } else if (e.type === 'blur') {
        localStorage.setItem("name", e.target.innerHTML);
    }
}

// Get element with id of focus content
const focusContent = document.querySelector('#focus-content');

function displayFocusContent() {
    if (localStorage.getItem("focus")) {
        focusContent.textContent = localStorage.getItem("focus");
    } else {
        focusContent.textContent = "[Enter your main focus]";
    }
}

focusContent.addEventListener('keypress', storeFocusContent);
focusContent.addEventListener('blur', storeFocusContent);


function storeFocusContent(e) {
    if (e.keyCode === 13) {
        localStorage.setItem("focus", e.target.innerHTML);
        e.target.blur();
    } else if (e.type === 'blur') {
        localStorage.setItem("focus", e.target.innerHTML);
    }
}

// get url of morning, afternoon and evening background
const morning = 'https://acadiamagic.com/1200w/acadia-A3648.jpg';
const afternoon = 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1524519315%2Fyosemite-national-park-NPSUMMEXP0418.jpg%3Fitok%3DjFnLuRTT&q=85';
const evening = 'https://i.dailymail.co.uk/i/pix/2014/12/24/24402E2600000578-0-image-a-9_1419420198741.jpg';

function displayBackground() {
    const today = new Date();
    const hour = today.getHours();
    const body = document.body;

    if (hour < 12) {
        body.style.backgroundImage = `url(${morning})`;
    } else if (hour >= 12 && hour < 18) {
        body.style.backgroundImage = `url(${afternoon})`;
    } else {
        body.style.backgroundImage = `url(${evening})`;
    }
}



// Calling the functions
updateTime();
displayName();
displayBackground();
displayFocusContent();
