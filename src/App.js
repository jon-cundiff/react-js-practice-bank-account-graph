import React, { useState } from "react";
import "./App.css";
import BudgetDistribution from "./Components/BudgetDistribution";
import GraphDistrubution from "./Components/GraphDistrubution";

function App() {
    const [accounts, setAccounts] = useState({
        checking: 33,
        savings: 33,
        brokerage: 33,
    });

    const updateAccounts = (e) => {
        setAccounts({
            ...accounts,
            [e.target.name]: parseInt(e.target.value),
        });
    };

    return (
        <div className="App">
            <h1>Bank Account Graph</h1>
            <BudgetDistribution accounts={accounts} onUpdate={updateAccounts} />
            <GraphDistrubution accounts={accounts} />
        </div>
    );
}

export default App;
