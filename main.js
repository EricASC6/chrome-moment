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

// Get element with id of focus content
const focusContent = document.querySelector('#focus-content');

function displayFocusContent() {
    if (localStorage.getItem("focus")) {
        focusContent.textContent = localStorage.getItem("focus");
    } else {
        focusContent.textContent = "";
    }
}

focusContent.addEventListener('keypress', storeFocusContent);
focusContent.addEventListener('blur', storeFocusContent)

function storeFocusContent(e) {
    if (e.keyCode === 13) {
        localStorage.setItem("focus", e.target.innerHTML);
        e.target.blur();
    } else if (e.type === 'blur') {
        localStorage.setItem("focus", e.target.innerHTML);
    }
}




// Calling the functions
updateTime();
displayFocusContent();
