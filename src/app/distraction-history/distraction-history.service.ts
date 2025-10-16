import { inject, Injectable } from '@angular/core';
import { DistractionHistoryModel } from 'app/distraction-history/distraction-history.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DistractionHistoryService {

  private readonly http = inject(HttpClient);

  query(): Observable<HttpResponse<DistractionHistoryModel[]>> {
    return this.http.get<DistractionHistoryModel[]>(`http://localhost:8080/api/distractions/distractionhistory`, { observe: 'response' });
  }
}
