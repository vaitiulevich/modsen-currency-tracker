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

export default ToggleSwitch;
