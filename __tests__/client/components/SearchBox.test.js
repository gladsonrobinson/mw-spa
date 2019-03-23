import React from "react";
import { SearchBox } from "../../../src/client/components";
import { shallow } from "enzyme";
import * as sinon from "sinon";

import renderer from "react-test-renderer";

describe("Search Component", () => {
  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  it("Should render the component", () => {
    const searchFunction = jest.fn();
    const wrapper = shallow(<SearchBox onSearch={searchFunction} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render correctly the component", () => {
    const searchFunction = jest.fn();
    const SearchBoxComponent = renderer
      .create(<SearchBox onSearch={searchFunction} />)
      .toJSON();
    expect(SearchBoxComponent).toMatchSnapshot();
  });

  it("Should not trigger search function on input change before 300 m sec", () => {
    const searchFunction = jest.fn();
    const wrapper = shallow(<SearchBox onSearch={searchFunction} />);
    wrapper.find("input").simulate("change", {
      target: {
        value: "hello"
      },
      persist: () => {}
    });

    expect(searchFunction).toHaveBeenCalledTimes(0);
  });

  it("Should trigger search function on input field change after debounce of 300 m sec", () => {
    const searchFunction = jest.fn();
    const wrapper = shallow(<SearchBox onSearch={searchFunction} />);
    wrapper.find("input").simulate("change", {
      target: {
        value: "hello"
      },
      persist: () => {}
    });

    clock.tick(300);
    expect(searchFunction).toHaveBeenCalledTimes(1);
  });
});
