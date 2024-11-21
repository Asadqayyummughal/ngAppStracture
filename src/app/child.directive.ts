import { Directive } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appChild]',
  standalone: true
})
export class ChildDirective {

  constructor(private logger:LoggerService) { 

    this.logger.logMessage('hellow this is the child directive')
  }

}
