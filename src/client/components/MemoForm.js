import React, { Component } from 'react';

class MemoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memoTitle: '',
      memoText: '',
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ memoTitle: event.target.value });
  }

  handleTextChange(event) {
    this.setState({ memoText: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
    let title = this.state.memoTitle.trim();
    let text = this.state.memoText.trim();
    console.log(title, text);
    if (!title || !text) {
      return;
    }
    const { memoTitle, memoText } = this.state;
    this.props.onMemoSubmit(memoTitle, memoText);

    this.setState({ memoTitle: '', memoText: '' });
  }

  render() {
    return (
    <div className="memo-container">
      <h1 className="memo_heading">Create Memo</h1>
      <form  className="form" onSubmit={ this.handleSubmit }>
        <input required type="text" placeholder="Enter Memo Title" value={this.state.memoTitle} onChange={this.handleTitleChange}/><br /><br />
        <textarea required rows="5" cols="28" placeholder="Take a memo..." value={this.state.memoText} onChange={this.handleTextChange}/><br /><br />
        <input type="submit" className="post-button" value="Post" />
      </form>
      <p className="creation">Created by Paul Gi</p>
    </div>
    );
  }
}
export default MemoForm;