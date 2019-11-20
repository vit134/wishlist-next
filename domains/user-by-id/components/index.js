import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import { Layout, Row } from 'antd';
import WishCard from '../components/wish-card';
import Filters from '../components/filters';
import { Pagination } from '../components/pagination';
import { selectFilters, selectWishesData, selectWishesCount } from '../selectors';
import { setFilters } from '../actions';
import styles from './styles.module.css';

const cx = classnames.bind(styles);

class UserPageContent extends React.Component {
  render () {
    const { wishes, wishesCount, filters } = this.props;
    const { currentPage, pageSize } = filters;

    return (
      <main className={styles.root}>
        <Layout.Content>
          <section className={styles.section}>
            <Filters />
          </section>
          <section className={cx('section', 'pagination')}>
            <Pagination
              showSizeChanger
              defaultPageSize={pageSize}
              defaultCurrent={currentPage}
              totalCount={wishesCount}
              onChange={this.handlePageSizeChange}
            />
          </section>
          <section className={styles.section}>
            <Row gutter={16}>
              {
                wishes.map(({ _id, name, image }) => (
                  <WishCard
                    id={_id}
                    key={_id}
                    name={name}
                    image={image}
                  />
                ))
              }
            </Row>
          </section>
        </Layout.Content>
      </main>
    );
  }

  handlePageSizeChange = (current, pageSize) => {
    const { filters, setFilters } = this.props;

    setFilters({ ...filters, pageSize });
  }
};

UserPageContent.defaultProps = {
  wiishes: []
};

const mapStateToProps = state => {
  return {
    filters: selectFilters(state),
    wishes: selectWishesData(state),
    wishesCount: selectWishesCount(state)
  };
};

const mapDispatchToProps = {
  setFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContent);
