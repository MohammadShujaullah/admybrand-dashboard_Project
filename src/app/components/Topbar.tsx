'use client';

export default function Topbar() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow px-6 py-4 flex justify-between items-center relative z-10">
      <h2 className="text-lg font-semibold">Overview</h2>

      <div className="flex items-center space-x-4">
        {/* 👋 You can add more controls here if needed */}
        <div className="text-sm text-gray-500 dark:text-gray-300 pr-8">Hello, Admin</div>
      </div>
    </header>
  );
}

