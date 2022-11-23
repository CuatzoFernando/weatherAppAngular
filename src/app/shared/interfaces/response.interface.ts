import { ILists } from './sinlgeResponseCity.interface';

export interface IResponse {
  clouds: string;
  count: number;
  code: string;
  message: string;
  list: ILists[];
}
