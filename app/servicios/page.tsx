"use client";

import React from 'react';
import { serviceCategories } from "@/config/services";
import { CategorySelector } from "@/components/services/category-selector";
import { ServiceGrid } from "@/components/services/service-grid";

export default function ServiciosPage() {
  const [currentCategory, setCurrentCategory] = React.useState<'facial' | 'corporal' | 'masajes'>('facial');

  return (
    <div className="min-h-screen bg-[#F5EDE4]">
      <CategorySelector
        currentCategory={currentCategory}
        onCategoryChange={(category) => setCurrentCategory(category as 'facial' | 'corporal' | 'masajes')}
        categoryDescription={serviceCategories[currentCategory].description}
      />
      <ServiceGrid services={serviceCategories[currentCategory].services} />
    </div>
  );
}