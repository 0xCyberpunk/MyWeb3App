import { Player } from '@livepeer/react';
import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from '../ui/card';

interface GameCardProps {
  player: typeof Player;
}

const PredictionCard: React.FC<GameCardProps> = ({ player }) => {
  const [predictionOutcome, setPredictionOutcome] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-between bg-purple-700 p-4 rounded-lg w-full mb-4">
      <img src={player.imageUrl} alt={player.name} style={{ width: '60px', height: '60px' }} className="mr-4" />
      <span className="text-lg text-white">{player.name}</span>
      <div className="flex items-center">
        <button className="mr-3 bg-gray-800 text-white rounded p-2">More</button>
        <button className="bg-gray-800 text-white rounded p-2">Less</button>
      </div>
    </div>
  );
}

const GameCard: React.FC<GameCardProps> = ({ player }) => {
  const [predictionOutcome, setPredictionOutcome] = useState<string | null>(null);

  return (
    <Card className="cursor-pointer flex flex-col items-center justify-center p-4 bg-purple-700 rounded-lg">
      <CardHeader className="w-full pb-3 flex flex-col items-center justify-center">
        <CardTitle className="text-xl font-bold text-white">{player.name}</CardTitle>
        <CardDescription className="text-white mt-2">{`${player.team} - ${player.position}`}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center w-full mt-3">
        <PredictionCard player={player} />
        <img className="mb-3" src={player.imageUrl} alt={player.name} style={{ width: '110px', height: '110px' }} />
        <span className="text-lg text-white mb-2">{player.opponent}</span>
        <div className="flex items-center justify-between w-44 bg-stone-800 p-2 rounded-lg">
          <span className="text-lg text-green-400 font-bold pl-2">{player.statValue}</span>
          <span className="text-stone-400">|</span>
          <span className="text-base font-medium pr-2">{player.statType}</span>
        </div>
        <div className="mt-4">
          <select
            className="bg-gray-800 text-white rounded p-2"
            value={predictionOutcome}
            onChange={(e) => setPredictionOutcome(e.target.value)}
          >
            <option value="" disabled>Select Outcome</option>
            <option value="win">{player.name} Wins</option>
            <option value="lose">{player.name} Loses</option>
          </select>
        </div>
      </CardContent>
    </Card>
  );
}

export default GameCard;
