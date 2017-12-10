const Overlay = (function () {
    let el = {};

    const round = (number, precision) => {
        const factor = Math.pow(10, precision);
        const tempNumber = number * factor;
        const roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    };

    const radiansToDegrees = (rads) => {
        return round(Math.abs(rads * (180 / Math.PI) % 360), 1);
    };

    return {
        init: () => {
            el = document.getElementById("overlay");
        },

        update: (camera) => {
            el.innerHTML =
                "POS XYZ: " + round(camera.position.x, 1) + " " + round(camera.position.y, 1) + " " + round(camera.position.z, 1) + "<br>"
                + "ROT XYZ: " + round(camera.rotation.x, 1) + " " + round(camera.rotation.y, 1) + " " + round(camera.rotation.z, 1)
                + " (" + radiansToDegrees(camera.rotation.z) + "°)"
            ;
        },
    };
}());