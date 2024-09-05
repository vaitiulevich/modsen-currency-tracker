import ContactCard from '@components/ContactCard/ContactCard';
import { contacts } from '@constants/contacts';
import React from 'react';

import { ContactContainer, ContactList, ContactTitle } from './styled';

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactList>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </ContactList>
    </ContactContainer>
  );
};

export default Contact;
