import React from "react";

import { storiesOf, setAddon, addDecorator } from "@storybook/react";

import JSXAddon from "storybook-addon-jsx";
setAddon(JSXAddon);

import { withKnobs } from "@storybook/addon-knobs/react";
addDecorator(withKnobs);

import { Button } from "./Button";
import { wInfo } from "./utils";

import { color } from "@storybook/addon-knobs/react";

storiesOf("Button", module)
  .addWithJSX(
    "with background",
    wInfo(`
  decription of the component

  ~~~js
  <Button>Click here</Button>
  ~~~
  `)(() => <Button bg="palegoldenrod">Hello world</Button>)
  )
  .addWithJSX("with background 2", () => (
    <Button bg={color("bg", "green", "group1")}>Hello world2</Button>
  ));
