import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { RouterStateUrl } from '../State/router-state.serializer';
import { StoreRootState } from '../State/router.reducer';
import { getCurrentRouteState } from '../State/router.selector';

@Component({
  selector: 'app-router-store',
  templateUrl: './router-store.component.html',
  styleUrls: ['./router-store.component.scss']
})
export class RouterStoreComponent {
 
}
