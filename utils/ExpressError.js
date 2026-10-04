// class ExpressError extends Error {
//     constructor(message, statusCode) {
//         super();
//         this.message = message;
//         this.statusCode = statusCode;
//     }
// }

// module.exports = ExpressError;
// class ExpressError extends Error {
//     constructor(statusCode, message) {
//         super();
//         this.statusCode = statusCode;  // ✅ number
//         this.message = message;        // ✅ string
//     }
// }

class ExpressError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;   // ✅ IMPORTANT