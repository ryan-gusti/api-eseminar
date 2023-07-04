//import http-status-codes
const { StatusCodes } = require("http-status-codes");
//import custom-api
const CustomAPIError = require("./custom-api-error");

class NotFound extends CustomAPIError {
  constructor(message) {
    super(message);
    //memberikan statusCode not found
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFound;
