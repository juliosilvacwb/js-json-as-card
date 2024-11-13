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
  return  <CardJson {...args} 
            styleCard={{
              backgroundColor: "#E1F5FE", 
              fontFamily: "Arial, sans-serif",
              borderRadius: 0,
              boxShadow: 'none'
            }} 
            styleLabel={{
              width: '50px',
              border: '1px'
            }}
            styleText={{
              marginLeft: '1rem'
            }}
            format={true}
          />
}

Main.args = {
    json: {
        name: "Julio Silva",
        email: "julio@email.com",
        phone: "+55 11 99999-9999",
    },
};
