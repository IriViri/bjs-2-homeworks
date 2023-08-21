"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2)- 4 * a * c;
  if (d < 0) {
    return arr;
  } else if (d === 0){
    let x = -b/ (2 * a);
    arr.push (x);
  }
  if (d > 0) {
    let x = (-b + Math.sqrt(d)) / (2 * a);
    let y = (-b - Math.sqrt(d)) / (2 * a);
    arr.push (x,y);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = (1/12) * (percent / 100);
  let amountCredit = amount - contribution;
  let monthlyPayment = amountCredit * ( percentMonth + (percentMonth / ((Math.pow ((1 + percentMonth), countMonths))- 1)));
  let totalAmount = ( monthlyPayment * countMonths). toFixed (2);
  return Number (totalAmount);
}