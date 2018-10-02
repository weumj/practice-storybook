import React from "react";

import { storiesOf, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";

setAddon(JSXAddon);

import { Button } from "./Button";

storiesOf("Button", module)
  .addWithJSX("with background", () => (
    <Button bg="palegoldenrod">Hello world</Button>
  ))
  .addWithJSX("with background 2", () => (
    <Button bg="green">Hello world2</Button>
  ));
