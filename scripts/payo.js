document.getElementById('login-btn').addEventListener('click',
    function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById('number-value').value
        const pin = document.getElementById('pin-value').value
        const pinConvert = parseInt(pin);
        if (accountNumber.length === 11) {
            if (pinConvert === 1234) {
                window.location.href = "./main.html"
            }
            else {
                alert("wrong PIN")
            }
        }
        else {
            alert("Need a valid account number")
        }

    })


