import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { UpperCaseService } from '../upper-case.service';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-take-until-card',
  templateUrl: './take-until-card.component.html',
  styleUrls: ['./take-until-card.component.scss']
})
export class TakeUntilCardComponent implements OnInit, OnDestroy {

  name = 'TakeUntil component';
  message: string;

  private unsubscribe$ = new Subject();

  constructor(private upperCaseService: UpperCaseService) {
  }

  ngOnInit() {
    this.upperCaseService.getUpperCaseMessage()
      .pipe(takeUntil(this.unsubscribe$),
        // tap(() => console.log('', this.unsubscribe$))
      )
      .subscribe((message: string) => {
        this.message = message;
        console.log(`${this.name} - ${message}`);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    // this.unsubscribe$.complete();
    console.log('destoy call from take until');
  }

}
