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

const currentDeposit = document.getElementById("currentDeposit").innerText;
const currentDepositNumber = parseFloat(currentDeposit);
const totalDeposit = depositNumber + currentDepositNumber;


document.getElementById("currentDeposit").innerText = totalDeposit;
document.getElementById("depositAmount").value = "";
    

})