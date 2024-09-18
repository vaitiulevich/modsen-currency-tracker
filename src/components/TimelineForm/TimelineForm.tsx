import { ChangeEvent, FormEvent, PureComponent } from 'react';
import { timelineFormFields } from '@constants/timeline';
import TimelineContext, { TimelineContextType } from '@store/TimelineContext';
import { validateInput } from '@utils/validation';
import {
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

class TimelineForm extends PureComponent<TimelineFormProps, TimelineFormState> {
  static contextType = TimelineContext;
  context!: TimelineContextType;

  constructor(props: TimelineFormProps) {
    super(props);
    this.state = {
      timelineData: this.props.currentFinance || this.context.currentFinance,
      errors: {},
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const errors = validateInput({ name, value });
    this.setState((prev) => ({
      ...prev,
      errors,
    }));
    this.setState((prevState) => ({
      ...prevState,
      timelineData: {
        ...prevState.timelineData,
        [name]: +value ? +value : value,
      },
    }));
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { timelineData } = this.state;
    this.props.onSubmit(e, timelineData);
  };

  getInputValue = (name: string) => {
    const { timelineData } = this.state;

    if (name === 'x') {
      const dateValue = timelineData[name as keyof TimelineData];
      return dateValue ? this.formatDate(new Date(dateValue)) : '';
    }

    return String(timelineData[name as keyof TimelineData] || '');
  };

  formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  renderFields() {
    const { errors, timelineData } = this.state;

    return timelineFormFields.map(
      ({ name, fulltitle, type, readonly, required }) => (
        <FormCurrencyInpPanel key={name}>
          <label>{fulltitle}</label>
          <FormCurrencyInput
            readOnly={readonly}
            type={type}
            name={name}
            // value={
            //   name in timelineData
            //     ? String(timelineData[name as keyof TimelineData])
            //     : ''
            // }
            value={this.getInputValue(name)}
            placeholder={fulltitle}
            onChange={this.handleChange}
            required={required}
          />
          {errors[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
        </FormCurrencyInpPanel>
      ),
    );
  }

  render() {
    const { errors } = this.state;
    const hasErrors = Object.keys(errors).length !== 0;
    return (
      <FormCurrency onSubmit={this.handleSubmit}>
        {this.renderFields()}
        <SubmitButton disabled={hasErrors} type="submit">
          Change
        </SubmitButton>
      </FormCurrency>
    );
  }
}

export default TimelineForm;
