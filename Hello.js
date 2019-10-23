import React from 'react';

export default ({ name }) => <h1>Hello {name}!</h1>;

 render() {
    return (
      <React.Fragment>
      {(Object.keys(this.state.Youken[1])).map((e)=>(
      <React.Fragment>
      <div>{e}</div>
      <div>
       {(() => {
          if (true) {
            return <span>Good morning</span>
          } else {
            return <span>Hello</span>
          }
        })()}
     </div>
     </React.Fragment>
      ))}
      </React.Fragment>
    )
  }
}