import dotenv from "dotenv";
dotenv.config();

export const {
  APP_PORT,
  DATABASE_URL,
  APP_URL,
  EMAIL_ID,
  PASSWORD,
  APP_ENV,
  CLIENT_APP_URL,
  ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY,
  RAZORPAY_KEY_DEV,
  RAZORPAY_SECRET_DEV,
  RAZORPAY_WEBHOOK_SECRET,
  REDIS_URL,
  SENTRY_DSN_URL,
} = process.env;
