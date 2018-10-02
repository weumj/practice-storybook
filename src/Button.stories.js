import React from "react";

import { storiesOf, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";

setAddon(JSXAddon);

import { Button } from "./Button";
import { wInfo } from "./utils";

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
    <Button bg="green">Hello world2</Button>
  ));
