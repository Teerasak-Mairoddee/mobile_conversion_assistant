export type Department = "Vision" | "Computing" | "Gaming" | "MDA";

export const departmentLabels: Record<Department, string> = {
    Vision: "Vision",
    Computing: "Computing",
    Gaming: "Gaming",
    MDA: "MDA",
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