/* ---------- text in two languages ---------- */
const T = {
en:{
 app:"Hunar Setu", tag:"Durgi stone carving",
 home:"Home", gallery:"Gallery", order:"Custom order", learn:"Learn", community:"Community",
 heroH:"Durgi stone carving, now online",
 heroP:"Show your work, get orders directly from buyers, and learn new skills. All in one place.",
 addWork:"Add my work", seeGallery:"See gallery",
 t1:"Add my work", t1d:"Upload a photo and a price",
 t2:"See gallery", t2d:"Browse carved pieces",
 t3:"Order a custom piece", t3d:"Tell us what you need",
 t4:"Learn skills", t4d:"Short lessons for carvers",
 t5:"Community", t5d:"Share work and get feedback",
 howH:"How it works",
 h1:"Carver adds work", h1d:"A photo, a name and a price is enough.",
 h2:"Buyer finds a piece", h2d:"Temples, designers and gift buyers browse and send a request.",
 h3:"Carver replies", h3d:"Agree on price and time, and make the piece.",
 sampleNote:"Pieces, carvers and posts marked Sample are examples. Replace them with real ones after meeting the artisans.",
 sample:"Sample",
 galH:"Gallery", galP:"Hand-carved stone from Durgi. Tap a piece to ask about it.",
 all:"All", idol:"Idols", lamp:"Lamps", decor:"Decor", pillar:"Pillars",
 onReq:"Price on request", ask:"Ask about this", by:"by",
 meet:"Meet the carvers", yrs:"years of experience", village:"Durgi",
 addH:"Add your work", addP:"Fill in what you can. You can add more later.",
 fName:"Your name", fVillage:"Village", fPiece:"Name of the piece", fType:"Type", fPrice:"Price in rupees (₹)",
 fPhoto:"Photo", pick:"Take or choose a photo", fAbout:"About this piece (size, stone, days taken)",
 save:"Save my work", saved:"Your work is saved and now shows in the gallery.",
 errName:"Please write your name.", errPiece:"Please write the name of the piece.", errPhone:"Please write a phone number.", errItem:"Please tell us what you need.", errText:"Please write something first.",
 ordH:"Request a custom piece", ordP:"Tell the carver what you need. They will reply with a price and a time.",
 fPhone:"Phone number", fNeed:"What do you need?", fSize:"Size (for example 2 feet tall)", fBudget:"Budget in ₹ (optional)", fWhen:"Needed by", fDetails:"Details",
 send:"Send request", ordSaved:"Request saved. On the live platform it goes straight to the carver.",
 yourReq:"Your requests", noReq:"No requests yet.", nothing:"Nothing here yet.",
 optOther:"Something else",
 lrnH:"Learn new skills", lrnP:"Short lessons for carvers who want to sell more.",
 soon:"Video coming soon", steps:"Read the key steps", markDone:"Mark as done", done:"Done", min:"min",
 progress:(n,m)=>`${n} of ${m} lessons done`,
 comH:"Community", comP:"Share your work, ask a question, or give advice.",
 share:"Share your work or ask a question", post:"Post", addPhoto:"Add photo", like:"Like", feedback:"Write feedback", sendC:"Send",
 justNow:"Just now", foot:"A college project to support Durgi stone carvers.", foot2:"Works on phone and computer.",
 nav:"Main",
 login:"Log in", logout:"Log out", hi:n=>`Hello, ${n}`, loginH:"Log in", loginP:"Enter your phone number and password.",
 regH:"Create an account", regP:"Enter your name, phone number and a password.", fMobile:"Mobile number (10 digits)", fPass:"Password",
 show:"Show", hide:"Hide", noAcct:"New here? Create an account", haveAcct:"Already have an account? Log in", regBtn:"Create account",
 goToHome:"Go to Main Page", newCust:"New customer? Create an account", haveCust:"Already have an account? Log in",
 quoteText:"Every stone carries an eternal story waiting to be chiseled into life. Hunar Setu connects the sacred hands of Durgi carvers directly to the world.",
 quoteAuthor:"Hunar Setu · Preserving Durgi Craftsmanship",
 tagline:"Where timeless stone artistry meets the modern world",
 badge1:"100% Hand-Chiseled", badge2:"Centuries of Heritage", badge3:"Durgi, Palnadu",
 backHome:"Back to Home",
 quoteTextLogin:"Every sacred contour in stone reflects centuries of devotion and patience. Step inside Hunar Setu.",
 featuredH:"Featured Stone Masterpieces",
 featuredP:"Authentic hand-carved stone art chiseled by Durgi master artisans.",
 viewFullGallery:"View Full Gallery & More Carvings →",
 heroSub:"Direct from the master carvers of Durgi to temples, homes, and collectors. Commission custom stone idols, lamps, urlis, and pillars.",
 exploreGal:"Explore Gallery",
 reqOrder:"Custom Order",
 errPhoneBad:"Write a correct 10-digit mobile number.", errPass:"The password must have at least 6 characters.", errLogin:"The phone number or password is wrong.",
 errExists:"This number already has an account. Please log in.", errCrypto:"Login does not work in this browser. Try another browser.",
 needLogin:"Please log in first to do this.", loggedIn:"You are logged in.", regDone:"Your account is ready. Welcome!", loggedOut:"You are logged out.", youIn:"Logged in with",
 protoNote:"This is a college prototype. Accounts are saved only in this browser, so do not use a password you use anywhere else."
},
te:{
 app:"హునర్ సేతు", tag:"దుర్గి శిల్పకళ",
 home:"హోమ్", gallery:"గ్యాలరీ", order:"ఆర్డర్", learn:"నేర్చుకోండి", community:"సమూహం",
 heroH:"దుర్గి శిల్పాలు, ఇప్పుడు ఆన్‌లైన్‌లో",
 heroP:"మీ పనిని చూపించండి, కొనుగోలుదారుల నుండి నేరుగా ఆర్డర్లు పొందండి, కొత్త నైపుణ్యాలు నేర్చుకోండి. అన్నీ ఒకే చోట.",
 addWork:"నా పనిని జోడించండి", seeGallery:"గ్యాలరీ చూడండి",
 t1:"నా పనిని జోడించండి", t1d:"ఫోటో, ధర పెట్టండి",
 t2:"గ్యాలరీ చూడండి", t2d:"శిల్పాలను చూడండి",
 t3:"ప్రత్యేక ఆర్డర్ ఇవ్వండి", t3d:"మీకు ఏం కావాలో చెప్పండి",
 t4:"నైపుణ్యాలు నేర్చుకోండి", t4d:"శిల్పకారులకు చిన్న పాఠాలు",
 t5:"సమూహం", t5d:"పనిని పంచుకోండి, సలహాలు పొందండి",
 howH:"ఇది ఎలా పనిచేస్తుంది",
 h1:"శిల్పకారుడు పనిని జోడిస్తారు", h1d:"ఫోటో, పేరు, ధర ఉంటే చాలు.",
 h2:"కొనుగోలుదారు శిల్పాన్ని చూస్తారు", h2d:"గుడులు, డిజైనర్లు, బహుమతి కొనేవారు చూసి అభ్యర్థన పంపుతారు.",
 h3:"శిల్పకారుడు జవాబిస్తారు", h3d:"ధర, సమయం అంగీకరించి శిల్పాన్ని తయారు చేస్తారు.",
 sampleNote:"“నమూనా” అని ఉన్న శిల్పాలు, శిల్పకారులు, పోస్టులు ఉదాహరణలు మాత్రమే. నిజమైన శిల్పకారులను కలిసిన తర్వాత వాటిని మార్చండి.",
 sample:"నమూనా",
 galH:"గ్యాలరీ", galP:"దుర్గి చేతి చెక్కడం రాతి శిల్పాలు. దేని గురించైనా అడగడానికి దాన్ని నొక్కండి.",
 all:"అన్నీ", idol:"విగ్రహాలు", lamp:"దీపాలు", decor:"అలంకరణ", pillar:"స్తంభాలు",
 onReq:"ధర అడిగి తెలుసుకోండి", ask:"దీని గురించి అడగండి", by:"చేసినవారు",
 meet:"శిల్పకారులను కలవండి", yrs:"సంవత్సరాల అనుభవం", village:"దుర్గి",
 addH:"మీ పనిని జోడించండి", addP:"మీకు తెలిసినంత నింపండి. తర్వాత మరింత జోడించవచ్చు.",
 fName:"మీ పేరు", fVillage:"గ్రామం", fPiece:"శిల్పం పేరు", fType:"రకం", fPrice:"ధర (రూపాయలలో ₹)",
 fPhoto:"ఫోటో", pick:"ఫోటో తీయండి లేదా ఎంచుకోండి", fAbout:"ఈ శిల్పం గురించి (పరిమాణం, రాయి, పట్టిన రోజులు)",
 save:"నా పనిని సేవ్ చేయండి", saved:"మీ పని సేవ్ అయింది. ఇప్పుడు గ్యాలరీలో కనిపిస్తుంది.",
 errName:"దయచేసి మీ పేరు రాయండి.", errPiece:"దయచేసి శిల్పం పేరు రాయండి.", errPhone:"దయచేసి ఫోన్ నంబర్ రాయండి.", errItem:"మీకు ఏం కావాలో చెప్పండి.", errText:"ముందు ఏదైనా రాయండి.",
 ordH:"ప్రత్యేక శిల్పం కోసం అభ్యర్థన", ordP:"మీకు ఏం కావాలో శిల్పకారునికి చెప్పండి. వారు ధర, సమయంతో జవాబిస్తారు.",
 fPhone:"ఫోన్ నంబర్", fNeed:"మీకు ఏం కావాలి?", fSize:"పరిమాణం (ఉదా. 2 అడుగుల ఎత్తు)", fBudget:"బడ్జెట్ ₹ (ఐచ్ఛికం)", fWhen:"ఎప్పటికి కావాలి", fDetails:"వివరాలు",
 send:"అభ్యర్థన పంపండి", ordSaved:"అభ్యర్థన సేవ్ అయింది. అసలు వేదికలో ఇది నేరుగా శిల్పకారునికి చేరుతుంది.",
 yourReq:"మీ అభ్యర్థనలు", noReq:"ఇంకా అభ్యర్థనలు లేవు.", nothing:"ఇక్కడ ఇంకా ఏమీ లేదు.",
 optOther:"ఇంకేదైనా",
 lrnH:"కొత్త నైపుణ్యాలు నేర్చుకోండి", lrnP:"ఎక్కువ అమ్మాలనుకునే శిల్పకారులకు చిన్న పాఠాలు.",
 soon:"వీడియో త్వరలో", steps:"ముఖ్యమైన అంశాలు చదవండి", markDone:"పూర్తయింది అని గుర్తించండి", done:"పూర్తయింది", min:"నిమి",
 progress:(n,m)=>`${m} పాఠాలలో ${n} పూర్తయ్యాయి`,
 comH:"సమూహం", comP:"మీ పనిని పంచుకోండి, ప్రశ్న అడగండి, సలహా ఇవ్వండి.",
 share:"మీ పనిని పంచుకోండి లేదా ప్రశ్న అడగండి", post:"పోస్ట్ చేయండి", addPhoto:"ఫోటో జోడించండి", like:"ఇష్టం", feedback:"సలహా రాయండి", sendC:"పంపండి",
 justNow:"ఇప్పుడే", foot:"దుర్గి శిల్పకారులకు మద్దతుగా ఒక కళాశాల ప్రాజెక్ట్.", foot2:"ఫోన్‌లో, కంప్యూటర్‌లో పనిచేస్తుంది.",
 nav:"ప్రధాన మెనూ",
 login:"లాగిన్", logout:"లాగౌట్", hi:n=>`నమస్కారం, ${n}`, loginH:"లాగిన్ అవ్వండి", loginP:"మీ ఫోన్ నంబర్, పాస్‌వర్డ్ ఇవ్వండి.",
 regH:"కొత్త ఖాతా తెరవండి", regP:"మీ పేరు, ఫోన్ నంబర్, పాస్‌వర్డ్ ఇవ్వండి.", fMobile:"మొబైల్ నంబర్ (10 అంకెలు)", fPass:"పాస్‌వర్డ్",
 show:"చూపించు", hide:"దాచు", noAcct:"కొత్తవారా? ఖాతా తెరవండి", haveAcct:"ఇప్పటికే ఖాతా ఉందా? లాగిన్ అవ్వండి", regBtn:"ఖాతా తెరవండి",
 goToHome:"ప్రధాన పేజీకి వెళ్లండి", newCust:"కొత్తవారా? ఖాతా తెరవండి", haveCust:"ఇప్పటికే ఖాతా ఉందా? లాగిన్ అవ్వండి",
 quoteText:"ప్రతి రాతిలోనూ ఉలి తాకిడి కోసం ఎదురుచూసే ఒక అపురూప శిల్పం దాగి ఉంది. దుర్గి శిల్పకారుల పవిత్ర నైపుణ్యాన్ని ప్రపంచానికి చేరువ చేయడమే హునర్ సేతు.",
 quoteAuthor:"హునర్ సేతు · దుర్గి శిల్పకళా సంరక్షణ",
 tagline:"ప్రాచీన శిల్పకళకు నూతన డిజిటల్ వేదిక",
 badge1:"100% చేతితో చెక్కినది", badge2:"శతాబ్దాల ఘన చరిత్ర", badge3:"దుర్గి, పల్నాడు",
 backHome:"హోమ్‌కు తిరిగి వెళ్లండి",
 quoteTextLogin:"రాతిలోని ప్రతి పవిత్ర శిల్పం మన శిల్పకారుల దీక్షకు నిదర్శనం. హునర్ సేతుకు స్వాగతం.",
 featuredH:"ప్రత్యేక రాతి శిల్పాలు",
 featuredP:"దుర్గి శిల్పకారులు సాంప్రదాయ పద్ధతిలో చేతితో చెక్కిన అపురూప కళాఖండాలు.",
 viewFullGallery:"పూర్తి గ్యాలరీని చూడండి →",
 heroSub:"దుర్గి శిల్పకారుల చేతుల మీదుగా నేరుగా గుడులకు, ఇళ్లకు మరియు భక్తులకు చేరే పవిత్ర రాతి విగ్రహాలు, దీపాలు మరియు స్తంభాలు.",
 exploreGal:"గ్యాలరీ చూడండి",
 reqOrder:"ప్రత్యేక ఆర్డర్",
 errPhoneBad:"10 అంకెల సరైన మొబైల్ నంబర్ రాయండి.", errPass:"పాస్‌వర్డ్ కనీసం 6 అక్షరాలు ఉండాలి.", errLogin:"ఫోన్ నంబర్ లేదా పాస్‌వర్డ్ తప్పు.",
 errExists:"ఈ నంబర్‌తో ఇప్పటికే ఖాతా ఉంది. దయచేసి లాగిన్ అవ్వండి.", errCrypto:"ఈ బ్రౌజర్‌లో లాగిన్ పనిచేయడం లేదు. వేరే బ్రౌజర్ ప్రయత్నించండి.",
 needLogin:"ఇది చేయడానికి ముందు లాగిన్ అవ్వండి.", loggedIn:"లాగిన్ అయ్యారు.", regDone:"మీ ఖాతా సిద్ధం. స్వాగతం!", loggedOut:"లాగౌట్ అయ్యారు.", youIn:"లాగిన్ అయిన నంబర్:",
 protoNote:"ఇది కళాశాల ప్రోటోటైప్. ఖాతాలు ఈ బ్రౌజర్‌లో మాత్రమే సేవ్ అవుతాయి, కాబట్టి వేరే చోట వాడే పాస్‌వర్డ్ ఇక్కడ వాడకండి."
}};

/* ---------- example content (clearly marked as samples) ---------- */
const SAMPLE_WORKS=[
 {id:"w1",kind:"idol",en:"Seated Ganesha, 12 inch",te:"కూర్చున్న గణేశుడు, 12 అంగుళాలు",price:4500,by:"Venkata Rao",photo:"assets/carving-ganesha.jpg",sample:true},
 {id:"w2",kind:"lamp",en:"Stone deepam stand",te:"రాతి దీపం స్టాండ్",price:850,by:"Lakshmi Devi",photo:"assets/carving-lamp.jpg",sample:true},
 {id:"w3",kind:"decor",en:"Lotus planter bowl",te:"కమలం ఆకారపు కుండీ",price:2200,by:"Srinivas",photo:"assets/carving-lotus-bowl.jpg",sample:true},
 {id:"w4",kind:"pillar",en:"Carved temple pillar",te:"చెక్కిన గుడి స్తంభం",price:0,by:"Venkata Rao",photo:"assets/carving-pillar.jpg",sample:true},
 {id:"w5",kind:"idol",en:"Nandi, resting",te:"నందీశ్వరుడు",price:6800,by:"Srinivas",photo:"assets/carving-nandi.jpg",sample:true},
 {id:"w6",kind:"decor",en:"Stone grinding mortar (rolu)",te:"రాతి రోలు",price:1200,by:"Lakshmi Devi",photo:"assets/carving-lotus-bowl.jpg",sample:true}
];
const ARTISANS=[
 {n:"Venkata Rao",nt:"వెంకట రావు",y:25,sp:{en:"Idols and temple work",te:"విగ్రహాలు, గుడి పనులు"}},
 {n:"Lakshmi Devi",nt:"లక్ష్మీ దేవి",y:12,sp:{en:"Lamps and household stone",te:"దీపాలు, ఇంటి రాతి వస్తువులు"}},
 {n:"Srinivas",nt:"శ్రీనివాస్",y:8,sp:{en:"Animal figures and decor",te:"జంతు శిల్పాలు, అలంకరణ"}}
];
const LESSONS=[
 {id:"l1",min:6,en:"Check the stone before you carve",te:"చెక్కే ముందు రాయిని పరీక్షించండి",
  s:{en:["Tap the stone and listen. A clear ring is good. A dull sound can mean a crack inside.","Look for veins and soft patches before you mark the design.","Plan thin parts along the grain so they do not snap."],
     te:["రాయిని తట్టి శబ్దం వినండి. స్పష్టమైన శబ్దం మంచిది. మందమైన శబ్దం లోపల పగులు ఉందని అర్థం కావచ్చు.","డిజైన్ గీసే ముందు రాయిలో సన్నని చారలు, మెత్తని భాగాలు ఉన్నాయేమో చూడండి.","సన్నని భాగాలను రాయి గింజ దిశలో ప్లాన్ చేయండి, లేకపోతే విరిగిపోతాయి."]}},
 {id:"l2",min:8,en:"Finishing and polishing",te:"ఫినిషింగ్, పాలిష్",
  s:{en:["Rub with water and abrasive paper. Start rough and move to fine.","Wash off all dust and dry the piece in shade.","If you use natural oil or wax for a deeper colour, test a small spot first."],
     te:["నీళ్లు, రాపిడి కాగితంతో రుద్దండి. ముందు ముతకది, తర్వాత సన్నది వాడండి.","దుమ్మంతా కడిగి, నీడలో ఆరబెట్టండి.","లోతైన రంగు కోసం సహజ నూనె లేదా మైనం వాడితే, ముందు చిన్న చోట పరీక్షించండి."]}},
 {id:"l3",min:7,en:"Pricing your work",te:"మీ పనికి ధర నిర్ణయించడం",
  s:{en:["Add the cost of the stone, your days of work, and tool wear.","Add packing and delivery. Show it clearly to the buyer.","Look at similar pieces online. Never sell below your own cost."],
     te:["రాయి ఖర్చు, మీరు పని చేసిన రోజులు, పనిముట్ల అరుగుదల కలపండి.","ప్యాకింగ్, డెలివరీ ఖర్చు కలపండి. కొనుగోలుదారుకు స్పష్టంగా చూపించండి.","ఆన్‌లైన్‌లో ఇలాంటి శిల్పాల ధరలు చూడండి. మీ ఖర్చు కంటే తక్కువకు అమ్మకండి."]}},
 {id:"l4",min:6,en:"Packing stone safely",te:"రాతి శిల్పాలను సురక్షితంగా ప్యాక్ చేయడం",
  s:{en:["Wrap the piece in soft cloth, then bubble wrap or paddy straw.","Use a wooden crate with space around the piece on all sides.","Write FRAGILE on the box and take a photo before you close it."],
     te:["శిల్పాన్ని మెత్తని గుడ్డలో, తర్వాత బబుల్ ర్యాప్ లేదా వరిగడ్డిలో చుట్టండి.","అన్ని వైపులా ఖాళీ ఉండేలా చెక్క పెట్టె వాడండి.","పెట్టెపై “FRAGILE” అని రాయండి, మూసే ముందు ఫోటో తీయండి."]}},
 {id:"l5",min:5,en:"Taking good photos",te:"మంచి ఫోటోలు తీయడం",
  s:{en:["Use daylight near a window and a plain background.","Take the front, the side, a close-up of the carving, and one with a hand to show size.","Write the size in inches and the weight in kilos."],
     te:["కిటికీ దగ్గర పగటి వెలుగులో, సాదా నేపథ్యంతో తీయండి.","ముందు, పక్క, చెక్కడం దగ్గరి ఫోటో, పరిమాణం తెలియడానికి చేతితో ఒకటి తీయండి.","పరిమాణం అంగుళాలలో, బరువు కిలోలలో రాయండి."]}},
 {id:"l6",min:5,en:"Replying to buyers",te:"కొనుగోలుదారులకు జవాబు ఇవ్వడం",
  s:{en:["Reply within one day, even if you only say you will check.","Tell the price and delivery cost together.","For custom pieces, agree the size and the date in writing."],
     te:["ఒక రోజులోపు జవాబు ఇవ్వండి. చూసి చెబుతానని చెప్పినా చాలు.","ధర, డెలివరీ ఖర్చు కలిపి చెప్పండి.","ప్రత్యేక శిల్పాలకు పరిమాణం, తేదీ రాతపూర్వకంగా అంగీకరించండి."]}}
];
const SEED_POSTS=[
 {id:"p1",who:"Srinivas",text:{en:"Finished this lotus bowl after five days. Any advice on the polish?",te:"ఐదు రోజుల్లో ఈ కమలం కుండీ పూర్తి చేశాను. పాలిష్ గురించి ఏమైనా సలహా ఉందా?"},t:0,likes:3,comments:[{who:"Lakshmi Devi",text:{en:"Use finer paper on the petals, they will shine more.",te:"రేకులపై సన్నని కాగితం వాడండి, ఇంకా మెరుస్తాయి."}}],sample:true,photo:"assets/carving-lotus-bowl.jpg"},
 {id:"p2",who:"Lakshmi Devi",text:{en:"A buyer asked me to pack a lamp for courier. What do you use inside the box?",te:"ఒక కొనుగోలుదారు దీపాన్ని కొరియర్‌లో పంపమన్నారు. మీరు పెట్టెలో ఏం వాడతారు?"},t:0,likes:1,comments:[],sample:true,photo:"assets/carving-lamp.jpg"}
];

/* ---------- Supabase Cloud Database Client & Direct Backend Bridge ---------- */
const SUPABASE_URL = "https://qtircpfapqtedajuvznk.supabase.co";
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || "";
let sb = null;
let useBackendApi = false;

// Check if local backend connected to Supabase PostgreSQL is active
async function checkBackend(){
  try {
    const res = await fetch("/api/status", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data.status === "connected") {
        useBackendApi = true;
        console.log("Connected to Supabase PostgreSQL via server API:", data);
        updateDbIndicator(true);
        syncFromCloud();
        return;
      }
    }
  } catch(e) {}
  
  if (window.supabase && SUPABASE_ANON_KEY) {
    try {
      sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log("Connected to Supabase via JavaScript client");
      updateDbIndicator(true);
    } catch(e) {
      console.warn("Supabase init error:", e);
    }
  }
}
function updateDbIndicator(connected){
  const el = document.getElementById("dbIndicator");
  if(el){
    el.innerHTML = connected 
      ? `🟢 <span style="color:#246e45;font-weight:700">Supabase Connected (Cloud PostgreSQL)</span>`
      : `⚪ Local Storage (Supabase Offline)`;
  }
}
async function syncFromCloud(){
  if (!useBackendApi) return;
  try {
    const [ordRes, wrkRes, pstRes] = await Promise.all([
      fetch("/api/orders").then(r => r.json()).catch(() => null),
      fetch("/api/works").then(r => r.json()).catch(() => null),
      fetch("/api/posts").then(r => r.json()).catch(() => null)
    ]);
    if (ordRes && ordRes.orders && ordRes.orders.length) {
      S.requests = ordRes.orders;
    }
    if (wrkRes && wrkRes.works && wrkRes.works.length) {
      S.works = wrkRes.works;
    }
    if (pstRes && pstRes.posts && pstRes.posts.length) {
      S.posts = [...pstRes.posts, ...SEED_POSTS];
    }
    save();
    render(true);
  } catch(e) {
    console.warn("Sync from cloud error:", e);
  }
}
checkBackend();

/* ---------- saved data (browser storage fallback) ---------- */
const KEY="hunar-setu-v1";
function fresh(){return {lang:"en",works:[],requests:[],posts:SEED_POSTS.map(p=>({...p,comments:[...p.comments]})),done:[],liked:[],users:{},session:""}}
let S=fresh();
try{const r=localStorage.getItem(KEY);if(r)S=Object.assign(fresh(),JSON.parse(r))}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
let flash="",flashView="",errs={},pending={photo:""},filter="all",prefill="";
const t=k=>{const v=T[S.lang][k];return v===undefined?T.en[k]:v};
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const loc=o=>typeof o==="string"?o:(o[S.lang]||o.en);
const rupees=n=>"₹"+Number(n).toLocaleString("en-IN");

/* ---------- icons and stone drawings ---------- */
const IC={
 home:'<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
 gallery:'<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>',
 order:'<path d="M5 4h14v16H5z"/><path d="M8 9h8M8 13h8M8 17h5"/>',
 learn:'<path d="M3 8l9-4 9 4-9 4z"/><path d="M7 10v5c0 1.5 2.2 3 5 3s5-1.5 5-3v-5"/>',
 community:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.3c3 0 6 1 6 5.7"/>',
 add:'<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
 play:'<circle cx="12" cy="12" r="10" fill="none"/><path d="M10 8l6 4-6 4z" fill="currentColor"/>',
 heart:'<path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10z"/>'
};
const icon=(n,sw=2)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]}</svg>`;
const ART={
 lamp:'<ellipse cx="60" cy="104" rx="30" ry="7" fill="var(--stone-b)"/><path d="M52 104V70h16v34z" fill="var(--stone-a)"/><path d="M30 70c0-10 14-14 30-14s30 4 30 14c0 6-14 10-30 10S30 76 30 70z" fill="var(--stone-c)"/><path d="M60 54c-6-8-4-14 0-20 4 6 6 12 0 20z" fill="var(--stone-b)"/>',
 idol:'<rect x="26" y="98" width="68" height="10" rx="3" fill="var(--stone-b)"/><path d="M34 98c0-22 10-34 26-34s26 12 26 34z" fill="var(--stone-a)"/><ellipse cx="38" cy="46" rx="11" ry="14" fill="var(--stone-b)"/><ellipse cx="82" cy="46" rx="11" ry="14" fill="var(--stone-b)"/><circle cx="60" cy="46" r="19" fill="var(--stone-c)"/><path d="M60 52c0 14 8 16 8 26" fill="none" stroke="var(--stone-b)" stroke-width="6" stroke-linecap="round"/><path d="M50 24h20l-4-10h-12z" fill="var(--stone-a)"/>',
 decor:'<ellipse cx="60" cy="104" rx="26" ry="6" fill="var(--stone-b)"/><path d="M20 60h80c0 28-16 44-40 44S20 88 20 60z" fill="var(--stone-a)"/><ellipse cx="60" cy="60" rx="40" ry="9" fill="var(--stone-c)"/><path d="M60 44c-8 6-8 12 0 16 8-4 8-10 0-16zM44 50c-8 2-10 8-4 12 6-2 8-8 4-12zM76 50c8 2 10 8 4 12-6-2-8-8-4-12z" fill="var(--stone-b)"/>',
 pillar:'<rect x="28" y="96" width="64" height="12" rx="2" fill="var(--stone-b)"/><rect x="40" y="30" width="40" height="66" fill="var(--stone-a)"/><path d="M50 36v54M60 36v54M70 36v54" stroke="var(--stone-b)" stroke-width="3"/><rect x="24" y="14" width="72" height="16" rx="3" fill="var(--stone-c)"/><rect x="34" y="30" width="52" height="6" fill="var(--stone-b)"/>'
};
const art=k=>`<svg viewBox="0 0 120 120" aria-hidden="true">${ART[k]||ART.decor}</svg>`;
const logo=`<svg viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="11" fill="var(--brand)"/><path d="M6 32h36" stroke="#fff" stroke-width="3" stroke-linecap="round"/><path d="M10 32c0-9 6-14 14-14s14 5 14 14" fill="none" stroke="#fff" stroke-width="3"/><path d="M17 32v-6M24 32v-8M31 32v-6" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></svg>`;

/* ---------- pieces of the page ---------- */
const NAV=[["home","home"],["gallery","gallery"],["order","order"],["learn","learn"],["community","community"]];
function view(){const h=(location.hash||"#home").slice(1);return ["home","gallery","add","order","learn","community","login"].includes(h)?h:"home"}
function navKey(v){return v==="add"?"gallery":v}
function chrome(){
  const curView=view();
  const isLoginPage=curView==="login";
  document.documentElement.lang=S.lang==="te"?"te":"en";
  document.body.classList.toggle("is-login-page",isLoginPage);
  const hdr=document.getElementById("hdr"),bnav=document.getElementById("bnav"),ftr=document.getElementById("ftr");
  if(isLoginPage){
    hdr.style.display="none";hdr.innerHTML="";
    bnav.style.display="none";bnav.innerHTML="";
    ftr.style.display="none";ftr.innerHTML="";
    return;
  }
  hdr.style.display="";bnav.style.display="";ftr.style.display="";
  const v=navKey(curView);
  hdr.innerHTML=`
    <a class="brand" href="#home">${logo}<span><b>${t("app")}</b><small>${t("tag")}</small></span></a>
    <nav class="main" aria-label="${t("nav")}">${NAV.map(([k,l])=>`<a href="#${k}" ${v===k?'aria-current="page"':""}>${t(l)}</a>`).join("")}</nav>
    <div class="right">
      <div class="lang" role="group" aria-label="Language">
        <button type="button" data-lang="en" lang="en" aria-pressed="${S.lang==="en"}">English</button>
        <button type="button" data-lang="te" lang="te" aria-pressed="${S.lang==="te"}">తెలుగు</button>
      </div>
      ${acct()}
    </div>`;
  bnav.setAttribute("aria-label",t("nav"));
  bnav.innerHTML=NAV.map(([k,l])=>`<a href="#${k}" ${v===k?'aria-current="page"':""}>${icon(k)}<span>${t(l)}</span></a>`).join("");
  ftr.innerHTML=`<div>${t("foot")}</div><div>${t("foot2")}</div><div id="dbIndicator" style="margin-top:6px;font-size:0.85rem"></div>`;
  updateDbIndicator(useBackendApi || (window.supabase && SUPABASE_ANON_KEY));
}
const flashHtml=()=>flash?`<div class="flash" role="status">${esc(flash)}</div>`:"";
const field=(id,label,control,err)=>`<div class="field"><label for="${id}">${label}</label>${control}<div class="err" id="e-${id}" role="alert">${err?esc(err):""}</div></div>`;

/* ---------- views ---------- */
function vHome(){
  const tiles=[["add","t1","add"],["gallery","t2","gallery"],["order","t3","order"],["learn","t4","learn"],["community","t5","community"]];
  const featured = SAMPLE_WORKS.slice(0, 4);
  return `
  ${flashHtml()}
  <section class="grand-hero">
    <div class="grand-hero-visual">
      <img src="assets/hero-stone-carver.jpg" alt="Durgi master artisan chiseling stone carving in workshop" class="grand-hero-img">
      <div class="grand-hero-gradient"></div>
      <div class="grand-hero-content">
        <div class="hero-top-badges">
          <span class="heritage-pill">🏛️ ${t("badge2")} · ${t("badge3")}</span>
          <span class="heritage-pill highlight">🖐️ ${t("badge1")}</span>
        </div>
        <h1 class="grand-hero-title">${t("heroH")}</h1>
        <blockquote class="grand-fancy-quote">
          <span class="fancy-quote-mark" aria-hidden="true">“</span>
          <p class="fancy-quote-body">${t("quoteText")}</p>
          <cite class="fancy-quote-cite">— ${t("quoteAuthor")}</cite>
        </blockquote>
        <p class="grand-hero-sub">${t("heroSub")}</p>
        <div class="grand-hero-actions">
          <a class="btn hero-cta-btn" href="#gallery">${icon("gallery")} ${t("exploreGal")}</a>
          <a class="btn hero-cta-btn secondary" href="#order">${icon("order")} ${t("reqOrder")}</a>
          <a class="btn ghost hero-cta-btn" href="#add">${icon("add")} ${t("addWork")}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="featured-section">
    <div class="featured-header">
      <div>
        <span class="tag">${t("tag")}</span>
        <h2>${t("featuredH")}</h2>
        <p class="lead">${t("featuredP")}</p>
      </div>
      <a class="btn ghost small view-all-link" href="#gallery">${t("viewFullGallery")}</a>
    </div>
    
    <div class="featured-grid">
      ${featured.map(w => {
        const name = loc(w);
        const price = w.price ? rupees(w.price) : t("onReq");
        return `
        <article class="featured-carving-card">
          <div class="featured-img-wrap">
            <img src="${w.photo}" alt="${esc(name)}" class="featured-img" loading="lazy">
            <span class="card-kind-badge">${t(w.kind)}</span>
          </div>
          <div class="featured-card-body">
            <h3>${esc(name)}</h3>
            <div class="featured-price">${price}</div>
            <div class="featured-artisan">${t("by")} <b>${esc(w.by)}</b> · ${t("village")}</div>
            <button class="btn ghost small ask-btn" type="button" data-ask="${esc(name)}" data-kind="${w.kind}">
              ${t("ask")}
            </button>
          </div>
        </article>`;
      }).join("")}
    </div>
    
    <div class="featured-footer-cta">
      <a class="btn" href="#gallery">${t("viewFullGallery")}</a>
    </div>
  </section>

  <section class="tiles">${tiles.map(([h,k,i])=>`<a class="tile" href="#${h}"><span class="ico">${icon(i)}</span><span><b>${t(k)}</b><span class="d">${t(k+"d")}</span></span></a>`).join("")}</section>
  <section class="sec-head"><h2>${t("howH")}</h2></section>
  <ol class="steps">${[1,2,3].map(n=>`<li><b>${t("h"+n)}</b>${t("h"+n+"d")}</li>`).join("")}</ol>
  <p class="note">${t("sampleNote")}</p>`;
}
function allWorks(){return [...S.works,...SAMPLE_WORKS]}
function card(w){
  const name=w.sample?loc(w):w.title;
  const img=w.photo?`<img src="${w.photo}" alt="${esc(name)}">`:art(w.kind);
  const price=w.price?rupees(w.price):t("onReq");
  return `<article class="card"><div class="art">${img}</div><div class="body">
    ${w.sample?`<span class="tag sample">${t("sample")}</span>`:""}
    <h3>${esc(name)}</h3><div class="price">${price}</div>
    <div class="by">${t("by")} ${esc(w.by)}${w.village?", "+esc(w.village):""}</div>
    ${w.about?`<p class="note">${esc(w.about)}</p>`:""}
    <button class="btn ghost small" type="button" data-ask="${esc(name)}" data-kind="${w.kind}">${t("ask")}</button></div></article>`;
}
function vGallery(){
  const cats=["all","idol","lamp","decor","pillar"];
  const list=allWorks().filter(w=>filter==="all"||w.kind===filter);
  return `${flashHtml()}
  <section class="sec-head"><h1>${t("galH")}</h1><p class="lead">${t("galP")}</p>
    <div><a class="btn" href="#add">${icon("add")} ${t("addWork")}</a></div></section>
  <div class="chips" role="group">${cats.map(c=>`<button type="button" class="chip" data-filter="${c}" aria-pressed="${filter===c}">${t(c)}</button>`).join("")}</div>
  <div class="grid">${list.length?list.map(card).join(""):`<p>${t("nothing")}</p>`}</div>
  <section class="sec-head"><h2>${t("meet")}</h2></section>
  <div class="people">${ARTISANS.map(a=>`<div class="person"><div class="avatar" aria-hidden="true">${esc((S.lang==="te"?a.nt:a.n)[0])}</div><div><b>${esc(S.lang==="te"?a.nt:a.n)}</b><br><span class="note">${loc(a.sp)}<br>${a.y} ${t("yrs")} · ${t("village")}</span><br><span class="tag sample">${t("sample")}</span></div></div>`).join("")}</div>
  <p class="note">${t("sampleNote")}</p>`;
}
const typeOpts=()=>["idol","lamp","decor","pillar"].map(k=>`<option value="${k}">${t(k)}</option>`).join("");
function vAdd(){
  return `<section class="sec-head"><h1>${t("addH")}</h1><p class="lead">${t("addP")}</p></section>${banner()}
  <form class="f" id="addForm" novalidate>
    <div class="two">${field("a-name",t("fName"),`<input id="a-name" autocomplete="name" value="${esc(me().name)}">`,errs["a-name"])}
    ${field("a-vil",t("fVillage"),`<input id="a-vil" value="${t("village")}">`)}</div>
    ${field("a-piece",t("fPiece"),`<input id="a-piece">`,errs["a-piece"])}
    <div class="two">${field("a-type",t("fType"),`<select id="a-type">${typeOpts()}</select>`)}
    ${field("a-price",t("fPrice"),`<input id="a-price" type="number" inputmode="numeric" min="0">`)}</div>
    <div class="field"><span style="font-weight:700">${t("fPhoto")}</span>
      <div class="photo-pick"><label class="btn ghost file-btn">${t("pick")}<input id="a-photo" type="file" accept="image/*"></label>
      <img id="a-prev" alt="" ${pending.photo?`src="${pending.photo}"`:"hidden"}></div></div>
    ${field("a-about",t("fAbout"),`<textarea id="a-about"></textarea>`)}
    <button class="btn" type="submit">${t("save")}</button>
  </form>`;
}
function vOrder(){
  const reqs=S.requests;
  return `${flashHtml()}
  <section class="sec-head"><h1>${t("ordH")}</h1><p class="lead">${t("ordP")}</p></section>${banner()}
  <form class="f" id="ordForm" novalidate>
    <div class="two">${field("o-name",t("fName"),`<input id="o-name" autocomplete="name" value="${esc(me().name)}">`,errs["o-name"])}
    ${field("o-phone",t("fPhone"),`<input id="o-phone" type="tel" inputmode="tel" autocomplete="tel" value="${esc(me().phone)}">`,errs["o-phone"])}</div>
    ${field("o-item",t("fNeed"),`<select id="o-item">${typeOpts()}<option value="other">${t("optOther")}</option></select>`)}
    <div class="two">${field("o-size",t("fSize"),`<input id="o-size">`)}
    ${field("o-budget",t("fBudget"),`<input id="o-budget" type="number" inputmode="numeric" min="0">`)}</div>
    ${field("o-when",t("fWhen"),`<input id="o-when" type="date">`)}
    ${field("o-text",t("fDetails"),`<textarea id="o-text">${esc(prefill)}</textarea>`,errs["o-text"])}
    <button class="btn" type="submit">${t("send")}</button>
  </form>
  <section class="sec-head"><h2>${t("yourReq")}</h2></section>
  ${reqs.length?`<ul class="reqs">${reqs.map(r=>`<li><b>${esc(t(r.item)||r.item)}</b> · ${esc(r.name)}, ${esc(r.phone)}<br><span class="note">${esc(r.size)} ${r.budget?"· "+rupees(r.budget):""} ${r.when?"· "+esc(r.when):""}</span><br>${esc(r.text)}</li>`).join("")}</ul>`:`<p class="note">${t("noReq")}</p>`}`;
}
function vLearn(){
  const n=LESSONS.filter(l=>S.done.includes(l.id)).length,m=LESSONS.length;
  return `<section class="sec-head"><h1>${t("lrnH")}</h1><p class="lead">${t("lrnP")}</p>
    <p><b>${t("progress")(n,m)}</b></p><div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="${m}" aria-valuenow="${n}"><i style="width:${n/m*100}%"></i></div></section>
  <div class="lessons">${LESSONS.map(l=>{const d=S.done.includes(l.id);return `
   <article class="lesson ${d?"done":""}"><div class="video">${icon("play",1.6)}<span>${t("soon")} · ${l.min} ${t("min")}</span></div>
   <div class="body"><h3>${loc(l)}</h3>
   <details><summary>${t("steps")}</summary><ol>${l.s[S.lang].map(x=>`<li>${esc(x)}</li>`).join("")}</ol></details>
   <div><button class="btn small ${d?"":"ghost"}" type="button" data-done="${l.id}" aria-pressed="${d}">${d?"✓ "+t("done"):t("markDone")}</button></div></div></article>`}).join("")}</div>`;
}
function ago(p){return p.t?new Date(p.t).toLocaleDateString(S.lang==="te"?"te-IN":"en-IN",{day:"numeric",month:"short"}):""}
function postHtml(p){
  const liked=S.liked.includes(p.id);
  const txt=typeof p.text==="string"?p.text:loc(p.text);
  return `<article class="post"><header><div class="avatar" aria-hidden="true">${esc(p.who[0]||"?")}</div><div><b>${esc(p.who)}</b><br><span class="note">${p.sample?`<span class="tag sample">${t("sample")}</span>`:ago(p)}</span></div></header>
   <p>${esc(txt)}</p>${p.photo?`<img class="pic" src="${p.photo}" alt="">`:""}
   <div class="acts"><button class="btn small ${liked?"":"ghost"}" type="button" data-like="${p.id}" aria-pressed="${liked}">${icon("heart")} ${t("like")} · ${p.likes}</button></div>
   ${p.comments.length?`<ul class="comments">${p.comments.map(c=>`<li><b>${esc(c.who)}:</b> ${esc(typeof c.text==="string"?c.text:loc(c.text))}</li>`).join("")}</ul>`:""}
   <form class="cform" data-cform="${p.id}" novalidate><label class="sr" for="c-${p.id}" style="position:absolute;left:-9999px">${t("feedback")}</label><input id="c-${p.id}" placeholder="${t("feedback")}"><button class="btn small" type="submit">${t("sendC")}</button></form></article>`;
}
function vCommunity(){
  return `<section class="sec-head"><h1>${t("comH")}</h1><p class="lead">${t("comP")}</p></section>${banner()}
  <form class="f" id="postForm" novalidate>
    ${field("p-name",t("fName"),`<input id="p-name" autocomplete="name" value="${esc(me().name)}">`,errs["p-name"])}
    ${field("p-text",t("share"),`<textarea id="p-text"></textarea>`,errs["p-text"])}
    <div class="photo-pick"><label class="btn ghost file-btn small">${t("addPhoto")}<input id="p-photo" type="file" accept="image/*"></label><img id="p-prev" alt="" ${pending.photo?`src="${pending.photo}"`:"hidden"}></div>
    <button class="btn" type="submit">${t("post")}</button></form>
  <div class="feed">${S.posts.map(postHtml).join("")}</div>
  <p class="note">${t("sampleNote")}</p>`;
}

/* ---------- login (prototype: accounts live in this browser only; passwords are salted and hashed, never stored as typed) ---------- */
let authMode="login",authNext="#home",prevHash=location.hash||"#home";
const me=()=>{const u=S.users[S.session];return u?{name:u.name,phone:S.session}:{name:"",phone:""}};
function acct(){
  return S.session
   ?`<div class="user-chip"><span class="hi">${t("hi")(esc(me().name))}</span><button type="button" class="btn ghost small logout-btn" data-logout>${t("logout")}</button></div>`
   :`<a class="btn small header-login-btn" href="#login" id="hdrLoginBtn"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span>${t("login")}</span></a>`;
}
const banner=()=>S.session?"":`<div class="notice" role="status"><span>${t("needLogin")}</span><a class="btn small" href="#login">${t("login")}</a></div>`;
function vLogin(){
  if(S.session)return `${flashHtml()}<section class="sec-head"><h1>${t("hi")(esc(me().name))}</h1><p class="lead">${t("youIn")} <b>${esc(me().phone)}</b></p></section><div style="display:flex;gap:1rem;flex-wrap:wrap"><a class="btn" href="#home">${t("goToHome")}</a><button class="btn ghost" type="button" data-logout>${t("logout")}</button></div>`;
  const reg=authMode==="register";
  const currPhone=(document.getElementById("u-phone")||{}).value||"";
  return `
  <div class="landing-container login-page-container">
    <div class="landing-layout">
      <div class="landing-visual login-visual">
        <img class="landing-photo" src="assets/login-stone-sculpture.jpg" alt="Durgi stone carved sculpture">
        <div class="landing-visual-overlay">
          <div class="visual-top-badge">
            <span class="heritage-pill">🏛️ ${t("badge2")} · ${t("badge3")}</span>
          </div>
          <blockquote class="fancy-quote">
            <span class="quote-mark" aria-hidden="true">“</span>
            <p class="quote-text">${t("quoteTextLogin")}</p>
            <cite class="quote-author">— ${t("quoteAuthor")}</cite>
          </blockquote>
          <div class="visual-features">
            <span class="feat-pill">🖐️ ${t("badge1")}</span>
            <span class="feat-pill">⏳ ${t("badge2")}</span>
            <span class="feat-pill">📍 ${t("badge3")}</span>
          </div>
        </div>
      </div>
      <div class="landing-form-col">
        <div class="auth-header">
          <a class="btn ghost small back-btn" href="#home">← ${t("backHome")}</a>
          <div class="lang" role="group" aria-label="Language">
            <button type="button" data-lang="en" lang="en" aria-pressed="${S.lang==="en"}">English</button>
            <button type="button" data-lang="te" lang="te" aria-pressed="${S.lang==="te"}">తెలుగు</button>
          </div>
        </div>
        <div class="auth-card">
          <div class="auth-brand">
            ${logo}
            <h1>${t("app")}</h1>
            <p class="auth-tagline">${t("tagline")}</p>
            <p class="auth-instruction">${reg?t("regP"):t("loginP")}</p>
          </div>
          ${flashHtml()}
          <div class="auth-tabs" role="tablist">
            <button type="button" class="auth-tab" role="tab" data-mode="login" aria-selected="${!reg}">${t("login")}</button>
            <button type="button" class="auth-tab" role="tab" data-mode="register" aria-selected="${reg}">${t("regBtn")}</button>
          </div>
          <form id="authForm" novalidate>
            ${reg?field("u-name",t("fName"),`<input id="u-name" autocomplete="name" placeholder="${t("fName")}">`,errs["u-name"]):""}
            ${field("u-phone",t("fMobile"),`<input id="u-phone" type="tel" inputmode="numeric" maxlength="10" autocomplete="tel-national" placeholder="9876543210" value="${esc(currPhone)}">`,errs["u-phone"])}
            ${field("u-pass",t("fPass"),`<div class="pw"><input id="u-pass" type="password" autocomplete="${reg?"new-password":"current-password"}" placeholder="${t("fPass")}"><button type="button" class="btn ghost small" data-pw>${t("show")}</button></div>`,errs["u-pass"])}
            <button class="btn submit-btn" type="submit">${reg?t("regBtn"):t("login")}</button>
          </form>
          <div class="auth-switch">
            <button type="button" data-mode="${reg?"login":"register"}">${reg?t("haveCust"):t("newCust")}</button>
          </div>
          <p class="note" style="text-align:center;font-size:.8rem">${t("protoNote")}</p>
        </div>
        <div class="auth-foot"><div>${t("foot")}</div><div>${t("foot2")}</div></div>
      </div>
    </div>
  </div>`;
}
const hexOf=b=>[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("");
async function hashPw(pw,saltHex){
  const salt=saltHex?new Uint8Array(saltHex.match(/../g).map(h=>parseInt(h,16))):crypto.getRandomValues(new Uint8Array(16));
  const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(pw),"PBKDF2",false,["deriveBits"]);
  const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt,iterations:100000,hash:"SHA-256"},key,256);
  return {salt:hexOf(salt),hash:hexOf(bits)};
}
async function doAuth(){
  const reg=authMode==="register",phone=val("u-phone").replace(/\s/g,""),pass=(document.getElementById("u-pass")||{}).value||"",name=reg?val("u-name"):"";
  const m={};
  if(reg&&!name)m["u-name"]=t("errName");
  if(!/^[6-9]\d{9}$/.test(phone))m["u-phone"]=t("errPhoneBad");
  if(pass.length<6)m["u-pass"]=t("errPass");
  if(Object.keys(m).length)return fail(m);
  try{
    if(reg){
      const hp = await hashPw(pass);
      if(useBackendApi){
        // Direct Supabase PostgreSQL registration via local bridge
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({phone, name, hash: hp.hash, salt: hp.salt})
        });
        const data = await res.json();
        if(res.status === 409 || data.error?.includes("already registered")) {
          return fail({"u-phone": t("errExists")});
        }
        if(!res.ok) {
          console.warn("Backend register error:", data);
        }
        S.users[phone] = {name, ...hp};
      } else if(sb){
        const {data: existing} = await sb.from("app_users").select("phone").eq("phone", phone).maybeSingle();
        if(existing) return fail({"u-phone": t("errExists")});
        const {error: insErr} = await sb.from("app_users").insert([{
          phone,
          name,
          password_hash: hp.hash,
          salt: hp.salt
        }]);
        if(insErr) console.warn("Supabase insert error:", insErr);
        S.users[phone] = {name, ...hp};
      } else {
        if(S.users[phone])return fail({"u-phone":t("errExists")});
        S.users[phone]={name,...hp};
      }
    }else{
      if(useBackendApi){
        // Direct Supabase PostgreSQL login check via local bridge
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({phone})
        });
        if(res.status === 404) {
          return fail({"u-phone": t("errLogin")});
        }
        const data = await res.json();
        if(!res.ok) return fail({"u-pass": t("errLogin")});
        
        const hp = await hashPw(pass, data.salt);
        if(hp.hash !== data.hash) {
          return fail({"u-pass": t("errLogin")});
        }
        S.users[phone] = {name: data.name, salt: data.salt, hash: data.hash};
      } else if(sb){
        const {data: uDb, error: selErr} = await sb.from("app_users").select("*").eq("phone", phone).maybeSingle();
        if(selErr) console.warn("Supabase select error:", selErr);
        if(uDb){
          const hp = await hashPw(pass, uDb.salt);
          if(hp.hash !== uDb.password_hash) return fail({"u-pass": t("errLogin")});
          S.users[phone] = {name: uDb.name, salt: uDb.salt, hash: uDb.password_hash};
        } else {
          const u=S.users[phone];
          if(!u||(await hashPw(pass,u.salt)).hash!==u.hash)return fail({"u-pass":t("errLogin")});
        }
      } else {
        const u=S.users[phone];
        if(!u||(await hashPw(pass,u.salt)).hash!==u.hash)return fail({"u-pass":t("errLogin")});
      }
    }
  }catch(e){return fail({"u-pass":t("errCrypto")})}
  S.session=phone;save();errs={};authMode="login";
  sessionStorage.removeItem("hunar_user_clicked_login");
  flash=t(reg?"regDone":"loggedIn");flashView="home";
  location.hash="#home";
  render();
}
function needLogin(){sessionStorage.setItem("hunar_user_clicked_login","1");flash=t("needLogin");flashView="login";location.hash="#login"}
function logout(){S.session="";authMode="login";save();sessionStorage.removeItem("hunar_user_clicked_login");flash=t("loggedOut");flashView="home";location.hash="#home";render()}

/* ---------- render ---------- */
const VIEWS={home:vHome,gallery:vGallery,add:vAdd,order:vOrder,learn:vLearn,community:vCommunity,login:vLogin};
const TITLES={home:"home",gallery:"gallery",add:"addWork",order:"order",learn:"learn",community:"community",login:"login"};
function render(keepScroll){
  chrome();
  const app=document.getElementById("app");
  app.innerHTML=VIEWS[view()]();
  document.title=t("app")+" · "+t(TITLES[view()]);
  if(!keepScroll)window.scrollTo(0,0);
}
window.addEventListener("hashchange",()=>{
  const hh=location.hash||"#home";
  if(hh==="#login"&&prevHash!=="#login")authNext=prevHash;
  prevHash=hh;pending.photo="";errs={};
  if(view()!==flashView)flash="";
  if(view()!=="order")prefill="";
  // Track when user clicks the Log in button vs Back to Home
document.addEventListener("click", e => {
  const loginLnk = e.target.closest('a[href="#login"]');
  if (loginLnk) {
    sessionStorage.setItem("hunar_user_clicked_login", "1");
  }
  const homeLnk = e.target.closest('a[href="#home"], .brand, .back-btn');
  if (homeLnk) {
    sessionStorage.removeItem("hunar_user_clicked_login");
  }
});

// Ensure initial visit ALWAYS opens the landing page (#home)
const initH = location.hash;
const hasClickedLogin = sessionStorage.getItem("hunar_user_clicked_login") === "1";
if (!initH || initH === "" || initH === "#" || (initH === "#login" && !hasClickedLogin)) {
  location.hash = "#home";
}

render();
});

/* ---------- photo: shrink before saving so storage does not fill up ---------- */
function shrink(file,cb){
  const fr=new FileReader();
  fr.onload=()=>{const im=new Image();im.onload=()=>{
    const m=720,r=Math.min(1,m/Math.max(im.width,im.height));
    const c=document.createElement("canvas");c.width=Math.round(im.width*r);c.height=Math.round(im.height*r);
    c.getContext("2d").drawImage(im,0,0,c.width,c.height);cb(c.toDataURL("image/jpeg",.72))};
    im.onerror=()=>cb("");im.src=fr.result};
  fr.onerror=()=>cb("");fr.readAsDataURL(file);
}
document.addEventListener("change",e=>{
  if(e.target.id==="a-photo"||e.target.id==="p-photo"){
    const f=e.target.files[0];if(!f)return;
    const prev=document.getElementById(e.target.id==="a-photo"?"a-prev":"p-prev");
    shrink(f,url=>{pending.photo=url;if(url){prev.src=url;prev.hidden=false}});
  }
});

/* ---------- actions ---------- */
const val=id=>(document.getElementById(id)||{}).value?.trim()||"";
function fail(map){errs=map;const keys=Object.keys(map);
  keys.forEach(k=>{const el=document.getElementById("e-"+k);if(el)el.textContent=map[k]});
  const first=document.getElementById(keys[0]);if(first)first.focus()}
document.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  if(b.dataset.lang){S.lang=b.dataset.lang;save();render(true)}
  else if(b.dataset.logout!==undefined){logout()}
  else if(b.dataset.mode){authMode=b.dataset.mode;errs={};render(true)}
  else if(b.dataset.pw!==undefined){const i=document.getElementById("u-pass"),s=i.type==="password";i.type=s?"text":"password";b.textContent=t(s?"hide":"show")}
  else if(b.dataset.filter){filter=b.dataset.filter;render(true)}
  else if(b.dataset.ask){prefill=(S.lang==="te"?"ఈ శిల్పం గురించి: ":"About: ")+b.dataset.ask+"\n";flash="";location.hash="#order";setTimeout(()=>{const x=document.getElementById("o-item");if(x&&b.dataset.kind)x.value=b.dataset.kind},0)}
  else if(b.dataset.done){const id=b.dataset.done;S.done=S.done.includes(id)?S.done.filter(x=>x!==id):[...S.done,id];save();render(true)}
  else if(b.dataset.like){if(!S.session)return needLogin();const p=S.posts.find(x=>x.id===b.dataset.like);if(!p)return;
    if(S.liked.includes(p.id)){S.liked=S.liked.filter(x=>x!==p.id);p.likes--}else{S.liked.push(p.id);p.likes++}save();render(true)}
});
document.addEventListener("submit",e=>{
  e.preventDefault();const f=e.target;
  if(f.id==="authForm")return doAuth();
  if(!S.session)return needLogin();
  if(f.id==="addForm"){
    const m={};if(!val("a-name"))m["a-name"]=t("errName");if(!val("a-piece"))m["a-piece"]=t("errPiece");
    if(Object.keys(m).length)return fail(m);
    S.works.unshift({id:"u"+Date.now(),by:val("a-name"),village:val("a-vil"),title:val("a-piece"),kind:val("a-type")||"decor",price:Number(val("a-price"))||0,about:val("a-about"),photo:pending.photo});
    if(sb){
      sb.from("artisan_works").insert([{by_name:val("a-name"),village:val("a-vil")||"Durgi",title:val("a-piece"),kind:val("a-type")||"decor",price:Number(val("a-price"))||0,about:val("a-about")}]).then(({error})=>{if(error)console.warn("Supabase add error:",error)});
    }
    save();pending.photo="";errs={};flash=t("saved");flashView="gallery";filter="all";location.hash="#gallery";
  }else if(f.id==="ordForm"){
    const m={};if(!val("o-name"))m["o-name"]=t("errName");if(!val("o-phone"))m["o-phone"]=t("errPhone");if(!val("o-text"))m["o-text"]=t("errItem");
    if(Object.keys(m).length)return fail(m);
    S.requests.unshift({item:val("o-item")==="other"?"optOther":val("o-item"),name:val("o-name"),phone:val("o-phone"),size:val("o-size"),budget:Number(val("o-budget"))||0,when:val("o-when"),text:val("o-text")});
    if(sb){
      sb.from("custom_orders").insert([{item:val("o-item")==="other"?"optOther":val("o-item"),name:val("o-name"),phone:val("o-phone"),size:val("o-size"),budget:Number(val("o-budget"))||0,when_needed:val("o-when")||null,details:val("o-text")}]).then(({error})=>{if(error)console.warn("Supabase order error:",error)});
    }
    save();errs={};prefill="";flash=t("ordSaved");flashView="order";render();
  }else if(f.id==="postForm"){
    const m={};if(!val("p-name"))m["p-name"]=t("errName");if(!val("p-text"))m["p-text"]=t("errText");
    if(Object.keys(m).length)return fail(m);
    S.posts.unshift({id:"u"+Date.now(),who:val("p-name"),text:val("p-text"),t:Date.now(),likes:0,comments:[],photo:pending.photo});
    if(sb){
      sb.from("community_posts").insert([{who:val("p-name"),text:val("p-text")}]).then(({error})=>{if(error)console.warn("Supabase post error:",error)});
    }
    save();pending.photo="";errs={};render(true);
  }else if(f.dataset.cform){
    const inp=f.querySelector("input"),v=inp.value.trim();if(!v){inp.focus();return}
    const p=S.posts.find(x=>x.id===f.dataset.cform);
    p.comments.push({who:me().name||(S.lang==="te"?"మీరు":"You"),text:v});save();render(true);
  }
});
// Track when user clicks the Log in button vs Back to Home
document.addEventListener("click", e => {
  const loginLnk = e.target.closest('a[href="#login"]');
  if (loginLnk) {
    sessionStorage.setItem("hunar_user_clicked_login", "1");
  }
  const homeLnk = e.target.closest('a[href="#home"], .brand, .back-btn');
  if (homeLnk) {
    sessionStorage.removeItem("hunar_user_clicked_login");
  }
});

// Ensure initial visit ALWAYS opens the landing page (#home)
const initH = location.hash;
const hasClickedLogin = sessionStorage.getItem("hunar_user_clicked_login") === "1";
if (!initH || initH === "" || initH === "#" || (initH === "#login" && !hasClickedLogin)) {
  location.hash = "#home";
}

render();
