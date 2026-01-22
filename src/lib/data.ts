import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const imageMap = new Map<string, ImagePlaceholder>(
  PlaceHolderImages.map((img) => [img.id, img])
);

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: ImagePlaceholder;
  coverPhoto?: ImagePlaceholder;
  bio: string;
  isFriend?: boolean;
  isFollowing?: boolean;
}

export interface Comment {
  id: string;
  user: User;
  text: string;
  timestamp: string;
}

export interface Post {
  id: string;
  user: User;
  text: string;
  image?: ImagePlaceholder;
  timestamp: string;
  likes: number;
  comments: Comment[];
}

export const users: User[] = [
  {
    id: 'user-1',
    name: 'Alex Doe',
    username: 'alexdoe',
    avatar: imageMap.get('user1-avatar')!,
    coverPhoto: imageMap.get('user1-cover')!,
    bio: 'Photographer & Explorer. Capturing moments from around the world.',
    isFriend: true,
  },
  {
    id: 'user-2',
    name: 'Samantha Green',
    username: 'samgreen',
    avatar: imageMap.get('user2-avatar')!,
    bio: 'Chef, food blogger, and cat lover. Spreading joy through delicious recipes.',
    isFollowing: true,
  },
  {
    id: 'user-3',
    name: 'Tom Anderson',
    username: 'tomanderson',
    avatar: imageMap.get('user3-avatar')!,
    bio: 'Tech enthusiast and developer. Building the future, one line of code at a time.',
  },
  {
    id: 'user-4',
    name: 'Jessica Williams',
    username: 'jesswilliams',
    avatar: imageMap.get('user4-avatar')!,
    bio: 'Fitness coach and motivational speaker.',
  },
    {
    id: 'user-5',
    name: 'Chris Johnson',
    username: 'chrisj',
    avatar: imageMap.get('user5-avatar')!,
    bio: 'Musician and artist. Creating sounds and visuals.',
    isFriend: false,
    isFollowing: true,
  },
];

export const currentUser: User = {
  id: 'user-self',
  name: 'Morgan',
  username: 'morgan',
  avatar: imageMap.get('user-self-avatar')!,
  coverPhoto: imageMap.get('user-self-cover')!,
  bio: 'Building awesome apps and exploring new technologies. Living the dream!',
};

const comments: Record<string, Comment[]> = {
  post1: [
    {
      id: 'c1-1',
      user: users[1],
      text: 'Wow, absolutely breathtaking view! 😮',
      timestamp: '2h ago',
    },
    {
      id: 'c1-2',
      user: users[2],
      text: 'Incredible shot! What camera did you use?',
      timestamp: '1h ago',
    },
  ],
  post2: [
    {
      id: 'c2-1',
      user: users[0],
      text: 'This looks so serene. I wish I was there!',
      timestamp: '5h ago',
    },
  ],
  post3: [
    {
      id: 'c3-1',
      user: currentUser,
      text: 'That looks so delicious! Recipe please? 🙏',
      timestamp: '30m ago',
    }
  ],
  post4: []
};

export const posts: Post[] = [
  {
    id: 'post-1',
    user: users[0],
    text: 'Found this hidden gem during my hike today. The views were simply stunning. #nature #adventure',
    image: imageMap.get('post1-image')!,
    timestamp: '4h ago',
    likes: 128,
    comments: comments['post1'],
  },
  {
    id: 'post-2',
    user: users[3],
    text: 'There is nothing quite like a sunset on the beach. Feeling grateful for these simple moments.',
    image: imageMap.get('post2-image')!,
    timestamp: '1d ago',
    likes: 256,
    comments: comments['post2'],
  },
  {
    id: 'post-3',
    user: users[1],
    text: 'Perfecting my carbonara recipe tonight! The secret is in the guanciale. 🍝 #foodie #italianfood',
    image: imageMap.get('post3-image')!,
    timestamp: '2d ago',
    likes: 512,
    comments: comments['post3'],
  },
  {
    id: 'post-4',
    user: users[2],
    text: 'Just deployed a new feature for my side project! It\'s a great feeling to see your code come to life. What is everyone working on?',
    timestamp: '3d ago',
    likes: 98,
    comments: comments['post4'],
  },
];
