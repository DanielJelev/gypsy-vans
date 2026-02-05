import { CiCircleInfo } from "react-icons/ci";


const PricePlans = () => {
    const plans = [
        {
            name: "Слаб сезон",
            price: "84-105",
            currency: "€",
            frequency: "/ден",
            features: ["до 4 дни = 105 €/ден", "от 5 до 6 дни = 103 €/ден", "от 7 до 13 дни = 100 €/ден", "от 14 до 20 дни = 95 €/ден", "от 21 до 29 дни = 90 €/ден", "30 или повече дни =  84 €/ден"],
            type: "secondary",
            badge: "15% ОТСТЪПКА",
            desc: "Януари, Февруари, Март и Декември"
        },
        {
            name: "Силен сезон",
            price: "100-125",
            currency: "€",
            frequency: "/ден",
            features: ["до 4 дни = 125 €/ден", "от 5 до 6 дни = 123 €/ден", "от 7 до 13 дни = 119 €/ден", "от 14 до 20 дни = 113 €/ден", "от 21 до 29 дни = 106 €/ден", "30 или повече дни = 100 €/ден"],
            type: "primary",
            badge: "НАЙ-ПОПУЛЯРЕН",
            desc: "Юни, Юли, Август и Септември"
        },
        {
            name: "Среден сезон",
            price: "92-115",
            currency: "€",
            frequency: "/ден",
            features: ["до 4 дни = 115 €/ден", "от 5 до 6 дни = 113 €/ден", "от 7 до 13 дни = 109 €/ден", "от 14 до 20 дни = 104 €/ден", "от 21 до 29 дни = 98 €/ден", "30 или повече дни = 92 €/ден"],
            type: "secondary",
            badge: "10% ОТСТЪПКА",
            desc: "Април, Май, Октомври и Ноември"
        }
    ];

    return (
        <section className='section bg-page'>
            <div className='container-page bg-tan p-6 rounded-2xl'>
                <div className='mb-16 text-center max-w-3xl mx-auto'>
                    <h2 className='text-4xl md:text-5xl font-head text-coffee mb-6'>Ценови пакети</h2>
                    <p className='text-lg text-mocha/80 mb-3'>
                       Нашият кемперван идва при вас наистина оборудван за пътешествия. Помислили сме за абсолютно всичко, което ще ви бъде необходимо за комфортен престой. В него комфортно могат да пътуват и спят до 4 души.
                    </p>
                    <p className='text-lg text-mocha/80 mb-3'>
                        Цените варират, в зависимост от продължителността на вашето приключение и сезона. 
                    </p>
                    <p className='text-lg text-mocha/80 mb-6'>
                        Преди да направите резервацията, моля, запознайте се с нашите условия за наемане и прегледайте най-често задаваните въпроси.
                    </p>
                    <p className='text-lg text-coffee/90 mb-6'>
                        Ако искате вашето пътуване да стартира от друга точка, различна от София - пишете ни. Предлагаме гъвкави опции за доставка на Gypsy van-а в различни точки на страната. 
                    </p>
                    <p className='text-lg text-mocha/80 mb-6'>
                        Благодарим ви, че избирате да създаватe незабравими спомени с Gypsy vans!
                    </p>
                    <p className='bg-beige p-4 rounded-2xl text-lg text-mocha/90 mb-6' >
                        <CiCircleInfo className='inline-block mr-2' />
                        <span className='font-bold'>Минималното време, за което може да бъде нает кемпервана е 2 нощувки.</span>
                    </p>  
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {plans.map((plan) => (
                        <div 
                            key={plan.name} 
                            className={`
                                relative rounded-2xl overflow-hidden border-6 border-black mb-8 transition-all duration-300 transform hover:-translate-y-2
                                ${plan.type === 'primary' ? 'shadow-deep scale-105 z-10' : 'shadow-soft hover:shadow-lg bg-white/60'}
                            `}
                        >
                            {/* Header */}
                            <div className={`p-8 text-center ${plan.type === 'primary' ? 'bg-coffee text-page' : 'bg-mocha text-page'}`}>
                                <h3 className='text-2xl font-head font-bold mb-2'>{plan.name}</h3>
                                <div className='flex justify-center items-baseline gap-1 mb-2'>
                                    <span className='text-4xl font-bold'>{plan.price}</span>
                                    <span className='text-xl opacity-80'>{plan.currency}</span>
                                    <span className='text-sm opacity-80'>{plan.frequency}</span>
                                </div>
                                
                                {plan.badge && (
                                    <span className={`
                                        inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-2
                                        ${plan.type === 'primary' ? 'bg-orange text-white' : 'bg-tan text-coffee'}
                                    `}>
                                        {plan.badge}
                                    </span>
                                )}
                                <p className='text-sm opacity-80 block'>{plan.desc}</p>
                            </div>

                            {/* Body */}
                            <div className={`p-8 ${plan.type === 'primary' ? 'bg-white' : ''}`}>
                                <ul className='space-y-4 mb-8'>
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className='flex items-center gap-3 text-ink/80'>
                                            <svg className="w-5 h-5 text-coffee/80 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                <circle cx="12" cy="12" r="6" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`
                                    w-full py-3 rounded-lg font-bold transition-colors duration-200
                                    ${plan.type === 'primary' 
                                        ? 'bg-orange text-white hover:bg-mocha' 
                                        : 'border-2 border-coffee text-coffee hover:bg-coffee hover:text-white'}
                                `}>
                                    РЕЗЕРВИРАЙ
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricePlans