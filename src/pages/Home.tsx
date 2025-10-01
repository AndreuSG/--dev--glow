import { Hero } from "../components/home/hero";
import { WhyUs } from "../components/sections/why-us";
import { FeaturedServices } from "../components/sections/featured-services";
import { Services } from "../components/sections/services";
import { FeaturedProducts } from "../components/sections/featured-products";
import { InstagramFeed } from "../components/sections/instagram-feed";
import { Contact } from "../components/sections/contact";
import { Testimonials } from "../components/sections/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5EDE4]">
      <Hero />
      <div id="why-us">
        <WhyUs />
      </div>
      <div id="novedades">
        <FeaturedServices />
      </div>
      <div id="servicios">
        <Services />
      </div>
      <div id="productos">
        <FeaturedProducts />
      </div>
      <div id="testimonios">
        <Testimonials />
      </div>
      <InstagramFeed />
      <Contact />
    </main>
  );
}
