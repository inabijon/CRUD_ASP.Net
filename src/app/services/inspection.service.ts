import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {

  readonly inspectionAPIUrl = "https://localhost:7136/api";

  constructor(private http: HttpClient) { }

  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspections');
  }

  getInspectionById(id: number): Observable<any> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspections/' + id);
  }

  addInspection(inspection: any): Observable<any> {
    return this.http.post<any>(this.inspectionAPIUrl + '/inspections', inspection);
  }

  updateInspection(id:any,inspection: any): Observable<any> {
    return this.http.put<any>(this.inspectionAPIUrl + '/inspections/' + id, inspection);
  }

  deleteInspection(id: number): Observable<any> {
    return this.http.delete<any>(this.inspectionAPIUrl + '/inspections/' + id);
  }

  // Inspection types
  getInspectionTypesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectiontypes');``
  }

 getInspectionTypeById(id: number): Observable<any> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectiontypes/' + id);
  }

  addInspectionType(inspectionType: any): Observable<any> {
    return this.http.post<any>(this.inspectionAPIUrl + '/inspectiontypes', inspectionType);
  }

  updateInspectionType(inspectionType: any): Observable<any> {
    return this.http.put<any>(this.inspectionAPIUrl + '/inspectiontypes', inspectionType);
  }

  deleteInspectionType(id: number): Observable<any> {
    return this.http.delete<any>(this.inspectionAPIUrl + '/inspectiontypes/' + id);
  }

  // Statuses

  getStatusesList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/status');
  }

  getStatusById(id: number): Observable<any> {
    return this.http.get<any>(this.inspectionAPIUrl + '/status/' + id);
  }

  addStatus(status: any): Observable<any> {
    return this.http.post<any>(this.inspectionAPIUrl + '/status', status);
  }

  updateStatus(status: any): Observable<any> {
    return this.http.put<any>(this.inspectionAPIUrl + '/status', status);
  }

  deleteStatus(id: number): Observable<any> {
    return this.http.delete<any>(this.inspectionAPIUrl + '/status/' + id);
  }

}
