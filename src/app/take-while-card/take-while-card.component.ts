import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { UpperCaseService } from '../upper-case.service';
import { tap, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take-while-card',
  templateUrl: './take-while-card.component.html',
  styleUrls: ['./take-while-card.component.scss']
})
export class TakeWhileCardComponent implements OnInit,OnDestroy {

  name = 'TakeWhile component';
  message: string;

  isAlive = false;

  private unsubscribe$ = new Subject();

  constructor(private upperCaseService: UpperCaseService) {
    this.isAlive = true;
   }

  ngOnInit() {
    this.upperCaseService.getUpperCaseMessage()
      .pipe(takeWhile(() => this.isAlive)
        // tap(() => console.log('', this.unsubscribe$))
      )
      .subscribe((message: string) => {
        this.message = message;
        console.log(`${this.name} - ${message}`);
      });
  }

  ngOnDestroy(): void {
    console.log('Destroy call from Take while card Component');
    this.isAlive = false;
  }


}
