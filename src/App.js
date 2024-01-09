<<<<<<< HEAD
import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import AddBudgetModal from "./components/AddBudgetModal";
import AddExpenseModal from "./components/AddExpenseModal";
import ViewExpensesModal from "./components/ViewExpensesModal";
import BudgetCard from "./components/BudgetCard";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";
import TotalBudgetCard from "./components/TotalBudgetCard";
import { useState } from "react";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./contexts/BudgetsContext";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useBudgets();

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  }
=======
import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import { useState } from "react";
function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
>>>>>>> 71969b92491d7ccef662bb7f99d6029368dbb31c

  return (
    <>
      <Container className="my-4">
<<<<<<< HEAD
      <Stack direction="horizontal" gap="2" className="mb-4">
=======
        <Stack direction="horizontal" gap="2" className="mb-4">
>>>>>>> 71969b92491d7ccef662bb7f99d6029368dbb31c
          <h1 className="me-auto">Family Loan Fund</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              marginTop: "30px",
            }}
          >
            <div style={{ display: "flex", gap: "6px" }}>
<<<<<<< HEAD
              <Button
                variant="outline-success"
                onClick={() => setShowAddBudgetModal(true)}
                style={{ flex: 1 }}
              >
                Add Budget
              </Button>
              <Button
                variant="outline-success"
                onClick={openAddExpenseModal}
                style={{ flex: 1 }}
              >
=======
              <Button variant="outline-success"  onClick={() => setShowAddBudgetModal(true)} style={{ flex: 1 }}>
                Add Budget
              </Button>
              <Button variant="outline-success"  style={{ flex: 1 }}>
>>>>>>> 71969b92491d7ccef662bb7f99d6029368dbb31c
                Add Expense
              </Button>
            </div>
            <Button variant="outline-info" style={{ marginTop: "7px" }}>
              Membership Fee
            </Button>
          </div>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
<<<<<<< HEAD
          {budgets.map((budget) => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount,
              0
            );
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                onViewExpensesClick={() =>
                  setViewExpensesModalBudgetId(budget.id)
                }
              />
            );
          })}
          <UncategorizedBudgetCard
            onAddExpenseClick={openAddExpenseModal}
            onViewExpensesClick={() =>
              setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
            }
          />
          <TotalBudgetCard />
=======
          <BudgetCard
            name="Entertainment"
            gray
            amount={200}
            max={1000}
          ></BudgetCard>
>>>>>>> 71969b92491d7ccef662bb7f99d6029368dbb31c
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
<<<<<<< HEAD
      <AddExpenseModal
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
      <ViewExpensesModal
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId()}
      />
=======
>>>>>>> 71969b92491d7ccef662bb7f99d6029368dbb31c
    </>
  );
}

export default App;
