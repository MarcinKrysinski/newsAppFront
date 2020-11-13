import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080/news';

  constructor(private http: HttpClient) {
  }

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(this.BASE_URL);
    // console.log(this.getAllNews());
  }

  getNewsById(id: string): Observable<News> {
    const url = `${this.BASE_URL}/${id}`;
    return this.http.get<News>(url);
  }

  editNews(news: News): Observable<News> {
    return this.http.put<News>(this.BASE_URL, news);
  }
}
