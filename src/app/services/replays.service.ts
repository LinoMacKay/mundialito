import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReplaysService {
  url = `${environment.hostUrl}/replays`;
  constructor(private http: HttpClient) {}

  getAllReplays(): Observable<any> {
    return this.http.get(this.url.toString());
  }
  // updateCandidate(body: any, id: String) {
  //   return this.http.put(`${this.url}/${id}`, body);
  // }
}
