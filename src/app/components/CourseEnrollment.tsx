import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Check } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";
import imgGrowCenterLogo from "figma:asset/48010cd5f7619e67f2d00d3ffee3cc006415de36.png";
import imgParentIcon from "figma:asset/731839b35825a29dc373d3ed82c68e1de52501c7.png";

const COURSES_DATA = [
  { id: "kids", titleKey: "kidsTeenTitle", price: 250000, duration: "3 months" },
  { id: "general", titleKey: "generalEnglishTitle", price: 400000, duration: "4 months" },
  { id: "exam", titleKey: "examPrepTitle", price: 900000, duration: "6 months" },
  { id: "business", titleKey: "businessEnglishTitle", price: 500000, duration: "3 months" },
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
            to="/#our-course"
            className="flex items-center gap-2 text-[#162947] font-bold text-sm px-5 py-2 rounded-full border-2 border-[#162947] hover:bg-[#162947] hover:text-white transition-colors whitespace-nowrap"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{t('enrollment.backToCourses')}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function CourseEnrollment() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get('course') || 'general';
  
  const [userType, setUserType] = useState<'parent' | 'student'>('parent');
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    age: '',
    school: '',
    grade: '',
    course: courseParam,
    schedule: 'morning',
    paymentMethod: 'bank',
    installment: 'full',
    agreeTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const selectedCourse = COURSES_DATA.find(c => c.id === formData.course) || COURSES_DATA[1];
  
  const calculateAmount = () => {
    const basePrice = selectedCourse.price;
    if (formData.installment === 'full') return basePrice;
    if (formData.installment === '3months') return Math.ceil(basePrice / 3);
    if (formData.installment === '6months') return Math.ceil(basePrice / 6);
    return basePrice;
  };

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
              <h3 className="font-bold text-[#162947] mb-4">{t('enrollment.summary')}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#606060]">{t('enrollment.selectCourse')}:</span>
                  <span className="font-bold text-[#162947]">{t(`courses.${selectedCourse.titleKey}`)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#606060]">{t('enrollment.totalAmount')}:</span>
                  <span className="font-bold text-[#BFDB38] text-lg">
                    Rp {calculateAmount().toLocaleString('id-ID')}
                    {formData.installment !== 'full' && <span className="text-sm">{t('enrollment.perMonth')}</span>}
                  </span>
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
      
      <div className="max-w-[900px] mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-[#162947] text-3xl md:text-4xl font-bold mb-2">
            {t('enrollment.title')}
          </h1>
          <p className="text-[#606060]">
            {t(`courses.${selectedCourse.titleKey}`)}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Type Selection */}
          <div className="bg-white rounded-3xl shadow-md p-6">
            <h2 className="text-[#162947] font-bold text-lg mb-4">{t('enrollment.selectType')}</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setUserType('parent')}
                className={`border-2 rounded-2xl p-6 transition-all ${
                  userType === 'parent'
                    ? 'border-[#BFDB38] bg-[#ECF4C3]'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">👨‍👩‍👧</div>
                  <p className="font-bold text-[#162947]">{t('enrollment.parent')}</p>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setUserType('student')}
                className={`border-2 rounded-2xl p-6 transition-all ${
                  userType === 'student'
                    ? 'border-[#BFDB38] bg-[#ECF4C3]'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">🎓</div>
                  <p className="font-bold text-[#162947]">{t('enrollment.student')}</p>
                </div>
              </button>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-3xl shadow-md p-6">
            <h2 className="text-[#162947] font-bold text-lg mb-4">{t('enrollment.personalInfo')}</h2>
            <div className="space-y-4">
              {userType === 'parent' && (
                <div>
                  <label className="block text-[#162947] font-medium mb-2">
                    {t('enrollment.parentName')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                  />
                </div>
              )}
              <div>
                <label className="block text-[#162947] font-medium mb-2">
                  {userType === 'parent' ? t('enrollment.studentName') : t('enrollment.fullName')} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#162947] font-medium mb-2">
                    {t('enrollment.age')} *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                  />
                </div>
                <div>
                  <label className="block text-[#162947] font-medium mb-2">
                    {t('enrollment.grade')}
                  </label>
                  <input
                    type="text"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#162947] font-medium mb-2">
                  {t('enrollment.school')}
                </label>
                <input
                  type="text"
                  value={formData.school}
                  onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                />
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="bg-white rounded-3xl shadow-md p-6">
            <h2 className="text-[#162947] font-bold text-lg mb-4">{t('enrollment.courseDetails')}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[#162947] font-medium mb-2">
                  {t('enrollment.selectCourse')} *
                </label>
                <select
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                >
                  {COURSES_DATA.map((course) => (
                    <option key={course.id} value={course.id}>
                      {t(`courses.${course.titleKey}`)} - Rp {course.price.toLocaleString('id-ID')}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[#162947] font-medium mb-2">
                  {t('enrollment.selectSchedule')} *
                </label>
                <select
                  required
                  value={formData.schedule}
                  onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#BFDB38]"
                >
                  <option value="morning">{t('enrollment.morning')}</option>
                  <option value="afternoon">{t('enrollment.afternoon')}</option>
                  <option value="evening">{t('enrollment.evening')}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-3xl shadow-md p-6">
            <h2 className="text-[#162947] font-bold text-lg mb-4">{t('enrollment.paymentMethod')}</h2>
            <div className="space-y-3">
              {[
                { value: 'bank', label: t('enrollment.bankTransfer'), icon: '🏦' },
                { value: 'card', label: t('enrollment.creditCard'), icon: '💳' },
                { value: 'ewallet', label: t('enrollment.eWallet'), icon: '📱' },
              ].map((method) => (
                <label
                  key={method.value}
                  className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.paymentMethod === method.value
                      ? 'border-[#BFDB38] bg-[#ECF4C3]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.value}
                    checked={formData.paymentMethod === method.value}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="w-5 h-5 text-[#BFDB38]"
                  />
                  <span className="text-2xl">{method.icon}</span>
                  <span className="font-medium text-[#162947]">{method.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Installment Plan */}
          <div className="bg-white rounded-3xl shadow-md p-6">
            <h2 className="text-[#162947] font-bold text-lg mb-4">{t('enrollment.installment')}</h2>
            <div className="space-y-3">
              {[
                { value: 'full', label: t('enrollment.fullPayment') },
                { value: '3months', label: t('enrollment.monthly3') },
                { value: '6months', label: t('enrollment.monthly6') },
              ].map((plan) => (
                <label
                  key={plan.value}
                  className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.installment === plan.value
                      ? 'border-[#BFDB38] bg-[#ECF4C3]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="installment"
                      value={plan.value}
                      checked={formData.installment === plan.value}
                      onChange={(e) => setFormData({ ...formData, installment: e.target.value })}
                      className="w-5 h-5 text-[#BFDB38]"
                    />
                    <span className="font-medium text-[#162947]">{plan.label}</span>
                  </div>
                  <span className="font-bold text-[#BFDB38]">
                    Rp {
                      plan.value === 'full' 
                        ? selectedCourse.price.toLocaleString('id-ID')
                        : plan.value === '3months'
                        ? Math.ceil(selectedCourse.price / 3).toLocaleString('id-ID')
                        : Math.ceil(selectedCourse.price / 6).toLocaleString('id-ID')
                    }
                    {plan.value !== 'full' && <span className="text-sm">{t('enrollment.perMonth')}</span>}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Total & Agreement */}
          <div className="bg-white rounded-3xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
              <span className="text-[#162947] font-bold text-lg">{t('enrollment.totalAmount')}</span>
              <span className="text-[#BFDB38] font-bold text-2xl">
                Rp {calculateAmount().toLocaleString('id-ID')}
                {formData.installment !== 'full' && <span className="text-base">{t('enrollment.perMonth')}</span>}
              </span>
            </div>
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
            {isSubmitting ? t('enrollment.processing') : t('enrollment.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}
