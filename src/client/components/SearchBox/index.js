import React from "react";
import "./search-ctnr.css";
import debounce from "lodash/debounce";

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.delayedCallback = debounce(this.props.onSearch, 300);
  }

  onChange(ev) {
    ev.persist();
    this.delayedCallback(ev);
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Movie Name."
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}
