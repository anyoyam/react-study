import React, {Component, PropTyoes} from 'react';
import $ from 'jquery';
import './item.css';

class Item extends Component {

  constructor(props) {
    super(props);
  }

  tag() {
    return this.props.tag.map((t, i) => {
      return <a key={i} href="{t.tu}">{t.tn}</a>;
    });
  }

  render() {
    return (
      <span>
        <a href="{this.props.url}">{this.props.title}</a>
        <p>{this.tag()}</p>
      </span>
      );
  }
}

export default Item;
