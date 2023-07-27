import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSignupData } from '../State/signup.selectors';
import { Observable, Subscription } from 'rxjs';
import { getValueSuccess } from '../State/signup.actions';

@Component({
  selector: 'app-get-table',
  templateUrl: './get-table.component.html',
  styleUrls: ['./get-table.component.scss']
})
export class GetTableComponent {
  
  data$!: Observable<any>;
  dataSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(data:any) {
    this.data$ = this.store.select(selectSignupData);

   
    this.dataSubscription = this.data$.subscribe(data => {
     console.log(data);
     this.store.dispatch(getValueSuccess({ data }));

    });
  }

  ngOnDestroy() {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
  
}
