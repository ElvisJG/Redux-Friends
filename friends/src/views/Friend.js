import React from 'react';

const Friend = props => {
  const { name, age, email } = props.friend;
  return (
    <li class='friend'>
      name: {name} age: {age} email: {email}
    </li>
  );
};

export default Friend;
