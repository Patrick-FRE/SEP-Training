import "./App.css";
import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import Content from "./components/Content/Content";
// import WithCounterData from "./components/WithCounterData/WithCounterData";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header></Header>
        <Counter></Counter>
        <Content></Content>
      </Layout>

      {/* <WithCounterData
        render={(counter, handleAddCounter, handleReduceCounter) => (
          <Layout>
            <Header counter={counter}></Header>
            <Counter
              counter={counter}
              handleReduceCounter={handleReduceCounter}
              handleAddCounter={handleAddCounter}
            ></Counter>
            <Content counter={counter}></Content>
          </Layout>
        )}
      ></WithCounterData> */}
    </div>
  );
}

export default App;
