import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Form, Input, Select, Button, Icon } from 'antd';
import classnames from 'classnames/bind';
import { selectFilters } from '../../selectors';
import { clearFilters, applyWishesWithFilters } from '../../actions';
import debounce from 'lodash/debounce';
import styles from './styles.module.css';

const cx = classnames.bind(styles);

const { Option } = Select;
const ButtonGroup = Button.Group;

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

const getSortType = sortType => {
  let result = sortType;

  switch (sortType) {
    case 'asc':
      result = 'desc';
      break;
    case 'desc':
      result = 'asc';
      break;
  }

  return result;
};

const IconSort = ({ sort }) => {
  return (
    sort === 'asc'
      ? <Icon type={'vertical-align-top'} />
      : <Icon type={'vertical-align-bottom'} />
  );
};

const handleFieldsChange = debounce((props, changedFields, allFields) => {
  const { applyWishesWithFilters } = props;
  const data = Object.entries(allFields).reduce((acc, [name, { value }]) => {
    acc[name] = value;
    return acc;
  }, {});

  applyWishesWithFilters(data);
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
    const { form, filters } = this.props;
    const { getFieldDecorator } = form;

    const {
      name,
      categories,
      tags,
      price,
      date,
    } = filters;

    return (
      <Card className={styles.root}>
        <Form layout='inline'>
          <div className={styles.title}>
            {/* <Icon type="filter" /> */}
            Фильтры
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <Row>
                <Col>
                  <FormItem search='name' label="Название">
                    {getFieldDecorator('name', { initialValue: name })(
                      <Input placeholder="Какая-то белиберда с aliexpress" />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <div className={styles.row}>
                <div className={cx('col', 'width_50')}>
                  <FormItem search='categories' label="Категория">
                    {getFieldDecorator('categories', { initialValue: categories })(
                      <Select placeholder='Выберите категорию' allowClear>
                        {
                          categoriesList.map(([value, name]) => (
                            <Option key={value}>{ name }</Option>
                          ))
                        }
                      </Select>
                    )}
                  </FormItem>
                </div>
                <div className={cx('col', 'width_50')}>
                  <FormItem search='tags' label='Тэги' flex>
                    {getFieldDecorator('tags', { initialValue: tags })(
                      <Select placeholder='Выберите тэги' allowClear>
                        {
                          tagsList.map(([value, name]) => (
                            <Option key={value}>{ name }</Option>
                          ))
                        }
                      </Select>
                    )}
                  </FormItem>
                </div>
              </div>
            </div>
            <div className={cx('col', 'sort')}>
              <div>
                <FormItem>
                  <ButtonGroup>
                    <Button onClick={this.handleChangeDateField}>
                      <IconSort sort={date} />
                      Дата
                    </Button>
                    <Button onClick={this.handleChangePriceField}>
                      <IconSort sort={price} />
                      Цена
                    </Button>
                  </ButtonGroup>
                </FormItem>
                {getFieldDecorator('price', { initialValue: price })(
                  <Input type='hidden' />
                )}
                {getFieldDecorator('date', { initialValue: date })(
                  <Input type='hidden' />
                )}
              </div>
            </div>
          </div>
        </Form>
      </Card>
    );
  }

  handleChangePriceField = () => {
    const { form, filters } = this.props;
    const { setFieldsValue } = form;
    const newValue = getSortType(filters.price);
    setFieldsValue({
      price: newValue,
    });
  }

  handleChangeDateField = () => {
    const { form, filters } = this.props;
    const { setFieldsValue } = form;
    const newValue = getSortType(filters.date);

    setFieldsValue({
      date: newValue,
    });
  }
};

const mapStateToProps = state => {
  return {
    filters: selectFilters(state),
  };
};

const mapDispatchToProps = {
  applyWishesWithFilters,
  clearFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({
  onFieldsChange: handleFieldsChange,
})(Filters));
