import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';

const Home = () => (
    <div style={{ width: '80%', margin: 'auto' }}>
        <h4>New Expense</h4>
        <ExpenseForm />
        <hr style={{ border: '1px solid grey' }} />
        <h4>Your Expenses</h4>
        <ExpenseList />
    </div>
);

export default Home;