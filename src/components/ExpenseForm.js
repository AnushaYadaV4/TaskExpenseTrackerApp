import { React, useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { EditExpense, NewExpense, DeleteExpense } from "../services/expenses";
import { useDispatch } from "react-redux";

const ExpenseForm = ({ expense, setIsEditing }) => {
  const descriptions = [
    "Groceries",
    "Credit Card",
    "Student Loans",
    "Eating out",
    "Gas",
  ];
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState(descriptions[0]);
  const [isNewExpense, setIsNewExpense] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (expense !== undefined) {
      setIsNewExpense(false);
      setAmount(expense.amount);
    } else {
      setIsNewExpense(true);
    }
  }, [expense]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewExpense) {
          NewExpense(dispatch, {
            description: description,
            amount: Number(amount),
          });
        } else {
          EditExpense(dispatch, {
            id: expense.id,
            description: description,
            amount: Number(amount),
          });
          setIsEditing(false);
        }
      }}
    >

      <Row>
        <Col>

          <Form.Label>Description</Form.Label>
          <Form.Control
            as="select"
            onChange={(event) => setDescription(event.target.value)}
          >
            {descriptions.map((d, idx) => (
              <option key={idx}>{d}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </Col>
        <Col>
          <div style={{ marginTop: "30px" }}>
            {isNewExpense ? (
              <Button
                variant="primary"
                type="submit"
                style={{ marginBottom: "100px" }}
              >
                Add
              </Button>
            ) : (
              <Col>
                <div>
                  <Button
                    style={{ marginRight: "2px", marginBottom: "50px" }}
                    variant="danger"
                    onClick={() => DeleteExpense(dispatch, expense)}
                  >
                    Delete
                  </Button>
                  <Button
                    style={{ marginRight: "2px", marginBottom: "50px" }}
                    variant="success"
                    type="submit"
                  >
                    Save
                  </Button>
                  <Button
                    style={{ marginRight: "2px", marginBottom: "50px" }}
                    variant="default"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </Col>
            )}
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default ExpenseForm;
