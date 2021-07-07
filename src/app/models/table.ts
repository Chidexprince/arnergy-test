import { GeneralUtil } from '../util/general-util';
import { Team } from './team';

export class Table {
  public position: number;
  public playedGames: number;
  public form: string;
  public won: number;
  public draw: number;
  public lost: number;
  public points: number;
  public goalsFor: number;
  public goalsAgainst: number;
  public goalDifference: number;
  public team = new Team();

  public mapToTable(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.position = data.position;
      this.playedGames = data.playedGames;
      this.form = data.form;
      this.won = data.won;
      this.draw = data.draw;
      this.lost = data.lost;
      this.points = data.points;
      this.goalsFor = data.goalsFor;
      this.goalsAgainst = data.goalsAgainst;
      this.goalDifference = data.goalDifference;

      this.team.mapToTeam(data.team);
    }
  }
}
