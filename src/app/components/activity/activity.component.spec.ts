import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityComponent } from './activity.component'; // No longer needs to be in declarations
import { DataService } from '../../services/data.service';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Activity } from '../../models/activity.model';
import { By } from '@angular/platform-browser';

describe('ActivityComponent', () => {
  let component: ActivityComponent;
  let fixture: ComponentFixture<ActivityComponent>;
  let dataServiceMock: jasmine.SpyObj<DataService>;

  const mockActivities: Activity[] = [
    { id: 1, name: 'Activity 1', type: 'Type A', description: 'Description 1', date: new Date() },
    { id: 2, name: 'Activity 2', type: 'Type B', description: 'Description 2', date: new Date() },
    { id: 3, name: 'Activity 3', type: 'Type C', description: 'Description 3', date: new Date() },
    { id: 4, name: 'Activity 4', type: 'Type D', description: 'Description 4', date: new Date() },
    { id: 5, name: 'Activity 5', type: 'Type E', description: 'Description 5', date: new Date() },
  ];

  beforeEach(() => {
    dataServiceMock = jasmine.createSpyObj('DataService', ['getActivites']);
    dataServiceMock.getActivites.and.returnValue(of(mockActivities));

    TestBed.configureTestingModule({
      imports: [CommonModule, ActivityComponent],  // Import ActivityComponent instead of declaring it
      providers: [{ provide: DataService, useValue: dataServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load activities on ngOnInit', () => {
    // Check if the dataService was called
    expect(dataServiceMock.getActivites).toHaveBeenCalled();
    // Check if activities are loaded correctly
    expect(component.activities).toEqual(mockActivities);
  });

  it('should display only 3 activities initially', () => {
    const activityItems = fixture.debugElement.queryAll(By.css('ul.vertical-list li'));
    expect(activityItems.length).toBe(3);
  });

  it('should toggle "showAll" when "View all activity" is clicked', () => {
    const toggleButton = fixture.debugElement.query(By.css('p.text-decoration-underline'));
    expect(component.showAll).toBeFalse();

    // Simulate a click on the "View all activity" button
    toggleButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.showAll).toBeTrue();
    expect(toggleButton.nativeElement.textContent).toBe('Show less activity');
  });

  it('should display all activities when "showAll" is true', () => {
    component.toggleShowAll(); // Set showAll to true
    fixture.detectChanges();

    const activityItems = fixture.debugElement.queryAll(By.css('ul.vertical-list li'));
    expect(activityItems.length).toBe(mockActivities.length); // All activities should be displayed
  });

  it('should display "View all activity" when less than 5 activities are shown', () => {
    const toggleButton = fixture.debugElement.query(By.css('p.text-decoration-underline'));
    expect(toggleButton.nativeElement.textContent).toBe('View all activity');
  });
});
