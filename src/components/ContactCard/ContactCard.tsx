import { ContactCardProps } from 'interfaces/contact.inteface';
import React from 'react';

import { ContactCardContainer, ContactCardTitle } from './styled';

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <ContactCardContainer>
      <ContactCardTitle>{contact.name}</ContactCardTitle>
      <a href={'mailto:' + contact.email}>{contact.email}</a>
      <a href={'tel:' + contact.phone}>{contact.phone}</a>
    </ContactCardContainer>
  );
};

export default ContactCard;
