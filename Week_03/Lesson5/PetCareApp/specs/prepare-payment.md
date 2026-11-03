# Feature: Prepare payment details
## 1. User goal
As a pet owner, i want to make payment for a pet service
## 2. Scope
Review selected service and amount before payment
Catalogue (ID, name, numeric price):
1, Vaccination, 35
2, Pet Grooming, 50
3, Boarding, 80

Use the server catalogue price. Do not accept a client-supplied payment amount.

## 3. Request
GET /payments/prepare/:serviceId

## 4. Service catalogue
id, service name, price
1, Vaccination, 35
2, Pet Grooming, 50
3, Boarding, 80

## 5. Successful response
HTTP 200 with exactly five JSON fields:
serviceId (number), serviceName (string), amount (number),
currency (string, "sgd"), status (string, "READY_FOR_PAYMENT").

## 6. Unsuccessful response
Service ID not in the catalogue: HTTP 404 with exactly
{"error":"Service not found"}.

## 7. Acceptance criteria
AC1: GET /payments/prepare/1 -> HTTP 200 with
{"serviceId":1,"serviceName":"Vaccination","amount":35,"currency":"sgd","status":"READY_FOR_PAYMENT"}.
AC2: GET /payments/prepare/2 -> HTTP 200 with
{"serviceId":2,"serviceName":"Pet Grooming","amount":50,"currency":"sgd","status":"READY_FOR_PAYMENT"}.
AC3: GET /payments/prepare/3 -> HTTP 200 with
{"serviceId":3,"serviceName":"Boarding","amount":80,"currency":"sgd","status":"READY_FOR_PAYMENT"}.
AC4: GET /payments/prepare/999 -> HTTP 404 with exactly
{"error":"Service not found"}.
AC5: Each success has exactly the five agreed fields,
correct types, catalogue values, "sgd" and "READY_FOR_PAYMENT".
Access: No login required for this classroom mock.
Out of scope: charging money, gateway integration, transactions,
new database tables, EJS pages or changes to existing features.


## 8. Open questions
1. What response, if any, should be returned for malformed or non-integer
   serviceId path values?
2. Does amount represent whole SGD units, and are fractional amounts allowed?

These decisions remain unresolved; do not assume answers.
