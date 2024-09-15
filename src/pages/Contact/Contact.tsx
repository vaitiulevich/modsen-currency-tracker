import ContactCard from '@components/ContactCard/ContactCard';
import { contacts } from '@constants/contacts';

import { ContactContainer, ContactList, ContactTitle } from './styled';

const Contact = () => {
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