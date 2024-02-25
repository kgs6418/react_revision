import One from "./one";
function App() {
  let data = {
    message: 'Hello from Parent!',
    count: 42
  };
  return (
    <>
    <One data={data}/>
    <h1>gaurav from basic app</h1>
    </>
  );
}

export default App;
