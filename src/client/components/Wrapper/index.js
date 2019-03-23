import React from "react";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onMountFunction();
  }

  render() {
    return (
      <section className={`container ${this.props.className}`}>
        {this.props.children}
      </section>
    );
  }
}
