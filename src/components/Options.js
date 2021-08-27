import React from "react";
import { Option } from "./Option";

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && (
      <p>Please add add an option to get started</p>
    )}
    {props.options.map((option) => (
      <Option
        key={option}
        handleDeleteOption={props.handleDeleteOption}
        optionText={option}
      />
    ))}
  </div>
);

export { Options };
