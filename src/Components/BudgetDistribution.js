import React from "react";
import "./BudgetDistribution.css";

const BudgetDistribution = ({ accounts, onUpdate }) => {
    const { checking, savings, brokerage } = accounts;

    return (
        <div className="input-container">
            <div className="input-control">
                <p>Checking</p>
                <input
                    type="number"
                    name="checking"
                    onChange={onUpdate}
                    value={checking}
                />
            </div>
            <div className="input-control">
                <p>Savings</p>
                <input
                    type="number"
                    name="savings"
                    onChange={onUpdate}
                    value={savings}
                />
            </div>
            <div className="input-control">
                <p>Brokerage</p>
                <input
                    type="number"
                    name="brokerage"
                    onChange={onUpdate}
                    value={brokerage}
                />
            </div>
        </div>
    );
};

export default BudgetDistribution;
