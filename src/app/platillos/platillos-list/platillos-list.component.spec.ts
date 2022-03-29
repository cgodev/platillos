import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillosListComponent } from './platillos-list.component';

describe('PlatillosListComponent', () => {
  let component: PlatillosListComponent;
  let fixture: ComponentFixture<PlatillosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatillosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatillosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
