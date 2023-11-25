'use strict'

exports.ErrorObject = {
GENERIC_SERVER_ERROR: {
    errorCode: '2000',
    errorDescription: 'Generic Server Error'
  },
  ENDPOINT_NOT_IMPLEMENTED: {
    errorCode: '2001',
    errorDescription: 'Service requested is not supported by the server'
  },
  BAD_METHOD_IMPLEMENTATION: {
    errorCode: '3107',
    errorDescription: 'Scheme-mandatory extension parameter was missing or Inavlid Injected Method'
  },
  SERVICE_UNAVAILABLE: {
    errorCode: '2003',
    errorDescription: 'Service Currently Unavailable'
  },
  ID_NOT_FOUND: {
    errorCode: '3200',
    errorDescription: 'Generic ID not found'
  },

  ID_NOT_FOUNF: {
    errorCode: '3017',
    errorDescription: 'Generic server error'
  },
  DUPLICATE_ERROR: {
    errorCode: '3003',
    errorDescription: 'Duplicate entry not allowed'
  },
  ACCOUNT_DONT_EXIST: {
    errorCode: '3007',
    errorDescription: 'User account does not exist'
  },
  PAYMENT_DONT_EXIST: {
    errorCode: '3007',
    errorDescription: 'Payment refence or amound doesnt exist/match'
  },
  ACCOUNT_INACTIVE: {
    errorCode: '3009',
    errorDescription: 'User account is disabled'
  },
  INVALID_PASSWORD: {
    errorCode: '3027',
    errorDescription: 'Invalid password supplied'
  },
  BLOCKED_ACCOUNT: {
    errorCode: '3018',
    errorDescription: 'Acount has been blocked'
  },
  GENERIC_VALIDATION_ERROR: {
    errorCode: '3100',
    errorDescription: 'Not valid TIPS merchantId supplied'
  },

  MERCHANT_VALIDATION_ERROR: {
    errorCode: '3100',
    errorDescription: 'Merchant status not valid/mcc is empty'
  },
  FAILED_LOGOUT: {
    errorCode: '5018',
    errorDescription: 'Logout failed'
  },
  INVALID_OTP: {
    errorCode: '3007',
    errorDescription: 'Invalid OTP'
  }
  
}
