import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import CardJson from "./CardJson";
import { styled } from "styled-components";

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

const Button = styled.button`
  width: 100px;
  height: 25px;
  cursor: pointer;
  border: none;
  color: #FFF;
  background-color: #2196F3;
  margin: none;
  transition: background-color 0.2s, box-shadow 0.2s;
  &:hover {
    background-color: #1976D2; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
`;

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
            complementComponent={
              <div style={{ padding: '10px 0'}}>
                <Button onClick={() => alert('Click') }>
                    Open
                  </Button>
              </div>
            }
          />
}

Main.args = {
    json: {
        name: "Julio Silva",
        email: "julio@email.com",
        phone: "+55 11 99999-9999",
    },
};
