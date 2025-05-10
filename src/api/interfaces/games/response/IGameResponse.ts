import { IGame } from '../../../../interfaces/IGame.ts';
import { IResponse } from '../../IResponse.ts';

export type IGameResponse = IResponse<IGame[]>;

export type IGuildGamesResponse = IResponse<{ games: IGame[] }>;