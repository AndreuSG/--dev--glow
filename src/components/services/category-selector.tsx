

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";




interface CategorySelectorProps {
  currentCategory: string;
  onCategoryChange: (category: string) => void;
  categoryDescription: string;
}

export function CategorySelector({ currentCategory, onCategoryChange, categoryDescription }: CategorySelectorProps) {
  return (
    <>
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div role="tablist" className="flex justify-center gap-6">
            {['facial', 'corporal', 'masajes'].map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={currentCategory === category}
                onClick={() => onCategoryChange(category)}
                className={`px-6 py-2 text-lg font-semibold tracking-[.03em] rounded-full transition-all duration-250 ease-in-out
                  ${currentCategory === category 
                    ? 'bg-[#AE8871] text-white' 
                    : 'bg-transparent border border-[#AE8871] text-[#AE8871] hover:bg-[#AE8871]/12'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#E5D5C5] py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="w-6 h-6 text-[#AE8871]" />
            <h2 className={`${"font-serif"} text-5xl text-[#4A3F35]`}>
              Tratamientos {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}es
            </h2>
          </div>
          <p className="text-xl text-[#4A3F35]/80 max-w-3xl leading-relaxed">
            {categoryDescription}
          </p>
        </div>
      </div>
    </>
  );
}