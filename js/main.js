const subDisplay = document.getElementById("sub-display");
const mainDisplay = document.getElementById("main-display");
const numPadbutton = Array.from(document.getElementsByClassName("num_pad_button"));

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
                subDisplay.innerText = subDisplay.innerText.slice(0, -1);
                break;

            default:
                subDisplay.innerText += e.target.innerText;
            // mainDisplay.innerText += e.target.innerText;

        }
    });
});


