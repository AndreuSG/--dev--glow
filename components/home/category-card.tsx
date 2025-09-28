"use client";

import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle } from "lucide-react";

const iconMap = {
  ShoppingBag,
  MessageCircle,
};

interface CategoryCardProps {
  category: {
    title: string;
    description: string;
    icon: string;
    href: string;
  };
  index: number;
  onClick: () => void;
}

export function CategoryCard({ category, index, onClick }: CategoryCardProps) {
  const Icon = iconMap[category.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <button 
        onClick={onClick}
        className="w-full h-full text-left"
      >
        <div className={`group cursor-pointer rounded-2xl border border-white/20 transition-all duration-300 h-full p-4 md:p-8
          md:bg-white/10 md:backdrop-blur-sm md:hover:bg-white/20
          bg-white/80 backdrop-blur-md
        `}>
          {Icon && (
            <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#C79F7D] mb-4 md:mb-6" />
          )}
          <h3 className="text-[#4A3F35] md:text-white font-serif text-lg md:text-2xl mb-2 md:mb-3">
            {category.title}
          </h3>
          <p className="text-[#4A3F35]/80 md:text-white/80 text-sm leading-relaxed">
            {category.description}
          </p>
        </div>
      </button>
    </motion.div>
  );
}