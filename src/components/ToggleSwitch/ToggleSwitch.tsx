import { memo } from 'react';

import { ToggleContainer, ToggleInput, ToggleSlider } from './styled';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
}

const ToggleSwitch = ({ checked, onChange }: ToggleSwitchProps) => {
  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" checked={checked} onChange={onChange} />
      <ToggleSlider checked={checked} />
    </ToggleContainer>
  );
};

export default memo(ToggleSwitch);
