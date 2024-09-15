import { Link } from '@components/Link/Link';
import { ContactCardProps } from 'interfaces/contact.inteface';

import { ContactCardContainer, ContactCardTitle } from './styled';

const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <ContactCardContainer>
      <ContactCardTitle>{contact.name}</ContactCardTitle>
      <Link href={`mailto: ${contact.email}`}>{contact.email}</Link>
      <Link href={`tel: ${contact.phone}`}>{contact.phone}</Link>
    </ContactCardContainer>
  );
};

export default ContactCard;
