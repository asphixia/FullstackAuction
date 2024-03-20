export interface Categories {
    id: number;
    name: string;
    description: string;
  }
  
  export const categories: Categories[] = [
    { id: 1, name: 'Category 1', description: 'Details about category 1' },
    { id: 2, name: 'Category 2', description: 'Details about category 2' },
    { id: 3, name: 'Category 3', description: 'Details about category 3' },
  ];
  
  export interface Auction {
    id: number;
    title: string;
    details: string;
    category: Categories;
  }
  
  export const auctions: Auction[] = [
    { id: 1, title: 'Auction 1', details: 'Details about auction 1', category: categories[0] },
    { id: 2, title: 'Auction 2', details: 'Details about auction 2', category: categories[1] },
    { id: 3, title: 'Auction 3', details: 'Details about auction 3', category: categories[2] },
  ];

  export interface User {
    id: number;
    username: string;
    role: string;
  }

  export const users: User[] = [
    { id: 1, username: 'user1', role: 'user' },
    { id: 2, username: 'user2', role: 'user' },
    { id: 3, username: 'user3', role: 'user' },
    ];