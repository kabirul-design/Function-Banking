// function doubleIt(num){
//     const result = 5 * 2;
//     return result;
// }
// const first=  doubleIt(4);
// const second = doubleIt(5);


function getInputValue(inputId){
    const depositInput = document.getElementById(inputId);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    //clear input value
    depositInput.value = '';

    return depositAmount;
}

function currentAmountUpdateId(totalFieldId, Amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText =  previousTotal + Amount;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    return previousBalance;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalance = parseFloat(balanceTotalText);
    const previousBalance = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = amount + previousBalance;

    }
    else{
        balanceTotal.innerText = previousBalance - amount;

    }
}



document.getElementById('deposit-btn').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);

    //get Current Deposit amount 
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);

    // depositTotal.innerText =  previousDepositTotal + depositAmount;
    //balance total amount add
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalance = parseFloat(balanceTotalText);
    // balanceTotal.innerText = depositAmount + previousBalance;

    const depositAmount = getInputValue('deposit-input');
    if(depositAmount> 0){
        currentAmountUpdateId('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

});


document.getElementById('Withdraw-btn').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('Withdraw-input');
    // const withdrawAmountText = withdrawInput.value; 
    // const withdrawAmount = parseFloat(withdrawAmountText); 
    // get update Withdraw amount
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    
    // balance update after withdraw 
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceWithdrawAmount = parseFloat(balanceTotalText);
    // balanceTotal.innerText = balanceWithdrawAmount - withdrawAmount;
    const  withdrawAmount = getInputValue('Withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
    currentAmountUpdateId('withdraw-total',withdrawAmount);
    updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount> currentBalance ){
        'you have no balance'


    }

});


