import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {News} from '../model/news';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  news: News;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    this.getNewsById();
  }

  public getNewsById(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getNewsById(id)
      .subscribe(news => this.news = news);
  }

  public back(): void {
    this.location.back();
  }

  public update(editedNews: News): void {
    this.apiService.editNews(editedNews).subscribe(
      res => {
        this.news = editedNews;
      }
    );
    this.location.back();
  }
}
