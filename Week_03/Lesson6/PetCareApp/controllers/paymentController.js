const services = require('../data/mockServices');
const MockProvider = require('../services/mockPaymentProvider');


function preparePayment(req, res) {
  const service = services.find(
    (item) => String(item.id) === req.params.serviceId
  );

  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }

  res.status(200).json({
    serviceId: service.id,
    serviceName: service.name,
    amount: service.price,
    currency: 'sgd',
    status: 'READY_FOR_PAYMENT'
  });
}

async function createMockPayment(req, res) {
  const service = services.find(
    (item) => String(item.id) === req.params.serviceId
  );

  if (!service) {
    return res.status(404).json({ error: 'Service not found' });
  }

  const merchantReference = `PETCARE-${service.id}-${Date.now()}`;

  try {
    const payment = await MockProvider.createPayment({
      merchantReference,
      testStatus: req.body && req.body.testStatus
    });

    return res.status(201).json({
      serviceId: service.id,
      serviceName: service.name,
      amount: service.price,
      currency: 'sgd',
      ...payment
    });
  } catch (error) {
    console.error('Error creating mock payment:', error);
    return res.status(500).json({ error: 'Unable to create payment' });
  }
}

module.exports = {
  preparePayment,
  createMockPayment
};
