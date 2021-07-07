import {HttpErrorResponse} from '@angular/common/http';

export class GeneralUtil {

  static isValidString(astring: any): boolean {
    if (astring !== undefined && astring !== '' && astring !== null) {
      return true;
    }
    return false;
  }

  static isValidJSON(json: any): boolean {
    if (json == null || json === '' || json === undefined) {
      return false;
    }

    const str = JSON.stringify(json);

    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }

    return true;
  }

  static errorHandler(error) {

    if (error instanceof HttpErrorResponse) {

      if (GeneralUtil.isValidString(error.error.message)) {
        console.log(error.error.message);
        return;
      }

      console.log('Network error');
      return;
    }
    console.log('Network error');
    return;
  }
}

