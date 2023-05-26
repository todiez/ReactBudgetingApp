//rrd importts
import { useLoaderData } from "react-router-dom";

//helper functions
import { fetchData } from "../helpers";

//components import
import Intro from "../components/Intro";
import AddBudgetForm from "../components/AddBudgetForm";

//library imports
import { toast } from "react-toastify";

//loader function
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  return { userName, budgets };
}

//action
export async function dashboadAction({ request }) {
  const data = await request.formData();
  const {_action, ...values} = Object.fromEntries(data);
  
  //new user submission
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      console.log(e);
      throw new Error("There was a problem creating your account.");
    }
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {/* {budgets ? () : ()} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
