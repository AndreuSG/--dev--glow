import React from 'react';
import { teamMembers } from "../config/team";
import { MemberSelector } from "../components/team/member-selector";
import { TeamMemberDisplay } from "../components/team/team-member-display";

export default function EquipoPage() {
  const [currentMember, setCurrentMember] = React.useState<'rosa' | 'claudia'>('rosa');

  return (
    <div className="min-h-screen bg-[#F5EDE4]">
      <MemberSelector
        currentMember={currentMember}
        onMemberChange={(member) => setCurrentMember(member as 'rosa' | 'claudia')}
        memberDescription={teamMembers[currentMember].description}
      />
      <TeamMemberDisplay member={teamMembers[currentMember].member} />
    </div>
  );
}
