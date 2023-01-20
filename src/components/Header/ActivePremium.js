import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ActivePremium = () => {
  const expenses = useSelector((state) => state.expensesSlice.expenses);
  let data = "";
  expenses.map((e) => {
    data = [e.description, e.amount];
  });

  function makeCSV(rows) {
    return rows;
  }

  const a1 = document.createElement("a1");

  const blob1 = new Blob([makeCSV(data)]);
  a1.href = window.URL.createObjectURL(blob1);

  return (
    <div style={{ margin: "100px" }}>
      <table className="table">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((data, index = 1) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.description}</td>
                <td>{data.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a
        href={`data:text/csv;charset=utf-8,${escape(data)}`}
        id="a1"
        download="file1.txt"
      >
        download your expenses
      </a>
    </div>
  );
};

export default ActivePremium;
