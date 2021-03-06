import React, { Component } from 'react';
import { Form, Icon, Button } from 'antd';
import { BitrthdayField } from '../birthday-field';
import styles from './styles.module.css';
import './styles.css';
import moment from 'moment';

class DynamicFieldSet extends Component {
  remove = k => {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');

    form.setFieldsValue({
      keys: keys.filter((key, ind) => {
        console.log(key);
        return ind !== k;
      }),
      // keys: keys.splice(k, 1),
    });
  };

  add = () => {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');

    const nextKeys = keys.concat({ name: '', date: moment().utc().format('YYYY-MM-DDTHH:mm:ss.000\\Z') });
    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  render () {
    const { form, initial } = this.props;
    const { getFieldDecorator, getFieldValue } = form;

    getFieldDecorator('keys', { initialValue: getFieldValue('keys') || initial });

    const keys = getFieldValue('keys');
    const formItems = keys.map((el, ind) => {
      return <Form.Item
        label=' '
        colon={false}
        required={false}
        className='blabla'
        key={ind}
      >
        {getFieldDecorator(`holidays[${ind}]`, {
          initialValue: { name: el.name, date: el.date },
        })(<BitrthdayField />)}
        {keys.length > 0 ? (
          <Icon
            className={styles['delete-button']}
            type="close"
            onClick={() => this.remove(ind)}
          />
        ) : null}
      </Form.Item>;
    });

    return (
      <>
        {formItems}
        <Form.Item wrapperCol={{ sm: { span: 24 } }}>
          {formItems.length === 0 && (
            <div className={styles.text}>
              Добавьте свой первый праздник,<br />это поможет группировать и сортировать ваши желания
            </div>
          )}
          <div className={styles['button-block']}>
            <Button type="dashed" onClick={this.add}>
              <Icon type="plus" /> Добавить
            </Button>
          </div>
        </Form.Item>
      </>
    );
  }

  validateHolidays = (rule, value, setError) => {
    if (value.name && !value.date) {
      return setError('Заполните дату праздника');
    }

    if (!value && value.date) {
      return setError('Заполните название праздника');
    }

    if (!value.name && !value.date) {
      return setError('Указжите название праздника и дату, или удалите строку');
    }
  }
}

export default DynamicFieldSet;
