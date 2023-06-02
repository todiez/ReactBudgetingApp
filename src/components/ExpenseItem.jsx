//rrd imports
import { Link, useFetcher } from "react-router-dom";

//import helpers
import {
  formatCurrency,
  formateDateToLocaleString,
  getAllMatchingItems,
} from "../helpers";
import { TrashIcon } from "@heroicons/react/24/solid";



const ExpenseItem = ({ expense }) => {
  const fetcher = useFetcher();

  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formateDateToLocaleString(expense.createdAt)}</td>
      <td>
        <Link to={`/budget/${budget.id}`} style={{ "--accent": budget.color }}>
          {budget.name}
        </Link>
      </td>
      <td>
        {/* fetcher.Form instead of form can handle multiple actions at the same time, necessary e.g. for delay of database or api or sth */}
        <fetcher.Form method="post"> 
          {/* what to do with the form */}
          <input type="hidden" name="_action" value="deleteExpense" />
          {/* deleting the actual data */}
          <input type="hidden" name="expenseId" value={expense.id} />
          <button
            type="submit"
            className="btn btn--warning"
            aria-label={`Delete ${expense.name} expense`}
          >
            <TrashIcon width={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
};

export default ExpenseItem;
