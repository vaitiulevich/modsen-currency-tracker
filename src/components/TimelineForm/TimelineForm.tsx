import React, { Component } from 'react';
import { timelineFormFields } from '@constants/timeline';
import TimelineContext from '@store/TimelineContext';
import {
  TimelineContextType,
  TimelineData,
  TimelineFormProps,
  TimelineFormState,
} from 'interfaces/timeline.interface';

import {
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
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      timelineData: { ...prevState.timelineData, [name]: +value },
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(e, this.state.timelineData);
  };

  render() {
    return (
      <FormCurrency onSubmit={this.handleSubmit}>
        {timelineFormFields.map((field) => (
          <FormCurrencyInpPanel>
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
          </FormCurrencyInpPanel>
        ))}
        <SubmitButton type="submit">Change</SubmitButton>
      </FormCurrency>
    );
  }
}

export default TimelineForm;
