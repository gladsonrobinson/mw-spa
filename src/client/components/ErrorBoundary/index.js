import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasComponentError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasComponentError: true });
  }

  render() {
    if (this.state.hasComponentError) {
      return <h4 className="component--error">Some thing went wrong</h4>
    }
    return this.props.children;
  }
}
