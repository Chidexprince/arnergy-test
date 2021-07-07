import { GeneralUtil } from '../util/general-util';
import { Table } from './table';

export class Standings {
  public stage: string;
  public type: string;
  public group: string;
  public table: Table[] = [];

  public mapToStandings(data: any) {
    if (GeneralUtil.isValidJSON(data)) {
      this.stage = data.stage;
      this.type = data.type;
      this.group = data.group;

      if (data.table != null && data.table.length > 0) {
        const tableArray = data.table;
        tableArray.forEach(t => {
          const tab = new Table();
          tab.mapToTable(t);
          this.table.push(tab);
        })
      }
    }
  }
}
