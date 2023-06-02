import { createBrowserRouter, RouterProvider } from "react-router-dom";

//library imports
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Layouts
import Main, { mainLoader } from "./layouts/Main";

//Actions
import { logoutAction } from "./actions/logout";

//Routes
import Dashboard, { dashboadAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import ExpensesPage, { expensesAction, expensesLoader } from "./pages/ExpensesPage";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";


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
        action: dashboadAction,
        errorElement: <Error />
      }, 
      {
        path: "budget/:id", 
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />
      },
      {
        path: "expenses", 
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />
      }, 
      {
        path: "logout",
        action: logoutAction
      }
    ],
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
