import { GeneralUtil } from '../util/general-util';

export class Team {
  public id: number;
  public name: string;
  public crestUrl: string;

  public mapToTeam(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.id = data.id;
      this.name = data.name;
      this.crestUrl = data.crestUrl;
    }
  }
}
