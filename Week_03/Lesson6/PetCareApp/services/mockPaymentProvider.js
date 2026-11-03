exports.createPayment = async (request) => ({
  providerPaymentId: `mock_${Date.now()}`,
  merchantReference: request.merchantReference,
  status: request.testStatus || 'PENDING'
});