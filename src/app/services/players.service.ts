import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  url = `${environment.hostUrl}/players`;
  constructor(private http: HttpClient) {}

  getAllPlayers(): Observable<any> {
    return this.http.get(this.url.toString() + '/rank');
  }
  updateCandidate(body: any, id: String) {
    return this.http.put(`${this.url}/${id}`, body);
  }
}
