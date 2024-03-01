const { calculateNumber } = require('./1-calcul.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(
    'The total is: ' + calculateNumber('SUM', totalAmount, totalShipping),
  );
}
