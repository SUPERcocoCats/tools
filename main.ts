namespace tools {
    let list = 
        [true, true, true, true,true,
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
        for (let y = 0; y < 5; y++)
        for (let x = 0;x < 5; x++) {
            if(list[x + 5*y]) {led.plot(x, y);}
        }}
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
            basic.clearScreen();
            if(rot == 1){
            for (let i = 0; i < 26; i++) { if (subList[i]) { led.plot(Math.floor(i / 5),i % 5);}}
            }
            if (rot == 2) {
                for (let i = 25; i > -1; i--) { if (subList[i]) { led.plot(i % 5, Math.floor(i / 5)); } }
            }
        }
    export function flip() {

    }


    }
