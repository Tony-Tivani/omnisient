import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthEastIconComponent } from './north-east-icon.component';

describe('NorthEastIconComponent', () => {
  let component: NorthEastIconComponent;
  let fixture: ComponentFixture<NorthEastIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NorthEastIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorthEastIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
