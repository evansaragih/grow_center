import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const languages = [
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
];

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[1];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('language', code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 border-b-4 border-gray-200 hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm">{currentLanguage.flag}</span>
        <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50 min-w-[200px]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#F2FAFF] transition-colors text-left ${
                  currentLanguage.code === lang.code ? 'bg-[#ECF4C3]' : ''
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className={`text-sm ${currentLanguage.code === lang.code ? 'font-bold text-[#162947]' : 'text-gray-700'}`}>
                  {lang.name}
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
