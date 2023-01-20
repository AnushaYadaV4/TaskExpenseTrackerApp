import {
  setExpenses,
  newExpense,
  editExpense,
  deleteExpense,
  
} from "../app/expensesSlice";
import axios from "axios";

export const GetExpenses = async (dispatch) => {
  try {
    // api call
    const { data } = await axios.get(
      "https://expense-user-authentication-default-rtdb.firebaseio.com/expenses.json"
    );

    dispatch(setExpenses(data));
  } catch {
    alert("unable to get data");
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    // api call
    const { data } = await axios.put(
      "https://expense-user-authentication-default-rtdb.firebaseio.com/expenses.json",
      expense
    );
    console.log("adding data", data);
    console.log("description", expense.description);
    console.log("amount", expense.amount);

    dispatch(newExpense(data));
  } catch {
    alert("error");
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    // api call
    await axios.put(
      "https://expense-user-authentication-default-rtdb.firebaseio.com/expenses.json",
      expense
    );

    dispatch(editExpense(expense));
  } catch {
    alert("error");
  }
};

export const DeleteExpense = async (dispatch, expense) => {
  try {
    // api call
    await axios.delete(
      "https://expense-user-authentication-default-rtdb.firebaseio.com/expenses.json",
      { data: { ...expense } }
    );

    dispatch(deleteExpense(expense));
  } catch {
    alert("error");
  }
};
