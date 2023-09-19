import React, { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from '../ui/card';
import SelectedCard from './SelectionCard';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export type Player = {
  name: string;
  team: string;
  position: string;
  opponent: string;
  statValue: number;
  statType: string;
  imageUrl: string;
};

export const players: Player[] = [
  {
    name: 'Kirk Cousins',
    team: 'MIN',
    position: 'QB',
    opponent: 'Sep 14th vs PHI',
    statValue: 273,
    statType: 'Pass Yards',
    imageUrl: '/Kirk_Cousins.webp'
  },
  {
    name: 'Jalen Hurt',
    team: 'PHI',
    position: 'QB',
    opponent: 'Sep 12th vs DAL',
    statValue: 250.5,
    statType: 'Pass Yards',
    imageUrl: '/Hurts.webp'
  },
  {
    name: 'Kirk Cousins',
    team: 'MIN',
    position: 'QB',
    opponent: 'Sep 14th vs PHI',
    statValue: 273,
    statType: 'Pass Yards',
    imageUrl: '/Kirk_Cousins.webp'
  },
  {
    name: 'Justin Herbert',
    team: 'LAC',
    position: 'QB',
    opponent: 'Sep 13th vs CLE',
    statValue: 331,
    statType: 'Pass Yards',
    imageUrl: '/Herbert.webp'
  },
  {
    name: 'Justin Herbert',
    team: 'LAC',
    position: 'QB',
    opponent: 'Sep 13th vs CLE',
    statValue: 331,
    statType: 'Pass Yards',
    imageUrl: '/Herbert.webp'
  },
  {
    name: 'Jalen Hurt',
    team: 'PHI',
    position: 'QB',
    opponent: 'Sep 12th vs DAL',
    statValue: 250.5,
    statType: 'Pass Yards',
    imageUrl: '/Hurts.webp'
  },
  {
    name: 'Kirk Cousins',
    team: 'MIN',
    position: 'QB',
    opponent: 'Sep 14th vs PHI',
    statValue: 273,
    statType: 'Pass Yards',
    imageUrl: '/Kirk_Cousins.webp'
  },
  {
    name: 'Kirk Cousins',
    team: 'MIN',
    position: 'QB',
    opponent: 'Sep 14th vs PHI',
    statValue: 273,
    statType: 'Pass Yards',
    imageUrl: '/Kirk_Cousins.webp'
  },
  {
    name: 'Jalen Hurt',
    team: 'PHI',
    position: 'QB',
    opponent: 'Sep 12th vs DAL',
    statValue: 250.5,
    statType: 'Receiving Yards',
    imageUrl: '/Hurts.webp'
  },
  {
    name: 'Justin Herbert',
    team: 'LAC',
    position: 'QB',
    opponent: 'Sep 13th vs CLE',
    statValue: 331,
    statType: 'Pass Yards',
    imageUrl: '/Herbert.webp'
  },
  {
    name: 'Kirk Cousins',
    team: 'MIN',
    position: 'QB',
    opponent: 'Sep 14th vs PHI',
    statValue: 273,
    statType: 'Pass Yards',
    imageUrl: '/Kirk_Cousins.webp'
  },
  {
    name: 'Justin Herbert',
    team: 'LAC',
    position: 'QB',
    opponent: 'Sep 13th vs CLE',
    statValue: 331,
    statType: 'Pass Yards',
    imageUrl: '/Herbert.webp'
  },
  {
    name: 'Kirk Cousins',
    team: 'MIN',
    position: 'QB',
    opponent: 'Sep 14th vs PHI',
    statValue: 273,
    statType: 'Pass Yards',
    imageUrl: '/Kirk_Cousins.webp'
  },
  {
    name: 'Justin Herbert',
    team: 'LAC',
    position: 'QB',
    opponent: 'Sep 13th vs CLE',
    statValue: 331,
    statType: 'Pass Yards',
    imageUrl: '/Herbert.webp'
  },
];


interface PredictionCardProps {
  player: Player;
  onCardSelect: (player: Player) => void;
  
  selectedPlayers: Player[];
}

const PredictionCard: React.FC<PredictionCardProps> = ({ player, onCardSelect, selectedPlayers }) => {
  const [isChecked, setChecked] = useState(false);
  
  const handleCardClick = () => {
    if (selectedPlayers.includes(player)) {
      setChecked(false);
      onCardSelect(player);
    } else if (selectedPlayers.length < 2) {
      setChecked(true);
      onCardSelect(player);
    }
};


  return (
    <Card onClick={handleCardClick} className="cursor-pointer relative flex flex-col items-center justify-center p-1">
      <div className="absolute top-3 right-4">
        <Checkbox checked={isChecked} onChange={handleCardClick} />
      </div>
      <img className="mt-3 rounded-full" src={player.imageUrl} alt={player.name} style={{ width: '110px', height: '110px' }} />
      <CardHeader className="pb-3 flex flex-col justify-center items-center w-full text-center">
        <CardTitle className="text-lg font-bold">{player.name}</CardTitle>
        <CardDescription>
          {`${player.team} - ${player.position}`}
          <br />
          {player.opponent}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center w-full mt-1">
        <div className="flex items-center justify-between w-52 bg-violet-400/10 p-2 rounded-lg">
          <span className="text-xl text-violet-500 font-bold pl-2">{player.statValue}</span>
          <span className="text-stone-400">|</span>
          <span className="text-sm font-medium pr-2">{player.statType}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const Predictions: React.FC = () => {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [betAmount, setBetAmount] = useState<string>("");
  {selectedPlayers.map((player, index) => (
    <SelectedCard key={index} player={player} onDeselect={() => handleDeselect(player)} />
  ))}


const handleDeselect = (deselectedPlayer: Player) => {
    setSelectedPlayers(prev => prev.filter(player => player !== deselectedPlayer));
};

const handleCardSelect = (player: Player) => {
  setSelectedPlayers(prev => {
      if (prev.includes(player)) {
          return prev.filter(p => p !== player);
      } else {
          return [...prev, player];
      }
  });
};

  const canPlaceBet = selectedPlayers.length === 2;

  return (
    <div className="flex">
      <div className="w-2/3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {players.map((player, index) => (
  <PredictionCard
    key={index}
    player={player}
    onCardSelect={handleCardSelect}
    selectedPlayers={selectedPlayers} // Add this line
  />
))}
      </div>
      <div className="w-1/3 pl-4">
        <Card className="mb-4 p-4 bg-stone-950">
          {selectedPlayers.length ? (
            <>
              <h2 className="text-left font-semibold text-base mb-3">My Selections</h2>
              {selectedPlayers.map((player, index) => (
  <SelectedCard key={index} player={player} onDeselect={() => handleDeselect(player)} />
))}
            </>
          ) : (
            <>
             <h2 className="text-center mt-4 font-semibold text-xl">No Players Selected</h2>
              <img className="p-2 my-8 m-auto"src="/empty.webp" alt="Empty state" style={{ width: '220px', height: '220px' }}/>
             
            </>
          )}
          <div className="flex mt-4 mb-5 space-x-4">
          <Input 
          placeholder="Bet amount"
  value={`${betAmount}`}
  onChange={e => setBetAmount(e.target.value.replace(/[^0-9]/g, ''))}
  className="w-1/2 p-3 py-6 rounded border border-neutral-600"
/>

<Input
  value={`To Win: $${Number(betAmount) * 2}`}
  readOnly
  className="w-1/2 p-3 py-6 rounded border border-green-800 font-semibold text-green-300 bg-green-300/10 cursor-not-allowed"
/>
          </div>
          <div className="mt-6 mb-2">
            <Button
              className={`w-full p-5 font-semibold rounded ${canPlaceBet ? 'cursor-pointer' : 'bg-gray-300 cursor-not-allowed'}`}
              disabled={!canPlaceBet}
            >
              Place Bet
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Predictions;
