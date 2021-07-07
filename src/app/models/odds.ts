import { GeneralUtil } from '../util/general-util';

export class Odds {
  public msg: string;

  public mapToOdds(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.msg = data.msg;
    }
  }
}
