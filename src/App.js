import './App.css';
import PropsIndex from "./components/props";
import ReactReduxConnectIndex from "./components/react-redux-connect/index";
import ReactReduxHookIndex from "./components/react-redux-hook/index";
import ReactSagaIndex from "./components/redux-saga/index";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/', element: <PropsIndex/>
    },

    {
        path: '/redux-saga', element: <ReactSagaIndex/>
    },
    {
        path: '/react-redux-connect', element: <ReactReduxConnectIndex/>
    },
    {
        path: '/react-redux-hook', element: <ReactReduxHookIndex/>
    }
])

function App() {

  return (
      <div>
          <nav>
              <a href='/'>Props</a>
              <span> </span>
              <a href='/react-redux-connect'>React Redux Connect</a>
              <span> </span>
              <a href='/react-redux-hook'>React Redux Hook</a>
              <span> </span>
              <a href='/redux-saga'>Redux Saga</a>
          </nav>
          <RouterProvider router={router}/>
      </div>
  );
}

export default App;
