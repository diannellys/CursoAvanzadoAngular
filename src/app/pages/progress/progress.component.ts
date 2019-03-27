import { FormsModule } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
 progreso1: number = 80;
  progreso2: number = 90;

  constructor()
  {


  }



  ngOnInit() {
  }

}
