import { GeneralUtil } from '../util/general-util';

export class FullTime {
  public homeTeam: string;
  public awayTeam: string;

  public mapToFullTime(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.awayTeam = data.awayTeam;
      this.homeTeam = data.homeTeam;
    }
  }
}

export class HalfTime {
  public homeTeam: string;
  public awayTeam: string;

  public mapToHalfTime(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.awayTeam = data.awayTeam;
      this.homeTeam = data.homeTeam;
    }
  }
}

export class ExtraTime {
  public homeTeam: string;
  public awayTeam: string;

  public mapToExtraTime(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.awayTeam = data.awayTeam;
      this.homeTeam = data.homeTeam;
    }
  }
}

export class Penalties {
  public homeTeam: string;
  public awayTeam: string;

  public mapToPenalties(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.awayTeam = data.awayTeam;
      this.homeTeam = data.homeTeam;
    }
  }
}
