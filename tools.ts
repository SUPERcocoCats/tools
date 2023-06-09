enum flipdir {
    //% block="vertically"
    vertically,
    //% block="horizontally"
    horizontally
}
enum rotDir {
    //% block="90°"
    one,
    //% block="180°"
    two,
    //% block="270°"
    three
}
//%weight=100 color=#dec804 icon=
namespace tools {
    //list used for copy and paste
    let list =
        [true, true, true, true, true,
            true, true, true, true, true,
            true, true, true, true, true,
            true, true, true, true, true,
            true, true, true, true, true];
    /**
    *Copy the current screen
    *for later use.
    */
    //%blockid=toolsCopy
    //%block="copy screen"
    export function copy() {
        list = [led.point(0, 0), led.point(1, 0), led.point(2, 0), led.point(3, 0), led.point(4, 0),
        led.point(0, 1), led.point(1, 1), led.point(2, 1), led.point(3, 1), led.point(4, 1),
        led.point(0, 2), led.point(1, 2), led.point(2, 2), led.point(3, 2), led.point(4, 2),
        led.point(0, 3), led.point(1, 3), led.point(2, 3), led.point(3, 3), led.point(4, 3),
        led.point(0, 4), led.point(1, 4), led.point(2, 4), led.point(3, 4), led.point(4, 4)];
    }
    /**
    *paste the coyped screen
    */
    //%blockid=toolsPaste
    //%block="paste screen"
    export function paste() {
        basic.clearScreen();
        for (let i = 0; i < 26; i++) {
            if (list[i]) { led.plot(i % 5, Math.floor(i / 5)); }
        }
    }
    //list used for rotate and flip
    let subList =
        [true, true, true, true, true,
            true, true, true, true, true,
            true, true, true, true, true,
            true, true, true, true, true,
            true, true, true, true, true];

    /**
    *rotate the screen
    *@param rot amount the screen rotates by
    */
    //%blockid=toolsrot
    //%block="Rotate $rot degrees"
    //%rot.min=0 rot.max=4
    //%rot.fieldOptions.precision=1
    export function Rotate(rot: rotDir) {
        //copy the screen
        subList = [led.point(0, 0), led.point(1, 0), led.point(2, 0), led.point(3, 0), led.point(4, 0),
        led.point(0, 1), led.point(1, 1), led.point(2, 1), led.point(3, 1), led.point(4, 1),
        led.point(0, 2), led.point(1, 2), led.point(2, 2), led.point(3, 2), led.point(4, 2),
        led.point(0, 3), led.point(1, 3), led.point(2, 3), led.point(3, 3), led.point(4, 3),
        led.point(0, 4), led.point(1, 4), led.point(2, 4), led.point(3, 4), led.point(4, 4)];

        //paste rotated
        if (rot == rotDir.three) {
            basic.clearScreen();
            for (let j = 0; j < 26; j++) { if (subList[j]) { led.plot(Math.floor(j / 5), (-j + 24) % 5); } }
        }
        if (rot == rotDir.two) {
            basic.clearScreen();
            for (let k = 0; k < 26; k++) { if (subList[(-k + 24)]) { led.plot(k % 5, Math.floor(k / 5)); } }
        }
        if (rot == rotDir.one) {
            basic.clearScreen();
            for (let l = 0; l < 26; l++) { if (subList[l]) { led.plot(Math.floor((-l + 24) / 5), l % 5); } }
        }
    }
    /**
    *Flip the screen
    *@param dir direction screen gets flipped
    */
    //%blockid=toolsflip
    //%block="Flip $dir"
    export function flip(dir: flipdir) {
        subList = [led.point(0, 0), led.point(1, 0), led.point(2, 0), led.point(3, 0), led.point(4, 0),
        led.point(0, 1), led.point(1, 1), led.point(2, 1), led.point(3, 1), led.point(4, 1),
        led.point(0, 2), led.point(1, 2), led.point(2, 2), led.point(3, 2), led.point(4, 2),
        led.point(0, 3), led.point(1, 3), led.point(2, 3), led.point(3, 3), led.point(4, 3),
        led.point(0, 4), led.point(1, 4), led.point(2, 4), led.point(3, 4), led.point(4, 4)];

        basic.clearScreen();
        if (dir == flipdir.vertically) {
            for (let m = 0; m < 26; m++) { if (subList[m]) { led.plot(m % 5, Math.floor((-m + 24) / 5)); } }
        }

        if (dir == flipdir.horizontally) {
            for (let n = 0; n < 26; n++) { if (subList[n]) { led.plot((-n + 24) % 5, Math.floor(n / 5)); } }
        }

    }


}
