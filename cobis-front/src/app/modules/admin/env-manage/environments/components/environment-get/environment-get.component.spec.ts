import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentGetComponent } from './environment-get.component';

describe('EnvironmentGetComponent', () => {
  let component: EnvironmentGetComponent;
  let fixture: ComponentFixture<EnvironmentGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
