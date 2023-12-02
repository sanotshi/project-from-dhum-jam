
import './App.css';
import MainContainer from './components/MainContainer';
import { Provider } from "react-redux";
import appStore from "./utilities/appStore";

function App() {
  return (
    <div className="App">
         <Provider store={appStore}>
        
     <MainContainer />
     </Provider>
    </div>
  );
}

export default App;
