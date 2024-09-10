// TimelineForm.tsx
import { TimelineData } from 'interfaces/timeline.interface';
import React, { Component } from 'react';
interface candlestickstate {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
}

interface TimelineFormProps {
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    candlestickData: candlestickstate,
  ) => void;
}

interface TimelineFormState {
  timelineData: TimelineData;
}

class TimelineForm extends Component<TimelineFormProps, TimelineFormState> {
  constructor(props: TimelineFormProps) {
    super(props);
    this.state = {
      timelineData: {
        date: '',
        open: '',
        high: '',
        low: '',
        close: '',
      },
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      timelineData: { ...prevState.timelineData, [name]: value },
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onSubmit(e, this.state.timelineData); // Передаем только событие
  };

  render() {
    const fields = [
      { name: 'date', type: 'date', placeholder: 'Date', required: true },
      { name: 'open', type: 'number', placeholder: 'Open', required: true },
      { name: 'close', type: 'number', placeholder: 'Close', required: true },
      { name: 'low', type: 'number', placeholder: 'Low', required: true },
      { name: 'high', type: 'number', placeholder: 'High', required: true },
    ];

    return (
      <form onSubmit={this.handleSubmit}>
        {fields.map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            defaultValue={
              this.state.timelineData[field.name as keyof TimelineData]
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
