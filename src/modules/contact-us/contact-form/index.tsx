import { Container, Form } from './styles';
import React, { FC } from 'react';

import { useTranslation } from 'shared/utils/internationalization';

const ContactForm: FC = () => {
  const { t } = useTranslation('contact-us');

  return (
    <Container>
      <h1>{t('form.title')}</h1>
      <Form onSubmit={() => {}}>
        <input type="text" placeholder={t('form.placeholder.name')} required />
        <input type="text" placeholder={t('form.placeholder.email')} required />
        <input type="text" placeholder={t('form.placeholder.phone')} required />
        <textarea
          placeholder={t('form.placeholder.description')}
          //value={}
          //onChange={this.handleChange}
          rows={5}
          cols={5}
        />
        <button type="submit" className="btn btn-primary">
          {t('form.confirm')}
        </button>
      </Form>
    </Container>
  );
};

export default ContactForm;
