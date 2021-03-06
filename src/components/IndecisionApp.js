import React from "react";

import { Header } from "./Header";
import { Action } from "./Action";
import { Options } from "./Options";
import { AddOption } from "./AddOption";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.options.length === prevState.options.length) {
      return;
    }
    const json = JSON.stringify(this.state.options);
    localStorage.setItem("options", json);
  }

  componentWillUnmount() {
    console.log("componentWillAmount");
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter(
          (option) => optionToRemove !== option
        ),
      };
    });
  }

  handlePick = () => {
    const pickId = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[pickId];
    this.setState(() => ({ selectedOption: option }))
  }

  handleAddOption = (option) => {
    if (!option) {
      return "Enter Valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return " This option already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  }

  render() {
    const subtitle = "Put your life in the hands of an evil computer!!";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
      </div>
    );
  }
}

export { IndecisionApp };
