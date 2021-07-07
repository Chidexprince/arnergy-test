import { GeneralUtil } from '../util/general-util';
import { FullTime, HalfTime, ExtraTime, Penalties } from './match-details';

export class Score {
  public winner: string;
  public duration: string;

  public fullTime = new FullTime();
  public halfTime = new HalfTime();
  public extraTime = new ExtraTime();
  public penalties = new Penalties();

  public mapToScore(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.duration = data.duration;
      this.winner = data.winner;

      this.fullTime.mapToFullTime(data.fullTime);
      this.halfTime.mapToHalfTime(data.halfTime);
      this.extraTime.mapToExtraTime(data.extraTime);
      this.penalties.mapToPenalties(data.penalties);
    }
  }
}
