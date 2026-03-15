'use client';

import { CrimeSection } from './CrimeSection';
import { PoliceCrimeSection } from './PoliceCrimeSection';
import { MotivesSection } from './MotivesSection';
import { OffendersSection } from './OffendersSection';
import { Separator } from '@/components/ui/separator';

export function CrimeJusticeSection() {
  return (
    <section id="crime-justice" className="py-8" aria-labelledby="crime-justice-heading">
      <div className="border-l-4 border-[#003087] pl-4 mb-6">
        <h2 id="crime-justice-heading" className="text-2xl font-bold text-[#003087] dark:text-white">
          Crime & Criminal Justice
        </h2>
        <p className="text-[#6B6B6B] dark:text-[#A0A0A0] mt-1">
          A consolidated view of crime levels, motives, police misconduct, and the criminal justice system.
          This section combines data from ONS, Home Office, MoJ, IOPC, and other official sources.
        </p>
      </div>

      <div className="grid gap-8">
        <div>
          <h3 className="text-xl font-semibold text-[#003087] dark:text-white mb-3">Crime Levels & Trends</h3>
          <CrimeSection />
        </div>

        <Separator className="my-8 bg-[#DEE0E2] dark:bg-[#3A3A3A]" />

        <div>
          <h3 className="text-xl font-semibold text-[#003087] dark:text-white mb-3">
            Police Crime & Misconduct
          </h3>
          <PoliceCrimeSection />
        </div>

        <Separator className="my-8 bg-[#DEE0E2] dark:bg-[#3A3A3A]" />

        <div>
          <h3 className="text-xl font-semibold text-[#003087] dark:text-white mb-3">Motives for Crime</h3>
          <MotivesSection />
        </div>

        <Separator className="my-8 bg-[#DEE0E2] dark:bg-[#3A3A3A]" />

        <div>
          <h3 className="text-xl font-semibold text-[#003087] dark:text-white mb-3">
            Criminal Justice & Prisons
          </h3>
          <OffendersSection />
        </div>
      </div>
    </section>
  );
}
