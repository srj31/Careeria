import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProfileItem.css';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile' style={{backgroundImage: "linear-gradient(90deg, #20B2AA, white)"}}>
      <img className='round-img' src={avatar} alt='' style={{border: "2px solid white"}}/>
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary' style={{boxShadow: "1px 1px 5px white"}}>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index}>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;