document.addEventListener('DOMContentLoaded', function () {
    const resultElement = document.getElementById('result');
    const buttons = document.getElementById('buttons');
    let currentInput = '';

    buttons.addEventListener('click', function (event) {
        const clickedButton = event.target;

        if (clickedButton.tagName === 'BUTTON') {
            const buttonText = clickedButton.textContent;

            if (buttonText === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                    resultElement.textContent = currentInput;
                } catch (error) {
                    resultElement.textContent = 'Error';
                }
            } else if (buttonText === 'C') {
                currentInput = '';
                resultElement.textContent = '';
            } else {
                currentInput += buttonText;
                resultElement.textContent = currentInput;
            }
        }
    });
});
