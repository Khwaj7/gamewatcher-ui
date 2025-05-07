export interface IGame {
  id: number;
  name: string;
  source: ISource[];
  subscribed: boolean;
  releaseDate: string;
}

interface ISource {
  twitter: string;
  lastUpdate: string;
}