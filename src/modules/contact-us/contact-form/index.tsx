import React, { FC } from 'react';
import { Container, Form } from './styles';
import * as tranlations from './Translations/en.json';

const ContactForm: FC = () => {
  return (
    <Container>
      <h1>{tranlations['contact.form.title']}</h1>
      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Email" required />
        <input type="text" placeholder="Phone Number" required />
        <textarea
          placeholder="Project Description"
          //value={}
          //onChange={this.handleChange}
          rows={5}
          cols={5}
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </Form>
    </Container>
  );
};

export default ContactForm;
