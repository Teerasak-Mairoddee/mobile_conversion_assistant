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
    {
        id: "VISION-STREAMING-002",
        department: "Vision",
        usageCategory: "Streaming",
        openingQuestion:
            "Which streaming apps do you use most, and do you ever watch them on your phone?",
        bridgeLine:
            "If you watch on the go, the right data allowance means you are not waiting to get home or hunting for Wi-Fi.",
        followUpQuestion:
            "Do you ever hold off watching because you are worried about your data?",
        recommendation: "SIM-only data plan",
        priority: 10,
        active: true,
    },
    {
        id: "VISION-STREAMING-003",
        department: "Vision",
        usageCategory: "Streaming",
        openingQuestion:
            "With a new TV, are you planning to sign up to any new streaming services?",
        bridgeLine:
            "Most services let you carry on watching on your phone, so a plan with enough data lets you pick up where you left off anywhere.",
        followUpQuestion:
            "What data allowance does your current plan include?",
        recommendation: "SIM-only data plan",
        priority: 10,
        active: true,
    },
    {
        id: "VISION-CASTING-002",
        department: "Vision",
        usageCategory: "Casting",
        openingQuestion:
            "Do you ever share photos or videos from your phone onto the TV?",
        bridgeLine:
            "That works best with a phone that is quick and fully up to date, so it is worth checking how yours is holding up.",
        followUpQuestion:
            "How long have you had your current phone?",
        recommendation: "Phone contract review",
        priority: 8,
        active: true,
    },
    {
        id: "VISION-CASTING-003",
        department: "Vision",
        usageCategory: "Casting",
        openingQuestion:
            "Will you be using your phone as a remote or for casting with this TV?",
        bridgeLine:
            "Many smart TVs work hand in hand with your phone, so a current handset gets the most out of the features you are paying for.",
        followUpQuestion:
            "Is your phone contract coming up for renewal soon?",
        recommendation: "Phone contract review",
        priority: 8,
        active: true,
    },
    {
        id: "VISION-SPORTS-002",
        department: "Vision",
        usageCategory: "Live sport",
        openingQuestion:
            "Which teams or sports do you follow?",
        bridgeLine:
            "Lots of fans catch highlights and live scores on their phone, so plenty of data keeps you up to date wherever you are.",
        followUpQuestion:
            "Do you check scores or watch clips on your phone during the week?",
        recommendation: "High-data SIM-only plan",
        priority: 9,
        active: true,
    },
    {
        id: "VISION-SPORTS-003",
        department: "Vision",
        usageCategory: "Live sport",
        openingQuestion:
            "Do you ever watch matches while you are out, at a friend's or on the way home?",
        bridgeLine:
            "Streaming live sport can use several gigabytes a game, so a plan built for it avoids running out mid-match.",
        followUpQuestion:
            "Roughly how much data do you get on your current plan?",
        recommendation: "High-data SIM-only plan",
        priority: 9,
        active: true,
    },
    {
        id: "VISION-SECOND-SCREEN-002",
        department: "Vision",
        usageCategory: "Second screen",
        openingQuestion:
            "Do you find yourself scrolling on your phone while a show is on?",
        bridgeLine:
            "If your phone is always in hand, a better screen and longer battery make those evenings much more enjoyable.",
        followUpQuestion:
            "Does your phone usually make it through the evening without charging?",
        recommendation: "Handset contract",
        priority: 7,
        active: true,
    },
    {
        id: "VISION-SECOND-SCREEN-003",
        department: "Vision",
        usageCategory: "Second screen",
        openingQuestion:
            "Do you use your phone to look things up about what you are watching?",
        bridgeLine:
            "A faster phone with a bright display makes that second-screen experience smoother.",
        followUpQuestion:
            "How is your current phone performing day to day?",
        recommendation: "Handset contract",
        priority: 7,
        active: true,
    },
    {
        id: "VISION-TRAVEL-002",
        department: "Vision",
        usageCategory: "Travel viewing",
        openingQuestion:
            "Have you got any trips or long journeys coming up?",
        bridgeLine:
            "Having shows downloaded and data to spare makes travel much easier, especially with roaming included.",
        followUpQuestion:
            "Does your current plan include roaming when you travel abroad?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "VISION-TRAVEL-003",
        department: "Vision",
        usageCategory: "Travel viewing",
        openingQuestion:
            "Do you commute by train or bus?",
        bridgeLine:
            "A commute is a great time to catch up on shows, and the right phone and data plan make that easy.",
        followUpQuestion:
            "How do you usually pass the time on your commute?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "COMPUTING-WORK-002",
        department: "Computing",
        usageCategory: "Remote working",
        openingQuestion:
            "Do you work from caf\u00e9s, client sites or while travelling?",
        bridgeLine:
            "Hotspotting from your phone can be a reliable backup when public Wi-Fi is slow or not secure.",
        followUpQuestion:
            "Have you ever used your phone as a hotspot for your laptop?",
        recommendation: "SIM-only data plan",
        priority: 10,
        active: true,
    },
    {
        id: "COMPUTING-WORK-003",
        department: "Computing",
        usageCategory: "Remote working",
        openingQuestion:
            "Will this laptop be used mainly for work?",
        bridgeLine:
            "If you work on the move, a generous data plan on your phone gives you a secure connection wherever you are.",
        followUpQuestion:
            "How much data do you get with your current mobile plan?",
        recommendation: "SIM-only data plan",
        priority: 10,
        active: true,
    },
    {
        id: "COMPUTING-VIDEO-002",
        department: "Computing",
        usageCategory: "Video calls",
        openingQuestion:
            "Do you use Teams, Zoom or similar for work or keeping in touch with family?",
        bridgeLine:
            "Calls on the move use a lot of data, so a plan with the right allowance keeps you connected without worrying.",
        followUpQuestion:
            "Have you had calls drop or freeze when you are out?",
        recommendation: "SIM-only data plan",
        priority: 8,
        active: true,
    },
    {
        id: "COMPUTING-VIDEO-003",
        department: "Computing",
        usageCategory: "Video calls",
        openingQuestion:
            "Do you ever join meetings from your phone instead of a laptop?",
        bridgeLine:
            "A newer phone with a better camera and enough data makes those calls look and sound much more professional.",
        followUpQuestion:
            "How do you find the camera and call quality on your current phone?",
        recommendation: "SIM-only data plan",
        priority: 8,
        active: true,
    },
    {
        id: "COMPUTING-STUDENT-002",
        department: "Computing",
        usageCategory: "Study",
        openingQuestion:
            "Is this for college or university?",
        bridgeLine:
            "Students are on the move a lot, so a good-value plan with plenty of data helps with research and assignments anywhere.",
        followUpQuestion:
            "Are you still on a parent's plan or do you have your own?",
        recommendation: "SIM-only data plan",
        priority: 9,
        active: true,
    },
    {
        id: "COMPUTING-STUDENT-003",
        department: "Computing",
        usageCategory: "Study",
        openingQuestion:
            "Will you be studying in the library or on campus?",
        bridgeLine:
            "Campus Wi-Fi can be busy, so having your own data as backup can make a big difference near deadlines.",
        followUpQuestion:
            "How reliable is the Wi-Fi where you usually study?",
        recommendation: "SIM-only data plan",
        priority: 9,
        active: true,
    },
    {
        id: "COMPUTING-TABLET-002",
        department: "Computing",
        usageCategory: "Tablet on the go",
        openingQuestion:
            "Where do you see yourself using this tablet most?",
        bridgeLine:
            "If it is leaving the house, a tablet data plan keeps it online without needing Wi-Fi or your phone.",
        followUpQuestion:
            "Would it be handy to have the tablet connected all the time?",
        recommendation: "Tablet data plan",
        priority: 8,
        active: true,
    },
    {
        id: "COMPUTING-TABLET-003",
        department: "Computing",
        usageCategory: "Tablet on the go",
        openingQuestion:
            "Is the tablet for you or for someone else in the family?",
        bridgeLine:
            "A separate tablet data plan can be added cheaply and keeps it connected on trips and days out.",
        followUpQuestion:
            "Have you looked at adding a tablet to an existing plan?",
        recommendation: "Tablet data plan",
        priority: 8,
        active: true,
    },
    {
        id: "COMPUTING-SECURITY-002",
        department: "Computing",
        usageCategory: "Security and sign-ins",
        openingQuestion:
            "Do you get codes on your phone when you log in to your email or bank?",
        bridgeLine:
            "If your phone is the key to your accounts, keeping it secure and supported is just as important as the laptop.",
        followUpQuestion:
            "How old is the phone you use for those codes?",
        recommendation: "Phone contract review",
        priority: 7,
        active: true,
    },
    {
        id: "COMPUTING-SECURITY-003",
        department: "Computing",
        usageCategory: "Security and sign-ins",
        openingQuestion:
            "Are you setting up the new laptop with your existing accounts?",
        bridgeLine:
            "That usually means verifying with your phone, so it is a good moment to check your phone is still up to the job.",
        followUpQuestion:
            "When did you last upgrade your phone?",
        recommendation: "Phone contract review",
        priority: 7,
        active: true,
    },
    {
        id: "GAMING-MOBILE-002",
        department: "Gaming",
        usageCategory: "Mobile gaming",
        openingQuestion:
            "What games are you into at the moment?",
        bridgeLine:
            "Many popular games have mobile versions, and a newer phone can run them at higher settings with better battery life.",
        followUpQuestion:
            "Do you ever notice your phone getting hot or laggy when gaming?",
        recommendation: "Handset contract",
        priority: 10,
        active: true,
    },
    {
        id: "GAMING-MOBILE-003",
        department: "Gaming",
        usageCategory: "Mobile gaming",
        openingQuestion:
            "Do you play anything on the go, like on the commute or on breaks?",
        bridgeLine:
            "A gaming-capable phone with a fast screen makes those sessions much more enjoyable.",
        followUpQuestion:
            "How happy are you with your phone's performance in games?",
        recommendation: "Handset contract",
        priority: 10,
        active: true,
    },
    {
        id: "GAMING-STREAMING-002",
        department: "Gaming",
        usageCategory: "Game streaming",
        openingQuestion:
            "Do you have a subscription like Game Pass or PlayStation Plus?",
        bridgeLine:
            "Many of those include cloud gaming, so a high-data plan lets you play your library from your phone anywhere.",
        followUpQuestion:
            "Have you tried cloud gaming away from home before?",
        recommendation: "High-data SIM-only plan",
        priority: 9,
        active: true,
    },
    {
        id: "GAMING-STREAMING-003",
        department: "Gaming",
        usageCategory: "Game streaming",
        openingQuestion:
            "Would you want to keep playing your console games when you are away from the TV?",
        bridgeLine:
            "Remote play and cloud gaming make that possible, as long as your mobile plan has the data to support it.",
        followUpQuestion:
            "Does your current plan have unlimited or high data?",
        recommendation: "High-data SIM-only plan",
        priority: 9,
        active: true,
    },
    {
        id: "GAMING-CONTROLLER-002",
        department: "Gaming",
        usageCategory: "Controller gaming",
        openingQuestion:
            "Have you seen the phone controllers that clip onto the sides of a phone?",
        bridgeLine:
            "Paired with a powerful phone, they turn it into a portable console for travel and breaks.",
        followUpQuestion:
            "Does your current phone handle bigger games well?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "GAMING-CONTROLLER-003",
        department: "Gaming",
        usageCategory: "Controller gaming",
        openingQuestion:
            "Do you prefer playing with a controller rather than touch controls?",
        bridgeLine:
            "Most phones now support console controllers, and a newer handset makes the most of them.",
        followUpQuestion:
            "How old is your current phone?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "GAMING-SOCIAL-002",
        department: "Gaming",
        usageCategory: "Voice chat and community",
        openingQuestion:
            "Do you use Discord or similar to chat with friends you game with?",
        bridgeLine:
            "Staying in voice chats and streams on the go uses data, so the right plan keeps you connected with your group.",
        followUpQuestion:
            "Do you ever run out of data before the end of the month?",
        recommendation: "SIM-only data plan",
        priority: 7,
        active: true,
    },
    {
        id: "GAMING-SOCIAL-003",
        department: "Gaming",
        usageCategory: "Voice chat and community",
        openingQuestion:
            "Do you watch streamers on Twitch or YouTube on your phone?",
        bridgeLine:
            "Watching streams on mobile data adds up quickly, so a bigger allowance can save you from slowdowns.",
        followUpQuestion:
            "How much data does your current plan give you?",
        recommendation: "SIM-only data plan",
        priority: 7,
        active: true,
    },
    {
        id: "GAMING-FAMILY-002",
        department: "Gaming",
        usageCategory: "Family gaming",
        openingQuestion:
            "Who in the family is the main gamer?",
        bridgeLine:
            "If younger family members game on their phones too, a family plan can give you spending caps and shared data in one place.",
        followUpQuestion:
            "How do you currently manage the kids' phone plans?",
        recommendation: "Family plan",
        priority: 8,
        active: true,
    },
    {
        id: "GAMING-FAMILY-003",
        department: "Gaming",
        usageCategory: "Family gaming",
        openingQuestion:
            "Are you buying this as a gift for someone in the family?",
        bridgeLine:
            "If they also game on a phone, a family plan could make it easier and better value to keep everyone connected.",
        followUpQuestion:
            "How many phones are on plans in your household?",
        recommendation: "Family plan",
        priority: 8,
        active: true,
    },
    {
        id: "MDA-SMART-002",
        department: "MDA",
        usageCategory: "Smart appliances",
        openingQuestion:
            "Does this appliance have an app you can use to control it?",
        bridgeLine:
            "The app will live on your phone, so a reliable, up-to-date handset makes the whole experience smoother.",
        followUpQuestion:
            "Is your phone recent enough to run the latest apps?",
        recommendation: "Phone contract review",
        priority: 10,
        active: true,
    },
    {
        id: "MDA-SMART-003",
        department: "MDA",
        usageCategory: "Smart appliances",
        openingQuestion:
            "Do you have other smart devices at home, like lights, heating or speakers?",
        bridgeLine:
            "All of those are run from your phone, so its battery and reliability really matter.",
        followUpQuestion:
            "How is the battery life on your current phone?",
        recommendation: "Phone contract review",
        priority: 10,
        active: true,
    },
    {
        id: "MDA-FAMILY-002",
        department: "MDA",
        usageCategory: "Family connectivity",
        openingQuestion:
            "How many people are in your household?",
        bridgeLine:
            "Bringing everyone onto one plan can often save money and make it easier to share data.",
        followUpQuestion:
            "Is everyone on separate contracts at the moment?",
        recommendation: "Multiple contract review",
        priority: 8,
        active: true,
    },
    {
        id: "MDA-FAMILY-003",
        department: "MDA",
        usageCategory: "Family connectivity",
        openingQuestion:
            "Do the kids or other family members ever run out of data?",
        bridgeLine:
            "A shared family plan means data can go where it is needed, without top-ups each month.",
        followUpQuestion:
            "Who is the household's mobile bill holder?",
        recommendation: "Multiple contract review",
        priority: 8,
        active: true,
    },
    {
        id: "MDA-NEW-HOME-002",
        department: "MDA",
        usageCategory: "Moving home",
        openingQuestion:
            "When are you moving in?",
        bridgeLine:
            "Broadband can take a couple of weeks to set up, so a data plan on your phone keeps you online in the meantime.",
        followUpQuestion:
            "Have you booked broadband for the new place yet?",
        recommendation: "SIM-only data plan",
        priority: 9,
        active: true,
    },
    {
        id: "MDA-NEW-HOME-003",
        department: "MDA",
        usageCategory: "Moving home",
        openingQuestion:
            "Is this part of kitting out a new place?",
        bridgeLine:
            "With so much to set up, reviewing your mobile plan now could save money while bills are being sorted.",
        followUpQuestion:
            "When is your mobile contract due for renewal?",
        recommendation: "SIM-only data plan",
        priority: 9,
        active: true,
    },
    {
        id: "MDA-SECURITY-002",
        department: "MDA",
        usageCategory: "Home security",
        openingQuestion:
            "Do you get notifications from a doorbell or camera at home?",
        bridgeLine:
            "Viewing those clips when you are out uses data, so a reliable plan keeps you in the loop.",
        followUpQuestion:
            "Have you ever missed an alert because of poor signal or data?",
        recommendation: "SIM-only data plan",
        priority: 8,
        active: true,
    },
    {
        id: "MDA-SECURITY-003",
        department: "MDA",
        usageCategory: "Home security",
        openingQuestion:
            "Are you thinking about adding any security devices to your home?",
        bridgeLine:
            "Most of them send alerts and live video to your phone, so a good data plan and a reliable handset go hand in hand.",
        followUpQuestion:
            "How much data does your current plan include?",
        recommendation: "SIM-only data plan",
        priority: 8,
        active: true,
    },
    {
        id: "MDA-UPGRADE-002",
        department: "MDA",
        usageCategory: "Appliance upgrade",
        openingQuestion:
            "What made you decide to replace your old appliance?",
        bridgeLine:
            "If you are upgrading at home, it can be a good time to check whether your phone is due an upgrade too.",
        followUpQuestion:
            "When did you last upgrade your phone?",
        recommendation: "Handset contract",
        priority: 7,
        active: true,
    },
    {
        id: "MDA-UPGRADE-003",
        department: "MDA",
        usageCategory: "Appliance upgrade",
        openingQuestion:
            "Are you interested in the smart features on the newer models?",
        bridgeLine:
            "Those features rely on an app, and older phones sometimes cannot run the latest versions.",
        followUpQuestion:
            "Does your phone still get app and software updates?",
        recommendation: "Handset contract",
        priority: 7,
        active: true,
    },
];
