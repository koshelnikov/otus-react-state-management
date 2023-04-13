import './App.css';
import PropsIndex from "./components/props";
import SagaIndex from "./components/saga/index";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/', element: <PropsIndex/>
    },

    {
        path: '/redux-saga', element: <SagaIndex/>
    }
])

function App() {

  return (
      <div>
          <nav>
              <a href='/'>Props</a>
              <a href='/redux-saga'>Redux Saga</a>
          </nav>
          <RouterProvider router={router}/>
      </div>
  );
}

export default App;
