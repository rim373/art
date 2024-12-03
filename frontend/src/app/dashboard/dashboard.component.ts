// src/app/components/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalUsers: number = 0;
  eventRequests: any[] = [];
  upcomingEvents: any[] = [];
  private apiUrl = 'your-backend-url'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // Get total users
    this.http.get<any>(`${this.apiUrl}/users/count`).subscribe(
      response => {
        this.totalUsers = response.count; // Adjust according to your API response structure
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );

    // Get event requests
    this.http.get<any[]>(`${this.apiUrl}/events/requests`).subscribe(
      response => {
        this.eventRequests = response;
      },
      error => {
        console.error('Error fetching event requests:', error);
      }
    );

    // Get upcoming events
    this.http.get<any[]>(`${this.apiUrl}/events/upcoming`).subscribe(
      response => {
        this.upcomingEvents = response;
      },
      error => {
        console.error('Error fetching upcoming events:', error);
      }
    );
  }

  handleEventRequest(eventId: number, status: string) {
    this.http.patch(`${this.apiUrl}/events/${eventId}`, { status: status })
      .subscribe(
        response => {
          // Reload data after successful update
          this.loadDashboardData();
        },
        error => {
          console.error('Error updating event:', error);
        }
      );
  }

  // Helper method to format date
  formatDate(date: any): string {
    return new Date(date).toLocaleDateString();
  }
}