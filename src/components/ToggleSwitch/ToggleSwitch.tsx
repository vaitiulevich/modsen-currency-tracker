import PropTypes from 'prop-types';
import React from 'react';

import { ToggleContainer, ToggleInput, ToggleSlider } from './styled';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" checked={checked} onChange={onChange} />
      <ToggleSlider checked={checked} />
    </ToggleContainer>
  );
};

ToggleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToggleSwitch;
