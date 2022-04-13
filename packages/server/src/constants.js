import dotenv from "dotenv";
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const _env_ = process.env.NODE_ENV;
export const DELIVERY = process.env.DELIVERY;
export const COOKIE_NAME = process.env.COOKIE_NAME;
export const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
export const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
export const PORT = process.env.PORT;
export const ORIGIN = process.env.ORIGIN;
export const TWILIO_NUMBER = process.env.TWILIO_NUMBER;
export const MOBILE_TOKEN_SECRET = process.env.MOBILE_TOKEN_SECRET;
export const SERVER_URL = process.env.SERVER_URL;
export const SMTP_USER = process.env.SMTP_USER;
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
export const DELIVERY_MSG_ID = process.env.DELIVERY_MSG_ID;
export const OTP_MSG_ID = process.env.OTP_MSG_ID;
export const RZRPAY_KEY_ID = process.env.RZRPAY_KEY_ID;
export const RZRPAY_KEY_SECRET = process.env.RZRPAY_KEY_SECRET;

export const S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID;
export const S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY;
export const S3_REGION = process.env.S3_REGION;