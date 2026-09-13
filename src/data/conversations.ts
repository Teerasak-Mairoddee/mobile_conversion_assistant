import type { ConversationSeed } from "../types/conversation";

export const conversations: ConversationSeed[] = [
    {
        id: "VISION-STREAMING-001",
        department: "Vision",
        usageCategory: "Streaming",
        openingQuestion:
            "Do you also watch your streaming services when you are away from home?",
        bridgeLine:
            "Having enough mobile data could let you continue watching without relying on public Wi-Fi.",
        followUpQuestion:
            "How much mobile data do you currently receive each month?",
        recommendation: "SIM-only data plan",
        priority: 10,
        active: true,
    },
    {
        id: "VISION-CASTING-001",
        department: "Vision",
        usageCategory: "Casting",
        openingQuestion:
            "What phone do you normally use when casting content to your television?",
        bridgeLine:
            "Your phone is an important part of that experience, so reviewing your current device and plan could be worthwhile.",
        followUpQuestion:
            "When did you last review your phone contract?",
        recommendation: "Phone contract review",
        priority: 8,
        active: true,
    },
    {
        id: "COMPUTING-WORK-001",
        department: "Computing",
        usageCategory: "Remote working",
        openingQuestion:
            "Do you ever work somewhere that does not have reliable Wi-Fi?",
        bridgeLine:
            "A mobile plan with enough hotspot data could provide a useful backup connection.",
        followUpQuestion:
            "Does your current plan give you enough data for tethering?",
        recommendation: "SIM-only data plan",
        priority: 10,
        active: true,
    },
    {
        id: "COMPUTING-VIDEO-001",
        department: "Computing",
        usageCategory: "Video calls",
        openingQuestion:
            "Do you take many video calls when you are away from your home broadband?",
        bridgeLine:
            "A reliable mobile connection and suitable data allowance could help keep those calls stable.",
        followUpQuestion:
            "How well does your current mobile plan handle longer video calls?",
        recommendation: "SIM-only data plan",
        priority: 8,
        active: true,
    },
    {
        id: "GAMING-MOBILE-001",
        department: "Gaming",
        usageCategory: "Mobile gaming",
        openingQuestion:
            "Do you play any of your games on your phone as well?",
        bridgeLine:
            "A newer phone could give you better performance, battery life and display quality for mobile gaming.",
        followUpQuestion:
            "How well does your current phone run the games you play?",
        recommendation: "Handset contract",
        priority: 10,
        active: true,
    },
    {
        id: "GAMING-STREAMING-001",
        department: "Gaming",
        usageCategory: "Game streaming",
        openingQuestion:
            "Do you use services such as cloud gaming or remote play on your phone?",
        bridgeLine:
            "Game streaming can use a large amount of data, so the right mobile plan could make it more practical away from Wi-Fi.",
        followUpQuestion:
            "How much mobile data do you currently receive?",
        recommendation: "High-data SIM-only plan",
        priority: 9,
        active: true,
    },
    {
        id: "MDA-SMART-001",
        department: "MDA",
        usageCategory: "Smart appliances",
        openingQuestion:
            "Do you control any of your appliances or smart-home devices from your phone?",
        bridgeLine:
            "Your phone becomes the main control point for connected appliances, making reliability and battery life important.",
        followUpQuestion:
            "How well does your current phone handle your smart-home applications?",
        recommendation: "Phone contract review",
        priority: 10,
        active: true,
    },
    {
        id: "MDA-FAMILY-001",
        department: "MDA",
        usageCategory: "Family connectivity",
        openingQuestion:
            "Does everyone in the household have enough mobile data when they are away from home?",
        bridgeLine:
            "Reviewing the household's mobile plans could help identify better-value allowances or unused data.",
        followUpQuestion:
            "How many mobile plans are currently used in your household?",
        recommendation: "Multiple contract review",
        priority: 8,
        active: true,
    },
];