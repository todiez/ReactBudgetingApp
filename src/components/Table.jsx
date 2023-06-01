//components import
import ExpenseItem from "../components/ExpenseItem";

const Table = ({ expenses }) => {
  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date"].map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              {expense.name}
              <ExpenseItem />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
