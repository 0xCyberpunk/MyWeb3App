"use client"

import Image from "next/image"
import Matchup from "@/components/layout/matchup"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import Predictions from "@/components/layout/predictions"


export default function HomePage() {
  return (
    <>
    <div className="container mx-auto px-1">
      <div className="">
        <div className="ml-auto flex items-center space-x-4">
        </div>
      </div>
      
      

      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-start space-y-2">
          <h2 className="text-2xl font-bold tracking-tight pr-8">Daily Picks</h2>
          
        </div>
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                <Card className="border-green-800 bg-green-300/10">
                  <CardHeader className="space-y-0 my-auto">
                    <CardTitle className="text-base font-semibold">
                    <span className="text-xl pr-3"> ✅ </span>
          <span className="text-base text-green-400 "> Choose 2 players. Pick whether you think they will get MORE or LESS than their projection.</span>
                    
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>
              <Predictions />
            </div>
      
      </div>
      
    
  </>
  )
}
