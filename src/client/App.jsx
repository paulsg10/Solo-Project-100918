import React, { Component } from 'react';

import MemoForm from './components/MemoForm.js';
import AllMemos from './components/AllMemos.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			memoList: [],
			newMemo: '',
		};
		// this.loadMemosFromServer = this.loadMemosFromServer.bind(this);
		this.handleMemoSubmit = this.handleMemoSubmit.bind(this);
    this.handleMemoDelete = this.handleMemoDelete.bind(this);
		// this.handleMemoUpdate = this.handleMemoUpdate.bind(this);
	}

	componentDidMount() {
		fetch('/memos')
		.then((data) => {
			return data.json();
		})
		.then((memoList) => {
			console.log(memoList);
      this.setState({ ...this.state, memoList: memoList });
    })
	}

	handleMemoSubmit(title, text) {
    let memoListCopy = this.state.memoList.slice();

    fetch('/memos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
				memoTitle: title,
				memoText: text
      })
    })
    .then((data) => {
      return data.json();
    })
    .then((newMemo) => {
      memoListCopy.push(newMemo);
      this.setState({ ...this.state, memoList: memoListCopy, newMemo: '' })
    })
	}

	handleMemoDelete(id) {
		let memoListCopy = this.state.memoList.slice();

		fetch('/delete', {
			method: 'DELETE',
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify({
				memoId: id
			})
		})
		.then((data) => {
			return data.json();
		})
		.then((deleteMemo) =>{
			console.log(deleteMemo);
			const memoListFilter = memoListCopy.filter((element) =>{
				if (element._id !== deleteMemo._id) {
					return true;
				}
			})
			console.log(memoListFilter);
			this.setState({ memoList: memoListFilter, newMemo: '' })
		})
	}

	render() {
		return (
				<div className="App">
					<div className="navbar">
					<h1 className="center">C.R._App Memo</h1>
					</div>
					<MemoForm onMemoSubmit={ this.handleMemoSubmit } />
					<AllMemos memoList={ this.state.memoList } handleMemoDelete={this.handleMemoDelete} />

				</div>
		)
	}
}

export default App;