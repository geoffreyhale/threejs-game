const KEYS = {
    "W": 87,
    "A": 65,
    "S": 83,
    "D": 68,
    "R": 82,
    "UP": 38,
    "DOWN": 40,
    "LEFT": 37,
    "RIGHT": 39,
};

const keysDown = [];

document.onkeydown = function (e) {
    keysDown.indexOf(e.keyCode) === -1 && keysDown.push(e.keyCode);
};

document.onkeyup = function (e) {
    keysDown.indexOf(e.keyCode) !== -1 && keysDown.splice(keysDown.indexOf(e.keyCode));
};