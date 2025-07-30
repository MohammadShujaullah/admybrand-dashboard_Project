import './globals.css';
import { Inter } from 'next/font/google';
import Sidebar from '@/app/components/Sidebar';
import Topbar from '@/app/components/Topbar';
import ThemeToggle from '@/app/components/ThemeToggle';
import { Toaster } from 'sonner'; // ✅ Add this

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ADmyBRAND Dashboard',
  description: 'AI-Powered Analytics Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300`}>
        <Sidebar />
        <div className="flex-1 flex flex-col relative">
          <Topbar />
          <ThemeToggle /> {/* Floating button in top-right corner */}
          <main className="p-6">{children}</main>
        </div>
        <Toaster position="top-right" richColors /> {/* ✅ Add this line at bottom of body */}
      </body>
    </html>
  );
}
