import { Team } from './team';
import { Score } from './score';
import { Odds } from './odds';
import { Season } from './season';
import { GeneralUtil } from '../util/general-util';

export class Matches {
  public id: number;
  public utcDate: string;
  public status: string;
  public matchDay: number;
  public stage: string;
  public group: string;
  public lastUpdated: string;

  public homeTeam = new Team();
  public awayTeam = new Team();
  public odds = new Odds();
  public score = new Score();
  public season = new Season();

  public mapToMatches(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.id = data.id;
      this.utcDate = data.utcDate;
      this.status = data.status;
      this.matchDay = data.matchday;
      this.stage = data.stage;
      this.group = data.group;
      this.lastUpdated = data.lastUpdated;

      this.homeTeam.mapToTeam(data.homeTeam);
      this.awayTeam.mapToTeam(data.awayTeam);
      this.odds.mapToOdds(data.odds);
      this.score.mapToScore(data.score);
      this.season.mapToSeason(data.season)
    }
  }
}

