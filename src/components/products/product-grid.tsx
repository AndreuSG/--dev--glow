

import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { ShoppingBag } from "lucide-react";

import type { Product } from "../../types/product";



interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className={`${"font-serif"} text-2xl text-[#4A3F35] mb-4`}>
                  {product.name}
                </h3>
                <p className="text-[#4A3F35]/80 leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <Button className="bg-[#C79F7D] hover:bg-[#B68E6C] text-white ml-auto">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Comprar
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}