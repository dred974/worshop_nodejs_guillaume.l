import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentgComponent } from './componentg.component';

describe('ComponentgComponent', () => {
  let component: ComponentgComponent;
  let fixture: ComponentFixture<ComponentgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
