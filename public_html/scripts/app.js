"use strict";

var appRoot = document.getElementById("app");
var app = {
  title: "Indecision Application",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option;

  if (!option) {
    return;
  }

  app.options.push(option.value);
  option.value = "";
  render();
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("h2", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? "Here are your options" : "There are no options"), /*#__PURE__*/React.createElement("p", null, app.options.length), /*#__PURE__*/React.createElement("button", {
    onClick: onRemoveAll
  }, "Remove All"), /*#__PURE__*/React.createElement("ul", null, app.options.map(function (option, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: "option" - index
    }, option);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Submit")));
  ReactDOM.render(template, appRoot);
};

render();
