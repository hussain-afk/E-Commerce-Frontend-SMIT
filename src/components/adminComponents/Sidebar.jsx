import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Package,
  Users,
  ShoppingBag,
  Settings,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";

const sidebarItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "All Products",
    path: "/admin/products",
    icon: Package,
  },
  {
    name: "All Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    name: "Orders",
    path: "/admin/orders",
    icon: ShoppingBag,
  },
  {
    name: "Manage",
    path: "/admin/manage",
    icon: Settings,
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          fixed left-4 top-4 z-50
          flex h-10 w-10 items-center justify-center
          rounded-lg border border-gray-200
          bg-white text-gray-700 shadow-sm
          transition hover:bg-gray-100
          md:hidden
        "
      >
        <Menu size={20} />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed inset-0 z-40
            bg-black/30
            md:hidden
          "
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-64 flex-col
          border-r border-gray-200
          bg-white
          transition-transform duration-300
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-5">
          <div className="flex items-center gap-3">

            <div className="
              flex h-9 w-9
              items-center justify-center
              rounded-lg
              bg-black
            ">
              <div className="h-3 w-3 rounded-sm bg-white" />
            </div>

            <div>
              <h1 className="text-sm font-bold text-gray-900">
                Admin Panel
              </h1>

              <p className="text-[10px] text-gray-400">
                Ecommerce
              </p>
            </div>

          </div>

          {/* Mobile Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="
              flex h-8 w-8 items-center justify-center
              rounded-lg
              text-gray-400
              hover:bg-gray-100
              hover:text-black
              md:hidden
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">

          <p className="
            mb-3 px-3
            text-[10px]
            font-semibold
            uppercase
            tracking-widest
            text-gray-400
          ">
            Overview
          </p>

          <div className="space-y-1">

            {sidebarItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/admin"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-black text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-black"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={18}
                        strokeWidth={isActive ? 2.2 : 1.8}
                        className={
                          isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:text-gray-700"
                        }
                      />

                      <span className="flex-1">
                        {item.name}
                      </span>

                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}

          </div>
        </nav>

        {/* Admin */}
        <div className="border-t border-gray-200 p-4">

          <div className="
            flex items-center gap-3
            rounded-lg
            border border-gray-100
            bg-gray-50
            px-3 py-2.5
          ">

            <div className="
              flex h-8 w-8 shrink-0
              items-center justify-center
              rounded-full
              bg-black
              text-xs font-semibold
              text-white
            ">
              A
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-gray-900">
                Admin
              </p>

              <p className="text-[10px] text-gray-400">
                Administrator
              </p>
            </div>

          </div>

        </div>
      </aside>
    </>
  );
}

export default Sidebar;