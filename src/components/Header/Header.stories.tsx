import { Story, Meta } from "@storybook/react";
import { Header, Props } from "./Header";

export default {
  title: "/component/Header",
  component: Header,
  argTypes: {
    navDirection: {
      control: {
        type: "radio",
        options: ["row", "row-reverse", "column", "column-reverse"],
      },
    },
    headerDirection: {
      control: {
        type: "radio",
        options: ["row", "row-reverse", "column", "column-reverse"],
      },
    },
    headerJustify: {
      control: {
        type: "radio",
        options: [
          "center",
          "space-between",
          "space-evenly",
          "space-around",
          "flex-start",
          "flex-end",
        ],
      },
    },
    navJustify: {
      control: {
        type: "radio",
        options: [
          "center",
          "space-between",
          "space-evenly",
          "space-around",
          "flex-start",
          "flex-end",
        ],
      },
    },
    navAlign: {
      control: {
        type: "radio",
        options: ["center", "flex-start", "flex-end"],
      },
    },
    headerAlign: {
      control: {
        type: "radio",
        options: ["center", "flex-start", "flex-end"],
      },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <Header {...args}/>

export const Primary = Template.bind({});
Primary.args = {}
