export type LangCode =
  | "en"
  | "hi"
  | "bn"
  | "ta"
  | "te"
  | "mr"
  | "gu"
  | "kn"
  | "ml"
  | "pa"
  | "or"
  | "ur";

export const LANGUAGES: { code: LangCode; label: string; native: string; flag: string }[] = [
  { code: "en", label: "English", native: "English", flag: "🇬🇧" },
  { code: "hi", label: "Hindi", native: "हिन्दी", flag: "🇮🇳" },
  { code: "bn", label: "Bengali", native: "বাংলা", flag: "🇮🇳" },
  { code: "ta", label: "Tamil", native: "தமிழ்", flag: "🇮🇳" },
  { code: "te", label: "Telugu", native: "తెలుగు", flag: "🇮🇳" },
  { code: "mr", label: "Marathi", native: "मराठी", flag: "🇮🇳" },
  { code: "gu", label: "Gujarati", native: "ગુજરાતી", flag: "🇮🇳" },
  { code: "kn", label: "Kannada", native: "ಕನ್ನಡ", flag: "🇮🇳" },
  { code: "ml", label: "Malayalam", native: "മലയാളം", flag: "🇮🇳" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
  { code: "or", label: "Odia", native: "ଓଡ଼ିଆ", flag: "🇮🇳" },
  { code: "ur", label: "Urdu", native: "اردو", flag: "🇮🇳" },
];

export const RTL_LANGS: LangCode[] = ["ur"];

// Translation dictionary. Keys are stable; values are localized strings.
// Where a translation isn't available we fall back to English at runtime.
export type TKey =
  | "nav.guide"
  | "nav.chat"
  | "nav.simulator"
  | "nav.timeline"
  | "nav.documents"
  | "nav.quiz"
  | "nav.askAi"
  | "hero.badge"
  | "hero.subtitle"
  | "hero.start"
  | "hero.ask"
  | "hero.stat.steps"
  | "hero.stat.beginner"
  | "hero.stat.support"
  | "guide.tag"
  | "guide.title"
  | "guide.subtitle"
  | "guide.s1.title" | "guide.s1.short" | "guide.s1.details"
  | "guide.s2.title" | "guide.s2.short" | "guide.s2.details"
  | "guide.s3.title" | "guide.s3.short" | "guide.s3.details"
  | "guide.s4.title" | "guide.s4.short" | "guide.s4.details"
  | "guide.s5.title" | "guide.s5.short" | "guide.s5.details"
  | "guide.s6.title" | "guide.s6.short" | "guide.s6.details"
  | "chat.tag" | "chat.title" | "chat.subtitle"
  | "chat.assistant" | "chat.online" | "chat.greeting"
  | "chat.placeholder"
  | "chat.q1" | "chat.q2" | "chat.q3"
  | "chat.a1" | "chat.a2" | "chat.a3"
  | "chat.fallback"
  | "sim.tag" | "sim.title" | "sim.subtitle"
  | "sim.welcomeTitle" | "sim.welcomeDesc" | "sim.enter"
  | "sim.secure" | "sim.selectTitle" | "sim.selectDesc" | "sim.continue"
  | "sim.confirmTag" | "sim.confirmTitle" | "sim.confirmDesc"
  | "sim.back" | "sim.confirm"
  | "sim.successTitle" | "sim.successDesc" | "sim.receipt" | "sim.tryAgain"
  | "time.tag" | "time.title" | "time.subtitle"
  | "time.countdown"
  | "time.days" | "time.hours" | "time.minutes" | "time.seconds"
  | "time.regLabel" | "time.regDesc"
  | "time.voteLabel" | "time.voteDesc"
  | "time.resLabel" | "time.resDesc"
  | "doc.tag" | "doc.title" | "doc.subtitle"
  | "doc.your" | "doc.awaiting" | "doc.eligible" | "doc.almost"
  | "doc.awaitingDesc" | "doc.eligibleDesc" | "doc.almostDesc"
  | "doc.req.photo" | "doc.req.roll" | "doc.req.age" | "doc.assumed"
  | "quiz.tag" | "quiz.title" | "quiz.subtitle"
  | "quiz.qOf" | "quiz.score" | "quiz.next" | "quiz.results"
  | "quiz.correct" | "quiz.wrong"
  | "quiz.perfect" | "quiz.well" | "quiz.keep" | "quiz.youScored" | "quiz.tryAgain"
  | "footer.tag" | "footer.built"
  | "lang.select";

type Dict = Partial<Record<TKey, string>>;

const en: Record<TKey, string> = {
  "nav.guide": "Guide",
  "nav.chat": "AI Chat",
  "nav.simulator": "Simulator",
  "nav.timeline": "Timeline",
  "nav.documents": "Documents",
  "nav.quiz": "Quiz",
  "nav.askAi": "Ask AI",

  "hero.badge": "FIRST-TIME VOTER MODE ENABLED",
  "hero.subtitle": "Your personal guide to understanding elections — step-by-step, simple, and beginner-friendly.",
  "hero.start": "Start Journey",
  "hero.ask": "Ask AI",
  "hero.stat.steps": "Easy Steps",
  "hero.stat.beginner": "Beginner Friendly",
  "hero.stat.support": "AI Support",

  "guide.tag": "STEP-BY-STEP",
  "guide.title": "Your Election Journey",
  "guide.subtitle": "Six simple steps from eligibility to your first vote.",
  "guide.s1.title": "Check Eligibility",
  "guide.s1.short": "Make sure you can vote",
  "guide.s1.details": "You must be 18 years or older on the qualifying date and a citizen of the country. Check that you're not disqualified by law and that your name isn't already on another constituency's roll.",
  "guide.s2.title": "Register to Vote",
  "guide.s2.short": "Get on the electoral roll",
  "guide.s2.details": "Register online via the Election Commission portal or fill Form 6 offline. You'll need proof of age, address, and a recent photograph. Registration usually closes 10 days before the announcement.",
  "guide.s3.title": "Verify Voter ID",
  "guide.s3.short": "Confirm your EPIC card",
  "guide.s3.details": "Once registered, you'll receive your EPIC (Electors Photo Identity Card). Verify your name, photo, and constituency details on the official voter portal before election day.",
  "guide.s4.title": "Understand Candidates",
  "guide.s4.short": "Research before you decide",
  "guide.s4.details": "Read each candidate's manifesto, criminal record (if any), education, and previous work. Trustworthy sources include MyNeta, official party websites, and verified news outlets.",
  "guide.s5.title": "Voting Day Process",
  "guide.s5.short": "Cast your ballot confidently",
  "guide.s5.details": "Visit your assigned booth with your Voter ID or alternative photo ID. Get your finger inked, sign the register, and press the button next to your candidate on the EVM. Verify the VVPAT slip.",
  "guide.s6.title": "Result Declaration",
  "guide.s6.short": "Watch democracy unfold",
  "guide.s6.details": "Results are usually declared within hours of counting, on official channels and trusted news sources. The winning candidate is the one with the most votes in your constituency.",

  "chat.tag": "AI ASSISTANT",
  "chat.title": "Talk to VoteWise AI",
  "chat.subtitle": "Get instant, beginner-friendly answers to your voting questions.",
  "chat.assistant": "VoteWise Assistant",
  "chat.online": "Online · Ready to help",
  "chat.greeting": "Hi! I'm VoteWise AI 👋 Ask me anything about voting, or tap a suggestion below to get started.",
  "chat.placeholder": "Ask about voting, registration, documents…",
  "chat.q1": "How do I vote for the first time?",
  "chat.q2": "What documents are required?",
  "chat.q3": "When are elections held?",
  "chat.a1": "First-time voters: 1) Confirm you're 18+ and registered. 2) Find your polling booth on the official voter portal. 3) Carry your Voter ID (EPIC) or any valid photo ID. 4) Get inked, sign the register, press the button next to your candidate on the EVM, and verify the VVPAT slip. 🗳️",
  "chat.a2": "Acceptable documents at the polling booth include: Voter ID (EPIC), Aadhaar, Passport, Driving Licence, PAN, government service ID, or a bank passbook with photo. You only need ONE valid photo ID along with your name on the electoral roll.",
  "chat.a3": "General (Lok Sabha) elections happen every 5 years. State assembly elections also run on 5-year cycles, staggered across states. Local body and by-elections happen as needed. Check the Election Commission website for the official schedule.",
  "chat.fallback": "Great question! I'm a demo assistant trained on common first-time voter queries. Try asking about registration, required documents, EVMs, or election dates.",

  "sim.tag": "INTERACTIVE",
  "sim.title": "Voting Simulator",
  "sim.subtitle": "Practice the voting process in a safe, simulated polling booth.",
  "sim.welcomeTitle": "Welcome to the Polling Booth",
  "sim.welcomeDesc": "You're about to experience how voting works. Your finger will be inked, your ID checked, and then you'll cast your vote on the EVM.",
  "sim.enter": "Enter Polling Booth",
  "sim.secure": "SECURE BOOTH · YOUR VOTE IS PRIVATE",
  "sim.selectTitle": "Select Your Candidate",
  "sim.selectDesc": "Tap a button on the EVM to make your choice.",
  "sim.continue": "Continue",
  "sim.confirmTag": "⚠ CONFIRM YOUR CHOICE",
  "sim.confirmTitle": "You're voting for…",
  "sim.confirmDesc": "Once submitted, your vote cannot be changed. Verify your VVPAT slip after casting.",
  "sim.back": "Go Back",
  "sim.confirm": "Confirm & Submit Vote",
  "sim.successTitle": "Vote Successfully Submitted",
  "sim.successDesc": "Thank you for participating in democracy! 🇮🇳",
  "sim.receipt": "VVPAT slip verified · Receipt",
  "sim.tryAgain": "Try Again",

  "time.tag": "UPCOMING",
  "time.title": "Election Timeline",
  "time.subtitle": "Mark your calendar for these key dates.",
  "time.countdown": "Countdown to Voting Day",
  "time.days": "Days",
  "time.hours": "Hours",
  "time.minutes": "Minutes",
  "time.seconds": "Seconds",
  "time.regLabel": "Registration Deadline",
  "time.regDesc": "Last day to add your name to the electoral roll.",
  "time.voteLabel": "Voting Day",
  "time.voteDesc": "Polls open from 7:00 AM to 6:00 PM at your assigned booth.",
  "time.resLabel": "Result Declaration",
  "time.resDesc": "Counting begins at 8:00 AM. Results expected by evening.",

  "doc.tag": "DOCUMENT CHECK",
  "doc.title": "Are You Booth-Ready?",
  "doc.subtitle": "Select the documents you have to instantly check your eligibility.",
  "doc.your": "Your Documents",
  "doc.awaiting": "Awaiting Selection",
  "doc.eligible": "You're Eligible! ✅",
  "doc.almost": "Almost There ⚠️",
  "doc.awaitingDesc": "Pick the documents you have to see your status.",
  "doc.eligibleDesc": "You have everything needed to vote on election day.",
  "doc.almostDesc": "You're missing something. See checklist below.",
  "doc.req.photo": "Valid government photo ID",
  "doc.req.roll": "Voter roll verification (Voter ID or Aadhaar)",
  "doc.req.age": "At least 18 years of age",
  "doc.assumed": "assumed",

  "quiz.tag": "QUICK QUIZ",
  "quiz.title": "Test Your Knowledge",
  "quiz.subtitle": "Three quick questions to see how much you've learned.",
  "quiz.qOf": "Question",
  "quiz.score": "Score",
  "quiz.next": "Next Question",
  "quiz.results": "See Results",
  "quiz.correct": "✓ Correct! ",
  "quiz.wrong": "✗ Not quite. ",
  "quiz.perfect": "Perfect Score!",
  "quiz.well": "Well Done!",
  "quiz.keep": "Keep Learning!",
  "quiz.youScored": "You scored",
  "quiz.tryAgain": "Try Again",

  "footer.tag": "Empowering first-time voters",
  "footer.built": "Built with",

  "lang.select": "Select language",
};

const hi: Dict = {
  "nav.guide": "गाइड",
  "nav.chat": "AI चैट",
  "nav.simulator": "सिम्युलेटर",
  "nav.timeline": "समय-सारणी",
  "nav.documents": "दस्तावेज़",
  "nav.quiz": "क्विज़",
  "nav.askAi": "AI से पूछें",
  "hero.badge": "पहली बार के मतदाताओं के लिए मोड चालू",
  "hero.subtitle": "चुनावों को समझने के लिए आपका व्यक्तिगत गाइड — कदम-दर-कदम, सरल और शुरुआती-अनुकूल।",
  "hero.start": "यात्रा शुरू करें",
  "hero.ask": "AI से पूछें",
  "hero.stat.steps": "आसान चरण",
  "hero.stat.beginner": "शुरुआती-अनुकूल",
  "hero.stat.support": "AI सहायता",
  "guide.tag": "कदम-दर-कदम",
  "guide.title": "आपकी चुनाव यात्रा",
  "guide.subtitle": "योग्यता से लेकर पहले वोट तक छह सरल कदम।",
  "guide.s1.title": "योग्यता जाँचें",
  "guide.s1.short": "सुनिश्चित करें कि आप वोट कर सकते हैं",
  "guide.s1.details": "योग्यता तिथि पर आपकी आयु 18 वर्ष या उससे अधिक होनी चाहिए और आप देश के नागरिक हों। सुनिश्चित करें कि आप कानूनी रूप से अयोग्य नहीं हैं और आपका नाम किसी अन्य निर्वाचन क्षेत्र की सूची में नहीं है।",
  "guide.s2.title": "मतदान के लिए पंजीकरण",
  "guide.s2.short": "मतदाता सूची में नाम जुड़वाएँ",
  "guide.s2.details": "चुनाव आयोग पोर्टल पर ऑनलाइन पंजीकरण करें या ऑफ़लाइन फॉर्म 6 भरें। आयु, पते का प्रमाण और हाल की फ़ोटो आवश्यक है। पंजीकरण आमतौर पर घोषणा से 10 दिन पहले बंद होता है।",
  "guide.s3.title": "मतदाता पहचान सत्यापित करें",
  "guide.s3.short": "अपने EPIC कार्ड की पुष्टि करें",
  "guide.s3.details": "पंजीकरण के बाद आपको EPIC (फोटो पहचान पत्र) मिलेगा। मतदान के दिन से पहले आधिकारिक पोर्टल पर नाम, फ़ोटो और निर्वाचन क्षेत्र की पुष्टि करें।",
  "guide.s4.title": "उम्मीदवारों को समझें",
  "guide.s4.short": "निर्णय से पहले शोध करें",
  "guide.s4.details": "हर उम्मीदवार का घोषणापत्र, आपराधिक रिकॉर्ड, शिक्षा और पिछला कार्य पढ़ें। MyNeta, आधिकारिक पार्टी वेबसाइटें और विश्वसनीय समाचार स्रोत मददगार हैं।",
  "guide.s5.title": "मतदान दिवस की प्रक्रिया",
  "guide.s5.short": "आत्मविश्वास से वोट डालें",
  "guide.s5.details": "अपने मतदान केंद्र पर वोटर ID या अन्य वैध फोटो ID के साथ जाएँ। उँगली पर स्याही लगवाएँ, रजिस्टर पर हस्ताक्षर करें, EVM पर अपने उम्मीदवार के बटन को दबाएँ और VVPAT पर्ची सत्यापित करें।",
  "guide.s6.title": "परिणाम घोषणा",
  "guide.s6.short": "लोकतंत्र को देखें",
  "guide.s6.details": "गिनती शुरू होने के कुछ घंटों में परिणाम आधिकारिक चैनलों पर घोषित किए जाते हैं। आपके निर्वाचन क्षेत्र में सबसे अधिक वोट पाने वाला उम्मीदवार विजेता होता है।",
  "chat.tag": "AI सहायक",
  "chat.title": "VoteWise AI से बात करें",
  "chat.subtitle": "अपने मतदान संबंधी सवालों के तुरंत, सरल जवाब पाएँ।",
  "chat.assistant": "VoteWise सहायक",
  "chat.online": "ऑनलाइन · मदद के लिए तैयार",
  "chat.greeting": "नमस्ते! मैं VoteWise AI हूँ 👋 मतदान के बारे में कुछ भी पूछें, या नीचे एक सुझाव चुनें।",
  "chat.placeholder": "मतदान, पंजीकरण, दस्तावेज़ों के बारे में पूछें…",
  "chat.q1": "मैं पहली बार वोट कैसे डालूँ?",
  "chat.q2": "कौन-से दस्तावेज़ चाहिए?",
  "chat.q3": "चुनाव कब होते हैं?",
  "chat.a1": "पहली बार के मतदाता: 1) पुष्टि करें कि आप 18+ हैं और पंजीकृत हैं। 2) आधिकारिक पोर्टल पर अपना मतदान केंद्र खोजें। 3) Voter ID या कोई वैध फोटो ID साथ रखें। 4) स्याही लगवाएँ, रजिस्टर पर हस्ताक्षर करें, EVM पर बटन दबाएँ और VVPAT पर्ची देखें। 🗳️",
  "chat.a2": "मतदान केंद्र पर मान्य दस्तावेज़: Voter ID (EPIC), आधार, पासपोर्ट, ड्राइविंग लाइसेंस, PAN, सरकारी सेवा ID, या फ़ोटो वाली बैंक पासबुक। मतदाता सूची में नाम के साथ केवल एक वैध फोटो ID पर्याप्त है।",
  "chat.a3": "लोकसभा चुनाव हर 5 साल में होते हैं। राज्य विधानसभा चुनाव भी 5-वर्षीय चक्र में अलग-अलग समय पर होते हैं। आधिकारिक कार्यक्रम के लिए चुनाव आयोग की वेबसाइट देखें।",
  "chat.fallback": "अच्छा प्रश्न! मैं एक डेमो सहायक हूँ। पंजीकरण, आवश्यक दस्तावेज़, EVM या चुनाव तिथियों के बारे में पूछें।",
  "sim.tag": "इंटरैक्टिव",
  "sim.title": "मतदान सिम्युलेटर",
  "sim.subtitle": "सुरक्षित, सिम्युलेटेड मतदान केंद्र में अभ्यास करें।",
  "sim.welcomeTitle": "मतदान केंद्र में आपका स्वागत है",
  "sim.welcomeDesc": "आप मतदान का अनुभव करने वाले हैं। उँगली पर स्याही लगेगी, ID जाँची जाएगी, और फिर आप EVM पर वोट डालेंगे।",
  "sim.enter": "मतदान केंद्र में प्रवेश करें",
  "sim.secure": "सुरक्षित केंद्र · आपका वोट गुप्त है",
  "sim.selectTitle": "अपना उम्मीदवार चुनें",
  "sim.selectDesc": "EVM पर बटन दबाकर अपना चुनाव करें।",
  "sim.continue": "जारी रखें",
  "sim.confirmTag": "⚠ अपने चुनाव की पुष्टि करें",
  "sim.confirmTitle": "आप वोट दे रहे हैं…",
  "sim.confirmDesc": "एक बार जमा करने के बाद वोट बदला नहीं जा सकता। VVPAT पर्ची सत्यापित करें।",
  "sim.back": "वापस जाएँ",
  "sim.confirm": "पुष्टि करें और वोट डालें",
  "sim.successTitle": "वोट सफलतापूर्वक जमा किया गया",
  "sim.successDesc": "लोकतंत्र में भाग लेने के लिए धन्यवाद! 🇮🇳",
  "sim.receipt": "VVPAT पर्ची सत्यापित · रसीद",
  "sim.tryAgain": "फिर से प्रयास करें",
  "time.tag": "आगामी",
  "time.title": "चुनाव समय-सारणी",
  "time.subtitle": "इन प्रमुख तिथियों को कैलेंडर में नोट करें।",
  "time.countdown": "मतदान दिवस तक उल्टी गिनती",
  "time.days": "दिन",
  "time.hours": "घंटे",
  "time.minutes": "मिनट",
  "time.seconds": "सेकंड",
  "time.regLabel": "पंजीकरण की अंतिम तिथि",
  "time.regDesc": "मतदाता सूची में नाम जोड़ने का अंतिम दिन।",
  "time.voteLabel": "मतदान दिवस",
  "time.voteDesc": "मतदान केंद्र पर सुबह 7 से शाम 6 बजे तक खुला।",
  "time.resLabel": "परिणाम घोषणा",
  "time.resDesc": "गिनती सुबह 8 बजे शुरू। शाम तक परिणाम अपेक्षित।",
  "doc.tag": "दस्तावेज़ जाँच",
  "doc.title": "क्या आप तैयार हैं?",
  "doc.subtitle": "अपने पास मौजूद दस्तावेज़ चुनें और तुरंत योग्यता देखें।",
  "doc.your": "आपके दस्तावेज़",
  "doc.awaiting": "चयन की प्रतीक्षा",
  "doc.eligible": "आप योग्य हैं! ✅",
  "doc.almost": "लगभग तैयार ⚠️",
  "doc.awaitingDesc": "अपनी स्थिति देखने के लिए दस्तावेज़ चुनें।",
  "doc.eligibleDesc": "मतदान दिवस के लिए आपके पास सब कुछ है।",
  "doc.almostDesc": "कुछ कमी है। नीचे चेकलिस्ट देखें।",
  "doc.req.photo": "वैध सरकारी फोटो ID",
  "doc.req.roll": "मतदाता सूची सत्यापन (Voter ID या आधार)",
  "doc.req.age": "कम से कम 18 वर्ष आयु",
  "doc.assumed": "मान लिया गया",
  "quiz.tag": "त्वरित क्विज़",
  "quiz.title": "अपना ज्ञान परखें",
  "quiz.subtitle": "तीन त्वरित प्रश्न देखें कि आपने कितना सीखा।",
  "quiz.qOf": "प्रश्न",
  "quiz.score": "स्कोर",
  "quiz.next": "अगला प्रश्न",
  "quiz.results": "परिणाम देखें",
  "quiz.correct": "✓ सही! ",
  "quiz.wrong": "✗ गलत। ",
  "quiz.perfect": "बेहतरीन स्कोर!",
  "quiz.well": "शाबाश!",
  "quiz.keep": "सीखते रहें!",
  "quiz.youScored": "आपका स्कोर",
  "quiz.tryAgain": "फिर से प्रयास करें",
  "footer.tag": "पहली बार के मतदाताओं को सशक्त बनाना",
  "footer.built": "बनाया गया",
  "lang.select": "भाषा चुनें",
};

const bn: Dict = {
  "nav.guide": "গাইড", "nav.chat": "AI চ্যাট", "nav.simulator": "সিমুলেটর",
  "nav.timeline": "সময়রেখা", "nav.documents": "নথি", "nav.quiz": "কুইজ", "nav.askAi": "AI কে জিজ্ঞাসা",
  "hero.badge": "প্রথমবার ভোটার মোড সক্রিয়",
  "hero.subtitle": "নির্বাচন বোঝার জন্য আপনার ব্যক্তিগত গাইড — ধাপে ধাপে, সহজ ও নবীনদের জন্য।",
  "hero.start": "যাত্রা শুরু করুন", "hero.ask": "AI কে জিজ্ঞাসা",
  "hero.stat.steps": "সহজ ধাপ", "hero.stat.beginner": "নবীন-বান্ধব", "hero.stat.support": "AI সহায়তা",
  "guide.tag": "ধাপে ধাপে", "guide.title": "আপনার নির্বাচন যাত্রা",
  "guide.subtitle": "যোগ্যতা থেকে প্রথম ভোট পর্যন্ত ছয়টি সহজ ধাপ।",
  "chat.tag": "AI সহকারী", "chat.title": "VoteWise AI-এর সাথে কথা বলুন",
  "chat.subtitle": "আপনার ভোটিং প্রশ্নের তাৎক্ষণিক, সহজ উত্তর পান।",
  "chat.greeting": "নমস্কার! আমি VoteWise AI 👋 ভোটিং সম্পর্কে যেকোনো প্রশ্ন করুন।",
  "chat.placeholder": "ভোটিং, নিবন্ধন, নথি সম্পর্কে জিজ্ঞাসা করুন…",
  "sim.tag": "ইন্টারঅ্যাক্টিভ", "sim.title": "ভোটিং সিমুলেটর",
  "sim.welcomeTitle": "পোলিং বুথে স্বাগতম", "sim.enter": "পোলিং বুথে প্রবেশ করুন",
  "time.tag": "আসন্ন", "time.title": "নির্বাচন সময়রেখা",
  "doc.tag": "নথি যাচাই", "doc.title": "আপনি কি প্রস্তুত?",
  "quiz.tag": "দ্রুত কুইজ", "quiz.title": "আপনার জ্ঞান পরীক্ষা করুন",
  "lang.select": "ভাষা নির্বাচন করুন",
};

const ta: Dict = {
  "nav.guide": "வழிகாட்டி", "nav.chat": "AI அரட்டை", "nav.simulator": "சிமுலேட்டர்",
  "nav.timeline": "காலவரிசை", "nav.documents": "ஆவணங்கள்", "nav.quiz": "வினாடி வினா", "nav.askAi": "AI யிடம் கேள்",
  "hero.badge": "முதல் முறை வாக்காளர் பயன்முறை",
  "hero.subtitle": "தேர்தல்களைப் புரிந்துகொள்ள உங்கள் தனிப்பட்ட வழிகாட்டி — படிப்படியாக, எளிதாக.",
  "hero.start": "பயணத்தைத் தொடங்கு", "hero.ask": "AI யிடம் கேள்",
  "hero.stat.steps": "எளிய படிகள்", "hero.stat.beginner": "ஆரம்ப நிலையினருக்கு", "hero.stat.support": "AI ஆதரவு",
  "guide.tag": "படிப்படியாக", "guide.title": "உங்கள் தேர்தல் பயணம்",
  "guide.subtitle": "தகுதியில் இருந்து முதல் வாக்கு வரை ஆறு எளிய படிகள்.",
  "chat.tag": "AI உதவியாளர்", "chat.title": "VoteWise AI யுடன் பேசு",
  "chat.subtitle": "உங்கள் வாக்களிப்பு கேள்விகளுக்கு உடனடி பதில்கள்.",
  "chat.greeting": "வணக்கம்! நான் VoteWise AI 👋 வாக்களிப்பு பற்றி எதையும் கேள்.",
  "chat.placeholder": "வாக்களிப்பு, பதிவு, ஆவணங்கள் பற்றி கேள்…",
  "sim.tag": "இடைவினையாற்றும்", "sim.title": "வாக்களிப்பு சிமுலேட்டர்",
  "sim.welcomeTitle": "வாக்குச்சாவடிக்கு வரவேற்கிறோம்", "sim.enter": "வாக்குச்சாவடிக்குள் நுழை",
  "time.tag": "வரவிருக்கும்", "time.title": "தேர்தல் காலவரிசை",
  "doc.tag": "ஆவண சரிபார்ப்பு", "doc.title": "நீங்கள் தயாரா?",
  "quiz.tag": "விரைவு வினா", "quiz.title": "உங்கள் அறிவைச் சோதிக்கவும்",
  "lang.select": "மொழியைத் தேர்ந்தெடு",
};

const te: Dict = {
  "nav.guide": "గైడ్", "nav.chat": "AI చాట్", "nav.simulator": "సిమ్యులేటర్",
  "nav.timeline": "కాలక్రమం", "nav.documents": "పత్రాలు", "nav.quiz": "క్విజ్", "nav.askAi": "AI ని అడగండి",
  "hero.badge": "మొదటిసారి ఓటరు మోడ్ ఆన్",
  "hero.subtitle": "ఎన్నికలను అర్థం చేసుకోవడానికి మీ వ్యక్తిగత గైడ్ — దశలవారీగా, సరళంగా.",
  "hero.start": "ప్రయాణం ప్రారంభించండి", "hero.ask": "AI ని అడగండి",
  "hero.stat.steps": "సులువు దశలు", "hero.stat.beginner": "ప్రారంభకులకు", "hero.stat.support": "AI మద్దతు",
  "guide.tag": "దశలవారీగా", "guide.title": "మీ ఎన్నికల ప్రయాణం",
  "guide.subtitle": "అర్హత నుండి మొదటి ఓటు వరకు ఆరు సులువు దశలు.",
  "chat.tag": "AI అసిస్టెంట్", "chat.title": "VoteWise AI తో మాట్లాడండి",
  "chat.subtitle": "మీ ఓటింగ్ ప్రశ్నలకు తక్షణ సమాధానాలు.",
  "chat.greeting": "నమస్తే! నేను VoteWise AI 👋 ఓటింగ్ గురించి ఏదైనా అడగండి.",
  "chat.placeholder": "ఓటింగ్, నమోదు, పత్రాల గురించి అడగండి…",
  "sim.tag": "ఇంటరాక్టివ్", "sim.title": "ఓటింగ్ సిమ్యులేటర్",
  "sim.welcomeTitle": "పోలింగ్ బూత్‌కు స్వాగతం", "sim.enter": "పోలింగ్ బూత్‌లోకి ప్రవేశించండి",
  "time.tag": "రాబోయే", "time.title": "ఎన్నికల కాలక్రమం",
  "doc.tag": "పత్రాల తనిఖీ", "doc.title": "మీరు సిద్ధంగా ఉన్నారా?",
  "quiz.tag": "శీఘ్ర క్విజ్", "quiz.title": "మీ జ్ఞానాన్ని పరీక్షించండి",
  "lang.select": "భాషను ఎంచుకోండి",
};

const mr: Dict = {
  "nav.guide": "मार्गदर्शक", "nav.chat": "AI चॅट", "nav.simulator": "सिम्युलेटर",
  "nav.timeline": "कालरेखा", "nav.documents": "कागदपत्रे", "nav.quiz": "क्विझ", "nav.askAi": "AI ला विचारा",
  "hero.badge": "प्रथमच मतदार मोड सक्षम",
  "hero.subtitle": "निवडणुका समजून घेण्यासाठी तुमचा वैयक्तिक मार्गदर्शक — पाऊल-पाऊल, सोप्या रीतीने.",
  "hero.start": "प्रवास सुरू करा", "hero.ask": "AI ला विचारा",
  "hero.stat.steps": "सोप्या पायऱ्या", "hero.stat.beginner": "नवशिक्यांसाठी", "hero.stat.support": "AI मदत",
  "guide.tag": "पाऊल-पाऊल", "guide.title": "तुमचा निवडणूक प्रवास",
  "guide.subtitle": "पात्रतेपासून पहिल्या मतापर्यंत सहा सोप्या पायऱ्या.",
  "chat.tag": "AI सहाय्यक", "chat.title": "VoteWise AI शी बोला",
  "chat.greeting": "नमस्कार! मी VoteWise AI 👋 मतदानाबद्दल काहीही विचारा.",
  "chat.placeholder": "मतदान, नोंदणी, कागदपत्रांबद्दल विचारा…",
  "sim.tag": "इंटरॅक्टिव्ह", "sim.title": "मतदान सिम्युलेटर",
  "sim.welcomeTitle": "मतदान केंद्रावर स्वागत", "sim.enter": "मतदान केंद्रात प्रवेश करा",
  "time.tag": "आगामी", "time.title": "निवडणूक कालरेखा",
  "doc.tag": "कागदपत्र तपासणी", "doc.title": "तुम्ही तयार आहात का?",
  "quiz.tag": "त्वरित क्विझ", "quiz.title": "तुमचे ज्ञान तपासा",
  "lang.select": "भाषा निवडा",
};

const gu: Dict = {
  "nav.guide": "માર્ગદર્શિકા", "nav.chat": "AI ચેટ", "nav.simulator": "સિમ્યુલેટર",
  "nav.timeline": "સમયરેખા", "nav.documents": "દસ્તાવેજો", "nav.quiz": "ક્વિઝ", "nav.askAi": "AI ને પૂછો",
  "hero.badge": "પહેલી વાર મતદાર મોડ સક્રિય",
  "hero.subtitle": "ચૂંટણીઓ સમજવા માટે તમારો વ્યક્તિગત માર્ગદર્શક — પગલું-પગલું, સરળ.",
  "hero.start": "યાત્રા શરૂ કરો", "hero.ask": "AI ને પૂછો",
  "hero.stat.steps": "સરળ પગલાં", "hero.stat.beginner": "નવા માટે", "hero.stat.support": "AI સહાય",
  "guide.tag": "પગલું-પગલું", "guide.title": "તમારી ચૂંટણી યાત્રા",
  "chat.tag": "AI સહાયક", "chat.title": "VoteWise AI સાથે વાત કરો",
  "chat.greeting": "નમસ્તે! હું VoteWise AI છું 👋 મતદાન વિશે કંઈપણ પૂછો.",
  "chat.placeholder": "મતદાન, નોંધણી, દસ્તાવેજો વિશે પૂછો…",
  "sim.tag": "ઇન્ટરએક્ટિવ", "sim.title": "મતદાન સિમ્યુલેટર",
  "sim.welcomeTitle": "મતદાન મથકમાં સ્વાગત", "sim.enter": "મતદાન મથકમાં પ્રવેશો",
  "time.tag": "આગામી", "time.title": "ચૂંટણી સમયરેખા",
  "doc.tag": "દસ્તાવેજ તપાસ", "doc.title": "શું તમે તૈયાર છો?",
  "quiz.tag": "ઝડપી ક્વિઝ", "quiz.title": "તમારું જ્ઞાન ચકાસો",
  "lang.select": "ભાષા પસંદ કરો",
};

const kn: Dict = {
  "nav.guide": "ಮಾರ್ಗದರ್ಶಿ", "nav.chat": "AI ಚಾಟ್", "nav.simulator": "ಸಿಮ್ಯುಲೇಟರ್",
  "nav.timeline": "ಕಾಲಾವಧಿ", "nav.documents": "ದಾಖಲೆಗಳು", "nav.quiz": "ಕ್ವಿಜ್", "nav.askAi": "AI ಕೇಳಿ",
  "hero.badge": "ಮೊದಲ ಬಾರಿ ಮತದಾರ ಮೋಡ್ ಆನ್",
  "hero.subtitle": "ಚುನಾವಣೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶಿ — ಹಂತ-ಹಂತವಾಗಿ.",
  "hero.start": "ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ", "hero.ask": "AI ಕೇಳಿ",
  "hero.stat.steps": "ಸುಲಭ ಹಂತಗಳು", "hero.stat.beginner": "ಆರಂಭಿಕರಿಗೆ", "hero.stat.support": "AI ಬೆಂಬಲ",
  "guide.tag": "ಹಂತ-ಹಂತವಾಗಿ", "guide.title": "ನಿಮ್ಮ ಚುನಾವಣಾ ಪ್ರಯಾಣ",
  "chat.tag": "AI ಸಹಾಯಕ", "chat.title": "VoteWise AI ಜೊತೆ ಮಾತನಾಡಿ",
  "chat.greeting": "ನಮಸ್ಕಾರ! ನಾನು VoteWise AI 👋 ಮತದಾನದ ಬಗ್ಗೆ ಏನನ್ನಾದರೂ ಕೇಳಿ.",
  "chat.placeholder": "ಮತದಾನ, ನೋಂದಣಿ, ದಾಖಲೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ…",
  "sim.tag": "ಇಂಟರಾಕ್ಟಿವ್", "sim.title": "ಮತದಾನ ಸಿಮ್ಯುಲೇಟರ್",
  "sim.welcomeTitle": "ಮತಗಟ್ಟೆಗೆ ಸ್ವಾಗತ", "sim.enter": "ಮತಗಟ್ಟೆಗೆ ಪ್ರವೇಶಿಸಿ",
  "time.tag": "ಮುಂಬರುವ", "time.title": "ಚುನಾವಣಾ ಕಾಲಾವಧಿ",
  "doc.tag": "ದಾಖಲೆ ತಪಾಸಣೆ", "doc.title": "ನೀವು ಸಿದ್ಧರಾಗಿದ್ದೀರಾ?",
  "quiz.tag": "ತ್ವರಿತ ಕ್ವಿಜ್", "quiz.title": "ನಿಮ್ಮ ಜ್ಞಾನವನ್ನು ಪರೀಕ್ಷಿಸಿ",
  "lang.select": "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
};

const ml: Dict = {
  "nav.guide": "ഗൈഡ്", "nav.chat": "AI ചാറ്റ്", "nav.simulator": "സിമുലേറ്റർ",
  "nav.timeline": "സമയരേഖ", "nav.documents": "രേഖകൾ", "nav.quiz": "ക്വിസ്", "nav.askAi": "AI യോട് ചോദിക്കൂ",
  "hero.badge": "ആദ്യ വോട്ടർ മോഡ് സജീവം",
  "hero.subtitle": "തിരഞ്ഞെടുപ്പുകൾ മനസ്സിലാക്കാൻ നിങ്ങളുടെ വ്യക്തിഗത ഗൈഡ് — ഘട്ടം ഘട്ടമായി.",
  "hero.start": "യാത്ര ആരംഭിക്കുക", "hero.ask": "AI യോട് ചോദിക്കൂ",
  "hero.stat.steps": "എളുപ്പ ഘട്ടങ്ങൾ", "hero.stat.beginner": "തുടക്കക്കാർക്ക്", "hero.stat.support": "AI പിന്തുണ",
  "guide.tag": "ഘട്ടം ഘട്ടമായി", "guide.title": "നിങ്ങളുടെ തിരഞ്ഞെടുപ്പ് യാത്ര",
  "chat.tag": "AI സഹായി", "chat.title": "VoteWise AI യുമായി സംസാരിക്കൂ",
  "chat.greeting": "നമസ്കാരം! ഞാൻ VoteWise AI 👋 വോട്ടിംഗിനെക്കുറിച്ച് എന്തും ചോദിക്കൂ.",
  "chat.placeholder": "വോട്ടിംഗ്, രജിസ്ട്രേഷൻ, രേഖകൾ എന്നിവയെക്കുറിച്ച് ചോദിക്കുക…",
  "sim.tag": "ഇന്ററാക്ടീവ്", "sim.title": "വോട്ടിംഗ് സിമുലേറ്റർ",
  "sim.welcomeTitle": "പോളിംഗ് ബൂത്തിലേക്ക് സ്വാഗതം", "sim.enter": "പോളിംഗ് ബൂത്തിൽ പ്രവേശിക്കുക",
  "time.tag": "വരാനിരിക്കുന്നത്", "time.title": "തിരഞ്ഞെടുപ്പ് സമയരേഖ",
  "doc.tag": "രേഖാ പരിശോധന", "doc.title": "നിങ്ങൾ തയ്യാറാണോ?",
  "quiz.tag": "ദ്രുത ക്വിസ്", "quiz.title": "നിങ്ങളുടെ അറിവ് പരിശോധിക്കുക",
  "lang.select": "ഭാഷ തിരഞ്ഞെടുക്കുക",
};

const pa: Dict = {
  "nav.guide": "ਗਾਈਡ", "nav.chat": "AI ਚੈਟ", "nav.simulator": "ਸਿਮੂਲੇਟਰ",
  "nav.timeline": "ਸਮਾਂਰੇਖਾ", "nav.documents": "ਦਸਤਾਵੇਜ਼", "nav.quiz": "ਕੁਇਜ਼", "nav.askAi": "AI ਤੋਂ ਪੁੱਛੋ",
  "hero.badge": "ਪਹਿਲੀ ਵਾਰ ਵੋਟਰ ਮੋਡ ਚਾਲੂ",
  "hero.subtitle": "ਚੋਣਾਂ ਨੂੰ ਸਮਝਣ ਲਈ ਤੁਹਾਡਾ ਨਿੱਜੀ ਗਾਈਡ — ਕਦਮ-ਦਰ-ਕਦਮ।",
  "hero.start": "ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰੋ", "hero.ask": "AI ਤੋਂ ਪੁੱਛੋ",
  "hero.stat.steps": "ਆਸਾਨ ਕਦਮ", "hero.stat.beginner": "ਨਵੇਂ ਲਈ", "hero.stat.support": "AI ਮਦਦ",
  "guide.tag": "ਕਦਮ-ਦਰ-ਕਦਮ", "guide.title": "ਤੁਹਾਡੀ ਚੋਣ ਯਾਤਰਾ",
  "chat.tag": "AI ਸਹਾਇਕ", "chat.title": "VoteWise AI ਨਾਲ ਗੱਲ ਕਰੋ",
  "chat.greeting": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ VoteWise AI ਹਾਂ 👋 ਵੋਟਿੰਗ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ।",
  "chat.placeholder": "ਵੋਟਿੰਗ, ਰਜਿਸਟਰੇਸ਼ਨ, ਦਸਤਾਵੇਜ਼ਾਂ ਬਾਰੇ ਪੁੱਛੋ…",
  "sim.tag": "ਇੰਟਰਐਕਟਿਵ", "sim.title": "ਵੋਟਿੰਗ ਸਿਮੂਲੇਟਰ",
  "sim.welcomeTitle": "ਪੋਲਿੰਗ ਬੂਥ ਵਿੱਚ ਜੀ ਆਇਆਂ", "sim.enter": "ਪੋਲਿੰਗ ਬੂਥ ਵਿੱਚ ਦਾਖਲ ਹੋਵੋ",
  "time.tag": "ਆਉਣ ਵਾਲਾ", "time.title": "ਚੋਣ ਸਮਾਂਰੇਖਾ",
  "doc.tag": "ਦਸਤਾਵੇਜ਼ ਜਾਂਚ", "doc.title": "ਕੀ ਤੁਸੀਂ ਤਿਆਰ ਹੋ?",
  "quiz.tag": "ਤੁਰੰਤ ਕੁਇਜ਼", "quiz.title": "ਆਪਣਾ ਗਿਆਨ ਪਰਖੋ",
  "lang.select": "ਭਾਸ਼ਾ ਚੁਣੋ",
};

const or: Dict = {
  "nav.guide": "ଗାଇଡ୍", "nav.chat": "AI ଚାଟ୍", "nav.simulator": "ସିମୁଲେଟର୍",
  "nav.timeline": "ସମୟରେଖା", "nav.documents": "ଡକୁମେଣ୍ଟ୍", "nav.quiz": "କୁଇଜ୍", "nav.askAi": "AI କୁ ପଚାରନ୍ତୁ",
  "hero.badge": "ପ୍ରଥମ ଥର ଭୋଟର୍ ମୋଡ୍ ସକ୍ରିୟ",
  "hero.subtitle": "ନିର୍ବାଚନକୁ ବୁଝିବା ପାଇଁ ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ଗାଇଡ୍ — ପଦକ୍ଷେପ ଅନୁସାରେ।",
  "hero.start": "ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ", "hero.ask": "AI କୁ ପଚାରନ୍ତୁ",
  "guide.tag": "ପଦକ୍ଷେପ ଅନୁସାରେ", "guide.title": "ଆପଣଙ୍କ ନିର୍ବାଚନ ଯାତ୍ରା",
  "chat.tag": "AI ସହାୟକ", "chat.title": "VoteWise AI ସହିତ କଥା କୁହନ୍ତୁ",
  "chat.greeting": "ନମସ୍କାର! ମୁଁ VoteWise AI 👋 ଭୋଟିଂ ବିଷୟରେ କିଛି ପଚାରନ୍ତୁ।",
  "sim.tag": "ଇଣ୍ଟରଆକ୍ଟିଭ୍", "sim.title": "ଭୋଟିଂ ସିମୁଲେଟର୍",
  "sim.welcomeTitle": "ପୋଲିଂ ବୁଥକୁ ସ୍ୱାଗତ", "sim.enter": "ପୋଲିଂ ବୁଥରେ ପ୍ରବେଶ କରନ୍ତୁ",
  "time.tag": "ଆଗାମୀ", "time.title": "ନିର୍ବାଚନ ସମୟରେଖା",
  "doc.tag": "ଡକୁମେଣ୍ଟ ଯାଞ୍ଚ", "doc.title": "ଆପଣ ପ୍ରସ୍ତୁତ କି?",
  "quiz.tag": "ଶୀଘ୍ର କୁଇଜ୍", "quiz.title": "ଆପଣଙ୍କ ଜ୍ଞାନ ପରୀକ୍ଷା କରନ୍ତୁ",
  "lang.select": "ଭାଷା ଚୟନ କରନ୍ତୁ",
};

const ur: Dict = {
  "nav.guide": "گائیڈ", "nav.chat": "AI چیٹ", "nav.simulator": "سمیولیٹر",
  "nav.timeline": "ٹائم لائن", "nav.documents": "دستاویزات", "nav.quiz": "کوئز", "nav.askAi": "AI سے پوچھیں",
  "hero.badge": "پہلی بار ووٹر موڈ فعال",
  "hero.subtitle": "انتخابات کو سمجھنے کے لیے آپ کا ذاتی گائیڈ — قدم بہ قدم، آسان۔",
  "hero.start": "سفر شروع کریں", "hero.ask": "AI سے پوچھیں",
  "hero.stat.steps": "آسان مراحل", "hero.stat.beginner": "نئے لوگوں کے لیے", "hero.stat.support": "AI مدد",
  "guide.tag": "قدم بہ قدم", "guide.title": "آپ کا انتخابی سفر",
  "chat.tag": "AI معاون", "chat.title": "VoteWise AI سے بات کریں",
  "chat.greeting": "السلام علیکم! میں VoteWise AI ہوں 👋 ووٹنگ کے بارے میں کچھ بھی پوچھیں۔",
  "chat.placeholder": "ووٹنگ، رجسٹریشن، دستاویزات کے بارے میں پوچھیں…",
  "sim.tag": "انٹرایکٹو", "sim.title": "ووٹنگ سمیولیٹر",
  "sim.welcomeTitle": "پولنگ بوتھ میں خوش آمدید", "sim.enter": "پولنگ بوتھ میں داخل ہوں",
  "time.tag": "آنے والا", "time.title": "انتخابی ٹائم لائن",
  "doc.tag": "دستاویز کی جانچ", "doc.title": "کیا آپ تیار ہیں؟",
  "quiz.tag": "فوری کوئز", "quiz.title": "اپنے علم کا امتحان لیں",
  "lang.select": "زبان منتخب کریں",
};

export const DICTIONARIES: Record<LangCode, Dict> = {
  en, hi, bn, ta, te, mr, gu, kn, ml, pa, or, ur,
};

export const translate = (lang: LangCode, key: TKey): string => {
  return DICTIONARIES[lang]?.[key] ?? en[key];
};