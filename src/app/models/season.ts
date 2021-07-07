import { GeneralUtil } from '../util/general-util';
import { Winner } from './winner';

export class Season {
  public id: number;
  public startDate: string;
  public endDate: string;
  public currentMatchDay: number;
  public winner = new Winner();

  public mapToSeason(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.id = data.id;
      this.startDate = data.startDate;
      this.endDate = data.endDate;
      this.currentMatchDay = data.currentMatchDay;

      this.winner.mapToWinner(data.winner);
    }
  }

}
