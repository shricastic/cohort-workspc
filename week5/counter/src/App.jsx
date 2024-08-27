import React from 'react'

function App(){
  const [count, setCount] = React.useState(0)

  return(
    <>
      <Button count={count} setCount={setCount} />         
    </>
  );
}

function Button(props){
  function onButtonClick(){
    props.setCount(props.count+1);
  }
  return <button onClick={onButtonClick}> Counter {props.count} </button>
}


export default App;
