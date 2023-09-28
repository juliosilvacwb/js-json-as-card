import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react';

import CardJson from "./CardJson";

describe("Running Test for CardJson", () => {

  const json = {name: "test", age: "test"};

  test("Check cardJson existency", () => {
    render(<CardJson json={json}/>)
    expect(screen.queryByTestId('cardId')).toBeInTheDocument();
  });
});