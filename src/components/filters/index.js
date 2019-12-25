import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Checkbox, Card, Form, Input, Select } from 'antd';
import classnames from 'classnames/bind';
import { clearFilters, applyWishesWithFilters } from '../../../domains/user-by-id/actions';
import debounce from 'lodash/debounce';
import styles from './styles.module.css';

const cx = classnames.bind(styles);

const categoriesList = [
  ['phones', 'Телефоны'],
  ['computers', 'Компьютеры'],
  ['cameras', 'Камеры'],
];

const tagsList = [
  ['birthday', 'День рождения'],
  ['for_fun', 'Для фана'],
  ['for_soul', 'Для души'],
];

const handleFieldsChange = debounce((props, changedFields, allFields) => {
  const { applyWishesWithFilters } = props;
  const filters = Object.entries(allFields).reduce((acc, [name, { value }]) => {
    if (value) {
      acc[name] = value;
    }

    return acc;
  }, {});

  applyWishesWithFilters(filters);
}, 200);

const FormItem = ({ fieldName, label, flex, children }) => {
  return (
    <div className={cx('form-item', { flex })}>
      {label && (
        <div className={styles.label}>
          <label htmlFor={fieldName}>{ label }</label>
        </div>
      )}
      <div className={styles.control}>
        { children }
      </div>
    </div>
  );
};

class Filters extends Component {
  render () {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Card className={styles.root}>
        <Form layout='inline'>
          <div className={styles.row}>
            <div className={cx('col', 'width_50')}>
              <FormItem label="Название">
                {getFieldDecorator('name')(
                  <Input placeholder="Какая-то белиберда с aliexpress" />
                )}
              </FormItem>
            </div>
            <div className={cx('col', 'width_50')}>
              <div className={styles.row}>
                <div className={cx('col', 'width_50')}>
                  <FormItem label="Цена">
                    {getFieldDecorator('price_from')(
                      <Input placeholder="1000" />
                    )}
                  </FormItem>
                </div>
                <div className={cx('col', 'width_50')}>
                  <FormItem label="до">
                    {getFieldDecorator('price_to')(
                      <Input placeholder="1000" />
                    )}
                  </FormItem>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={cx('col', 'width_50')}>
              <FormItem search='categories' label="Категория">
                {getFieldDecorator('categories')(
                  <Select placeholder='Выберите категорию' allowClear>
                    {
                      categoriesList.map(([value, name]) => (
                        <Select.Option key={value}>{ name }</Select.Option>
                      ))
                    }
                  </Select>
                )}
              </FormItem>
            </div>
            <div className={cx('col', 'width_50')}>
              <FormItem search='tags' label='Тэги' flex>
                {getFieldDecorator('tags')(
                  <Select placeholder='Выберите тэги' allowClear>
                    {
                      tagsList.map(([value, name]) => (
                        <Select.Option key={value}>{ name }</Select.Option>
                      ))
                    }
                  </Select>
                )}
              </FormItem>
            </div>
          </div>
          <div className={styles.row}>
            <div>
              {getFieldDecorator('with_image')(
                <Checkbox>С изображением</Checkbox>
              )}
              {getFieldDecorator('with_link')(
                <Checkbox>Ссылка на товар</Checkbox>
              )}
            </div>
            {/* <div className={styles['clear-button']}>
              <Button onClick={clearFilters} type="dashed" size='small' disabled>Очистить</Button>
            </div> */}
          </div>
        </Form>
      </Card>
    );
  }
};

const mapStateToProps = state => state;

const mapDispatchToProps = {
  applyWishesWithFilters,
  clearFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({
  onFieldsChange: handleFieldsChange,
})(Filters));
