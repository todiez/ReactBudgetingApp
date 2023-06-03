//library
import { toast } from "react-toastify";

//helpers
import { deleteItem, getAllMatchingItems } from "../helpers";

//rrd import
import { redirect } from "react-router-dom";

export function deleteBudget({ params }) {
  //alert("inside deleteBuget")

  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });

    toast.success("Budget deleted successfully!");
  } catch (e) {
    throw new Error("There was a problem deleting your budget. Sorry.");
  }

  return redirect("/");

}
