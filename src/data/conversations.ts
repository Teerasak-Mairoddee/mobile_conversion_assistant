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
        recommendation: "Handset contract",
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
        recommendation: "Family plan",
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
        id: "CE-CAMERAS-001",
        department: "CESmartTech",
        usageCategory: "Home cameras and doorbells",
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
        recommendation: "Handset contract",
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
        recommendation: "Phone contract review",
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
        recommendation: "Phone contract review",
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
        recommendation: "Handset contract",
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
        recommendation: "Handset contract",
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
        recommendation: "Handset contract",
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
        recommendation: "Handset contract",
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
        recommendation: "Handset contract",
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
        recommendation: "Family plan",
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
        recommendation: "Family plan",
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
        recommendation: "Phone contract review",
        priority: 9,
        active: true,
    },
    {
        id: "CE-CAMERAS-002",
        department: "CESmartTech",
        usageCategory: "Home cameras and doorbells",
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
        id: "CE-CAMERAS-003",
        department: "CESmartTech",
        usageCategory: "Home cameras and doorbells",
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
    {
        id: "SKA-COFFEE-001",
        department: "SKA",
        usageCategory: "Coffee and morning routine",
        openingQuestion:
            "Is this coffee machine going to be part of your morning routine?",
        bridgeLine:
            "A lot of people start the day on their phone too, checking news, travel and messages, so it is worth making sure it keeps up.",
        followUpQuestion:
            "How happy are you with your phone first thing in the morning, battery included?",
        recommendation: "Phone contract review",
        priority: 8,
        active: true,
    },
    {
        id: "SKA-COFFEE-002",
        department: "SKA",
        usageCategory: "Coffee and morning routine",
        openingQuestion:
            "Does this machine have an app for ordering or scheduling your coffee?",
        bridgeLine:
            "Those apps work best on an up-to-date phone, so it is a good chance to check yours is still supported.",
        followUpQuestion:
            "When did you last upgrade your phone?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "SKA-COFFEE-003",
        department: "SKA",
        usageCategory: "Coffee and morning routine",
        openingQuestion:
            "Do you grab a coffee on the commute as well as at home?",
        bridgeLine:
            "If you are out and about in the mornings, a plan with enough data keeps your travel apps and music going.",
        followUpQuestion:
            "How much data do you get on your current plan?",
        recommendation: "SIM-only data plan",
        priority: 8,
        active: true,
    },
    {
        id: "SKA-RECIPES-001",
        department: "SKA",
        usageCategory: "Recipes and cooking apps",
        openingQuestion:
            "Do you follow recipes or cooking videos on your phone in the kitchen?",
        bridgeLine:
            "A bigger, brighter screen makes it much easier to follow along while you cook.",
        followUpQuestion:
            "How easy is it to read recipes on your current phone?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "SKA-RECIPES-002",
        department: "SKA",
        usageCategory: "Recipes and cooking apps",
        openingQuestion:
            "Are you planning to try new recipes with this air fryer?",
        bridgeLine:
            "Most people look recipes up on their phone, so a good screen and plenty of data make that easier.",
        followUpQuestion:
            "Do you usually stream cooking videos or just read recipes?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "SKA-RECIPES-003",
        department: "SKA",
        usageCategory: "Recipes and cooking apps",
        openingQuestion:
            "Do you use any meal-planning or food delivery apps?",
        bridgeLine:
            "Those apps rely on your phone, so a reliable handset and data plan keep everything running smoothly.",
        followUpQuestion:
            "How is your phone coping with all the apps you use?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "SKA-SMART-001",
        department: "SKA",
        usageCategory: "App-connected appliances",
        openingQuestion:
            "Did you know this appliance can be controlled from your phone?",
        bridgeLine:
            "To get the most from those smart features, your phone needs to run the latest version of the app.",
        followUpQuestion:
            "Is your phone still getting software updates?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "SKA-SMART-002",
        department: "SKA",
        usageCategory: "App-connected appliances",
        openingQuestion:
            "Do you like the idea of starting your appliance while you are on the way home?",
        bridgeLine:
            "That works over mobile data, so a reliable plan means it is ready when you walk in.",
        followUpQuestion:
            "Does your current plan give you good coverage around your area?",
        recommendation: "Phone contract review",
        priority: 8,
        active: true,
    },
    {
        id: "SKA-SMART-003",
        department: "SKA",
        usageCategory: "App-connected appliances",
        openingQuestion:
            "Do you have any other smart devices in the kitchen?",
        bridgeLine:
            "They are all run from your phone, so it is worth checking your handset is up to the job.",
        followUpQuestion:
            "How old is the phone you would use to control it?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "SKA-HOUSEHOLD-001",
        department: "SKA",
        usageCategory: "Busy household",
        openingQuestion:
            "Is this for a busy household with a few people cooking?",
        bridgeLine:
            "Busy families often save by bringing everyone's phones onto one plan with shared data.",
        followUpQuestion:
            "How many people in your home have their own phone contract?",
        recommendation: "Family plan",
        priority: 8,
        active: true,
    },
    {
        id: "SKA-HOUSEHOLD-002",
        department: "SKA",
        usageCategory: "Busy household",
        openingQuestion:
            "Who does most of the cooking and shopping at home?",
        bridgeLine:
            "If the household runs on group chats and shopping apps, a family plan can keep everyone connected for less.",
        followUpQuestion:
            "Are you all on different networks at the moment?",
        recommendation: "Family plan",
        priority: 8,
        active: true,
    },
    {
        id: "SKA-HOUSEHOLD-003",
        department: "SKA",
        usageCategory: "Busy household",
        openingQuestion:
            "Are you buying this for a new family home or a growing family?",
        bridgeLine:
            "That is a good moment to review the household's mobile plans together.",
        followUpQuestion:
            "When are your family's phone contracts due for renewal?",
        recommendation: "Family plan",
        priority: 8,
        active: true,
    },
    {
        id: "CE-WATCH-001",
        department: "CESmartTech",
        usageCategory: "Smartwatches",
        openingQuestion:
            "Are you looking at the cellular version of the watch or the Bluetooth one?",
        bridgeLine:
            "A cellular watch can make calls and stream music without your phone, and it simply shares your phone number on a small add-on.",
        followUpQuestion:
            "Would you like to leave your phone at home for runs or the gym?",
        recommendation: "Smartwatch plan add-on",
        priority: 9,
        active: true,
    },
    {
        id: "CE-WATCH-002",
        department: "CESmartTech",
        usageCategory: "Smartwatches",
        openingQuestion:
            "Which phone will you be pairing the watch with?",
        bridgeLine:
            "Smartwatches need a compatible, up-to-date phone, so it is worth checking yours will support all the features.",
        followUpQuestion:
            "How old is your current phone?",
        recommendation: "Handset contract",
        priority: 9,
        active: true,
    },
    {
        id: "CE-WATCH-003",
        department: "CESmartTech",
        usageCategory: "Smartwatches",
        openingQuestion:
            "What made you decide to get a smartwatch?",
        bridgeLine:
            "Whether it is fitness or notifications, the watch relies on your phone and plan, so the two go hand in hand.",
        followUpQuestion:
            "Is your phone contract due for renewal any time soon?",
        recommendation: "Smartwatch plan add-on",
        priority: 9,
        active: true,
    },
    {
        id: "CE-LIGHTING-001",
        department: "CESmartTech",
        usageCategory: "Smart lighting",
        openingQuestion:
            "Will you be controlling these bulbs from your phone or a smart speaker?",
        bridgeLine:
            "The app lives on your phone, so a reliable, up-to-date handset makes setup and control much easier.",
        followUpQuestion:
            "Is your phone recent enough to run the latest apps?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "CE-LIGHTING-002",
        department: "CESmartTech",
        usageCategory: "Smart lighting",
        openingQuestion:
            "Do you want to switch lights on and off when you are away from home?",
        bridgeLine:
            "That works over mobile data, so a dependable plan keeps you in control wherever you are.",
        followUpQuestion:
            "How good is your signal and data where you usually are?",
        recommendation: "SIM-only data plan",
        priority: 8,
        active: true,
    },
    {
        id: "CE-LIGHTING-003",
        department: "CESmartTech",
        usageCategory: "Smart lighting",
        openingQuestion:
            "Is this the start of a smart home setup?",
        bridgeLine:
            "As you add more devices, your phone becomes the remote for everything, so it is worth making sure it is up to it.",
        followUpQuestion:
            "How is your phone's battery holding up day to day?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "CE-AUDIO-001",
        department: "CESmartTech",
        usageCategory: "Headphones and music",
        openingQuestion:
            "Do you mainly stream music on the go?",
        bridgeLine:
            "Streaming in high quality uses data, so a bigger allowance means no buffering or downloading in advance.",
        followUpQuestion:
            "Do you ever run low on data because of music or podcasts?",
        recommendation: "SIM-only data plan",
        priority: 8,
        active: true,
    },
    {
        id: "CE-AUDIO-002",
        department: "CESmartTech",
        usageCategory: "Headphones and music",
        openingQuestion:
            "Which phone will you be using with these headphones?",
        bridgeLine:
            "Features like spatial audio and the best codecs work best with a newer phone.",
        followUpQuestion:
            "How old is your current phone?",
        recommendation: "Handset contract",
        priority: 8,
        active: true,
    },
    {
        id: "CE-AUDIO-003",
        department: "CESmartTech",
        usageCategory: "Headphones and music",
        openingQuestion:
            "Do you listen on the commute or at the gym?",
        bridgeLine:
            "If you are streaming away from Wi-Fi every day, the right data plan makes a real difference.",
        followUpQuestion:
            "How much data does your current plan include?",
        recommendation: "SIM-only data plan",
        priority: 8,
        active: true,
    },
    {
        id: "COLLECT-PHONE-001",
        department: "Collections",
        usageCategory: "Collecting a phone",
        openingQuestion:
            "Is this a SIM-free phone you are collecting today?",
        bridgeLine:
            "If so, a SIM-only plan is often the best-value way to get it connected, and we can set that up before you leave.",
        followUpQuestion:
            "Which network are you on at the moment?",
        recommendation: "SIM-only data plan",
        priority: 9,
        active: true,
    },
    {
        id: "COLLECT-PHONE-002",
        department: "Collections",
        usageCategory: "Collecting a phone",
        openingQuestion:
            "Are you upgrading from an older phone?",
        bridgeLine:
            "Now is a good time to check you are on the right plan for the new handset, especially for data.",
        followUpQuestion:
            "Is your current contract still in its minimum term?",
        recommendation: "Phone contract review",
        priority: 9,
        active: true,
    },
    {
        id: "COLLECT-PHONE-003",
        department: "Collections",
        usageCategory: "Collecting a phone",
        openingQuestion:
            "Is the phone a gift for someone?",
        bridgeLine:
            "We can help make sure they have a plan to go with it so it works straight out of the box.",
        followUpQuestion:
            "Do they already have a plan they are happy with?",
        recommendation: "SIM-only data plan",
        priority: 9,
        active: true,
    },
    {
        id: "COLLECT-DEVICE-001",
        department: "Collections",
        usageCategory: "Collecting a laptop or tablet",
        openingQuestion:
            "What are you collecting today?",
        bridgeLine:
            "If it is a laptop or tablet you will use on the go, it can help to have data that does not rely on Wi-Fi.",
        followUpQuestion:
            "Will you be using it outside the house much?",
        recommendation: "Tablet data plan",
        priority: 8,
        active: true,
    },
    {
        id: "COLLECT-DEVICE-002",
        department: "Collections",
        usageCategory: "Collecting a laptop or tablet",
        openingQuestion:
            "Does the tablet you ordered have a SIM or eSIM option?",
        bridgeLine:
            "If it does, a small data plan keeps it connected anywhere without using your phone's hotspot.",
        followUpQuestion:
            "Do you currently hotspot from your phone?",
        recommendation: "Tablet data plan",
        priority: 8,
        active: true,
    },
    {
        id: "COLLECT-DEVICE-003",
        department: "Collections",
        usageCategory: "Collecting a laptop or tablet",
        openingQuestion:
            "Is the laptop for work, study or home?",
        bridgeLine:
            "For work or study on the move, a good phone plan with hotspot data is a handy backup.",
        followUpQuestion:
            "Does your current plan allow tethering?",
        recommendation: "SIM-only data plan",
        priority: 8,
        active: true,
    },
    {
        id: "COLLECT-WAIT-001",
        department: "Collections",
        usageCategory: "While you wait",
        openingQuestion:
            "While we fetch your order, can I ask how you are getting on with your phone?",
        bridgeLine:
            "Many customers find they are paying more than they need to, and a quick check only takes a minute.",
        followUpQuestion:
            "When did you last review your phone contract?",
        recommendation: "Phone contract review",
        priority: 8,
        active: true,
    },
    {
        id: "COLLECT-WAIT-002",
        department: "Collections",
        usageCategory: "While you wait",
        openingQuestion:
            "Do you know when your phone contract ends?",
        bridgeLine:
            "If it is close, we may be able to save you money or get you a better phone while you are here.",
        followUpQuestion:
            "Would you like me to check your options while you wait?",
        recommendation: "Phone contract review",
        priority: 8,
        active: true,
    },
    {
        id: "COLLECT-WAIT-003",
        department: "Collections",
        usageCategory: "While you wait",
        openingQuestion:
            "How do you find your current network's signal around here?",
        bridgeLine:
            "If coverage or data speeds are a problem, we can compare networks for you.",
        followUpQuestion:
            "Which network are you with at the moment?",
        recommendation: "Phone contract review",
        priority: 8,
        active: true,
    },
    {
        id: "COLLECT-ONLINE-001",
        department: "Collections",
        usageCategory: "Ordered online",
        openingQuestion:
            "Did you order this on your phone?",
        bridgeLine:
            "Lots of people shop on their phone now, so it is worth making sure yours is fast and the plan suits you.",
        followUpQuestion:
            "How do you find your phone for browsing and shopping?",
        recommendation: "Phone contract review",
        priority: 7,
        active: true,
    },
    {
        id: "COLLECT-ONLINE-002",
        department: "Collections",
        usageCategory: "Ordered online",
        openingQuestion:
            "Do you often shop online and collect in store?",
        bridgeLine:
            "If you are using your phone for all of that, a quick plan review could save you money each month.",
        followUpQuestion:
            "Roughly how much do you pay for your phone each month?",
        recommendation: "Phone contract review",
        priority: 7,
        active: true,
    },
    {
        id: "COLLECT-ONLINE-003",
        department: "Collections",
        usageCategory: "Ordered online",
        openingQuestion:
            "Did you get notifications about your order on your phone?",
        bridgeLine:
            "Your phone handles everything from tracking to payments, so keeping it current makes life easier.",
        followUpQuestion:
            "Is your phone still getting the latest updates?",
        recommendation: "Handset contract",
        priority: 7,
        active: true,
    },
    {
        id: "KH-REPAIR-001",
        department: "KnowHow",
        usageCategory: "Phone repair",
        openingQuestion:
            "What has happened to your phone?",
        bridgeLine:
            "Depending on the repair cost, upgrading can sometimes work out better value than fixing an older phone.",
        followUpQuestion:
            "How long have you had this phone?",
        recommendation: "Handset contract",
        priority: 9,
        active: true,
    },
    {
        id: "KH-REPAIR-002",
        department: "KnowHow",
        usageCategory: "Phone repair",
        openingQuestion:
            "Is this the first time the phone has needed a repair?",
        bridgeLine:
            "If it is becoming a regular thing, it might be worth looking at a new handset with insurance included.",
        followUpQuestion:
            "Would you like me to compare a repair with an upgrade for you?",
        recommendation: "Handset contract",
        priority: 9,
        active: true,
    },
    {
        id: "KH-REPAIR-003",
        department: "KnowHow",
        usageCategory: "Phone repair",
        openingQuestion:
            "How are you managing without your phone while it is being repaired?",
        bridgeLine:
            "If you rely on it every day, it may be worth seeing what a new phone on a contract would cost.",
        followUpQuestion:
            "When is your current contract due to end?",
        recommendation: "Handset contract",
        priority: 9,
        active: true,
    },
    {
        id: "KH-SETUP-001",
        department: "KnowHow",
        usageCategory: "Device setup help",
        openingQuestion:
            "Are you setting up a new device today?",
        bridgeLine:
            "While we are setting things up, it is a good time to make sure your mobile plan suits how you will use it.",
        followUpQuestion:
            "Will the new device be using your phone's data or Wi-Fi?",
        recommendation: "Phone contract review",
        priority: 8,
        active: true,
    },
    {
        id: "KH-SETUP-002",
        department: "KnowHow",
        usageCategory: "Device setup help",
        openingQuestion:
            "Do you need help moving your data across from an old phone?",
        bridgeLine:
            "If the old phone is still on contract, we can check whether an upgrade or SIM-only deal would save you money.",
        followUpQuestion:
            "Is your current contract still running?",
        recommendation: "Phone contract review",
        priority: 8,
        active: true,
    },
    {
        id: "KH-SETUP-003",
        department: "KnowHow",
        usageCategory: "Device setup help",
        openingQuestion:
            "Is this device for you or someone else in the family?",
        bridgeLine:
            "If they need a plan too, we can look at adding them to a family deal.",
        followUpQuestion:
            "How many people in your household have phones?",
        recommendation: "Family plan",
        priority: 8,
        active: true,
    },
    {
        id: "KH-RETURNS-001",
        department: "KnowHow",
        usageCategory: "Returns and exchanges",
        openingQuestion:
            "What is the reason for the return today?",
        bridgeLine:
            "If it is about the phone itself, there may be a model that suits you better, and we can look at that now.",
        followUpQuestion:
            "What would you want from your phone that this one did not give you?",
        recommendation: "Handset contract",
        priority: 7,
        active: true,
    },
    {
        id: "KH-RETURNS-002",
        department: "KnowHow",
        usageCategory: "Returns and exchanges",
        openingQuestion:
            "Are you exchanging for a different model?",
        bridgeLine:
            "It could be worth checking the plan at the same time to make sure it matches the new phone.",
        followUpQuestion:
            "Are you happy with your current data allowance?",
        recommendation: "Phone contract review",
        priority: 7,
        active: true,
    },
    {
        id: "KH-RETURNS-003",
        department: "KnowHow",
        usageCategory: "Returns and exchanges",
        openingQuestion:
            "Is everything else working well with your other devices?",
        bridgeLine:
            "If your phone is getting older too, we can check your upgrade options while you are here.",
        followUpQuestion:
            "When did you last upgrade your phone?",
        recommendation: "Handset contract",
        priority: 7,
        active: true,
    },
    {
        id: "KH-TILL-001",
        department: "KnowHow",
        usageCategory: "At the cashdesk",
        openingQuestion:
            "Before I finish this transaction, can I ask who you are with for your phone?",
        bridgeLine:
            "We can often find a better deal in just a couple of minutes, and you are already here.",
        followUpQuestion:
            "Would you like a quick check on what you could save?",
        recommendation: "Phone contract review",
        priority: 7,
        active: true,
    },
    {
        id: "KH-TILL-002",
        department: "KnowHow",
        usageCategory: "At the cashdesk",
        openingQuestion:
            "Are you paying with your phone today?",
        bridgeLine:
            "If your phone is your wallet too, it is worth making sure it is secure and up to date.",
        followUpQuestion:
            "Is your phone still getting security updates?",
        recommendation: "Handset contract",
        priority: 7,
        active: true,
    },
    {
        id: "KH-TILL-003",
        department: "KnowHow",
        usageCategory: "At the cashdesk",
        openingQuestion:
            "Is there anything else I can help with today?",
        bridgeLine:
            "A lot of customers do not realise we can also review their phone contract here.",
        followUpQuestion:
            "When is your current phone contract up for renewal?",
        recommendation: "Phone contract review",
        priority: 7,
        active: true,
    },
];
