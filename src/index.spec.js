let mockRaf;
jest.mock("raf", () => {
  return jest.fn(cb => {
    mockRaf = cb;
  });
});

import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import DeferRender from "./";

const Test = ({ name }) => <h1>{name}</h1>;
Test.foo = "bar";
const TestWrappedComponent = DeferRender(Test);

it("should hoist Static Methods from Wrapped Component", () => {
  expect(TestWrappedComponent.foo).toEqual(Test.foo);
});

it("should render Wrapped Component after two animation frames", () => {
  const wrapper = shallow(<TestWrappedComponent name="Abe" />);
  expect(toJSON(wrapper)).toMatchSnapshot();

  mockRaf();
  wrapper.update();
  expect(toJSON(wrapper)).toMatchSnapshot();

  mockRaf();
  wrapper.update();
  expect(toJSON(wrapper)).toMatchSnapshot();
});

