import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Layouts
import Main, { mainLoader } from "./layouts/Main";

//Routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true, //same as -->    path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
      },
    ],
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
