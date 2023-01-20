import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../services/expenses";
import { Button, Row, Col } from "react-bootstrap";
import ExpenseForm from "./ExpenseForm";
import ActivePremium from "./Header/ActivePremium";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesSlice.expenses);
  console.log("EXPENSES", expenses);

  useEffect(() => {
    GetExpenses(dispatch);
  }, []);

  return expenses.map((e) => (
    <div key={e.id} id={e.id} style={{ marginBottom: "1rem" }}>
      <ListRow expense={e} />
    </div>
  ));
};

const ListRow = ({ expense }) => {
  const [isEditing, setIsEditing] = useState(false);
  console.log("DDDDD", expense.description);
  console.log("AAAA", expense.amount);

  return isEditing ? (
    <ExpenseForm expense={expense} setIsEditing={setIsEditing} />
  ) : (
    <div>
      <Row>
        <Col>{expense.description}</Col>
        <Col>${expense.amount}</Col>
        <Col>
          <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>
            Edit
          </Button>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default ExpenseList;
