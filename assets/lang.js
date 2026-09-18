/* ZH Plumbers — 3-language system (English / Urdu / Arabic)
   Source strings map to translations; anything unmapped stays as authored. */
(function () {
  var SRC = 'src'; // default: page as authored
  var T = {
    /* ---------- shared nav / chrome ---------- */
    "Home": { ur: "ہوم", ar: "الرئيسية" },
    "About": { ur: "تعارف", ar: "من نحن" },
    "Services": { ur: "خدمات", ar: "الخدمات" },
    "Gallery": { ur: "گیلری", ar: "معرض الأعمال" },
    "Areas": { ur: "علاقے", ar: "المناطق" },
    "Contact": { ur: "رابطہ", ar: "اتصل بنا" },
    "Find Plumbers": { ur: "پلمبھر ڈھونڈیں", ar: "ابحث عن سباك" },
    "Plumbers: Join": { ur: "پلمبھر: جڑیں", ar: "للسباكين: انضم" },
    "📞 Call Now": { ur: "📞 ابھی کال کریں", ar: "📞 اتصل الآن" },
    "🏠 Home": { ur: "🏠 ہوم", ar: "🏠 الرئيسية" },
    "👤 About Us": { ur: "👤 ہمارا تعارف", ar: "👤 من نحن" },
    "🔧 Services": { ur: "🔧 خدمات", ar: "🔧 الخدمات" },
    "📸 Gallery": { ur: "📸 گیلری", ar: "📸 معرض الأعمال" },
    "📍 Areas": { ur: "📍 علاقے", ar: "📍 المناطق" },
    "📞 Contact": { ur: "📞 رابطہ", ar: "📞 اتصل بنا" },
    "Share on WhatsApp": { ur: "واٹس ایپ پر شیئر کریں", ar: "شارك على واتساب" },
    "Share on Facebook": { ur: "فیس بک پر شیئر کریں", ar: "شارك على فيسبوك" },

    /* ---------- find-plumber.html ---------- */
    "Find Plumbers Near Me": { ur: "اپنے قریب پلمبھر ڈھونڈیں", ar: "ابحث عن سباك قريب منك" },
    "Allow your location and instantly see plumbing partners near you — works anywhere in the world. Or search your city below.": {
      ur: "اپنی لوکیشن کی اجازت دیں اور اپنے قریب پلمبھر پارٹنرز فوراً دیکھیں — دنیا میں کہیں بھی کام کرتا ہے۔ یا نیچے اپنا شہر تلاش کریں۔",
      ar: "اسمح بموقعك وشاهد فوراً شركاء السباكة بالقرب منك — يعمل في أي مكان في العالم. أو ابحث عن مدينتك أدناه." },
    "📍 Use My Location": { ur: "📍 میری لوکیشن استعمال کریں", ar: "📍 استخدم موقعي" },
    "Your browser will ask for location permission — used only for this search.": {
      ur: "آپ کا براؤزر لوکیشن کی اجازت مانگے گا — صرف اسی تلاش کے لیے۔",
      ar: "سيطلب متصفحك إذن الموقع — يُستخدم لهذا البحث فقط." },
    "or search your city / area": { ur: "یا اپنا شہر / علاقہ تلاش کریں", ar: "أو ابحث عن مدينتك / منطقتك" },
    "e.g. Rawalpindi, Dubai, London, Riyadh": { ur: "مثلاً: راولپنڈی، دبئی، لندن، ریاض", ar: "مثال: راولبندي، دبي، لندن، الرياض" },
    "Search": { ur: "تلاش", ar: "بحث" },
    "Plumbers near you": { ur: "آپ کے قریب کے پلمبھر", ar: "سباكون بالقرب منك" },
    "💬 Get a quote from this plumber": { ur: "💬 اس پلمبھر سے کوٹ لیں", ar: "💬 احصل على عرض سعر من هذا السباك" },
    "💬 Message Us on WhatsApp": { ur: "💬 ہمیں واٹس ایپ پر پیغام بھیجیں", ar: "💬 راسلنا على واتساب" },
    "ZH Plumbers Network — quotes on contact. No fixed rates. Real partners only.": {
      ur: "ZH پلمبھر نیٹ ورک — رابطے پر کوٹ۔ کوئی فکس ریٹ نہیں۔ صرف حقیقی پارٹنرز۔",
      ar: "شبكة ZH للسباكين — عرض سعر عند الاتصال. لا أسعار ثابتة. شركاء حقيقيون فقط." },
    "🔍 Searching for plumbers...": { ur: "🔍 پلمبھر تلاش ہو رہے ہیں...", ar: "🔍 جارٍ البحث عن سباكين..." },
    "📡 Getting your location...": { ur: "📡 آپ کی لوکیشن لی جا رہی ہے...", ar: "📡 جارٍ الحصول على موقعك..." },
    "⚠️ Please type a city or area name.": { ur: "⚠️ براہ کرم شہر یا علاقے کا نام لکھیں۔", ar: "⚠️ يرجى كتابة اسم مدينة أو منطقة." },

    /* ---------- plumber-signup.html ---------- */
    "📲 Jobs Come to You": { ur: "📲 کام آپ کے پاس آئے", ar: "📲 الأعمال تصلك" },
    "Whenever a client needs plumbing work in your area, we send you the details — client info and job description, all ready.": {
      ur: "جب بھی آپ کے علاقے میں کسی کلائنٹ کو پلمبنگ کا کام ہو، ہم آپ کو تفصیل بھیجتے ہیں — کلائنٹ کی معلومات اور کام کی تفصیل، سب تیار۔",
      ar: "عندما يحتاج عميل إلى عمل سباكة في منطقتك، نرسل لك التفاصيل — بيانات العميل ووصف العمل، كل شيء جاهز." },
    "💰 Payment 100% Yours": { ur: "💰 ادائیگی 100% آپ کی", ar: "💰 الدفع 100% لك" },
    "⚡ No Registration Fee": { ur: "⚡ کوئی رجسٹریشن فیس نہیں", ar: "⚡ بدون رسوم تسجيل" },
    "No monthly charge, no signup fee. You only pay a fee on the jobs we bring you.": {
      ur: "کوئی ماہانہ چارج نہیں، کوئی سائن اپ فیس نہیں۔ صرف ان کاموں پر فیس ہے جو ہم آپ کو دلواتے ہیں۔",
      ar: "لا رسوم شهرية ولا رسوم تسجيل. تدفع فقط على الأعمال التي نجلبهاإليك." },
    "📍 Our Areas": { ur: "📍 ہمارے علاقے", ar: "📍 مناطقنا" },
    "Your Name *": { ur: "آپ کا نام *", ar: "اسمك *" },
    "Enter your name": { ur: "اپنا نام لکھیں", ar: "اكتب اسمك" },
    "Country *": { ur: "ملک *", ar: "البلد *" },
    "City *": { ur: "شہر *", ar: "المدينة *" },
    "Areas You Work In": { ur: "جن علاقوں میں کام کرتے ہیں", ar: "المناطق التي تعمل فيها" },
    "Register Free ▸": { ur: "مفت رجسٹر ▸", ar: "سجل مجاناً ▸" },
    "Questions?": { ur: "سوال ہے؟", ar: "لديك أسئلة؟" },
    "Contact us on WhatsApp": { ur: "واٹس ایپ پر رابطہ کریں", ar: "تواصل معنا على واتساب" },
    "📍 Use my current location": { ur: "📍 میری موجودہ لوکیشن استعمال کریں", ar: "📍 استخدم موقعي الحالي" },
    "📍 Jobs WhatsApp Group — How the System Works": { ur: "📍 جابز واٹس ایپ گروپ — سسٹم کیسے کام کرتا ہے", ar: "📍 مجموعة واتساب للأعمال — كيف يعمل النظام" },
    "Join the job alerts group — when a client needs plumbing work, the ZH Plumbers Network posts the job here:": {
      ur: "جاب الرٹس گروپ جڑیں — جب کلائنٹ کو پلمبنگ کا کام چاہیے، ZH پلمبھر نیٹ ورک جاب یہاں پوسٹ کرتا ہے:",
      ar: "انضم إلى مجموعة تنبيهات الأعمال — عندما يحتاج عميل إلى عمل سباكة، تنشر شبكة ZH العمل هنا:" },
    "Job posts:": { ur: "جاب پوسٹس:", ar: "نشر الأعمال:" },
    "The area, service and client details are posted in the group": { ur: "علاقہ، سروس اور کلائنٹ کی تفصیل گروپ میں پوسٹ ہوتی ہے", ar: "يتم نشر المنطقة والخدمة وتفاصيل العميل في المجموعة" },
    "First come, first served:": { ur: "پہلے آئے، پہلے پائیں:", ar: "الخدمة لمن يأتي أولاً:" },
    "The first plumber to accept gets the job": { ur: "جو پلمبھر پہلے قبول کرے، کام اسی کا", ar: "السباك الأول بالقبول يحصل على العمل" },
    "Payment:": { ur: "ادائیگی:", ar: "الدفع:" },
    "The client pays the plumber directly — network fee 15-20%": { ur: "کلائنٹ پلمبھر کو براہ راست ادائیگی کرتا ہے — نیٹ ورک فیس 15-20%", ar: "يدفع العميل للسباك مباشرة — رسوم الشبكة 15-20%" },
    "Freedom:": { ur: "آزادی:", ar: "الحرية:" },
    "Ignore any job you don't want — and if the service doesn't suit you at all, simply leave the group. No obligations": {
      ur: "جو کام نہیں چاہیے نظر انداز کریں — اور اگر سروس بالکل نہ سجے تو گروپ چھوڑ دیں۔ کوئی مجبوری نہیں",
      ar: "تجاهل أي عمل لا تريده — وإذا لم تناسبك الخدمة اترك المجموعة ببساطة. لا التزامات" },
    "💬 Join the Jobs Group (Free)": { ur: "💬 جابز گروپ جڑیں (مفت)", ar: "💬 انضم إلى مجموعة الأعمال (مجاناً)" },
    "WhatsApp rule: members join by themselves via the link. Jobs are only sent to group members.": {
      ur: "واٹس ایپ اصول: ممبرز خود لنک سے جڑتے ہیں۔ جابز صرف گروپ ممبرز کو بھیجی جاتی ہیں۔",
      ar: "قاعدة واتساب: ينضم الأعضاء بأنفسهم عبر الرابط. ترسل الأعمال لأعضاء المجموعة فقط." },

    /* ---------- index.html (Roman Urdu source → en/ur/ar) ---------- */
    "⭐ Rawalpindi & Gujjar Khan ka Trusted Plumber": { en: "⭐ Trusted Plumber in Rawalpindi & Gujjar Khan", ur: "⭐ راولپنڈی اور گجر خان کا بھروسہ مند پلمبھر", ar: "⭐ سباك موثوق في راولبندي وجوجر خان" },
    "📞 Abhi Call Karein": { en: "📞 Call Us Now", ur: "📞 ابھی کال کریں", ar: "📞 اتصل بنا الآن" },
    "📋 Free Quote Lein": { en: "📋 Get a Free Quote", ur: "📋 مفت کوٹ لیں", ar: "📋 احصل على عرض سعر مجاني" },
    "30-Min Response": { ur: "30 منٹ میں جواب", ar: "استجابة خلال 30 دقيقة" },
    "Certified Team": { ur: "سرٹیفائیڈ ٹیم", ar: "فريق معتمد" },
    "Leak-Proof Guarantee": { ur: "لیک پروف گارنٹی", ar: "ضمانة ضد التسريب" },
    "No Hidden Charges": { ur: "کوئی خفیہ چارجز نہیں", ar: "بدون رسوم خفية" },
    "Hamare Core Services": { en: "Our Core Services", ur: "ہماری بنیادی خدمات", ar: "خدماتنا الأساسية" },
    "Jo bhi plumbing masla ho — hum poori tarah tayyar hain": { en: "Whatever the plumbing problem — we are fully prepared", ur: "جو بھی پلمبھر مسئلہ ہو — ہم مکمل تیار ہیں", ar: "أيا كانت مشكلة السباكة — نحن جاهزون تماماً" },
    "Concealed Pipe Fitting": { ur: "کنسیلڈ پائپ فٹنگ", ar: "تركيب مواسير مخفية" },
    "PPRC hot & cold water pipes deewar ke andar": { en: "PPRC hot & cold water pipes inside the wall", ur: "دیوار کے اندر PPRC گرم اور ٹھنڈے پانی کے پائپ", ar: "مواسير PPRC للماء الساخن والبارد داخل الجدار" },
    "Sanitary Fitting": { ur: "صحتی فٹنگ", ar: "تركيبات صحية" },
    "Commodes, showers, basins ka modern installation": { en: "Modern installation of commodes, showers and basins", ur: "کمودز، شاورز اور بیسن کی جدید انسٹالیشن", ar: "تركيب حديث للمراحيض والدشات والمغاسل" },
    "Leak Detection": { ur: "لیک کی تشخیص", ar: "كشف التسريب" },
    "Hidden leakage detect aur permanent repair": { en: "Detect hidden leaks and repair permanently", ur: "پوشیدہ لیک کی تشخیص اور مستقل مرمت", ar: "كشف التسريبات المخفية وإصلاحها نهائياً" },
    "Drain Cleaning": { ur: "ڈرین کی صفائی", ar: "تنظيف المصارف" },
    "Sewerage aur main drain blockage cleaning": { en: "Sewerage and main drain blockage cleaning", ur: "سیوریج اور مین ڈرین بلاکج کی صفائی", ar: "تنظيف انسداد المجاري والمصارف الرئيسية" },
    "Geyser Service": { ur: "گیسر سروس", ar: "خدمة السخانات" },
    "Gas aur electric geyser installation & repair": { en: "Gas and electric geyser installation & repair", ur: "گیس اور الیکٹرک گیسر انسٹالیشن اور مرمت", ar: "تركيب وإصلاح السخانات الغازية والكهربائية" },
    "Water Tank": { ur: "واٹر ٹینک", ar: "خزان المياه" },
    "Tank cleaning, repair & auto switch fitting": { en: "Tank cleaning, repair & auto switch fitting", ur: "ٹینک صفائی، مرمت اور آٹو سوچ فٹنگ", ar: "تنظيف الخزان وإصلاحه وتركيب المفتاح التلقائي" },
    "Tamam Services Dekhein →": { en: "View All Services →", ur: "تمام خدمات دیکھیں →", ar: "عرض جميع الخدمات →" },
    "Hamare Baare Mein": { en: "About Us", ur: "ہمارے بارے میں", ar: "من نحن" },
    "Hamse Rabta Karein": { en: "Contact Us", ur: "ہم سے رابطہ کریں", ar: "اتصل بنا" },
    "WhatsApp Chat": { ur: "واٹس ایپ چیٹ", ar: "محادثة واتساب" },
    "Email": { ur: "ای میل", ar: "البريد الإلكتروني" },
    "Location": { ur: "مقام", ar: "الموقع" },
    "Hours": { ur: "اوقات", ar: "الأوقات" },
    "24/7 — Hafte ke saat din": { en: "24/7 — 7 days a week", ur: "24/7 — ہفتے کے سات دن", ar: "24/7 — طوال أيام الأسبوع" },
    "Hamare Service Areas": { en: "Our Service Areas", ur: "ہمارے سروس علاقے", ar: "مناطق خدمتنا" },
    "24/7 Open": { ur: "24/7 کھلا", ar: "مفتوح 24/7" },
    "Apna Naam *": { en: "Your Name *", ur: "آپ کا نام *", ar: "اسمك *" },
    "Phone Number *": { en: "Phone Number *", ur: "فون نمبر *", ar: "رقم الهاتف *" },
    "Service Required": { en: "Service Required", ur: "درکار سروس", ar: "الخدمة المطلوبة" },
    "-- Select Karein --": { en: "-- Select --", ur: "-- منتخب کریں --", ar: "-- اختر --" },
    "Area": { ur: "علاقہ", ar: "المنطقة" },
    "Preferred Time": { en: "Preferred Time", ur: "مطلوب وقت", ar: "الوقت المفضل" },
    "Masle ki Detail": { en: "Problem Details", ur: "مسئلے کی تفصیل", ar: "تفاصيل المشكلة" },
    "📤 WhatsApp Par Send Karein": { en: "📤 Send on WhatsApp", ur: "📤 واٹس ایپ پر بھیجیں", ar: "📤 إرسال عبر واتساب" },
    "Form fill karein — hum 30 minute mein call back karenge": { en: "Fill the form — we call back within 30 minutes", ur: "فارم بھریں — ہم 30 منٹ میں کال بیک کریں گے", ar: "املأ النموذج — سنتصل بك خلال 30 دقيقة" },
    "Free Quote Lein": { en: "Get a Free Quote", ur: "مفت کوٹ لیں", ar: "احصل على عرض سعر مجاني" },
    "Hum Kaise Kaam Karte Hain": { en: "How We Work", ur: "ہم کیسے کام کرتے ہیں", ar: "كيف نعمل" },
    "3 simple steps — bilkul aasan": { en: "3 simple steps — very easy", ur: "3 آسان مراحل — بالکل آسان", ar: "3 خطوات بسيطة — سهلة جداً" },
    "Call or Book Karein": { en: "Call or Book", ur: "کال یا بک کریں", ar: "اتصل أو احجز" },
    "Inspection & Quote": { en: "Inspection & Quote", ur: "معائنہ اور کوٹ", ar: "الفحص وعرض السعر" },
    "Fix & Satisfy": { en: "Fix & Satisfy", ur: "مرمت اور اطمینان", ar: "الإصلاح والرضا" },
    "Saal ka Experience": { en: "Years of Experience", ur: "سال کا تجربہ", ar: "سنة من الخبرة" },
    "Mukammal Projects": { en: "Completed Projects", ur: "مکمل منصوبے", ar: "مشاريع مكتملة" },
    "Emergency Service": { ur: "ایمرجنسی سروس", ar: "خدمة الطوارئ" },
    "Satisfaction": { ur: "اطمینان", ar: "الرضا" },
    "Hamare Projects": { en: "Our Projects", ur: "ہمارے منصوبے", ar: "مشاريعنا" },
    "Real kaam ki real tasveerein — quality khud bolti hai": { en: "Real photos of real work — quality speaks for itself", ur: "حقیقی کام کی حقیقی تصویریں — کوالٹی خود بولتی ہے", ar: "صور حقيقية لأعمال حقيقية — الجودة تتحدث عن نفسها" },
    "Before & After": { en: "Before & After", ur: "پہلے اور بعد", ar: "قبل وبعد" },
    "Hamare Customers Kya Kehte Hain": { en: "What Our Customers Say", ur: "ہمارے گاہک کیا کہتے ہیں", ar: "ماذا يقول عملاؤنا" },
    "Real log, real reviews": { en: "Real people, real reviews", ur: "حقیقی لوگ، حقیقی جائزے", ar: "أشخاص حقيقيون وتقييمات حقيقية" },
    "Sahi Rate, Phone Par — 2 Minute Mein": { en: "Right Rate, On Phone — Within 2 Minutes", ur: "صحیح ریٹ، فون پر — 2 منٹ میں", ar: "السعر الصحيح، عبر الهاتف — خلال دقيقتين" },
    "📋 1. Kaam Batayein": { en: "📋 1. Tell Us the Job", ur: "📋 1. کام بتائیں", ar: "📋 1. أخبرنا بالعمل" },
    "💬 2. Instant Rate": { en: "💬 2. Instant Rate", ur: "💬 2. فوری ریٹ", ar: "💬 2. سعر فوري" },
    "🔧 3. Kaam Shuru": { en: "🔧 3. Work Starts", ur: "🔧 3. کام شروع", ar: "🔧 3. يبدأ العمل" },
    "Abhi instant quote hasil karein:": { en: "Get an instant quote now:", ur: "ابھی فوری کوٹ حاصل کریں:", ar: "احصل على عرض سعر فوري الآن:" },
    "💬 WhatsApp Par Quote Lein": { en: "💬 Get a Quote on WhatsApp", ur: "💬 واٹس ایپ پر کوٹ لیں", ar: "💬 احصل على عرض سعر عبر واتساب" },
    "Aksar Puche Jane Wale Sawal (FAQ)": { en: "Frequently Asked Questions (FAQ)", ur: "اکثر پوچھے جانے والے سوالات (FAQ)", ar: "الأسئلة الشائعة (FAQ)" },
    "Plumber Bhejein ▸": { en: "Send a Plumber ▸", ur: "پلمبھر بھیجیں ▸", ar: "أرسل سباكاً ▸" },
    "Check Karein": { en: "Check Now", ur: "چیک کریں", ar: "تحقق الآن" },
    "Apna Area": { en: "Your Area", ur: "اپنا علاقہ", ar: "منطقتك" },
    "📍 Service Area Checker": { en: "📍 Service Area Checker", ur: "📍 سروس ایریا چیکر", ar: "📍 فاحص منطقة الخدمة" },
    "Apna area / society ka naam likhein — turant confirm karein": { en: "Type your area / society name — instant confirmation", ur: "اپنے علاقے / سوسائٹی کا نام لکھیں — فوراً تصدیق", ar: "اكتب اسم منطقتك أو مجتمعك — تأكيد فوري" },
    "Doosra Area": { en: "Other Area", ur: "دوسرا علاقہ", ar: "منطقة أخرى" },
    "Doosra Kaam": { en: "Other Work", ur: "دوسرا کام", ar: "عمل آخر" }
  };

  function getLang() {
    try { return localStorage.getItem('zhlang') || SRC; } catch (e) { return SRC; }
  }

  var origMap = new WeakMap();

  function tr(s, lang) {
    var e = T[s];
    if (!e) return null;
    var v = e[lang];
    return v || null;
  }

  window.zhT = function (s) {
    var lang = getLang();
    if (lang === SRC) return s;
    return tr(s, lang) || s;
  };

  function applyLang(lang) {
    var rtl = (lang === 'ur' || lang === 'ar');
    document.documentElement.setAttribute('dir', rtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang === SRC ? 'en' : lang);
    if (rtl && !document.getElementById('zh-arabic-font')) {
      var l = document.createElement('link');
      l.id = 'zh-arabic-font';
      l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap';
      document.head.appendChild(l);
    }
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        var p = n.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (p.tagName === 'SCRIPT' || p.tagName === 'STYLE') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) {
      var key = n.nodeValue.trim();
      if (!origMap.has(n)) {
        if (T[key]) origMap.set(n, n.nodeValue);
        else return;
      }
      if (lang === SRC) { n.nodeValue = origMap.get(n); return; }
      var v = tr(key, lang);
      if (v) {
        var orig = origMap.get(n);
        var lead = orig.match(/^\s*/)[0], tail = orig.match(/\s*$/)[0];
        n.nodeValue = lead + v + tail;
      }
    });
    // placeholders + titles
    document.querySelectorAll('[placeholder],[title]').forEach(function (el) {
      ['placeholder', 'title'].forEach(function (attr) {
        var val = el.getAttribute(attr);
        if (!val) return;
        var key = val.trim();
        if (!origMap.has(el)) {
          if (T[key]) origMap.set(el, el.getAttribute(attr));
          else return;
        }
        if (lang === SRC) { el.setAttribute(attr, origMap.get(el)); return; }
        var v = tr(key, lang);
        if (v) el.setAttribute(attr, v);
      });
    });
  }

  function setLang(lang) {
    try { localStorage.setItem('zhlang', lang); } catch (e) {}
    applyLang(lang);
    document.querySelectorAll('.zh-lang-btn').forEach(function (b) {
      b.style.background = b.getAttribute('data-lang') === lang ? '#38bdf8' : 'rgba(30,41,59,.9)';
      b.style.color = b.getAttribute('data-lang') === lang ? '#0c2434' : '#cbd5e1';
    });
  }
  window.zhSetLang = setLang;

  function initSwitcher() {
    var current = getLang();
    var bar = document.createElement('div');
    bar.style.cssText = 'position:fixed;bottom:14px;left:14px;z-index:9990;display:flex;gap:6px;padding:5px;background:rgba(15,23,42,.75);border:1px solid #334155;border-radius:30px;backdrop-filter:blur(6px)';
    var opts = [['src', 'EN / اردو'], ['en', 'English'], ['ur', 'اردو'], ['ar', 'عربي']];
    opts.forEach(function (o) {
      var b = document.createElement('button');
      b.className = 'zh-lang-btn';
      b.setAttribute('data-lang', o[0]);
      b.textContent = o[1];
      b.style.cssText = 'border:none;padding:6px 12px;border-radius:20px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:inherit;background:rgba(30,41,59,.9);color:#cbd5e1';
      b.onclick = function () { setLang(o[0]); };
      bar.appendChild(b);
    });
    document.body.appendChild(bar);
    setLang(current);
  }

  function boot() {
    var saved = getLang();
    var nav = (navigator.language || 'en').slice(0, 2);
    initSwitcher();
    if (saved === SRC && nav === 'ar') setLang('ar');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
