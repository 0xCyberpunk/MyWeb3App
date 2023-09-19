import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export function DemoCreateAccount({ onClose }: { onClose: () => void }) {
  
  const [username, setUsername] = useState('');
  const defaultAvatar = '/avatar.jpg';
  const [avatarSrc, setAvatarSrc] = useState<string>(defaultAvatar);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setAvatarSrc(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 min-h-screen">
      <Card>
        <div className="flex justify-between items-start p-4">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Let's get your profile setup!</CardTitle>
          </CardHeader>
          <button onClick={onClose} className="text-xl font-thin hover:text-gray-300">✖</button>
        </div>
        <CardContent className="grid gap-4">
          <div className="relative">
            {/* Removed the line divider here */}
            <div className="relative flex justify-center text-xs uppercase">
              <input type="file" onChange={handleAvatarChange} style={{display: 'none'}} id="avatarUploader"/>
              <label htmlFor="avatarUploader">
                <Avatar>
                  <AvatarImage 
                    src={avatarSrc} 
                    alt="User avatar" 
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%', 
                        borderColor: '#38B2AC',
                        borderWidth: '4px',
                        boxShadow: '0 0 8px 3px #38B2AC',
                        objectFit: 'cover'
                    }} 
                  />
                </Avatar>
              </label>
            </div>
            <span className="bg-background mt-6 px-2 flex justify-center items-center font-semibold text-teal-400 text-lg">@{username}</span>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="@username" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
        </CardContent>
        <CardFooter>
  <Button 
    onClick={onClose} // Add this onClick handler to close the modal
    className="w-full py-5 text-sm font-semibold text-white"
  >
    Save Changes
  </Button>
</CardFooter>

      </Card>
    </div>
  );
}
