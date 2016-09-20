import React, {Component, PropTyoes} from 'react';
import {render,findDOMNode} from 'react-dom';
import './common/common.css';
import Item from './components/Item';
import Message from './components/Message';

let tag = [
  {tu: '/tag/test', tn: 'test'}
];

let frame = (
  <div>
    <Item url="http://www.baidu.com" title="百度" tag={tag}/>
    <Message />
  </div>
  );

render(frame, document.getElementById("main"));
