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
    {
        id: "VISION-SPORTS-001",
        department: "Vision",
        usageCategory: "Live sport",
        openingQuestion:
            "Do you ever follow live matches on your phone when you cannot get to the television?",
        bridgeLine:
            "Live sport streams in high quality, so a plan with plenty of data means you will not miss key moments when you are out.",
        followUpQuestion:
            "Have you ever run low on data while watching a match?",
        recommendation: "High-data SIM-only plan",
        priority: 9,
        active: true,
    },
    {
        id: "VISION-SECOND-SCREEN-001",
        department: "Vision",
        usageCategory: "Second screen",
        openingQuestion:
            "Do you usually have your phone in hand while you are watching TV?",
        bridgeLine:
            "If your phone is part of how you watch, a larger and sharper display can make that experience much better.",
        followUpQuestion:
            "How happy are you with the screen size and battery on your current phone?",
        recommendation: "Handset contract",
        priority: 7,
        active: true,
    },
    {
        id: "VISION-TRAVEL-001",
        department: "Vision",
        usageCategory: "Travel viewing",
        openingQuestion:
            "Do you download shows or films to watch while travelling?",
        bridgeLine:
            "More storage and a generous data allowance make it easier to keep your favourites ready wherever you are.",
        followUpQuestion:
            "Do you often run out of storage on your phone?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "COMPUTING-STUDENT-001",
        department: "Computing",
        usageCategory: "Study",
        openingQuestion:
            "Is this laptop for studying, and will it be used away from home?",
        bridgeLine:
            "Students often rely on their phone for hotspot data and two-factor sign-ins, so a good-value plan can make study easier.",
        followUpQuestion:
            "Are you on a plan that suits a student budget at the moment?",
        recommendation: "SIM-only data plan",
        priority: 9,
        active: true,
    },
    {
        id: "COMPUTING-TABLET-001",
        department: "Computing",
        usageCategory: "Tablet on the go",
        openingQuestion:
            "Will you be using your tablet outside the house, for example on the commute?",
        bridgeLine:
            "A data SIM for the tablet means it stays connected anywhere without draining your phone's battery on hotspot.",
        followUpQuestion:
            "Does your tablet have a SIM slot or eSIM you could use?",
        recommendation: "Tablet data plan",
        priority: 8,
        active: true,
    },
    {
        id: "COMPUTING-SECURITY-001",
        department: "Computing",
        usageCategory: "Security and sign-ins",
        openingQuestion:
            "Do you use your phone to approve sign-ins or banking on this computer?",
        bridgeLine:
            "Your phone is the key to your accounts, so an up-to-date device with current security updates really matters.",
        followUpQuestion:
            "Is your phone still receiving software updates?",
        recommendation: "Phone contract review",
        priority: 7,
        active: true,
    },
    {
        id: "GAMING-CONTROLLER-001",
        department: "Gaming",
        usageCategory: "Controller gaming",
        openingQuestion:
            "Have you thought about using a controller with your phone for console-style games?",
        bridgeLine:
            "Pairing a controller with a powerful phone turns it into a handheld console you can take anywhere.",
        followUpQuestion:
            "Is your current phone powerful enough for the games you would like to play?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "GAMING-SOCIAL-001",
        department: "Gaming",
        usageCategory: "Voice chat and community",
        openingQuestion:
            "Do you keep up with your gaming friends or communities on your phone?",
        bridgeLine:
            "Voice chat and streaming apps use a lot of data, so the right allowance keeps you connected with your group when you are out.",
        followUpQuestion:
            "How much of your monthly data do you usually use?",
        recommendation: "SIM-only data plan",
        priority: 7,
        active: true,
    },
    {
        id: "GAMING-FAMILY-001",
        department: "Gaming",
        usageCategory: "Family gaming",
        openingQuestion:
            "Is this for someone in the family who also games on a phone or tablet?",
        bridgeLine:
            "A family plan with spending controls and shared data can make it easier to manage everyone's gaming.",
        followUpQuestion:
            "Do the younger gamers in your home have their own phone plan?",
        recommendation: "Family plan",
        priority: 8,
        active: true,
    },
    {
        id: "MDA-NEW-HOME-001",
        department: "MDA",
        usageCategory: "Moving home",
        openingQuestion:
            "Are you buying these appliances for a new home?",
        bridgeLine:
            "A move is a good time to review your mobile plan too, especially if broadband will not be installed straight away.",
        followUpQuestion:
            "Do you have a backup connection while you wait for broadband to go live?",
        recommendation: "SIM-only data plan",
        priority: 9,
        active: true,
    },
    {
        id: "MDA-SECURITY-001",
        department: "MDA",
        usageCategory: "Home security",
        openingQuestion:
            "Do you use a video doorbell or security camera that sends alerts to your phone?",
        bridgeLine:
            "Watching live camera feeds away from home uses mobile data, so a reliable plan helps you stay in touch with your home.",
        followUpQuestion:
            "How reliably do your camera alerts come through when you are out?",
        recommendation: "SIM-only data plan",
        priority: 8,
        active: true,
    },
    {
        id: "MDA-UPGRADE-001",
        department: "MDA",
        usageCategory: "Appliance upgrade",
        openingQuestion:
            "Are you replacing an older appliance with a newer, more connected model?",
        bridgeLine:
            "Newer appliances work best with up-to-date apps, which can be slow or unsupported on older phones.",
        followUpQuestion:
            "How old is the phone you would use to control it?",
        recommendation: "Handset contract",
        priority: 7,
        active: true,
    },
];
