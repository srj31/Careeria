import React from "react";

const ProfileInterest = ({ interest: { title, description } }) => {
  return (
    <div>
      <h3 className="text-dark">{title}</h3>
      {description && (
        <p>
          <strong>Description: </strong> {description}
        </p>
      )}
    </div>
  );
};

export default ProfileInterest;
