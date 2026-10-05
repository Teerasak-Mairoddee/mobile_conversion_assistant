import { useMemo, useState } from "react";
import { conversations } from "./data/conversations";
import {
    departmentLabels,
    type ConversationSeed,
    type Department,
} from "./types/conversation";
import "./App.css";

function findConversations(
    department: Department | "",
    usageCategory: string
): ConversationSeed[] {
    return conversations.filter(
        (conversation) =>
            conversation.active &&
            conversation.department === department &&
            conversation.usageCategory === usageCategory
    );
}

function App() {
    const [department, setDepartment] = useState<Department | "">("");
    const [usageCategory, setUsageCategory] = useState("");
    const [selectedId, setSelectedId] = useState("");
    const [replayCount, setReplayCount] = useState(0);

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

    const matchingConversations = useMemo(
        () => findConversations(department, usageCategory),
        [department, usageCategory]
    );

    const selectedConversation = matchingConversations.find(
        (conversation) => conversation.id === selectedId
    );

    function pickRandomConversation(
        candidates: ConversationSeed[],
        excludeId?: string
    ) {
        const options =
            candidates.length > 1
                ? candidates.filter(
                      (conversation) => conversation.id !== excludeId
                  )
                : candidates;
        const choice = options[Math.floor(Math.random() * options.length)];

        setSelectedId(choice?.id ?? "");
    }

    function handleUsageChange(value: string) {
        setUsageCategory(value);
        pickRandomConversation(findConversations(department, value));
    }

    function handleDepartmentChange(value: Department | "") {
        setDepartment(value);
        setUsageCategory("");
        setSelectedId("");
    }

    function resetAssistant() {
        setDepartment("");
        setUsageCategory("");
        setSelectedId("");
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
                    onChange={(event) => handleUsageChange(event.target.value)}
                >
                    <option value="">Select a usage category</option>

                    {availableUsageCategories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </section>

            {selectedConversation && (
                <section className="result-card">
                    {matchingConversations.length > 1 && (
                        <button
                            type="button"
                            className="replay-button"
                            aria-label="Show a new variation"
                            title="New variation"
                            onClick={() => {
                                setReplayCount((count) => count + 1);
                                pickRandomConversation(
                                    matchingConversations,
                                    selectedConversation.id
                                );
                            }}
                        >
                            <svg
                                key={replayCount}
                                className={replayCount ? "spin" : undefined}
                                viewBox="0 0 24 24"
                                width="22"
                                height="22"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                                <path d="M21 3v5h-5" />
                            </svg>
                        </button>
                    )}

                    <div
                        key={selectedConversation.id}
                        className="conversation-body"
                    >
                        <div className="result-heading">
                            <div>
                                <h2>
                                    {selectedConversation.usageCategory}
                                </h2>

                                <p className="variation-count">
                                    Variation{" "}
                                    {matchingConversations.indexOf(
                                        selectedConversation
                                    ) + 1}{" "}
                                    of {matchingConversations.length}
                                </p>
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
                    </div>

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