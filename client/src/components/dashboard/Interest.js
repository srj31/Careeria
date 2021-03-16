import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteInterest } from '../../actions/profile';

const Interest = ({ interest, deleteInterest }) => {
  const interests = interest.map(int => (
    <tr key={int._id}>
      <td>{int.title}</td>
      <td className='hide-sm'>{int.description}</td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => deleteInterest(int._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Interests</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th className='hide-sm'>Description</th>
            <th />
          </tr>
        </thead>
        <tbody>{interests}</tbody>
      </table>
    </Fragment>
  );
};

Interest.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteInterest: PropTypes.func.isRequired,
};

export default connect(
  null,
  { deleteInterest }
)(Interest);