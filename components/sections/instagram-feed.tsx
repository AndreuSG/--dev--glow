"use client";

import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";

const instagramPosts = [
  {
    id: "1",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    caption: "Consejos para una piel radiante 💫 #GlowSkin #Beauty",
    likes: 124
  },
  {
    id: "2",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    caption: "Nuevo tratamiento disponible 🌟 #GlowUp",
    likes: 89
  },
  {
    id: "3",
    type: "reel",
    thumbnail: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    caption: "Antes y después increíble ✨ #Transformation",
    likes: 256
  },
  {
    id: "4",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    caption: "Promoción especial este mes 🎉 #GlowOffers",
    likes: 167
  }
] as const;

export function InstagramFeed() {
  return (
    <section className="py-20 px-4 bg-[#F5EDE4] diagonal-top diagonal-bottom relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-16">
          <Instagram className="w-6 h-6 text-[#4A3F35]" />
          <h2 className="text-4xl font-serif text-center text-[#4A3F35]">Síguenos en Instagram</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group cursor-pointer bg-white">
              <div className="relative aspect-square">
                <img
                  src={post.thumbnail}
                  alt={post.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-sm">{post.caption}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}