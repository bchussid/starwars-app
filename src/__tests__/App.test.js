import React from "react";
import App from "../App";
import Home from "../components/Home";
import Nav from "../components/Nav";
import Films from "../components/Films";
import People from "../components/People";
import Planets from "../components/Planets";
import Species from "../components/Species";
import Starships from "../components/Starships";
import Vehicles from "../components/Vehicles";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

describe("app is present & renders components correctly", () => {
  test("app renders home", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Home)).toBeTruthy();
  });
  test("app renders nav", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Nav)).toBeTruthy();
  });
  test("app renders films", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Films)).toBeTruthy();
  });
  test("app renders people", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(People)).toBeTruthy();
  });
  test("app renders planets", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Planets)).toBeTruthy();
  });
  test("app renders species", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Species)).toBeTruthy();
  });
  test("app renders starships", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Starships)).toBeTruthy();
  });
  test("app renders vehicles", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Vehicles)).toBeTruthy();
  });
});
