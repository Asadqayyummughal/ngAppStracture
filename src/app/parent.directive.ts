import { Directive, Optional } from '@angular/core';
import { LoggerService } from './logger.service';
import { Self } from '@angular/core';
@Directive({
  selector: '[appParent]',
  standalone: true,
  providers:[LoggerService]
})
export class ParentDirective {

  constructor(@Self() @Optional()  private logger:LoggerService) {

    this.logger.logMessage('hye this is the parent directive wohoooo');
   }

}
