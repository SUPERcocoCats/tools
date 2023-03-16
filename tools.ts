enum flipdir {
    //% block="vertically"
    vertically,
    //% block="horizontally"
    horizontally
}
//%weight=100 color=#dec804 icon=
namespace tools {
    let list =
        [true, true, true, true, true,
            true, true, true, true, true,
            true, true, true, true, true,
            true, true, true, true, true,
            true, true, true, true, true];
    //%blockid=toolsCopy
    //%block="copy screen"
    export function copy() {
        list = [led.point(0, 0), led.point(1, 0), led.point(2, 0), led.point(3, 0), led.point(4, 0),
        led.point(0, 1), led.point(1, 1), led.point(2, 1), led.point(3, 1), led.point(4, 1),
        led.point(0, 2), led.point(1, 2), led.point(2, 2), led.point(3, 2), led.point(4, 2),
        led.point(0, 3), led.point(1, 3), led.point(2, 3), led.point(3, 3), led.point(4, 3),
        led.point(0, 4), led.point(1, 4), led.point(2, 4), led.point(3, 4), led.point(4, 4)];
    }
    //%blockid=toolsPaste
    //%block="paste screen"
    export function paste() {
        basic.clearScreen();
        for (let i = 0; i < 26; i++) {
            if (list[i]) { led.plot(i % 5, Math.floor(i / 5)); }
        }
    }
    let subList =
        [true, true, true, true, true,
            true, true, true, true, true,
            true, true, true, true, true,
            true, true, true, true, true,
            true, true, true, true, true];


    //%blockid=toolsrot
    //%block="Rotate $rot degrees"
    //%rot.min=0 rot.max=4
    //%rot.fieldOptions.precision=1
    export function Rotate(rot: number) {
        //copy the screen
        subList = [led.point(0, 0), led.point(1, 0), led.point(2, 0), led.point(3, 0), led.point(4, 0),
        led.point(0, 1), led.point(1, 1), led.point(2, 1), led.point(3, 1), led.point(4, 1),
        led.point(0, 2), led.point(1, 2), led.point(2, 2), led.point(3, 2), led.point(4, 2),
        led.point(0, 3), led.point(1, 3), led.point(2, 3), led.point(3, 3), led.point(4, 3),
        led.point(0, 4), led.point(1, 4), led.point(2, 4), led.point(3, 4), led.point(4, 4)];

        //paste rotated

        if (rot == 1) {
            basic.clearScreen();
            for (let j = 0; j < 26; j++) { if (subList[j]) { led.plot(Math.floor(j / 5), (-j + 24) % 5); } }
        }
        if (rot == 2) {
            basic.clearScreen();
            for (let k = 0; k < 26; k++) { if (subList[(-k + 24)]) { led.plot(k % 5, Math.floor(k / 5)); } }
        }
        if (rot == 3) {
            basic.clearScreen();
            for (let l = 0; l < 26; l++) { if (subList[l]) { led.plot(Math.floor((-l + 24) / 5), l % 5); } }
        }
    }

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
