

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { TeamMember } from "../../types/team";

interface TeamMemberDisplayProps {
  member: TeamMember;
}

export function TeamMemberDisplay({ member }: TeamMemberDisplayProps) {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="aspect-[3/4] relative z-10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-2xl"
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
            <h2 className="text-5xl font-serif text-[#4A3F35] mb-4">{member.name}</h2>
            <h3 className="text-2xl font-medium text-[#C79F7D] mb-6">{member.role}</h3>
            <p className="text-[#4A3F35]/80 text-xl leading-relaxed mb-8">{member.description}</p>
            
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-[#4A3F35] mb-4">Especialidades:</h4>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((specialty, idx) => (
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
    </div>
  );
}