import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterStoreComponent } from './router-store.component';

describe('RouterStoreComponent', () => {
  let component: RouterStoreComponent;
  let fixture: ComponentFixture<RouterStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterStoreComponent]
    });
    fixture = TestBed.createComponent(RouterStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
