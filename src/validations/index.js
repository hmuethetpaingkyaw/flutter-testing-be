import { body, check, oneOf } from "express-validator";

export const Patient_Referral_Create_Validation = [
  body("name").isLength(1),
  body("sex").isLength(1),
  body("age").isLength(1),
  body("refer_date").isLength(1),
  body("township").isLength(1),
  body("address").isLength(1),
  body("refer_from").isLength(1),
  body("refer_to").isLength(1),
  body("sign_and_symptom").isLength(1),
];
export const HE_Activity_Create_Validation = [
  body("date").isLength(1),
  body("address").isLength(1),
  body("he_attendees").isLength(1),
  body("sex").isLength(1),
];
