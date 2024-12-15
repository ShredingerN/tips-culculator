function culcTips(billAmount, tipPercentage) {
    return billAmount * (tipPercentage / 100);
};
function culcBillWithTips(billAmount, tipsAmount) {
    return billAmount + tipsAmount;

};
function culcPerPersonAmount(totalAmount, numberOfPeople) {
    return totalAmount / numberOfPeople;
};


const calculateButton = document.getElementById("count");

calculateButton.addEventListener("click", function () {

    // при нажатии кнопки получаем введенные значения
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    const numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);

    // проверяем их
    if (isNaN(billAmount)
        || isNaN(tipPercentage)
        || isNaN(numberOfPeople)
        || billAmount <= 0
        || tipPercentage < 0
        || numberOfPeople <= 0) {
        alert("Ошибка ввода данных");
        return;
    };

    // расчет общей суммы и суммы на человека
    const tipAmount = culcTips(billAmount, tipPercentage);
    const billWithTips = culcBillWithTips(billAmount, tipAmount);
    const perPersonAmount = culcPerPersonAmount(billWithTips, numberOfPeople)

    // получаем результаты в поля вывода
    document.getElementById("tipAmount").value = tipAmount.toFixed(2);
    document.getElementById("totalAmount").value = billWithTips.toFixed(2);
    document.getElementById("amountPerPerson").value = perPersonAmount.toFixed(2);
});

