const generateBillButton = document.querySelector(".generate-bill");
const billAmount = document.querySelector(".bill-amount");
const discountPercentage = document.querySelector(".discount-percentage");
const tipPercentage = document.querySelector(".tip-percentage");
const noOfCustomers = document.querySelector(".no-of-customers");
const totalTipPaid = document.querySelector(".total-tip-paid");
const totalAmountToPay = document.querySelector(".total-amount-to-pay");
const eachCustomerToPay = document.querySelector(".each-customer-to-pay");

function calculateBill() {
  console.log(
    "bill-amount:" + billAmount.value,
    "discount-amount:" + discountPercentage.value,
    "tip-amount:" + tipPercentage.value,
    "cusotmerl-amount:" + noOfCustomers.value
  );

  const billAmountAfterDiscountPercentage =
    billAmount.value - (discountPercentage.value * billAmount.value) / 100;

  const getTipAmount =
    billAmountAfterDiscountPercentage * (tipPercentage.value / 100);
  const totalBill = billAmountAfterDiscountPercentage + getTipAmount;
  const eachCustomerToPayAmount = totalBill / noOfCustomers.value;

  totalTipPaid.textContent = getTipAmount;
  totalAmountToPay.textContent = totalBill;
  eachCustomerToPay.textContent = eachCustomerToPayAmount;
}

generateBillButton.addEventListener("click", calculateBill);
