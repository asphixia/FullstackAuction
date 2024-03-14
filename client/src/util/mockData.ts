export interface Auction {
    id: number;
    title: string;
    details: string;
  }
  
  export const auctions: Auction[] = [
    { id: 1, title: 'Auction 1', details: 'Details about auction 1' },
    { id: 2, title: 'Auction 2', details: 'Details about auction 2' },
    { id: 3, title: 'Auction 3', details: 'Details about auction 3' },
  ];
