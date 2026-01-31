'use client';

import { WaveDivider } from '../components/WaveDivider'
export function CurateBanner() {
  return (
    <section className="relative bg-orange min-h-[70vh] flex items-center justify-center overflow-hidden pb-[150px] md:pb-[150px]">
      {/* Text content – perfectly centered */}
      <div className="w-full text-center px-6">
        <div className="animate-reveal max-w-4xl mx-auto">
          <h2 className="accent-head text-4xl md:text-6xl font-medium text-white">
            Кемперванът - Лукс, уют и свобода в едно
          </h2>

          <p className="mt-6 text-white/90 text-lg md:text-xl">
            Нашият Mercedes Sprinter 2020 е оборудван с най-висок клас системи за комфорт и автономност, така че да се чувстваш у дома, където и да си.
            Интериорът е в модерен boho & minimalistic стил – топли натурални цветове, качествени естествени материали, меки форми и внимание към светлината и атмосферата.
            <br /><br />
            Тук уютът среща функционалността, а простотата – щастието да се насладиш на пътя.
          </p>
        </div>
      </div>

      <WaveDivider
        fill="var(--beige-bg)"
        height={150}
        frequency={4}
        amplitude={35}
        baseline={65}
        variant='smooth'
        overlap={-2}
      />
    </section>
  );
}
