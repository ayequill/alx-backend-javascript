const sinnon = require('sinon');
const sendPaymentRequestApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber', () => {
    const spy = sinnon.spy(Utils, 'calculateNumber');

    sendPaymentRequestApi(100, 20);

    sinnon.assert.calledWith(spy, 'SUM', 100, 20);
    spy.restore();
  });
});
