const Constant = {
  PORT: "3000",
  MONGODB_URL: "mongodb://localhost:27017/sahaayak_express_api",
  ROLE: ["SUPER-ADMIN", "ADMIN"],
  COLLECTION: {
    USER: "users",
    GRADE: "grades",
    ORIGANIZATION: "origanizations",
    STUDENT: "students",
    ATTENDANCE: "attendances",
    FEE: "fees",
    PAYMENT: "payments",
  },
  HTTP_STATUS_CODE: {
    SUCCESS: 200,
    SERVER_ERROR: 500,
    BAD_REQUEST: 406,
    CREATED: 201,
    INVALID_CREDENTIAL: 401,
  },
  MESSAGE: {
    USER: {
      CREATED: "User Created Successfully.",
      INVALID_CREDENTIAL: "Invalid UserName/Password..",
      USER_ALREADY_REGISTERED:
        "It seems like user is already registered with the same email.",
      MESSAGE_UNAUTHORIZED_USER: "Unauthorized User",
      MESSAGE_INVALID_CREDENTIALS: "Invalid Credentials.",
      NOT_REGISTERED: "User not registered with the given Email.",
      LOGIN_SUCCESS: "User loggedin successfully",
    },
    ATTENDANCE: {
      MARKED: "Attendance-Marked Created Successfully.",
    },
    GRADE: {
      CREATED: "Grade Created Successfully.",

      ISEXIST: "Grade already Exist.",
    },
    FEE: {
      CREATED: "Fee Created Successfully.",

      ISEXIST: "Fee already Exist.",
    },
    ORIGANIZATION: {
      CREATED: "Origanization Created Successfully.",

      ISEXIST: "Origanization already Exist.",
    },
    STUDENT: {
      CREATED: "Student Created Successfully.",
    },
    PAYMENT: {
      CREATED: "Payment Done Successfully.",
    },
    COMMON: {
      SERVER_ERROR: "Sorry! Something went wrong.",
      MESSAGE_INVALID_DATA: "Invalid payload.",
      MESSAGE_BAD_REQUEST: "Bad request/Unknown requested fields.",
      MESSAGE_DATA_NOT_FOUND: "Data not found.",
      MESSAGE_UNAUTHORIZED_ACCESS: "You are not authorized for this action.",
      DATA_FOUND: "Data found",
    },
  },
  JWT: {
    SECRET: "sahaayak@manage",
    TOKEN_TIMEOUT: "12h",
  },
};

module.exports = Constant;
