import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail } from './redux/actions';

const UserForm = () => {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User Information</h1>

      <div>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => dispatch(updateName(e.target.value))}
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => dispatch(updateEmail(e.target.value))}
        />
      </div>

      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default UserForm;
