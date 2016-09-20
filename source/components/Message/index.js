import React, {Component} from 'react';
import $ from 'jquery';
import './message.css';

export default class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      title: '标题',
      content: '消息框内容',
    }
  }
  render() {
    return (
      <div className={`message${this.state.show ? '' : ' hide'}`}>
        <h1 className="title">{this.state.title}</h1>
        <div className="content">{this.state.content}</div>
      </div>
    );
  }
}
