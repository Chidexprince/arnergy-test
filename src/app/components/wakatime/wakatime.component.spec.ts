import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakatimeComponent } from './wakatime.component';

describe('WakatimeComponent', () => {
  let component: WakatimeComponent;
  let fixture: ComponentFixture<WakatimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakatimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakatimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
