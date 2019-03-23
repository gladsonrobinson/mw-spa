import React from "react";
import { InfoMsg } from "../../../src/client/components";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("InfoMsg Component", () => {
  it("Should render the component", () => {
    const wrapper = shallow(<InfoMsg />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Should Render correctly when no props passed", () => {
    const wrapper = renderer.create(<InfoMsg />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("Should Show fetching status message on fetchStatus prop true", () => {
    const wrapper = shallow(<InfoMsg fetchStatus={true} />);
    expect(wrapper.find(".info-msg__fetching")).toBeDefined();
    expect(wrapper.find(".info-msg__fetching").text()).toEqual("fetching...");
  });

  it("Should Render correctly when fetchStatus prop true", () => {
    const wrapper = renderer.create(<InfoMsg fetchStatus={true} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("Should Render correctly when errorMessage prop contains value and fetchStatus is false", () => {
    const wrapper = renderer
      .create(<InfoMsg fetchStatus={false} errorMessage={"error message"} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("Should show error message when errorMessage prop contains value and fetchStatus is false", () => {
    const wrapper = shallow(
      <InfoMsg fetchStatus={false} errorMessage={"error message"} />
    );
    expect(wrapper.find(".info-msg__error").text()).toEqual(
      "Error Please Try Again"
    );
  });

  it("Should Render correctly when errorMessage prop contains value 'no_records_found' and fetchStatus is false", () => {
    const wrapper = renderer
      .create(<InfoMsg fetchStatus={false} errorMessage={"no_records_found"} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("Should show error message when errorMessage prop contains value 'no_records_found' and fetchStatus is false", () => {
    const wrapper = shallow(
      <InfoMsg fetchStatus={false} errorMessage={"no_records_found"} />
    );
    expect(wrapper.find(".info-msg__error").text()).toEqual("No Records Found");
  });
});
