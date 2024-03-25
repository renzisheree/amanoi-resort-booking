import { FormikValues } from "formik";

abstract class AbstractFormHandler<Values extends FormikValues> {
  abstract handleSubmit(values: Values): void;

  processForm(values: Values, submitForm: () => void) {
    this.handleSubmit(values);
    submitForm();
  }
}
export default AbstractFormHandler;
