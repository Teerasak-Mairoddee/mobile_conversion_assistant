import { useMemo, useState } from "react";
import { conversations } from "./data/conversations";
import {
    departmentLabels,
    type Department,
} from "./types/conversation";
import "./App.css";

function App() {
    const [department, setDepartment] = useState<Department | "">("");
    const [usageCategory, setUsageCategory] = useState("");
    const [showResult, setShowResult] = useState(false);

    const departments = Object.keys(departmentLabels) as Department[];

    const availableUsageCategories = useMemo(() => {
        return [
            ...new Set(
                conversations
                    .filter(
                        (conversation) =>
                            conversation.active &&
                            conversation.department === department
                    )
                    .map((conversation) => conversation.usageCategory)
            ),
        ];
    }, [department]);

    const selectedConversation = useMemo(() => {
        return conversations
            .filter(
                (conversation) =>
                    conversation.active &&
                    conversation.department === department &&
                    conversation.usageCategory === usageCategory
            )
            .sort((a, b) => b.priority - a.priority)[0];
    }, [department, usageCategory]);

    function handleDepartmentChange(value: Department | "") {
        setDepartment(value);
        setUsageCategory("");
        setShowResult(false);
    }

    function resetAssistant() {
        setDepartment("");
        setUsageCategory("");
        setShowResult(false);
    }

    return (
        <main className="app">
            <header className="header">

                <div>
                    <p className="eyebrow">Mobile Conversion Assistant</p>


                </div>
            </header>

            <section className="selection-card">
                <label htmlFor="department">Department</label>

                <select
                    id="department"
                    value={department}
                    onChange={(event) =>
                        handleDepartmentChange(
                            event.target.value as Department | ""
                        )
                    }
                >
                    <option value="">Select a department</option>

                    {departments.map((departmentOption) => (
                        <option
                            key={departmentOption}
                            value={departmentOption}
                        >
                            {departmentLabels[departmentOption]}
                        </option>
                    ))}
                </select>

                <label htmlFor="usage">Phone usage</label>

                <select
                    id="usage"
                    value={usageCategory}
                    disabled={!department}
                    onChange={(event) => {
                        setUsageCategory(event.target.value);
                        setShowResult(false);
                    }}
                >
                    <option value="">Select a usage category</option>

                    {availableUsageCategories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>

                <button
                    type="button"
                    className="primary-button"
                    disabled={!department || !usageCategory}
                    onClick={() => setShowResult(true)}
                >
                    Generate conversation
                </button>
            </section>

            {showResult && selectedConversation && (
                <section className="result-card">
                    <div className="result-heading">
                        <div>
                            <p className="eyebrow">
                                {selectedConversation.id}
                            </p>

                            <h2>
                                {selectedConversation.usageCategory}
                            </h2>
                        </div>

                        <span className="recommendation">
                            {selectedConversation.recommendation}
                        </span>
                    </div>

                    <article className="conversation-section">
                        <span className="step-number">1</span>

                        <div>
                            <h3>Ask</h3>
                            <p>{selectedConversation.openingQuestion}</p>
                        </div>
                    </article>

                    <article className="conversation-section">
                        <span className="step-number">2</span>

                        <div>
                            <h3>Bridge</h3>
                            <p>{selectedConversation.bridgeLine}</p>
                        </div>
                    </article>

                    <article className="conversation-section">
                        <span className="step-number">3</span>

                        <div>
                            <h3>Continue</h3>
                            <p>{selectedConversation.followUpQuestion}</p>
                        </div>
                    </article>

                    <button
                        type="button"
                        className="secondary-button"
                        onClick={resetAssistant}
                    >
                        Start another conversation
                    </button>
                </section>
            )}
        </main>
    );
}

export default App;