//library
import { toast } from "react-toastify";

//helpers
import { deleteItem } from "../helpers";

export function deleteBudget({ params }) {
  //alert("inside deleteBuget")

  try {
    deleteItem({
      key: "budgets",
      id: params.id,
    });

    toast.success("Budget deleted successfully!");
  } catch (e) {
    throw new Error("There was a problem deleting your budget. Sorry.");
  }
}
