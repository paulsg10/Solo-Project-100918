import React, { Component } from 'react';
import Memo from './Memo.js';

class AllMemos extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { memoList, handleMemoDelete } = this.props
    let memoDisplays = memoList.map((memo) => {
      return (
      <Memo key={memo._id} id={memo._id} memoTitle={memo.memoTitle} memoText={memo.memoText} handleMemoDelete={handleMemoDelete}/>
      )
    })
    return (
      <div className="my_memos">
        <h1 className="memo_heading">My Memos</h1>
        <div className="memos_container">
        { memoDisplays }
        </div>
      </div>
    );
  }
}

export default AllMemos;