import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addInterest } from '../../actions/profile';

const AddInterest = ({ addInterest, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const {
    title,
    description,
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    addInterest(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Add Your Interest</h1>
      <small>* = required field</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Title'
            name='title'
            value={title}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Interest Description'
            name='description'
            value={description}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddInterest.propTypes = {
  addInterest: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addInterest }
)(withRouter(AddInterest));