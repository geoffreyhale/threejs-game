const Overlay = (function() {
    let el = {};

    return {
        init: () => {
            el = document.getElementById("overlay");
        },

        update: (camera) => {
            el.innerHTML = "XYZ " + camera.position.x + " " + camera.position.y + " " + camera.position.z;
        },
    };
}());