import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class DateTimePicker extends React.Component {

  render() {
    return (
            <DatePicker
                showTimeSelect
                id="date-picker"
            />
    );
  }
}