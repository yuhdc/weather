import Main from "./pages/main";
import { Route, Switch } from "react-router";
import MainWeather from "./components/MainWeather";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Main>
        <Switch>
          <Route path="/" exact component={MainWeather} />
        </Switch>
      </Main>
    </div>
  );
}

export default App;
