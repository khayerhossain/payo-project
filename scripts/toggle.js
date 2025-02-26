document.getElementById("Cashout").style.display = "none";
document.getElementById("addmoney-input").style.display = "block";


document.getElementById("addmoney-box").addEventListener("click",
    function () {
        document.getElementById("cashout").style.display = "none";
        document.getElementById("addmoney-input").style.display = "block";
    })

document.getElementById("cashout-box").addEventListener("click",
    function () {
        document.getElementById("Cashout").style.display = "block";
        document.getElementById("addmoney-input").style.display = "none";
    })
