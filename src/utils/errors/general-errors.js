/** @type {ErrorDictionary} */
export const generalErrors = {
  // 400
  'request/malformed': {
    code: 'request/malformed',
    message: 'The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.'
  },
  // 401
  'auth/unauthorized': {
    code: 'auth/unauthorized',
    message: 'The request requires user authentication. The client MAY repeat the request with a suitable Authorization header field. If the request already included Authorization credentials, then the 401 response indicates that authorization has been refused for those credentials.'
  },
  'payment/required': {
    code: 'payment/required',
    message: 'This request requires the user to have a payment condition fulfilled. The requested content is not available until the client makes a payment'
  },
  'auth/forbidden': {
    code: 'auth/forbidden',
    message: 'The server understood the request, but is refusing to fulfill it. Authorization will not help and the request SHOULD NOT be repeated.'
  },
  'request/not-found': {
    code: 'request/not-found',
    message: 'The server has not found anything matching the Request-URI. No indication is given of whether the condition is temporary or permanent.'
  },
  'request/method-not-allowed': {
    code: 'request/method-not-allowed',
    message: 'The server does not allow the use of the HTTP Method.'
  },
  'request/not-acceptable': {
    code: 'request/not-acceptable',
    message: 'The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request.'
  },
  'request/timeout': {
    code: 'request/timeout',
    message: 'The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time.'
  },
  'request/conflict': {
    code: 'request/conflict',
    message: 'The request could not be completed due to a conflict with the current state of the resource. This code is only allowed in situations where it is expected that the user might be able to resolve the conflict and resubmit the request.'
  },
  'data/not-found': {
    code: 'data/not-found',
    message: 'The data you are trying to find cannot be found.'
  },
  'request/length-required': {
    code: 'request/length-required',
    message: 'The server refuses to accept the request without a defined Content- Length. The client MAY repeat the request if it adds a valid Content-Length header field containing the length of the message-body in the request message.'
  },
  'request/precondition-failed': {
    code: 'request/precondition-failed',
    message: 'The precondition given in one or more of the request-header fields evaluated to false when it was tested on the server.'
  },
  'request/too-large': {
    code: 'request/too-large',
    message: 'The server is refusing to process a request because the request entity is larger than the server is willing or able to process.'
  },
  'request/uri-too-long': {
    code: 'request/uri-too-long',
    message: 'The server is refusing to service the request because the Request-URI is longer than the server is willing to interpret.'
  },
  'request/unsupported-media-type': {
    code: 'request/unsupported-media-type',
    message: 'The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method.'
  },

  'request/range-not-satisfiable': {
    code: 'request/range-not-satisfiable',
    message: 'The server cannot supply that requested portion of the file'
  },
  'request/expectation-failed': {
    code: 'request/expectation-failed',
    message: 'The server cannot meet the requirements of the Expect request-header field.'
  },
  'me/teapot': {
    code: 'me/teapot',
    message: 'I am a teapot. Enough said.'
  },
  'request/misdirected': {
    code: 'request/misdirected',
    message: 'The request was directed at a server that is not able to produce a response.'
  },
  'request/unprocessable-entity': {
    code: 'request/unprocessable-entity',
    message: 'The request was well-formed but was unable to be followed due to semantic errors.'
  },
  'data/locked': {
    code: 'data/locked',
    message: 'The resource that is being accessed is locked.'
  },
  'request/failed-dependency': {
    code: 'request/failed-dependency',
    message: 'The request failed due to failure of a previous request.'
  },
  'request/upgrade-required': {
    code: 'request/upgrade-required',
    message: 'Upgrade API request version.'
  },
  'request/precondition-required': {
    code: 'request/precondition-required',
    message: 'The origin server requires the request to be conditional.'
  },
  'request/rate-limit': {
    code: 'request/rate-limit',
    message: 'The user has sent too many requests in a given amount of time ("rate limiting")'
  },
  'request/header-fields-too-large': {
    code: 'request/header-fields-too-large',
    message: 'The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.'
  },
  'request/unavailable-legal': {
    code: 'request/unavailable-legal',
    message: 'Unavailable for legal reasons.'
  },
  'server/internal-server-error': {
    code: 'server/internal-server-error',
    message: 'The server encountered an unexpected condition which prevented it from fulfilling the request.'
  },

  'server/not-implemented': {
    code: 'server/not-implemented',
    message: 'The server does not support the functionality required to fulfill the request.'
  },
  'gateway/invalid': {
    code: 'gateway/invalid',
    message: 'The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.'
  },
  'server/unavailable': {
    code: 'server/unavailable',
    message: 'The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.'
  },
  'gateway/timeout': {
    code: 'gateway/timeout',
    message: 'The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server'
  },
  'storage/insufficient': {
    code: 'storage/insufficient',
    message: 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.'
  }
};
