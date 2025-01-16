import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSet } from './models/dataset.model';
import { Activity } from './models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getDatasets(): Observable<DataSet[]> {
    const datasets: DataSet[] = [{
      id: 6,
      name: 'Type Dataset',
      createdBy: 'Philip Hall',
      createDate: new Date('2025-02-04T20:45:11'),
      lastModifiedBy: undefined,
      uploadStatus: 'Failed'
    },
    {
      id: 7,
      name: 'Actually Dataset',
      createdBy: 'Michelle Scott',
      createDate: new Date('2025-01-13T06:49:34'),
      lastModifiedBy: undefined,
      uploadStatus: 'Failed'
    },
    {
      id: 8,
      name: 'Choice Dataset',
      createdBy: 'Kenneth Chaney',
      createDate: new Date('2025-01-26T14:12:27'),
      lastModifiedBy: undefined,
      uploadStatus: 'Failed'
    },
    {
      id: 9,
      name: 'Personal Dataset',
      createdBy: 'Daniel Peterson',
      createDate: new Date('2025-02-11T19:02:15'),
      lastModifiedDate: new Date('2025-02-15T19:02:15'),
      lastModifiedBy: 'Teresa Williamson',
      uploadStatus: 'In Progress'
    },
    {
      id: 10,
      name: 'Family Dataset',
      createdBy: 'Thomas Parks',
      createDate: new Date('2025-01-14T05:11:36'),
      lastModifiedBy: undefined,
      uploadStatus: 'Completed'
    },
    {
      id: 11,
      name: 'Easy Dataset',
      createdBy: 'Diane Robinson',
      createDate: new Date('2025-01-30T11:43:45'),
      lastModifiedBy: undefined,
      uploadStatus: 'Completed'
    },
    {
      id: 12,
      name: 'Exist Dataset',
      createdBy: 'Mr. Kevin Manning',
      createDate: new Date('2025-01-15T23:14:18'),
      lastModifiedDate: new Date('2025-01-24T23:14:18'),
      lastModifiedBy: 'Daniel Perez Jr.',
      uploadStatus: 'Completed'
    },
    {
      id: 13,
      name: 'Usually Dataset',
      createdBy: 'Abigail Levy',
      createDate: new Date('2025-01-28T22:31:24'),
      lastModifiedBy: undefined,
      uploadStatus: 'In Progress'
    },
    {
      id: 14,
      name: 'The Dataset',
      createdBy: 'Kevin Smith',
      createDate: new Date('2025-01-25T05:45:34'),
      lastModifiedDate: new Date('2025-01-26T05:45:34'),
      lastModifiedBy: 'Fred White',
      uploadStatus: 'Pending'
    },
    {
      id: 15,
      name: 'Last Dataset',
      createdBy: 'Brandon Simon',
      createDate: new Date('2025-01-06T23:11:53'),
      lastModifiedBy: undefined,
      uploadStatus: 'Pending'
    },
    {
      id: 16,
      name: 'There Dataset',
      createdBy: 'Justin Mcpherson',
      createDate: new Date('2025-01-13T03:34:02'),
      lastModifiedDate: new Date('2025-01-22T03:34:02'),
      lastModifiedBy: 'Ms. Heather Mendoza MD',
      uploadStatus: 'Pending'
    },
    {
      id: 17,
      name: 'Professor Dataset',
      createdBy: 'Elizabeth Kennedy MD',
      createDate: new Date('2025-02-11T04:58:42'),
      lastModifiedBy: undefined,
      uploadStatus: 'Failed'
    },
    {
      id: 18,
      name: 'Child Dataset',
      createdBy: 'Lynn Davis',
      createDate: new Date('2025-02-07T10:38:13'),
      lastModifiedBy: undefined,
      uploadStatus: 'In Progress'
    },
    {
      id: 19,
      name: 'Central Dataset',
      createdBy: 'Donald Khan',
      createDate: new Date('2025-01-26T11:59:35'),
      lastModifiedDate: new Date('2025-02-01T11:59:35'),
      lastModifiedBy: 'Chase Estrada',
      uploadStatus: 'In Progress'
    },
    {
      id: 20,
      name: 'Though Dataset',
      createdBy: 'Kevin Harris',
      createDate: new Date('2025-02-12T02:20:34'),
      lastModifiedBy: undefined,
      uploadStatus: 'Pending'
    },
    {
      id: 21,
      name: 'Kitchen Dataset',
      createdBy: 'Kathy Ibarra',
      createDate: new Date('2025-01-23T05:59:10'),
      lastModifiedBy: undefined,
      uploadStatus: 'Failed'
    },
    {
      id: 22,
      name: 'Later Dataset',
      createdBy: 'Kimberly Hamilton',
      createDate: new Date('2025-01-08T23:43:04'),
      lastModifiedBy: undefined,
      uploadStatus: 'Completed'
    },
    {
      id: 23,
      name: 'Risk Dataset',
      createdBy: 'Gabriel Williams',
      createDate: new Date('2025-01-16T15:26:41'),
      lastModifiedDate: new Date('2025-01-22T15:26:41'),
      lastModifiedBy: 'Evan Chase',
      uploadStatus: 'Completed'
    },
    {
      id: 24,
      name: 'Car Dataset',
      createdBy: 'Steven Black',
      createDate: new Date('2025-02-10T02:36:45'),
      lastModifiedBy: undefined,
      uploadStatus: 'Pending'
    },
    {
      id: 25,
      name: 'Writer Dataset',
      createdBy: 'Kendra Richardson',
      createDate: new Date('2025-01-30T08:50:50'),
      lastModifiedBy: undefined,
      uploadStatus: 'Failed'
    },
    {
      id: 26,
      name: 'Peace Dataset',
      createdBy: 'Sean Newton',
      createDate: new Date('2025-02-11T10:02:08'),
      lastModifiedDate: new Date('2025-02-18T10:02:08'),
      lastModifiedBy: 'Brendan Mason',
      uploadStatus: 'Failed'
    },
    {
      id: 27,
      name: 'Medical Dataset',
      createdBy: 'Christopher Martin',
      createDate: new Date('2025-01-24T09:37:34'),
      lastModifiedDate: new Date('2025-01-28T09:37:34'),
      lastModifiedBy: 'Thomas Allen',
      uploadStatus: 'Failed'
    },
    {
      id: 28,
      name: 'Citizen Dataset',
      createdBy: 'Douglas West',
      createDate: new Date('2025-01-08T06:59:40'),
      lastModifiedDate: new Date('2025-01-15T06:59:40'),
      lastModifiedBy: 'Christina Robinson',
      uploadStatus: 'In Progress'
    },
    {
      id: 29,
      name: 'Sell Dataset',
      createdBy: 'James Rich',
      createDate: new Date('2025-01-14T11:45:53'),
      lastModifiedBy: undefined,
      uploadStatus: 'Failed'
    },
    {
      id: 30,
      name: 'Available Dataset',
      createdBy: 'Kirsten Martin',
      createDate: new Date('2025-02-08T11:01:50'),
      lastModifiedBy: undefined,
      uploadStatus: 'Failed'
    },
    {
      id: 31,
      name: 'Could Dataset',
      createdBy: 'Denise Banks',
      createDate: new Date('2025-01-03T19:39:39'),
      lastModifiedBy: undefined,
      uploadStatus: 'Failed'
    },
    {
      id: 32,
      name: 'Staff Dataset',
      createdBy: 'Matthew Davis',
      createDate: new Date('2025-02-08T20:27:36'),
      lastModifiedBy: undefined,
      uploadStatus: 'Completed'
    },
    {
      id: 33,
      name: 'In Dataset',
      createdBy: 'Adam Lewis',
      createDate: new Date('2025-01-18T22:01:35'),
      lastModifiedDate: new Date('2025-01-23T22:01:35'),
      lastModifiedBy: 'Gregory Brooks',
      uploadStatus: 'Failed'
    },
    {
      id: 34,
      name: 'Artist Dataset',
      createdBy: 'Angela Curtis',
      createDate: new Date('2025-01-30T18:00:11'),
      lastModifiedBy: undefined,
      uploadStatus: 'Failed'
    },
    {
      id: 35,
      name: 'Future Dataset',
      createdBy: 'Johnny Turner',
      createDate: new Date('2025-02-03T16:06:33'),
      lastModifiedDate: new Date('2025-02-10T16:06:33'),
      lastModifiedBy: 'Briana Beck',
      uploadStatus: 'In Progress'
    },
    {
      id: 36,
      name: 'Evidence Dataset',
      createdBy: 'Brian Rodriguez',
      createDate: new Date('2025-01-20T05:07:17'),
      lastModifiedDate: new Date('2025-01-30T05:07:17'),
      lastModifiedBy: 'Kristopher Lozano',
      uploadStatus: 'In Progress'
    },
    {
      id: 37,
      name: 'Join Dataset',
      createdBy: 'Tyler Sanchez',
      createDate: new Date('2025-01-24T16:09:47'),
      lastModifiedBy: undefined,
      uploadStatus: 'Pending'
    },
    {
      id: 38,
      name: 'Same Dataset',
      createdBy: 'Albert Becker',
      createDate: new Date('2025-02-05T08:44:59'),
      lastModifiedBy: undefined,
      uploadStatus: 'Pending'
    },
    {
      id: 39,
      name: 'Six Dataset',
      createdBy: 'Corey Gordon',
      createDate: new Date('2025-01-18T01:56:46'),
      lastModifiedDate: new Date('2025-01-27T01:56:46'),
      lastModifiedBy: 'Stephanie Hall',
      uploadStatus: 'Completed'
    },
    {
      id: 40,
      name: 'Although Dataset',
      createdBy: 'Philip Johnson Jr.',
      createDate: new Date('2025-01-13T03:00:36'),
      lastModifiedDate: new Date('2025-01-23T03:00:36'),
      lastModifiedBy: 'Robert Parker',
      uploadStatus: 'Pending'
    },
    {
      id: 41,
      name: 'Suggest Dataset',
      createdBy: 'Monica Hill',
      createDate: new Date('2025-01-11T14:42:55'),
      lastModifiedBy: undefined,
      uploadStatus: 'Pending'
    }];
    return of(datasets);
  }

  getActivites(): Observable<Activity[]> {
    const activities: Activity[] = [{
      id: 1,
      type: 'Issue {{dataset}}',
      description: 'Hydration Failed',
      date: new Date('2025-01-13T06:49:11')
    },
    {
      id: 2,
      type: 'Issue {{dataset}}',
      description: 'Hydration Failed',
      date: new Date('2024-09-25T07:49:20')
    }, {
      id: 3,
      type: 'Uploaded {{dataset}}',
      description: 'by Jennifer Doe',
      date: new Date('2024-11-07T16:21:15')
    }, {
      id: 4,
      type: 'Login',
      description: 'Jennifer Doe',
      date: new Date('2024-12-13T08:39:24')
    }, {
      id: 5,
      type: 'Issue {{dataset}}',
      description: 'Hydration Failed',
      date: new Date('2025-01-04T32:08:42')
    }, {
      id: 6,
      type: 'Uploaded {{dataset}}',
      description: 'Hydration Failed',
      date: new Date('2025-01-13T06:49:34')
    }, {
      id: 7,
      type: 'Reviewed {{dataset}}',
      description: 'by John McFarlen',
      date: new Date('2025-01-13T06:49:34')
    }, {
      id: 8,
      type: 'Login',
      description: 'John McFarlen',
      date: new Date('2025-01-13T06:49:34')
    }, {
      id: 9,
      type: 'Issue {{dataset}}',
      description: 'Hydration Failed',
      date: new Date('2025-01-13T06:49:34')
    }, {
      id: 10,
      type: 'Issue {{dataset}}',
      description: 'Hydration Failed',
      date: new Date('2025-01-13T06:49:34')
    }];

    return of(activities);
  } 
}
