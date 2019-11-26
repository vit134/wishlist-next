import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import { Layout, Row, Empty } from 'antd';
import WishCard from '../components/wish-card';
import Filters from '../components/filters';
import { Pagination } from '../components/pagination';
import { selectFilters, selectWishesCount, selectWishesData, selectPagination } from '../selectors';
import styles from './styles.module.css';

const cx = classnames.bind(styles);

const WishesList = ({ wishes }) => {
  if (!wishes || !wishes.length) {
    return (
      <div className={styles.empty}>
        <Empty />
      </div>
    );
  }

  return (
    <>
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
    </>
  );
};

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
              <WishesList wishes={wishes} />
            </Row>
          </section>
        </Layout.Content>
      </main>
    );
  }

  handlePageSizeChange = (currentPage, pageSize) => {
    const { setPaginationWishesData } = this.props;

    setPaginationWishesData({ currentPage, pageSize });
  }
};

UserPageContent.defaultProps = {
  wishes: [],
};

const mapStateToProps = state => {
  return {
    wishes: selectWishesData(state),
    filters: selectFilters(state),
    wishesCount: selectWishesCount(state),
    pagination: selectPagination(state),
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContent);
