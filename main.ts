namespace led {
    let list = 
        [true, true, true, true,true,
         true, true, true, true, true,
          true, true, true, true, true,
           true, true, true, true, true,
            true, true, true, true, true];
    export function copy() {
        list = [point(0, 0), point(1, 0), point(2, 0), point(3, 0), point(4, 0),
                point(0, 1), point(1, 1), point(2, 1), point(3, 1), point(4, 1),
                point(0, 2), point(1, 2), point(2, 2), point(3, 2), point(4, 2),
                point(0, 3), point(1, 3), point(2, 3), point(3, 3), point(4, 3),
                point(0, 4), point(1, 4), point(2, 4), point(3, 4), point(4, 4)];
    }

    export function paste() {
        basic.clearScreen();
        for (let x = 0;x < 4; x++) {
            led.plot(x, 0);
        }
    }
}
