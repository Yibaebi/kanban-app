import { Button } from '@/components';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`
        flex min-h-screen flex-col bg-blue-light p-5 py-24 dark:bg-dark dark:text-white md:p-24
        ${plusJakartaSans.className}
      `}
    >
      <h1 className="mb-10 text-xl text-red-dark">Welcome to Kanban App</h1>

      <section className="flex flex-col gap-4">
        <h6>Button Variants</h6>

        <div className="flex max-w-sm flex-col gap-3">
          <div className="flex flex-col gap-3">
            <Button label="Primary Small" />
            <Button label="Primary Large" size="large" />
          </div>

          <div className="flex flex-col gap-3">
            <Button label="Secondary Small" variant="secondary" />
            <Button label="Secondary Large" size="large" variant="secondary" />
          </div>

          <div className="flex flex-col gap-3">
            <Button label="Destructive Small" variant="destructive" />
            <Button
              label="Destructive Large"
              size="large"
              variant="destructive"
              disabled={true}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
