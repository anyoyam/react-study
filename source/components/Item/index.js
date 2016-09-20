import React, {Component} from 'react';
import $ from 'jquery';

class Item extends Component {

  constructor(props) {
    super(props);
  }

  tag() {
    return this.props.tag.map((t) => {
      return <a href="{t.tu}">{t.tn}</a>;
    });
  }

  rander() {
    return (
      <span>
        <a href="{this.props.url}">{this.props.title}</a>
        <p>{this.tag()}</p>
      </span>
      );
  }
}

export default Item;
