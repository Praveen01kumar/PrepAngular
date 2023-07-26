import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { EMAIL_REGEX, LOW, NUM, SPECHAR, UP, UPLOW } from '../services/regex-pattern';

// Requied validators
export const emailValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const regularExp: RegExp = EMAIL_REGEX;
  let cValue = control.value;
  cValue = (cValue || '').toString().trim();
  if (!cValue)
    return { required: true };
  return regularExp.test(cValue) ? null : {
    invalidEmail: true
  };
};

export const uplowValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value: string = control.value || '', uplow: RegExp = UPLOW;
  if (value && uplow.test(value)) {
    return { uplow: true };
  }
  return null;
}

export const passStrenValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value: string = control.value || '', upp: RegExp = UP, lowe: RegExp = LOW, numb: RegExp = NUM, speci: RegExp = SPECHAR;
  if (!value) { return null; }
  if (upp.test(value) === false) { return { upp: true }; }
  if (lowe.test(value) === false) { return { lowe: true }; }
  if (numb.test(value) === false) { return { numb: true }; }
  if (speci.test(value) === false) { return { speci: true }; }
  return null;
}

export const onlyNumAllowed: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value: string = control.value || '', upp: RegExp = UP, lowe: RegExp = LOW, speci: RegExp = SPECHAR;
  if (!value) { return null; }
  if (upp.test(value) === true) { return { notNum: true }; }
  if (lowe.test(value) === true) { return { notNum: true }; }
  if (speci.test(value) === true) { return { notNum: true }; }
  return null;
}

// not allowed validators

export const numNotAllowed: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value: string = control.value || '', numb: RegExp = NUM;
  if (!value) { return null; }
  if (numb.test(value) === true) { return { numb: true }; }
  return null;
}

export const spaceNotAllowed: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if ((control.value as string)?.indexOf(' ') >= 0) {
    return { space: true }
  }
  return null;
}

export const speCharNotAllowed: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value: string = control.value || '', speChar: RegExp = SPECHAR;
  if (value && speChar.test(value)) {
    return { speChar: true };
  }
  return null;
}