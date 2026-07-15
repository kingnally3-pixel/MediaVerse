export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="flex">
        <aside className="w-72 border-r border-white/10 p-6">
          <h2 className="mb-10 text-3xl font-bold text-cyan-400">
            Admin
          </h2>

          <ul className="space-y-4">
            <li>Dashboard</li>
            <li>Products</li>
            <li>Orders</li>
            <li>Users</li>
            <li>Analytics</li>
            <li>Settings</li>
          </ul>
        </aside>

        <main className="flex-1 p-10">
          <h1 className="text-5xl font-black">
            Dashboard
          </h1>
        </main>
      </div>
    </div>
  );
}