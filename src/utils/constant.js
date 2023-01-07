const Constant = {
  PORT: "3000",
  MONGODB_URL: "mongodb://localhost:27017/sahaayak_express_api",
  ROLE: {
    superAdmin: "SUPER-ADMIN",
    admin: "ADMIN",
    accountant: "ACCOUNTANT",
    examiner: "EXAMINER",
    attendance: "ATTENDANCE",
  },
  GENDER: ["MALE", "FEMALE"],
  COLLECTION: {
    USER: "users",
    GRADE: "grades",
    ORIGANIZATION: "origanizations",
    STUDENT: "students",
    ATTENDANCE: "attendances",
    FEE: "fees",
    PAYMENT: "payments",
    PARENT: "parents",
    EXAMINATION_TYPE: "examinationTypes",
    RESULT: "results",
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
      DELETE: "User Record Deleted. ",
    },
    ATTENDANCE: {
      MARKED: "Attendance-Marked Successfully.",
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
      FETCHED: "Student Data Fatched ",
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
    EXAMINATION_TYPE: {
      CREATED: "Examination Type Done Successfully.",
    },
    RESULT: {
      CREATED: "Result Done Successfully.",
      FETCHED: "Data Fatched Successfully",
    },
  },
  JWT: {
    SECRET: "sahaayak@manage",
    TOKEN_TIMEOUT: "12h",
  },
  AWS: {
    //DUMMY VALUE
    s3BaseURL: "https://sahayaak.amazonaws.com/",
    s3BucketName: "sahaayak-images/student-images",
    accessKeyId: "",
    secretAccessKey: "",
  },
};

module.exports = Constant;
