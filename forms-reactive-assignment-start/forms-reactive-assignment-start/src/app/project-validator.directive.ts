import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, FormControl, AbstractControl } from '@angular/forms';

// validation function
function validateProjectName(): ValidatorFn {
  return (c: AbstractControl) => {
    const isInvalid = c.value === 'Test';
    if (isInvalid) {
     return { appProjectValidator: {
        valid: false
      }
    };
    } else {
      return null;
    }

  };
}

@Directive({
  selector: '[appProjectValidator][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ProjectValidatorDirective, multi: true }
  ]
})

export class ProjectValidatorDirective  implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = validateProjectName();
  }
  validate(c: FormControl) {
    return this.validator(c);
  }
}
