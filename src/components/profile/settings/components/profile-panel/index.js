import React, { forwardRef } from 'react';
import { connect } from 'react-redux';
import { Form, Input, DatePicker, Button, Divider, Radio, Avatar, Icon } from 'antd';
import moment from 'moment';
import { userUpdate } from 'domains/root/operations/user';
import { openLoginPopup } from 'domains/root/actions/login-popup';
import { selectUserData, selectUserIsLoading } from 'domains/root/selectors/user-login';
import { selectChangedFormFields } from 'domains/profile/selectors';
import { setChangedFormFileds, clearChangedFormFileds } from 'domains/profile/actions';
import DynamicFieldSet from './components/dynamic-holidays';
import { PhoneInput } from './components/phone-input';
// import ResidenseField from './components/residense-field';
import { getNumbersPhone } from 'helpers';
import styles from './styles.module.css';

moment.locale('ru');

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 19 },
  },
};

// const phoneRegExp = new RegExp(/^((8|\+7)[[ ])([(]\d{3}[)][ ])(\d{3}[-])(\d{2})([-]\d{2})/g);

const handleChangeFormFields = (props, changedFields, allFields) => {
  const { onSetChangedFormFileds } = props;

  // console.log(Object.fromEntries(Object.entries(allFields).filter(([key, value]) => {
  //   return key.includes('holidays-') || key === 'keys';
  // })));

  onSetChangedFormFileds(allFields);
};

class ProfilePanelForm extends React.Component {
  state = {
    fileName: this.props.user.avatar,
  }

  render () {
    const { form, user, isLoading } = this.props;
    const { fileName } = this.state;
    const { getFieldDecorator } = form;

    return (
      <div className={styles.form}>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label='Логин'>
            {getFieldDecorator('username', {
              initialValue: user.username,
              rules: [{ required: true, whitespace: true }],
            })(<Input name={'username'} />)}
          </Form.Item>
          <Form.Item label='Имя'>
            {getFieldDecorator('firstname', {
              initialValue: user.firstname,
            })(<Input name={'firstname'} allowClear />)}
          </Form.Item>
          <Form.Item label='Фамилия'>
            {getFieldDecorator('lastname', {
              initialValue: user.lastname,
            })(<Input name={'lastname'} allowClear />)}
          </Form.Item>
          <Form.Item label="Аватар">
            <div className={styles['image-block']}>
              {
                fileName && <Avatar src={fileName} />
              }
              <label htmlFor="upload" className={styles['image-button']}>
                {
                  fileName ? 'Изменить' : 'Добавить'
                }
              </label>
            </div>
            <input type="file" id='upload' name="image" accept="image/*" onChange={this.handleChangeFile}/>
          </Form.Item>
          <Form.Item label="День рождения">
            {getFieldDecorator('date_of_birth', {
              initialValue: user.date_of_birth && moment(user.date_of_birth),
            })(<DatePicker format='DD MMM YYYY' name='date_of_birth' style={{ width: '100%' }}/>)}
          </Form.Item>
          <Form.Item label='Пол'>
            {getFieldDecorator('gender', {
              initialValue: user.gender,
            })(
              <Radio.Group name='gender'>
                <Radio.Button value="m">Мужской</Radio.Button>
                <Radio.Button value="w">Женский</Radio.Button>
                <Radio.Button value="n">Не важно</Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              initialValue: user.email,
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
              ],
            })(<Input name='email' allowClear />)}
          </Form.Item>
          <Form.Item label="Телефон">
            {getFieldDecorator('phone', {
              initialValue: user.phone,
            })(
              <PhoneInput mask="+7 (999) 999-99-99" allowClear />
            )}
          </Form.Item>
          {/* <Form.Item label='Страна'>
            {getFieldDecorator('residense', {
              initialValue: { country: null, city: null },
            })(
              <ResidenseField />
            )}
          </Form.Item> */}
          <Divider>Праздники</Divider>
          <DynamicFieldSet form={form} initial={user.holidays} />

          <Divider />
          <div className={styles['form-footer']}>
            <Button htmlType='submit' loading={isLoading} disabled={isLoading}>
              {!isLoading && <Icon type="save" />}
                Сохранить
            </Button>
          </div>
        </Form>
      </div>
    );
  }

  handleChangeFile = ({ target }) => {
    const file = target.files[0];

    var reader = new FileReader();

    reader.onloadend = () => {
      this.setState({ fileName: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form, userUpdate } = this.props;
    form.validateFields((err, dataFromForm) => {
      if (!err) {
        const formData = new FormData(e.target);
        const { phone, holidays, date_of_birth } = dataFromForm; // eslint-disable-line camelcase

        formData.set('phone', getNumbersPhone(phone));
        formData.set('holidays', JSON.stringify(holidays || []));
        formData.set('date_of_birth', moment(date_of_birth));

        userUpdate(formData);
      }
    });
  }
};

const ProfilePanel = Form.create({
  name: 'profile-settings',
  onFieldsChange: handleChangeFormFields,
})(ProfilePanelForm);

const mapStateToProps = state => ({
  isLoading: selectUserIsLoading(state),
  user: selectUserData(state),
  changedFields: selectChangedFormFields(state),
  // isFormChanged: selectIsProfileDataChanged(state),
});

const mapDispatchToProps = {
  userUpdate: userUpdate,
  openLoginPopup: openLoginPopup,
  onSetChangedFormFileds: setChangedFormFileds,
  onClearChangedFormFileds: clearChangedFormFileds,
};

const Connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePanel);

export default forwardRef((props, ref) => (
  <Connected {...props} ref={ref} />
));
