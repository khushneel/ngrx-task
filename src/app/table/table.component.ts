import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '../State/signup.selectors';
import { User } from '../State/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  user: User | null = null;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(selectUser).subscribe((user: User | null) => {
      this.user = user;
      console.log(user);
    });
  }

}
