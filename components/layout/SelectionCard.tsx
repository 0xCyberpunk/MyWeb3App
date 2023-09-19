import React, { useState } from 'react';
import { Button, buttonVariants } from '../ui/button';
import { Card, CardHeader, CardContent, CardDescription, CardTitle, CardFooter } from '../ui/card';
import { Player } from './predictions';

interface SelectedCardProps {
  player: Player;
  onDeselect: () => void; // add this line
}


export const SelectedCard: React.FC<SelectedCardProps> = ({ player }) => {
  const [prediction, setPrediction] = useState<'more' | 'less' | null>(null);

  return (
    <Card className="mb-4 px-1 max-h-60 p-3 relative">
      <button onClick={() => setPrediction(null)} className="absolute top-1 right-2 text-xl p-0">
          ✖️
        </button>
      <CardHeader className="space-y-1.5 p-1 flex items-start justify-start">
      
        <div className="flex items-start">
          
          <img
            className="mr-4 ml-1 rounded-full"
            src={player.imageUrl}
            alt={player.name}
            style={{ width: '90px', height: '90px' }}
          />
          <div>
            <CardTitle>{player.name}</CardTitle>
            <CardDescription className="mb-2 text-sm">
              {player.team} - {player.position}
              <br />
              {player.opponent}
            </CardDescription>
            <div className="flex items-center justify-between w-40 bg-violet-400/10 p-1 rounded-lg mt-2">
              <span className="text-sm text-violet-500 font-semibold pl-2">{player.statValue}</span>
              <span className="text-stone-400">|</span>
              <span className="text-xs font-base pr-2">{player.statType}</span>
            </div>
            <div className="mt-4 flex space-x-4 mb-1.5">
              <Button
                className={`w-full ${prediction === 'more' ? 'bg-green-400' : 'bg-gray-300'}`}
                onClick={() => setPrediction('more')}
              >
                More
              </Button>
              <Button
                className={`w-full ${prediction === 'less' ? 'bg-green-400' : 'bg-gray-300'}`}
                onClick={() => setPrediction('less')}
              >
                Less
              </Button>
            </div>
          </div>
        </div>
        
      </CardHeader>
    </Card>
  );
};

export default SelectedCard;
