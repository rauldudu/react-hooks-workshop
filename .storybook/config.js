import { configure } from "@storybook/react";

import "./storybook.scss";
import "../src/index.css";

const loadStories = () => {
  const req = require.context("../src/components", true, /.story.js$/);
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
