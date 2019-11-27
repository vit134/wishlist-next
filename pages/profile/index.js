import React from 'react';
import { connect } from 'react-redux';
import { wishesRequest } from '../../src/requests';
import Link from 'next/link';
import { Table } from 'react-bootstrap';
import { Image } from '../../src/components/image';

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
    const { wishes, user } = this.props;
    const { data = [] } = wishes;

    const { data: userData } = user;

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Бронь</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((el, ind) => {
              return (
                <tr key={el._id}>
                  <td>{ind + 1}</td>
                  <td>
                    {el.image && (
                      <span style={{ display: 'inline-block', maxWidth: '40px', marginRight: '10px' }}>
                        <Image src={el.image} size={50} crop/>
                      </span>
                    )}
                    <Link href={`/user/${userData.username}/${el._id}`}>{ el.name }</Link>
                  </td>
                  <td>{ el.price }</td>
                  <td>{ el.assigned && el.assigned }</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    );
  }
};

export default connect(state => state)(ProfilePage);
