import React from 'react';
import { connect } from 'react-redux';
import { wishesRequest } from '../../src/requests';
import Link from 'next/link';
import { Table } from 'antd';
import { Image } from '../../src/components/image';

const { Column } = Table;

class ProfilePage extends React.Component {
  static async getInitialProps ({ req, res, ...props }) {
    let data = {};

    if (req.user && req.user._id) {
      try {
        const res = await wishesRequest(req.user._id);
        data = res.data;
      } catch (e) {
        data.err = e;
      }
    }

    return { wishes: data };
  }

  render () {
    const { wishes = {}, user = {} } = this.props;
    const { data = [] } = wishes;

    const { data: userData = {} } = user;

    return (
      <Table dataSource={data}>
        <Column
          title="Название"
          dataIndex="name"
          key="name"
          render={(text, el) => {
            return (
              <>
                {el.image && (
                  <span style={{ display: 'inline-block', maxWidth: '40px', marginRight: '10px' }}>
                    <Image src={el.image} size={50} crop/>
                  </span>
                )}
                <Link href={`/user/${userData.username}/${el._id}`}>{ el.name }</Link>
              </>
            );
          }}
        />
        <Column title="Цена" dataIndex="price" key="price" />
      </Table>
    );
  }
};

export default connect(state => state)(ProfilePage);
