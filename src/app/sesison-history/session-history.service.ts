import { inject, Injectable } from '@angular/core';
import { SessionHistory } from 'app/sesison-history/session-history.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionHistoryService {

  private readonly http = inject(HttpClient);

  query(): Observable<HttpResponse<SessionHistory[]>> {
    return this.http.get<SessionHistory[]>(`http://localhost:8080/api/session/sessionhistory`, { observe: 'response' });
  }
}


