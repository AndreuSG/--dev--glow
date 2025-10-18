import { motion } from "framer-motion";
import { teamMembers } from "../config/team";
import { Sparkles } from "lucide-react";

export default function EquipoPage() {
  const members = [
    { key: 'rosa', ...teamMembers.rosa },
    { key: 'claudia', ...teamMembers.claudia }
  ];

  return (
    <div className="min-h-screen bg-[#F5EDE4]">
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/img/team/dddd.jpg"
            alt="Nuestro equipo"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative h-[70vh] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight text-white">
              Nuestro equipo
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Profesionales altamente cualificados dedicados a tu bienestar y belleza
            </p>
          </motion.div>
        </div>
      </section>

      {members.map((memberData, index) => (
        <section
          key={memberData.key}
          className={`py-20 px-4 ${index % 2 === 0 ? 'bg-[#F5EDE4]' : 'bg-[#F7F3EE]'}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-16 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className="aspect-[3/4] relative z-10">
                    <img
                      src={memberData.member.image}
                      alt={memberData.member.name}
                      className="w-full h-full object-cover rounded-2xl object-top"
                    />
                  </div>
                  <div
                    className="absolute -bottom-4 -right-4 w-full h-full bg-[#C79F7D]/20 rounded-2xl -z-10"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-[#C79F7D]" />
                  <span className="text-[#C79F7D] font-medium">Nuestros expertos</span>
                </div>
                <h2 className="text-5xl text-[#4A3F35] mb-4">{memberData.member.name}</h2>
                <h3 className="text-2xl font-medium text-[#C79F7D] mb-6">{memberData.member.role}</h3>
                <p className="text-[#4A3F35]/80 text-xl leading-relaxed mb-8">{memberData.member.description}</p>

                <div className="space-y-2">
                  <h4 className="text-lg font-medium text-[#4A3F35] mb-4">Especialidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {memberData.member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-[#C79F7D]/10 text-[#C79F7D] px-4 py-2 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
