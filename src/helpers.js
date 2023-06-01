export const waait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 500));

//colors
const generateRandomColor = () => {
  const existingBudgetLenght = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLenght * 34} 65% 50%`;
};

//local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//Get all matching Items from local storage
export const getAllMatchingItems = ({category, key, value}) => {
  const data = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value);
}


//create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount, //parse into number because from the form its a string
    color: generateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? []; //give the existing budgets or an empty array if none are existent
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

//create expense
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount, //parse into number because from the form its a string
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? []; //give the existing expense or an empty array if none are existent
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};

//delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

//total spent by budget
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    //check if expense.id === budgetId I passed in
    if (expense.budgetId !== budgetId) return acc;

    //add current amount to total
    return (acc += expense.amount);
  }, 0);

  return budgetSpent;
};

//FORMATTING
export const formateDateToLocaleString = (epoch) => new Date(epoch).toLocaleDateString();

//Format percentages
export const formatPercentage = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

//Format currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "EUR",
  });
};
