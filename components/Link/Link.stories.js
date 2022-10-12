import React from "react";
import { Link } from "./Link";

export default {
  title: "Link",
  component: Link,
  argTypes: {
    variant: {
      options: ["secondary", "tertiary"],
      control: { type: "select" },
    },
  },
};

export const Primary = ({ variant }) => (
  <Link
    variant={variant}
    label="Shop Women's"
    url="https://www.hollisterco.com/shop/ca"
  ></Link>
);

Primary.args = {
  variant: "secondary",
};
