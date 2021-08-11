import * as React from "react";
import { JSDOM } from "jsdom";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";

configure({ adapter: new Adapter() });

/* THE BELOW ARE ACCESSIBLE AND PREDEFINED FOR ALL *.TEST.JS FILES */
const { document } = new JSDOM(
  "<!DOCTYPE html><body><div id='root'></div></body>"
).window;
global.document = document;
global.window = document.defaultView;
global.HTMLElement = window.HTMLElement;
global.HTMLAnchorElement = window.HTMLAnchorElement;
global.React = React;
global.requestAnimationFrame = (callback) => setTimeout(callback, 0);
global.cancelAnimationFrame = (id) => clearTimeout(id);

global.navigator = {
  userAgent: "node.js",
};