import {Component, OnInit} from '@angular/core';
import {News} from '../model/news';
import {ApiService} from '../shared/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsList: News[] = [];
  public news = {} as News;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    this.getAllNews();
  }

  public getAllNews(): void{
    this.apiService.getAllNews().subscribe(
      res => {
        this.newsList = res;
      },
      error => {
        alert('An error has occurred');
      }
    );
  }

}
