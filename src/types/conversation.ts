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
    Gaming: "Gaming",
    SKA: "SKA",
    CESmartTech: "CE Smart Tech",
    Collections: "Collections",
    Computing: "Computing",
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