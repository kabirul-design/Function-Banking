function doubleIt(num){
    const result = 5 * 2;
    return result;
}
const first=  doubleIt(4);
const second = doubleIt(5);



document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    console.log(depositAmount);

    //get Current Deposit amount 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText =  previousDepositTotal + depositAmount;

    //balance total amount add
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = depositAmount + previousBalance;

    depositInput.value = '';
})

document.getElementById('Withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('Withdraw-input');
    const withdrawAmountText = withdrawInput.value; 
    const withdrawAmount = parseFloat(withdrawAmountText);   
    // get update Withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    

    // balance update after withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceWithdrawAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceWithdrawAmount - withdrawAmount;

    // get total balance add 
    withdrawInput.value = '';
    
})


