import { timelineFormFields } from '@constants/timeline';
import TimelineContext from '@store/TimelineContext';
import {
  TimelineContextType,
  TimelineData,
  TimelineFormProps,
  TimelineFormState,
} from 'interfaces/timeline.interface';
import React, { Component } from 'react';

class TimelineForm extends Component<TimelineFormProps, TimelineFormState> {
  static contextType = TimelineContext;
  context!: TimelineContextType;

  constructor(props: TimelineFormProps) {
    super(props);
    this.state = {
      timelineData: this.props.currentFinance || this.context.currentFinance,
    };
  }

  componentDidMount() {
    console.log(this.props.currentFinance);
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
      <form onSubmit={this.handleSubmit}>
        {timelineFormFields.map((field) => (
          <input
            readOnly={field.readonly}
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            defaultValue={
              this.state.timelineData[field.name as keyof TimelineData] + ''
            }
            onChange={this.handleChange}
            required={field.required}
          />
        ))}
        <button type="submit">Add Data</button>
      </form>
    );
  }
}

export default TimelineForm;
