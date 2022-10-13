import { IMenu } from './IMenu';

export interface ISidebar {
  title: string,
  state: 'open' | 'closed',
  menu: IMenu[]
}
