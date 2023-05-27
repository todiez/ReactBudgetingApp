export const waait = () => new Promise(res => setTimeout(res, Math.random() * 800));

//colors
const generateRandomColor = () => {
  const existingBudgetLenght = fetchData("budgets")?. length ?? 0;
  return `${existingBudgetLenght * 34} 65% 50%`
}

//local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//create budget
export const createBudget = ({name, amount}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount, //parse into number because from the form its a string
    color: generateRandomColor(),
  }
  const existingBudgets = fetchData("budgets") ?? []; //give the existing budgets or an empty array if none are existent
  return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]));
};

//create expense
export const createExpense = ({name, amount, budgetId}) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount, //parse into number because from the form its a string
    budgetId: budgetId
  }
  const existingExpenses = fetchData("expenses") ?? []; //give the existing expense or an empty array if none are existent
  return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]));
};

//delete item
export const deleteItem = ({key}) => {
  return localStorage.removeItem(key);
};