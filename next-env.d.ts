/// <reference types="next" />
/// <reference types="next/image-types" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SITE_NAME: string;
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_COUPON_API_URL: string;
    CONTACT_API_URL: string;
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_USER: string;
    SMTP_PASS: string;
  }
}