

const appRoot = document.getElementById("app");

const app = {
  title: "Indecision Application",
  subtitle: "Put your life in the hands of a computer",
  options: [
  ]
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option
  
  if(!option){
    return;
  }

  app.options.push(option.value);
  option.value = "";
  render();
}

const onRemoveAll = () => {
  app.options = [];
  render();
}

const randomize = (targetArray) => {
  return Math.floor(Math.random() * targetArray.length);
}

const onMakeDecision = () => {
  const option =  app.options[randomize(app.options)];
  alert(option);
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      <p>{app.options.length > 0 ? "Here are your options" : "There are no options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
      <button disabled={app.options.length === 0} onClick={onRemoveAll}>Remove All</button>
      <ul>
        {app.options.map((option, index) => <li key={index}>{option}</li>)}
      </ul>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Submit</button>
      </form>
  </div>
  );

  ReactDOM.render(template, appRoot);
}

render();