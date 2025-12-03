export interface Challenge {
  id: string;
  name: string;
  description: string;
  participants: number;
  maxParticipants?: number;
  startDate: Date;
  endDate: Date;
  reward?: string;
}

