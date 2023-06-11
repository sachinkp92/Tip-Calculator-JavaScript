let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalAmountInput = document.getElementById("totalAmount");
let errorMsg = document.getElementById("errorMessage");

function onCalulate() {
    let billAmtInputValue = billAmountInput.value;
    let percentageTipInputValue = percentageTipInput.value;

    if (billAmtInputValue === "" || percentageTipInputValue === "") {
        errorMsg.textContent = "Please enter valid input";
    } else {
        errorMsg.textContent = "";
        let billAmount = parseInt(billAmtInputValue);
        let percentageTip = parseInt(percentageTipInputValue);
        let tipAmount = (percentageTip / 100) * billAmount;
        let totalAmount = billAmount + tipAmount;
        tipAmountInput.value = tipAmount;
        totalAmountInput.value = totalAmount;
    }
}