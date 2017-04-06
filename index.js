//Code React element here
var h1 = React.createElement('h1', {}, "An Awesome Person"); 
var p = React.createElement('p', {}, 'Who is learning React'); 
var ul = React.createElement('ul', {className: 'me__interests'}, [
  React.createElement('li', {}, "JavaScript"), 
  React.createElement('li', {}, "React"), 
  React.createElement('li', {}, "Movies"), 
  React.createElement('li', {}, "Ice cream")
]); 
var meInReact = React.createElement('div', {className: 'me'}, [h1, p, ul])
ReactDOM.render(meInReact); 
