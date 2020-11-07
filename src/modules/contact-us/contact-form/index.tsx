import React, { FC } from 'react';
import { Container, ContactUs } from './styles';
import { Formik, Field, Form } from 'formik';
import apiService from '../../../shared/utils/api-service/api-service';
import { useTranslation } from 'shared/utils/internationalization';
import {SEND_CONTACT_US_DATA} from 'shared/utils/api-service/api-urls';

const ContactForm: FC = () => {
  const { t } = useTranslation('contact-us');
  const sendContactInfo = async (values: any) => {
    try {
      await apiService.post(SEND_CONTACT_US_DATA, values)
    } catch (err) {
   }
  }

  return (
    <Container>
      <h1>{t('form.title')}</h1>
      <Formik
        initialValues={{ "fullname": "", "email": "", "phone": "", "projectDescription": "", }}
        onSubmit={async (values, { resetForm }) => {
          await sendContactInfo(values);
          resetForm();
        }}
      >
        <Form>
          <ContactUs>
            <label htmlFor="fullname">
            {t('form.placeholder.name')} <span>*</span>
            </label>
            <Field id="fullname" name="fullname" required />

            <label htmlFor="email">
            {t('form.placeholder.email')} <span>*</span>
            </label>
            <Field id="email" name="email" type="email" required />

            <label htmlFor="phone">{t('form.placeholder.phone')}</label>
            <Field id="phone" name="phone" type="number" />

            <label htmlFor="pasprojectDescriptionsword">
            {t('form.placeholder.description')} <span>*</span>
            </label>
            <Field as="textarea" id="projectDescription" name="projectDescription" rows={20} required />

            <button type="submit">{t('form.confirm')}</button>
          </ContactUs>
        </Form>
      </Formik>
    </Container>
  );
};

export default ContactForm;
