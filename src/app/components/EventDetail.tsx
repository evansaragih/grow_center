import { useState } from "react";
import { Link, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Calendar, Clock, MapPin, Users, Check } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import imgGrowCenterLogo from "figma:asset/48010cd5f7619e67f2d00d3ffee3cc006415de36.png";

const EVENTS_DATA = [
  {
    id: "speech-contest",
    titleKey: "speechContest",
    img: "https://images.unsplash.com/photo-1567057420215-0afa9aa9253a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    date: "March 15, 2026",
    time: "09:00 AM - 4:00 PM",
    location: "Grow Center Main Hall, Jakarta",
    duration: "7 hours",
    capacity: 100,
    registered: 67,
    description: "Join our annual English Speech Contest and showcase your public speaking skills! This event is perfect for students who want to build confidence, improve their presentation abilities, and compete for exciting prizes.",
    requirements: [
      "English proficiency level: Intermediate or above",
      "Prepared 5-7 minute speech on provided topics",
      "Age: 12-25 years old",
      "Registration fee: Free for enrolled students, Rp 50,000 for external participants"
    ],
    agenda: [
      "09:00 - 09:30: Registration & Welcome",
      "09:30 - 10:00: Opening Ceremony",
      "10:00 - 12:30: Preliminary Round",
      "12:30 - 13:30: Lunch Break",
      "13:30 - 15:00: Semi-Finals",
      "15:00 - 15:30: Final Round",
      "15:30 - 16:00: Awards Ceremony"
    ]
  },
  {
    id: "spelling-bee",
    titleKey: "spellingBee",
    img: "https://images.unsplash.com/photo-1561991330-ec684a9bb19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    date: "April 10, 2026",
    time: "10:00 AM - 2:00 PM",
    location: "Grow Center Auditorium, Jakarta",
    duration: "4 hours",
    capacity: 80,
    registered: 45,
    description: "Test your spelling skills in our exciting Annual Spelling Bee competition! A fun and educational event for young learners to demonstrate their mastery of English vocabulary.",
    requirements: [
      "Age: 8-15 years old",
      "Basic to intermediate English level",
      "No preparation required - words will be from standard English dictionary",
      "Registration fee: Free"
    ],
    agenda: [
      "10:00 - 10:30: Registration & Briefing",
      "10:30 - 11:30: Round 1 (Written)",
      "11:30 - 12:00: Break",
      "12:00 - 13:00: Round 2 (Oral)",
      "13:00 - 13:30: Finals",
      "13:30 - 14:00: Prize Distribution"
    ]
  },
  {
    id: "public-speaking",
    titleKey: "publicSpeaking",
    img: "https://images.unsplash.com/photo-1764874299006-bf4266427ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    date: "May 5, 2026",
    time: "2:00 PM - 6:00 PM",
    location: "Grow Center Workshop Room, Jakarta",
    duration: "4 hours",
    capacity: 50,
    registered: 50,
    description: "An intensive workshop designed to help you overcome stage fright and become a confident public speaker. Learn techniques from professional speakers and practice in a supportive environment.",
    requirements: [
      "All English levels welcome",
      "Age: 16+ years old",
      "Registration fee: Rp 150,000 (includes materials and certificate)",
      "Maximum 50 participants"
    ],
    agenda: [
      "14:00 - 14:30: Introduction to Public Speaking",
      "14:30 - 15:30: Body Language & Voice Control",
      "15:30 - 16:00: Coffee Break",
      "16:00 - 17:00: Practice Sessions",
      "17:00 - 17:30: Feedback & Improvement",
      "17:30 - 18:00: Certificate Ceremony"
    ]
  },
  {
    id: "cultural-exchange",
    titleKey: "culturalExchange",
    img: "https://images.unsplash.com/photo-1761039808584-ece726074e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    date: "June 20, 2026",
    time: "1:00 PM - 8:00 PM",
    location: "Grow Center Campus & Garden, Jakarta",
    duration: "7 hours",
    capacity: 150,
    registered: 89,
    description: "Experience English-speaking cultures from around the world! A full-day festival featuring cultural performances, food tasting, interactive games, and conversation sessions with native speakers.",
    requirements: [
      "Open to all ages and English levels",
      "Registration fee: Rp 75,000 (includes activities and food)",
      "Families welcome",
      "Early registration recommended"
    ],
    agenda: [
      "13:00 - 13:30: Welcome & Opening Performance",
      "13:30 - 15:00: Cultural Booths & Activities",
      "15:00 - 16:00: International Food Tasting",
      "16:00 - 17:30: Conversation Circles with Native Speakers",
      "17:30 - 18:30: Cultural Performances",
      "18:30 - 19:00: Games & Prizes",
      "19:00 - 20:00: Closing & Networking"
    ]
  }
];

function Navbar() {
  const { t } = useTranslation();
  
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={imgGrowCenterLogo} alt="Grow Center" className="h-10 w-auto object-contain" />
          <span className="font-bold text-[#162947] text-lg hidden sm:block">Grow Center</span>
        </Link>
        <div className="flex items-center gap-3">
          <LanguageSelector />
          <Link
            to="/#annual-events"
            className="flex items-center gap-2 text-[#162947] font-bold text-sm px-5 py-2 rounded-full border-2 border-[#162947] hover:bg-[#162947] hover:text-white transition-colors whitespace-nowrap"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{t('event.backToEvents')}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function EventDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const event = EVENTS_DATA.find(e => e.id === id);
  
  const [userType, setUserType] = useState<'parent' | 'student'>('student');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: 'male',
    address: '',
    emergencyName: '',
    emergencyPhone: '',
    dietaryRestrictions: '',
    specialNeeds: '',
    howDidYouHear: '',
    agreeTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen bg-[#F2FAFF]">
        <Navbar />
        <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#162947] mb-4">{t('blogDetail.notFound')}</h1>
          <p className="text-gray-600 mb-8">{t('blogDetail.notFoundDesc')}</p>
          <Link 
            to="/"
            className="inline-block bg-[#BFDB38] text-[#162947] font-bold px-8 py-3 rounded-full hover:bg-[#a3be22] transition-colors"
          >
            {t('blogDetail.returnHome')}
          </Link>
        </div>
      </div>
    );
  }

  const spotsLeft = event.capacity - event.registered;
  const isFull = spotsLeft <= 0;
  const isAlmostFull = spotsLeft <= 10 && spotsLeft > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-[#F2FAFF]">
        <Navbar />
        <div className="max-w-[600px] mx-auto px-6 py-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-[#BFDB38] rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-[#162947] mb-4">
              {t('event.registrationSuccess')}
            </h1>
            <p className="text-[#606060] mb-8">
              {t('event.registrationSuccessMsg')}
            </p>
            <div className="bg-[#F2FAFF] rounded-xl p-6 mb-8 text-left">
              <h3 className="font-bold text-[#162947] mb-4">{t('event.details')}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#606060]">{t('event.title')}:</span>
                  <span className="font-bold text-[#162947]">{t(`events.${event.titleKey}`)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#606060]">{t('event.date')}:</span>
                  <span className="font-bold text-[#162947]">{event.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#606060]">{t('event.time')}:</span>
                  <span className="font-bold text-[#162947]">{event.time}</span>
                </div>
              </div>
            </div>
            <Link
              to="/"
              className="inline-block bg-[#BFDB38] text-[#162947] font-bold px-8 py-3 rounded-full hover:bg-[#a3be22] transition-colors"
            >
              {t('nav.backToHome')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2FAFF]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-[#ECF4C3] text-[#162947] font-bold text-sm px-4 py-1 rounded-full mb-4">
                {t('events.badge')}
              </span>
              <h1 className="text-[#162947] text-3xl md:text-4xl font-bold mb-4">
                {t(`events.${event.titleKey}`)}
              </h1>
              <p className="text-[#606060] leading-relaxed mb-6">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-[#606060]">
                  <Calendar className="w-5 h-5 text-[#BFDB38]" />
                  <span className="font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-[#606060]">
                  <Clock className="w-5 h-5 text-[#BFDB38]" />
                  <span className="font-medium">{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-[#606060]">
                  <MapPin className="w-5 h-5 text-[#BFDB38]" />
                  <span className="font-medium">{event.location}</span>
                </div>
              </div>
              {isAlmostFull && (
                <div className="mt-4 bg-[#FFF3CD] border border-[#FFC107] text-[#856404] px-4 py-2 rounded-xl text-sm">
                  ⚠️ Only {spotsLeft} {t('event.spotsLeft')}!
                </div>
              )}
              {isFull && (
                <div className="mt-4 bg-[#F8D7DA] border border-[#F5C2C7] text-[#842029] px-4 py-2 rounded-xl text-sm">
                  ❌ {t('event.full')}
                </div>
              )}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={event.img} 
                alt={t(`events.${event.titleKey}`)}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-[#162947] text-2xl font-bold mb-4">{t('event.about')}</h2>
                <p className="text-[#606060] leading-relaxed">{event.description}</p>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-[#162947] text-2xl font-bold mb-4">{t('event.requirements')}</h2>
                <ul className="space-y-2">
                  {event.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#606060]">
                      <span className="text-[#BFDB38] mt-1">✓</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Agenda */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-[#162947] text-2xl font-bold mb-4">{t('event.agenda')}</h2>
                <div className="space-y-3">
                  {event.agenda.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                      <div className="w-2 h-2 bg-[#BFDB38] rounded-full mt-2"></div>
                      <p className="text-[#606060] flex-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Event Info */}
            <div className="space-y-6">
              <div className="bg-[#162947] text-white rounded-2xl shadow-md p-6 sticky top-24">
                <h3 className="font-bold text-lg mb-4">{t('event.details')}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-gray-300 text-sm mb-1">{t('event.date')}</div>
                    <div className="font-medium">{event.date}</div>
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm mb-1">{t('event.time')}</div>
                    <div className="font-medium">{event.time}</div>
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm mb-1">{t('event.duration')}</div>
                    <div className="font-medium">{event.duration}</div>
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm mb-1">{t('event.location')}</div>
                    <div className="font-medium">{event.location}</div>
                  </div>
                  <div>
                    <div className="text-gray-300 text-sm mb-1">{t('event.capacity')}</div>
                    <div className="font-medium">
                      {event.registered} / {event.capacity}
                      <span className="ml-2 text-[#BFDB38]">
                        ({spotsLeft} {t('event.spotsLeft')})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      {!isFull && (
        <section className="py-12">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-[#162947] text-2xl md:text-3xl font-bold mb-6">
                {t('event.registration')}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection */}
                <div>
                  <label className="block text-[#162947] font-bold mb-3">{t('event.participantType')}</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setUserType('student')}
                      className={`border-2 rounded-xl p-4 transition-all ${
                        userType === 'student'
                          ? 'border-[#BFDB38] bg-[#ECF4C3]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2">🎓</div>
                        <p className="font-bold text-[#162947]">{t('enrollment.student')}</p>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setUserType('parent')}
                      className={`border-2 rounded-xl p-4 transition-all ${
                        userType === 'parent'
                          ? 'border-[#BFDB38] bg-[#ECF4C3]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-3xl mb-2">👨‍👩‍👧</div>
                        <p className="font-bold text-[#162947]">{t('enrollment.parent')}</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#162947] font-medium mb-2">
                      {t('event.fullName')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#162947] font-medium mb-2">
                      {t('enrollment.email')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#162947] font-medium mb-2">
                      {t('enrollment.phone')} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#162947] font-medium mb-2">
                      {t('event.dateOfBirth')} *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#162947] font-medium mb-2">
                    {t('event.gender')} *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-4 h-4 text-[#BFDB38]"
                      />
                      <span className="text-[#162947]">{t('event.male')}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-4 h-4 text-[#BFDB38]"
                      />
                      <span className="text-[#162947]">{t('event.female')}</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-[#162947] font-medium mb-2">
                    {t('event.address')} *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                  />
                </div>

                {/* Emergency Contact */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-[#162947] font-bold mb-4">{t('event.emergencyContact')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#162947] font-medium mb-2">
                        {t('event.emergencyName')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.emergencyName}
                        onChange={(e) => setFormData({ ...formData, emergencyName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#162947] font-medium mb-2">
                        {t('event.emergencyPhone')} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.emergencyPhone}
                        onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[#162947] font-medium mb-2">
                        {t('event.dietaryRestrictions')}
                      </label>
                      <input
                        type="text"
                        value={formData.dietaryRestrictions}
                        onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                        placeholder="e.g., Vegetarian, Halal, Allergies"
                      />
                    </div>
                    <div>
                      <label className="block text-[#162947] font-medium mb-2">
                        {t('event.specialNeeds')}
                      </label>
                      <textarea
                        rows={2}
                        value={formData.specialNeeds}
                        onChange={(e) => setFormData({ ...formData, specialNeeds: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#162947] font-medium mb-2">
                        {t('event.howDidYouHear')}
                      </label>
                      <select
                        value={formData.howDidYouHear}
                        onChange={(e) => setFormData({ ...formData, howDidYouHear: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                      >
                        <option value="">Select...</option>
                        <option value="social-media">Social Media</option>
                        <option value="friend">Friend/Family</option>
                        <option value="website">Website</option>
                        <option value="student">Current Student</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Agreement */}
                <div className="pt-4 border-t border-gray-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="w-5 h-5 mt-1 text-[#BFDB38] rounded"
                    />
                    <span className="text-sm text-[#606060]">
                      {t('enrollment.agreeTo')} <a href="#" className="text-[#BFDB38] underline">{t('enrollment.terms')}</a> {t('enrollment.and')} <a href="#" className="text-[#BFDB38] underline">{t('enrollment.privacy')}</a>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.agreeTerms}
                  className="w-full bg-[#BFDB38] text-[#162947] font-bold px-8 py-4 rounded-full hover:bg-[#a3be22] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? t('enrollment.processing') : t('event.submitRegistration')}
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
