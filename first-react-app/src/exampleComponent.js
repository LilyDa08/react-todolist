import * as React from "react";


// const ExampleComponent = props => (
//   <div className="classname" id="idname">Hello {props.name}</div>
// );

class ExampleComponent extends React.Component {
  render() {
    const { firstame, lastname} = this.props
    return(
  <div className="classname" id="idname" style={(
    backgroundColor:`rgb(${r}, ${g}, ${b})`
  )}>Hello {props.name}</div>
);
}
    }

export default ExampleComponent;