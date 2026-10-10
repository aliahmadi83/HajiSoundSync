/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TranscriptSegment {
  id: number;
  time: string;
  seconds: number;
  text: string;
  sectionId: string;
  sectionTitle: string;
  isVerseOrHadith?: boolean;
}

export interface SectionInfo {
  id: string;
  title: string;
  subtitle: string;
  startSec: number;
  endSec: number;
  badge: string;
}

export interface ScriptureReference {
  title: string;
  source: string;
  category: 'قرآن' | 'نهج‌البلاغه' | 'حدیث و کتب روایی';
  quote: string;
  context: string;
}

export const SECTIONS: SectionInfo[] = [
  {
    id: 'intro',
    title: 'مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)',
    subtitle: 'آغاز بحث سوره آل‌عمران، آینه روایات و شواهد التنزیل حاکم حسکانی',
    startSec: 26,
    endSec: 128,
    badge: 'مقدمه'
  },
  {
    id: 'group1-ale-imran',
    title: 'گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران',
    subtitle: 'کلیات مشکک تقوا، خیر، جنات و شأن نزول در شواهد التنزیل',
    startSec: 129,
    endSec: 508,
    badge: 'گروه اول'
  },
  {
    id: 'group1-towbah',
    title: 'آیه ۷۲ سوره توبه و تجرد روح',
    subtitle: 'بی‌معنایی جنسیت در روح، جسم به مثابه ابزار و رضوان الهی',
    startSec: 509,
    endSec: 726,
    badge: 'تکمله گروه ۱'
  },
  {
    id: 'group2-prep',
    title: 'ورود به بخش دوم و طرح کلیات مشکک',
    subtitle: 'امتحان دنیا، مهلت و استدراج در برابر خفت و سفت قیامت',
    startSec: 727,
    endSec: 846,
    badge: 'تمهید گروه ۲'
  },
  {
    id: 'proposition-1',
    title: 'گزاره اول: آیه ۷۷ سوره نساء',
    subtitle: 'متاع الدنیا قلیل و الآخرة خیر لمن اتقی (مقام اثبات و ثبوت)',
    startSec: 847,
    endSec: 988,
    badge: 'گزاره ۱'
  },
  {
    id: 'proposition-2',
    title: 'گزاره دوم: آیه ۱۰ سوره یونس',
    subtitle: 'دعواهم فیها سبحانک اللهم؛ نفی ذلت از بهشت و ذکر دائم بهشتیان',
    startSec: 989,
    endSec: 1229,
    badge: 'گزاره ۲'
  },
  {
    id: 'proposition-3',
    title: 'گزاره سوم: سوره واقعه و مزاح پیامبر (ص)',
    subtitle: 'إنا أنشأناهن إنشاء؛ ماجرای بلال حبشی و جوان شدن اهل بهشت',
    startSec: 1230,
    endSec: 1373,
    badge: 'گزاره ۳'
  },
  {
    id: 'proposition-4',
    title: 'گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه',
    subtitle: 'پاسخ به ادعای بادیه‌نشینی، یا أیتها النفس المطمئنة و بهشت عند ملیک مقتدر',
    startSec: 1374,
    endSec: 1630,
    badge: 'گزاره ۴'
  },
  {
    id: 'proposition-5',
    title: 'گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه',
    subtitle: 'بچه‌های ندید‌بدید دنیا، دار بالبلاء محفوفة و العیش فیها مذموم',
    startSec: 1631,
    endSec: 1864,
    badge: 'گزاره ۵'
  },
  {
    id: 'proposition-6',
    title: 'گزاره ششم: روایت بحارالانوار جلد ۵۸',
    subtitle: 'عقل فطری، ما خلقتم للفناء بل خلقتم للبقاء و انتقال از رحم به رحم',
    startSec: 1865,
    endSec: 2063,
    badge: 'گزاره ۶'
  },
  {
    id: 'proposition-7',
    title: 'گزاره هفتم: خطبه ۸۲ نهج‌البلاغه',
    subtitle: 'ما اصف من دار اولها عناء و آخرها فناء؛ ارزش دنیا نزد علی (ع)',
    startSec: 2064,
    endSec: 2463,
    badge: 'گزاره ۷'
  },
  {
    id: 'conclusion',
    title: 'جمع‌بندی نهایی و کلام پایانی',
    subtitle: 'تهِ بهشت عند ملیک مقتدر، آب بینی بز و محک ظرفیت در دنیا',
    startSec: 2464,
    endSec: 2555,
    badge: 'جمع‌بندی'
  }
];

export const TRANSCRIPT_SEGMENTS: TranscriptSegment[] = [
  {
    id: 1,
    time: "00:26",
    seconds: 26,
    text: "اعوذ بالله السمیع العلیم",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)",
    isVerseOrHadith: true
  },
  {
    id: 2,
    time: "00:29",
    seconds: 29,
    text: "من الشیطان اللعین الرجیم",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)",
    isVerseOrHadith: true
  },
  {
    id: 3,
    time: "00:34",
    seconds: 34,
    text: "بسم الله الرحمن الرحیم",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)",
    isVerseOrHadith: true
  },
  {
    id: 4,
    time: "00:38",
    seconds: 38,
    text: "والحمد لله رب العالمین",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)",
    isVerseOrHadith: true
  },
  {
    id: 5,
    time: "00:43",
    seconds: 43,
    text: "والصلاة والسلام علی سید المرسلین",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)",
    isVerseOrHadith: true
  },
  {
    id: 6,
    time: "00:49",
    seconds: 49,
    text: "وعلی آله السفراء المحجلین واصحابه المنتجبین",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)",
    isVerseOrHadith: true
  },
  {
    id: 7,
    time: "00:54",
    seconds: 54,
    text: "واللعن الدائم علی اعدائهم الی قیام یوم الدین. فضائل امیرالمومنین صلوات الله علیه",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)"
  },
  {
    id: 8,
    time: "01:02",
    seconds: 62,
    text: "و علی آبائه و ابنائه المعصومین",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)"
  },
  {
    id: 9,
    time: "01:06",
    seconds: 66,
    text: "موضوع مورد مواقفه‌مان بود در سوره مبارکه بقره تمام شد",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)"
  },
  {
    id: 10,
    time: "01:14",
    seconds: 74,
    text: "رسیدیم به سوره مبارکه آل عمران",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)"
  },
  {
    id: 11,
    time: "01:19",
    seconds: 79,
    text: "اوصافی که خدای رحمان از امیرالمومنین بیان کرده",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)"
  },
  {
    id: 12,
    time: "01:25",
    seconds: 85,
    text: "در آینه روایات",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)"
  },
  {
    id: 13,
    time: "01:31",
    seconds: 91,
    text: "عمدتاً روایات شیعیان",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)"
  },
  {
    id: 14,
    time: "01:36",
    seconds: 96,
    text: "گرچه حاکم حسکانی در شواهد التنزیل",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)"
  },
  {
    id: 15,
    time: "01:40",
    seconds: 100,
    text: "از این آینه پرده‌برداری کرده و نشان داده که برخی از",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)"
  },
  {
    id: 16,
    time: "01:46",
    seconds: 106,
    text: "برادران اهل تسنن نیز این روایات را",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)"
  },
  {
    id: 17,
    time: "01:51",
    seconds: 111,
    text: "از نظر علم حدیث متناسب با مشایخ خودشان قبول دارند.",
    sectionId: "intro",
    sectionTitle: "مقدمه: خطبه آغازین و اوصاف امیرالمؤمنین (ع)"
  },
  {
    id: 18,
    time: "02:00",
    seconds: 120,
    text: "یکی از این آیات در سوره مبارکه آل عمران آیه ۱۵ تا ۱۷ است",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 19,
    time: "02:06",
    seconds: 126,
    text: "از ابتدای سوره.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 20,
    time: "02:09",
    seconds: 129,
    text: "پیغمبر به مردم بگو قل اونبئکم بخیر من ذلکم در آیه قبلی آمده است که زین للناس",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 21,
    time: "02:18",
    seconds: 138,
    text: "حب الشهوات من النساء والبنین والقناطیر المقنطرة",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 22,
    time: "02:24",
    seconds: 144,
    text: "من الذهب والفضة والخیل المسومة",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 23,
    time: "02:28",
    seconds: 148,
    text: "ما برای مردم زینت دادیم بسیاری از چیزها رو",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 24,
    time: "02:33",
    seconds: 153,
    text: "دوست داشته باشند بعد در این آیه، آیه ۱۵",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 25,
    time: "02:37",
    seconds: 157,
    text: "به پیغمبر می‌فرماید به مردم خبر بده که",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 26,
    time: "02:41",
    seconds: 161,
    text: "می‌خواین من به شما اطلاع بدم",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 27,
    time: "02:43",
    seconds: 163,
    text: "بخیر من ذلکم، بهتر از این دنیا و تمام مافیها",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 28,
    time: "02:48",
    seconds: 168,
    text: "برای شما چیست؟",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 29,
    time: "02:51",
    seconds: 171,
    text: "للذین اتقوا",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 30,
    time: "02:53",
    seconds: 173,
    text: "عند ربهم، فقط برای متقین",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 31,
    time: "02:57",
    seconds: 177,
    text: "در نزد پروردگارشان.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 32,
    time: "03:01",
    seconds: 181,
    text: "طلبه تا زمانی که تو دبیرستان و دانشگاهه و هنوز وارد حوزه نشده، ادبیات",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 33,
    time: "03:09",
    seconds: 189,
    text: "پنداری و گفتاریش متفاوته.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 34,
    time: "03:12",
    seconds: 192,
    text: "من و شما خوب حس می‌کنیم.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 35,
    time: "03:17",
    seconds: 197,
    text: "صبح‌به‌خیر میشه «صبحکم الله بالخیر»،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 36,
    time: "03:22",
    seconds: 202,
    text: "درود بر شما میشه «سلام علیکم» و الی آخر. این ادبیات گفتاری",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 37,
    time: "03:28",
    seconds: 208,
    text: "مبتنی بر ادبیات",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 38,
    time: "03:30",
    seconds: 210,
    text: "پنداری‌ست. پندار هم تغییر می‌کنه.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 39,
    time: "03:35",
    seconds: 215,
    text: "برای طلبه وقتی این آیه رو می‌خونیم از همون اول شروع می‌کنه تجزیه:",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 40,
    time: "03:41",
    seconds: 221,
    text: "قل اونبئکم بخیر من ذلکم للذین اتقوا",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 41,
    time: "03:46",
    seconds: 226,
    text: "عند ربهم،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 42,
    time: "03:48",
    seconds: 228,
    text: "کسانی که تقوا پیشه کردند، طلبه می‌گه این تقوا یک",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 43,
    time: "03:54",
    seconds: 234,
    text: "مقوله به تشکیکه، یه کلیه، یه کلی",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 44,
    time: "03:57",
    seconds: 237,
    text: "مشککه.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 45,
    time: "03:58",
    seconds: 238,
    text: "للذین اتقوا، برای متقی و متقی‌تر و متقی‌ترین و امام‌المتقین.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 46,
    time: "04:06",
    seconds: 246,
    text: "بخیر من ذلکم، بهتر از این دنیا، خود خیر دوباره مقوله",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 47,
    time: "04:13",
    seconds: 253,
    text: "مشککه،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 48,
    time: "04:14",
    seconds: 254,
    text: "خوب و خوب‌تر و خوب‌ترین و بهترین خوب.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 49,
    time: "04:21",
    seconds: 261,
    text: "جنات تجری من تحتها الانهار",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 50,
    time: "04:24",
    seconds: 264,
    text: "نعمت‌های",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 51,
    time: "04:26",
    seconds: 266,
    text: "دائمی ابدی،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 52,
    time: "04:28",
    seconds: 268,
    text: "خالدین فیها و ازواج مطهره",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 53,
    time: "04:31",
    seconds: 271,
    text: "و رضوان من الله",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 54,
    time: "04:33",
    seconds: 273,
    text: "والله بصیر بالعباد.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 55,
    time: "04:37",
    seconds: 277,
    text: "باغ‌هایی‌ست که جاری‌ست در",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 56,
    time: "04:39",
    seconds: 279,
    text: "زیر آن نهرهایی،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 57,
    time: "04:41",
    seconds: 281,
    text: "همیشگی‌اند در آن، جاودانند، نه به معنای",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 58,
    time: "04:45",
    seconds: 285,
    text: "دیرپایان بلکه به معنای بی‌پایان،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 59,
    time: "04:49",
    seconds: 289,
    text: "و ازواج مطهره،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 60,
    time: "04:53",
    seconds: 293,
    text: "همراهانی،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 61,
    time: "04:55",
    seconds: 295,
    text: "زوج‌هایی که پاکند،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 62,
    time: "04:57",
    seconds: 297,
    text: "و رضوان من الله، رضایت الهی.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 63,
    time: "05:01",
    seconds: 301,
    text: "از باغ و راغ و",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 64,
    time: "05:03",
    seconds: 303,
    text: "جنات تجری من تحتها الانهار و",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 65,
    time: "05:05",
    seconds: 305,
    text: "این‌ها بگیرید برود تا آخرش، از شما بپرسند از من چی می‌خوای بگی خدایا رضاک،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 66,
    time: "05:13",
    seconds: 313,
    text: "فقط تو راضی باش، هیچی دیگه نمی‌خوام.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 67,
    time: "05:18",
    seconds: 318,
    text: "بهشت من رضایت توست و نه چیز دیگری.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 68,
    time: "05:24",
    seconds: 324,
    text: "والله بصیر بالعباد. این‌ها چه کسانی‌اند؟ آیه ۱۶:",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 69,
    time: "05:29",
    seconds: 329,
    text: "الذین یقولون ربنا",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 70,
    time: "05:31",
    seconds: 331,
    text: "اننا",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 71,
    time: "05:32",
    seconds: 332,
    text: "آمنا",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 72,
    time: "05:33",
    seconds: 333,
    text: "فاغفر لنا ذنوبنا وقنا عذاب النار.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 73,
    time: "05:36",
    seconds: 336,
    text: "کسانی که می‌گن پروردگار ما ما به تو ایمان آوردیم، ما رو ببخش گناهانمان را",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 74,
    time: "05:42",
    seconds: 342,
    text: "و ما را از آتش جهنم نگه دار.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 75,
    time: "05:46",
    seconds: 346,
    text: "آیه ۱۷: الصابرین و الصادقین",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 76,
    time: "05:50",
    seconds: 350,
    text: "و القانتین و المنفقین و المستغفرین بالاسحار، همین‌ها،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    isVerseOrHadith: true
  },
  {
    id: 77,
    time: "05:55",
    seconds: 355,
    text: "که شما هم هستید،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 78,
    time: "05:57",
    seconds: 357,
    text: "من و شمام داخلش هستیم.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 79,
    time: "06:01",
    seconds: 361,
    text: "ربنا آمنا فاغفر لنا ذنوبنا و قنا عذاب النار، المستغفرین بالاسحار هم هستیم،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 80,
    time: "06:06",
    seconds: 366,
    text: "منفقین هم هستیم،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 81,
    time: "06:08",
    seconds: 368,
    text: "پس برای ما اون جنات هم هست،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 82,
    time: "06:11",
    seconds: 371,
    text: "اما هر درجه‌ای از",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 83,
    time: "06:14",
    seconds: 374,
    text: "للذین اتقوا منجر می‌شود",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 84,
    time: "06:17",
    seconds: 377,
    text: "به عند الرب جناتی.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 85,
    time: "06:20",
    seconds: 380,
    text: "اگر تقوا سطح ادنی باشه،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 86,
    time: "06:23",
    seconds: 383,
    text: "تا سطح دنی باشه،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 87,
    time: "06:25",
    seconds: 385,
    text: "تا سطح علی باشه، تا سطح اعلا باشه، می‌شود",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 88,
    time: "06:31",
    seconds: 391,
    text: "بهشت...",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 89,
    time: "06:33",
    seconds: 393,
    text: "بهشت پایین‌ترین بهشت، بهشت پایین، بهشت متوسط، بالاترین بهشت.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 90,
    time: "06:42",
    seconds: 402,
    text: "حاکم حسکانی در جلد اول شواهد التنزیل،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 91,
    time: "06:47",
    seconds: 407,
    text: "تشکر،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 92,
    time: "06:48",
    seconds: 408,
    text: "صفحه ۲۵۲",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 93,
    time: "06:51",
    seconds: 411,
    text: "از ابن عباس آورده که انها نزلت فی علی، صلوات الله علیه و آله و سلم، این آیه نازل شد در مورد علی بن ابی‌طالب",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 94,
    time: "07:00",
    seconds: 420,
    text: "و حمزه و عبیدة بن الحرث،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 95,
    time: "07:03",
    seconds: 423,
    text: "عبیده پسر حرث،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 96,
    time: "07:07",
    seconds: 427,
    text: "و حضرت حمزه سیدالشهدا.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 97,
    time: "07:12",
    seconds: 432,
    text: "قبلاً در مورد سبب نزول",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 98,
    time: "07:15",
    seconds: 435,
    text: "و شأن نزول",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 99,
    time: "07:18",
    seconds: 438,
    text: "و به جای تفسیر و تأویل، تطبیق، حرف زدیم.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 100,
    time: "07:22",
    seconds: 442,
    text: "اینکه حضرت امیر و حمزه و عبیدالله بن حرث",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 101,
    time: "07:26",
    seconds: 446,
    text: "مصادیق این آیه باشن حرفی نیست",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 102,
    time: "07:29",
    seconds: 449,
    text: "و اینجا روایت داره تطبیق روایت می‌کنه.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 103,
    time: "07:33",
    seconds: 453,
    text: "همان طور که من و شما از مصادیقشیم.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 104,
    time: "07:37",
    seconds: 457,
    text: "اگر بگن این آیه هم",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 105,
    time: "07:39",
    seconds: 459,
    text: "مفهومی‌ست،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 106,
    time: "07:40",
    seconds: 460,
    text: "هاشمی مصداقشه، دروغ نگفتن.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 107,
    time: "07:43",
    seconds: 463,
    text: "اما تقوای ادنی، جناتِ",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 108,
    time: "07:47",
    seconds: 467,
    text: "دنیا،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 109,
    time: "07:49",
    seconds: 469,
    text: "مؤنثش،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 110,
    time: "07:51",
    seconds: 471,
    text: "نه به معنای بهشت دنیا.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 111,
    time: "07:56",
    seconds: 476,
    text: "اما وقتی ابن عباس به عنوانِ",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 112,
    time: "07:59",
    seconds: 479,
    text: "امام المفسرین",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 113,
    time: "08:01",
    seconds: 481,
    text: "می‌گه نزلت، این آیه در مورد علی بن ابی‌طالب",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 114,
    time: "08:04",
    seconds: 484,
    text: "نازل شد، دیگه تطبیق نیست، بلکه تفسیره.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 115,
    time: "08:07",
    seconds: 487,
    text: "حالا توی تفسیر باید بیایم ببینیم سبب نزوله یا شأن نزوله،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 116,
    time: "08:12",
    seconds: 492,
    text: "با تفاوتی که قبلاً گفته شد.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 117,
    time: "08:15",
    seconds: 495,
    text: "از ظواهر روایت",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 118,
    time: "08:17",
    seconds: 497,
    text: "دومی مستفاده،",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 119,
    time: "08:20",
    seconds: 500,
    text: "یعنی شأن نزول این آیه حضرت امیر",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 120,
    time: "08:23",
    seconds: 503,
    text: "و حضرت حمزه و عبیدالله بن حرثه.",
    sectionId: "group1-ale-imran",
    sectionTitle: "گروه اول: آیات ۱۵ تا ۱۷ سوره آل‌عمران"
  },
  {
    id: 121,
    time: "08:29",
    seconds: 509,
    text: "آیه دوم را در ذیل این آیه بخونیم، ۷۳ سوره مبارکه توبه، تا در فهمش راحت‌تر باشیم:",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 122,
    time: "08:36",
    seconds: 516,
    text: "وعد الله المومنین و المومنات،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح",
    isVerseOrHadith: true
  },
  {
    id: 123,
    time: "08:40",
    seconds: 520,
    text: "آیه ۱۵، ۱۶ و ۱۷ سوره آل عمران از مؤمنات حرف نزد.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 124,
    time: "08:46",
    seconds: 526,
    text: "از اولش که می‌فرماید للذین اتقوا",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 125,
    time: "08:48",
    seconds: 528,
    text: "و بعد هم می‌فرماید الصابرین، نمی‌گه و الصابرات،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 126,
    time: "08:52",
    seconds: 532,
    text: "و الصادقین، حرف از صادقات نمی‌زنه،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 127,
    time: "08:56",
    seconds: 536,
    text: "و القانتین و المنفقین و المستغفرین،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 128,
    time: "08:59",
    seconds: 539,
    text: "از مستغفرات، قانتات و صادقات",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 129,
    time: "09:03",
    seconds: 543,
    text: "حرف نمی‌زنه.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 130,
    time: "09:04",
    seconds: 544,
    text: "ولی این آیه:",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 131,
    time: "09:05",
    seconds: 545,
    text: "وعد الله المومنین و المومنات.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح",
    isVerseOrHadith: true
  },
  {
    id: 132,
    time: "09:08",
    seconds: 548,
    text: "در اصل این سیر،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 133,
    time: "09:10",
    seconds: 550,
    text: "جنسیت هیچ معنایی نداره،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 134,
    time: "09:13",
    seconds: 553,
    text: "چون روح",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 135,
    time: "09:14",
    seconds: 554,
    text: "مجرد از ماده است، گرچه نه مجرد مطلق اما مجرد نسبی، و جنسیت نداره،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 136,
    time: "09:21",
    seconds: 561,
    text: "زن و مرد نیست.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 137,
    time: "09:23",
    seconds: 563,
    text: "روح من و روح همسر من،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 138,
    time: "09:26",
    seconds: 566,
    text: "جنسیت درش معنا نداره. روحیاتمون متفاوته، اما روحمون متفاوت نیست.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 139,
    time: "09:34",
    seconds: 574,
    text: "وقتی این روح تعلق گرفت به یک جسمِ نرینه، روحیات می‌شود نرینه.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 140,
    time: "09:40",
    seconds: 580,
    text: "اگر روح تعلق گرفت به یک جنس مادینه، روحیات می‌شود مادینه.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 141,
    time: "09:45",
    seconds: 585,
    text: "همون طوری که اگر آب را در ظرف مکعب مستطیل",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 142,
    time: "09:49",
    seconds: 589,
    text: "یا مکعب مربع جا بدید شکل همون رو می‌گیره، این میشه روحیات،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 143,
    time: "09:54",
    seconds: 594,
    text: "و الا آب همون آبه.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 144,
    time: "09:56",
    seconds: 596,
    text: "هوا را، نمایات، در گازها، جا بدید در یک کپسول به همون شکل،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 145,
    time: "10:01",
    seconds: 601,
    text: "جا بدید در یک کپسول دیگه به همون شکل، شکل می‌گیره.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 146,
    time: "10:07",
    seconds: 607,
    text: "لذا",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 147,
    time: "10:08",
    seconds: 608,
    text: "وقتی پهنه عمل را نگاه می‌کنیم، الذین آمنوا و عملوا الصالحات،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح",
    isVerseOrHadith: true
  },
  {
    id: 148,
    time: "10:13",
    seconds: 613,
    text: "چه مرد باشن، چه زن، انا لا نضیع عمل عامل منکم من ذکر او انثی،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح",
    isVerseOrHadith: true
  },
  {
    id: 149,
    time: "10:20",
    seconds: 620,
    text: "عامل، عملٍ منکم، فرق نمی‌کنه زن یا مرد، چون عامل جسم نیست، این جسم",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 150,
    time: "10:27",
    seconds: 627,
    text: "بیل و کلنگِ عمله‌است. عمله اون روحه.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 151,
    time: "10:31",
    seconds: 631,
    text: "روح داره با این جسم کار انجام میده.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 152,
    time: "10:35",
    seconds: 635,
    text: "وعد الله المومنین و المومنات جنات تجری من تحتها الانهار، مثل همون آیه ۱۵ آل عمران، خالدین فیها عِین همون،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح",
    isVerseOrHadith: true
  },
  {
    id: 153,
    time: "10:44",
    seconds: 644,
    text: "و مساکن طیبة فی جنات عدن عین همون،",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح",
    isVerseOrHadith: true
  },
  {
    id: 154,
    time: "10:50",
    seconds: 650,
    text: "و رضوان من الله، آخرش را می‌فرماید، عین همون.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح",
    isVerseOrHadith: true
  },
  {
    id: 155,
    time: "10:55",
    seconds: 655,
    text: "و رضوان من الله اکبر ذلک هو الفوز العظیم.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح",
    isVerseOrHadith: true
  },
  {
    id: 156,
    time: "10:59",
    seconds: 659,
    text: "این رسیدن به رضوان الهی، این فوز عظیمه.",
    sectionId: "group1-towbah",
    sectionTitle: "آیه ۷۲ سوره توبه و تجرد روح"
  },
  {
    id: 157,
    time: "11:05",
    seconds: 665,
    text: "طوری که اگر",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 158,
    time: "11:07",
    seconds: 667,
    text: "فردای قیامت",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 159,
    time: "11:08",
    seconds: 668,
    text: "بیان به من بگن به‌خاطر اعمالی که انجام دادی،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 160,
    time: "11:12",
    seconds: 672,
    text: "خالصاً مخلصاً لوجه الله،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 161,
    time: "11:15",
    seconds: 675,
    text: "بیا ما به تو باغ و راغ و جنات تجری من تحتها الانهار می‌دیم،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 162,
    time: "11:20",
    seconds: 680,
    text: "اما با نمره قبولی، نمره ناپلئونی، نه نمره کامل،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 163,
    time: "11:25",
    seconds: 685,
    text: "خدا از تو اون طوری که شایسته‌ات بود راضی نیست، این می‌شود جهنم من، ولو تو اون بهشتم،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 164,
    time: "11:32",
    seconds: 692,
    text: "ولی این می‌شود دوزخ من. عذاب می‌کشم که چرا خدایا",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 165,
    time: "11:37",
    seconds: 697,
    text: "با نمره شایستگی وارد نشده بودم.",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 166,
    time: "11:41",
    seconds: 701,
    text: "الان حتی تو بهشتم که اومدم، به من بگن که، به من نه ها، به شما هم نه،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 167,
    time: "11:47",
    seconds: 707,
    text: "به کسی نگاه نمی‌کنم که برنخوره،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 168,
    time: "11:49",
    seconds: 709,
    text: "بیا این باغ و راغ رو ازت می‌گیریم برو تو جهنم خدا راضیه، حاضر نیست...",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 169,
    time: "11:54",
    seconds: 714,
    text: "گلش این‌طوری شکل گرفته.",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 170,
    time: "11:57",
    seconds: 717,
    text: "تو دنیاش هم همین‌طور،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 171,
    time: "11:59",
    seconds: 719,
    text: "تو دنیاش هم",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 172,
    time: "12:00",
    seconds: 720,
    text: "با خدا معامله می‌کنه،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 173,
    time: "12:03",
    seconds: 723,
    text: "قد به دُن.",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 174,
    time: "12:07",
    seconds: 727,
    text: "این دو تا آیه، یعنی آیه ۷۳ توبه، و ۱۵ تا ۱۷ آل عمران،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 175,
    time: "12:14",
    seconds: 734,
    text: "ما را با چند تا کلی مشکک روبرو می‌کنه: تقوا،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 176,
    time: "12:19",
    seconds: 739,
    text: "جناتِ",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 177,
    time: "12:21",
    seconds: 741,
    text: "فردای",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 178,
    time: "12:22",
    seconds: 742,
    text: "قیامت،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 179,
    time: "12:24",
    seconds: 744,
    text: "و خیر،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 180,
    time: "12:27",
    seconds: 747,
    text: "بهتر بودن.",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 181,
    time: "12:30",
    seconds: 750,
    text: "بعضی‌ها،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 182,
    time: "12:31",
    seconds: 751,
    text: "باورتون نمیشه، از اهل تقوا دنیاشون",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 183,
    time: "12:35",
    seconds: 755,
    text: "براشون بهتر است از آخرتشون.",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 184,
    time: "12:39",
    seconds: 759,
    text: "الانِ در ناز و نعمت‌اند",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 185,
    time: "12:43",
    seconds: 763,
    text: "و خدا داره حکم به صورت می‌کنه براشون، ستار العیوبه،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 186,
    time: "12:47",
    seconds: 767,
    text: "هنوز تبلی السرائر نشده، سیرت‌ها رو رو نکرده،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 187,
    time: "12:51",
    seconds: 771,
    text: "کاری هم نداره با اینکه زمان تمام شد برگه‌ها رو بگیرید بالا امتحان دیگه نیست،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 188,
    time: "12:57",
    seconds: 777,
    text: "هنوز دارن امتحان میدن، لذا وقت امتحان امهال است و",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 189,
    time: "13:02",
    seconds: 782,
    text: "املاء است و",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 190,
    time: "13:03",
    seconds: 783,
    text: "بهش مهلت بدید پرش کنید استدراج،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 191,
    time: "13:07",
    seconds: 787,
    text: "همین‌طور نعمت بهش بدید، اما فردای قیامت وقتی خفت و سفت کشیدن،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 192,
    time: "13:12",
    seconds: 792,
    text: "تو بهشت،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 193,
    time: "13:13",
    seconds: 793,
    text: "بهشتشون بدتر از دنیاشونه! باورتون می‌شد؟! ",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 194,
    time: "13:17",
    seconds: 797,
    text: "تا حالا بهش اندیشه نکرده بودیم، اما از این دو آیه مستفاده.",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 195,
    time: "13:22",
    seconds: 802,
    text: "فردای قیامت به خاطر اعمالش می‌برنش بهشت،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 196,
    time: "13:28",
    seconds: 808,
    text: "به خاطر اینکه ایمان داره عمل صالح هم داره اما همه‌ش",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 197,
    time: "13:32",
    seconds: 812,
    text: "ته دیگه،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 198,
    time: "13:33",
    seconds: 813,
    text: "ته دیگه!",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 199,
    time: "13:34",
    seconds: 814,
    text: "همه‌ش کفه",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 200,
    time: "13:37",
    seconds: 817,
    text: "کاره، ایمان حداقلی، خلوص حداقلی،",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 201,
    time: "13:42",
    seconds: 822,
    text: "ارادت حداقلی به حضرات ائمه اطهار، مابقی همه تاجر مآب، همه چیز به تجارت.",
    sectionId: "group2-prep",
    sectionTitle: "ورود به بخش دوم و طرح کلیات مشکک"
  },
  {
    id: 202,
    time: "13:54",
    seconds: 834,
    text: "بخش اول بود، بخش دوم",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 203,
    time: "13:57",
    seconds: 837,
    text: "دارای هفت آیه‌ست.",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 204,
    time: "14:02",
    seconds: 842,
    text: "می‌خواهیم این سه تا کلی رو با هم واشکافیم.",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 205,
    time: "14:07",
    seconds: 847,
    text: "آیه ۷۹ سوره مبارکه نساء.",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 206,
    time: "14:12",
    seconds: 852,
    text: "در ۱۵ آل عمران به پیغمبر فرمود قل اونبئکم بخیر من ذلکم، اینجا صراحتاً می‌فرماید قل، پیغمبر به مردم بگو",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 207,
    time: "14:20",
    seconds: 860,
    text: "متاع الدنیا",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء",
    isVerseOrHadith: true
  },
  {
    id: 208,
    time: "14:21",
    seconds: 861,
    text: "هر چه در دار دنیاست",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 209,
    time: "14:24",
    seconds: 864,
    text: "قلیل و الآخره خیر",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء",
    isVerseOrHadith: true
  },
  {
    id: 210,
    time: "14:28",
    seconds: 868,
    text: "آخرت بهتر است از این دار دنیا،",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 211,
    time: "14:31",
    seconds: 871,
    text: "لمن اتقی، برای اون کسانی که تقوا پیشه کنن.",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء",
    isVerseOrHadith: true
  },
  {
    id: 212,
    time: "14:34",
    seconds: 874,
    text: "پس عملاً این آیه",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 213,
    time: "14:36",
    seconds: 876,
    text: "شریفه گزاره‌ای‌ست بر ضد اون استنباطی که شما از اول داشتید.",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 214,
    time: "14:41",
    seconds: 881,
    text: "میگه آخرت بهتر است از دنیا برای اهل تقوا،",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 215,
    time: "14:45",
    seconds: 885,
    text: "در مقام اثبات، نه در مقام ثبوت.",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 216,
    time: "14:49",
    seconds: 889,
    text: "یعنی اهل تقوا",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 217,
    time: "14:50",
    seconds: 890,
    text: "اگر به تقواتون بچسبید آخرت برای شما بهتر است،",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 218,
    time: "14:55",
    seconds: 895,
    text: "اما اگر به تقواتون نچسبید دنیاتون بهتر از آخرتتونه.",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 219,
    time: "15:00",
    seconds: 900,
    text: "به خاطر اینکه اینجا سر جلسه امتحانید هنوز نمره‌تون رو نخوندن",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 220,
    time: "15:04",
    seconds: 904,
    text: "که بخوان پایه حقوق بهتون بدن که.",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 221,
    time: "15:07",
    seconds: 907,
    text: "الانه فقط راحت نشستید کیک و شربت هم می‌دادن، هنوز هم می‌دن؟",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 222,
    time: "15:12",
    seconds: 912,
    text: "تو آزمون ورودی دانشگاه؟",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 223,
    time: "15:14",
    seconds: 914,
    text: "کیک و شربت هم بهتون میدن، راحت هم دارید",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 224,
    time: "15:17",
    seconds: 917,
    text: "می‌گردید، ولی وقتی می‌خوان معلوم بکنن می‌گن شما رد شدی، رفوزه،",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 225,
    time: "15:22",
    seconds: 922,
    text: "حق نداری وارد آموزش عالی بشی، همین‌جا پشت دیپلم",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 226,
    time: "15:26",
    seconds: 926,
    text: "هنوز درجا بزن. آموزش عالی برای کسانی‌ست",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 227,
    time: "15:30",
    seconds: 930,
    text: "که از این گردنه رد شده باشن.",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 228,
    time: "15:34",
    seconds: 934,
    text: "خیرٌ لمن اتقی یعنی خیرٌ",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء",
    isVerseOrHadith: true
  },
  {
    id: 229,
    time: "15:36",
    seconds: 936,
    text: "برای اون کسانی که به تقواشون چسبیدند.",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 230,
    time: "15:40",
    seconds: 940,
    text: "و الا فردا بهشتِ بعضی بد جهنم‌دره‌ای‌ست!",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 231,
    time: "15:44",
    seconds: 944,
    text: "دو تا عذاب در بهشت بعضی از ما هست:",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 232,
    time: "15:47",
    seconds: 947,
    text: "یکی عذاب",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 233,
    time: "15:49",
    seconds: 949,
    text: "تأسف و تحسر،",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 234,
    time: "15:51",
    seconds: 951,
    text: "یکی عذاب شرم و آزرم.",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 235,
    time: "15:54",
    seconds: 954,
    text: "تو بهشت!",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 236,
    time: "15:57",
    seconds: 957,
    text: "اونجا به طبع درجه است،",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 237,
    time: "16:00",
    seconds: 960,
    text: "یک، احسنتم، مدرج،",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 238,
    time: "16:02",
    seconds: 962,
    text: "جناته، درجاتی‌ست بعضها فوق بعض.",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 239,
    time: "16:09",
    seconds: 969,
    text: "اگر مهدی درجه‌ش بالاتر از من باشه شرم نمی‌کنم؟! ",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 240,
    time: "16:15",
    seconds: 975,
    text: "اگر...",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 241,
    time: "16:17",
    seconds: 977,
    text: "تأسف نمی‌خورم؟! ",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 242,
    time: "16:20",
    seconds: 980,
    text: "پس فکر نکنیم بهشت",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 243,
    time: "16:22",
    seconds: 982,
    text: "لذت مطلقه است.",
    sectionId: "proposition-1",
    sectionTitle: "گزاره اول: آیه ۷۷ سوره نساء"
  },
  {
    id: 244,
    time: "16:29",
    seconds: 989,
    text: "گروه دو، آیه دوم، آیه ۱۰ سوره مبارکه یونس.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 245,
    time: "16:35",
    seconds: 995,
    text: "برای اونایی که چسبیدند به",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 246,
    time: "16:38",
    seconds: 998,
    text: "تقواشون،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 247,
    time: "16:40",
    seconds: 1000,
    text: "چرا فردای قیامت بهتر از دنیاست؟",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 248,
    time: "16:44",
    seconds: 1004,
    text: "در دار دنیا ما هر لذتی که می‌بریم سابق و مسبوق و ملازمِ",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 249,
    time: "16:50",
    seconds: 1010,
    text: "ذلت است،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 250,
    time: "16:52",
    seconds: 1012,
    text: "هر لذتی.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 251,
    time: "16:55",
    seconds: 1015,
    text: "می‌خوای لذت شکم ببری هم باید ذلت کسب به دست بیاری، بری",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 252,
    time: "16:59",
    seconds: 1019,
    text: "بالاخره حرومش هم",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 253,
    time: "17:02",
    seconds: 1022,
    text: "دردسر داره، از دیوار مردم بری بالا یا با غل و غش و اختلاس بکنی مدام",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 254,
    time: "17:09",
    seconds: 1029,
    text: "خواب پریشون ببینی برای اینکه ارتشا کردی.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 255,
    time: "17:14",
    seconds: 1034,
    text: "موقعی که می‌خوای بخوری راحت الحلقوم نیست که همین‌طور بخوری بگی به به، باید بالاخره بجوی، باید",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 256,
    time: "17:21",
    seconds: 1041,
    text: "پایین بدی، موقعی هم که خوردی، بعدش، دفع!",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 257,
    time: "17:25",
    seconds: 1045,
    text: "فقط کافی‌ست دستشویی پیدا نکنی،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 258,
    time: "17:28",
    seconds: 1048,
    text: "اون وقت می‌فهمی که این لذت",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 259,
    time: "17:31",
    seconds: 1051,
    text: "مشحونِ ذلت بوده!",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 260,
    time: "17:35",
    seconds: 1055,
    text: "از شکم مثال دادم، مثال زدم کم من نظیر، شما برید تو",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 261,
    time: "17:40",
    seconds: 1060,
    text: "بقیه شهوات، هر شهوتی",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 262,
    time: "17:43",
    seconds: 1063,
    text: "در دار دنیا سابق و ملازم و مسبوقِ ذلت است،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 263,
    time: "17:48",
    seconds: 1068,
    text: "اما فردای قیامت این‌طور نیست.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 264,
    time: "17:51",
    seconds: 1071,
    text: "دعواهم فیها،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس",
    isVerseOrHadith: true
  },
  {
    id: 265,
    time: "17:53",
    seconds: 1073,
    text: "همین آیه ۱۰ یونس،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 266,
    time: "17:54",
    seconds: 1074,
    text: "دعواهم فیها سبحانک اللهم",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس",
    isVerseOrHadith: true
  },
  {
    id: 267,
    time: "17:57",
    seconds: 1077,
    text: "و تحیتهم فیها سلام",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس",
    isVerseOrHadith: true
  },
  {
    id: 268,
    time: "17:59",
    seconds: 1079,
    text: "و آخر دعواهم",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس",
    isVerseOrHadith: true
  },
  {
    id: 269,
    time: "18:01",
    seconds: 1081,
    text: "ان الحمد لله رب العالمین.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس",
    isVerseOrHadith: true
  },
  {
    id: 270,
    time: "18:04",
    seconds: 1084,
    text: "اهل بهشت سه تا ذکر دارند علی الدوام:",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 271,
    time: "18:07",
    seconds: 1087,
    text: "دعواهم، ادعا، تقاضاشون،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 272,
    time: "18:10",
    seconds: 1090,
    text: "وقتی یه چیزی بخوان می‌گن سبحانک اللهم.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 273,
    time: "18:13",
    seconds: 1093,
    text: "شما رفتید خونه خدا حفظ کنه حضرت آیت الله جوادی رو، این حرف مال ایشونه.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 274,
    time: "18:18",
    seconds: 1098,
    text: "البته ایشون هم از خودشون ندارن بلکه مال مرحوم حضرت علامه طباطبایی‌ست.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 275,
    time: "18:23",
    seconds: 1103,
    text: "اون سر رو نمی‌دونم از کجا آورد.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 276,
    time: "18:26",
    seconds: 1106,
    text: "شما رفتید منزل یه بنده خدایی، رودربایستی دارید براش، تشنه‌تون هم هست،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 277,
    time: "18:31",
    seconds: 1111,
    text: "نمی‌گید آقا، دستور، آب برام بیار.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 278,
    time: "18:35",
    seconds: 1115,
    text: "نمی‌گید آقا لطفاً میشه، درخواست، برام آب بیارید.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 279,
    time: "18:39",
    seconds: 1119,
    text: "می‌گید آقا شما تشنه‌تون نیست؟! ",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 280,
    time: "18:42",
    seconds: 1122,
    text: "این میشه سبحانک اللهم. فردا شما",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 281,
    time: "18:46",
    seconds: 1126,
    text: "فی مشتهت انفسهم خالدون، ان شاء الله تو بهشت که می‌رید،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس",
    isVerseOrHadith: true
  },
  {
    id: 282,
    time: "18:50",
    seconds: 1130,
    text: "در هر چیزی که اشتها دارید خدا بهتون میده، به همه‌تون؟ نه!",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 283,
    time: "18:55",
    seconds: 1135,
    text: "هر کسی اندازه‌ی خودش.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 284,
    time: "18:57",
    seconds: 1137,
    text: "من یه مرتبه اشتها می‌کنم برم",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 285,
    time: "18:59",
    seconds: 1139,
    text: "بشینم سر سفره‌ی حضرت امیر، عمراً، ابداً، اصلاً، راهم نمی‌دن که، می‌گن",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 286,
    time: "19:05",
    seconds: 1145,
    text: "دهنت بوی شیر که هیچ بوی خامه میده! تو باید حالا بری",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 287,
    time: "19:09",
    seconds: 1149,
    text: "آغوز بخوری!",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 288,
    time: "19:11",
    seconds: 1151,
    text: "حضرت امیر می‌خوای بری؟! سقط می‌کنی!",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 289,
    time: "19:14",
    seconds: 1154,
    text: "بعضی‌ها تا آخرِ قیامت،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 290,
    time: "19:16",
    seconds: 1156,
    text: "هیچ، بعد از قیامت تا آخر جنات، بعد از استکمالات،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 291,
    time: "19:22",
    seconds: 1162,
    text: "ابداً امیرالمومنین را زیارت نمی‌کنند.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 292,
    time: "19:25",
    seconds: 1165,
    text: "اون موقعی هم که دم مرگ حضرت امیر رو می‌بینن اصلاً نمی‌شناسند،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 293,
    time: "19:29",
    seconds: 1169,
    text: "نمی‌فهمند علی بن ابی‌طالبه.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 294,
    time: "19:33",
    seconds: 1173,
    text: "علی را می‌شود در خانه یتیمی دید،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 295,
    time: "19:36",
    seconds: 1176,
    text: "می‌شود زیر برق شمشیرش چشید.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 296,
    time: "19:39",
    seconds: 1179,
    text: "امیرالمومنین را هنگام مرگ می‌بینند",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 297,
    time: "19:42",
    seconds: 1182,
    text: "اما مقامشون نمی‌رسد به اینکه بخواهد",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 298,
    time: "19:45",
    seconds: 1185,
    text: "یه همچین مقوله‌ی بسیار غلیظ و",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 299,
    time: "19:49",
    seconds: 1189,
    text: "سنگینی را زیارت بکنند.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 300,
    time: "19:54",
    seconds: 1194,
    text: "دعواهم فیها سبحانک اللهم، و تحیتهم فیها سلام، وقتی به هم می‌رسند",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس",
    isVerseOrHadith: true
  },
  {
    id: 301,
    time: "20:01",
    seconds: 1201,
    text: "اسم خدا را می‌برند در تحیت‌شون، و آخر دعواهم، وقتی هم سفره را خواستند جمع کنند،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 302,
    time: "20:06",
    seconds: 1206,
    text: "ان الحمد لله رب العالمین، خدا را سپاس می‌کنند.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس",
    isVerseOrHadith: true
  },
  {
    id: 303,
    time: "20:10",
    seconds: 1210,
    text: "در بهشت هیچ گونه ذلتی نیست، فقط کافی‌ست شما چیزی بخواهید،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 304,
    time: "20:17",
    seconds: 1217,
    text: "فهم فی مشتهت انفسهم،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس",
    isVerseOrHadith: true
  },
  {
    id: 305,
    time: "20:20",
    seconds: 1220,
    text: "فقط اشتها پیدا کنند براشان مهیا می‌شود، هر نعمتی،",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 306,
    time: "20:25",
    seconds: 1225,
    text: "به قدرِ",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 307,
    time: "20:26",
    seconds: 1226,
    text: "قابلیت و ظرفیت‌شان.",
    sectionId: "proposition-2",
    sectionTitle: "گزاره دوم: آیه ۱۰ سوره یونس"
  },
  {
    id: 308,
    time: "20:33",
    seconds: 1233,
    text: "و بعد هم تو بهشت چند تا چیز پیدا نمی‌شه: یکی دستشویی پیدا نمی‌شه،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 309,
    time: "20:39",
    seconds: 1239,
    text: "یکی شما اگر",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 310,
    time: "20:40",
    seconds: 1240,
    text: "خواستید پیرمرد پیرزن پیدا کنید پیدا نمی‌شه،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 311,
    time: "20:44",
    seconds: 1244,
    text: "یکی آخوند پیدا نمی‌شه!",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 312,
    time: "20:46",
    seconds: 1246,
    text: "فردا خواستید حورتون رو",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 313,
    time: "20:48",
    seconds: 1248,
    text: "عقد کنید باید دربدر دنبال یه آخوند بگردید تا براتون عقد کنه،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 314,
    time: "20:53",
    seconds: 1253,
    text: "تو اونجا این سه تا پیدا نمی‌شه.",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 315,
    time: "20:58",
    seconds: 1258,
    text: "حالا در قالب مزاح.",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 316,
    time: "21:02",
    seconds: 1262,
    text: "ثم انشاناهن انشاء، آیه سوره مبارکه",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)",
    isVerseOrHadith: true
  },
  {
    id: 317,
    time: "21:05",
    seconds: 1265,
    text: "واقعه،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 318,
    time: "21:07",
    seconds: 1267,
    text: "این روایت آمده که حضرت رسول صلی الله علیه و آله و سلم آمدند مسجد،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 319,
    time: "21:12",
    seconds: 1272,
    text: "زودتر از اذان. بلال آمده بود اذان بگه، آمد خدمت حضرت: یا رسول الله",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 320,
    time: "21:19",
    seconds: 1279,
    text: "تا می‌آم اذان رو بگم،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 321,
    time: "21:21",
    seconds: 1281,
    text: "میشه دعا کنید خدا شهادت نصیب من بکنه؟",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 322,
    time: "21:24",
    seconds: 1284,
    text: "گفتند بلال برای چی؟ باشه من دعا بکنم،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 323,
    time: "21:28",
    seconds: 1288,
    text: "از شهادت چی می‌خوای؟ گفت یا رسول الله می‌ترسم از",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 324,
    time: "21:32",
    seconds: 1292,
    text: "اینکه گذشته‌های من در آینده‌ی من تأثیر بذاره،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 325,
    time: "21:35",
    seconds: 1295,
    text: "می‌خوام عاقبت‌به‌خیر بشم، می‌دونم شهادت دیگه یه‌راست با مغز وسط بهشتم،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 326,
    time: "21:40",
    seconds: 1300,
    text: "خدا دیگه کاری به گذشته‌ی من نداره.",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 327,
    time: "21:43",
    seconds: 1303,
    text: "فرمودند بلال من دعا هم بکنم میشه، اما نمی‌دونی که خدا سیاه‌ها رو بهشت نمی‌بره؟! ",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 328,
    time: "21:52",
    seconds: 1312,
    text: "همین قضیه با عباس عموی پیغمبر گذشت، همین قضیه با صفیه",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 329,
    time: "21:57",
    seconds: 1317,
    text: "عمه‌ی پیغمبر هم گذشت،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 330,
    time: "22:01",
    seconds: 1321,
    text: "در یک جلسه. بعد پیغمبر فرمودند که:",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 331,
    time: "22:05",
    seconds: 1325,
    text: "ثم انشاناهن",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)",
    isVerseOrHadith: true
  },
  {
    id: 332,
    time: "22:07",
    seconds: 1327,
    text: "انشاء، و خلقناهن",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)",
    isVerseOrHadith: true
  },
  {
    id: 333,
    time: "22:09",
    seconds: 1329,
    text: "ابکارا، عرباً",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)",
    isVerseOrHadith: true
  },
  {
    id: 334,
    time: "22:12",
    seconds: 1332,
    text: "اترابا.",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)",
    isVerseOrHadith: true
  },
  {
    id: 335,
    time: "22:14",
    seconds: 1334,
    text: "خدا پیرها را جوان می‌کنه می‌بره،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 336,
    time: "22:18",
    seconds: 1338,
    text: "زشت‌ها و بدگل‌ها رو سفید و خوشگل می‌کنه می‌بره،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 337,
    time: "22:24",
    seconds: 1344,
    text: "و خب اونجا همه یه شکلند دیگه، عمامه پیدا نمی‌کنید!",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 338,
    time: "22:28",
    seconds: 1348,
    text: "حالا این همه خدا وعده‌ی حور داده بهتون،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 339,
    time: "22:32",
    seconds: 1352,
    text: "ولی بعد می‌رید اونجا بدون صیغه کاری نمیشه کرد که!",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 340,
    time: "22:35",
    seconds: 1355,
    text: "البته فقط بشینید حسرتش رو بخورید تا من بیام!",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 341,
    time: "22:42",
    seconds: 1362,
    text: "بله.",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 342,
    time: "22:47",
    seconds: 1367,
    text: "این هم گزاره‌ی",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 343,
    time: "22:49",
    seconds: 1369,
    text: "سوم،",
    sectionId: "proposition-3",
    sectionTitle: "گزاره سوم: سوره واقعه و مزاح پیامبر (ص)"
  },
  {
    id: 344,
    time: "22:51",
    seconds: 1371,
    text: "گزاره چهار.",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 345,
    time: "22:55",
    seconds: 1375,
    text: "بعضی قائلند به اینکه این آیاتِ قرآن برای عربِ بادیه‌نشین فقط نازل شده، چون عرب",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 346,
    time: "23:02",
    seconds: 1382,
    text: "اون موقع",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 347,
    time: "23:04",
    seconds: 1384,
    text: "در یک بیابان برهوت زندگی می‌کرد، همین الانش هم،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 348,
    time: "23:09",
    seconds: 1389,
    text: "فقط شرقِ عربستان در طائفه",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 349,
    time: "23:13",
    seconds: 1393,
    text: "که یه مقدار سبزه،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 350,
    time: "23:15",
    seconds: 1395,
    text: "ولی مابقی همه بیغوله‌ست.",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 351,
    time: "23:19",
    seconds: 1399,
    text: "لذا اگر",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 352,
    time: "23:21",
    seconds: 1401,
    text: "عرب را ببرید در مازندران یا در گیلان،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 353,
    time: "23:26",
    seconds: 1406,
    text: "فکر می‌کنه شهید شده،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 354,
    time: "23:28",
    seconds: 1408,
    text: "اومده بهشت!",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 355,
    time: "23:32",
    seconds: 1412,
    text: "و وقتی می‌خوای مقایسه بکنی عرب‌ها در شهوت جنسی از چی خوششون می‌آد؟",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 356,
    time: "23:39",
    seconds: 1419,
    text: "از زنانی که حور العین باشند، اتراباً و و و و... بقیه‌ی اوصاف.",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 357,
    time: "23:45",
    seconds: 1425,
    text: "این آیات برای",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 358,
    time: "23:47",
    seconds: 1427,
    text: "عرب نازل شده. این حرفی‌ست که بعضی از مستشرقین اولین بار زدند، روسی،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 359,
    time: "23:54",
    seconds: 1434,
    text: "و بعد",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 360,
    time: "23:55",
    seconds: 1435,
    text: "ایرانی‌ها هم واگرفتند، این حرف مال این آزاده نیست،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 361,
    time: "23:59",
    seconds: 1439,
    text: "مال یک مستشرق روسیه.",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 362,
    time: "24:04",
    seconds: 1444,
    text: "به‌خاطر اینکه پهنه‌ی نعمت‌های بهشت را ندیده.",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 363,
    time: "24:07",
    seconds: 1447,
    text: "بهشت از اینجا شروع میشه،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 364,
    time: "24:10",
    seconds: 1450,
    text: "ولیکن بالاترین درجه از درجات بهشت اینا نیست.",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 365,
    time: "24:16",
    seconds: 1456,
    text: "می‌گن این هست برای بعضی،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 366,
    time: "24:18",
    seconds: 1458,
    text: "یه جایی که می‌رسی دیگه اصلاً حالش به هم می‌خوره، بعضی‌ها اصلاً حالشون به هم می‌خوره از",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 367,
    time: "24:24",
    seconds: 1464,
    text: "حور و قصور و",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 368,
    time: "24:26",
    seconds: 1466,
    text: "غلمان و امثالهم. خلوتی می‌خوان در کنجِ دنجی",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 369,
    time: "24:31",
    seconds: 1471,
    text: "بنشینند و فقط با خدای خودشون نجوا کنند، در حالی که این حرف را برای بعضی از متقین تو همین دنیا می‌زنن، می‌گن مگه ما خُلیم",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 370,
    time: "24:40",
    seconds: 1480,
    text: "که این دنیا رو ول کنیم بریم کنج دنج تو بهشت بنشینیم یا خدا بگیم، خب همین‌جا یا الله می‌گیم!",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 371,
    time: "24:47",
    seconds: 1487,
    text: "قابلیت",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 372,
    time: "24:49",
    seconds: 1489,
    text: "و ظرفیت، به اندازه‌ی قابلیت و ظرفیت.",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 373,
    time: "24:53",
    seconds: 1493,
    text: "ته قابلیت و ظرفیت الهی در آیه‌ی ۲۷ و ۳۰ فجر،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 374,
    time: "24:58",
    seconds: 1498,
    text: "یا ایتها النفس المطمئنة است که همه‌تون از برید،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه",
    isVerseOrHadith: true
  },
  {
    id: 375,
    time: "25:02",
    seconds: 1502,
    text: "ارجعی الی ربک",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه",
    isVerseOrHadith: true
  },
  {
    id: 376,
    time: "25:05",
    seconds: 1505,
    text: "راضیة مرضیة",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه",
    isVerseOrHadith: true
  },
  {
    id: 377,
    time: "25:07",
    seconds: 1507,
    text: "فادخلی فی عبادی",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه",
    isVerseOrHadith: true
  },
  {
    id: 378,
    time: "25:10",
    seconds: 1510,
    text: "وادخلی جنتی.",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه",
    isVerseOrHadith: true
  },
  {
    id: 379,
    time: "25:13",
    seconds: 1513,
    text: "کسانی که از نفسِ",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 380,
    time: "25:15",
    seconds: 1515,
    text: "سحّاره، مکّاره، امّاره، لوّامه",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 381,
    time: "25:20",
    seconds: 1520,
    text: "تا برسد به",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 382,
    time: "25:24",
    seconds: 1524,
    text: "عرض کنم",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 383,
    time: "25:26",
    seconds: 1526,
    text: "کامله، راضیه، مرضیه، مطمئنه، کامله",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 384,
    time: "25:31",
    seconds: 1531,
    text: "رهیدید،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 385,
    time: "25:33",
    seconds: 1533,
    text: "شما دیگه بهتون امر تکوینی می‌شود: یا ایتها النفس المطمئنة",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه",
    isVerseOrHadith: true
  },
  {
    id: 386,
    time: "25:41",
    seconds: 1541,
    text: "ارجعی، یعنی شما رو می‌کشن،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 387,
    time: "25:44",
    seconds: 1544,
    text: "نمی‌گن بفرما، می‌کشن‌تان",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 388,
    time: "25:47",
    seconds: 1547,
    text: "الی ربک، راضیة مرضیة، از تو اون بهشتی که هستی پاشو بیا،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 389,
    time: "25:53",
    seconds: 1553,
    text: "از مهمانسرا تو حرمسرا، تو بهشتِ خودم!",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 390,
    time: "25:57",
    seconds: 1557,
    text: "این بهشت اضافه به یای متکلم وحده شده.",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 391,
    time: "26:01",
    seconds: 1561,
    text: "لذا پیامبر اکرم در ذیل آیه آخر سوره‌ی مبارکه قمر",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 392,
    time: "26:07",
    seconds: 1567,
    text: "می‌فرمایند بعضی از اولیای خدا را فردای قیامت دنبالشون می‌گردید پیداشون نمی‌کنید،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 393,
    time: "26:15",
    seconds: 1575,
    text: "در صحرای محشر نیستند، روی پل صراط نیستند، تو غرف بهشت نیستند،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 394,
    time: "26:21",
    seconds: 1581,
    text: "هر چی هم طلبشون می‌کنید دستتون به دامانشون نمی‌رسد.",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 395,
    time: "26:25",
    seconds: 1585,
    text: "بعد یکی از اصحاب سؤال کرد یا رسول الله پس کجان؟",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 396,
    time: "26:30",
    seconds: 1590,
    text: "فرمودند عند ملیک مقتدر، ان المتقین فی جنات و نهر، این کف بهشته،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه",
    isVerseOrHadith: true
  },
  {
    id: 397,
    time: "26:37",
    seconds: 1597,
    text: "فی مقعد صدق، این وسطشه،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه",
    isVerseOrHadith: true
  },
  {
    id: 398,
    time: "26:40",
    seconds: 1600,
    text: "عند ملیک مقتدر، این بالاترین درجه‌ست،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه",
    isVerseOrHadith: true
  },
  {
    id: 399,
    time: "26:44",
    seconds: 1604,
    text: "این می‌شود جنتی، این بهشتِ خودمه.",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 400,
    time: "26:47",
    seconds: 1607,
    text: "فقط خودمم و خودت. بعضی از بهشتی‌ها همین الان تو دنیا",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 401,
    time: "26:51",
    seconds: 1611,
    text: "می‌گن فردا می‌خوایم بریم پیشِ خودِ خدا، هیچی هم بهت نمیدن، نه شرابی نه آبی فقط خودت یو خدا، می‌گن نخواستیم!",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 402,
    time: "27:00",
    seconds: 1620,
    text: "ظرفیتش همینه، کارش هم نمیشه کرد.",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 403,
    time: "27:03",
    seconds: 1623,
    text: "هیچ کارش نمیشه کرد،",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 404,
    time: "27:05",
    seconds: 1625,
    text: "الا به تبدل.",
    sectionId: "proposition-4",
    sectionTitle: "گزاره چهارم: رد ادعای مستشرق روسی و مراتب عالیه"
  },
  {
    id: 405,
    time: "27:12",
    seconds: 1632,
    text: "گزاره‌ی پنجم از گروه دو: مولانا امیرالمؤمنین صلوات الله علیه و آله و سلم در خطبه‌ی",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 406,
    time: "27:20",
    seconds: 1640,
    text: "۲۲۶ می‌فرمایند بچه‌های ندید بدید تازه به دوران رسیده دنیا،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 407,
    time: "27:27",
    seconds: 1647,
    text: "اون موقعی که می‌خواستید از",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 408,
    time: "27:29",
    seconds: 1649,
    text: "شکم مادرتون بیاید بیرون، خب نه ماه توی جای تنگ و تاریک و نمور، راحت،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 410,
    time: "27:36",
    seconds: 1656,
    text: "مثل این فضانوردها که تو هوا معلقند شما تو آب معلق بودید،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 411,
    time: "27:40",
    seconds: 1660,
    text: "نه زحمت خوردنی داشتید،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 412,
    time: "27:42",
    seconds: 1662,
    text: "نه دفعی داشتید، از یه ور می‌اومد از یه ور می‌رفت،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 413,
    time: "27:46",
    seconds: 1666,
    text: "حالا",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 414,
    time: "27:47",
    seconds: 1667,
    text: "می‌گن بیا بیرون.",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 415,
    time: "27:49",
    seconds: 1669,
    text: "شروع می‌کنی به گریه کردن، می‌خوای فرار بکنی، یه کنجی قایم می‌شی، پاتو می‌گیرن می‌کشن بیرون،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 416,
    time: "27:55",
    seconds: 1675,
    text: "حتی سر و ته هم که بشی کله‌تو می‌گیرن می‌کشن بیرون،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 417,
    time: "27:59",
    seconds: 1679,
    text: "بعد تا می‌آی بیرون،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 418,
    time: "28:02",
    seconds: 1682,
    text: "ندید بدیدِ تازه به دوران رسیده،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 419,
    time: "28:06",
    seconds: 1686,
    text: "همه‌ی ما این اتفاقات رو داشتیم، ما یادمون رفته،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 420,
    time: "28:09",
    seconds: 1689,
    text: "اومدیم به... اینجا چیه دیگه؟! چقدر چراغ هست، چقدر",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 421,
    time: "28:13",
    seconds: 1693,
    text: "آدم هست اینا، بعد چقدر چیزهای خوب، همه می‌بوسنمون، نازمون می‌کنن، اول یه دو سه تا می‌زنن",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 422,
    time: "28:19",
    seconds: 1699,
    text: "که نفس بکشیم بعد می‌بوسن و...",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 423,
    time: "28:24",
    seconds: 1704,
    text: "و اما وقتی پیر شدی، بزرگ شدی، می‌فهمی دار بالبلاء محفوفة،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 424,
    time: "28:33",
    seconds: 1713,
    text: "تو از یه رحمی رفتی توی یه رحم بزرگتر، هنوز متولد نشدی!",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 425,
    time: "28:38",
    seconds: 1718,
    text: "هنوز متولد نشدیم بعضی از ما!",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 426,
    time: "28:43",
    seconds: 1723,
    text: "دار بالبلاء محفوفة و بالغدر موصوفة،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 427,
    time: "28:48",
    seconds: 1728,
    text: "توی این",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 428,
    time: "28:50",
    seconds: 1730,
    text: "خانه و داری که هستی همه‌ش بلاست، تازه همه‌شم کلکه!",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 429,
    time: "28:55",
    seconds: 1735,
    text: "و بالغدر موصوفة، لا تدوم احوالها",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 430,
    time: "28:59",
    seconds: 1739,
    text: "و لا یسلم نزّالها،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 431,
    time: "29:02",
    seconds: 1742,
    text: "احوالات دنیا هیچ کدومش موندگار نیست،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 432,
    time: "29:06",
    seconds: 1746,
    text: "چه بسیار متمولی که صبح واجب الصدقه‌ست و بالعکس،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 433,
    time: "29:12",
    seconds: 1752,
    text: "و هیچ کس، کسی از کسانی که در دنیا آمده و سکنی گزیده این سالم نمونده.",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 434,
    time: "29:20",
    seconds: 1760,
    text: "احوال مختلفة و تارات متصرفة،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 435,
    time: "29:26",
    seconds: 1766,
    text: "العیش فیها مذموم،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 436,
    time: "29:28",
    seconds: 1768,
    text: "این آدمی‌ست که پیر و پخته شده. العیش، الان برای کدوم ما این‌طوریه؟ فکر کن فردا شب عروسیته،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 437,
    time: "29:36",
    seconds: 1776,
    text: "بعد یه مرتبه، این چیه آمریکا قبول میشن یهو؟...",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 438,
    time: "29:44",
    seconds: 1784,
    text: "مثلاً اونجا هم قبول شدی و بعد هم",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 439,
    time: "29:47",
    seconds: 1787,
    text: "می‌برنت اونجا و همون جا هم عیشه. حضرت می‌فرمایند العیش فیها مذموم!",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 440,
    time: "29:56",
    seconds: 1796,
    text: "عیش در دنیا، هر عیشی باشد در دنیا مذمت شده.",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 441,
    time: "30:01",
    seconds: 1801,
    text: "برای ما بچه‌های تازه به دوران رسیده‌ی ندید بدید این‌طوری نیست.",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 442,
    time: "30:06",
    seconds: 1806,
    text: "به همین خاطرم اگر بخوان ازمون بگیرن بگن بفرما برو بیرون، یعنی بفرما هم نمی‌زنن، پا رو می‌گیرن می‌کشن بیرون،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 443,
    time: "30:13",
    seconds: 1813,
    text: "گریه می‌کنیم. العیش فیها مذموم",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 444,
    time: "30:17",
    seconds: 1817,
    text: "و الامان منها معدوم، اصلاً تو دار دنیا فکر نکن امنیت داشته باشی، ابداً کسی امن نیست،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 445,
    time: "30:26",
    seconds: 1826,
    text: "حتی اگر بهترین، دیگه توصیفات",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 446,
    time: "30:30",
    seconds: 1830,
    text: "لازم نیست، بهترین جاهای محکم رو برای خودش هم بسازه و بهترین امکاناتِ دوام حیات را هم برای خودش",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 447,
    time: "30:40",
    seconds: 1840,
    text: "فراهم بکنه،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 448,
    time: "30:41",
    seconds: 1841,
    text: "الامان منها معدوم،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 449,
    time: "30:44",
    seconds: 1844,
    text: "انما اهلها فیها اغراض مستهدفة،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 450,
    time: "30:49",
    seconds: 1849,
    text: "همه‌ی کسانی که تو دنیا هستن اینا سیبلِ هدفِ مرگند.",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 451,
    time: "30:55",
    seconds: 1855,
    text: "اغراض مستهدفة،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 452,
    time: "30:57",
    seconds: 1857,
    text: "ترمیهم بسهامها،",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 453,
    time: "30:59",
    seconds: 1859,
    text: "که مرگ داره",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 454,
    time: "31:01",
    seconds: 1861,
    text: "و دنیا داره با تیرهای خودش آن‌ها رو",
    sectionId: "proposition-5",
    sectionTitle: "گزاره پنجم: خطبه ۲۲۶ نهج‌البلاغه"
  },
  {
    id: 455,
    time: "31:04",
    seconds: 1864,
    text: "هدف قرار میده. گزاره‌ی ششم از همین",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 456,
    time: "31:09",
    seconds: 1869,
    text: "گروه دوم:",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 457,
    time: "31:11",
    seconds: 1871,
    text: "مولانا، داریم آیه ۱۵ تا ۱۷ آل عمران رو می‌گیما که در وصف حضرت امیر آمده،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 458,
    time: "31:17",
    seconds: 1877,
    text: "معلوم میشه کی رسیده به تهِ",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 459,
    time: "31:20",
    seconds: 1880,
    text: "تقوایی که خیر است از کل دنیا و می‌رسد به تهِ جنات.",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 460,
    time: "31:27",
    seconds: 1887,
    text: "ما الان کجای راهیم؟",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 461,
    time: "31:30",
    seconds: 1890,
    text: "من و شما مصادیق",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 462,
    time: "31:32",
    seconds: 1892,
    text: "للذین اتقوا عند ربهم جنات هستیم،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸",
    isVerseOrHadith: true
  },
  {
    id: 463,
    time: "31:37",
    seconds: 1897,
    text: "قانت هستیم، مستغفر هستیم، منفق هستیم،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 464,
    time: "31:41",
    seconds: 1901,
    text: "اما هنوز به این درجه نرسیدیم.",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 465,
    time: "31:46",
    seconds: 1906,
    text: "گزاره‌ی پنجم، گزاره‌ی ششم: سیدنا الرسول صلی الله علیه و آله و سلم در جلد ۵۸ بحار",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 466,
    time: "31:55",
    seconds: 1915,
    text: "صفحه‌ی ۷۸",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 467,
    time: "31:58",
    seconds: 1918,
    text: "می‌فرمایند هیچ کاری با",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 468,
    time: "32:01",
    seconds: 1921,
    text: "پیر پخته‌ای که به ته سلوک رسیده نداشته باشید،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 469,
    time: "32:07",
    seconds: 1927,
    text: "بشینید با عقل یونانی خودتون نه، بلکه با عقل ایمانی و فطری خودتون اندیشه کنید:",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 470,
    time: "32:16",
    seconds: 1936,
    text: "خدای تبارک و تعالی شما رو برای این ساخته است که بیاید تو دنیا",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 471,
    time: "32:21",
    seconds: 1941,
    text: "لذتی ببرید، عیشی ببرید،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 472,
    time: "32:24",
    seconds: 1944,
    text: "یه عشق‌بازی‌ای بکنید با دنیا، دنیا هم با شما و بعد هم پاشید برید همه‌چیز تمام؟",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 473,
    time: "32:30",
    seconds: 1950,
    text: "فانی؟",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 474,
    time: "32:31",
    seconds: 1951,
    text: "همه چیز تمام؟ با عقل فطری، عقل فطری مال کسانی‌ست که کاملاً پاک‌روانند،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 475,
    time: "32:38",
    seconds: 1958,
    text: "یعنی هیچی هیچی، دارید دور و برتون، نگاه بکنید،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 476,
    time: "32:44",
    seconds: 1964,
    text: "ابداً از دار دنیا هیچ‌چیزی از سواد و تخصص و این‌ها ندارن، روانشون پاکِ پاک،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 477,
    time: "32:51",
    seconds: 1971,
    text: "این میشه عقل فطری، ایمانی.",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 478,
    time: "32:54",
    seconds: 1974,
    text: "به این بگی تو دنیا اومدی برای این چند صباح لذت،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 479,
    time: "32:59",
    seconds: 1979,
    text: "او تکذیب می‌کنه،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 480,
    time: "33:01",
    seconds: 1981,
    text: "همه این رو درک می‌کنید: ما خلقتم",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸",
    isVerseOrHadith: true
  },
  {
    id: 481,
    time: "33:03",
    seconds: 1983,
    text: "للفناء",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸",
    isVerseOrHadith: true
  },
  {
    id: 482,
    time: "33:04",
    seconds: 1984,
    text: "بل خلقتم للبقاء،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸",
    isVerseOrHadith: true
  },
  {
    id: 483,
    time: "33:07",
    seconds: 1987,
    text: "شما نیامدید برای فانی شدن، بلکه آمدید برای ماندن،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 484,
    time: "33:12",
    seconds: 1992,
    text: "و انما تنقلون من دار الی دار، فقط از رحمی به رحم دیگر می‌روید.",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸",
    isVerseOrHadith: true
  },
  {
    id: 485,
    time: "33:20",
    seconds: 2000,
    text: "حالا خوش به حال اون کسانی که",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 486,
    time: "33:22",
    seconds: 2002,
    text: "از رحم مادر آمدن توی این دنیا،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 487,
    time: "33:25",
    seconds: 2005,
    text: "و بعد تو همین دنیا متولد می‌شوند می‌روند در آخرت!",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 488,
    time: "33:30",
    seconds: 2010,
    text: "دنیاشون آخرتشونه،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 489,
    time: "33:33",
    seconds: 2013,
    text: "آخرتشون در زمان حیاتشون شروع میشه، نه با مرگشون.",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 490,
    time: "33:39",
    seconds: 2019,
    text: "یکی از اصحاب حضرت صادق علیه الصلاة و السلام",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 491,
    time: "33:43",
    seconds: 2023,
    text: "یا بنابر نقلی حضرت امیر، هر دو نقل هست،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 492,
    time: "33:47",
    seconds: 2027,
    text: "حضرت بهش فرمودند که این خانه‌ی بزرگ را، خودت یا برادرت، برای چی می‌خوای؟",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 493,
    time: "33:53",
    seconds: 2033,
    text: "فقط تویی و یه پاره تن با خانمت، یه مقدار لباس و یه مقدار خوراک،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 494,
    time: "33:58",
    seconds: 2038,
    text: "مگر اینکه این خانه‌ی به این بزرگی",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 495,
    time: "34:01",
    seconds: 2041,
    text: "را مقدمه بکنی برای مهمانداری، مهمان‌نوازی،",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 496,
    time: "34:05",
    seconds: 2045,
    text: "عیش و عشرت دیگران و و و، اون موقع دیگه دنیا نیست، این می‌شود آخرتِ تو.",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 497,
    time: "34:12",
    seconds: 2052,
    text: "بعضی‌ها تو خانه‌ی بزرگشون آخرت دارند، بعضی‌ها تو خانه‌ی کوچیکشون جهنم دارند!",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 498,
    time: "34:20",
    seconds: 2060,
    text: "هنوز متولد نشدند.",
    sectionId: "proposition-6",
    sectionTitle: "گزاره ششم: روایت بحارالانوار جلد ۵۸"
  },
  {
    id: 499,
    time: "34:24",
    seconds: 2064,
    text: "گزاره‌ی هفتم:",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 500,
    time: "34:26",
    seconds: 2066,
    text: "مولانا امیرالمؤمنین،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 501,
    time: "34:27",
    seconds: 2067,
    text: "صلوات الله علیه و آله و سلم،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 502,
    time: "34:31",
    seconds: 2071,
    text: "خطبه‌ی ۸۲",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 503,
    time: "34:33",
    seconds: 2073,
    text: "نهج‌البلاغه:",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 504,
    time: "34:37",
    seconds: 2077,
    text: "این حرف رو",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 505,
    time: "34:40",
    seconds: 2080,
    text: "وقتی من می‌زنم،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 506,
    time: "34:43",
    seconds: 2083,
    text: "اونایی که به من نزدیکند می‌فهمند که",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 507,
    time: "34:47",
    seconds: 2087,
    text: "بوی شیر میده این حرف! یعنی یه بچه‌ی",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 508,
    time: "34:52",
    seconds: 2092,
    text: "تازه از شیر گرفته شده",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 509,
    time: "34:56",
    seconds: 2096,
    text: "که هنوز دهنش بوی شیر میده،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 510,
    time: "35:00",
    seconds: 2100,
    text: "آمده در مورد کباب داره حرف می‌زنه!",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 511,
    time: "35:05",
    seconds: 2105,
    text: "اون کسانی که از من دورند",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 512,
    time: "35:08",
    seconds: 2108,
    text: "و مرا با ائمه اشتباه گرفتند به خاطر تشابه‌های ظاهری و صوری،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 513,
    time: "35:15",
    seconds: 2115,
    text: "فکر می‌کنند این حرف‌ها به ما می‌آد.",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 514,
    time: "35:18",
    seconds: 2118,
    text: "این حرف‌ها را حضرت امیری داره می‌فرماید",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 515,
    time: "35:23",
    seconds: 2123,
    text: "که نهایت دنیا را چندین و چند بار چشیدند.",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 516,
    time: "35:29",
    seconds: 2129,
    text: "شما اگر سفر بکنید به یک سرزمینی که تا به حال نرفتید،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 517,
    time: "35:34",
    seconds: 2134,
    text: "مسلماً بلدچی می‌خواید، علاوه بر پاسپورت و پول و زبانی که لازم دارید،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 518,
    time: "35:40",
    seconds: 2140,
    text: "یک بلدچی‌ای می‌خواید که جاهای ناشناخته را",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 519,
    time: "35:43",
    seconds: 2143,
    text: "بشناسه و شما را ببره. حضرت امیر چندین بار",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 520,
    time: "35:47",
    seconds: 2147,
    text: "این مسیر را طی کرده،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 521,
    time: "35:49",
    seconds: 2149,
    text: "و می‌فرماید این دنیایی که دارید خودتون رو به خاطرش می‌کشید",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 522,
    time: "35:53",
    seconds: 2153,
    text: "و تو سر و کله‌تون می‌زنید، ما اصف من دار،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 523,
    time: "35:57",
    seconds: 2157,
    text: "چی براتون وصف کنم؟! ",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 524,
    time: "36:00",
    seconds: 2160,
    text: "ما اصف من دار،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 525,
    time: "36:02",
    seconds: 2162,
    text: "شما تنقلون من دار الی دار، اومدین از یک رحمی به رحم دیگر بروید،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 526,
    time: "36:07",
    seconds: 2167,
    text: "من چه وصف بکنم از داری که اولها عناء",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 527,
    time: "36:11",
    seconds: 2171,
    text: "و آخرها فناء؟",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 528,
    time: "36:15",
    seconds: 2175,
    text: "اول این",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 529,
    time: "36:17",
    seconds: 2177,
    text: "دنیا درد است،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 530,
    time: "36:19",
    seconds: 2179,
    text: "آخرش هم از بین رفتن همه چیز،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 531,
    time: "36:22",
    seconds: 2182,
    text: "هیچ چیز در دنیا برای ما",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 532,
    time: "36:27",
    seconds: 2187,
    text: "نمانده و نخواهد ماند،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 533,
    time: "36:32",
    seconds: 2192,
    text: "حتی وابستگیمون به خودمون،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 534,
    time: "36:36",
    seconds: 2196,
    text: "وابستگیمون... شما می‌تونید تصور بکنید خودتون را از",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 535,
    time: "36:41",
    seconds: 2201,
    text: "مهندسی سیستم",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 536,
    time: "36:44",
    seconds: 2204,
    text: "حالا سخت‌افزاری و نرم‌افزاری",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 537,
    time: "36:48",
    seconds: 2208,
    text: "رایانه،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 538,
    time: "36:51",
    seconds: 2211,
    text: "تا",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 539,
    time: "36:53",
    seconds: 2213,
    text: "مسابقات ملی والیبال، تا مسابقات ملی مثلاً",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 540,
    time: "36:58",
    seconds: 2218,
    text: "قایق‌سواری، تا",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 541,
    time: "37:00",
    seconds: 2220,
    text: "تهش",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 542,
    time: "37:02",
    seconds: 2222,
    text: "کارمند یک کاباره؟",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 543,
    time: "37:05",
    seconds: 2225,
    text: "می‌تونید تصور کنید؟",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 544,
    time: "37:08",
    seconds: 2228,
    text: "آن‌قدر چسبیدید به",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 545,
    time: "37:13",
    seconds: 2233,
    text: "نقشی که دارید بازی می‌کنید بعد از ۳۰ سال،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 546,
    time: "37:17",
    seconds: 2237,
    text: "که نمی‌تونید اصلاً تصور کنید امکان داره من یه زمانی",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 547,
    time: "37:22",
    seconds: 2242,
    text: "کارگر و کارمند یک کاباره باشم؟",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 548,
    time: "37:26",
    seconds: 2246,
    text: "نمی‌تونم.",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 549,
    time: "37:28",
    seconds: 2248,
    text: "من نمی‌تونم از نقش خودم فاصله بگیرم.",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 550,
    time: "37:34",
    seconds: 2254,
    text: "در حالی که این نقش هم از بین رفتنی‌ست.",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 551,
    time: "37:38",
    seconds: 2258,
    text: "آخرها فناء. با اینکه من ۳۰، ۴۰، ۵۰، ۶۰، ۷۰ سال",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 552,
    time: "37:43",
    seconds: 2263,
    text: "با این نقش درآمیختم، به گونه‌ای که در تار و پود وجودی من فرو رفته،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 553,
    time: "37:49",
    seconds: 2269,
    text: "ولی آخرش این ماسکه، این ماسک با من یکی شده،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 554,
    time: "37:53",
    seconds: 2273,
    text: "من چیزی غیر از این ماسکم، غیر از این نقابم،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 555,
    time: "37:57",
    seconds: 2277,
    text: "این نقاب شغل چند ده ساله‌ی منه",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 556,
    time: "38:00",
    seconds: 2280,
    text: "که من نمی‌تونم از خودم منفکش کنم، و آخره فناء، همه چیز در دار دنیا از بین میره.",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 557,
    time: "38:07",
    seconds: 2287,
    text: "من می‌تونم تصور کنم از پدر و مادری دیگر،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 558,
    time: "38:12",
    seconds: 2292,
    text: "از خانه‌ی خاکی، خونی دیگر حتی،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 559,
    time: "38:17",
    seconds: 2297,
    text: "اما نمی‌تونم از منی دیگر، لذا به من بگن بیا از نقشت فاصله بگیر،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 560,
    time: "38:23",
    seconds: 2303,
    text: "منِ آدمِ سر و سنگین",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 561,
    time: "38:25",
    seconds: 2305,
    text: "که همیشه نقش فیلم‌های مثلاً دراماتیک را بازی می‌کردم،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 562,
    time: "38:31",
    seconds: 2311,
    text: "بیان ببرن من را در یک فیلمی نقش رومانتیک به من بدن،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 563,
    time: "38:36",
    seconds: 2316,
    text: "باز هم می‌تونم بازی کنم، بگن بیا کمیک بازی کن!",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 564,
    time: "38:41",
    seconds: 2321,
    text: "می‌تونی؟",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 565,
    time: "38:45",
    seconds: 2325,
    text: "و آخرها فناء، ما اصف من دار، من برای شما از چه داری که دارید منتقل می‌شید ازش به جای دیگه،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 566,
    time: "38:53",
    seconds: 2333,
    text: "توصیف بکنم که همه‌ش از شما گرفته خواهد شد؟ شد. فی حلالها حساب",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 567,
    time: "38:59",
    seconds: 2339,
    text: "و فی حرامها عقاب،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 568,
    time: "39:03",
    seconds: 2343,
    text: "من استغنی فیها فتن",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 569,
    time: "39:06",
    seconds: 2346,
    text: "و من افتقر فیها حزن.",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 570,
    time: "39:10",
    seconds: 2350,
    text: "در دار دنیا",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 571,
    time: "39:12",
    seconds: 2352,
    text: "اگر کسی",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 572,
    time: "39:14",
    seconds: 2354,
    text: "می‌خواد مرد بشناسه،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 573,
    time: "39:18",
    seconds: 2358,
    text: "مرد را با جیبش بشناسه.",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 574,
    time: "39:22",
    seconds: 2362,
    text: "مردی که جیبش خالیه و خوش‌اخلاقه واقعاً مرده!",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 575,
    time: "39:27",
    seconds: 2367,
    text: "مرد اگر جیبش",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 576,
    time: "39:29",
    seconds: 2369,
    text: "خالی شد",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 577,
    time: "39:30",
    seconds: 2370,
    text: "غالباً بداخلاقه.",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 578,
    time: "39:34",
    seconds: 2374,
    text: "اگر می‌خواد زن رو بشناسه،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 579,
    time: "39:37",
    seconds: 2377,
    text: "مقابل طلافروشی بشناسه.",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 580,
    time: "39:44",
    seconds: 2384,
    text: "فی حلالها حساب و فی حرامها عقاب، در ذره‌ذره حلالی که به دست آوردی خوبِ خوبش،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 581,
    time: "39:52",
    seconds: 2392,
    text: "میان حساب می‌کشن، با تهش کار نداریم که به فضلشون بهشت می‌برن،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 582,
    time: "39:58",
    seconds: 2398,
    text: "ولی حساب می‌کشن. این چه داری‌ست؟! ما اصف من دار، من چی توصیف بکنم از این دار برای شما",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 583,
    time: "40:05",
    seconds: 2405,
    text: "که حتی اگر خوبِ خوبش هم برید از ذره‌ذره حلال",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 584,
    time: "40:09",
    seconds: 2409,
    text: "حساب و از حرامش عقاب می‌کشن. من استغنی فیها فتن، هر کسی پولدار شد",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 585,
    time: "40:16",
    seconds: 2416,
    text: "سر جلسه امتحان نشسته، و من افتقر فیها حزن، هر کسی هم که فقیر شد محزونه.",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 586,
    time: "40:23",
    seconds: 2423,
    text: "و من ساعاها فاتتّه و من قعدها اتته، دنیای عجیب‌غریبی‌ست:",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 587,
    time: "40:30",
    seconds: 2430,
    text: "چه بسیار کسانی که دنبال دنیا دویدند،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 588,
    time: "40:33",
    seconds: 2433,
    text: "دنیا ازشون در رفت،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 589,
    time: "40:35",
    seconds: 2435,
    text: "و چه بسیار کسانی که نشستند، دنیا آمد رو سرشون هوار شد، بهشون رسید.",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 590,
    time: "40:42",
    seconds: 2442,
    text: "و من ابصر بها بصّرته و من ابصر الیها اعمته،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه",
    isVerseOrHadith: true
  },
  {
    id: 591,
    time: "40:47",
    seconds: 2447,
    text: "کسانی که مثل خورشید زل زدند به دنیا کورشون کرد،",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 592,
    time: "40:51",
    seconds: 2451,
    text: "و کسانی که سر به زیر بودند، سرشون رو زیر انداختن، از نور خور",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 593,
    time: "40:56",
    seconds: 2456,
    text: "استفاده کردن برای اینکه راهشون را پیدا بکنند، به راهشون",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 594,
    time: "41:01",
    seconds: 2461,
    text: "رسیدند.",
    sectionId: "proposition-7",
    sectionTitle: "گزاره هفتم: خطبه ۸۲ نهج‌البلاغه"
  },
  {
    id: 595,
    time: "41:04",
    seconds: 2464,
    text: "جمع این آیات و روایات",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 596,
    time: "41:07",
    seconds: 2467,
    text: "در هفت گزینه",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 597,
    time: "41:09",
    seconds: 2469,
    text: "در گروه دوم و دو گزینه در گروه اول",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 598,
    time: "41:13",
    seconds: 2473,
    text: "نشان می‌دهد",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 599,
    time: "41:15",
    seconds: 2475,
    text: "این",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 600,
    time: "41:16",
    seconds: 2476,
    text: "بهشتی که خدای تبارک و تعالی",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 601,
    time: "41:19",
    seconds: 2479,
    text: "بهتر از دار دنیا",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 602,
    time: "41:21",
    seconds: 2481,
    text: "به همه‌ی من و شما",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 603,
    time: "41:23",
    seconds: 2483,
    text: "وعده داده هست، تهِ تهش به اون کسی می‌رسد",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 604,
    time: "41:27",
    seconds: 2487,
    text: "که اندازه‌ی آب بینی بز به دنیا توجه نکند!",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 605,
    time: "41:33",
    seconds: 2493,
    text: "و روی زمین هیچ‌کس جز امیرالمؤمنین صلوات الله علیه و آله و سلم",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 606,
    time: "41:38",
    seconds: 2498,
    text: "نبوده و نخواهد بود، اندازه آب بینی بز!",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 607,
    time: "41:43",
    seconds: 2503,
    text: "در جای دیگری می‌فرماید در منزل ذی‌قار به عبدالله بن عباس",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 608,
    time: "41:49",
    seconds: 2509,
    text: "نعلین پر از وصله.",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 609,
    time: "41:53",
    seconds: 2513,
    text: "در جای دیگر می‌فرماید استخوان خوک",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 610,
    time: "41:57",
    seconds: 2517,
    text: "دست آدم جذامی.",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 611,
    time: "42:00",
    seconds: 2520,
    text: "این دنیایی که ما داریم تو سر و کله‌مون می‌زنیم",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 612,
    time: "42:04",
    seconds: 2524,
    text: "برای علی بن ابی‌طالب تهش اینه: استخوان خوک",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 613,
    time: "42:09",
    seconds: 2529,
    text: "دست انسان جذامی.",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 614,
    time: "42:13",
    seconds: 2533,
    text: "حالا پیداست بهشت این حضرت فردای قیامت کجاست؟ عند ملیک مقتدر، ابداً ما دستمان",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی",
    isVerseOrHadith: true
  },
  {
    id: 615,
    time: "42:21",
    seconds: 2541,
    text: "به دامان زیارت حضرتش فردای قیامت نخواهد رسید",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 616,
    time: "42:25",
    seconds: 2545,
    text: "الا به قدر قابلیت و ظرفیت. این قابلیت و ظرفیت را تو همین دنیا هم",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  },
  {
    id: 617,
    time: "42:31",
    seconds: 2551,
    text: "می‌تونیم محک بزنیم که آیا داریم ان شاء الله الرحمن یا نه.",
    sectionId: "conclusion",
    sectionTitle: "جمع‌بندی نهایی و کلام پایانی"
  }
];

export const SCRIPTURE_REFERENCES: ScriptureReference[] = [
  {
    title: "آیات ۱۵ تا ۱۷ سوره آل‌عمران",
    source: "قرآن کریم، سوره آل‌عمران، آیات ۱۵، ۱۶ و ۱۷",
    category: "قرآن",
    quote: "قُلْ أَؤُنَبِّئُكُمْ بِخَيْرٍ مِنْ ذَٰلِكُمْ لِلَّذِينَ اتَّقَوْا عِنْدَ رَبِّهِمْ جَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا وَأَزْوَاجٌ مُطَهَّرَةٌ وَرِضْوَانٌ مِنَ اللَّهِ وَاللَّهُ بَصِيرٌ بِالْعِبَادِ * الَّذِينَ يَقُولُونَ رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ * الصَّابِرِينَ وَالصَّادِقِينَ وَالْقَانِتِينَ وَالْمُنْفِقِينَ وَالْمُسْتَغْفِرِينَ بِالْأَسْحَارِ",
    context: "مبنای اصلی بحث سخنران در مورد مقوله مشکک تقوا، خیر، جنات و شأن نزول در حق حضرت امیر (ع)، حمزه و عبیدة بن الحارث."
  },
  {
    title: "آیه ۷۲ سوره توبه",
    source: "قرآن کریم، سوره توبه، آیه ۷۲",
    category: "قرآن",
    quote: "وَعَدَ اللَّهُ الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ جَنَّاتٍ تَجْرِي مِنْ تَحْتِهَا الْأَنْهَارُ خَالِدِينَ فِيهَا وَمَسَاكِنَ طَيِّبَةً فِي جَنَّاتِ عَدْنٍ وَرِضْوَانٌ مِنَ اللَّهِ أَكْبَرُ ذَٰلِكَ هُوَ الْفَوْزُ الْعَظِيمُ",
    context: "شاهد برای عدم انحصار خطاب به مردان، تجرد نسبی روح از ماده و جنسیت، و برتری رضوان الهی از تمام جنات."
  },
  {
    title: "آیه ۷۷ سوره نساء (گزاره اول)",
    source: "قرآن کریم، سوره نساء، آیه ۷۷",
    category: "قرآن",
    quote: "قُلْ مَتَاعُ الدُّنْيَا قَلِيلٌ وَالْآخِرَةُ خَيْرٌ لِمَنِ اتَّقَىٰ",
    context: "گزاره اول بخش دوم: متاع دنیا اندک است و آخرت برای اهل تقوا در مقام اثبات بهتر است."
  },
  {
    title: "آیه ۱۰ سوره یونس (گزاره دوم)",
    source: "قرآن کریم، سوره یونس، آیه ۱۰",
    category: "قرآن",
    quote: "دَعْوَاهُمْ فِيهَا سُبْحَانَكَ اللَّهُمَّ وَتَحِيَّتُهُمْ فِيهَا سَلَامٌ وَآخِرُ دَعْوَاهُمْ أَنِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    context: "گزاره دوم: اذکار سه گانه بهشتیان، نفی ذلت از بهشت و تمثیل تشنگی در محضر علامه طباطبایی و آیت الله جوادی آملی."
  },
  {
    title: "آیات ۳۵ تا ۳۸ سوره واقعه (گزاره سوم)",
    source: "قرآن کریم، سوره واقعه، آیات ۳۵-۳۸",
    category: "قرآن",
    quote: "إِنَّا أَنْشَأْنَاهُنَّ إِنْشَاءً * فَجَعَلْنَاهُنَّ أَبْكَارًا * عُرُبًا أَتْرَابًا",
    context: "گزاره سوم: ماجرای درخواست بلال حبشی برای شهادت و شوخی و ملاطفت پیامبر اکرم (ص) با پیرزنان و تبدیل به جوانان در بهشت."
  },
  {
    title: "آیات ۲۷ تا ۳۰ سوره فجر (گزاره چهارم)",
    source: "قرآن کریم، سوره فجر، آیات ۲۷-۳۰",
    category: "قرآن",
    quote: "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ * ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَرْضِيَّةً * فَادْخُلِي فِي عِبَادِي * وَادْخُلِي جَنَّتِي",
    context: "گزاره چهارم: رد ادعای مادی بودن بهشت از سوی مستشرق روسی؛ مراتب نفس تا مطمئنه و دخول در بهشت اختصاصی «جَنَّتِي»."
  },
  {
    title: "آیات ۵۴ و ۵۵ سوره قمر",
    source: "قرآن کریم، سوره قمر، آیات ۵۴ و ۵۵",
    category: "قرآن",
    quote: "إِنَّ الْمُتَّقِينَ فِي جَنَّاتٍ وَنَهَرٍ * فِي مَقْعَدِ صِدْقٍ عِنْدَ مَلِيكٍ مُقْتَدِرٍ",
    context: "تبیین درجات سه‌گانه بهشت: کف بهشت (جنات و نهر)، وسط بهشت (مقعد صدق) و اوج بهشت (عند ملیک مقتدر)."
  },
  {
    title: "خطبه ۲۲۶ نهج‌البلاغه (گزاره پنجم)",
    source: "نهج‌البلاغه، خطبه ۲۲۶",
    category: "نهج‌البلاغه",
    quote: "دَارٌ بِالْبَلَاءِ مَحْفُوفَةٌ، وَبِالْغَدْرِ مَوْصُوفَةٌ، لَا تَدُومُ أَحْوَالُهَا، وَلَا يَسْلَمُ نُزَّالُهَا، أَحْوَالٌ مُخْتَلِفَةٌ، وَتَارَاتٌ مُتَصَرِّفَةٌ، الْعَيْشُ فِيهَا مَذْمُومٌ، وَالْأَمَانُ مِنْهَا مَعْدُومٌ، وَإِنَّمَا أَهْلُهَا فِيهَا أَغْرَاضٌ مُسْتَهْدَفَةٌ، تَرْمِيهِمْ بِسِهَامِهَا...",
    context: "گزاره پنجم: تمثیل جنین در رحم مادر و تولد در دنیای فریبنده؛ بیزاری از دلبستگی به دنیا و سیبل تیرهای مرگ بودن اهل دنیا."
  },
  {
    title: "روایت بحارالانوار جلد ۵۸ صفحه ۷۸ (گزاره ششم)",
    source: "بحارالانوار، علامه مجلسی، ج ۵۸، ص ۷۸",
    category: "حدیث و کتب روایی",
    quote: "مَا خُلِقْتُمْ لِلْفَنَاءِ بَلْ خُلِقْتُمْ لِلْبَقَاءِ، وَإِنَّمَا تُنْقَلُونَ مِنْ دَارٍ إِلَى دَارٍ",
    context: "گزاره ششم: فراخوان به تفکر با عقل فطری و ایمانی؛ انسان برای ماندگاری آفریده شده و انتقال از رحمی به رحم دیگر است."
  },
  {
    title: "خطبه ۸۲ نهج‌البلاغه (گزاره هفتم)",
    source: "نهج‌البلاغه، خطبه ۸۲ (معروف به خطبه غراء)",
    category: "نهج‌البلاغه",
    quote: "مَا أَصِفُ مِنْ دَارٍ أَوَّلُهَا عَنَاءٌ، وَآخِرُهَا فَنَاءٌ! فِي حَلَالِهَا حِسَابٌ، وَفِي حَرَامِهَا عِقَابٌ، مَنِ اسْتَغْنَى فِيهَا فُتِنَ، وَمَنِ افْتَقَرَ فِيهَا حَزِنَ، وَمَنْ سَاعَاهَا فَاتَتْهُ، وَمَنْ قَعَدَ عَنْهَا أَتَتْهُ، وَمَنْ أَبْصَرَ بِهَا بَصَّرَتْهُ، وَمَنْ أَبْصَرَ إِلَيْهَا أَعْمَتْهُ.",
    context: "گزاره هفتم: اعتراف به بوی شیر دادن سخنان ما در برابر کباب معرفت علی (ع)؛ نقش‌ها و نقاب‌های دنیا، حساب در حلال و عقاب در حرام."
  },
  {
    title: "شواهد التنزیل حاکم حسکانی (جلد ۱ صفحه ۲۵۲)",
    source: "شواهد التنزیل لقواعد التفضیل، حاکم حسکانی، ج ۱، ص ۲۵۲",
    category: "حدیث و کتب روایی",
    quote: "عن ابن عباس فی قوله تعالی: «لِلَّذِينَ اتَّقَوْا عِنْدَ رَبِّهِمْ جَنَّاتٌ...» قال: نزلت فی علی و حمزة و عبیدة بن الحارث",
    context: "استناد به نقل ابن عباس از شأن نزول آیات آل‌عمران در حق امیرالمؤمنین، حضرت حمزه و عبیدة بن الحارث در منابع اهل سنت."
  },
  {
    title: "تشبیهات دنیا نزد امیرالمؤمنین (ع)",
    source: "نهج‌البلاغه، خطبه ۳ (شقشقیه)، حکمت ۲۳۶ و منابع روایی",
    category: "نهج‌البلاغه",
    quote: "«عَفْطَةِ عَنْزٍ» (آب بینی بز)، «نَعْلٌ مَخْصُوفَةٌ» (کفش کهنه پر از وصله در منزل ذی‌قار)، «عَرْقِ خِنْزِيرٍ فِي يَدِ مَجْذُومٍ» (استخوان خوک در دست جذامی)",
    context: "جمع‌بندی پایانی: حقیقت دنیا در دیدگاه علی بن ابی‌طالب (ع) و اینکه رسیدن به اوج بهشت مشروط به بی‌رغبتی به این دنیای حقیر است."
  }
];

export const FULL_VERBATIM_TEXT: string = TRANSCRIPT_SEGMENTS.map(s => s.text).join(" ");
