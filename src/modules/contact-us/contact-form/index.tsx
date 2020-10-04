import React, { FC } from 'react';
import { Container, ContactUs } from './styles';
import { Formik, Field, Form } from 'formik';
import * as tranlations from './Translations/en.json';

const ContactForm: FC = () => {
  return (
    <Container>
      <h1>{tranlations['contact.form.title']}</h1>

      <Formik
        initialValues={{
          fullname: '',
          email: '',
          phone: '',
          projectDescription: '',
        }}
        onSubmit={async (values, { resetForm }) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        <Form>
          <ContactUs>
            <label htmlFor="fullname">
              Full Name <span>*</span>
            </label>
            <Field id="fullname" name="fullname" required />

            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <Field id="email" name="email" type="email" required />

            <label htmlFor="phone">Phone</label>
            <Field id="phone" name="phone" type="number" />

            <label htmlFor="pasprojectDescriptionsword">
              Message <span>*</span>
            </label>
            <Field as="textarea" id="projectDescription" name="projectDescription" rows={20} required />

            <button type="submit">Send</button>
          </ContactUs>
        </Form>
      </Formik>
    </Container>
  );
};

export default ContactForm;
