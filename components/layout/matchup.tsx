import React from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

type TeamProps = {
  logo: string;
  name: string;
  wins: number;
  losses: number;
};

type MatchupProps = {
  leftTeam: TeamProps;
  rightTeam: TeamProps;
};

const Matchup: React.FC<MatchupProps> = ({ leftTeam, rightTeam }) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow flex p-6 mb-3">
      {/* Left Column */}
      <div className="flex-1 flex items-center">
      <Checkbox className="h-6 w-6"></Checkbox>
      <Avatar className="h-12 w-12 mr-4 ml-4">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
        <div>
          <div className="text-md sm:text-base font-semibold text-gray-100">{leftTeam.name}</div>
          <div className="text-base text-gray-500">{leftTeam.wins} - {leftTeam.losses}</div>
        </div>
      </div>

      {/* Center Column */}
      <div className="flex-1 flex items-center justify-center">
        <h2 className="text-xl">VS</h2>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex items-center justify-end">
        <div className="text-right">
          <div className="text-md sm:text-base font-semibold text-gray-100">{rightTeam.name}</div>
          <div className="text-base text-gray-500">{rightTeam.wins} - {rightTeam.losses}</div>
        </div>
        <Avatar className="h-12 w-12 mr-4 ml-4">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
        <Checkbox className="h-6 w-6"></Checkbox>
      </div>
    </div>
    
  );

  
};

export default Matchup;
