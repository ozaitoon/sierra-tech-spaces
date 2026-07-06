export type AttaBlogLocale = "en" | "ar";

type Localized<T> = Record<AttaBlogLocale, T>;

export type AttaBlogSection = {
  heading: string;
  body: string[];
};

export type AttaBlogFaq = {
  question: string;
  answer: string;
};

export type AttaBlogArticle = {
  slug: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
  title: Localized<string>;
  description: Localized<string>;
  category: Localized<string>;
  productFocus: Localized<string>;
  summary: Localized<string>;
  readingTime: Localized<string>;
  keywords: Localized<string[]>;
  aiQuestions: Localized<string[]>;
  benefits: Localized<string[]>;
  sections: Localized<AttaBlogSection[]>;
  faqs: Localized<AttaBlogFaq[]>;
};

const attaBaseBlogArticles: AttaBlogArticle[] = [
  {
    slug: "datsan-transformers-egyptian-factories",
    image: "/atta/transformers.jpg",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-08",
    title: {
      en: "DATSAN Transformers for Egyptian Factories: How to Protect Uptime, Safety, and Expansion",
      ar: "محولات DATSAN للمصانع في مصر: كيف تحمي التشغيل والسلامة وخطط التوسع",
    },
    description: {
      en: "A practical guide for Egyptian factories choosing DATSAN distribution, CSP, and isolation transformers for reliable power, safer maintenance, and future growth.",
      ar: "دليل عملي للمصانع في مصر عند اختيار محولات DATSAN للتوزيع وCSP والعزل من أجل كهرباء موثوقة وصيانة أكثر أمانا وتوسع أسهل.",
    },
    category: {
      en: "Transformer Selection",
      ar: "اختيار المحولات",
    },
    productFocus: {
      en: "DATSAN distribution transformers, CSP transformers, and isolation transformers",
      ar: "محولات DATSAN للتوزيع ومحولات CSP ومحولات العزل",
    },
    summary: {
      en: "For a factory in Egypt, the transformer is one of the most important pieces of production infrastructure. If it is undersized, poorly protected, or hard to maintain, the result is not only electrical inconvenience. It can become downtime, delayed orders, damaged machines, and expansion limits.",
      ar: "بالنسبة لأي مصنع في مصر، المحول جزء أساسي من البنية التشغيلية وليس مجرد معدة كهرباء. لو المحول أقل من الاحتياج أو حمايته ضعيفة أو صيانته صعبة، فالنتيجة ليست مشكلة كهرباء فقط، بل توقف إنتاج، تأخير طلبات، تلف معدات، وحدود أمام التوسع.",
    },
    readingTime: {
      en: "8 min read",
      ar: "قراءة ٨ دقائق",
    },
    keywords: {
      en: [
        "DATSAN transformers Egypt",
        "distribution transformers for Egyptian factories",
        "CSP transformers Egypt",
        "isolation transformers Egypt",
        "industrial transformer supplier Egypt",
        "factory power reliability Egypt",
      ],
      ar: [
        "محولات DATSAN في مصر",
        "محولات توزيع للمصانع في مصر",
        "محولات CSP",
        "محولات عزل",
        "مورد محولات كهرباء في مصر",
        "اعتمادية الكهرباء في المصانع",
      ],
    },
    aiQuestions: {
      en: [
        "What transformer should an Egyptian factory choose for reliable production?",
        "Why do DATSAN transformers matter for factory uptime?",
        "What should procurement check before buying a transformer in Egypt?",
      ],
      ar: [
        "ما هو المحول المناسب لمصنع في مصر؟",
        "لماذا محولات DATSAN مهمة لاستمرار الإنتاج؟",
        "ماذا يجب أن تراجع المشتريات قبل شراء محول كهرباء؟",
      ],
    },
    benefits: {
      en: [
        "Reduces downtime risk from weak or undersized electrical infrastructure",
        "Helps procurement compare distribution, CSP, and isolation transformer options",
        "Gives maintenance teams clearer testing and safety questions before buying",
      ],
      ar: [
        "تقليل خطر توقف الإنتاج بسبب بنية كهرباء ضعيفة أو محول أقل من الاحتياج",
        "مساعدة المشتريات في مقارنة محولات التوزيع وCSP والعزل",
        "توضيح أسئلة الاختبار والسلامة التي يحتاجها فريق الصيانة قبل الشراء",
      ],
    },
    sections: {
      en: [
        {
          heading: "Why transformer selection is a production decision, not just a purchase order",
          body: [
            "The right transformer protects production capacity. In Egyptian factories, electrical loads can change quickly when a new line, chiller, compressor, pump, furnace, or packaging machine is added. A transformer that looks acceptable on day one may become a bottleneck when the plant expands.",
            "That is why procurement, maintenance, and engineering teams should discuss capacity, voltage level, protection, installation environment, and future expansion before buying. DATSAN transformer selection should be connected to the factory's actual load profile, not only the lowest available price.",
          ],
        },
        {
          heading: "Where DATSAN distribution, CSP, and isolation transformers fit",
          body: [
            "Distribution transformers are normally the core option for moving power into usable factory voltage levels. They matter for production halls, utility buildings, workshops, warehouses, and industrial-zone facilities that need stable electrical supply.",
            "CSP transformers can be useful when self-protection and compact installation are important. Isolation transformers are useful when a site needs galvanic isolation, shock-risk reduction, or cleaner separation between sensitive loads and the wider electrical system.",
          ],
        },
        {
          heading: "What Egyptian buyers should check before ordering",
          body: [
            "Before ordering a transformer in Egypt, buyers should ask for the capacity range, voltage range, cooling method, protection approach, test routine, expected delivery path, and service support. The goal is to know how the transformer will behave under real operating pressure.",
            "Maintenance teams should also ask how easy it will be to inspect, isolate, and service the transformer later. A transformer purchase is not finished at delivery. It becomes part of the site reliability plan for years.",
          ],
        },
        {
          heading: "How Atta Group can support the conversation",
          body: [
            "Atta Group positions DATSAN transformers as part of a wider industrial supply and contracting conversation. That matters because factories rarely need a transformer in isolation. They may also need panels, electrical materials, civil preparation, installation coordination, or maintenance support.",
            "For Egyptian industrial buyers, the practical advantage is a clearer path from technical requirement to supply discussion. The conversation can start with transformer sizing and then connect to the site's wider electrical infrastructure needs.",
          ],
        },
        {
          heading: "Technical signals that should appear in the buyer brief",
          body: [
            "A serious transformer request should describe load type, expected demand, voltage level, installation environment, protection philosophy, testing expectations, and maintenance access. Without these details, the supplier is forced to quote around assumptions instead of the real site condition.",
            "For SEO and buyer education, these are the details that make the article useful: transformer capacity is not only kVA on paper; it is the match between the transformer, the plant load, the protection system, and the way the factory will grow.",
          ],
        },
      ],
      ar: [
        {
          heading: "اختيار المحول قرار تشغيل وليس أمر شراء فقط",
          body: [
            "المحول المناسب يحمي قدرة المصنع على الإنتاج. في مصانع مصر، الأحمال الكهربائية قد تتغير بسرعة عند إضافة خط إنتاج جديد أو تشيلر أو ضاغط أو مضخة أو فرن أو ماكينة تعبئة. المحول الذي يبدو مناسبا في أول يوم قد يتحول إلى نقطة ضعف عند التوسع.",
            "لذلك يجب أن يجلس فريق المشتريات والصيانة والهندسة على نفس الطاولة قبل الشراء. المطلوب ليس اختيار أرخص محول فقط، بل مراجعة القدرة، الجهد، الحماية، بيئة التركيب، وخطة التوسع القادمة.",
          ],
        },
        {
          heading: "أين تناسب محولات DATSAN للتوزيع وCSP والعزل؟",
          body: [
            "محولات التوزيع هي الاختيار الأساسي لتحويل الكهرباء إلى مستويات جهد مناسبة للتشغيل داخل المصنع. هي مهمة لصالات الإنتاج، مباني الخدمات، الورش، المخازن، والمنشآت داخل المناطق الصناعية في مصر.",
            "محولات CSP قد تكون مناسبة عندما تكون الحماية الذاتية والتركيب العملي مهمين. أما محولات العزل فتفيد عندما يحتاج الموقع إلى فصل كهربائي، تقليل مخاطر الصدمة، أو عزل الأحمال الحساسة عن باقي النظام الكهربائي.",
          ],
        },
        {
          heading: "ماذا يجب أن يراجع المشتري في مصر قبل طلب المحول؟",
          body: [
            "قبل طلب محول كهرباء في مصر، اسأل عن القدرة، نطاق الجهد، طريقة التبريد، أسلوب الحماية، الاختبارات، مسار التوريد، ودعم ما بعد التوريد. الهدف أن تعرف كيف سيتعامل المحول مع ضغط التشغيل الحقيقي.",
            "فريق الصيانة يجب أن يسأل أيضا عن سهولة الفحص والعزل والصيانة لاحقا. شراء المحول لا ينتهي عند التسليم؛ المحول يصبح جزءا من خطة الاعتمادية في الموقع لسنوات.",
          ],
        },
        {
          heading: "كيف تدعم مجموعة عطا هذا القرار؟",
          body: [
            "مجموعة عطا تقدم محولات DATSAN كجزء من حديث أوسع عن التوريدات الصناعية والمقاولات. هذا مهم لأن المصنع نادرا ما يحتاج محولا فقط؛ قد يحتاج أيضا لوحات كهربائية، مواد كهرباء، تجهيزات مدنية، تنسيق تركيب، أو دعم صيانة.",
            "بالنسبة للمشتري الصناعي في مصر، القيمة العملية هي وجود مسار أوضح من الاحتياج الفني إلى التوريد. يمكن أن يبدأ الحديث من قدرة المحول ثم يمتد إلى احتياجات البنية الكهربائية بالكامل.",
          ],
        },
        {
          heading: "المؤشرات الفنية التي يجب أن تظهر في طلب الشراء",
          body: [
            "طلب المحول الجاد يجب أن يوضح نوع الحمل، الطلب المتوقع، مستوى الجهد، بيئة التركيب، فلسفة الحماية، توقعات الاختبار، وسهولة الوصول للصيانة. بدون هذه التفاصيل يضطر المورد للتسعير بناء على افتراضات لا على حالة الموقع الحقيقية.",
            "هذه التفاصيل مهمة للسيو وللمشتري معا: قدرة المحول ليست رقما بالكيلو فولت أمبير فقط، بل توافق بين المحول وحمل المصنع ونظام الحماية وطريقة نمو الموقع.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        {
          question: "Are DATSAN transformers suitable for Egyptian factories?",
          answer: "DATSAN transformers can be suitable for Egyptian factories when the capacity, voltage, protection, installation environment, and maintenance plan match the site's real load profile. The buyer should size the transformer around current production and expected expansion.",
        },
        {
          question: "What is the difference between distribution, CSP, and isolation transformers?",
          answer: "Distribution transformers convert incoming power to usable site voltage. CSP transformers add self-protection features for specific installation needs. Isolation transformers separate circuits to improve safety, reduce shock risk, or protect sensitive equipment.",
        },
        {
          question: "What should a factory ask before buying a transformer in Egypt?",
          answer: "A factory should ask about rated capacity, voltage range, protection, cooling, routine tests, installation requirements, lead time, and maintenance access. These questions reduce the risk of buying a transformer that cannot support real production loads.",
        },
        {
          question: "Why is transformer choice linked to factory downtime?",
          answer: "Transformer choice affects downtime because the transformer feeds critical production loads. If it is overloaded, poorly protected, or hard to maintain, electrical issues can stop machines, delay production, and increase repair costs.",
        },
      ],
      ar: [
        {
          question: "هل محولات DATSAN مناسبة للمصانع في مصر؟",
          answer: "محولات DATSAN قد تكون مناسبة للمصانع في مصر عندما تتوافق القدرة والجهد والحماية وبيئة التركيب وخطة الصيانة مع أحمال الموقع الحقيقية. يجب اختيار المحول بناء على الإنتاج الحالي وخطة التوسع.",
        },
        {
          question: "ما الفرق بين محولات التوزيع وCSP ومحولات العزل؟",
          answer: "محولات التوزيع تحول الكهرباء إلى جهد مناسب للاستخدام داخل الموقع. محولات CSP تضيف خصائص حماية ذاتية حسب احتياج التركيب. محولات العزل تفصل الدوائر لتحسين السلامة أو حماية المعدات الحساسة.",
        },
        {
          question: "ماذا يسأل المصنع قبل شراء محول كهرباء في مصر؟",
          answer: "يجب أن يسأل المصنع عن القدرة، نطاق الجهد، الحماية، التبريد، الاختبارات، متطلبات التركيب، مدة التوريد، وسهولة الصيانة. هذه الأسئلة تقلل خطر شراء محول لا يناسب أحمال الإنتاج الفعلية.",
        },
        {
          question: "ما علاقة اختيار المحول بتوقف الإنتاج؟",
          answer: "اختيار المحول يؤثر على توقف الإنتاج لأنه يغذي أحمالا أساسية في المصنع. إذا كان المحول محملا زيادة أو حمايته ضعيفة أو صيانته صعبة، فقد تتوقف الماكينات وتزيد تكلفة الإصلاح.",
        },
      ],
    },
  },
  {
    slug: "electrical-panels-industrial-power-safety",
    image: "/atta/products/electric-panel.png",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-08",
    title: {
      en: "Electrical Panels in Egypt: Why Factory Power Safety Starts at the Panel",
      ar: "اللوحات الكهربائية في مصر: لماذا تبدأ سلامة كهرباء المصنع من اللوحة؟",
    },
    description: {
      en: "A guide for factories, utilities, and contractors choosing electrical panels, protection, and distribution materials for safer uptime in Egypt.",
      ar: "دليل للمصانع والمرافق والمقاولين عند اختيار اللوحات الكهربائية وأنظمة الحماية ومواد التوزيع من أجل تشغيل أكثر أمانا في مصر.",
    },
    category: {
      en: "Power Infrastructure",
      ar: "بنية الكهرباء الصناعية",
    },
    productFocus: {
      en: "Electrical panels, protection systems, and industrial distribution materials",
      ar: "لوحات كهربائية وأنظمة حماية ومواد توزيع صناعية",
    },
    summary: {
      en: "Electrical panels decide how power is distributed, protected, isolated, and maintained inside a factory. A good panel setup helps engineers control faults. A poor setup turns every electrical issue into confusion, risk, and downtime.",
      ar: "اللوحات الكهربائية تحدد كيف يتم توزيع الكهرباء وحمايتها وعزلها وصيانتها داخل المصنع. اللوحة الجيدة تساعد المهندسين على التحكم في الأعطال. أما اللوحة الضعيفة فتحول كل مشكلة كهرباء إلى ارتباك ومخاطر وتوقف.",
    },
    readingTime: {
      en: "7 min read",
      ar: "قراءة ٧ دقائق",
    },
    keywords: {
      en: [
        "electrical panels Egypt",
        "factory electrical panels",
        "industrial power distribution panels",
        "electrical protection systems Egypt",
        "factory electrical safety Egypt",
      ],
      ar: [
        "لوحات كهربائية في مصر",
        "لوحات كهرباء للمصانع",
        "لوحات توزيع كهرباء صناعية",
        "أنظمة حماية كهربائية",
        "سلامة الكهرباء في المصانع",
      ],
    },
    aiQuestions: {
      en: [
        "Why are electrical panels important for factory safety?",
        "What should an Egyptian factory check before buying electrical panels?",
        "How do power distribution panels reduce downtime?",
      ],
      ar: [
        "لماذا اللوحات الكهربائية مهمة لسلامة المصنع؟",
        "ماذا يراجع المصنع في مصر قبل شراء لوحة كهرباء؟",
        "كيف تقلل لوحات التوزيع توقف الإنتاج؟",
      ],
    },
    benefits: {
      en: [
        "Makes protection, switching, and fault isolation easier to understand",
        "Helps maintenance teams respond faster during breakdowns",
        "Creates a scalable electrical base for added machines and future loads",
      ],
      ar: [
        "توضيح الحماية والفصل وعزل الأعطال داخل نظام واحد",
        "مساعدة فرق الصيانة على الاستجابة أسرع عند الأعطال",
        "تجهيز قاعدة كهربائية قابلة للتوسع مع إضافة ماكينات وأحمال جديدة",
      ],
    },
    sections: {
      en: [
        {
          heading: "The panel is the control point of factory power",
          body: [
            "In many factories, electrical problems are not caused by one machine alone. They come from unclear distribution, weak protection, overloaded circuits, poor labeling, or difficult isolation. The electrical panel is where these risks either become controlled or become expensive.",
            "A well-planned panel makes power flow easier to understand. It gives operators and maintenance teams a clear place to switch, isolate, protect, and troubleshoot loads without guessing.",
          ],
        },
        {
          heading: "Why panels matter for safety and uptime in Egypt",
          body: [
            "Factories in Egypt often operate in demanding conditions: dust, heat, expansion pressure, tight production schedules, and mixed equipment from different suppliers. The panel must be designed for real site conditions, not only for a clean drawing.",
            "Good panels reduce unsafe improvisation. They make it easier to isolate a fault, protect equipment, and keep the rest of the plant running when one area needs maintenance.",
          ],
        },
        {
          heading: "What buyers should review before approving a panel",
          body: [
            "Before approving an electrical panel, buyers should review the load list, protection devices, short-circuit rating, enclosure, cable entry, labeling, ventilation, maintenance access, and future spare capacity. A panel with no room for expansion can become expensive quickly.",
            "Procurement should not evaluate the panel only as a metal box with components. It is a safety and reliability system that affects operators, maintenance teams, equipment life, and production planning.",
          ],
        },
        {
          heading: "How Atta connects panels with wider industrial supply",
          body: [
            "Atta Group's electrical supply conversation can connect panels with transformers, electrical materials, overhead transmission-line materials, contracting support, and maintenance needs. This helps the buyer think about power as a system instead of disconnected purchases.",
            "For contractors and factories in Egypt, that matters because electrical infrastructure is usually built in stages. The best panel decision is the one that supports today's load while leaving a clean path for tomorrow's additions.",
          ],
        },
        {
          heading: "Panel details that separate a quote from a technical solution",
          body: [
            "A useful panel discussion should include feeder count, load type, protection coordination, short-circuit level, enclosure rating, cable routing, ventilation, labeling, spare capacity, and the shutdown method for maintenance. These details decide whether the panel will be easy to operate under pressure.",
            "When those details are missing, the buyer may receive a price but not a reliable system. That is the difference between buying a panel and planning industrial power distribution.",
          ],
        },
      ],
      ar: [
        {
          heading: "اللوحة هي نقطة التحكم في كهرباء المصنع",
          body: [
            "في مصانع كثيرة، مشاكل الكهرباء لا تأتي من ماكينة واحدة فقط. المشكلة قد تكون في توزيع غير واضح، حماية ضعيفة، أحمال زائدة، ترقيم غير منظم، أو صعوبة عزل الأعطال. اللوحة الكهربائية هي المكان الذي تتحول فيه هذه المخاطر إما إلى نظام مسيطر عليه أو إلى تكلفة كبيرة.",
            "اللوحة المصممة جيدا تجعل مسار الكهرباء مفهوما. تعطي فريق التشغيل والصيانة نقطة واضحة للفصل والعزل والحماية وتتبع الأحمال بدون تخمين.",
          ],
        },
        {
          heading: "لماذا اللوحات مهمة للسلامة واستمرار التشغيل في مصر؟",
          body: [
            "المصانع في مصر تعمل غالبا في ظروف صعبة: أتربة، حرارة، ضغط توسع، جداول إنتاج ضيقة، ومعدات من موردين مختلفين. لذلك يجب أن تناسب اللوحة ظروف الموقع الحقيقية وليس الرسومات فقط.",
            "اللوحات الجيدة تقلل الحلول العشوائية. تساعد على عزل العطل، حماية المعدات، والحفاظ على باقي المصنع في التشغيل أثناء صيانة منطقة محددة.",
          ],
        },
        {
          heading: "ماذا يراجع المشتري قبل اعتماد اللوحة؟",
          body: [
            "قبل اعتماد لوحة كهربائية، راجع قائمة الأحمال، أجهزة الحماية، تحمل القصر، نوع الحاوية، دخول الكابلات، الترقيم، التهوية، سهولة الصيانة، والمساحة الاحتياطية للتوسع. اللوحة التي لا تترك مجالا للتوسع قد تصبح مكلفة بسرعة.",
            "لا يجب أن تنظر المشتريات للوحة كصندوق معدني ومكونات فقط. اللوحة نظام سلامة واعتمادية يؤثر على المشغلين وفريق الصيانة وعمر المعدات وخطة الإنتاج.",
          ],
        },
        {
          heading: "كيف تربط عطا اللوحات بباقي التوريدات الصناعية؟",
          body: [
            "حديث مجموعة عطا عن التوريدات الكهربائية يمكن أن يربط اللوحات بالمحولات والمواد الكهربائية ومواد خطوط النقل والمقاولات واحتياجات الصيانة. هذا يساعد المشتري على رؤية الكهرباء كنظام كامل وليس مشتريات منفصلة.",
            "بالنسبة للمقاولين والمصانع في مصر، هذا مهم لأن البنية الكهربائية غالبا تبنى على مراحل. القرار الأفضل للوحة هو القرار الذي يخدم حمل اليوم ويترك مسارا واضحا لإضافات الغد.",
          ],
        },
        {
          heading: "تفاصيل اللوحة التي تفرق بين عرض سعر وحل فني",
          body: [
            "حديث اللوحة المفيد يجب أن يشمل عدد المخارج، نوع الأحمال، تنسيق الحماية، مستوى القصر، درجة الحماية للحاوية، مسار الكابلات، التهوية، الترقيم، السعة الاحتياطية، وطريقة فصل الصيانة. هذه التفاصيل تحدد هل ستكون اللوحة سهلة التشغيل تحت الضغط أم لا.",
            "عندما تغيب هذه التفاصيل يحصل المشتري على سعر فقط وليس نظاما موثوقا. هذا هو الفرق بين شراء لوحة وتخطيط توزيع كهرباء صناعي.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        {
          question: "Why are electrical panels important in factories?",
          answer: "Electrical panels are important because they organize distribution, protection, switching, and fault isolation. A clear panel setup helps a factory reduce electrical risk, protect machines, and respond faster during maintenance or breakdowns.",
        },
        {
          question: "What should a factory check before buying an electrical panel in Egypt?",
          answer: "A factory should check the load list, protection devices, enclosure, cable entry, short-circuit rating, labeling, ventilation, maintenance access, and spare capacity for future expansion.",
        },
        {
          question: "Can better electrical panels reduce downtime?",
          answer: "Yes. Better panels can reduce downtime by making faults easier to isolate and by protecting equipment from avoidable electrical stress. They also help maintenance teams work faster and more safely.",
        },
        {
          question: "Are electrical panels only needed for new factories?",
          answer: "No. Existing factories may need panel upgrades when they add machines, increase production load, face repeated trips, or need safer maintenance access. Panel improvement can be part of a wider reliability plan.",
        },
      ],
      ar: [
        {
          question: "لماذا اللوحات الكهربائية مهمة في المصانع؟",
          answer: "اللوحات الكهربائية مهمة لأنها تنظم التوزيع والحماية والفصل وعزل الأعطال. اللوحة الواضحة تساعد المصنع على تقليل مخاطر الكهرباء وحماية الماكينات وتسريع الصيانة.",
        },
        {
          question: "ماذا يراجع المصنع قبل شراء لوحة كهرباء في مصر؟",
          answer: "يجب مراجعة قائمة الأحمال، أجهزة الحماية، نوع الحاوية، دخول الكابلات، تحمل القصر، الترقيم، التهوية، سهولة الصيانة، والمساحة الاحتياطية للتوسع.",
        },
        {
          question: "هل اللوحات الكهربائية الجيدة تقلل توقف الإنتاج؟",
          answer: "نعم. اللوحات الجيدة تقلل توقف الإنتاج لأنها تجعل عزل الأعطال أسهل وتحمي المعدات من إجهاد كهربائي يمكن تجنبه، كما تساعد فريق الصيانة على العمل بسرعة وأمان.",
        },
        {
          question: "هل اللوحات الكهربائية مطلوبة للمصانع الجديدة فقط؟",
          answer: "لا. المصانع القائمة قد تحتاج تطوير اللوحات عند إضافة ماكينات، زيادة الأحمال، تكرار الفصل، أو الحاجة لصيانة أكثر أمانا. تطوير اللوحات جزء من خطة الاعتمادية.",
        },
      ],
    },
  },
  {
    slug: "oxygen-nitrogen-generators-gas-compressors",
    image: "/atta/products/oxygen-generator.png",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-08",
    title: {
      en: "Oxygen Generators, Nitrogen Generators, and Gas Compressors in Egypt: Why Industrial Gas Is Core Infrastructure",
      ar: "مولدات الأكسجين والنيتروجين وضواغط الغاز في مصر: لماذا أصبحت الغازات الصناعية بنية أساسية؟",
    },
    description: {
      en: "A practical guide for Egyptian industrial operations evaluating oxygen generators, nitrogen generators, and gas compressors for reliable on-site supply.",
      ar: "دليل عملي للعمليات الصناعية في مصر عند تقييم مولدات الأكسجين ومولدات النيتروجين وضواغط الغاز من أجل توريد مستقر داخل الموقع.",
    },
    category: {
      en: "Industrial Gas Systems",
      ar: "أنظمة الغازات الصناعية",
    },
    productFocus: {
      en: "Oxygen generators, nitrogen generators, gas compressors, and industrial gas availability",
      ar: "مولدات أكسجين ومولدات نيتروجين وضواغط غاز وتوفر الغازات الصناعية",
    },
    summary: {
      en: "Industrial gas is no longer a side utility. In many operations, oxygen, nitrogen, and compressed gas affect production quality, safety, process stability, and uptime. That makes on-site generation and compression a strategic infrastructure decision.",
      ar: "الغازات الصناعية لم تعد خدمة جانبية. في عمليات كثيرة، الأكسجين والنيتروجين والغاز المضغوط يؤثرون على جودة الإنتاج والسلامة وثبات العملية واستمرار التشغيل. لذلك أصبح التوليد والضغط داخل الموقع قرار بنية أساسية.",
    },
    readingTime: {
      en: "8 min read",
      ar: "قراءة ٨ دقائق",
    },
    keywords: {
      en: [
        "oxygen generators Egypt",
        "nitrogen generators Egypt",
        "gas compressors Egypt",
        "industrial gas systems Egypt",
        "on-site oxygen generation",
        "industrial gas supply reliability",
      ],
      ar: [
        "مولدات أكسجين في مصر",
        "مولدات نيتروجين في مصر",
        "ضواغط غاز في مصر",
        "أنظمة غازات صناعية",
        "توليد أكسجين داخل الموقع",
        "اعتمادية توريد الغازات الصناعية",
      ],
    },
    aiQuestions: {
      en: [
        "Why do factories use on-site oxygen generators?",
        "When does a factory need a nitrogen generator?",
        "How do gas compressors support industrial operations?",
      ],
      ar: [
        "لماذا تستخدم المصانع مولدات أكسجين داخل الموقع؟",
        "متى يحتاج المصنع إلى مولد نيتروجين؟",
        "كيف تدعم ضواغط الغاز العمليات الصناعية؟",
      ],
    },
    benefits: {
      en: [
        "Improves availability of oxygen, nitrogen, or compressed gas for critical processes",
        "Reduces dependence on delivery timing when on-site generation is suitable",
        "Links gas infrastructure decisions to uptime, safety, and cost control",
      ],
      ar: [
        "تحسين توفر الأكسجين أو النيتروجين أو الغاز المضغوط للعمليات المهمة",
        "تقليل الاعتماد على مواعيد التوريد الخارجي عندما يناسب التوليد داخل الموقع",
        "ربط قرارات بنية الغاز باستمرار التشغيل والسلامة والتحكم في التكلفة",
      ],
    },
    sections: {
      en: [
        {
          heading: "Industrial gas availability affects the whole operation",
          body: [
            "Many industrial sites treat gas supply as a purchasing issue until a delay affects production. Oxygen, nitrogen, and compressed gas can be tied to cutting, packaging, blanketing, process control, medical supply, petrochemical activity, or utility systems.",
            "When gas availability becomes unstable, the problem spreads beyond one department. Production planning, maintenance, quality, safety, and procurement all feel the effect.",
          ],
        },
        {
          heading: "When on-site oxygen or nitrogen generation makes sense",
          body: [
            "On-site generation can make sense when a facility needs predictable gas availability, repeated consumption, tighter process control, or less dependence on delivery schedules. The decision should be based on consumption pattern, purity requirement, pressure, redundancy, and maintenance capacity.",
            "For Egyptian factories and industrial operators, the key question is not only whether a generator can produce gas. The question is whether the full system can support the site's required flow, quality, uptime, and service expectations.",
          ],
        },
        {
          heading: "Why gas compressors are part of the same infrastructure story",
          body: [
            "Gas compressors support movement, pressure, and process needs across oil and gas, petrochemical, manufacturing, and utility environments. A compressor decision affects energy use, maintenance planning, operating pressure, and service continuity.",
            "That is why compressors should be evaluated with the same seriousness as electrical infrastructure. They are not only machines; they are part of the site's ability to run consistently.",
          ],
        },
        {
          heading: "How Atta can frame the buyer discussion",
          body: [
            "Atta Group can connect oxygen generators, nitrogen generators, and gas compressors with the wider industrial supply conversation. That helps buyers think about gas systems as infrastructure that should be planned, maintained, and scaled.",
            "For operations teams in Egypt, this approach is useful because it turns the conversation from a single equipment quote into a practical discussion about process reliability, safety, and long-term support.",
          ],
        },
        {
          heading: "Gas-system parameters buyers should define early",
          body: [
            "A useful gas-system request should define required gas type, flow, purity, pressure, redundancy, operating hours, ambient conditions, service access, and whether the process can tolerate short interruptions. These parameters decide whether on-site generation and compression are technically suitable.",
            "For oxygen, nitrogen, and compressed gas systems, the equipment name is not enough. The system must match the process, the site's maintenance capability, and the reliability level the operation expects.",
          ],
        },
      ],
      ar: [
        {
          heading: "توفر الغازات الصناعية يؤثر على التشغيل كله",
          body: [
            "كثير من المواقع الصناعية تتعامل مع توريد الغاز كموضوع مشتريات فقط، إلى أن يتسبب تأخير في التأثير على الإنتاج. الأكسجين والنيتروجين والغاز المضغوط قد يرتبطوا بالقطع، التعبئة، العزل، التحكم في العملية، الإمداد الطبي، البتروكيماويات، أو أنظمة الخدمات.",
            "عندما يصبح توفر الغاز غير مستقر، لا تتوقف المشكلة عند قسم واحد. التخطيط والإنتاج والصيانة والجودة والسلامة والمشتريات يتأثرون معا.",
          ],
        },
        {
          heading: "متى يكون توليد الأكسجين أو النيتروجين داخل الموقع مناسبا؟",
          body: [
            "التوليد داخل الموقع قد يكون مناسبا عندما يحتاج المصنع إلى توفر متوقع للغاز، استهلاك متكرر، تحكم أفضل في العملية، أو اعتماد أقل على مواعيد التوريد. القرار يعتمد على نمط الاستهلاك، درجة النقاء، الضغط، الاحتياطي، وقدرة الصيانة.",
            "بالنسبة للمصانع والمشغلين الصناعيين في مصر، السؤال ليس هل يستطيع المولد إنتاج الغاز فقط. السؤال هو هل النظام بالكامل يدعم التدفق والجودة واستمرار التشغيل والدعم المطلوب للموقع.",
          ],
        },
        {
          heading: "لماذا ضواغط الغاز جزء من نفس البنية الأساسية؟",
          body: [
            "ضواغط الغاز تدعم الحركة والضغط واحتياجات العملية في قطاعات البترول والغاز والبتروكيماويات والتصنيع والمرافق. قرار الضاغط يؤثر على استهلاك الطاقة وخطة الصيانة وضغط التشغيل واستمرارية الخدمة.",
            "لذلك يجب تقييم الضواغط بجدية مثل تقييم البنية الكهربائية. هي ليست ماكينات فقط، بل جزء من قدرة الموقع على التشغيل المستقر.",
          ],
        },
        {
          heading: "كيف تصيغ عطا الحديث مع المشتري؟",
          body: [
            "مجموعة عطا يمكنها ربط مولدات الأكسجين ومولدات النيتروجين وضواغط الغاز بحديث التوريدات الصناعية الأوسع. هذا يساعد المشتري على رؤية أنظمة الغاز كبنية أساسية يجب تخطيطها وصيانتها وتوسيعها.",
            "بالنسبة لفرق التشغيل في مصر، هذا الأسلوب مفيد لأنه يحول الحديث من عرض سعر لمعدة واحدة إلى نقاش عملي عن اعتمادية العملية والسلامة والدعم طويل الأجل.",
          ],
        },
        {
          heading: "المعاملات الفنية التي يجب تحديدها مبكرا في أنظمة الغاز",
          body: [
            "طلب نظام الغاز المفيد يجب أن يحدد نوع الغاز، التدفق، النقاء، الضغط، الاحتياطي، ساعات التشغيل، ظروف البيئة، سهولة الخدمة، وهل تستطيع العملية تحمل توقف قصير أم لا. هذه المعاملات تحدد هل التوليد والضغط داخل الموقع مناسبين فنيا.",
            "في مولدات الأكسجين والنيتروجين والغاز المضغوط، اسم المعدة وحده لا يكفي. يجب أن يناسب النظام العملية وقدرة صيانة الموقع ومستوى الاعتمادية المطلوب.",
          ],
        },
      ],
    },
    faqs: {
      en: [
        {
          question: "Why do factories use oxygen generators on site?",
          answer: "Factories use on-site oxygen generators when they need predictable oxygen availability, better process control, and less dependence on external delivery schedules. The decision depends on flow, purity, pressure, uptime, and maintenance needs.",
        },
        {
          question: "When does a factory need a nitrogen generator?",
          answer: "A factory may need a nitrogen generator when nitrogen is used repeatedly for blanketing, packaging, process control, purging, or quality protection. On-site generation can improve availability when demand is stable enough.",
        },
        {
          question: "How do gas compressors support industrial operations?",
          answer: "Gas compressors support industrial operations by creating the pressure needed to move, store, or use gas in a process. They affect energy use, maintenance planning, safety, and production continuity.",
        },
        {
          question: "Are industrial gas systems important for Egypt-based factories?",
          answer: "Yes. Egypt-based factories that depend on oxygen, nitrogen, or compressed gas need reliable supply because gas availability can affect production quality, safety, maintenance schedules, and delivery commitments.",
        },
      ],
      ar: [
        {
          question: "لماذا تستخدم المصانع مولدات أكسجين داخل الموقع؟",
          answer: "تستخدم المصانع مولدات أكسجين داخل الموقع عندما تحتاج إلى توفر متوقع للأكسجين، تحكم أفضل في العملية، واعتماد أقل على مواعيد التوريد الخارجي. القرار يعتمد على التدفق والنقاء والضغط واستمرار التشغيل والصيانة.",
        },
        {
          question: "متى يحتاج المصنع إلى مولد نيتروجين؟",
          answer: "قد يحتاج المصنع إلى مولد نيتروجين عندما يستخدم النيتروجين بشكل متكرر في العزل أو التعبئة أو التحكم في العملية أو التطهير أو حماية الجودة. التوليد داخل الموقع يفيد عندما يكون الطلب مستقرا نسبيا.",
        },
        {
          question: "كيف تدعم ضواغط الغاز العمليات الصناعية؟",
          answer: "ضواغط الغاز تدعم العمليات الصناعية بتوفير الضغط المطلوب لتحريك الغاز أو تخزينه أو استخدامه داخل العملية. هي تؤثر على استهلاك الطاقة والصيانة والسلامة واستمرارية الإنتاج.",
        },
        {
          question: "هل أنظمة الغازات الصناعية مهمة للمصانع في مصر؟",
          answer: "نعم. المصانع في مصر التي تعتمد على الأكسجين أو النيتروجين أو الغاز المضغوط تحتاج إلى توريد موثوق لأن توفر الغاز يؤثر على جودة الإنتاج والسلامة وجداول الصيانة والتزامات التسليم.",
        },
      ],
    },
  },
  {
    slug: "electrical-expansion-planning-egyptian-factories",
    image: "/atta/electrical.jpg",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-08",
    title: {
      en: "Electrical Expansion Planning for Egyptian Factories Before Adding New Production Lines",
      ar: "تخطيط التوسع الكهربائي للمصانع في مصر قبل إضافة خطوط إنتاج جديدة",
    },
    description: {
      en: "How factories in Egypt can prepare transformers, electrical panels, distribution, and maintenance capacity before adding new machines or production lines.",
      ar: "كيف تستعد المصانع في مصر بالمحولات واللوحات الكهربائية والتوزيع والصيانة قبل إضافة ماكينات أو خطوط إنتاج جديدة.",
    },
    category: { en: "Factory Expansion", ar: "توسع المصانع" },
    productFocus: {
      en: "Transformers, electrical panels, power distribution, and site support",
      ar: "محولات ولوحات كهربائية وتوزيع كهرباء ودعم موقع",
    },
    summary: {
      en: "Adding a production line is not only a machinery decision. Every new machine changes the electrical load, protection needs, panel capacity, cable paths, maintenance access, and downtime risk. Egyptian factories that plan electrical expansion early can avoid expensive delays after equipment arrives.",
      ar: "إضافة خط إنتاج ليست قرار ماكينات فقط. كل ماكينة جديدة تغير الأحمال الكهربائية والحماية وسعة اللوحات ومسارات الكابلات وسهولة الصيانة وخطر التوقف. المصانع في مصر التي تخطط للتوسع الكهربائي مبكرا تتجنب تأخيرات مكلفة بعد وصول المعدات.",
    },
    readingTime: { en: "7 min read", ar: "قراءة ٧ دقائق" },
    keywords: {
      en: ["factory electrical expansion Egypt", "production line power planning", "transformers for factory expansion", "electrical panels for new production lines"],
      ar: ["توسع كهرباء المصانع في مصر", "تخطيط كهرباء خط إنتاج", "محولات لتوسعات المصانع", "لوحات كهربائية لخطوط الإنتاج"],
    },
    aiQuestions: {
      en: ["How should a factory plan power before adding a production line?", "Why does expansion affect transformers and panels?", "What electrical checks reduce startup delays?"],
      ar: ["كيف يخطط المصنع للكهرباء قبل إضافة خط إنتاج؟", "لماذا يؤثر التوسع على المحولات واللوحات؟", "ما الفحوصات التي تقلل تأخير التشغيل؟"],
    },
    benefits: {
      en: ["Reduces startup delays after new equipment arrives", "Connects transformer and panel sizing to real production growth", "Helps maintenance teams prepare for future loads"],
      ar: ["تقليل تأخير التشغيل بعد وصول المعدات", "ربط سعة المحولات واللوحات بنمو الإنتاج الفعلي", "مساعدة الصيانة على الاستعداد للأحمال القادمة"],
    },
    sections: {
      en: [
        { heading: "Expansion starts with the load study", body: ["Before a new line is ordered, the factory should review current loads, expected new loads, starting currents, operating hours, and spare capacity. This shows whether existing transformers and panels can support the expansion or whether upgrades are needed.", "This step is especially important in Egypt because factories often expand in stages. A site may add machines over years without redesigning the electrical backbone, which creates hidden limits."] },
        { heading: "Transformers and panels must grow together", body: ["A transformer upgrade without panel planning can still leave the factory constrained. A panel upgrade without transformer capacity can create the same problem in reverse. The practical plan should connect transformer sizing, panel capacity, protection, cables, and maintenance access.", "Atta can help frame this as one supply conversation instead of separate emergency purchases when the new line is already waiting to start."] },
        { heading: "Protection and starting current shape the real design", body: ["New motors, compressors, pumps, and production equipment can create starting currents that stress weak infrastructure. Expansion planning should check protection coordination, feeder sizing, voltage drop, and whether the transformer can handle both steady load and startup behavior.", "This is where technical planning beats generic purchasing. The buyer is not only asking for a panel or transformer; the buyer is defining how the new line will behave electrically during real operation."] },
        { heading: "Cable routes and shutdown windows should be planned before delivery", body: ["Factories often discover late that cable trays, trenches, panel space, or isolation windows were not ready for the new line. That creates delays while expensive equipment sits idle.", "A better plan maps physical routing, installation sequence, safety isolation, and commissioning steps before the equipment arrives in Egypt."] },
        { heading: "The best expansion plan protects tomorrow's uptime", body: ["Factories should leave room for future feeders, clear labeling, spare capacity, and safe isolation. This makes the next expansion easier and reduces the risk that production growth creates repeated electrical stoppages.", "Electrical expansion planning is not paperwork. It is a way to turn growth into reliable output instead of unstable operation."] },
      ],
      ar: [
        { heading: "التوسع يبدأ بدراسة الأحمال", body: ["قبل طلب خط إنتاج جديد، يجب مراجعة الأحمال الحالية، الأحمال المتوقعة، تيارات البدء، ساعات التشغيل، والسعة الاحتياطية. هذا يوضح هل المحولات واللوحات الحالية تكفي أم أن الموقع يحتاج تطويرا.", "هذا مهم في مصر لأن مصانع كثيرة تتوسع على مراحل. قد يضيف الموقع ماكينات على سنوات بدون إعادة تصميم العمود الفقري للكهرباء، فتظهر حدود خفية وقت التشغيل."] },
        { heading: "المحولات واللوحات يجب أن تتوسع معا", body: ["تطوير المحول بدون تخطيط اللوحات قد يترك المصنع مقيدا. وتطوير اللوحات بدون سعة محول كافية يخلق المشكلة العكسية. الخطة العملية تربط سعة المحول واللوحة والحماية والكابلات وسهولة الصيانة.", "عطا تستطيع صياغة الحديث كتوريد متكامل بدلا من مشتريات طارئة منفصلة عندما يكون خط الإنتاج الجديد جاهزا وينتظر الكهرباء."] },
        { heading: "الحماية وتيار البدء يشكلان التصميم الحقيقي", body: ["المواتير والضواغط والمضخات ومعدات الإنتاج الجديدة قد تخلق تيارات بدء تضغط على بنية ضعيفة. يجب أن يراجع التخطيط تنسيق الحماية وسعة المخارج وهبوط الجهد وقدرة المحول على تحمل الحمل الثابت وسلوك البدء.", "هنا يظهر الفرق بين التخطيط الفني والشراء العام. المشتري لا يطلب لوحة أو محولا فقط، بل يحدد كيف سيعمل الخط الجديد كهربائيا في التشغيل الحقيقي."] },
        { heading: "مسارات الكابلات ونوافذ التوقف يجب أن تجهز قبل وصول المعدات", body: ["مصانع كثيرة تكتشف متأخرا أن مسارات الكابلات أو الخنادق أو مساحة اللوحات أو نوافذ العزل غير جاهزة للخط الجديد. هذا يخلق تأخيرا بينما معدات مكلفة تنتظر بلا تشغيل.", "الخطة الأفضل ترسم المسار المادي وتسلسل التركيب والعزل الآمن وخطوات التشغيل التجريبي قبل وصول المعدات إلى الموقع في مصر."] },
        { heading: "أفضل خطة توسع تحمي تشغيل الغد", body: ["يجب ترك مساحة لمخارج مستقبلية وترقيم واضح وسعة احتياطية وعزل آمن. هذا يجعل التوسع القادم أسهل ويقلل خطر أن يتحول نمو الإنتاج إلى توقفات كهربائية متكررة.", "تخطيط التوسع الكهربائي ليس ورقا فقط. هو طريقة لتحويل النمو إلى إنتاج موثوق بدلا من تشغيل غير مستقر."] },
      ],
    },
    faqs: {
      en: [
        { question: "When should a factory review electrical capacity for expansion?", answer: "A factory should review electrical capacity before ordering a new production line, not after delivery. Early review gives time to upgrade transformers, panels, cables, and protection before startup." },
        { question: "Does adding machines always require a new transformer?", answer: "Not always. The answer depends on current load, spare capacity, starting current, and future expansion. A load review shows whether the current transformer is enough." },
        { question: "Why do panels matter during factory expansion?", answer: "Panels matter because new machines need safe feeders, protection, isolation, labeling, and maintenance access. Without panel planning, the new line can create safety and downtime risks." },
      ],
      ar: [
        { question: "متى يراجع المصنع السعة الكهربائية للتوسع؟", answer: "يجب مراجعة السعة الكهربائية قبل طلب خط الإنتاج الجديد وليس بعد وصوله. المراجعة المبكرة تعطي وقتا لتطوير المحولات واللوحات والكابلات والحماية قبل التشغيل." },
        { question: "هل إضافة ماكينات تعني دائما شراء محول جديد؟", answer: "ليس دائما. القرار يعتمد على الحمل الحالي والسعة الاحتياطية وتيار البدء وخطة التوسع. دراسة الأحمال توضح هل المحول الحالي يكفي أم لا." },
        { question: "لماذا اللوحات مهمة عند توسع المصنع؟", answer: "اللوحات مهمة لأن الماكينات الجديدة تحتاج مخارج آمنة وحماية وعزل وترقيم وسهولة صيانة. بدون تخطيط اللوحات قد يخلق الخط الجديد مخاطر سلامة وتوقف." },
      ],
    },
  },
  {
    slug: "preventive-maintenance-industrial-sites-egypt",
    image: "/atta/mechanical.jpg",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-08",
    title: { en: "Preventive Maintenance for Industrial Sites in Egypt: Reducing Downtime Before It Starts", ar: "الصيانة الوقائية للمواقع الصناعية في مصر: تقليل التوقف قبل حدوثه" },
    description: { en: "A practical guide to maintenance planning for factories, utilities, and oil and gas sites that want fewer surprises and safer uptime.", ar: "دليل عملي لتخطيط الصيانة في المصانع والمرافق ومواقع البترول والغاز لتقليل المفاجآت وحماية استمرار التشغيل." },
    category: { en: "Maintenance", ar: "الصيانة" },
    productFocus: { en: "Facility maintenance, mechanical support, electrical support, and site services", ar: "صيانة منشآت ودعم ميكانيكي وكهربائي وخدمات مواقع" },
    summary: { en: "Preventive maintenance is the difference between planned work and emergency stoppage. In industrial sites, small defects in panels, cables, pumps, supports, compressors, or civil works can become production loss if nobody checks them early.", ar: "الصيانة الوقائية هي الفرق بين عمل مخطط وتوقف طارئ. في المواقع الصناعية، العيوب الصغيرة في اللوحات أو الكابلات أو المضخات أو الدعامات أو الضواغط أو الأعمال المدنية قد تتحول إلى خسارة إنتاج إذا لم تتم مراجعتها مبكرا." },
    readingTime: { en: "7 min read", ar: "قراءة ٧ دقائق" },
    keywords: { en: ["preventive maintenance Egypt", "industrial maintenance Egypt", "factory downtime reduction", "oil and gas maintenance support"], ar: ["الصيانة الوقائية في مصر", "صيانة صناعية في مصر", "تقليل توقف المصانع", "دعم صيانة البترول والغاز"] },
    aiQuestions: { en: ["How does preventive maintenance reduce downtime?", "What should factories inspect regularly?", "Why is maintenance planning important for oil and gas sites?"], ar: ["كيف تقلل الصيانة الوقائية التوقف؟", "ماذا تفحص المصانع بانتظام؟", "لماذا تخطيط الصيانة مهم لمواقع البترول والغاز؟"] },
    benefits: { en: ["Finds problems before they stop production", "Protects assets across electrical, mechanical, and civil work", "Creates a clearer maintenance rhythm for busy sites"], ar: ["اكتشاف المشاكل قبل أن توقف الإنتاج", "حماية الأصول الكهربائية والميكانيكية والمدنية", "خلق إيقاع صيانة واضح للمواقع المشغولة"] },
    sections: {
      en: [
        { heading: "Preventive maintenance turns surprises into scheduled work", body: ["Emergency repairs are expensive because they arrive at the worst time. Preventive maintenance makes the site inspect known weak points before they interrupt production.", "For factories and oil and gas sites in Egypt, this means checking panels, connections, mechanical parts, supports, access roads, and utility systems on a planned rhythm."] },
        { heading: "Inspection routes should follow asset criticality", body: ["Not every asset deserves the same inspection interval. Critical transformers, panels, compressors, pumps, feeders, and site-access systems should be ranked by failure impact, operating stress, and repair difficulty.", "This ranking helps maintenance teams spend time where downtime risk is highest instead of treating all equipment as equal."] },
        { heading: "Good maintenance connects disciplines", body: ["A downtime event may start electrically, mechanically, or civilly, but the impact is operational. Maintenance planning should connect these disciplines instead of treating each one in isolation.", "Atta's civil, mechanical, electrical, and site-support positioning fits this need because many industrial problems cross more than one technical area."] },
        { heading: "Maintenance windows are a technical resource", body: ["A factory or petroleum site should treat shutdown windows like valuable capacity. Before each window, the team should know which inspections, replacements, isolations, and tests must happen.", "This prevents the common problem where the site stops but the technical team is not ready with scope, spares, permits, or manpower."] },
        { heading: "What a useful maintenance plan includes", body: ["A useful plan includes inspection frequency, responsible team, shutdown windows, spare parts, safety steps, and clear escalation. It should be simple enough to follow and specific enough to catch real risks.", "The best maintenance plan protects production by making technical work predictable."] },
      ],
      ar: [
        { heading: "الصيانة الوقائية تحول المفاجآت إلى عمل مخطط", body: ["الإصلاح الطارئ مكلف لأنه يأتي في أسوأ وقت. الصيانة الوقائية تجعل الموقع يراجع نقاط الضعف المعروفة قبل أن تقطع الإنتاج.", "بالنسبة للمصانع ومواقع البترول والغاز في مصر، هذا يعني فحص اللوحات والتوصيلات والأجزاء الميكانيكية والدعامات وطرق الوصول وأنظمة الخدمات بإيقاع واضح."] },
        { heading: "مسارات الفحص يجب أن تتبع أهمية الأصل", body: ["ليس كل أصل يحتاج نفس تكرار الفحص. المحولات واللوحات والضواغط والمضخات والمخارج وأنظمة الوصول الحرجة يجب ترتيبها حسب أثر الفشل وضغط التشغيل وصعوبة الإصلاح.", "هذا الترتيب يساعد فريق الصيانة على توجيه الوقت إلى الأماكن الأعلى خطرا بدلا من التعامل مع كل المعدات بنفس الوزن."] },
        { heading: "الصيانة الجيدة تربط التخصصات", body: ["حدث التوقف قد يبدأ كهربائيا أو ميكانيكيا أو مدنيا، لكن أثره تشغيلي. لذلك يجب أن يربط تخطيط الصيانة بين التخصصات بدلا من التعامل مع كل جزء وحده.", "تموضع عطا في المدني والميكانيكي والكهربائي ودعم المواقع يناسب هذا الاحتياج لأن مشاكل الصناعة غالبا تعبر أكثر من تخصص."] },
        { heading: "نافذة الصيانة مورد فني ثمين", body: ["يجب أن يتعامل المصنع أو موقع البترول مع نافذة التوقف كقدرة ثمينة. قبل كل نافذة يجب أن يعرف الفريق ما الفحوصات والاستبدالات والعزل والاختبارات المطلوبة.", "هذا يمنع مشكلة شائعة: يتوقف الموقع لكن الفريق الفني غير جاهز بالنطاق أو قطع الغيار أو التصاريح أو العمالة."] },
        { heading: "ماذا تتضمن خطة صيانة مفيدة؟", body: ["الخطة المفيدة تتضمن تكرار الفحص، الفريق المسؤول، نوافذ التوقف، قطع الغيار، خطوات السلامة، ومسار التصعيد. يجب أن تكون سهلة التنفيذ ومحددة بما يكفي لاكتشاف المخاطر.", "أفضل خطة صيانة تحمي الإنتاج لأنها تجعل العمل الفني متوقعا."] },
      ],
    },
    faqs: {
      en: [{ question: "How does preventive maintenance reduce factory downtime?", answer: "It reduces downtime by finding weak points before they become failures. Planned inspection is easier to manage than sudden repair during production." }, { question: "What should an industrial site inspect?", answer: "Sites should inspect electrical panels, cables, protection devices, mechanical equipment, supports, access routes, and safety-critical utilities." }, { question: "Is preventive maintenance useful for oil and gas sites?", answer: "Yes. Oil and gas sites depend on safety, access, reliability, and coordination, so planned maintenance reduces risk and improves readiness." }],
      ar: [{ question: "كيف تقلل الصيانة الوقائية توقف المصنع؟", answer: "تقلل التوقف لأنها تكشف نقاط الضعف قبل أن تتحول إلى أعطال. الفحص المخطط أسهل من إصلاح مفاجئ أثناء الإنتاج." }, { question: "ماذا يجب أن يفحص الموقع الصناعي؟", answer: "يجب فحص اللوحات والكابلات وأجهزة الحماية والمعدات الميكانيكية والدعامات وطرق الوصول والخدمات المرتبطة بالسلامة." }, { question: "هل الصيانة الوقائية مفيدة لمواقع البترول والغاز؟", answer: "نعم. مواقع البترول والغاز تعتمد على السلامة والوصول والاعتمادية والتنسيق، لذلك الصيانة المخططة تقلل المخاطر وترفع الجاهزية." }],
    },
  },
  {
    slug: "overhead-transmission-line-materials-egypt",
    image: "/atta/project-lines.jpg",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-08",
    title: { en: "Overhead Transmission-Line Materials in Egypt: Why Hardware and Site Coordination Matter", ar: "مواد خطوط النقل الهوائية في مصر: لماذا تهم المهمات والتنسيق الميداني؟" },
    description: { en: "How transmission-line materials, hardware, galvanizing, access, and civil coordination support power infrastructure projects in Egypt.", ar: "كيف تدعم مواد خطوط النقل والمهمات والجلفنة والوصول والتنسيق المدني مشروعات بنية الكهرباء في مصر." },
    category: { en: "Power Infrastructure", ar: "بنية الطاقة" },
    productFocus: { en: "Overhead transmission-line materials, fabrication, hot galvanizing, and civil works", ar: "مواد خطوط نقل هوائية وتصنيع وجلفنة ساخنة وأعمال مدنية" },
    summary: { en: "Transmission-line projects do not succeed with materials alone. Hardware quality, galvanizing, route access, foundations, lifting coordination, and site timing all affect whether the line moves from drawings to reliable infrastructure.", ar: "مشروعات خطوط النقل لا تنجح بالمواد وحدها. جودة المهمات والجلفنة والوصول للمسار والأساسات وتنسيق الرفع وتوقيت الموقع كلها تؤثر على انتقال الخط من الرسومات إلى بنية موثوقة." },
    readingTime: { en: "6 min read", ar: "قراءة ٦ دقائق" },
    keywords: { en: ["overhead transmission line materials Egypt", "power line hardware Egypt", "hot galvanizing transmission lines", "civil works for power infrastructure"], ar: ["مواد خطوط النقل الهوائية في مصر", "مهمات خطوط الكهرباء", "جلفنة ساخنة لخطوط النقل", "أعمال مدنية لبنية الكهرباء"] },
    aiQuestions: { en: ["What materials are needed for overhead transmission lines?", "Why does galvanizing matter for line materials?", "How do civil works support transmission-line projects?"], ar: ["ما المواد المطلوبة لخطوط النقل الهوائية؟", "لماذا الجلفنة مهمة لمهمات الخطوط؟", "كيف تدعم الأعمال المدنية مشروعات خطوط النقل؟"] },
    benefits: { en: ["Connects material supply with field execution", "Reduces project delays caused by route and access issues", "Supports infrastructure buyers evaluating line readiness"], ar: ["ربط توريد المواد بالتنفيذ الميداني", "تقليل تأخيرات المشروع بسبب المسار والوصول", "دعم مشتري البنية التحتية في تقييم جاهزية الخط"] },
    sections: {
      en: [
        { heading: "Line materials are part of a field system", body: ["An overhead line needs more than hardware. It needs route preparation, access, foundations, fabrication, galvanizing, lifting coordination, and inspection.", "If one part is late or unsuitable, the whole project slows down."] },
        { heading: "Hardware selection affects installation speed", body: ["Line hardware should match conductor requirements, mechanical loading, span conditions, corrosion exposure, and assembly sequence. A small mismatch can slow installation or create rework at height.", "Buyers should review not only item availability but also how each component fits the route and installation method."] },
        { heading: "Galvanizing and fabrication affect lifecycle", body: ["Hot galvanizing helps protect steel components exposed to harsh outdoor conditions. Fabrication quality affects fit, assembly, and site speed.", "Buyers should ask about both material specification and field usability."] },
        { heading: "Civil access can decide whether materials become infrastructure", body: ["Transmission-line materials cannot install themselves. The route needs access, foundations, equipment movement, lifting points, and coordination with nearby infrastructure.", "That is why line-material supply should be discussed with civil work and site-readiness questions from the beginning."] },
        { heading: "Atta's role in line projects", body: ["Atta's project history around civil works, fabrication, and hot galvanizing supports a practical infrastructure story.", "The value is not only supplying parts, but coordinating the field path around those parts."] },
      ],
      ar: [
        { heading: "مواد الخط جزء من نظام ميداني", body: ["خط النقل الهوائي يحتاج أكثر من مهمات. يحتاج تجهيز مسار، وصول، أساسات، تصنيع، جلفنة، تنسيق رفع، وفحص.", "إذا تأخر جزء أو لم يناسب الموقع، يتباطأ المشروع بالكامل."] },
        { heading: "اختيار المهمات يؤثر على سرعة التركيب", body: ["يجب أن تناسب مهمات الخط نوع الموصل والأحمال الميكانيكية وظروف المسافات والتعرض للتآكل وتسلسل التركيب. عدم التوافق الصغير قد يبطئ التركيب أو يخلق إعادة عمل على ارتفاع.", "يجب أن يراجع المشتري توفر البند وكيفية توافقه مع المسار وطريقة التركيب معا."] },
        { heading: "الجلفنة والتصنيع يؤثران على عمر المشروع", body: ["الجلفنة الساخنة تساعد على حماية المكونات المعدنية المعرضة لظروف خارجية صعبة. جودة التصنيع تؤثر على التركيب وسرعة الموقع.", "يجب أن يسأل المشتري عن المواصفة الفنية وقابلية الاستخدام الميداني معا."] },
        { heading: "الوصول المدني قد يقرر هل تتحول المواد إلى بنية حقيقية", body: ["مواد خطوط النقل لا تركب نفسها. المسار يحتاج وصولا وأساسات وحركة معدات ونقاط رفع وتنسيقا مع البنية المجاورة.", "لذلك يجب مناقشة توريد مواد الخط مع أسئلة الأعمال المدنية وجاهزية الموقع منذ البداية."] },
        { heading: "دور عطا في مشروعات الخطوط", body: ["خبرة عطا في الأعمال المدنية والتصنيع والجلفنة الساخنة تدعم قصة عملية في البنية التحتية.", "القيمة ليست توريد أجزاء فقط، بل تنسيق المسار الميداني حول هذه الأجزاء."] },
      ],
    },
    faqs: {
      en: [{ question: "What affects overhead transmission-line project success?", answer: "Materials, fabrication quality, galvanizing, civil access, foundations, lifting coordination, and site timing all affect success." }, { question: "Why is hot galvanizing important?", answer: "Hot galvanizing protects steel components from outdoor exposure and helps improve lifecycle durability." }, { question: "Can civil works delay power-line projects?", answer: "Yes. Poor access, foundations, or route preparation can delay installation even when materials are ready." }],
      ar: [{ question: "ما الذي يؤثر على نجاح مشروع خط نقل هوائي؟", answer: "المواد وجودة التصنيع والجلفنة والوصول المدني والأساسات وتنسيق الرفع وتوقيت الموقع كلها تؤثر على النجاح." }, { question: "لماذا الجلفنة الساخنة مهمة؟", answer: "الجلفنة الساخنة تحمي المكونات المعدنية من التعرض الخارجي وتساعد على تحسين عمرها التشغيلي." }, { question: "هل الأعمال المدنية تؤخر مشروعات خطوط الكهرباء؟", answer: "نعم. ضعف الوصول أو الأساسات أو تجهيز المسار قد يؤخر التركيب حتى لو كانت المواد جاهزة." }],
    },
  },
  {
    slug: "civil-mechanical-electrical-contracting-industrial-sites",
    image: "/atta/project-mechanical-1.jpg",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-08",
    title: { en: "Civil, Mechanical, and Electrical Contracting: Why Industrial Sites Need Coordinated Execution", ar: "المقاولات المدنية والميكانيكية والكهربائية: لماذا تحتاج المواقع الصناعية إلى تنفيذ منسق؟" },
    description: { en: "Why factories and oil and gas sites in Egypt benefit when civil, mechanical, and electrical teams coordinate scope, access, safety, and timing.", ar: "لماذا تستفيد المصانع ومواقع البترول والغاز في مصر عندما تتنسق الفرق المدنية والميكانيكية والكهربائية في النطاق والوصول والسلامة والتوقيت." },
    category: { en: "Contracting", ar: "المقاولات" },
    productFocus: { en: "Civil works, mechanical execution, electrical works, and site coordination", ar: "أعمال مدنية وتنفيذ ميكانيكي وأعمال كهربائية وتنسيق موقع" },
    summary: { en: "Industrial projects fail when disciplines work as separate islands. Civil access affects mechanical installation. Mechanical loads affect electrical planning. Electrical shutdowns affect the whole site. Coordination turns these moving parts into one delivery path.", ar: "تفشل المشروعات الصناعية عندما تعمل التخصصات كجزر منفصلة. الوصول المدني يؤثر على التركيب الميكانيكي. الأحمال الميكانيكية تؤثر على تخطيط الكهرباء. توقفات الكهرباء تؤثر على الموقع كله. التنسيق يحول هذه الأجزاء إلى مسار تسليم واحد." },
    readingTime: { en: "7 min read", ar: "قراءة ٧ دقائق" },
    keywords: { en: ["industrial contracting Egypt", "civil mechanical electrical works", "oil and gas contracting Egypt", "site coordination contractors"], ar: ["مقاولات صناعية في مصر", "أعمال مدنية وميكانيكية وكهربائية", "مقاولات بترول وغاز في مصر", "تنسيق مواقع صناعية"] },
    aiQuestions: { en: ["Why coordinate civil mechanical and electrical work?", "How does site coordination reduce delays?", "What should industrial buyers ask contractors?"], ar: ["لماذا يجب تنسيق المدني والميكانيكي والكهربائي؟", "كيف يقلل تنسيق الموقع التأخير؟", "ماذا يسأل المشتري الصناعي المقاول؟"] },
    benefits: { en: ["Reduces rework between disciplines", "Improves site access and shutdown planning", "Creates one clearer execution path for industrial buyers"], ar: ["تقليل إعادة العمل بين التخصصات", "تحسين الوصول للموقع وتخطيط التوقفات", "خلق مسار تنفيذ أوضح للمشتري الصناعي"] },
    sections: {
      en: [
        { heading: "Industrial sites are connected systems", body: ["A mechanical task may need civil access and electrical isolation. An electrical upgrade may need civil preparation and mechanical shutdown planning.", "Treating each discipline separately creates gaps."] },
        { heading: "Interface points create most execution risk", body: ["The risky moments are usually where one discipline hands work to another: a foundation that must receive equipment, a cable route that crosses a mechanical area, or a shutdown that affects both electrical and process teams.", "Good contracting identifies these interfaces before field work begins and assigns responsibility clearly."] },
        { heading: "Coordination lowers project risk", body: ["Good coordination clarifies who enters the site, when work happens, what must be isolated, and how safety is protected.", "This reduces downtime, rework, and communication delays."] },
        { heading: "Method statements should explain the site, not only the task", body: ["A useful method statement should describe access, lifting, isolation, permits, safety controls, quality checks, and handover. For industrial buyers, this is often more useful than a generic capability list.", "It shows whether the contractor understands the actual site constraints."] },
        { heading: "Atta's integrated positioning", body: ["Atta's civil, mechanical, and electrical scope makes it easier to discuss industrial work as one site problem.", "That is useful for factories and oil and gas operators that need practical field execution."] },
      ],
      ar: [
        { heading: "المواقع الصناعية أنظمة مترابطة", body: ["مهمة ميكانيكية قد تحتاج وصولا مدنيا وعزلا كهربائيا. وتطوير كهربائي قد يحتاج تجهيزات مدنية وتخطيط توقف ميكانيكي.", "التعامل مع كل تخصص وحده يخلق فجوات."] },
        { heading: "نقاط التداخل تصنع أغلب مخاطر التنفيذ", body: ["أكثر اللحظات خطرا غالبا تكون عند تسليم عمل من تخصص لآخر: أساس يستقبل معدة، مسار كابل يعبر منطقة ميكانيكية، أو توقف يؤثر على الكهرباء والعملية معا.", "المقاولات الجيدة تحدد هذه الواجهات قبل بدء العمل الميداني وتحدد المسؤولية بوضوح."] },
        { heading: "التنسيق يقلل مخاطر المشروع", body: ["التنسيق الجيد يوضح من يدخل الموقع، متى يتم العمل، ما الذي يجب عزله، وكيف تتم حماية السلامة.", "هذا يقلل التوقف وإعادة العمل وتأخير التواصل."] },
        { heading: "طريقة التنفيذ يجب أن تشرح الموقع وليس المهمة فقط", body: ["طريقة التنفيذ المفيدة تصف الوصول والرفع والعزل والتصاريح وضوابط السلامة وفحوصات الجودة والتسليم. بالنسبة للمشتري الصناعي، هذا غالبا أهم من قائمة قدرات عامة.", "هي توضح هل المقاول يفهم قيود الموقع الحقيقية أم لا."] },
        { heading: "تموضع عطا المتكامل", body: ["نطاق عطا المدني والميكانيكي والكهربائي يجعل الحديث عن العمل الصناعي كمشكلة موقع واحدة أسهل.", "هذا مفيد للمصانع ومشغلي البترول والغاز الذين يحتاجون تنفيذا ميدانيا عمليا."] },
      ],
    },
    faqs: {
      en: [{ question: "Why coordinate civil, mechanical, and electrical work?", answer: "Because each discipline affects access, safety, shutdowns, and installation timing. Coordination reduces gaps and rework." }, { question: "What should buyers ask industrial contractors?", answer: "Buyers should ask about scope boundaries, site access, safety method, shutdown needs, schedule, and responsibility for coordination." }, { question: "Does coordination reduce downtime?", answer: "Yes. Better coordination helps plan shutdowns and avoid unexpected conflicts between teams." }],
      ar: [{ question: "لماذا ننسق المدني والميكانيكي والكهربائي؟", answer: "لأن كل تخصص يؤثر على الوصول والسلامة والتوقفات وتوقيت التركيب. التنسيق يقلل الفجوات وإعادة العمل." }, { question: "ماذا يسأل المشتري المقاول الصناعي؟", answer: "يسأل عن حدود النطاق والوصول للموقع وطريقة السلامة واحتياجات التوقف والجدول والمسؤول عن التنسيق." }, { question: "هل التنسيق يقلل توقف الموقع؟", answer: "نعم. التنسيق الأفضل يساعد على تخطيط التوقفات وتجنب تعارض مفاجئ بين الفرق." }],
    },
  },
  {
    slug: "guardx-ai-esp-pump-monitoring",
    image: "/atta/future/guardx-ai.png",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-08",
    title: { en: "GuardX AI for ESP Pump Monitoring: Reading Failure Signals Before Shutdowns", ar: "مراقبة المضخات قبل التوقف مع جارد إكس" },
    description: { en: "A technical guide to GuardX AI for ESP and pump monitoring in Egypt, covering operating signals, abnormal-pattern detection, alerts, and maintenance planning.", ar: "دليل فني عن GuardX AI لمراقبة مضخات ESP في مصر، مع شرح إشارات التشغيل، اكتشاف الأنماط غير الطبيعية، التنبيهات، وتخطيط الصيانة." },
    category: { en: "AI Monitoring", ar: "مراقبة ذكية" },
    productFocus: { en: "GuardX AI ESP monitoring, pump signal visibility, abnormal-pattern detection, oilfield maintenance decisions, and Egypt field operations", ar: "مراقبة المضخات الغاطسة الكهربائية بوساطة جارد إكس، وضوح إشارات المضخة، اكتشاف الأنماط غير الطبيعية، قرارات صيانة الحقول، وتشغيل المواقع في مصر" },
    summary: { en: "GuardX AI is not a generic digital tool. It is positioned around one technical problem: ESP and pump failure visibility. By watching operating signals and surfacing abnormal patterns, GuardX helps field teams in Egypt move from reacting after shutdowns to planning maintenance earlier.", ar: "هذا ليس نظاما رقميا عاما. جارد إكس يدور حول مشكلة فنية محددة: رؤية مؤشرات فشل المضخات الغاطسة الكهربائية. من خلال متابعة إشارات التشغيل وإبراز الأنماط غير الطبيعية، يساعد الفريق في مصر على الانتقال من رد الفعل بعد التوقف إلى تخطيط صيانة مبكر." },
    readingTime: { en: "8 min read", ar: "قراءة ٨ دقائق" },
    keywords: { en: ["GuardX AI", "ESP monitoring Egypt", "pump failure monitoring", "oilfield pump monitoring", "predictive maintenance ESP", "ESP abnormal pattern detection"], ar: ["GuardX AI", "مراقبة مضخات ESP في مصر", "مراقبة فشل المضخات", "مراقبة مضخات الحقول", "صيانة استباقية لمضخات ESP", "اكتشاف الأنماط غير الطبيعية للمضخات"] },
    aiQuestions: { en: ["What does GuardX AI monitor in an ESP system?", "How can ESP monitoring reduce surprise shutdowns?", "Does GuardX AI replace field technicians?"], ar: ["ما الذي يراقبه GuardX AI في نظام ESP؟", "كيف تقلل مراقبة ESP التوقفات المفاجئة؟", "هل يستبدل GuardX AI الفنيين في الموقع؟"] },
    benefits: { en: ["Improves visibility into ESP and pump behavior", "Supports earlier maintenance decisions", "Creates clearer field alerts for oil and gas teams"], ar: ["تحسين رؤية سلوك مضخات ESP", "دعم قرارات صيانة مبكرة", "تقديم تنبيهات أوضح لفرق البترول والغاز"] },
    sections: {
      en: [
        { heading: "GuardX AI is built around ESP failure visibility", body: ["An electrical submersible pump can fail for reasons that start small: unstable operating conditions, changing load behavior, abnormal current patterns, temperature stress, vibration symptoms, or a well condition that pushes the pump outside its expected range.", "GuardX AI is positioned to give field teams a clearer view of these signals before they become a shutdown event. The value is not the word AI by itself. The value is seeing pump behavior early enough to discuss action."] },
        { heading: "The useful data is operational, not decorative", body: ["For ESP monitoring, useful data should describe how the pump is behaving under real field conditions. Teams may need visibility into electrical load trends, start and stop events, temperature movement, pressure context, alarm history, and other telemetry already available from the site.", "A GuardX AI pilot should begin by mapping which signals exist, where they are captured, how often they update, and which signals are trusted. Without clean operating context, any monitoring system becomes a dashboard with weak decisions behind it."] },
        { heading: "Abnormal-pattern detection needs field context", body: ["Abnormal-pattern detection should not be treated as magic. A pattern only matters when it is compared with the pump's expected operating envelope, the well condition, the duty cycle, the maintenance history, and the actual consequences of a failure.", "For Egypt oilfield and industrial pump teams, this means GuardX should help separate noise from useful warnings. A small signal change may be normal after a process change, while the same change may be important after repeated trips or rising temperature stress."] },
        { heading: "Alerts should support maintenance planning, not only alarms", body: ["A strong monitoring workflow does more than show a red warning. It helps teams decide whether to inspect, reduce load, schedule a maintenance window, prepare spares, or escalate the issue before the site loses production time.", "GuardX AI should therefore be discussed as a maintenance decision-support system. The practical buyer question is not only whether it can detect a risk. The buyer should ask how alerts are ranked, who receives them, and what action each alert is supposed to trigger."] },
        { heading: "What buyers should define before piloting GuardX AI", body: ["Before a pilot, the buyer should define the pump type, telemetry source, communication method, operating limits, alert owners, dashboard users, enclosure needs, commissioning steps, and success criteria. These details decide whether the system can become useful in the field.", "For Atta conversations in Egypt, GuardX AI fits best when the customer has a clear ESP or pump reliability problem and wants better visibility, earlier warnings, and a more disciplined way to plan maintenance before failures become expensive shutdowns."] },
      ],
      ar: [
        { heading: "GuardX AI مبني حول رؤية فشل مضخات ESP", body: ["مضخة ESP قد تفشل بسبب أمور تبدأ صغيرة: ظروف تشغيل غير مستقرة، تغير في سلوك الحمل، أنماط تيار غير طبيعية، إجهاد حراري، مؤشرات اهتزاز، أو حالة بئر تجعل المضخة تعمل خارج النطاق المتوقع.", "GuardX AI هدفه أن يعطي فرق الحقول رؤية أوضح لهذه الإشارات قبل أن تتحول إلى توقف. القيمة ليست في كلمة ذكاء اصطناعي وحدها. القيمة في رؤية سلوك المضخة مبكرا بما يكفي لمناقشة قرار صيانة."] },
        { heading: "البيانات المفيدة تشغيلية وليست شكلية", body: ["في مراقبة ESP، البيانات المفيدة هي التي تصف سلوك المضخة في ظروف الموقع الحقيقية. قد يحتاج الفريق إلى رؤية اتجاهات الحمل الكهربائي، مرات التشغيل والإيقاف، تغير الحرارة، سياق الضغط، سجل الإنذارات، وبيانات أخرى متاحة من الموقع.", "أي تجربة GuardX AI يجب أن تبدأ بتحديد ما هي الإشارات الموجودة، أين يتم قياسها، كم مرة يتم تحديثها، وما هي الإشارات الموثوق بها. بدون سياق تشغيلي نظيف، يتحول النظام إلى شاشة جميلة بقرارات ضعيفة."] },
        { heading: "اكتشاف الأنماط غير الطبيعية يحتاج سياق الحقل", body: ["اكتشاف الأنماط غير الطبيعية لا يجب التعامل معه كأنه سحر. النمط يصبح مهما فقط عندما نقارنه بنطاق تشغيل المضخة المتوقع، حالة البئر، دورة التشغيل، تاريخ الصيانة، والنتيجة الفعلية للفشل.", "بالنسبة لفرق البترول والمضخات الصناعية في مصر، هذا يعني أن GuardX يجب أن يساعد على فصل الضوضاء عن التحذير المفيد. تغير بسيط قد يكون طبيعيا بعد تعديل في العملية، وقد يكون مهما جدا إذا جاء بعد تكرار توقفات أو ارتفاع إجهاد حراري."] },
        { heading: "التنبيهات يجب أن تدعم تخطيط الصيانة وليس الإنذار فقط", body: ["نظام المراقبة القوي لا يعرض تحذيرا أحمر فقط. هو يساعد الفريق على تحديد هل نحتاج فحصا، تقليل حمل، تجهيز نافذة صيانة، تحضير قطع غيار، أو تصعيد المشكلة قبل خسارة وقت إنتاج.", "لذلك يجب النظر إلى GuardX AI كنظام يدعم قرار الصيانة. سؤال المشتري العملي ليس هل يكتشف خطرا فقط، بل كيف يتم ترتيب التنبيهات، من يستقبلها، وما الإجراء المتوقع من كل تنبيه."] },
        { heading: "ما الذي يجب تحديده قبل تجربة GuardX AI؟", body: ["قبل التجربة، يجب تحديد نوع المضخة، مصدر البيانات، طريقة الاتصال، حدود التشغيل، المسؤول عن التنبيه، مستخدمي لوحة المتابعة، متطلبات الحاوية، خطوات التشغيل الأولي، ومعايير نجاح التجربة. هذه التفاصيل تحدد هل يصبح النظام مفيدا في الموقع أم لا.", "في محادثات عطا داخل مصر، يناسب GuardX AI العملاء الذين لديهم مشكلة اعتمادية واضحة في مضخات ESP أو المضخات الصناعية ويريدون رؤية أفضل، تحذيرات مبكرة، وطريقة أكثر انضباطا لتخطيط الصيانة قبل أن يتحول العطل إلى توقف مكلف."] },
      ],
    },
    faqs: {
      en: [{ question: "What is GuardX AI for ESP monitoring?", answer: "GuardX AI is a future-facing monitoring system for ESP and pump failure visibility. It watches operating signals, highlights abnormal patterns, and supports earlier maintenance decisions." }, { question: "How can ESP monitoring reduce downtime?", answer: "ESP monitoring can reduce surprise downtime by showing risky signal changes before a full shutdown. Teams can inspect, plan spares, and schedule maintenance earlier." }, { question: "What signals matter for pump monitoring?", answer: "Useful signals can include load behavior, temperature movement, pressure context, trips, starts, stops, alarm history, and site telemetry that explains how the pump is operating." }, { question: "Does GuardX AI replace field technicians?", answer: "No. GuardX AI should support field technicians by making signals clearer and alerts easier to prioritize. Final decisions still need engineering and site judgment." }],
      ar: [{ question: "ما هو GuardX AI لمراقبة ESP؟", answer: "GuardX AI هو نظام مستقبلي لمراقبة مؤشرات فشل مضخات ESP والمضخات. يتابع إشارات التشغيل، يبرز الأنماط غير الطبيعية، ويدعم قرارات صيانة مبكرة." }, { question: "كيف تقلل مراقبة ESP التوقف؟", answer: "مراقبة ESP تساعد على تقليل التوقف المفاجئ لأنها تظهر تغيرات خطرة في الإشارات قبل التوقف الكامل. يمكن للفريق الفحص وتجهيز قطع الغيار وتخطيط الصيانة مبكرا." }, { question: "ما الإشارات المهمة في مراقبة المضخات؟", answer: "الإشارات المفيدة قد تشمل سلوك الحمل، تغير الحرارة، سياق الضغط، مرات الفصل، التشغيل والإيقاف، سجل الإنذارات، وبيانات الموقع التي تشرح كيف تعمل المضخة." }, { question: "هل يستبدل GuardX AI الفنيين؟", answer: "لا. GuardX AI يجب أن يدعم الفنيين من خلال توضيح الإشارات وترتيب التنبيهات. القرار النهائي ما زال يحتاج خبرة هندسية وحكم موقع." }],
    },
  },
  {
    slug: "oil-gas-site-support-contractors-egypt",
    image: "/atta/project-welding.jpg",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-08",
    title: { en: "Oil and Gas Site Support in Egypt: How Operators Evaluate Contractors and Supply Partners", ar: "دعم مواقع البترول والغاز في مصر: كيف يقيّم المشغلون المقاولين وشركاء التوريد؟" },
    description: { en: "How oil and gas operators evaluate site readiness, safety, maintenance, mechanical work, civil work, and technical supply partners.", ar: "كيف يقيّم مشغلو البترول والغاز جاهزية الموقع والسلامة والصيانة والأعمال الميكانيكية والمدنية وشركاء التوريد الفني." },
    category: { en: "Oil and Gas", ar: "البترول والغاز" },
    productFocus: { en: "Oil and gas contracting, maintenance, welding, civil works, mechanical support, and supply readiness", ar: "مقاولات بترول وغاز وصيانة ولحام وأعمال مدنية ودعم ميكانيكي وجاهزية توريد" },
    summary: { en: "Oil and gas sites need partners who can work under safety rules, access limits, schedule pressure, and technical scrutiny. The right contractor understands both the equipment and the site environment.", ar: "مواقع البترول والغاز تحتاج شركاء يستطيعون العمل تحت قواعد السلامة وقيود الوصول وضغط الجداول والمراجعة الفنية. المقاول المناسب يفهم المعدة وبيئة الموقع معا." },
    readingTime: { en: "7 min read", ar: "قراءة ٧ دقائق" },
    keywords: { en: ["oil and gas contractors Egypt", "petroleum site support Egypt", "mechanical maintenance oil gas", "pipeline welding contractor Egypt"], ar: ["مقاولي بترول وغاز في مصر", "دعم مواقع البترول في مصر", "صيانة ميكانيكية بترول وغاز", "مقاول لحام خطوط في مصر"] },
    aiQuestions: { en: ["What do oil and gas operators look for in contractors?", "Why is site readiness important?", "How does maintenance support oil and gas reliability?"], ar: ["ماذا يبحث مشغلو البترول والغاز في المقاولين؟", "لماذا جاهزية الموقع مهمة؟", "كيف تدعم الصيانة اعتمادية مواقع البترول؟"] },
    benefits: { en: ["Frames contractor evaluation around safety and readiness", "Connects supply with field execution", "Supports oil and gas maintenance planning"], ar: ["تقييم المقاول حول السلامة والجاهزية", "ربط التوريد بالتنفيذ الميداني", "دعم تخطيط صيانة البترول والغاز"] },
    sections: {
      en: [
        { heading: "Oil and gas work is site-sensitive", body: ["A petroleum site is not a normal workshop. Access, permits, safety rules, shutdown windows, and documentation all shape the work.", "Contractors must be ready for the environment, not only the task."] },
        { heading: "Permit and isolation planning affect technical readiness", body: ["Before work starts, the operator needs to know what must be isolated, who approves entry, which tools and equipment are allowed, and how the work area will be controlled.", "A contractor that cannot discuss permits, isolation, and job sequence is not ready for serious petroleum-site execution."] },
        { heading: "Evaluation goes beyond capability lists", body: ["Operators should review safety approach, similar work, field team readiness, equipment, communication, and ability to coordinate around shutdowns.", "A strong partner can explain how the work will happen safely."] },
        { heading: "Supply readiness matters during maintenance windows", body: ["A shutdown window can be wasted if welding consumables, mechanical spares, electrical materials, lifting support, or inspection resources are late. Site support must connect procurement timing with execution timing.", "This is where a technical supply partner becomes more valuable than a simple vendor."] },
        { heading: "Atta's site-support relevance", body: ["Atta's portfolio includes civil, mechanical, welding, calibration, and site support signals that matter in petroleum environments.", "This makes the company easier to position for practical oil and gas support conversations."] },
      ],
      ar: [
        { heading: "عمل البترول والغاز حساس للموقع", body: ["موقع البترول ليس ورشة عادية. الوصول والتصاريح وقواعد السلامة ونوافذ التوقف والمستندات كلها تشكل العمل.", "يجب أن يكون المقاول جاهزا للبيئة وليس للمهمة فقط."] },
        { heading: "تخطيط التصاريح والعزل يؤثر على الجاهزية الفنية", body: ["قبل بدء العمل يجب أن يعرف المشغل ما الذي سيتم عزله، من يوافق على الدخول، ما الأدوات والمعدات المسموحة، وكيف سيتم التحكم في منطقة العمل.", "المقاول الذي لا يستطيع مناقشة التصاريح والعزل وتسلسل العمل ليس جاهزا لتنفيذ جاد في موقع بترولي."] },
        { heading: "التقييم يتجاوز قائمة القدرات", body: ["يجب أن يراجع المشغل أسلوب السلامة والأعمال المشابهة وجاهزية الفريق والمعدات والتواصل والقدرة على التنسيق حول التوقفات.", "الشريك القوي يستطيع شرح كيف سيتم العمل بأمان."] },
        { heading: "جاهزية التوريد مهمة أثناء نوافذ الصيانة", body: ["قد تضيع نافذة توقف كاملة إذا تأخرت مستهلكات اللحام أو قطع الغيار الميكانيكية أو المواد الكهربائية أو دعم الرفع أو موارد الفحص. دعم الموقع يجب أن يربط توقيت المشتريات بتوقيت التنفيذ.", "هنا يصبح شريك التوريد الفني أكثر قيمة من مجرد بائع."] },
        { heading: "صلة عطا بدعم المواقع", body: ["محفظة عطا تشمل إشارات في المدني والميكانيكي واللحام والمعايرة ودعم المواقع، وهي أمور مهمة في بيئات البترول.", "هذا يسهل تموضع الشركة في محادثات دعم البترول والغاز العملية."] },
      ],
    },
    faqs: {
      en: [{ question: "What do oil and gas operators look for in contractors?", answer: "They look for safety awareness, site readiness, relevant experience, coordination ability, documentation, and reliable field execution." }, { question: "Why is site support important in petroleum work?", answer: "Site support keeps access, maintenance, repairs, and coordination moving under strict safety and schedule conditions." }, { question: "Can technical supply affect oil and gas downtime?", answer: "Yes. Late or mismatched supply can delay repairs, shutdown work, and production readiness." }],
      ar: [{ question: "ماذا يبحث مشغلو البترول والغاز في المقاولين؟", answer: "يبحثون عن وعي بالسلامة وجاهزية موقع وخبرة مشابهة وقدرة تنسيق ومستندات وتنفيذ ميداني موثوق." }, { question: "لماذا دعم الموقع مهم في أعمال البترول؟", answer: "دعم الموقع يحافظ على الوصول والصيانة والإصلاح والتنسيق تحت شروط سلامة وجدول صارمة." }, { question: "هل يؤثر التوريد الفني على توقف مواقع البترول؟", answer: "نعم. التوريد المتأخر أو غير المناسب قد يؤخر الإصلاحات وأعمال التوقف وجاهزية الإنتاج." }],
    },
  },
  {
    slug: "nexus-n-micro-reactor-power-critical-sites",
    image: "/atta/future/nexus-n-micro-reactor.png",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-08",
    title: { en: "Nexus-N Micro-Reactor Power: Heat-Pipe Baseload Energy for Critical Sites", ar: "طاقة حمل أساسي للمواقع الحرجة مع نيكسس إن" },
    description: { en: "A careful technical guide to Nexus-N, Atta's future micro-reactor power concept for compact baseload energy, remote infrastructure, and critical industrial sites.", ar: "دليل فني دقيق عن Nexus-N، مفهوم عطا المستقبلي للطاقة المدمجة بالحمل الأساسي للمواقع الصناعية الحرجة والبنية التحتية البعيدة." },
    category: { en: "Future Power", ar: "طاقة مستقبلية" },
    productFocus: { en: "Nexus-N micro-reactor power, heat-pipe micro-reactor architecture, compact baseload energy, long-duration operation, and critical-site planning", ar: "طاقة ميكروية بوساطة نيكسس إن، بنية مفاعل صغير بأنابيب حرارية، طاقة حمل أساسي مدمجة، تشغيل طويل المدى، وتخطيط طاقة المواقع الحرجة" },
    summary: { en: "Nexus-N should be read as a future power concept, not a normal generator listing. Its technical story is heat-pipe micro-reactor architecture: compact baseload energy for critical or remote industrial sites that need stable output for long periods, subject to specialist engineering and regulatory approval.", ar: "يجب التعامل مع نيكسس إن كمفهوم طاقة مستقبلي وليس كمولد عادي. قصته الفنية هي بنية مفاعل صغير بأنابيب حرارية: طاقة حمل أساسي مدمجة للمواقع الصناعية الحرجة أو البعيدة التي تحتاج خرجا مستقرا لفترات طويلة، مع الالتزام بالهندسة المتخصصة والموافقات الرقابية." },
    readingTime: { en: "9 min read", ar: "قراءة ٩ دقائق" },
    keywords: { en: ["Nexus-N", "micro reactor power", "heat pipe micro reactor", "baseload power critical sites", "remote industrial power", "compact long duration energy"], ar: ["Nexus-N", "طاقة مفاعل ميكروي", "Heat Pipe Micro Reactor", "طاقة حمل أساسي للمواقع الحرجة", "طاقة صناعية للمواقع البعيدة", "طاقة مدمجة طويلة المدى"] },
    aiQuestions: { en: ["What is Nexus-N Micro-Reactor Power?", "How does heat-pipe micro-reactor architecture support baseload energy?", "Is Nexus-N a replacement for normal backup generators?"], ar: ["ما هو Nexus-N Micro-Reactor Power؟", "كيف تدعم بنية Heat-Pipe Micro-Reactor طاقة الحمل الأساسي؟", "هل Nexus-N بديل مباشر للمولدات الاحتياطية؟"] },
    benefits: { en: ["Explains Nexus-N as a future power concept", "Connects heat-pipe architecture to baseload planning", "Keeps regulatory and safety limits clear"], ar: ["شرح Nexus-N كمفهوم طاقة مستقبلي", "ربط بنية Heat-Pipe بتخطيط الحمل الأساسي", "توضيح حدود السلامة والتراخيص"] },
    sections: {
      en: [
        { heading: "Nexus-N is about baseload, not short backup", body: ["A backup generator is usually discussed as a temporary source that starts when the main supply fails. A baseload power concept is different. It is planned around stable output over long periods for sites where interruption is expensive or hard to manage.", "Nexus-N is positioned in that baseload conversation. For critical industrial sites, remote infrastructure, and energy-intensive operations, the question is not only how to survive a short outage. The question is how to plan dependable power when conventional supply paths are weak, costly, or logistically difficult."] },
        { heading: "Heat-pipe micro-reactor architecture changes the thermal discussion", body: ["The technical idea behind Nexus-N is a heat-pipe micro-reactor architecture. In this type of concept, heat-pipe behavior is used to move thermal energy from the reactor core toward a power conversion system with fewer active moving parts than many traditional heat-transfer arrangements.", "For buyers, the important point is not to treat this as a simple product claim. The architecture affects safety case design, thermal management, power conversion, maintenance philosophy, licensing review, and specialist execution requirements."] },
        { heading: "Compact energy matters most at constrained or remote sites", body: ["Remote industrial sites, critical utilities, mining-style infrastructure, petroleum support zones, and isolated facilities may face land, fuel logistics, grid reliability, and continuity constraints. Compact long-duration energy becomes attractive when normal backup planning cannot carry the full operating need.", "Nexus-N fits the future-planning layer of these conversations. It should be evaluated against site load profile, criticality, distance from reliable grid infrastructure, emergency planning, security, cooling needs, and the cost of prolonged interruption."] },
        { heading: "Safety, licensing, and integration are the real buyer questions", body: ["Any nuclear-related power concept must stay inside regulatory, safety, licensing, and authorized specialist boundaries. That means buyers should ask about approval pathway, safety case, technology maturity, fuel pathway, site qualification, emergency planning, and who is legally allowed to design, install, operate, or maintain the system.", "This caution is part of the technical value. A serious Nexus-N discussion should not sound like a quick equipment quote. It should sound like early-stage critical infrastructure planning with strict engineering and regulatory gates."] },
        { heading: "How Nexus-N fits Atta's future infrastructure story", body: ["Atta already speaks to industrial buyers about power reliability, electrical infrastructure, site support, and technical procurement. Nexus-N extends that story into future baseload planning for sites where normal supply and backup models may not be enough.", "For SEO and buyer education in Egypt, the article should make one point clearly: Nexus-N is a future-facing concept for compact, long-duration, critical-site energy planning. It is not a casual replacement for transformers, panels, or diesel backup. It belongs in serious feasibility conversations."] },
      ],
      ar: [
        { heading: "Nexus-N يتحدث عن الحمل الأساسي وليس الاحتياطي القصير", body: ["المولد الاحتياطي غالبا يتم التعامل معه كمصدر مؤقت يعمل عند فشل المصدر الرئيسي. طاقة الحمل الأساسي مختلفة. هي تخطيط لخرج مستقر لفترات طويلة في مواقع يكون فيها التوقف مكلفا أو صعب الإدارة.", "Nexus-N يتم وضعه داخل هذا الحديث عن الحمل الأساسي. للمواقع الصناعية الحرجة والبنية التحتية البعيدة والعمليات كثيفة الطاقة، السؤال ليس فقط كيف نتجاوز انقطاعا قصيرا. السؤال هو كيف نخطط لطاقة يمكن الاعتماد عليها عندما تكون مسارات التغذية التقليدية ضعيفة أو مكلفة أو صعبة لوجستيا."] },
        { heading: "بنية Heat-Pipe Micro-Reactor تغير نقاش الحرارة", body: ["الفكرة الفنية وراء Nexus-N هي بنية Heat-Pipe Micro-Reactor. في هذا النوع من المفاهيم، يتم استخدام سلوك أنابيب الحرارة لنقل الطاقة الحرارية من قلب المفاعل إلى نظام تحويل الطاقة مع عدد أقل من الأجزاء النشطة المتحركة مقارنة بكثير من ترتيبات نقل الحرارة التقليدية.", "بالنسبة للمشتري، النقطة المهمة ليست التعامل معها كادعاء منتج بسيط. هذه البنية تؤثر على ملف السلامة، إدارة الحرارة، تحويل الطاقة، فلسفة الصيانة، مراجعة التراخيص، ومتطلبات التنفيذ المتخصص."] },
        { heading: "الطاقة المدمجة مهمة في المواقع المقيدة أو البعيدة", body: ["المواقع الصناعية البعيدة، المرافق الحرجة، البنية التحتية المشابهة للتعدين، مناطق دعم البترول، والمنشآت المعزولة قد تواجه قيودا في المساحة، إمداد الوقود، موثوقية الشبكة، واستمرارية التشغيل. الطاقة المدمجة طويلة المدى تصبح مهمة عندما لا يكفي التخطيط الاحتياطي التقليدي.", "Nexus-N يناسب طبقة التخطيط المستقبلي في هذه المحادثات. يجب تقييمه مقابل ملف الأحمال، درجة أهمية الموقع، البعد عن شبكة موثوقة، تخطيط الطوارئ، الأمن، احتياجات التبريد، وتكلفة التوقف الطويل."] },
        { heading: "السلامة والتراخيص والتكامل هي أسئلة المشتري الحقيقية", body: ["أي مفهوم طاقة مرتبط بالمجال النووي يجب أن يظل داخل حدود الرقابة والسلامة والتراخيص والتنفيذ المتخصص المعتمد. لذلك يجب أن يسأل المشتري عن مسار الموافقات، ملف السلامة، نضج التقنية، مسار الوقود، تأهيل الموقع، تخطيط الطوارئ، ومن يحق له قانونيا التصميم أو التركيب أو التشغيل أو الصيانة.", "هذا التحفظ جزء من القيمة الفنية. الحديث الجاد عن Nexus-N لا يجب أن يبدو كعرض سعر سريع لمعدة. يجب أن يبدو كتخطيط مبكر لبنية تحتية حرجة مع بوابات هندسية ورقابية صارمة."] },
        { heading: "كيف يناسب Nexus-N قصة عطا المستقبلية؟", body: ["عطا تتحدث بالفعل مع المشترين الصناعيين عن اعتمادية الطاقة، البنية الكهربائية، دعم المواقع، والتوريد الفني. Nexus-N يمد هذه القصة إلى تخطيط الحمل الأساسي المستقبلي للمواقع التي قد لا تكفيها نماذج التغذية والاحتياطي التقليدية.", "للسيو وتعليم المشترين في مصر، يجب أن تكون الرسالة واضحة: Nexus-N مفهوم مستقبلي لتخطيط طاقة مدمجة طويلة المدى للمواقع الحرجة. ليس بديلا عاديا للمحولات أو اللوحات أو المولدات. مكانه في محادثات جدوى جادة ومنظمة."] },
      ],
    },
    faqs: {
      en: [{ question: "What is Nexus-N Micro-Reactor Power?", answer: "Nexus-N is Atta's future-facing compact micro-reactor power concept for long-duration baseload energy at critical or remote industrial sites." }, { question: "What is heat-pipe micro-reactor architecture?", answer: "It is a reactor concept where heat-pipe behavior helps move thermal energy toward power conversion. The design affects thermal management, safety case, and integration planning." }, { question: "Is Nexus-N available like a normal generator?", answer: "No. Nexus-N should be treated as a future concept that requires specialist engineering, feasibility work, licensing, regulatory approval, and authorized execution." }, { question: "Where could Nexus-N fit in Egypt or regional industry?", answer: "It could fit future planning for critical sites, remote infrastructure, petroleum support zones, and facilities that need stable long-duration power beyond conventional backup models." }],
      ar: [{ question: "ما هو Nexus-N Micro-Reactor Power؟", answer: "Nexus-N هو مفهوم عطا المستقبلي لطاقة مدمجة قائمة على مفاعل ميكروي لتوفير حمل أساسي طويل المدى للمواقع الصناعية الحرجة أو البعيدة." }, { question: "ما هي بنية Heat-Pipe Micro-Reactor؟", answer: "هي فكرة مفاعل تستخدم سلوك أنابيب الحرارة للمساعدة في نقل الطاقة الحرارية نحو نظام تحويل الطاقة. التصميم يؤثر على إدارة الحرارة وملف السلامة وتخطيط التكامل." }, { question: "هل Nexus-N متاح مثل المولد العادي؟", answer: "لا. يجب التعامل مع Nexus-N كمفهوم مستقبلي يحتاج هندسة متخصصة، دراسة جدوى، تراخيص، موافقات رقابية، وتنفيذا معتمدا." }, { question: "أين يمكن أن يناسب Nexus-N في مصر أو المنطقة؟", answer: "قد يناسب التخطيط المستقبلي للمواقع الحرجة، البنية التحتية البعيدة، مناطق دعم البترول، والمنشآت التي تحتاج طاقة مستقرة طويلة المدى تتجاوز نماذج الاحتياطي التقليدية." }],
    },
  },
];

type AttaBlogExpansion = {
  readingTime: Localized<string>;
  sections: Localized<AttaBlogSection[]>;
  faqs: Localized<AttaBlogFaq[]>;
};

const attaBlogRichExpansions: Record<string, AttaBlogExpansion> = {
  "datsan-transformers-egyptian-factories": {
    readingTime: { en: "13 min read", ar: "قراءة ١٣ دقيقة" },
    sections: {
      en: [
        { heading: "How to size the transformer around real factory loads", body: ["Transformer sizing should start with the plant's real load list, not a rough guess. Motors, compressors, welding machines, HVAC, chillers, lighting, packaging lines, and future machines should be separated because they do not behave the same way electrically.", "Egyptian factories should also discuss starting currents, simultaneous operation, duty cycle, expected expansion, and whether sensitive machines need cleaner isolation. A transformer that looks acceptable on total kilowatts can still be weak if the load behavior is ignored."] },
        { heading: "Protection and accessibility decide maintenance quality", body: ["A reliable transformer installation needs more than the transformer nameplate. The buyer should ask how protection, earthing, cable access, ventilation, oil checks, isolation, and inspection space will be handled at the site.", "Good access reduces maintenance hesitation. If technicians cannot reach the unit safely, inspect it easily, or isolate it clearly, small problems are more likely to stay hidden until they affect production."] },
        { heading: "Documents to prepare before requesting a transformer quote", body: ["Before asking for a quote, prepare the load schedule, existing transformer rating, voltage levels, single-line diagram if available, site photos, cable route constraints, expected expansion, and whether the factory needs distribution, CSP, or isolation transformer options.", "This information helps Atta discuss the correct DATSAN transformer path instead of quoting a generic item. It also reduces back-and-forth and helps the buyer compare suppliers on technical fit, not only price."] },
        { heading: "Common transformer selection mistakes in factories", body: ["Common mistakes include sizing only for today's connected load, ignoring motor starting behavior, choosing a transformer without thinking about maintenance access, forgetting future lines, and treating protection as a separate later decision.", "These mistakes usually appear later as overheating, nuisance trips, limited expansion headroom, difficult shutdown planning, or uncertainty when the factory wants to add a new machine."] },
      ],
      ar: [
        { heading: "كيف يتم اختيار قدرة المحول حول أحمال المصنع الحقيقية؟", body: ["اختيار قدرة المحول يجب أن يبدأ من قائمة أحمال المصنع الفعلية وليس من رقم تقريبي. الموتورات والضواغط وماكينات اللحام والتكييفات والتشيلرات والإضاءة وخطوط التعبئة وخطوط التوسع لا تعمل كهربائيا بنفس الطريقة.", "المصانع في مصر يجب أن تناقش تيار بدء التشغيل، وتشغيل الأحمال في نفس الوقت، وطبيعة دورة العمل، وخطط التوسع، وهل توجد معدات حساسة تحتاج عزلا أو تغذية أنظف. قد يبدو المحول مناسبا على الورق، لكنه يكون ضعيفا إذا تم تجاهل سلوك الأحمال."] },
        { heading: "الحماية وسهولة الوصول تحددان جودة الصيانة", body: ["تركيب المحول الموثوق لا يعتمد على لوحة بيانات المحول فقط. يجب أن يسأل المشتري عن الحماية، التأريض، وصول الكابلات، التهوية، فحص الزيت، العزل، ومساحة الفحص حول الموقع.", "سهولة الوصول تجعل الصيانة أكثر واقعية. إذا كان الفني لا يستطيع الوصول للمحول بأمان أو فحصه بسهولة أو عزله بوضوح، فمن المحتمل أن تبقى المشكلات الصغيرة مخفية حتى تؤثر على الإنتاج."] },
        { heading: "مستندات يجب تجهيزها قبل طلب عرض محول", body: ["قبل طلب عرض سعر، جهز جدول الأحمال، قدرة المحول الحالي، مستويات الجهد، مخطط الخط الواحد إن وجد، صور الموقع، قيود مسار الكابلات، خطط التوسع، وهل المطلوب محول توزيع أو CSP أو محول عزل.", "هذه المعلومات تساعد عطا على مناقشة مسار محولات DATSAN الصحيح بدلا من عرض منتج عام. كما تقلل وقت المراجعة وتساعد المشتري على مقارنة الموردين فنيا وليس بالسعر فقط."] },
        { heading: "أخطاء شائعة عند اختيار محولات المصانع", body: ["من الأخطاء الشائعة اختيار القدرة على أحمال اليوم فقط، تجاهل تيار بدء الموتورات، اختيار محول دون التفكير في الوصول للصيانة، نسيان خطوط التوسع، وترك الحماية كقرار منفصل لاحق.", "هذه الأخطاء تظهر لاحقا في صورة سخونة، فصل متكرر، ضعف مساحة التوسع، صعوبة تخطيط التوقفات، أو ارتباك عند إضافة ماكينة جديدة داخل المصنع."] },
      ],
    },
    faqs: {
      en: [
        { question: "What information does Atta need before discussing a DATSAN transformer?", answer: "Atta needs the load schedule, voltage level, current transformer rating, site photos, cable route, expansion plan, and whether the buyer needs distribution, CSP, or isolation transformer options." },
        { question: "Why should transformer selection include future expansion?", answer: "Future expansion affects rating, protection, cable sizing, space, and shutdown planning. Ignoring it can make the factory repeat expensive electrical work later." },
      ],
      ar: [
        { question: "ما المعلومات التي تحتاجها عطا قبل مناقشة محول DATSAN؟", answer: "تحتاج عطا جدول الأحمال، مستوى الجهد، قدرة المحول الحالي، صور الموقع، مسار الكابلات، خطة التوسع، وهل المطلوب محول توزيع أو CSP أو محول عزل." },
        { question: "لماذا يجب إدخال التوسع المستقبلي في اختيار المحول؟", answer: "التوسع يؤثر على القدرة والحماية ومقاطع الكابلات والمساحة وتخطيط التوقف. تجاهله قد يجبر المصنع على إعادة أعمال كهربائية مكلفة لاحقا." },
      ],
    },
  },
  "electrical-panels-industrial-power-safety": {
    readingTime: { en: "13 min read", ar: "قراءة ١٣ دقيقة" },
    sections: {
      en: [
        { heading: "Panel design starts with load behavior", body: ["An electrical panel should be designed around how loads actually operate. A production line with motors, heaters, drives, compressors, and lighting needs different protection thinking from a simple distribution board.", "Before selecting a panel, buyers should clarify current ratings, diversity, starting conditions, fault levels, control needs, metering, cable entry, spare feeders, and whether the panel must support future process changes."] },
        { heading: "Protection coordination prevents small faults from becoming plant shutdowns", body: ["Protection devices should be coordinated so the nearest suitable device clears the fault instead of taking down a larger part of the factory. This is one reason panel design cannot be reduced to a cabinet and breakers.", "Coordination affects uptime, safety, troubleshooting speed, and the maintenance team's ability to isolate one area without disturbing unrelated production lines."] },
        { heading: "Internal layout affects heat, service, and safety", body: ["A neat internal layout is not only cosmetic. Busbar arrangement, cable bending space, gland plate position, segregation, ventilation, labeling, and access all affect how safely the panel can be installed and maintained.", "Poor layout can create heat concentration, difficult terminations, unclear isolation, and longer repair times. These are technical risks even when the panel looks acceptable from the outside."] },
        { heading: "What to ask before approving a panel offer", body: ["Before approving a panel offer, ask for the scope, standards basis, breaker details, busbar rating, enclosure rating, metering, control components, drawings, cable entry direction, spare ways, testing method, and delivery assumptions.", "This helps procurement compare technical quality. A lower price may exclude details that later become site delays, rework, or weak maintainability."] },
      ],
      ar: [
        { heading: "تصميم اللوحة يبدأ من سلوك الأحمال", body: ["اللوحة الكهربائية يجب أن تصمم حول طريقة عمل الأحمال فعليا. خط إنتاج فيه موتورات وسخانات ودرايفات وضواغط وإضاءة يحتاج تفكير حماية مختلف عن لوحة توزيع بسيطة.", "قبل اختيار اللوحة، يجب توضيح التيارات، معامل التشغيل، ظروف بدء التشغيل، مستوى القصر، احتياجات التحكم، القياس، دخول الكابلات، المخارج الاحتياطية، وهل اللوحة ستدعم تغييرات مستقبلية في العملية."] },
        { heading: "تنسيق الحماية يمنع العطل الصغير من إيقاف المصنع", body: ["أجهزة الحماية يجب أن تكون منسقة بحيث يفصل الجهاز الأقرب للعطل بدلا من إيقاف جزء كبير من المصنع. لهذا لا يمكن اختصار تصميم اللوحة في صندوق وقواطع.", "تنسيق الحماية يؤثر على استمرار التشغيل، السلامة، سرعة اكتشاف العطل، وقدرة فريق الصيانة على عزل منطقة واحدة دون التأثير على خطوط إنتاج أخرى."] },
        { heading: "التوزيع الداخلي يؤثر على الحرارة والخدمة والسلامة", body: ["ترتيب اللوحة من الداخل ليس شكلا فقط. ترتيب البارات، مساحة ثني الكابلات، مكان دخول الكابلات، الفصل الداخلي، التهوية، الترقيم، وسهولة الوصول كلها تؤثر على سلامة التركيب والصيانة.", "التوزيع الضعيف قد يسبب تركيز حرارة، صعوبة في التوصيلات، عزل غير واضح، ووقت إصلاح أطول. هذه مخاطر فنية حتى لو كان شكل اللوحة من الخارج مقبولا."] },
        { heading: "ماذا تسأل قبل اعتماد عرض اللوحات؟", body: ["قبل اعتماد عرض اللوحات، اسأل عن حدود النطاق، مرجعية المواصفات، تفاصيل القواطع، قدرة البارات، درجة حماية الحاوية، أجهزة القياس، مكونات التحكم، الرسومات، اتجاه دخول الكابلات، المخارج الاحتياطية، طريقة الاختبار، وافتراضات التسليم.", "هذا يساعد المشتريات على مقارنة الجودة الفنية. السعر الأقل قد يستبعد تفاصيل تتحول لاحقا إلى تأخير في الموقع أو إعادة عمل أو صعوبة صيانة."] },
      ],
    },
    faqs: {
      en: [
        { question: "What makes an industrial electrical panel reliable?", answer: "A reliable panel has correct ratings, coordinated protection, clear layout, proper ventilation, good labeling, safe cable access, test documentation, and enough spare capacity for realistic changes." },
        { question: "Why do panel drawings matter before manufacturing?", answer: "Panel drawings reveal breaker arrangement, cable entry, metering, control logic, spare feeders, and service access. Reviewing them early prevents expensive site corrections." },
      ],
      ar: [
        { question: "ما الذي يجعل اللوحة الكهربائية الصناعية موثوقة؟", answer: "اللوحة الموثوقة لها قدرات صحيحة، حماية منسقة، ترتيب واضح، تهوية مناسبة، ترقيم جيد، وصول آمن للكابلات، مستندات اختبار، وسعة احتياطية للتغييرات الواقعية." },
        { question: "لماذا رسومات اللوحة مهمة قبل التصنيع؟", answer: "الرسومات توضح ترتيب القواطع، دخول الكابلات، القياس، منطق التحكم، المخارج الاحتياطية، وسهولة الخدمة. مراجعتها مبكرا تمنع تعديلات مكلفة في الموقع." },
      ],
    },
  },
  "oxygen-nitrogen-generators-gas-compressors": {
    readingTime: { en: "13 min read", ar: "قراءة ١٣ دقيقة" },
    sections: {
      en: [
        { heading: "Gas systems should be designed around purity and consumption profile", body: ["Oxygen and nitrogen generators are not selected only by name. The buyer should define required purity, flow rate, pressure, operating hours, peak demand, backup need, and whether the process can tolerate short interruptions.", "A mismatch between generator output and the real consumption profile can lead to unstable pressure, poor process quality, or dependence on external cylinders even after investing in on-site generation."] },
        { heading: "Compressors are part of the gas system, not separate accessories", body: ["A compressor affects pressure stability, air quality, energy use, drying, filtration, maintenance load, and downstream equipment health. Treating it as a separate accessory creates weak system design.", "Industrial buyers should ask how the compressor, dryer, filters, receiver, generator, storage, and distribution piping work together under normal and peak operating conditions."] },
        { heading: "Site conditions change the right gas-system choice", body: ["Ambient temperature, dust, ventilation, electrical supply, floor space, maintenance access, and operator skill all influence system selection. A gas package that works in one facility may need changes before it fits another site in Egypt.", "Good planning should include location, air intake quality, drainage, noise, heat rejection, cable routes, pipe routes, and emergency access. These practical details decide whether the system is easy to live with after commissioning."] },
        { heading: "What buyers should prepare before asking for gas-system advice", body: ["Prepare the gas type, required purity, hourly and daily consumption, minimum pressure, current cylinder or bulk-gas cost pattern, process sensitivity, available electrical power, location photos, and maintenance expectations.", "With this information, Atta can discuss whether the buyer needs oxygen generation, nitrogen generation, compression, storage, filtration, or a staged upgrade instead of a one-size package."] },
      ],
      ar: [
        { heading: "أنظمة الغاز تصمم حول النقاوة والاستهلاك", body: ["مولدات الأكسجين والنيتروجين لا يتم اختيارها بالاسم فقط. يجب أن يحدد المشتري النقاوة المطلوبة، معدل التدفق، الضغط، ساعات التشغيل، ذروة الطلب، الحاجة للاحتياطي، وهل العملية تتحمل انقطاعا قصيرا أم لا.", "عدم توافق خرج المولد مع الاستهلاك الحقيقي قد يؤدي إلى ضغط غير مستقر، جودة عملية ضعيفة، أو استمرار الاعتماد على الأسطوانات الخارجية رغم الاستثمار في التوليد داخل الموقع."] },
        { heading: "الضواغط جزء من نظام الغاز وليست ملحقا منفصلا", body: ["الضاغط يؤثر على ثبات الضغط، جودة الهواء، استهلاك الطاقة، التجفيف، الفلترة، حمل الصيانة، وصحة المعدات اللاحقة. التعامل معه كملحق منفصل يضعف تصميم النظام.", "يجب أن يسأل المشتري كيف يعمل الضاغط والمجفف والفلاتر والخزان والمولد والتخزين وشبكة المواسير معا في ظروف التشغيل العادية ووقت ذروة الطلب."] },
        { heading: "ظروف الموقع تغير الاختيار الصحيح", body: ["درجة الحرارة، الأتربة، التهوية، التغذية الكهربائية، مساحة الأرض، سهولة الصيانة، وخبرة المشغل كلها تؤثر على اختيار النظام. حزمة غاز مناسبة في مصنع قد تحتاج تعديلات قبل أن تناسب موقعا آخر في مصر.", "التخطيط الجيد يجب أن يشمل مكان التركيب، جودة سحب الهواء، الصرف، الضوضاء، التخلص من الحرارة، مسارات الكابلات، مسارات المواسير، وسهولة الوصول في الطوارئ."] },
        { heading: "ماذا يجهز المشتري قبل طلب المشورة؟", body: ["جهز نوع الغاز، النقاوة المطلوبة، الاستهلاك بالساعة واليوم، أقل ضغط مسموح، نمط تكلفة الأسطوانات أو الغاز الحالي، حساسية العملية، القدرة الكهربائية المتاحة، صور المكان، وتوقعات الصيانة.", "بهذه المعلومات تستطيع عطا مناقشة هل تحتاج مولد أكسجين أو مولد نيتروجين أو ضغط أو تخزين أو فلترة أو ترقية مرحلية بدلا من عرض حزمة واحدة للجميع."] },
      ],
    },
    faqs: {
      en: [
        { question: "What should a factory know before buying an oxygen or nitrogen generator?", answer: "The factory should know required purity, flow, pressure, operating hours, peak demand, backup needs, site conditions, power availability, and how sensitive the process is to gas interruption." },
        { question: "Why is compressor selection important for nitrogen and oxygen systems?", answer: "The compressor controls the air supply quality and pressure foundation. A weak compressor can reduce system stability, increase maintenance, and limit generator performance." },
      ],
      ar: [
        { question: "ماذا يجب أن يعرف المصنع قبل شراء مولد أكسجين أو نيتروجين؟", answer: "يجب معرفة النقاوة المطلوبة، التدفق، الضغط، ساعات التشغيل، ذروة الطلب، الحاجة للاحتياطي، ظروف الموقع، القدرة الكهربائية، ومدى حساسية العملية لانقطاع الغاز." },
        { question: "لماذا اختيار الضاغط مهم في أنظمة النيتروجين والأكسجين؟", answer: "الضاغط هو أساس جودة الهواء وثبات الضغط. الضاغط الضعيف قد يقلل استقرار النظام، يزيد الصيانة، ويحد من أداء المولد." },
      ],
    },
  },
  "electrical-expansion-planning-egyptian-factories": {
    readingTime: { en: "12 min read", ar: "قراءة ١٢ دقيقة" },
    sections: {
      en: [
        { heading: "Expansion should begin with a new load map", body: ["Before adding a production line, the factory should map every new motor, heater, compressor, control panel, drive, lighting area, and auxiliary load. The map should also show which loads start together and which can be sequenced.", "This turns expansion from a purchase decision into an electrical planning decision. It helps identify whether the existing transformer, panels, cables, and protection can support the new reality."] },
        { heading: "The existing infrastructure may be the real bottleneck", body: ["A new machine may be ready for delivery while the site still lacks transformer capacity, cable routes, spare panel feeders, proper protection, or shutdown time for tie-in work.", "Egyptian factories should inspect the existing system before approving machine delivery dates. Electrical readiness often decides whether expansion starts smoothly or becomes a stressful site correction."] },
        { heading: "Shutdown planning belongs in the expansion plan", body: ["Expansion work often requires isolation, cable pulling, panel modification, transformer inspection, testing, and commissioning. These tasks can interrupt existing production if they are not planned around real operating windows.", "A good expansion plan defines which work can happen live, which work needs shutdown, who approves isolation, and what must be tested before the new line is released to production."] },
        { heading: "What to prepare before discussing expansion with Atta", body: ["Prepare machine datasheets, expected production schedule, current single-line diagram, panel photos, transformer data, cable-route photos, available floor space, and the target commissioning date.", "This allows Atta to discuss the upgrade as a system: transformer capacity, distribution, panels, protection, cable routing, site work, and maintenance access."] },
      ],
      ar: [
        { heading: "التوسع يبدأ بخريطة أحمال جديدة", body: ["قبل إضافة خط إنتاج، يجب أن يرسم المصنع خريطة لكل موتور جديد، سخان، ضاغط، لوحة تحكم، درايف، منطقة إضاءة، وأي حمل مساعد. يجب أيضا توضيح ما هي الأحمال التي تبدأ معا وما الذي يمكن تشغيله بالتتابع.", "بهذا يتحول التوسع من قرار شراء ماكينة إلى قرار تخطيط كهربائي. ويساعد ذلك على معرفة هل المحول واللوحات والكابلات والحماية الحالية تتحمل الوضع الجديد أم لا."] },
        { heading: "البنية الحالية قد تكون عنق الزجاجة الحقيقي", body: ["قد تكون الماكينة الجديدة جاهزة للتوريد بينما الموقع لا يملك سعة محول كافية أو مسارات كابلات أو مخارج احتياطية أو حماية مناسبة أو وقت توقف لأعمال الربط.", "المصانع في مصر يجب أن تفحص النظام الحالي قبل اعتماد مواعيد وصول الماكينات. الجاهزية الكهربائية غالبا تحدد هل يبدأ التوسع بسلاسة أم يتحول إلى تصحيح مرهق داخل الموقع."] },
        { heading: "تخطيط التوقف جزء من خطة التوسع", body: ["أعمال التوسع قد تحتاج عزلا، سحب كابلات، تعديل لوحات، فحص محول، اختبارا، وتشغيلا أوليا. هذه الأعمال قد تعطل الإنتاج القائم إذا لم يتم تخطيطها حول نوافذ التشغيل الحقيقية.", "الخطة الجيدة تحدد ما الذي يمكن عمله أثناء التشغيل، وما الذي يحتاج توقفا، ومن يعتمد العزل، وما الذي يجب اختباره قبل تسليم الخط الجديد للإنتاج."] },
        { heading: "ماذا تجهز قبل مناقشة التوسع مع عطا؟", body: ["جهز داتا شيت الماكينات، جدول الإنتاج المتوقع، مخطط الخط الواحد الحالي، صور اللوحات، بيانات المحول، صور مسارات الكابلات، مساحة الموقع المتاحة، وموعد التشغيل المستهدف.", "هذا يسمح لعطا بمناقشة الترقية كنظام كامل: قدرة المحول، التوزيع، اللوحات، الحماية، مسارات الكابلات، أعمال الموقع، وسهولة الصيانة."] },
      ],
    },
    faqs: {
      en: [
        { question: "When should a factory plan electrical expansion?", answer: "A factory should plan electrical expansion before ordering or installing new production equipment, because transformer capacity, panel space, cable routing, and shutdown windows may control the timeline." },
        { question: "What documents help with electrical expansion planning?", answer: "Machine datasheets, load lists, panel photos, transformer data, cable-route photos, single-line diagrams, and target commissioning dates help engineers plan the upgrade correctly." },
      ],
      ar: [
        { question: "متى يخطط المصنع للتوسع الكهربائي؟", answer: "يجب التخطيط قبل شراء أو تركيب معدات إنتاج جديدة، لأن قدرة المحول ومساحة اللوحات ومسارات الكابلات ونوافذ التوقف قد تتحكم في الجدول كله." },
        { question: "ما المستندات المفيدة في تخطيط التوسع الكهربائي؟", answer: "داتا شيت الماكينات، قائمة الأحمال، صور اللوحات، بيانات المحول، صور مسارات الكابلات، مخطط الخط الواحد، وموعد التشغيل المستهدف تساعد على التخطيط الصحيح." },
      ],
    },
  },
  "preventive-maintenance-industrial-sites-egypt": {
    readingTime: { en: "12 min read", ar: "قراءة ١٢ دقيقة" },
    sections: {
      en: [
        { heading: "Preventive maintenance should be based on asset criticality", body: ["Not every asset deserves the same inspection frequency. A compressor feeding a critical process, a main panel, a transformer, a pump, or a structural support connected to safety should be treated differently from a low-risk auxiliary item.", "A practical maintenance plan ranks assets by production impact, safety impact, repair difficulty, spare availability, and history of defects. This helps the site spend inspection time where it protects uptime most."] },
        { heading: "Small signs usually appear before expensive failures", body: ["Loose terminations, rising heat, vibration changes, oil leakage, unusual noise, weak supports, damaged cable glands, and repeated minor trips are often early warnings. They are easy to ignore when production is busy.", "Preventive maintenance creates a routine for capturing these signs before they become emergency stoppages. The point is not to inspect everything every day; it is to notice the right symptoms early."] },
        { heading: "Maintenance records make future decisions easier", body: ["A maintenance visit should leave behind usable records: what was inspected, what was found, what was corrected, what remains open, which spare parts are needed, and what should be checked next time.", "Without records, every technician starts from zero. With records, the site can see repeated defects, aging equipment, weak suppliers, and assets that need replacement rather than repeated repair."] },
        { heading: "What Atta can review during a maintenance conversation", body: ["Atta can discuss panels, transformers, pumps, compressors, site supports, welding needs, calibration requirements, access constraints, and shutdown planning. The conversation should connect maintenance work with production priorities.", "The best starting point is a list of critical assets, known repeated failures, recent shutdowns, site photos, available maintenance windows, and any inspection reports already available."] },
      ],
      ar: [
        { heading: "الصيانة الوقائية تبدأ من أهمية الأصل", body: ["ليس كل أصل يحتاج نفس تكرار الفحص. الضاغط الذي يخدم عملية حرجة، اللوحة الرئيسية، المحول، المضخة، أو دعامة مرتبطة بالسلامة يجب أن يعاملوا بشكل مختلف عن عنصر مساعد منخفض الخطورة.", "الخطة العملية ترتب الأصول حسب تأثيرها على الإنتاج والسلامة وصعوبة الإصلاح وتوفر قطع الغيار وتاريخ الأعطال. هذا يساعد الموقع على استخدام وقت الفحص في المكان الأكثر حماية للتشغيل."] },
        { heading: "العلامات الصغيرة تظهر قبل الأعطال المكلفة", body: ["التوصيلات المرتخية، ارتفاع الحرارة، تغير الاهتزاز، تسريب الزيت، الصوت غير المعتاد، ضعف الدعامات، تلف جلاندات الكابلات، والفصل المتكرر البسيط كلها قد تكون إنذارات مبكرة. من السهل تجاهلها وقت ضغط الإنتاج.", "الصيانة الوقائية تخلق روتينا لالتقاط هذه العلامات قبل أن تتحول إلى توقف طارئ. الهدف ليس فحص كل شيء كل يوم، بل ملاحظة الأعراض الصحيحة مبكرا."] },
        { heading: "سجلات الصيانة تجعل القرارات أسهل", body: ["زيارة الصيانة يجب أن تترك سجلا مفيدا: ما الذي تم فحصه، ماذا وجد الفريق، ماذا تم إصلاحه، ما الذي بقي مفتوحا، ما قطع الغيار المطلوبة، وما الذي يجب فحصه في المرة القادمة.", "بدون سجلات يبدأ كل فني من الصفر. بالسجلات يستطيع الموقع رؤية الأعطال المتكررة، المعدات التي تقترب من نهاية عمرها، الموردين الضعفاء، والأصول التي تحتاج استبدالا لا إصلاحا متكررا."] },
        { heading: "ما الذي يمكن لعطا مراجعته في محادثة الصيانة؟", body: ["يمكن لعطا مناقشة اللوحات، المحولات، المضخات، الضواغط، دعامات الموقع، احتياجات اللحام، المعايرة، قيود الوصول، وتخطيط التوقف. يجب ربط الصيانة بأولويات الإنتاج.", "أفضل بداية هي قائمة الأصول الحرجة، الأعطال المتكررة المعروفة، التوقفات الأخيرة، صور الموقع، نوافذ الصيانة المتاحة، وأي تقارير فحص موجودة."] },
      ],
    },
    faqs: {
      en: [
        { question: "How often should an industrial site do preventive maintenance?", answer: "Frequency depends on asset criticality, operating hours, environment, failure history, and safety impact. Critical equipment should be reviewed more often than low-risk auxiliary assets." },
        { question: "What should a useful maintenance report include?", answer: "It should include inspected assets, defects found, corrective actions, open risks, spare parts needed, photos where useful, and recommended next inspection priorities." },
      ],
      ar: [
        { question: "كم مرة يحتاج الموقع الصناعي صيانة وقائية؟", answer: "يعتمد التكرار على أهمية الأصل، ساعات التشغيل، بيئة الموقع، تاريخ الأعطال، وتأثير السلامة. المعدات الحرجة تحتاج مراجعة أكثر من الأصول المساعدة منخفضة الخطورة." },
        { question: "ماذا يجب أن يحتوي تقرير الصيانة المفيد؟", answer: "يجب أن يشمل الأصول التي تم فحصها، العيوب الموجودة، الإجراءات التصحيحية، المخاطر المفتوحة، قطع الغيار المطلوبة، الصور عند الحاجة، وأولويات الفحص القادمة." },
      ],
    },
  },
  "overhead-transmission-line-materials-egypt": {
    readingTime: { en: "11 min read", ar: "قراءة ١١ دقيقة" },
    sections: {
      en: [
        { heading: "Transmission-line material quality shows up during installation", body: ["Line hardware, fittings, crossarms, insulators, clamps, bolts, and galvanized steel parts must survive handling, lifting, alignment, and environmental exposure. Weak material does not only create a purchasing issue; it creates a site issue.", "A project team should review drawings, quantities, coating quality, compatibility between parts, and packaging before site mobilization. Missing or mismatched items can hold back a whole construction sequence."] },
        { heading: "Route access affects material planning", body: ["An overhead line route may cross difficult terrain, tight access roads, agricultural areas, utilities, or active industrial zones. These conditions affect delivery timing, storage, lifting equipment, and installation sequence.", "Material planning should therefore include where items will be stored, how they will be protected, how they will reach each tower or pole position, and what happens if weather or access changes the plan."] },
        { heading: "Foundations and hardware must be coordinated", body: ["Civil works and line hardware are connected. Foundation dimensions, anchor bolt positions, tower or pole requirements, and lifting points must match the materials that arrive on site.", "If civil execution and material supply are handled as separate islands, the team may discover conflicts late. Coordination prevents rework and protects the project schedule."] },
        { heading: "What buyers should ask before awarding line-material supply", body: ["Buyers should ask about material specification, drawings, galvanizing, test documentation, delivery batches, packaging, replacement process for damaged items, and coordination with the civil or erection team.", "This makes the supplier conversation more practical. The goal is not only to buy steel and hardware; it is to support the line moving from drawings to energized infrastructure."] },
      ],
      ar: [
        { heading: "جودة مهمات الخط تظهر أثناء التركيب", body: ["المهمات والكروس آرم والعوازل والكلامبات والمسامير والأجزاء المجلفنة يجب أن تتحمل المناولة والرفع والضبط والتعرض للبيئة. المادة الضعيفة لا تصنع مشكلة مشتريات فقط، بل مشكلة موقع.", "يجب أن يراجع فريق المشروع الرسومات والكميات وجودة الجلفنة وتوافق الأجزاء والتغليف قبل التحرك للموقع. أي نقص أو عدم توافق قد يوقف تسلسل تنفيذ كامل."] },
        { heading: "الوصول للمسار يؤثر على تخطيط المواد", body: ["مسار الخط الهوائي قد يمر في أرض صعبة أو طرق ضيقة أو مناطق زراعية أو مرافق قائمة أو مناطق صناعية نشطة. هذه الظروف تؤثر على مواعيد التوريد والتخزين ومعدات الرفع وتسلسل التركيب.", "لذلك يجب أن يشمل تخطيط المواد مكان التخزين، طريقة الحماية، كيفية وصول المهمات لكل برج أو عمود، وماذا يحدث إذا غير الطقس أو الوصول خطة التنفيذ."] },
        { heading: "الأساسات والمهمات يجب أن تكون منسقة", body: ["الأعمال المدنية ومهمات الخط مرتبطة. أبعاد الأساسات، أماكن مسامير التثبيت، متطلبات البرج أو العمود، ونقاط الرفع يجب أن تتطابق مع المواد التي تصل للموقع.", "إذا تم التعامل مع المدني والتوريد كجزأين منفصلين، قد يكتشف الفريق التعارض متأخرا. التنسيق يمنع إعادة العمل ويحمي جدول المشروع."] },
        { heading: "ماذا يسأل المشتري قبل ترسية توريد مهمات الخط؟", body: ["يجب أن يسأل عن المواصفات، الرسومات، الجلفنة، مستندات الاختبار، دفعات التوريد، التغليف، آلية استبدال التالف، والتنسيق مع فريق المدني أو التركيب.", "بهذا تصبح محادثة المورد عملية أكثر. الهدف ليس شراء حديد ومهمات فقط، بل دعم انتقال الخط من الرسومات إلى بنية كهربائية قابلة للتشغيل."] },
      ],
    },
    faqs: {
      en: [
        { question: "Why do overhead-line materials need coordination with civil works?", answer: "Because foundations, anchor bolts, tower geometry, lifting needs, and route access must match the supplied hardware. Poor coordination can delay erection and create rework." },
        { question: "What should buyers check in transmission-line material offers?", answer: "They should check specifications, drawings, galvanizing, compatibility, quantities, packaging, test documents, delivery batches, and support for missing or damaged items." },
      ],
      ar: [
        { question: "لماذا تحتاج مهمات الخط الهوائي تنسيقا مع المدني؟", answer: "لأن الأساسات ومسامير التثبيت وشكل البرج واحتياجات الرفع والوصول للمسار يجب أن تتوافق مع المهمات الموردة. ضعف التنسيق يؤخر التركيب ويصنع إعادة عمل." },
        { question: "ماذا يراجع المشتري في عروض مهمات خطوط النقل؟", answer: "يراجع المواصفات، الرسومات، الجلفنة، توافق الأجزاء، الكميات، التغليف، مستندات الاختبار، دفعات التوريد، ودعم النواقص أو التلفيات." },
      ],
    },
  },
  "civil-mechanical-electrical-contracting-industrial-sites": {
    readingTime: { en: "12 min read", ar: "قراءة ١٢ دقيقة" },
    sections: {
      en: [
        { heading: "Industrial contracting risk lives at discipline interfaces", body: ["Many project delays happen where civil, mechanical, and electrical work meet. A foundation must receive equipment, a cable route must avoid mechanical clashes, and a shutdown must give every team enough time to work safely.", "The contractor should identify these interfaces before mobilization. Interface clarity is often more valuable than a long capability list because it shows how the site will actually be executed."] },
        { heading: "Method statements should match the real site", body: ["A useful method statement explains access, lifting, isolation, permits, tools, manpower, sequence, inspection points, and handover. Generic method statements do not help industrial buyers manage risk.", "For factories and oil and gas sites in Egypt, site-specific planning is especially important because production areas, safety rules, and access constraints can change how work must be done."] },
        { heading: "Coordination meetings should produce decisions, not only minutes", body: ["A coordination meeting should settle who owns each interface, when shutdowns happen, what materials must arrive, who approves safety permits, and what happens if one discipline is delayed.", "If meetings only produce notes without decisions, the project still carries the same risk into the field. Good coordination converts uncertainty into assigned actions."] },
        { heading: "What buyers should ask integrated contractors", body: ["Buyers should ask how the contractor manages interfaces, what similar work they have handled, who leads site coordination, how safety permits are controlled, how materials are tracked, and how handover quality is documented.", "These questions help the buyer judge execution readiness. The right contractor can explain the job sequence in plain site language, not only list departments."] },
      ],
      ar: [
        { heading: "مخاطر المقاولات الصناعية تظهر عند حدود التخصصات", body: ["كثير من تأخيرات المشروعات تحدث عند التداخل بين المدني والميكانيكي والكهربائي. أساس يجب أن يستقبل معدة، مسار كابل يجب أن يتجنب تعارضات ميكانيكية، وتوقف يجب أن يعطي كل فريق وقتا كافيا للعمل بأمان.", "يجب أن يحدد المقاول هذه نقاط التداخل قبل التحرك للموقع. وضوح الواجهات غالبا أهم من قائمة قدرات طويلة لأنه يوضح كيف سيتم تنفيذ الموقع فعليا."] },
        { heading: "طريقة التنفيذ يجب أن تطابق الموقع الحقيقي", body: ["طريقة التنفيذ المفيدة تشرح الوصول، الرفع، العزل، التصاريح، الأدوات، العمالة، التسلسل، نقاط الفحص، والتسليم. الطرق العامة لا تساعد المشتري الصناعي على إدارة المخاطر.", "في المصانع ومواقع البترول والغاز في مصر، التخطيط الخاص بالموقع مهم جدا لأن مناطق الإنتاج وقواعد السلامة وقيود الوصول قد تغير طريقة تنفيذ العمل."] },
        { heading: "اجتماعات التنسيق يجب أن تنتج قرارات", body: ["اجتماع التنسيق يجب أن يحسم من يملك كل نقطة تداخل، متى تحدث التوقفات، ما المواد التي يجب أن تصل، من يعتمد تصاريح السلامة، وماذا يحدث إذا تأخر تخصص معين.", "إذا خرجت الاجتماعات بملاحظات فقط دون قرارات، يدخل المشروع الموقع بنفس المخاطر. التنسيق الجيد يحول الغموض إلى إجراءات ومسؤوليات."] },
        { heading: "ماذا يسأل المشتري المقاول المتكامل؟", body: ["اسأل كيف يدير المقاول نقاط التداخل، ما الأعمال المشابهة التي نفذها، من يقود تنسيق الموقع، كيف تتم السيطرة على تصاريح السلامة، كيف يتم تتبع المواد، وكيف يتم توثيق جودة التسليم.", "هذه الأسئلة تساعد المشتري على تقييم جاهزية التنفيذ. المقاول المناسب يستطيع شرح تسلسل العمل بلغة موقع واضحة وليس فقط ذكر أسماء التخصصات."] },
      ],
    },
    faqs: {
      en: [
        { question: "Why do industrial projects need integrated contracting?", answer: "Integrated contracting helps coordinate civil access, mechanical installation, electrical isolation, safety permits, materials, and shutdown timing under one execution plan." },
        { question: "What is an interface risk in industrial contracting?", answer: "An interface risk happens where one discipline depends on another, such as foundations receiving equipment, cables crossing mechanical areas, or shutdowns affecting multiple teams." },
      ],
      ar: [
        { question: "لماذا تحتاج المشروعات الصناعية مقاولات متكاملة؟", answer: "المقاولات المتكاملة تساعد على تنسيق الوصول المدني والتركيب الميكانيكي والعزل الكهربائي وتصاريح السلامة والمواد وتوقيت التوقف داخل خطة تنفيذ واحدة." },
        { question: "ما معنى خطر التداخل في المقاولات الصناعية؟", answer: "هو خطر يظهر عندما يعتمد تخصص على آخر، مثل أساس يستقبل معدة، كابل يعبر منطقة ميكانيكية، أو توقف يؤثر على أكثر من فريق." },
      ],
    },
  },
  "guardx-ai-esp-pump-monitoring": {
    readingTime: { en: "13 min read", ar: "قراءة ١٣ دقيقة" },
    sections: {
      en: [
        { heading: "A GuardX pilot should define the failure modes first", body: ["The best monitoring pilots begin by naming the failures the team wants to see earlier. For ESP and pump systems, this may include repeated trips, abnormal current behavior, temperature drift, pressure mismatch, unstable starts, or symptoms linked to well conditions.", "If failure modes are not defined, the dashboard can collect data without creating useful maintenance decisions. GuardX AI should be configured around the field team's real pain points."] },
        { heading: "Signal quality matters as much as the AI layer", body: ["AI-supported monitoring depends on the quality of the signals feeding it. Bad sensors, missing timestamps, inconsistent telemetry, or unclear operating context can make alerts weak or misleading.", "Before deployment, the buyer should review sensor availability, communication reliability, dashboard users, alert thresholds, historical data, and how field notes will be connected with the signal history."] },
        { heading: "Alerts need ownership and response rules", body: ["A useful alert has an owner, urgency level, expected response, and escalation path. Without those rules, alerts become background noise and the team returns to reactive maintenance.", "For GuardX AI, the site should define who receives warnings, who confirms field conditions, who approves action, and when the issue becomes a planned maintenance job."] },
        { heading: "Maintenance learning should improve over time", body: ["Every confirmed alert should teach the system and the team something: whether the warning was useful, whether the action was correct, what spare parts were needed, and how much warning time the team had.", "This feedback loop is what turns monitoring into a reliability program. The goal is not only detecting one abnormal pattern; it is building a better field decision process."] },
      ],
      ar: [
        { heading: "تجربة جارد إكس يجب أن تبدأ بتحديد أنماط الفشل", body: ["أفضل تجارب المراقبة تبدأ بتسمية الأعطال التي يريد الفريق رؤيتها مبكرا. في أنظمة ESP والمضخات قد يشمل ذلك الفصل المتكرر، سلوك تيار غير طبيعي، تغير الحرارة، عدم توافق الضغط، بدء تشغيل غير مستقر، أو أعراض مرتبطة بحالة البئر.", "إذا لم يتم تحديد أنماط الفشل، قد تجمع لوحة المتابعة بيانات دون أن تصنع قرار صيانة مفيدا. يجب ضبط GuardX AI حول المشكلات الحقيقية لفريق الحقل."] },
        { heading: "جودة الإشارة لا تقل أهمية عن طبقة الذكاء", body: ["المراقبة المدعومة بالذكاء تعتمد على جودة الإشارات الداخلة إليها. الحساسات الضعيفة، التوقيتات المفقودة، البيانات غير المنتظمة، أو السياق التشغيلي غير الواضح قد تجعل التنبيهات ضعيفة أو مضللة.", "قبل النشر، يجب مراجعة الحساسات المتاحة، موثوقية الاتصال، مستخدمي لوحة المتابعة، حدود التنبيه، البيانات التاريخية، وكيف سيتم ربط ملاحظات الفريق بسجل الإشارات."] },
        { heading: "التنبيهات تحتاج مالكا وقواعد استجابة", body: ["التنبيه المفيد له مسؤول، درجة أولوية، استجابة متوقعة، ومسار تصعيد. بدون هذه القواعد تتحول التنبيهات إلى ضوضاء ويرجع الفريق للصيانة برد الفعل.", "في GuardX AI يجب أن يحدد الموقع من يستقبل التحذيرات، من يؤكد حالة الموقع، من يعتمد الإجراء، ومتى تتحول المشكلة إلى أمر صيانة مخطط."] },
        { heading: "تعلم الصيانة يجب أن يتحسن مع الوقت", body: ["كل تنبيه مؤكد يجب أن يعلم النظام والفريق شيئا: هل كان التحذير مفيدا، هل كان الإجراء صحيحا، ما قطع الغيار المطلوبة، وكم وقت إنذار حصل عليه الفريق.", "هذه الحلقة هي ما يحول المراقبة إلى برنامج اعتمادية. الهدف ليس اكتشاف نمط غير طبيعي مرة واحدة فقط، بل بناء طريقة أفضل لاتخاذ القرار في الحقل."] },
      ],
    },
    faqs: {
      en: [
        { question: "What should be defined before a GuardX AI pilot?", answer: "Define the pump type, telemetry sources, failure modes, alert owners, response rules, communication path, dashboard users, and what success means for the field team." },
        { question: "Why can poor telemetry weaken ESP monitoring?", answer: "Poor telemetry can create missing context, delayed alerts, false warnings, or weak decisions. Reliable signal collection is the foundation for useful AI-supported monitoring." },
      ],
      ar: [
        { question: "ما الذي يجب تحديده قبل تجربة GuardX AI؟", answer: "حدد نوع المضخة، مصادر البيانات، أنماط الفشل، مسؤولي التنبيهات، قواعد الاستجابة، مسار الاتصال، مستخدمي لوحة المتابعة، ومعنى نجاح التجربة للفريق." },
        { question: "لماذا تضعف البيانات السيئة مراقبة ESP؟", answer: "البيانات السيئة قد تصنع سياقا ناقصا، تنبيهات متأخرة، تحذيرات خاطئة، أو قرارات ضعيفة. جمع الإشارات الموثوق هو أساس المراقبة المفيدة المدعومة بالذكاء." },
      ],
    },
  },
  "oil-gas-site-support-contractors-egypt": {
    readingTime: { en: "12 min read", ar: "قراءة ١٢ دقيقة" },
    sections: {
      en: [
        { heading: "Oil and gas support starts with permit discipline", body: ["Petroleum-site work is controlled by permits, isolation, gas testing, access rules, and strict communication. A contractor that treats the job like normal workshop work creates risk before tools even reach the site.", "Buyers should ask how the contractor prepares method statements, confirms isolation needs, controls hot work, manages lifting, and communicates with operations during live-site activity."] },
        { heading: "Material readiness protects shutdown windows", body: ["A shutdown window can fail because one gasket, cable, welding consumable, spare, or lifting accessory is missing. Site support should connect procurement timing with the exact execution sequence.", "The contractor should know what must be on site before work starts, what backup items are sensible, and how replacements will be handled if inspection reveals unexpected defects."] },
        { heading: "Field teams need the right supervision structure", body: ["Oil and gas work needs clear supervision: who leads safety, who controls the technical method, who signs quality checks, and who communicates progress or blockers to the operator.", "Without this structure, small issues become delays because nobody knows who is authorized to decide. Good supervision is a technical control, not just administration."] },
        { heading: "How buyers can compare site-support partners", body: ["Compare safety discipline, similar site experience, documentation quality, equipment readiness, response speed, communication, and ability to work around operations without creating unnecessary disruption.", "For Atta, the value is in combining technical supply, field execution awareness, and coordination across civil, mechanical, welding, calibration, and electrical support conversations."] },
      ],
      ar: [
        { heading: "دعم مواقع البترول يبدأ بانضباط التصاريح", body: ["العمل في مواقع البترول تحكمه التصاريح والعزل واختبار الغاز وقواعد الدخول والتواصل الصارم. المقاول الذي يتعامل مع المهمة كأنها ورشة عادية يصنع خطرا قبل أن تصل الأدوات للموقع.", "يجب أن يسأل المشتري كيف يجهز المقاول طريقة التنفيذ، كيف يؤكد احتياجات العزل، كيف يسيطر على الأعمال الساخنة، كيف يدير الرفع، وكيف يتواصل مع التشغيل أثناء العمل داخل موقع نشط."] },
        { heading: "جاهزية المواد تحمي نافذة التوقف", body: ["قد تفشل نافذة توقف كاملة بسبب جوان أو كابل أو مستهلك لحام أو قطعة غيار أو إكسسوار رفع مفقود. دعم الموقع يجب أن يربط توقيت المشتريات بتسلسل التنفيذ الفعلي.", "يجب أن يعرف المقاول ما الذي يجب أن يكون في الموقع قبل بدء العمل، وما العناصر الاحتياطية المنطقية، وكيف سيتم التعامل مع الاستبدالات إذا كشف الفحص عيوبا غير متوقعة."] },
        { heading: "فرق الموقع تحتاج هيكل إشراف واضح", body: ["عمل البترول والغاز يحتاج إشرافا واضحا: من يقود السلامة، من يتحكم في الطريقة الفنية، من يوقع فحوصات الجودة، ومن يرسل التقدم أو المعوقات للمشغل.", "بدون هذا الهيكل تتحول المشكلات الصغيرة إلى تأخير لأن لا أحد يعرف من يملك القرار. الإشراف الجيد عنصر تحكم فني وليس إدارة فقط."] },
        { heading: "كيف يقارن المشتري شركاء دعم الموقع؟", body: ["قارن الانضباط في السلامة، خبرة المواقع المشابهة، جودة المستندات، جاهزية المعدات، سرعة الاستجابة، التواصل، والقدرة على العمل حول التشغيل دون تعطيل غير ضروري.", "بالنسبة لعطا، القيمة في الجمع بين التوريد الفني، فهم التنفيذ الميداني، والتنسيق بين المدني والميكانيكي واللحام والمعايرة والدعم الكهربائي."] },
      ],
    },
    faqs: {
      en: [
        { question: "What makes an oil and gas site-support contractor reliable?", answer: "Reliability comes from permit discipline, safety awareness, similar site experience, clear supervision, material readiness, documentation, and the ability to coordinate around operations." },
        { question: "Why do shutdown windows need procurement planning?", answer: "Shutdown work depends on parts, consumables, tools, lifting support, and inspection resources being ready before isolation starts. Missing items can waste the whole window." },
      ],
      ar: [
        { question: "ما الذي يجعل مقاول دعم مواقع البترول موثوقا؟", answer: "الموثوقية تأتي من انضباط التصاريح، الوعي بالسلامة، خبرة مواقع مشابهة، إشراف واضح، جاهزية المواد، المستندات، والقدرة على التنسيق حول التشغيل." },
        { question: "لماذا تحتاج نوافذ التوقف تخطيط مشتريات؟", answer: "أعمال التوقف تعتمد على جاهزية القطع والمستهلكات والأدوات ودعم الرفع وموارد الفحص قبل بدء العزل. أي نقص قد يهدر النافذة كلها." },
      ],
    },
  },
  "nexus-n-micro-reactor-power-critical-sites": {
    readingTime: { en: "14 min read", ar: "قراءة ١٤ دقيقة" },
    sections: {
      en: [
        { heading: "Nexus-N belongs in feasibility planning, not quick procurement", body: ["A micro-reactor power concept cannot be evaluated like a standard generator or transformer. The first step is feasibility: load profile, site criticality, regulatory path, security, emergency planning, power conversion, cooling, and authorized specialist responsibility.", "This keeps the conversation serious. Nexus-N should help qualified buyers ask better infrastructure questions before anyone discusses procurement or deployment."] },
        { heading: "Heat-pipe concepts are about passive heat movement", body: ["The heat-pipe part of the concept matters because it frames how thermal energy could move from the reactor core toward power conversion. Buyers should understand that this affects engineering, safety analysis, operating philosophy, and maintenance assumptions.", "The right discussion is not a simple promise of compact power. It is a review of how the architecture supports long-duration baseload planning while staying inside strict technical and regulatory gates."] },
        { heading: "Critical-site energy planning should compare alternatives", body: ["Before considering a future concept like Nexus-N, a buyer should compare grid reinforcement, transformers, conventional generation, fuel logistics, renewables with storage, demand management, and operational changes.", "This comparison helps define the real gap. Nexus-N is most relevant where the site needs compact, long-duration, stable output and where traditional backup models do not answer the full continuity problem."] },
        { heading: "What information a serious buyer should prepare", body: ["Prepare the load profile, critical systems list, interruption cost, site location, grid reliability, space limits, security constraints, cooling assumptions, regulatory stakeholders, and current backup strategy.", "This information does not approve a nuclear-related concept by itself. It simply creates the starting point for qualified feasibility discussions with the right engineering and regulatory participants."] },
      ],
      ar: [
        { heading: "نيكسس إن مكانه في دراسة الجدوى وليس الشراء السريع", body: ["مفهوم طاقة مفاعل صغير لا يتم تقييمه مثل مولد أو محول عادي. الخطوة الأولى هي دراسة الجدوى: ملف الأحمال، أهمية الموقع، مسار التراخيص، الأمن، تخطيط الطوارئ، تحويل الطاقة، التبريد، ومسؤولية الجهات المتخصصة المعتمدة.", "هذا يجعل المحادثة جادة. يجب أن يساعد Nexus-N المشترين المؤهلين على طرح أسئلة بنية تحتية أفضل قبل الحديث عن الشراء أو النشر."] },
        { heading: "مفاهيم Heat-Pipe تدور حول نقل الحرارة السلبي", body: ["جزء أنابيب الحرارة مهم لأنه يوضح كيف يمكن نقل الطاقة الحرارية من قلب المفاعل نحو نظام تحويل الطاقة. يجب أن يفهم المشتري أن ذلك يؤثر على الهندسة وتحليل السلامة وفلسفة التشغيل وافتراضات الصيانة.", "النقاش الصحيح ليس وعدا بسيطا بطاقة مدمجة. هو مراجعة لكيفية دعم البنية لتخطيط حمل أساسي طويل المدى مع الالتزام ببوابات فنية ورقابية صارمة."] },
        { heading: "تخطيط طاقة المواقع الحرجة يجب أن يقارن البدائل", body: ["قبل التفكير في مفهوم مستقبلي مثل Nexus-N، يجب مقارنة تقوية الشبكة، المحولات، التوليد التقليدي، لوجستيات الوقود، الطاقة المتجددة مع التخزين، إدارة الطلب، وتغييرات التشغيل.", "هذه المقارنة تحدد الفجوة الحقيقية. يصبح Nexus-N أكثر صلة عندما يحتاج الموقع خرجا مستقرا مدمجا طويل المدى ولا تجيب نماذج الاحتياطي التقليدية على مشكلة الاستمرارية كاملة."] },
        { heading: "ما المعلومات التي يجهزها المشتري الجاد؟", body: ["جهز ملف الأحمال، قائمة الأنظمة الحرجة، تكلفة الانقطاع، موقع المشروع، موثوقية الشبكة، حدود المساحة، قيود الأمن، افتراضات التبريد، الجهات الرقابية، واستراتيجية الاحتياطي الحالية.", "هذه المعلومات لا تعتمد مفهوما مرتبطا بالطاقة النووية وحدها. لكنها تصنع نقطة بداية لمناقشات جدوى مؤهلة مع الجهات الهندسية والرقابية الصحيحة."] },
      ],
    },
    faqs: {
      en: [
        { question: "Should Nexus-N be compared with diesel generators only?", answer: "No. It should be compared within a full critical-site energy plan that includes grid reinforcement, conventional generation, storage, fuel logistics, demand management, and regulatory feasibility." },
        { question: "What is the first step for a Nexus-N discussion?", answer: "The first step is feasibility planning: load profile, site criticality, regulatory path, safety assumptions, security, cooling, and authorized specialist involvement." },
      ],
      ar: [
        { question: "هل يقارن Nexus-N بالمولدات الديزل فقط؟", answer: "لا. يجب مقارنته داخل خطة طاقة كاملة للمواقع الحرجة تشمل تقوية الشبكة، التوليد التقليدي، التخزين، لوجستيات الوقود، إدارة الطلب، والجدوى الرقابية." },
        { question: "ما أول خطوة في مناقشة Nexus-N؟", answer: "أول خطوة هي دراسة الجدوى: ملف الأحمال، أهمية الموقع، مسار التراخيص، افتراضات السلامة، الأمن، التبريد، ومشاركة الجهات المتخصصة المعتمدة." },
      ],
    },
  },
};

export const attaBlogArticles: AttaBlogArticle[] = attaBaseBlogArticles.map((article) => {
  const expansion = attaBlogRichExpansions[article.slug];

  if (!expansion) {
    return article;
  }

  return {
    ...article,
    readingTime: expansion.readingTime,
    sections: {
      en: [...article.sections.en, ...expansion.sections.en],
      ar: [...article.sections.ar, ...expansion.sections.ar],
    },
    faqs: {
      en: [...article.faqs.en, ...expansion.faqs.en],
      ar: [...article.faqs.ar, ...expansion.faqs.ar],
    },
  };
});

export function getAttaBlogArticle(slug: string) {
  return attaBlogArticles.find((article) => article.slug === slug);
}
