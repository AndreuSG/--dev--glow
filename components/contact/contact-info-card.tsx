"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import type { ContactInfo } from "@/types/contact";

interface ContactInfoCardProps {
  info: ContactInfo;
  index: number;
}

export function ContactInfoCard({ info, index }: ContactInfoCardProps) {
  return (
    <Card 
      key={index}
      className="p-6 bg-white/50 backdrop-blur-sm border-0 hover:bg-white/80 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-full bg-[#C79F7D]/10">
          <info.icon className="w-6 h-6 text-[#C79F7D]" />
        </div>
        <h3 className="text-lg font-medium text-[#4A3F35]">{info.title}</h3>
      </div>
      {info.details.map((detail, idx) => (
        <p key={idx} className="text-[#4A3F35]/80">{detail}</p>
      ))}
    </Card>
  );
}