

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";




interface MemberSelectorProps {
  currentMember: string;
  onMemberChange: (member: string) => void;
  memberDescription: string;
}

export function MemberSelector({ currentMember, onMemberChange, memberDescription }: MemberSelectorProps) {
  return (
    <>
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div role="tablist" className="flex justify-center gap-6">
            <button
              role="tab"
              aria-selected={currentMember === 'rosa'}
              onClick={() => onMemberChange('rosa')}
              className={`px-6 py-2 text-lg font-semibold tracking-[.03em] rounded-full transition-all duration-250 ease-in-out
                ${currentMember === 'rosa' 
                  ? 'bg-[#AE8871] text-white' 
                  : 'bg-transparent border border-[#AE8871] text-[#AE8871] hover:bg-[#AE8871]/12'}`}
            >
              ROSA
            </button>
            <button
              role="tab"
              aria-selected={currentMember === 'claudia'}
              onClick={() => onMemberChange('claudia')}
              className={`px-6 py-2 text-lg font-semibold tracking-[.03em] rounded-full transition-all duration-250 ease-in-out
                ${currentMember === 'claudia' 
                  ? 'bg-[#AE8871] text-white' 
                  : 'bg-transparent border border-[#AE8871] text-[#AE8871] hover:bg-[#AE8871]/12'}`}
            >
              CLAUDIA
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#E5D5C5] py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Sparkles className="w-6 h-6 text-[#AE8871]" />
            <h2 className={`${"font-serif"} text-5xl text-[#4A3F35]`}>
              {currentMember === 'rosa' ? 'ROSA' : 'CLAUDIA'}
            </h2>
          </div>
          <p className="text-xl text-[#4A3F35]/80 max-w-3xl leading-relaxed">
            {memberDescription}
          </p>
        </div>
      </div>
    </>
  );
}