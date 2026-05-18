import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { images } from "../data";
import { Newspaper, Calendar, BookOpen, Share2, Check, ArrowRight } from "lucide-react";

interface ColumnArticle {
  id: string;
  title: string;
  titleEnglish: string;
  newspaper: string;
  date: string;
  content: string;
  summaryEnglish: string;
}

const columnsCatalog: ColumnArticle[] = [
  {
    id: "col1",
    title: "ادب اور ہماری معاشرتی ذمہ داریاں",
    titleEnglish: "Literature & Social Duty",
    newspaper: "روزنامہ آج پشاور",
    date: "15 مارچ 2026",
    content: "ادب کسی بھی معاشرے کا آئینہ ہوتا ہے۔ جب ہم اپنے اردگرد پھیلی ہوئی بے حسی اور اخلاقی گراوٹ کو دیکھتے ہیں، تو قلم کار کا فرض بن جاتا ہے کہ وہ صرف الفاظ کے مرقعے نہ تراشے بلکہ اپنے معاشرے کی اصلاح کے لیے بھی آواز اٹھائے۔ پشاور کی تاریخی گلیوں اور یہاں کی ادبی محفلوں نے ہمیشہ ایسے قلم کار پیدا کیے ہیں جنہوں نے معاشرے کے درد کو اپنا سمجھا اور اپنے قلم سے تبدیلی کا آغاز کیا۔ قلم صرف تخیل کا نام نہیں، یہ ذمہ داری کا نام ہے، معاشرے کی تعمیرِ نو کا نام ہے۔",
    summaryEnglish: "An intellectual exploration of the pivotal role that writers and thinkers play in reflecting and reforming societal morals."
  },
  {
    id: "col2",
    title: "پشاور کے گم گشتہ ادبی اثاثے",
    titleEnglish: "Peshawar's Literary Heritage",
    newspaper: "روزنامہ مشرق",
    date: "12 فروری 2026",
    content: "پشاور صرف ایک شہر نہیں، یہ تہذیبوں کا سنگم اور علم و ادب کا ایک لامتناہی سمندر رہا ہے۔ یہاں کے قہوہ خانوں اور تاریخی بازاروں میں کبھی بڑے بڑے شعراء اور ادباء بیٹھ کر علمی مباحثے کیا کرتے تھے۔ آج ہمیں ضرورت ہے کہ ہم اپنے ان گم گشتہ علمی اثاثوں کو دوبارہ دریافت کریں اور نوجوان نسل کو پشاور کی اس شاندار ادبی تاریخ سے روشناس کروائیں۔ شہر کی قدیم عمارات اور چائے خانے اس بات کی گواہی دیتے ہیں کہ پشاور ہمیشہ سے فکشن، شاعری اور صحافت کا دل رہا ہے۔",
    summaryEnglish: "A nostalgic look at the historic literary gatherings of Peshawar, urging the new generation to protect and celebrate their rich heritage."
  },
  {
    id: "col3",
    title: "جدید اردو تنقید اور نئے افق",
    titleEnglish: "Horizons of Modern Urdu Criticism",
    newspaper: "روزنامہ نوائے وقت",
    date: "05 جنوری 2026",
    content: "تنقید کا مقصد خامیوں کو اجاگر کرنا نہیں بلکہ تخلیق کے اندر چھپے ہوئے جوہر کو تلاش کرنا ہے۔ آج کے دور میں جہاں تخلیق کاروں کی تعداد بڑھ رہی ہے، وہیں تعمیری تنقید کا قحط نظر آتا ہے۔ جب تک ہم سچے اور بے باک ادبی ناقدین کی حوصلہ افزائی نہیں کریں گے، تب تک پائیدار اور دیرپا ادب کا تخلیق ہونا ناممکن رہے گا۔ جدید تنقیدی رویوں کو سمجھنا اور ان کا نفاذ ہمارے تخلیقی ادب کے معیار کو عالمی افق تک لے جا سکتا ہے۔",
    summaryEnglish: "An analysis of current trends in Urdu literary criticism, calling for a constructive, rigorous standard to guide contemporary writers."
  }
];

export function ColumnsPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeColumn = columnsCatalog[activeIndex];

  const handleCopy = (col: ColumnArticle) => {
    const textToCopy = `ناصر علی سید کالم:\n"${col.title}"\n\n${col.content}\n\nبشکریہ: ${col.newspaper} (${col.date})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(col.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-bg-paper">
      {/* Page Header */}
      <div className="bg-bg-paper-dark py-24 border-b border-brand-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-texture pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 pt-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-brand-accent" />
            <span className="text-xs font-sans tracking-[0.4em] uppercase text-brand-accent">Journalism</span>
            <div className="h-[1px] w-8 bg-brand-accent" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="urdu-header text-5xl md:text-7xl text-brand-primary leading-normal mb-2"
          >
            روزنامچہ کالم و مضامین
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-cinzel tracking-[0.3em] uppercase text-brand-primary/50"
          >
            Newspaper Columns & Literary Essays
          </motion.p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Column Index (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <Newspaper size={16} className="text-brand-accent" />
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-brand-primary/40 font-bold">Newspapers & Columns</span>
            </div>
            
            {columnsCatalog.map((column, idx) => (
              <motion.button
                key={column.id}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ x: 6 }}
                className={`w-full p-6 text-left border flex justify-between items-center transition-all duration-500 rounded-none cursor-pointer ${
                  activeIndex === idx
                    ? "bg-brand-primary border-brand-primary text-white shadow-xl"
                    : "bg-bg-paper border-brand-primary/5 text-brand-primary hover:border-brand-accent"
                }`}
              >
                <div>
                  <h3 className={`urdu-header text-2xl mb-1 text-right ${activeIndex === idx ? "text-white" : "text-brand-primary"}`}>
                    {column.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className={`text-[9px] font-sans tracking-wider uppercase ${activeIndex === idx ? "text-brand-accent" : "text-brand-primary/40"}`}>
                      {column.newspaper}
                    </span>
                    <span className="text-white/20">•</span>
                    <span className={`text-[9px] font-sans ${activeIndex === idx ? "text-white/60" : "text-brand-primary/30"}`}>
                      {column.date}
                    </span>
                  </div>
                </div>
                <div className={`text-[10px] font-sans tracking-widest border px-2 py-1 ml-4 ${
                  activeIndex === idx ? "border-white/20 text-white" : "border-brand-accent/20 text-brand-accent"
                }`}>
                  0{idx + 1}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Column: Column Full Display (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeColumn.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-brand-primary/5 rounded-none shadow-2xl p-8 md:p-16 relative overflow-hidden"
              >
                {/* Background graphic */}
                <div className="absolute right-10 top-10 opacity-[0.02] select-none pointer-events-none text-9xl">
                  📰
                </div>

                {/* Column header */}
                <div className="flex justify-between items-start mb-12 border-b border-brand-primary/5 pb-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-brand-accent/15 text-brand-accent text-[9px] font-sans tracking-widest uppercase inline-block font-semibold">
                        {activeColumn.newspaper}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-brand-primary/40">
                        <Calendar size={12} className="text-brand-accent" />
                        {activeColumn.date}
                      </span>
                    </div>
                    <h2 className="urdu-header text-4xl md:text-5xl text-brand-primary leading-normal text-right">{activeColumn.title}</h2>
                    <h3 className="text-xs font-sans tracking-widest uppercase text-brand-primary/40 mt-1">{activeColumn.titleEnglish}</h3>
                  </div>

                  {/* Actions */}
                  <button 
                    onClick={() => handleCopy(activeColumn)}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-brand-primary/10 text-brand-primary/40 hover:border-brand-accent hover:text-brand-accent transition-all cursor-pointer"
                  >
                    {copiedId === activeColumn.id ? <Check size={16} className="text-green-600" /> : <Share2 size={16} />}
                  </button>
                </div>

                {/* Newspaper Column Text Block */}
                <div className="relative p-8 md:p-12 bg-bg-paper-dark border-l-4 border-brand-accent shadow-inner mb-12">
                  <p className="urdu-body text-2xl md:text-3xl text-brand-primary leading-loose text-justify whitespace-pre-line tracking-wide">
                    {activeColumn.content}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
