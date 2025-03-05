let counterValue = 0

// Utility

function createElement(tag, className, textContent, id) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (textContent) element.textContent = textContent;
    if (id) element.id = id;
    return element;
}

// Counter Display

function createCounterDisplay() {
    const container = document.getElementById('counter-container');
    const counterDisplay = createElement('div', null, counterValue, 'counter-value');
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
    const buttonsContainer = createElement('div');

    const decrementButton = createElement('button', 'decrement', '-');
    const resetButton = createElement('button', 'reset', 'Reset');
    const incrementButton = createElement('button', 'increment', '+');
    
    buttonsContainer.appendChild(decrementButton);
    buttonsContainer.appendChild(resetButton);
    buttonsContainer.appendChild(incrementButton);
    container.appendChild(buttonsContainer);
}

// Event Delegation

function handleButtonClick(event) {
    if (event.target.classList.contains('increment')) {
        counterValue++;
    } else if (event.target.classList.contains('decrement')) {
        counterValue--;
    } else if (event.target.classList.contains('reset')) {
        counterValue = 0;
    }
    updateCounterDisplay()
}

// Event Listener

document.addEventListener('DOMContentLoaded', function () {
    createCounterDisplay();
    createButtons();
    updateCounterDisplay();
    document.getElementById('counter-container').addEventListener('click', handleButtonClick);
});
