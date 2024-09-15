import { ChangeEvent, Component, FormEvent } from 'react';
import { timelineFormFields } from '@constants/timeline';
import TimelineContext from '@store/TimelineContext';
import {
  TimelineContextType,
  TimelineData,
  TimelineFormProps,
  TimelineFormState,
} from 'interfaces/timeline.interface';

import {
  ErrorMessage,
  FormCurrency,
  FormCurrencyInpPanel,
  FormCurrencyInput,
  SubmitButton,
} from './styled';

class TimelineForm extends Component<TimelineFormProps, TimelineFormState> {
  static contextType = TimelineContext;
  context!: TimelineContextType;

  constructor(props: TimelineFormProps) {
    super(props);
    this.state = {
      timelineData: this.props.currentFinance || this.context.currentFinance,
      errors: {},
    };
  }

  validateInput = (name: string, value: string) => {
    const errors: { [key: string]: string } = {};
    const numberPattern = /^\d*([.,]\d{0,7})?$/;

    if (value.trim() === '') {
      errors[name] = 'Empty value';
    }

    if (!numberPattern.test(value)) {
      errors[name] = 'Invalid value';
    } else {
      const numericValue = parseFloat(value.replace(',', '.'));
      if (numericValue <= 0) {
        errors[name] = 'The minimum value is greater than 0.';
      }
      if (numericValue >= 1000000) {
        errors[name] = 'The maximum value is not greater than 1000000.';
      }
    }

    this.setState({ errors });
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      timelineData: { ...prevState.timelineData, [name]: +value },
    }));
    this.validateInput(name, value);
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(e, this.state.timelineData);
  };

  render() {
    return (
      <FormCurrency onSubmit={this.handleSubmit}>
        {timelineFormFields.map((field, ind) => (
          <FormCurrencyInpPanel key={ind}>
            <label>{field.fulltitle}</label>
            <FormCurrencyInput
              readOnly={field.readonly}
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.fulltitle}
              defaultValue={
                this.state.timelineData[field.name as keyof TimelineData] + ''
              }
              onChange={this.handleChange}
              required={field.required}
            />
            {this.state.errors[field.name] && (
              <ErrorMessage>{this.state.errors[field.name]}</ErrorMessage>
            )}
          </FormCurrencyInpPanel>
        ))}
        <SubmitButton
          disabled={Object.keys(this.state.errors).length !== 0}
          type="submit"
        >
          Change
        </SubmitButton>
      </FormCurrency>
    );
  }
}

export default TimelineForm;
