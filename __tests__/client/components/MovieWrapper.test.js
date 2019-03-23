import React from "react";
import { Wrapper } from "../../../src/client/components";
import { shallow } from "enzyme";

describe("Movie Wrapper Component", () => {
  it("Should render the component Wrapper", () => {
    const wrapper = shallow(
      <Wrapper>
        <div>Test</div>
      </Wrapper>
    );

    expect(wrapper.exists()).toBe(true);
  });
});
