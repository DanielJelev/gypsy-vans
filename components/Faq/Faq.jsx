import { useLayoutEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { debounce } from "../../app/utils/debounce";

const sections = [
  {
    title: "Какво е включено в цената, при наемане на кемпер?",
    description:
      "В цената е включено пълно обзавеждане и оборудване на кемпера - спални принадлежности, кухненски прибори и съдове, пълна газова бутилка, къмпинг столове и маса, основни консумативи за готвене и почистване. Получаваш също застраховки Гражданска Отговорност и Каско, денонощна пътна помощ за републиканската пътна мрежа на България и подробен брифинг преди тръгване.",
  },
  {
    title: "Какви документи са необходими за да управлявам кемпера?",
    description:
      "Валидно свидетелство за управление (категория B или по-висока), лична карта и доза приключенски ентусиазъм!",
  },
  {
    title: "Какво е нужно да взема с мен?",
    description:
      "Трябва да вземеш доброто си настроение, подходящи за твоето приключение дрехи, храни и напитки, средства за лична хигиена, лекарства и документи за управление на кемпера. Всичко останало вече те очаква в кемпера. Препоръчваме ти да вземеш и камера, с която да запечаташ незабравимите моменти от предстоящото пътешествие.",
  },
  {
    title: "Ще получа ли отстъпка при по-дълги периоди на наем?",
    description:
      "Разбира се! Предлагаме прогресивни отстъпки при по-продължителни наемни периоди. (недовършено)",
  },
];

export function Faq(params) {
  const [expandedSections, setExpandedSections] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const [sectionHeights, setSectionHeights] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
  });

  const sectionRefs = useRef({
    0: null,
    1: null,
    2: null,
    3: null,
  });

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useLayoutEffect(() => {
    Object.values(sectionRefs.current).map((el, index) => {
      setSectionHeights((prev) => ({ ...prev, [index]: el.offsetHeight }));
    });

    const handleResize = debounce(() => {
      Object.values(sectionRefs.current).map((el, index) => {
        setSectionHeights((prev) => ({ ...prev, [index]: el.offsetHeight }));
      });
    }, 200);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id='contact' className='container-page section'>
      <div className='flex flex-col w-full items-center justify-center p-8 rounded-2xl bg-tan'>
        <h2 className='font-head text-4xl mb-6'>Често задавани въпроси</h2>
        <div className='flex flex-col gap-4'>
          {sections.map((section, index) => (
            <div
              key={section.title}
              className='card p-2 px-3 text-cocoa/90 flex flex-col'
            >
              <div
                className='w-full p-2 flex gap-4 font-bold text-xl select-none cursor-pointer'
                onClick={() => toggleSection(index)}
              >
                <p className='text-2xl pt-1'>
                  {expandedSections[index] ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </p>
                {section.title}
              </div>
              <div
                className='w-full overflow-hidden transition-all duration-500'
                style={{
                  maxHeight: expandedSections[index]
                    ? sectionHeights[index]
                    : 0,
                  opacity: expandedSections[index] ? 1 : 0
                }}
              >
                <div
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className='py-2 px-4 text-lg'
                >
                  {section.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
