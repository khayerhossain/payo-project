document.getElementById('cashout-btn').addEventListener('click',
    function (event) {
        event.preventDefault()
        const amount = document.getElementById('cashout-amount').value;
        const convertedAmount = parseFloat(amount);
        const pin = document.getElementById('cashout-pin').value;
        const convertedPin = parseInt(pin);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedBalance = parseFloat(mainBalance);


        if (convertedPin === 1234) {
            let sum = convertedBalance - convertedAmount;
            document.getElementById('main-balance').innerText = sum;
        }
        else {
            alert("please enter a valid pin ");
        }

    })
