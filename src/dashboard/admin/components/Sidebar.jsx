import { NavLink } from "react-router-dom";
import {
  FaBox,
  FaChartBar,
  FaHome,
  FaUsers,
  FaUserShield,
} from "react-icons/fa";

export default function Sidebar() {
  const links = [
    {
      to: "/admin",
      icon: <FaHome />,
      label: "Dashboard",
    },
    {
      to: "/admin/products",
      icon: <FaBox />,
      label: "Products",
    },
    {
      to: "/admin/staff",
      icon: <FaUserShield />,
      label: "Staff",
    },
    {
      to: "/admin/users",
      icon: <FaUsers />,
      label: "Users",
    },
    {
      to: "/admin/analytics",
      icon: <FaChartBar />,
      label: "Analytics",
    },
  ];

  return (
    <aside className="min-h-screen w-72 bg-slate-900 p-6">
      <h1 className="mb-10 text-3xl font-black text-cyan-400">
        MediaVerse
      </h1>

      <nav className="space-y-3">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl p-3 transition ${
                isActive
                  ? "bg-cyan-500 text-white"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}