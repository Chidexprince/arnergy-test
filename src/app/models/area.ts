import { GeneralUtil } from '../util/general-util';

export class Area {
  public id: number;
  public name: string;
  public countryCode: string;
  public ensignUrl: string;

  public mapToArea(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.id = data.id;
      this.name = data.name;
      this.countryCode = data.countryCode;
      this.ensignUrl = data.ensignUrl;
    }
  }
}
