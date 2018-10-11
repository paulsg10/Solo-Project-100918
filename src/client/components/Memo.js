import React, { Component } from 'react';

class Memo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { memoTitle, memoText, handleMemoDelete, id } =this.props
    return(
      <div id={id} className="memo">
        <h3 className="memo_title">{memoTitle}</h3>
        <p className="memo_message">{memoText}</p>
        <div className="button_container">
          <button type="button" className="memo_button" /*onClick={() => handleMemoEdit()}*/ >Edit</button>
          <button type="button" className="memo_button" onClick={() => handleMemoDelete(id)} >Delete</button>
        </div>
      </div>
    )
  }
}

export default Memo;