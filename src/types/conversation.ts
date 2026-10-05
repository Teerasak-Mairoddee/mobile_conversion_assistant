export type Department =
    | "Gaming"
    | "SKA"
    | "CESmartTech"
    | "Collections"
    | "Computing"
    | "KnowHow"
    | "MDA"
    | "Vision";

export const departmentLabels: Record<Department, string> = {
    Gaming: "Gaming Zone",
    SKA: "SKA Zone (small kitchen appliances)",
    CESmartTech: "CE Smart Tech Zone",
    Collections: "Collections Zone",
    Computing: "Computing Zone",
    KnowHow: "Know How / Cashdesk",
    MDA: "MDA",
    Vision: "Vision",
};

export interface ConversationSeed {
    id: string;
    department: Department;
    usageCategory: string;
    openingQuestion: string;
    bridgeLine: string;
    followUpQuestion: string;
    recommendation: string;
    priority: number;
    active: boolean;
}