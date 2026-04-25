'use client';

import { useEffect, useRef, useState } from "react";

import { WaveDivider } from '../WaveDivider';

const sections = [
  {
    title: "Какви са условията за да резервирам кемпер ван?",
    description:
      "Условията са напълно стандартни за бранша.\nНужни са:\n- шофьорска книжка (категория B) и поне 2 години опит като шофьор\n- депозит от 750 €, който е напълно възстановим при липса на щети\n- стандартна такса \"почистване\" от 55 евро.\n\nЦената за наем на ден зависи от периода.\nМоже да видите пакетните ни цени ТУК.",
  },
  {
    title: "Подходящ ли е кемпер вана за деца?",
    description:
      "Да! Gypsy van-a е проектиран, за да бъде максимално комфортен на двойка с едно или две деца. Във кемпер вана удобно пътуват и спят до 4-ма души. И най-важното: задните седалки са монтирани от лицензирана фирма, за да сме сигурни, че всички правила за безопасност са спазени и са с ISOFIX система.",
  },
  {
    title: "Колко души могат да пътуват и спят в кемпер вана?",
    description:
      "Комфортно могат да пътуват и спят до 4-ма души. Нещо повече - кемпер вана разполага с две отделни седящи групи, което дава допълнителен комфорт при движение, преобличане за спортни активности или просто отделни пространства за игра на децата и релакс на родителите. :)",
  },
  {
    title: "С какво оборудване идва кемпер вана?",
    description:
      "Получавате напълно оборудван и автономен \"дом на колела\".\nВсички спални принадлежности, хавлии и кърпи, козметика за банята, напълно оборудвана кухня с всички необходими кухненски прибори, консумативи за почистване и някои основни подправки и храни.\nВ кемпер вана ще ви очакват още напълно безплатно: различни видове кафе и чай, проектор за домашно кино под звездите, къмпинг маса и столове за открито и др.",
  },
  {
    title: "Има ли скрити такси, които трябва да платя?",
    description:
      "НЕ! Ние не начисляваме допълнителните такси за допълнително оборудване, защото за нас е важно да имате всичко, от което се нуждаете на борда на нашия кемпер ван.\nСамо, ако не почистите тоалетната касета преди да върнете Gypsy van-чето ще бъдете таксувани 35 €, каквато е общата практика при отдаването на кемпери.",
  },
  {
    title: "Какви са цените за наем на кемпер ван в България?",
    description:
      "Цената за наем зависи от сезона и продължителността на наема - при по-дълъг има прогресивни отстъпки. Разгледай пакетните цени за наем тук.",
  },
  {
    title: "Мога ли да взема домашен любимец в кемпер вана?",
    description:
      "Обичайно домашните любимци, особено по-големите породи, не се допускат в кемперите. Но ние знаем, какво е да искаш да споделиш приключението с опашатия член на семейството, затова - пиши ни допълнително, за да обсъдим възможностите.",
  },
  {
    title: "Колко спални места има в кемпер вана?",
    description:
      "В Gypsy van-a има две спални, подходящи за спане на до 4-ма души.",
  },
  {
    title: "Мога ли да пътувам извън България с кемпер вана?",
    description:
      "Да, можеш да пътуваш в чужбина с кемпер вана. Сподели ни планирания маршрут, за да подготвим всички необходими документи, освен включените зелена карта и допълнителни застраховки, за да пътуваш спокойно и изрядно.",
  },
  {
    title: "Как се извършва плащането за наем на кемпер вана?",
    description:
      "Приемаме плащане само по банков път или чрез сигурна платформа за онлайн плащания, за да улесним и двете страни и минимизираме разходите до банкомата.",
  },
  {
    title: "До кога трябва да върна кемпера?",
    description:
      "Трябва да върнеш кемпер вана до 16:00 часа в последния ден от наемния период. При необходимост и ако кемперът е свободен на следващия ден можем да договорим различно време.",
  },
  {
    title: "Какво да си взема за почивка с кемпер ван?",
    description:
      "Нашият кемпер ван идва напълно оборудван със спални принадлежности, козметика за банята, напълно оборудвана кухня с прибори, съдове и основни подправки. Затова се нуждаеш само от подходящи за твоето приключение дрехи, лични вещи, документи и ентусиазъм. :)",
  },
  {
    title: "Каква е таксата за втори водач?",
    description:
      "В Gypsy van-а можете да заявите втори водач, без да се налага да заплащате допълнителна такса. Важно условие обаче е, всички заявени водачи да отговарят на изискванията.",
  },
  {
    title: "Има ли ограничение в километрите при наем на кемпер?",
    description:
      "Не, няма ограничения за километража - можеш да пътуваш свободно без да броиш километри!",
  },
];

export function Faq() {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [mobileExpandedSections, setMobileExpandedSections] = useState({});
  const [activeSection, setActiveSection] = useState(null);
  const [isClosingModal, setIsClosingModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalAnchor, setModalAnchor] = useState(null);
  const closeTimerRef = useRef(null);
  const openRafRef = useRef(null);
  const cardRefs = useRef({});
  const mobilePanelRefs = useRef({});

  const isMobileViewport = () => typeof window !== 'undefined' && window.innerWidth < 768;

  const openSection = (index) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    if (openRafRef.current) {
      cancelAnimationFrame(openRafRef.current);
    }

    setIsClosingModal(false);
    setIsModalVisible(false);
    setActiveSection(index);

    const cardRect = cardRefs.current[index]?.getBoundingClientRect();
    if (cardRect && typeof window !== 'undefined' && window.innerWidth >= 768) {
      const top = Math.max(20, Math.min(cardRect.top + 16, window.innerHeight - 420));
      const left = cardRect.left + (cardRect.width / 2);
      setModalAnchor({ top, left });
    } else {
      setModalAnchor(null);
    }

    document.body.style.overflow = 'hidden';

    // Trigger enter animation on next frame after modal is mounted.
    openRafRef.current = requestAnimationFrame(() => {
      setIsModalVisible(true);
    });
  };

  const closeSection = () => {
    setIsClosingModal(true);
    setIsModalVisible(false);

    closeTimerRef.current = setTimeout(() => {
      setActiveSection(null);
      setIsClosingModal(false);
      setIsModalVisible(false);
      setModalAnchor(null);
      document.body.style.overflow = 'auto';
    }, 260);
  };

  const handleSectionClick = (index) => {
    if (isMobileViewport()) {
      setMobileExpandedSections((prev) => ({ ...prev, [index]: !prev[index] }));
      return;
    }

    openSection(index);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && activeSection !== null) {
        closeSection();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeSection]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      if (openRafRef.current) {
        cancelAnimationFrame(openRafRef.current);
      }
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section className="relative pb-[160px] overflow-hidden bg-linen">

      <div className="container-page">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div
            className="text-center mb-14"
          >
            <p className="script-head text-4xl md:text-5xl text-terracotta mb-1">Често задавани</p>
            <h2 className="serif-head text-4xl md:text-6xl text-earth leading-tight">
              Въпроси
            </h2>
            <div className="flex gap-2.5 justify-center mt-6" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-terracotta" />
              <div className="w-3 h-3 rounded-full bg-desert-rose" />
              <div className="w-3 h-3 rounded-full bg-sand" />
              <div className="w-3 h-3 rounded-full bg-sage" />
              <div className="w-3 h-3 rounded-full bg-cream border border-sand/50" />
            </div>
          </div>

          {/* Accordion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
            {sections.map((section, index) => {
              const isOpen = activeSection === index;
              const isMobileOpen = !!mobileExpandedSections[index];
              const isExpanded = isOpen || isMobileOpen;
              return (
                <div
                  key={section.title}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`rounded-2xl border transition-all duration-300 ${
                    !showAllMobile && index > 4 ? 'hidden md:block' : ''
                  } ${
                    isOpen
                      ? 'ring-2 ring-orange/35 shadow-[0_12px_32px_rgba(0,0,0,0.18)]'
                      : ''
                  } ${
                    isOpen
                      ? 'bg-white shadow-boho border-terracotta/20'
                      : 'bg-white/60 backdrop-blur-sm shadow-soft border-sand/60 hover:shadow-boho'
                  }`}
                >
                  <button
                    onClick={() => handleSectionClick(index)}
                    className="w-full flex items-center gap-3 md:gap-4 p-4 md:p-7 text-left cursor-pointer"
                    aria-expanded={isExpanded}
                    aria-controls={isOpen ? `faq-modal-panel-${index}` : `faq-mobile-panel-${index}`}
                    id={`faq-button-${index}`}
                  >
                    {/* Dot indicator */}
                    <div
                      className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? 'bg-terracotta' : 'bg-sand'
                      }`}
                    />
                    <span className="serif-head text-[0.95rem] md:text-xl text-earth flex-1 leading-tight md:leading-snug whitespace-normal break-words">
                      {section.title}
                    </span>
                    {/* Arrow */}
                    <svg
                      className={`w-4 h-4 md:w-5 md:h-5 text-terracotta/60 flex-shrink-0 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    id={`faq-mobile-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    className="md:hidden overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: isMobileOpen
                        ? `${mobilePanelRefs.current[index]?.scrollHeight || 900}px`
                        : 0,
                      opacity: isMobileOpen ? 1 : 0,
                    }}
                  >
                    <div
                      ref={(el) => (mobilePanelRefs.current[index] = el)}
                      className="px-6 pb-6"
                    >
                      <div className="w-full h-px bg-sand/40 mb-4" />
                      <p className="text-cocoa text-base leading-relaxed whitespace-pre-line">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {sections.length > 5 && (
            <div className="md:hidden flex justify-center mt-6">
              <button
                onClick={() => setShowAllMobile((prev) => !prev)}
                className="rounded-full px-6 py-2 text-sm tracking-widest uppercase border border-orange bg-orange text-white hover:opacity-90 transition-colors duration-300"
              >
                {showAllMobile ? 'Покажи по-малко' : 'Виж всички въпроси'}
              </button>
            </div>
          )}

        </div>
      </div>

      {activeSection !== null && (
        <div
          className={`fixed inset-0 z-[150] transition-opacity duration-300 ${
            isClosingModal ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={closeSection}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]" />

          <div className="relative z-10 min-h-full w-full p-4 md:p-8">
            <div
              id={`faq-modal-panel-${activeSection}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`faq-button-${activeSection}`}
              onClick={(event) => event.stopPropagation()}
              style={modalAnchor ? { position: 'fixed', top: modalAnchor.top, left: modalAnchor.left, transform: 'translateX(-50%)' } : undefined}
              className={`w-full max-w-xl mx-auto rounded-2xl border border-terracotta/20 bg-white shadow-[0_22px_60px_rgba(0,0,0,0.28)] transition-all duration-300 ${
                isModalVisible && !isClosingModal ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'
              }`}
            >
              <div className="flex items-start justify-between gap-3 p-4 md:p-5 border-b border-sand/40">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                  <h3 className="serif-head text-xl md:text-2xl text-earth leading-snug">
                    {sections[activeSection].title}
                  </h3>
                </div>
                <button
                  onClick={closeSection}
                  className="rounded-full w-10 h-10 flex items-center justify-center text-coffee/70 hover:text-coffee hover:bg-sand/30 transition-colors duration-200"
                  aria-label="Затвори въпроса"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-4 md:p-5 max-h-[65vh] overflow-y-auto">
                <p className="text-cocoa text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {sections[activeSection].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <WaveDivider position="bottom" fill="var(--beige-bg)" height={120} overlap={-2} />
    </section>
  );
}
