import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Factory,
  Landmark,
  MonitorSmartphone,
  ShoppingBag,
  Scale,
  Utensils,
  Zap,
} from "lucide-react";

/* ---------- Industries Data ---------- */
const industries = [
  // Row 1 (5 items)
  { name: "Education",          icon: Building2,        color: "text-blue-500",    bg: "bg-blue-50"    },
  { name: "Healthcare",         icon: Stethoscope,      color: "text-rose-500",    bg: "bg-rose-50"    },
  { name: "Manufacturing",      icon: Factory,          color: "text-amber-500",   bg: "bg-amber-50"   },
  { name: "BFSI",               icon: Landmark,         color: "text-emerald-500", bg: "bg-emerald-50" },
  { name: "IT & Software",      icon: MonitorSmartphone,color: "text-indigo-500",  bg: "bg-indigo-50"  },

  // Row 2
  { name: "Govt & Public Sector", icon: Scale,          color: "text-slate-600",   bg: "bg-slate-100", col: "lg:col-start-2" },
  { name: "Retail",             icon: ShoppingBag,      color: "text-pink-500",    bg: "bg-pink-50",   col: "lg:col-start-4" },
  { name: "Hospitality",        icon: Utensils,         color: "text-orange-500",  bg: "bg-orange-50", col: "lg:col-start-6" },
  { name: "Energy & Utilities", icon: Zap,              color: "text-yellow-500",  bg: "bg-yellow-50", col: "lg:col-start-8" },
];

const DiscoverUs = () => {
  return (
    <section id="discover-us" className="py-6 bg-white">
      <div className="container mx-auto px-6">

        {/* ---------- Header ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 mt-6"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Industries We Serve
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto text-center px-4">
            Delivering tailored solutions across diverse sectors to drive innovation and growth.
          </p>
        </motion.div>

        {/* ---------- Industries Grid ---------- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-10 gap-3 sm:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`group p-5 rounded-3xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center
                lg:col-span-2
                ${industry.col ?? ""}
              `}
            >
              {/* Glow */}
              <div
                className={`absolute top-0 right-0 p-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${industry.bg}`}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl ${industry.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <industry.icon className={`w-6 h-6 ${industry.color}`} />
              </div>

              {/* Name */}
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#00615c] transition-colors">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DiscoverUs;