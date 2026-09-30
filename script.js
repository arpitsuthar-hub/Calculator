let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";

// ================================
// BUTTON CLICK
// ================================

buttons.forEach(button => {

    button.addEventListener("click", (e) => {

        let value = e.target.innerHTML;

        // Equal
        if (value == "=") {

            calculate();

        }

        // Clear
        else if (value == "AC") {

            clearCalculator();

        }

        // Delete
        else if (value == "DEL") {

            deleteLast();

        }

        // Percentage
        else if (value == "%") {

            percentage();

        }

        // Operators
        else {

            addValue(value);

        }

    });

});


// ================================
// ADD VALUE
// ================================

function addValue(value) {

    // Convert calculator symbols
    if (value == "×") {
        value = "*";
    }

    if (value == "÷") {
        value = "/";
    }

    if (value == "−") {
        value = "-";
    }

    string += value;

    input.value = string;
}


// ================================
// CALCULATE
// ================================

function calculate() {

    try {

        if (string == "") {
            return;
        }

        string = eval(string);

        input.value = string;

    }
    catch {

        input.value = "Error";

        string = "";

    }
}


// ================================
// CLEAR
// ================================

function clearCalculator() {

    string = "";

    input.value = "";
}


// ================================
// DELETE
// ================================

function deleteLast() {

    string = string.substring(
        0,
        string.length - 1
    );

    input.value = string;
}


// ================================
// PERCENTAGE
// ================================

function percentage() {

    try {

        if (string != "") {

            string = eval(string) / 100;

            input.value = string;

        }

    }
    catch {

        input.value = "Error";

        string = "";

    }
}


// ================================
// KEYBOARD SUPPORT
// ================================

document.addEventListener("keydown", function (e) {

    let key = e.key;


    // Numbers

    if (
        (key >= "0" && key <= "9") ||
        key == "."
    ) {

        addValue(key);

    }


    // Operators

    else if (
        key == "+" ||
        key == "-" ||
        key == "*" ||
        key == "/"
    ) {

        addValue(key);

    }


    // Percentage

    else if (key == "%") {

        percentage();

    }


    // Enter or =

    else if (
        key == "Enter" ||
        key == "="
    ) {

        calculate();

    }


    // Backspace

    else if (key == "Backspace") {

        deleteLast();

    }


    // Delete / Escape

    else if (
        key == "Delete" ||
        key == "Escape"
    ) {

        clearCalculator();

    }

});