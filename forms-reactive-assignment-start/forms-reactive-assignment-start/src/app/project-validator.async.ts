import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';


@Directive({
  selector: '[appAsyncProjectValidator][ngModel]',
  providers: [
    { provide: NG_ASYNC_VALIDATORS, useExisting: ProjectAsyncValidatorDirective, multi: true }
  ]
})

export class ProjectAsyncValidatorDirective  implements Validator {
  validate(c: AbstractControl) {
    return this.validateAsyncProjectName(c.value).first();
}
validateAsyncProjectName(project: String) {
  return new Observable(observer => {
      if ( project === 'Test' ) {
        observer.next({
          asyncInvalid: {
            valid: false
          }
        });
      } else {
        observer.next(null);
      }
  });
}
}
