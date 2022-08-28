// Login button event handler

const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display="none";

    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display="block";
})


// Deposit button event handler

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
const depositAmount = document.getElementById("depositAmount").value;
const depositNumber=parseFloat(depositAmount);

// const currentDeposit = document.getElementById("currentDeposit").innerText;
// const currentDepositNumber = parseFloat(currentDeposit);
// const totalDeposit = depositNumber + currentDepositNumber;
//document.getElementById("currentDeposit").innerText = totalDeposit;

// const currentBalance = document.getElementById("currentBalance").innerText;
// const currentBalanceNumber = parseFloat("currentBalance");
// const totalBalance = depositNumber+currentBalanceNumber;
// document.getElementById("currentBalance").innerText= totalBalance;


updateSpanText("currentDeposit",depositNumber);
updateSpanText("currentBalance",depositNumber);
document.getElementById("depositAmount").value = "";

})


const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener('click',function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1*withdrawNumber);

    // const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    // const currentWithdrawNumber= parseFloat(currentWithdraw);

    // const totalWithdraw = withdrawNumber+currentWithdrawNumber;
    // document.getElementById("currentWithdraw").innerText = totalWithdraw;

    document.getElementById("withdrawAmount").value = "";
}) 

// Function Number
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

// Update span text

function updateSpanText(id,depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber+currentNumber;
    document.getElementById(id).innerText = totalAmount;
}
