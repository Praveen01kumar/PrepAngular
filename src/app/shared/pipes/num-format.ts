import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  // |1.| number format 08-74-33-42-335
  transform(number: any) {
    number = number.charAt(0) != 0 ? "0" + number : "" + number;
    let newStr = "";
    let i = 0;
    for (; i < Math.floor(number.length / 2) - 1; i++) {
      newStr = newStr + number.substr(i * 2, 2) + "-";
    }
    return newStr + number.substr(i * 2);
  }

  // |2.| number format 999 999 9999
  // {{ phone | slice:0:2 }} - {{ phone | slice:3:5 }} in html 

  // |3.| number format (874) 334-2335
  // transform(val: any) {
  //   let formattedPhone: any = "";
  //   let m = (("" + val).replace(/\D/g, '').match(/^(\d{3})(\d{3})(\d{4})$/));
  //   try {
  //     formattedPhone = (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
  //   } catch (error) { formattedPhone = val; }
  //   if (formattedPhone == null)
  //     formattedPhone = val;
  //   return formattedPhone;
  // }

  // |4.| number format	87-433-423-35
  // transform(value: string): string {
  //   let trimmed = value.replace((/\s+/g), '');
  //   trimmed = trimmed.replace((/\+?(1)?/), '');
  //   const matches = trimmed.match((/^(\d{2})(\d{3})(\d{3})(\d{2})$/));
  //   if (!matches) { return value }
  //   const phoneParts = matches.slice(1,);
  //   return phoneParts.join('-');
  // }

  // |5.| number format	1.3k, 2.5M, 3.7B, 4.9T
  // transform(value: any, args?: any): any {
  //   if (value === null) return null;
  //   if (value === 0) return "0";
  //   let fractionSize = 1;
  //   let abs = Math.abs(value);
  //   let rounder = Math.pow(10, fractionSize);
  //   let isNegative = value < 0;
  //   let key = '';
  //   let powers = [{ key: "Q", value: Math.pow(10, 15) }, { key: "T", value: Math.pow(10, 12) }, { key: "B", value: Math.pow(10, 9) }, { key: "M", value: Math.pow(10, 6) }, { key: "k", value: 1000 }];
  //   for (let i = 0; i < powers.length; i++) {
  //     let reduced = abs / powers[i].value;
  //     reduced = Math.round(reduced * rounder) / rounder;
  //     if (reduced >= 1) {
  //       abs = reduced;
  //       key = powers[i].key;
  //       break;
  //     }
  //   }
  //   return (isNegative ? '-' : '') + abs + key;
  // }



} 