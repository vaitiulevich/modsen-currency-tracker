export interface ConversionProps {
  code: string;
  value?: number;
}

export interface ConversionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  conversionData: ConversionProps;
}
