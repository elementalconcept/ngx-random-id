import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomIdService {
  private readonly defaultSeparator = '-';
  private readonly defaultParts = 4;

  getRandomIdTimestamp = (separator = this.defaultSeparator,
                          prefix: string | null = null,
                          suffix: string | null = null): string => {

    let randomId = new Date().getTime().toString();

    if (prefix !== null && prefix.length > 0) {
      randomId = prefix + separator + randomId;
    }

    if (suffix !== null && suffix.length > 0) {
      randomId = randomId + separator + suffix;
    }

    return randomId;
  };

  getRandomId = (parts = this.defaultParts,
                 separator = this.defaultSeparator,
                 prefix: string | null = null,
                 suffix: string | null = null): string => {

    const array = [];

    if (prefix !== null && prefix.length > 0) {
      array.push(prefix);
    }

    for (let i = 0; i < parts; i++) {
      // tslint:disable-next-line:no-bitwise
      array.push((((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1));
    }

    if (suffix !== null && suffix.length > 0) {
      array.push(suffix);
    }

    return array.join(separator);
  };
}
