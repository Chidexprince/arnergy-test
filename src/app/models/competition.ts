import { Season } from './season';
import { Area } from './area';
import { GeneralUtil } from '../util/general-util';

export class Competition {
  public id: number;
  public name: string;
  public code: string;
  public emblemUrl: string;
  public plan: string;
  public numberOfAvailableSeasons: number;
  public lastUpdated: string;
  public area = new Area();
  public currentSeason = new Season();

  public mapToCompetition(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.id = data.id;
      this.name = data.name;
      this.code = data.code;
      this.emblemUrl = data.emblemUrl;
      this.plan = data.plan;
      this.numberOfAvailableSeasons = data.numberOfAvailableSeasons;
      this.lastUpdated = data.lastUpdated;

      this.area.mapToArea(data.area);
      this.currentSeason.mapToSeason(data.currentSeason);
    }
  }
}
