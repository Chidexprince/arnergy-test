import { GeneralUtil } from '../util/general-util';

export class Winner {
  public id: number;
  public name: string;
  public shortName: string;
  public tla: string;
  public crestUrl: string;

  public mapToWinner(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.id = data.id;
      this.name = data.name;
      this.shortName = data.shortName;
      this.tla = data.tla;
      this.crestUrl = data.crestUrl;
    }
  }
}
