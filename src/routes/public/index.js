import HeActivityController from "../../controllers/heActivityController";
import PatientController from "../../controllers/patientController";
import { Validate_Request } from "../../controllers";
import {
  Patient_Referral_Create_Validation,
  HE_Activity_Create_Validation,
} from "../../validations";

export default (routes) => {
  routes.post(
    "/patient-referral",
    Patient_Referral_Create_Validation,
    Validate_Request,

    PatientController.store
  );
  routes.get("/patient-referral", PatientController.index);
  routes.get("/patient-referral/:id", PatientController.each);
  routes.delete("/patient-referral/:id", PatientController.delete);

  routes.post(
    "/he-activity",
    HE_Activity_Create_Validation,
    Validate_Request,
    HeActivityController.store
  );
  routes.get("/he-activity", HeActivityController.index);
  routes.get("/he-activity/:id", HeActivityController.each);
  routes.delete("/he-activity/:id", HeActivityController.delete);
};
