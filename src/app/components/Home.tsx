import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";
import imgGrowCenterLogo from "figma:asset/48010cd5f7619e67f2d00d3ffee3cc006415de36.png";
import imgModel11 from "figma:asset/71a5b8d8103522d4a2f4650209dc5dc0cffbfbcb.png";
import imgChat3D1 from "figma:asset/36c6962c907c5b86f7d4ca23a40a4cc751356d2e.png";
import imgTranslate3D1 from "figma:asset/eb8a165497607f2e35af268ab5df2c8186237046.png";
import imgBookD1 from "figma:asset/6e7d091e29c3c7d62673a1db115bae7fec48c1b1.png";
import imgModel23 from "figma:asset/49d23a37262d2dec010fb5bd77a7eb0542d47c5b.png";
import imgModel32 from "figma:asset/0134cc7de2313963050c4487bed0ec2da6cdda2b.png";
import imgImage8 from "figma:asset/bd1315e8fddddee49299145d3734e510f55e7e95.png";
import imgModel42 from "figma:asset/fdf521df3c9029ce625a6e5fd71d4d5a55e43f75.png";
import imgBoyBringTablet2 from "figma:asset/cb806148747e637473eb77e40bfafd857dc6e7c8.png";
import imgCertificate3D1 from "figma:asset/2e3b230148a4e2d4b7402a3b7f6e0eb4d5422c1a.png";
import imgBook23D1 from "figma:asset/e456ae67d17382fe6ff672ac9b151ee2a4c1add3.png";
import { imgModel22, imgModel31, imgModel41, imgBoyBringTablet1 } from "../../imports/svg-ebmhr";

const COURSES = [
  { id: "kids", icon: imgBook23D1, price: "250,000", color: "#ECF4C3", key: "kidsTeen" },
  { id: "general", icon: imgCertificate3D1, price: "400,000", color: "#BFDB38", key: "generalEnglish" },
  { id: "exam", icon: imgChat3D1, price: "900,000", color: "#162947", key: "examPrep" },
  { id: "business", icon: imgTranslate3D1, price: "500,000", color: "#ECF4C3", key: "businessEnglish" },
];

const EVENTS = [
  {
    id: "speech-contest",
    img: "https://images.unsplash.com/photo-1567057420215-0afa9aa9253a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    date: "March 15, 2026",
    key: "speechContest"
  },
  {
    id: "spelling-bee",
    img: "https://images.unsplash.com/photo-1561991330-ec684a9bb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    date: "April 10, 2026",
    key: "spellingBee"
  },
  {
    id: "public-speaking",
    img: "https://images.unsplash.com/photo-1764874299006-bf4266427ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    date: "May 5, 2026",
    key: "publicSpeaking"
  },
  {
    id: "cultural-exchange",
    img: "https://images.unsplash.com/photo-1761039808584-ece726074e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    date: "June 20, 2026",
    key: "culturalExchange"
  },
];

const TESTIMONIALS = [
  {
    name: "Arief S.",
    text: "I needed to improve my English for my job. Grow Center offered a Business English course that was tailored perfectly to my needs. The skills I've acquired have been invaluable in my career. I can't thank the instructors enough.",
    role: "student"
  },
  {
    name: "Sarah W.",
    text: "I joined Grow Center a year ago as a beginner. The progress I've made is incredible! The teachers are so supportive, and the courses are engaging. I now feel confident when speaking English. It's a life-changing experience!",
    role: "student"
  },
  {
    name: "John R.",
    text: "My son has been attending Grow Center for 6 months, and his improvement is remarkable. The teachers are patient and encouraging. I highly recommend Grow Center for anyone looking to improve their English skills.",
    role: "parent"
  },
];

export const BLOGS = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1565022536102-f7645c84354a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    title: "The Power of Learning English: Unlocking Global Opportunities",
    date: "February 12, 2026",
    excerpt: "Discover how mastering English can open doors to international careers, education, and cultural experiences.",
    content: `English has become the universal language of business, science, and international communication. Learning English is no longer just an advantage—it's a necessity in today's globalized world.

In this comprehensive guide, we'll explore how English proficiency can transform your career prospects, educational opportunities, and personal growth. From accessing world-class universities to communicating with billions of people worldwide, the benefits are endless.

Whether you're a student, professional, or lifelong learner, investing in your English skills is investing in your future. Join us as we uncover the transformative power of English language mastery.`,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1587691592099-24045742c181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    title: "Making English a Habit: 5 Easy Practices for Students",
    date: "January 28, 2026",
    excerpt: "Simple daily practices that can dramatically improve your English fluency without overwhelming your schedule.",
    content: `Building a habit of practicing English daily doesn't have to be complicated or time-consuming. With these five simple strategies, you can integrate English into your everyday life naturally.

1. Start your morning with English podcasts or news
2. Label items in your home with English words
3. Think in English for 5 minutes daily
4. Watch your favorite shows with English subtitles
5. Keep a daily journal in English

These practices, when done consistently, create a strong foundation for language mastery. The key is consistency, not perfection. Start small and build momentum over time.`,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1763218812866-a237afef2cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    title: "5 Effective Tips for Better English Pronunciation",
    date: "January 10, 2026",
    excerpt: "Master the sounds of English with these proven techniques used by language experts and successful learners.",
    content: `Pronunciation is often the most challenging aspect of learning English, but with the right techniques, anyone can improve significantly.

Our five proven tips include:
- Practice minimal pairs to distinguish similar sounds
- Record yourself and compare with native speakers
- Focus on word stress and sentence rhythm
- Use the phonetic alphabet as a guide
- Engage in regular conversation practice

Remember, accent is less important than clarity. The goal is to be understood, not to sound exactly like a native speaker. With patience and practice, you'll see remarkable improvement.`,
  },
];

function Navbar() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const navLinks = [
    { key: "whoWeAre", href: "#who-we-are" },
    { key: "annualEvents", href: "#annual-events" },
    { key: "ourCourse", href: "#our-course" },
    { key: "whyChooseUs", href: "#why-choose-us" },
    { key: "faq", href: "#faq" },
    { key: "blog", href: "#blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={imgGrowCenterLogo} alt="Grow Center" className="h-10 w-auto object-contain" />
          <span className="font-bold text-[#162947] text-lg hidden sm:block">Grow Center</span>
        </Link>
        {/* Nav links – desktop */}
        <div className="hidden lg:flex items-center gap-1 bg-[#BFDB38] rounded-full px-6 py-2 border-b-4 border-[#8fa529]">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[#162947] font-bold text-sm px-3 hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>
        {/* Right buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSelector />
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#00a32c] text-white font-bold text-sm px-5 py-2 rounded-full border-b-4 border-[#007921] hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t('nav.whatsappUs')}
          </a>
        </div>
        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md text-[#162947]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[#162947] font-bold text-sm py-2 border-b border-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <div className="mt-2">
            <LanguageSelector />
          </div>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-[#00a32c] text-white font-bold text-sm px-5 py-2 rounded-full mt-2"
            onClick={() => setMobileOpen(false)}
          >
            {t('nav.whatsappUs')}
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-[#F2FAFF] overflow-hidden min-h-[620px] flex items-center">
      {/* BG decorative blobs */}
      <div className="absolute bottom-0 right-0 w-[60%] h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#BFDB38] to-transparent rounded-full blur-3xl" />
      </div>
      <div className="max-w-[1280px] mx-auto px-6 py-16 w-full flex flex-col lg:flex-row items-center gap-10 relative z-10">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left max-w-xl">
          <p className="text-[#606060] text-sm mb-3 font-medium">
            {t('hero.tagline')}
          </p>
          <h1 className="text-[#162947] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t('hero.headline')}<br />{t('hero.headlineWith')}{" "}
            <span className="relative inline-block">
              {t('hero.headlineEnglish')}
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#BFDB38] opacity-40 rounded-full -z-10" />
            </span>
          </h1>
          <p className="text-[#606060] mb-8 leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#our-course"
              className="bg-[#a3be22] text-white font-bold px-7 py-3 rounded-full shadow-lg hover:bg-[#8fa529] transition-colors"
            >
              {t('hero.startLearning')}
            </a>
            <a
              href="#who-we-are"
              className="border-2 border-[#162947] text-[#162947] font-bold px-7 py-3 rounded-full hover:bg-[#162947] hover:text-white transition-colors"
            >
              {t('hero.learnMore')}
            </a>
          </div>
        </div>
        {/* Right hero images */}
        <div className="flex-1 flex justify-center relative min-h-[380px] w-full max-w-md lg:max-w-none">
          {/* Main model */}
          <div className="relative w-[280px] md:w-[340px] lg:w-[400px]">
            <div className="absolute -inset-6 bg-[#BFDB38] opacity-20 rounded-full blur-2xl" />
            <img
              src={imgModel11}
              alt="Student"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            />
            {/* Floating elements */}
            <div className="absolute top-8 -left-10 z-20 animate-bounce">
              <img src={imgChat3D1} alt="" className="w-16 h-16 object-contain" />
            </div>
            <div className="absolute top-2 -right-8 z-20">
              <img src={imgTranslate3D1} alt="" className="w-10 h-10 object-contain" />
            </div>
            <div className="absolute bottom-10 -left-14 z-20">
              <img src={imgBookD1} alt="" className="w-14 h-14 object-contain rotate-[-10deg]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  const { t } = useTranslation();
  
  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#ECF4C3] text-[#162947] font-bold text-sm px-4 py-1 rounded-full mb-3">
            {t('whoWeAre.badge')}
          </span>
          <h2 className="text-[#162947] text-3xl md:text-4xl font-bold">
            {t('whoWeAre.title')}
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Images */}
          <div className="flex gap-4 justify-center">
            <div className="w-[140px] h-[180px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={imgModel23}
                alt="Student"
                className="w-full h-full object-cover"
                style={{ maskImage: `url('${imgModel22}')`, maskSize: "cover" }}
              />
            </div>
            <div className="w-[140px] h-[180px] rounded-2xl overflow-hidden shadow-lg mt-8">
              <img
                src={imgModel32}
                alt="Students"
                className="w-full h-full object-cover"
                style={{ maskImage: `url('${imgModel31}')`, maskSize: "cover" }}
              />
            </div>
          </div>
          {/* Text */}
          <div className="flex-1 max-w-2xl">
            <p className="text-[#606060] leading-relaxed mb-4">
              {t('whoWeAre.desc1')}
            </p>
            <p className="text-[#606060] leading-relaxed mb-6">
              {t('whoWeAre.desc2')}
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { num: "5000+", label: t('whoWeAre.studentsEnrolled') },
                { num: "50+", label: t('whoWeAre.expertInstructors') },
                { num: "10+", label: t('whoWeAre.yearsExperience') },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-[#BFDB38] text-3xl font-bold">{stat.num}</div>
                  <div className="text-[#606060] text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnnualEvents() {
  const { t } = useTranslation();
  
  return (
    <section id="annual-events" className="py-20 bg-[#F2FAFF]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#ECF4C3] text-[#162947] font-bold text-sm px-4 py-1 rounded-full mb-3">
            {t('events.badge')}
          </span>
          <h2 className="text-[#162947] text-3xl md:text-4xl font-bold mb-4">
            {t('events.title')}
          </h2>
          <p className="text-[#606060] max-w-xl mx-auto">
            {t('events.description')}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {EVENTS.map((event) => (
            <Link key={event.key} to={`/event/${event.id}`} className="rounded-2xl overflow-hidden shadow-md group cursor-pointer">
              <div className="relative overflow-hidden h-40">
                <img
                  src={event.img}
                  alt={t(`events.${event.key}`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-white p-3">
                <p className="text-[#162947] font-bold text-sm">{t(`events.${event.key}`)}</p>
                <p className="text-[#BFDB38] text-xs mt-1">{event.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExploreCourses() {
  const { t } = useTranslation();
  
  return (
    <section id="our-course" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#ECF4C3] text-[#162947] font-bold text-sm px-4 py-1 rounded-full mb-3">
            {t('courses.badge')}
          </span>
          <h2 className="text-[#162947] text-3xl md:text-4xl font-bold">
            {t('courses.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.key}
              className="rounded-2xl border border-gray-100 shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow"
            >
              <div
                className="flex items-center justify-center h-32 p-4"
                style={{ backgroundColor: course.color === "#162947" ? "#162947" : "#ECF4C3" }}
              >
                <img src={course.icon} alt={t(`courses.${course.key}Title`)} className="h-20 w-20 object-contain" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-base mb-2 text-[#162947]">
                  {t(`courses.${course.key}Title`)}
                </h3>
                <p className="text-[#606060] text-sm leading-relaxed flex-1">
                  {t(`courses.${course.key}Desc`)}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[#606060] text-xs">{t('courses.startFrom')}</span>
                    <p className="text-[#162947] font-bold text-lg">
                      Rp {course.price}
                    </p>
                  </div>
                  <Link 
                    to={`/enroll?course=${course.id}`}
                    className="bg-[#BFDB38] text-[#162947] font-bold text-xs px-4 py-2 rounded-full hover:bg-[#a3be22] transition-colors"
                  >
                    {t('courses.enroll')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const { t } = useTranslation();
  
  const reasons = [
    { icon: "🏆", key: "certified" },
    { icon: "📱", key: "flexible" },
    { icon: "🎯", key: "results" },
    { icon: "💬", key: "community" },
  ];
  
  return (
    <section id="why-choose-us" className="py-20 bg-[#162947] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#BFDB38] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BFDB38] rounded-full blur-3xl" />
      </div>
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image left */}
          <div className="relative flex-shrink-0">
            <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-[#BFDB38]">
              <img src={imgImage8} alt="Students" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full overflow-hidden border-4 border-white">
              <img src={imgModel42} alt="Student" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Right content */}
          <div className="flex-1">
            <span className="inline-block bg-[#BFDB38] text-[#162947] font-bold text-sm px-4 py-1 rounded-full mb-4">
              {t('whyChoose.badge')}
            </span>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              {t('whyChoose.title')}
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {t('whyChoose.description')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((r) => (
                <div
                  key={r.key}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <div className="text-2xl mb-2">{r.icon}</div>
                  <h4 className="text-white font-bold mb-1">{t(`whyChoose.${r.key}Title`)}</h4>
                  <p className="text-gray-300 text-sm">{t(`whyChoose.${r.key}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-[#F2FAFF] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#ECF4C3] text-[#162947] font-bold text-sm px-4 py-1 rounded-full mb-3">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-[#162947] text-3xl md:text-4xl font-bold">
            {t('testimonials.title')}<br className="hidden md:block" /> {t('testimonials.titleLine2')}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image featured */}
          <div className="md:w-1/3 flex items-center justify-center">
            <div className="relative">
              <div className="w-56 h-64 rounded-2xl overflow-hidden shadow-xl">
                <img src={imgBoyBringTablet2} alt="Student with tablet" className="w-full h-full object-cover" />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-28 h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg"
                style={{ background: `url('${imgBoyBringTablet1}') center/cover` }}
              />
            </div>
          </div>
          {/* Cards */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-[0px_12px_43px_0px_rgba(236,244,195,0.5)] flex flex-col gap-3"
              >
                <div>
                  <p className="text-[#162947] font-bold text-base">{testimonial.name}</p>
                  <p className="text-[#606060] text-sm">{t(`testimonials.${testimonial.role}`)}</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-[#BFDB38] text-sm">★</span>
                  ))}
                </div>
                <p className="text-[#606060] text-sm leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(null);
  
  const faqs = [1, 2, 3, 4, 5, 6];
  
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#ECF4C3] text-[#162947] font-bold text-sm px-4 py-1 rounded-full mb-3">
            {t('faq.badge')}
          </span>
          <h2 className="text-[#162947] text-3xl md:text-4xl font-bold">
            {t('faq.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {faqs.map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <h4 className="text-[#162947] font-bold text-base mb-3">{t(`faq.q${i}`)}</h4>
              <hr className="border-[#EAEAEA] mb-3" />
              {open === i ? (
                <p className="text-[#606060] text-sm leading-relaxed">{t(`faq.a${i}`)}</p>
              ) : (
                <p className="text-[#606060] text-sm leading-relaxed line-clamp-3">{t(`faq.a${i}`)}</p>
              )}
              <button className="mt-3 text-[#BFDB38] text-sm font-bold flex items-center gap-1">
                {open === i ? `${t('faq.showLess')} ▲` : `${t('faq.showMore')} ▼`}
              </button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block border-2 border-[#162947] text-[#162947] font-bold px-8 py-3 rounded-full hover:bg-[#162947] hover:text-white transition-colors"
          >
            {t('faq.stillQuestions')}
          </a>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  const { t } = useTranslation();
  
  return (
    <section id="blog" className="py-20 bg-[#F2FAFF]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#ECF4C3] text-[#162947] font-bold text-sm px-4 py-1 rounded-full mb-3">
            {t('blog.badge')}
          </span>
          <h2 className="text-[#162947] text-3xl md:text-4xl font-bold">
            {t('blog.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOGS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <p className="text-[#BFDB38] text-xs font-medium mb-2">{post.date}</p>
                <h3 className="text-[#162947] font-bold text-base leading-snug mb-3">{post.title}</h3>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-[#606060] text-sm font-semibold flex items-center gap-1 hover:text-[#BFDB38] transition-colors"
                >
                  {t('blog.readMore')} →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#blog"
            className="inline-block border-2 border-[#162947] text-[#162947] font-bold px-8 py-3 rounded-full hover:bg-[#162947] hover:text-white transition-colors"
          >
            {t('blog.readMoreButton')}
          </a>
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-20 bg-[#162947] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
          <img src={imgBoyBringTablet2} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          {t('getStarted.title')}
        </h2>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          {t('getStarted.description')}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#our-course"
            className="bg-[#BFDB38] text-[#162947] font-bold px-8 py-3 rounded-full hover:bg-[#a3be22] transition-colors"
          >
            {t('getStarted.startLearning')}
          </a>
          <a
            href="https://wa.me"
            className="flex items-center gap-2 bg-[#00a32c] text-white font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t('getStarted.chatWhatsapp')}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-[#0e1e36] text-white pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={imgGrowCenterLogo} alt="Grow Center" className="h-10 w-auto object-contain" />
              <span className="font-bold text-xl">Grow Center</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          {/* Our Links */}
          <div>
            <h4 className="font-bold text-base mb-4">{t('footer.ourLinks')}</h4>
            <ul className="space-y-2">
              {["whoWeAre", "annualEvents", "ourCourse", "whyChooseUs", "faq", "blog"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-gray-400 text-sm hover:text-[#BFDB38] transition-colors">
                    {t(`nav.${l}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Our Programs */}
          <div>
            <h4 className="font-bold text-base mb-4">{t('footer.ourPrograms')}</h4>
            <ul className="space-y-2">
              {COURSES.map((c) => (
                <li key={c.key}>
                  <a href="#our-course" className="text-gray-400 text-sm hover:text-[#BFDB38] transition-colors">
                    {t(`courses.${c.key}Title`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-4">{t('footer.contactUs')}</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Jl. Pendidikan No. 123, Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+6281234567890" className="hover:text-[#BFDB38] transition-colors">+62 812 3456 7890</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@growcenter.id" className="hover:text-[#BFDB38] transition-colors">info@growcenter.id</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-white/10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#BFDB38] transition-colors">{t('footer.privacyPolicy')}</a>
            <a href="#" className="hover:text-[#BFDB38] transition-colors">{t('footer.termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <AnnualEvents />
      <ExploreCourses />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Blog />
      <GetStarted />
      <Footer />
    </div>
  );
}