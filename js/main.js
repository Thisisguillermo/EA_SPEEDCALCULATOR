const subDisplay = document.getElementById("sub-display");
const mainDisplay = document.getElementById("main-display");
const numPadbutton = Array.from(document.getElementsByClassName("num_pad_button"));

// Asking myself if these "functions" could be different and made smaller. Lost a lot of time in process. figuring out other possibilities.

let action = numPadbutton.map(function (numPadbuttonTwo) {
    numPadbuttonTwo.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);

        switch (e.target.innerText) {

            case "AC":
                subDisplay.innerText = "";
                mainDisplay.innerText = "";
                break;
            case "ᐊ":
                if (subDisplay.innerText) {
                    subDisplay.innerText = subDisplay.innerText.slice(0, -1);
                }
                break;
            case "=":
                // Oh and.... Warning: Executing JavaScript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when you use eval(). See Never use eval()!, below.  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!)

                // subDisplay.innerText = eval(subDisplay.innerText) werkt niet omdat ik in principe alleen een assignment aangeef. in plaats van declare.
                // En ik laat daaar bij ook gelijk het resultaat in subDisplay terugkeren, terwijl het resultaat in mainDisplay gegeven moet worden.....
                try {
                    const whatever = eval(subDisplay.innerText);
                    mainDisplay.innerText = whatever;   
                } catch {
                    mainDisplay.innerText = "Syntax Error!"
                }
                break;

            default:
                subDisplay.innerText += e.target.innerText;
            // mainDisplay.innerText += e.target.innerText;

        }
    });
});


