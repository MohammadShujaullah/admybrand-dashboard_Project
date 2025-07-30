export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md h-screen p-5 sticky top-0 hidden md:block">
      <h1 className="text-xl font-bold mb-8">ADmyBRAND</h1>
      <nav className="flex flex-col gap-4">
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Dashboard</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Reports</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Settings</a>
      </nav>
    </aside>
  );
}
