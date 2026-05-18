/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Book {
  title: string;
  titleEnglish: string;
  year: string;
  publisher: string;
  publisherEnglish: string;
  genre: string;
  genreEnglish: string;
  description: string;
  descriptionEnglish: string;
  cover?: string;
  color: string;
}

export interface Ghazal {
  id: string;
  title: string;
  titleEnglish: string;
  content: string[][]; // Array of couplets [line1, line2]
  theme: string;
  themeEnglish: string;
  image?: string;
}

export interface Achievement {
  year: string;
  title: string;
  titleEnglish: string;
  icon: string;
}

export const books: Book[] = [
  {
    title: "چار سُو",
    titleEnglish: "Char Su",
    year: "2020",
    publisher: "ملاقات پبلیکیشنز، پشاور",
    publisherEnglish: "Mulaqat Publications, Peshawar",
    genre: "مضامین",
    genreEnglish: "Essays",
    description: "مختلف موضوعات پر مضامین کا مجموعہ",
    descriptionEnglish: "A curated collection of essays and columns on contemporary social and literary topics.",
    cover: "/images/Char Su.jpeg",
    color: "#0F172A"
  },
  {
    title: "شامیں فریب دیتی ہیں",
    titleEnglish: "Shamien Farib Dety Hain",
    year: "2010",
    publisher: "ملاقات پبلیکیشنز",
    publisherEnglish: "Mulaqat Publications",
    genre: "شاعری",
    genreEnglish: "Poetry",
    description: "غزل اور نظم کا شعری مجموعہ",
    descriptionEnglish: "A beautiful collection of Urdu Ghazals and Poems reflecting human emotions.",
    cover: "/images/Shamien Farib Dety Hain.jpeg",
    color: "#7F1D1D"
  },
  {
    title: "ادب کے اطراف میں",
    titleEnglish: "Adab Ke Atraf Mein",
    year: "2013",
    publisher: "ملاقات پبلیکیشنز، پشاور",
    publisherEnglish: "Mulaqat Publications, Peshawar",
    genre: "تنقید",
    genreEnglish: "Criticism",
    description: "ادبی تنقید کا مجموعہ",
    descriptionEnglish: "Deep critical analysis and essays on contemporary and classical Urdu literature.",
    cover: "/images/Adab Ke Atraf Mein.jpg",
    color: "#312E81"
  },
  {
    title: "خیال خاطر احباب",
    titleEnglish: "Khayal Khatri Ahbab",
    year: "2015",
    publisher: "ملاقات پبلیکیشنز",
    publisherEnglish: "Mulaqat Publications",
    genre: "یادیں/خطوط",
    genreEnglish: "Memoirs",
    description: "احباب کی یادیں اور خطوط",
    descriptionEnglish: "A nostalgic collection of letters and memories shared with literary friends through the decades.",
    cover: "/images/Khayal Khatri Ahbab.jpeg",
    color: "#065F46"
  },
  {
    title: "امریکہ کتنا دور کتنا پاس",
    titleEnglish: "America Kitna Door Kitna Paas",
    year: "2018",
    publisher: "ملاقات پبلیکیشنز، پشاور",
    publisherEnglish: "Mulaqat Publications, Peshawar",
    genre: "سفرنامہ",
    genreEnglish: "Travelogue",
    description: "امریکہ کے ادبی اور سماجی اسفار کی روداد",
    descriptionEnglish: "A fascinating travelogue documenting literary and social journeys across the United States.",
    cover: "/images/America Kitna Door Kitna Paas.jpg",
    color: "#1E3A8A"
  },
  {
    title: "منتخب رباعیات خوشحال خان خٹک",
    titleEnglish: "Muntakhab Rubiyat-e-Khushhal Khan Khatak",
    year: "2016",
    publisher: "ملاقات پبلیکیشنز",
    publisherEnglish: "Mulaqat Publications",
    genre: "تدوین",
    genreEnglish: "Edited Work",
    description: "خوشحال خان خٹک کی رباعیات کا انتخاب",
    descriptionEnglish: "A carefully curated selection of Rubaiyat by the legendary Khushhal Khan Khattak, meticulously edited.",
    cover: undefined,
    color: "#4B2E1E"
  }
];

export const sampleGhazals: Ghazal[] = [
  {
    id: "g1",
    title: "غزل",
    titleEnglish: "Ghazal",
    content: [
      ["یہ اور بات کہ موجود اپنے گھر میں ہوں", "ایک انہونی کا ڈر ہے اور میں"],
      ["آج اک اور برس بیت گیا اس کے بغیر", "جس کے ہوتے ہوئے ہوتے زمانے میرے"]
    ],
    theme: "فلسفیانہ",
    themeEnglish: "Philosophical",
    image: "/images/WhatsApp-Image-2025-08-07-at-1.42.31-AM-3.jpeg"
  }
];

export const bio = {
  name: "پروفیسر ناصر علی سید",
  nameEnglish: "Professor Nasir Ali Syed",
  birthYear: "1948",
  birthPlace: "اکوڑہ خٹک",
  birthPlaceEnglish: "Akora Khattak",
  education: "ایم اے اردو ادب (یونیورسٹی آف پشاور)",
  educationEnglish: "MA Urdu Literature (University of Peshawar)",
  career: "پروفیسر اور شعبہ اردو کے سربراہ، گورنمنٹ کالج پشاور (31 سال)",
  careerEnglish: "Professor & Head of Urdu Department, Government College Peshawar (31 Years)",
  awards: [
    { urdu: "صدارتی ایوارڈ برائے ادب", english: "Presidential Award for Literature" },
    { urdu: "پروین شاکر ایوارڈ", english: "Parveen Shakir Award" },
    { urdu: "آباسین آرٹس کونسل گولڈ میڈل", english: "Abasin Arts Council Gold Medal" },
    { urdu: "قائداعظم ایوارڈ", english: "Quaid-e-Azam Award (Pak-American Coalition)" }
  ],
  currentRole: "چیئرمین، سندیکٹ آف رائٹرز پاکستان",
  currentRoleEnglish: "Chairman, Syndicate of Writers Pakistan",
  expertise: ["اردو", "پشتو", "ہندکو ادب"],
  expertiseEnglish: ["Urdu", "Pashto", "Hindko Literature"],
  genres: ["شاعری", "تنقید", "ڈرامہ", "کہانی", "تدریس"],
  genresEnglish: ["Poetry", "Criticism", "Drama", "Storytelling", "Teaching"],
  stats: [
    { label: "سال تدریس", labelEnglish: "Years Teaching", value: 31 },
    { label: "کتابیں", labelEnglish: "Books Published", value: 6 },
    { label: "ادبی سفر", labelEnglish: "Literary Journey", value: 50 },
    { label: "ایوارڈز", labelEnglish: "Awards", value: 4 }
  ]
};

export const timelineEvents = [
  { year: "1948", title: "پیدائش", titleEnglish: "Birth", description: "اکوڑہ خٹک", descriptionEnglish: "Born in Akora Khattak" },
  { year: "1970s", title: "تعلیم", titleEnglish: "Education", description: "ایم اے اردو ادب - یونیورسٹی آف پشاور", descriptionEnglish: "MA Urdu Literature - University of Peshawar" },
  { year: "1980s", title: "تدریس کا آغاز", titleEnglish: "Teaching Career", description: "گورنمنٹ کالج پشاور میں 31 سالہ تدریسی سفر کا آغاز", descriptionEnglish: "Started 31-year teaching journey at Government College Peshawar" },
  { year: "2013", title: "ادب کے اطراف میں", titleEnglish: "Literary Criticism", description: "تنقیدی مجموعے کی اشاعت", descriptionEnglish: "Publication of his critical work 'Adab Ke Atraf Mein'" },
  { year: "2016", title: "رباعیات خوشحال خان خٹک", titleEnglish: "Edited Works", description: "ترتیب و تدوین", descriptionEnglish: "Compilation of Khushhal Khan Khattak's Rubaiyat" },
  { year: "موجودہ", title: "چیئرمین سندیکٹ", titleEnglish: "Present", description: "چیئرمین، سندیکٹ آف رائٹرز پاکستان", descriptionEnglish: "Currently Chairman, Syndicate of Writers Pakistan" }
];

export const images = {
  logo: "/images/logo without bacground.png",
  hero: [
    "/images/WhatsApp-Image-2025-08-07-at-1.42.31-AM-3.jpeg",
    "/images/WhatsApp-Image-2025-08-07-at-1.42.31-AM-4.jpeg",
    "/images/WhatsApp-Image-2025-08-07-at-1.42.31-AM-7.jpeg",
    "/images/WhatsApp-Image-2025-08-07-at-1.42.31-AM-9.jpeg",
    "/images/WhatsApp-Image-2025-08-07-at-1.42.31-AM-11.jpeg"
  ],
  gallery: [
    { src: "/images/WhatsApp-Image-2025-08-07-at-1.42.31-AM-14.jpeg", caption: "ادبی سیمینار سے خطاب", captionEnglish: "Addressing a Literary Seminar" },
    { src: "/images/WhatsApp-Image-2025-08-07-at-1.42.32-AM-1.jpeg", caption: "شخصیات کے ساتھ یادگار گفتگو", captionEnglish: "Memorable Dialogue with Personalities" },
    { src: "/images/WhatsApp-Image-2025-08-07-at-1.42.32-AM.jpeg", caption: "ایوارڈ کی تقریب", captionEnglish: "Award Distribution Ceremony" },
    { src: "/images/WhatsApp-Image-2025-09-15-at-10.29.13-PM.jpeg", caption: "نیشنل بک فیئر", captionEnglish: "National Book Fair Panel" },
    { src: "/images/WhatsApp-Image-2025-09-15-at-10.29.27-PM.jpeg", caption: "ریڈیو پاکستان پشاور کا انٹرویو", captionEnglish: "Radio Pakistan Peshawar Interview" },
    { src: "/images/WhatsApp-Image-2025-09-15-at-10.30.39-PM.jpeg", caption: "ادبی جرگہ پشاور", captionEnglish: "Literary Assembly Peshawar" },
    { src: "/images/WhatsApp-Image-2025-09-15-at-10.33.37-PM.jpeg", caption: "صدرِ محفل کی حیثیت سے", captionEnglish: "Presiding Over Literary Session" },
    { src: "/images/WhatsApp-Image-2025-09-15-at-10.36.31-PM.jpeg", caption: "ہم عصر مصنفین کے ہمراہ", captionEnglish: "With Contemporary Writers" },
    { src: "/images/WhatsApp-Image-2025-09-15-at-10.37.21-PM.jpeg", caption: "اعزازی شیلڈ وصول کرتے ہوئے", captionEnglish: "Receiving Honorary Shield" },
    { src: "/images/WhatsApp-Image-2025-09-15-at-10.37.50-PM.jpeg", caption: "پشتو اکیڈمی کا اجلاس", captionEnglish: "Pashto Academy Executive Council Meeting" },
    { src: "/images/WhatsApp-Image-2025-09-19-at-12.44.49-AM.jpeg", caption: "دانشوروں کے ساتھ فکری نشست", captionEnglish: "Intellectual Session with Scholars" }
  ]
};
