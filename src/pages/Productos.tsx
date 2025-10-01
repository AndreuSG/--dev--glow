import React from 'react';
import { productBrands } from "../config/products";
import { BrandSelector } from "../components/products/brand-selector";
import { ProductGrid } from "../components/products/product-grid";

export default function ProductosPage() {
  const [currentBrand, setCurrentBrand] = React.useState<'toskani' | 'casmara'>('toskani');

  return (
    <div className="min-h-screen bg-[#F5EDE4]">
      <BrandSelector
        currentBrand={currentBrand}
        onBrandChange={(brand) => setCurrentBrand(brand as 'toskani' | 'casmara')}
        brandDescription={productBrands[currentBrand].description}
      />
      <ProductGrid products={productBrands[currentBrand].products} />
    </div>
  );
}
