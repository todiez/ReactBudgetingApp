//rrd imports
import { useLoaderData } from "react-router-dom";

//helpers imports
import { getAllMatchingItems } from "../helpers";

//loader
export async function budgetLoader({params}) {
    const budget = await getAllMatchingItems({
        category: "budgets",
        key: "id",
        value: params.id,
    })[0];
    //getAllMatchingItems gives an Array back.. we want just the first item, therefore [0] added

    if(!budget) {
        throw new Error("The buget your are trying to find doesn't exist")
    }

    return {budget};
}

const BudgetPage = () => {
    const {budget} = useLoaderData();

  return (
    <div>Budget: {budget.name}</div>
  )
}

export default BudgetPage;