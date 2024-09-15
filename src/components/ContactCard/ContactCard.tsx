import { ContactCardProps } from 'interfaces/contact.inteface';
import PropTypes from 'prop-types';

import { ContactCardContainer, ContactCardTitle } from './styled';

const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <ContactCardContainer>
      <ContactCardTitle>{contact.name}</ContactCardTitle>
      <a href={'mailto:' + contact.email}>{contact.email}</a>
      <a href={'tel:' + contact.phone}>{contact.phone}</a>
    </ContactCardContainer>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactCard;
