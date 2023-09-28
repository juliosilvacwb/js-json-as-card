import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CardJson from "./CardJson";

const meta: Meta<typeof CardJson> = {
  component: CardJson,
  title: "MyFirstLibraryComponent/CardJson",
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof CardJson>;

export const Main: Story = (args) => {
  return <CardJson {...args} />
}

Main.args = {
    json: {
        name: "Julio Silva",
        email: "julio@email.com",
        phone: "+55 11 99999-9999",
    },
};
