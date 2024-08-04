import { Field, Formik, Form } from "formik";
import { nanoid } from "nanoid";
const ContactForm = (
       addCard
) => {
    const userNameId = nanoid();
    const userNumberId =  nanoid(); 
    return (
      <Formik
            initialValues={{
                userName: "",
                userNumber: "",
            }}
            onSubmit={() => { addCard(Form.userName.value, Form.userNumber.value); }}
      >
        <Form>
          <label>
            <Field id={userNameId} type="text" name="userName" />
          </label>
          <label>
            <Field id={userNumberId} type="tel" name="userNumber" />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    );
   }
export default ContactForm