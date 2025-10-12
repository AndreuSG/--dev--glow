

import { Card } from "../../components/ui/card";
import { Instagram } from "lucide-react";
import { instagramPosts } from '@/config/home';

import { Link } from "react-router-dom";


export function InstagramFeed() {
  return (
    <section className="py-20 px-4 bg-[#F5EDE4]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-16">
          <Instagram className="w-6 h-6 text-[#4A3F35]" />
          <h2 className="text-5xl font-serif text-center text-[#4A3F35]">Síguenos en Instagram</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <Link to={post.link} key={index} target="_blank" rel="noopener noreferrer">
              <Card className="overflow-hidden group cursor-pointer bg-white">
                <div className="relative aspect-square">
                  <img
                    src={post.img}
                    alt={post.caption}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white text-sm px-2 text-center">{post.caption}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}