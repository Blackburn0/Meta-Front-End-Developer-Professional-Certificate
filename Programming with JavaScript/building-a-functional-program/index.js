// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    let message = "%c" + txt;
    let style;
    style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message, style)
}

consoleStyler("#1d5c63", "#ede6db", "13px", "Hello World");

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    let fontStyle = "color: tomato; font-size: 50px";
    let message = "%c" + reason;
    let style = fontStyle;
    if (reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else{
        console.log(message, style);
    }
}


// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
celebrateStyler('birthday')

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
}

styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions')
// Call styleAndCelebrate
