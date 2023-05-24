import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello There!</h1>,
    loader: rootLoader,   
  },
]);


function App() {
  return <div className="App">
      <RouterProvider router={router} />

  </div>;
}

export default App;
