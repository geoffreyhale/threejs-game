const userInput = {
    keysDown: [],
    mouse: {
        // buttons: [],
        clientX: null,
        clientY: null,
        // screenX: null,
        // screenY: null,
    }
};

document.onkeydown = function (e) {
    userInput.keysDown.indexOf(e.keyCode) === -1 && userInput.keysDown.push(e.keyCode);
};

document.onkeyup = function (e) {
    userInput.keysDown.indexOf(e.keyCode) !== -1 && userInput.keysDown.splice(userInput.keysDown.indexOf(e.keyCode));
};

const handleMouseMove = (e) => {
    // userInput.mouse.buttons = e.buttons;
    userInput.mouse.clientX = e.clientX;
    userInput.mouse.clientY = e.clientY;
    // userInput.mouse.screenX = e.screenX;
    // userInput.mouse.screenY = e.screenY;
};

document.addEventListener('mousemove', handleMouseMove);