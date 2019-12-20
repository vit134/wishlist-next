import React from 'react';
import { Input, DatePicker } from 'antd';
import styles from './styles.module.css';

export class BitrthdayField extends React.Component {
  render () {
    const { value } = this.props;

    return (
      <div className={styles['bitrthday-fields']}>
        <Input
          type="text"
          value={value.name}
          onChange={this.handleNumberChange}
          className={styles['birthday-name-field']}
        />
        <DatePicker
          onChange={this.handleDateChange}
          format='DD MMM YYYY'
          defaultValue={value.date}
          className={styles['birthday-date-field']}
        />
      </div>
    );
  }

  handleNumberChange = e => {
    const name = e.target.value;

    this.triggerChange({ name });
  };

  handleDateChange = date => {
    this.triggerChange({ date });
  };

  triggerChange = changedValue => {
    const { onChange, value } = this.props;
    if (onChange) {
      onChange({
        ...value,
        ...changedValue,
      });
    }
  };
};
