'use client';

import { useState } from 'react';
import { UserPlus, UserCheck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

type FriendStatus = 'not_friend' | 'pending' | 'is_friend';

interface FriendButtonProps {
  initialStatus: FriendStatus;
}

export function FriendButton({ initialStatus }: FriendButtonProps) {
  const [status, setStatus] = useState<FriendStatus>(initialStatus);

  const handleClick = () => {
    if (status === 'not_friend') {
      setStatus('pending');
    } else if (status === 'pending') {
      setStatus('not_friend');
    } else if (status === 'is_friend') {
      // Here you might open a confirmation modal
      setStatus('not_friend');
    }
  };

  const buttonConfig = {
    not_friend: {
      text: 'Add Friend',
      icon: UserPlus,
      variant: 'default',
    },
    pending: {
      text: 'Pending',
      icon: Clock,
      variant: 'secondary',
    },
    is_friend: {
      text: 'Friends',
      icon: UserCheck,
      variant: 'outline',
    },
  }[status];

  const Icon = buttonConfig.icon;

  return (
    <Button onClick={handleClick} variant={buttonConfig.variant as any} className="transition-all duration-200">
      <Icon className="mr-2 h-4 w-4" />
      {buttonConfig.text}
    </Button>
  );
}
