const toSelect = document.querySelectorAll('.toselect');
const displayInput = document.querySelector('input[name="display"]');

toSelect.forEach((button)=> {
    button.addEventListener('click', ()=> {
        button.classList.add('scale');

    setTimeout( ()=> {
        button.classList.remove('scale');
    }, 100);
    });
});

function pressButton(value) {
    toSelect.forEach((button) => {
        if (button.value === value) { // Match the button's value
            button.classList.add('scale'); // Add the scale class for animation

            // Remove the scale class after 100ms
            setTimeout(() => {
                button.classList.remove('scale');
            }, 100);
        }
    });
}




document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    pressButton(event.key);
    console.log(event.key);
});

function makeSound(key) {

    const clearKeys = ["Delete", "Backspace", "Escape"];
    if (displayInput.value.length >= 12 && !clearKeys.includes(key)) {
        return;        
    }

switch (key) {
    case '9':
        displayInput.value += 9;
        break;

    case '8':
        displayInput.value += 8;
        break;

    case '7':
        displayInput.value += 7;
        break;
        
    case '6':
        displayInput.value += 6;
        break;

    case '5':
        displayInput.value += 5;
        break;

    case '4':
        displayInput.value += 4;
        break;

    case '3':
        displayInput.value += 3;
        break;

    case '2':
        displayInput.value += 2;
        break;

    case '1':
        displayInput.value += 1;
        break;

    case '0':
        displayInput.value += 0;
        break;

    case 'Backspace':
        displayInput.value = displayInput.value.slice(0, -1);
        break;

    case '+':
        displayInput.value += '+';
        break;

    case '-':
        displayInput.value += '-';
        break;

    case '*':
        displayInput.value += '*';
        break;

    case '/':
        displayInput.value += '/';
        break;

    case 'Enter':
        try {
            displayInput.value = eval(displayInput.value); 
        } catch (e) {
            displayInput.value = "Error";
        }
        break;

    case 'Delete':
    case 'Escape':
        displayInput.value = ' ';
        break;

    case '.':
        displayInput.value += '.';
        break;
    default: 
}

}

