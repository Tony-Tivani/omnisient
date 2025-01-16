import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownIconWhiteComponent } from './dropdown-icon-white.component';

describe('DropdownIconWhiteComponent', () => {
  let component: DropdownIconWhiteComponent;
  let fixture: ComponentFixture<DropdownIconWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownIconWhiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownIconWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
