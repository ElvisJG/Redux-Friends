import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/friendsActions';

class FriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };

  handleChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, age, email } = this.state;
    this.props.addFriend({ name, age, email });

    this.setState({ name: '', age: '', email: '' });
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <form className='friend-form' onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Name'
          value={name}
          required
          onChange={this.handleChange}
        />
        <input
          name='age'
          type='number'
          placeholder='Age'
          value={age}
          required
          onChange={this.handleChange}
        />
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          required
          onChange={this.handleChange}
        />
        <button type='submit' className='submit-friend'>
          Add New Friend
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingFriend: state.creatingFriend
  };
};

const mapDispatchToProps = {
  addFriend
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendForm);
