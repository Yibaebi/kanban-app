import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`
        flex min-h-screen flex-col items-center justify-center bg-blue-light p-24 dark:bg-dark
        ${plusJakartaSans.className}
      `}
    >
      <h2 className=" dark:text-white">Welcome to Kanban App</h2>
    </main>
  );
}
