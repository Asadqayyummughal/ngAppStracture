import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from './logger.service';
import { Self } from '@angular/core';
import { ParentDirective } from './parent.directive';
import { ChildDirective } from './child.directive';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ParentDirective,ChildDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[LoggerService]
})
export class AppComponent {
  title = 'AngulrAppStructure';
  constructor(@Self() private logger:LoggerService){
    // this.logger.logMessage();
    console.log('chchout the environment',environment.apiUrl);
    

  }
}
