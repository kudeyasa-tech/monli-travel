export const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中文" },
  { code: "ms", label: "Melayu", short: "MS" },
] as const;

export type Language = (typeof languages)[number]["code"];

export const DEFAULT_LANGUAGE: Language = "en";
export const STORAGE_KEY = "monlitravel-language";

export function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "zh" || value === "ms";
}

const en = {
  "meta.title": "Monlitravel | Professional Travel Experiences",
  "meta.description":
    "Monlitravel offers curated tours and travel packages worldwide. Book your next journey with a trusted travel company.",

  "nav.home": "Home",
  "nav.destinations": "Destinations",
  "nav.tours": "Tours",
  "nav.about": "About",
  "nav.faq": "FAQ",
  "nav.bookNow": "Book Now",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",
  "nav.switchLanguage": "Switch language",

  "hero.imageAlt":
    "Sunrise over a mountain lake surrounded by pine forest and alpine peaks",
  "hero.title": "Discover the World with Monlitravel",
  "hero.subtitle": "Professional travel experiences tailored just for you.",
  "hero.bookNow": "Book Now",
  "hero.exploreTours": "Explore Tours",

  "destinations.heading": "Family-Friendly Destinations",
  "destinations.subtitle":
    "Create unforgettable memories with our curated family travel packages across Malaysia.",
  "destinations.enquire": "Enquire Now",
  "destinations.enquireAria": "Enquire about {name}",
  "destinations.kl.name": "Kuala Lumpur",
  "destinations.kl.description":
    "Explore the iconic Petronas Twin Towers, visit the Kuala Lumpur Bird Park, and enjoy world-class shopping with the whole family.",
  "destinations.kl.imageAlt":
    "Petronas Twin Towers rising above the Kuala Lumpur skyline at dusk",
  "destinations.cameron.name": "Cameron Highlands",
  "destinations.cameron.description":
    "Escape the city heat. Visit lush tea plantations, pick fresh strawberries, and enjoy cool weather perfect for a family nature retreat.",
  "destinations.cameron.imageAlt":
    "Rolling green tea plantation hills in Cameron Highlands, Malaysia",

  "tours.heading": "Our Fleet",
  "tours.description":
    "Choose from our range of well-maintained vehicles, from a 6-seater MPV for family trips to 44-seater coaches for large groups.",
  "tours.vehicles.alza.name": "Alza",
  "tours.vehicles.alza.seats": "6 Seater",
  "tours.vehicles.alza.description":
    "A practical, fuel-efficient MPV that's ideal for small families, airport transfers and day trips.",
  "tours.vehicles.alphard.name": "Alphard",
  "tours.vehicles.alphard.seats": "7 Seater",
  "tours.vehicles.alphard.description":
    "Premium comfort for VIP transfers, corporate travel and special occasions.",
  "tours.vehicles.van15.name": "Van",
  "tours.vehicles.van15.seats": "15 Seater",
  "tours.vehicles.van15.description":
    "A comfortable choice for medium groups, guided day tours and multi-day trips.",
  "tours.vehicles.van18.name": "Van",
  "tours.vehicles.van18.seats": "18 Seater",
  "tours.vehicles.van18.description":
    "Extra room for larger families and groups travelling with plenty of luggage.",
  "tours.vehicles.bus31.name": "Bus",
  "tours.vehicles.bus31.seats": "31 Seater",
  "tours.vehicles.bus31.description":
    "A spacious coach for corporate outings, school trips and group events.",
  "tours.vehicles.bus44.name": "Bus",
  "tours.vehicles.bus44.seats": "44 Seater",
  "tours.vehicles.bus44.description":
    "Our largest coach, built for big groups and long-distance journeys.",

  "about.heading": "About Monlitravel",
  "about.description":
    "We are a professional travel company dedicated to creating unforgettable family experiences. With years of expertise, we handle every detail so you can focus on making memories.",

  "faq.heading": "Frequently Asked Questions",
  "faq.description":
    "Answers to the questions we hear most often. If yours isn't here, our team is happy to help.",
  "faq.contactUs": "Contact Us",
  "faq.q1.question": "How do I book a tour or vehicle?",
  "faq.q1.answer":
    "Send us your travel dates, group size and destination through the contact form or at monlitravel@hotmail.com. We'll confirm availability and prepare a quote for you.",
  "faq.q2.question": "Can I customise my itinerary?",
  "faq.q2.answer":
    "Yes. Our tours are a starting point — tell us what you'd like to see and how long you'd like to stay, and we'll tailor the route and pace to your group.",
  "faq.q3.question": "Which vehicle is right for my group?",
  "faq.q3.answer":
    "Use our fleet as a guide: 6–7 seaters suit small families, 15–18-seater vans fit medium groups, and 31–44-seater buses are best for large groups. Not sure? Tell us your group size and luggage needs and we'll recommend the right option.",
  "faq.q4.question": "Are your tours suitable for children?",
  "faq.q4.answer":
    "Absolutely. Family travel is at the heart of what we do, and we're happy to suggest itineraries and vehicles that work well for younger travellers.",
  "faq.q5.question": "What is included in a tour package?",
  "faq.q5.answer":
    "Inclusions vary by itinerary because every trip is tailored. Before you confirm, we'll send a clear breakdown of what is covered — such as transport, activities and accommodation — plus anything you need to arrange yourself.",
  "faq.q6.question": "How far in advance should I book?",
  "faq.q6.answer":
    "We recommend booking as early as possible, especially for weekends, school holidays and larger groups. Send us your dates and we'll let you know what's available.",

  "contact.heading": "Get In Touch",
  "contact.description":
    "Ready to plan your next family adventure? Contact our travel experts today.",
  "contact.name": "Name",
  "contact.namePlaceholder": "Your name",
  "contact.email": "Email",
  "contact.message": "Message",
  "contact.messagePlaceholder": "Tell us about your dream trip",
  "contact.send": "Send Message",
  "contact.whatsappNote":
    "This opens WhatsApp with your message ready to send.",
  "contact.whatsappTemplate":
    "Hi Monlitravel, I'd like to enquire about a booking.\n\nName: {name}\nEmail: {email}\nMessage: {message}",

  "footer.description":
    "Monlitravel designs curated tours and travel packages worldwide, so every journey feels effortless.",
  "footer.contact": "Contact",
  "footer.copyright": "© 2026 Monlitravel. All rights reserved.",
  "footer.social.whatsapp": "Monlitravel on WhatsApp",
  "footer.social.facebook": "Monlitravel on Facebook",
  "footer.social.instagram": "Monlitravel on Instagram",

  "whatsapp.message": "Hi Monlitravel, I would like to plan a booking.",
  "whatsapp.ariaLabel":
    "Chat with Monlitravel on WhatsApp to plan a booking",
} satisfies Record<string, string>;

export type TranslationKey = keyof typeof en;

const zh: Record<TranslationKey, string> = {
  "meta.title": "Monlitravel | 专业旅行体验",
  "meta.description":
    "Monlitravel 提供精心策划的全球旅游行程与套餐。立即预订您的下一段旅程。",

  "nav.home": "首页",
  "nav.destinations": "目的地",
  "nav.tours": "旅游行程",
  "nav.about": "关于我们",
  "nav.faq": "常见问题",
  "nav.bookNow": "立即预订",
  "nav.openMenu": "打开菜单",
  "nav.closeMenu": "关闭菜单",
  "nav.switchLanguage": "切换语言",

  "hero.imageAlt": "松林与阿尔卑斯山峰环绕的山间湖泊日出景色",
  "hero.title": "与 Monlitravel 一起探索世界",
  "hero.subtitle": "为您量身打造的专业旅行体验。",
  "hero.bookNow": "立即预订",
  "hero.exploreTours": "浏览行程",

  "destinations.heading": "适合全家的目的地",
  "destinations.subtitle": "在我们精心策划的马来西亚家庭旅游套餐中，创造难忘的回忆。",
  "destinations.enquire": "立即咨询",
  "destinations.enquireAria": "咨询{name}行程",
  "destinations.kl.name": "吉隆坡",
  "destinations.kl.description":
    "探索标志性的双子塔，参观吉隆坡飞禽公园，与全家一起享受世界级的购物体验。",
  "destinations.kl.imageAlt": "黄昏时分吉隆坡天际线上的双子塔",
  "destinations.cameron.name": "金马仑高原",
  "destinations.cameron.description":
    "逃离城市酷热。参观郁郁葱葱的茶园，采摘新鲜草莓，享受凉爽天气，是家庭自然度假的理想之选。",
  "destinations.cameron.imageAlt": "马来西亚金马仑高原连绵的绿色茶园山丘",

  "tours.heading": "我们的车队",
  "tours.description":
    "从适合家庭出游的 6 座 MPV 到适合大型团体的 44 座巴士，从我们维护良好的多种车型中选择。",
  "tours.vehicles.alza.name": "Alza",
  "tours.vehicles.alza.seats": "6 座",
  "tours.vehicles.alza.description":
    "一款实用、省油的 MPV，非常适合小家庭、机场接送和一日游。",
  "tours.vehicles.alphard.name": "Alphard",
  "tours.vehicles.alphard.seats": "7 座",
  "tours.vehicles.alphard.description":
    "为 VIP 接送、商务出行和特殊场合提供尊贵舒适的体验。",
  "tours.vehicles.van15.name": "Van",
  "tours.vehicles.van15.seats": "15 座",
  "tours.vehicles.van15.description": "中型团体、导览一日游和多日行程的舒适之选。",
  "tours.vehicles.van18.name": "Van",
  "tours.vehicles.van18.seats": "18 座",
  "tours.vehicles.van18.description": "为携带大量行李的大家庭和团体提供更多空间。",
  "tours.vehicles.bus31.name": "Bus",
  "tours.vehicles.bus31.seats": "31 座",
  "tours.vehicles.bus31.description": "宽敞的巴士，适合公司出游、学校旅行和团体活动。",
  "tours.vehicles.bus44.name": "Bus",
  "tours.vehicles.bus44.seats": "44 座",
  "tours.vehicles.bus44.description": "我们最大的巴士，专为大型团体和长途旅程打造。",

  "about.heading": "关于 Monlitravel",
  "about.description":
    "我们是一家专业旅游公司，致力于打造难忘的家庭体验。凭借多年经验，我们处理每一个细节，让您专注于创造美好回忆。",

  "faq.heading": "常见问题",
  "faq.description": "以下是我们最常被问到的问题的解答。如果没有您想问的，我们的团队很乐意为您解答。",
  "faq.contactUs": "联系我们",
  "faq.q1.question": "如何预订旅游行程或车辆？",
  "faq.q1.answer":
    "请通过联系表单或发送邮件至 monlitravel@hotmail.com，告知您的出行日期、人数和目的地。我们将确认是否有空位并为您准备报价。",
  "faq.q2.question": "我可以定制行程吗？",
  "faq.q2.answer":
    "可以。我们的行程只是一个起点——告诉我们您想去的景点和停留时间，我们将为您的团队量身调整路线和节奏。",
  "faq.q3.question": "哪种车型适合我的团队？",
  "faq.q3.answer":
    "请参考我们的车队：6–7 座适合小家庭，15–18 座厢式车适合中型团体，31–44 座巴士最适合大型团体。不确定吗？告诉我们您的人数和行李需求，我们会为您推荐合适的选择。",
  "faq.q4.question": "你们的行程适合儿童吗？",
  "faq.q4.answer":
    "当然。家庭旅行是我们的核心，我们很乐意推荐适合年幼旅客的行程和车辆。",
  "faq.q5.question": "旅游套餐包含哪些内容？",
  "faq.q5.answer":
    "由于每次行程都是定制的，包含内容会有所不同。在您确认之前，我们会发送清晰的明细，说明包含的项目——例如交通、活动和住宿——以及您需要自行安排的事项。",
  "faq.q6.question": "我应该提前多久预订？",
  "faq.q6.answer":
    "我们建议尽早预订，尤其是周末、学校假期和大型团体。把日期发给我们，我们会告知可预订情况。",

  "contact.heading": "联系我们",
  "contact.description": "准备好规划下一次家庭冒险了吗？立即联系我们的旅游专家。",
  "contact.name": "姓名",
  "contact.namePlaceholder": "您的姓名",
  "contact.email": "电子邮箱",
  "contact.message": "留言",
  "contact.messagePlaceholder": "告诉我们您梦想中的旅程",
  "contact.send": "发送留言",
  "contact.whatsappNote": "点击后将打开 WhatsApp，您的留言已为您填好。",
  "contact.whatsappTemplate":
    "您好 Monlitravel，我想咨询预订事宜。\n\n姓名：{name}\n电子邮箱：{email}\n留言：{message}",

  "footer.description": "Monlitravel 精心策划全球旅游行程与套餐，让每一段旅程都轻松惬意。",
  "footer.contact": "联系方式",
  "footer.copyright": "© 2026 Monlitravel。保留所有权利。",
  "footer.social.whatsapp": "Monlitravel 的 WhatsApp",
  "footer.social.facebook": "Monlitravel 的 Facebook",
  "footer.social.instagram": "Monlitravel 的 Instagram",

  "whatsapp.message": "您好 Monlitravel，我想咨询预订事宜。",
  "whatsapp.ariaLabel": "通过 WhatsApp 与 Monlitravel 联系以规划预订",
};

const ms: Record<TranslationKey, string> = {
  "meta.title": "Monlitravel | Pengalaman Perjalanan Profesional",
  "meta.description":
    "Monlitravel menawarkan lawatan dan pakej pelancongan yang dikurasi di seluruh dunia. Tempah perjalanan anda seterusnya bersama kami.",

  "nav.home": "Utama",
  "nav.destinations": "Destinasi",
  "nav.tours": "Lawatan",
  "nav.about": "Tentang Kami",
  "nav.faq": "Soalan Lazim",
  "nav.bookNow": "Tempah Sekarang",
  "nav.openMenu": "Buka menu",
  "nav.closeMenu": "Tutup menu",
  "nav.switchLanguage": "Tukar bahasa",

  "hero.imageAlt":
    "Pemandangan matahari terbit di tasik gunung dikelilingi hutan pain dan puncak alpine",
  "hero.title": "Terokai Dunia Bersama Monlitravel",
  "hero.subtitle": "Pengalaman perjalanan profesional yang disesuaikan khas untuk anda.",
  "hero.bookNow": "Tempah Sekarang",
  "hero.exploreTours": "Terokai Lawatan",

  "destinations.heading": "Destinasi Mesra Keluarga",
  "destinations.subtitle":
    "Cipta kenangan yang tidak dapat dilupakan dengan pakej perjalanan keluarga kami yang dikurasi di seluruh Malaysia.",
  "destinations.enquire": "Tanya Sekarang",
  "destinations.enquireAria": "Tanya tentang {name}",
  "destinations.kl.name": "Kuala Lumpur",
  "destinations.kl.description":
    "Terokai Menara Kembar Petronas yang ikonik, lawat Taman Burung Kuala Lumpur, dan nikmati pengalaman membeli-belah bertaraf dunia bersama keluarga.",
  "destinations.kl.imageAlt":
    "Menara Kembar Petronas menjulang di langit Kuala Lumpur pada waktu senja",
  "destinations.cameron.name": "Cameron Highlands",
  "destinations.cameron.description":
    "Lari dari panas bandar. Lawat ladang teh yang subur, petik strawberi segar, dan nikmati cuaca sejuk yang sesuai untuk percutian alam semula jadi bersama keluarga.",
  "destinations.cameron.imageAlt":
    "Bukit ladang teh hijau di Cameron Highlands, Malaysia",

  "tours.heading": "Kenderaan Kami",
  "tours.description":
    "Pilih daripada pelbagai kenderaan kami yang diselenggara dengan baik, dari MPV 6 tempat duduk untuk perjalanan keluarga hingga bas 44 tempat duduk untuk kumpulan besar.",
  "tours.vehicles.alza.name": "Alza",
  "tours.vehicles.alza.seats": "6 Tempat Duduk",
  "tours.vehicles.alza.description":
    "Sebuah MPV yang praktikal dan menjimatkan minyak, sesuai untuk keluarga kecil, pemindahan lapangan terbang dan lawatan sehari.",
  "tours.vehicles.alphard.name": "Alphard",
  "tours.vehicles.alphard.seats": "7 Tempat Duduk",
  "tours.vehicles.alphard.description":
    "Keselesaan premium untuk pemindahan VIP, perjalanan korporat dan majlis khas.",
  "tours.vehicles.van15.name": "Van",
  "tours.vehicles.van15.seats": "15 Tempat Duduk",
  "tours.vehicles.van15.description":
    "Pilihan yang selesa untuk kumpulan sederhana, lawatan sehari berpandu dan perjalanan berbilang hari.",
  "tours.vehicles.van18.name": "Van",
  "tours.vehicles.van18.seats": "18 Tempat Duduk",
  "tours.vehicles.van18.description":
    "Ruang tambahan untuk keluarga dan kumpulan besar yang membawa banyak bagasi.",
  "tours.vehicles.bus31.name": "Bus",
  "tours.vehicles.bus31.seats": "31 Tempat Duduk",
  "tours.vehicles.bus31.description":
    "Bas yang luas untuk lawatan korporat, trip sekolah dan acara kumpulan.",
  "tours.vehicles.bus44.name": "Bus",
  "tours.vehicles.bus44.seats": "44 Tempat Duduk",
  "tours.vehicles.bus44.description":
    "Bas terbesar kami, dibina untuk kumpulan besar dan perjalanan jarak jauh.",

  "about.heading": "Tentang Monlitravel",
  "about.description":
    "Kami adalah syarikat pelancongan profesional yang komited untuk mencipta pengalaman keluarga yang tidak dapat dilupakan. Dengan pengalaman bertahun-tahun, kami mengurus setiap butiran supaya anda dapat menumpukan pada kenangan indah.",

  "faq.heading": "Soalan Lazim",
  "faq.description":
    "Jawapan kepada soalan yang paling kerap kami terima. Jika soalan anda tidak ada di sini, pasukan kami dengan senang hati akan membantu.",
  "faq.contactUs": "Hubungi Kami",
  "faq.q1.question": "Bagaimana saya boleh menempah lawatan atau kenderaan?",
  "faq.q1.answer":
    "Hantar tarikh perjalanan, saiz kumpulan dan destinasi anda melalui borang hubungan atau ke monlitravel@hotmail.com. Kami akan mengesahkan ketersediaan dan menyediakan sebut harga untuk anda.",
  "faq.q2.question": "Bolehkah saya menyesuaikan jadual perjalanan saya?",
  "faq.q2.answer":
    "Boleh. Lawatan kami adalah titik permulaan — beritahu kami apa yang ingin anda lihat dan berapa lama anda ingin tinggal, dan kami akan menyesuaikan laluan serta tempo untuk kumpulan anda.",
  "faq.q3.question": "Kenderaan mana yang sesuai untuk kumpulan saya?",
  "faq.q3.answer":
    "Gunakan kenderaan kami sebagai panduan: 6–7 tempat duduk sesuai untuk keluarga kecil, van 15–18 tempat duduk untuk kumpulan sederhana, dan bas 31–44 tempat duduk paling sesuai untuk kumpulan besar. Tidak pasti? Beritahu kami saiz kumpulan dan keperluan bagasi anda, dan kami akan mengesyorkan pilihan yang tepat.",
  "faq.q4.question": "Adakah lawatan anda sesuai untuk kanak-kanak?",
  "faq.q4.answer":
    "Sudah tentu. Perjalanan keluarga adalah teras apa yang kami lakukan, dan kami dengan senang hati akan mencadangkan jadual perjalanan dan kenderaan yang sesuai untuk pelancong yang lebih muda.",
  "faq.q5.question": "Apakah yang termasuk dalam pakej lawatan?",
  "faq.q5.answer":
    "Kandungan berbeza mengikut jadual perjalanan kerana setiap trip disesuaikan. Sebelum anda mengesahkan, kami akan menghantar senarai jelas tentang apa yang termasuk — seperti pengangkutan, aktiviti dan penginapan — serta perkara yang perlu anda uruskan sendiri.",
  "faq.q6.question": "Berapa awal saya perlu menempah?",
  "faq.q6.answer":
    "Kami mengesyorkan tempahan seawal mungkin, terutamanya untuk hujung minggu, cuti sekolah dan kumpulan besar. Hantar tarikh anda dan kami akan memaklumkan ketersediaan.",

  "contact.heading": "Hubungi Kami",
  "contact.description":
    "Bersedia untuk merancang pengembaraan keluarga anda? Hubungi pakar pelancongan kami hari ini.",
  "contact.name": "Nama",
  "contact.namePlaceholder": "Nama anda",
  "contact.email": "E-mel",
  "contact.message": "Mesej",
  "contact.messagePlaceholder": "Beritahu kami tentang perjalanan impian anda",
  "contact.send": "Hantar Mesej",
  "contact.whatsappNote": "Ini akan membuka WhatsApp dengan mesej anda sedia untuk dihantar.",
  "contact.whatsappTemplate":
    "Hi Monlitravel, saya ingin bertanya tentang tempahan.\n\nNama: {name}\nE-mel: {email}\nMesej: {message}",

  "footer.description":
    "Monlitravel mereka lawatan dan pakej pelancongan di seluruh dunia, supaya setiap perjalanan terasa mudah dan menyenangkan.",
  "footer.contact": "Hubungan",
  "footer.copyright": "© 2026 Monlitravel. Hak cipta terpelihara.",
  "footer.social.whatsapp": "Monlitravel di WhatsApp",
  "footer.social.facebook": "Monlitravel di Facebook",
  "footer.social.instagram": "Monlitravel di Instagram",

  "whatsapp.message": "Hi Monlitravel, saya ingin merancang tempahan.",
  "whatsapp.ariaLabel": "Semak dengan Monlitravel di WhatsApp untuk merancang tempahan",
};

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en,
  zh,
  ms,
};
