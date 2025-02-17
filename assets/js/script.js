let counterValue = 0

// Counter Display

function createCounterDisplay() {
    const container = document.getElementById('counter-container');

    const counterDisplay = document.createElement('div');
    counterDisplay.id = 'counter-value';
    counterDisplay.textContent = counterValue;
    container.appendChild(counterDisplay);
}

function updateCounterDisplay() {
    const counterDisplay = document.getElementById('counter-value');
    if (counterDisplay) {
        counterDisplay.textContent = counterValue;
    }
}

// Operator Buttons

function createButtons() {
    const container = document.getElementById('counter-container');

    const buttonsContainer = document.createElement('div');

    const decrementButton = document.createElement('button');
    decrementButton.classList.add('decrement');
    decrementButton.textContent = '-';
    buttonsContainer.appendChild(decrementButton);

    const resetButton = document.createElement('button');
    resetButton.classList.add('reset');
    resetButton.textContent = 'Reset';
    buttonsContainer.appendChild(resetButton);

    const incrementButton = document.createElement('button');
    incrementButton.classList.add('increment');
    incrementButton.textContent = '+';
    buttonsContainer.appendChild(incrementButton);

    container.appendChild(buttonsContainer);
}

// Event Delegation

function handleButtonClick(event) {
    if (event.target.classList.contains('increment')) {
        counterValue++;
        updateCounterDisplay();
    } else if (event.target.classList.contains('decrement')) {
        counterValue--;
        updateCounterDisplay();
    } else if (event.target.classList.contains('reset')) {
        counterValue = 0;
        updateCounterDisplay();
    }
}

// Event Listener

document.addEventListener('DOMContentLoaded', function () {
    createCounterDisplay();
    createButtons();   
    document.getElementById('counter-container').addEventListener('click', handleButtonClick);
});
