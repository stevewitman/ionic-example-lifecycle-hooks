import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Article } from './article.model';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit, OnDestroy {
  @Input() article: Article;

  articles: Article[];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articles = this.articlesService.getArticles();
    console.log('articles-page lifecycle hook: ngOnInit');
  }

  ngOnDestroy() {
    console.log('articles-page lifecycle hook: ngOnDestroy');
  }

  ionViewWillEnter() {
    console.log('articles-page lifecycle hook: ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('articles-page lifecycle hook: ionViewDidEnter ... waits for animation to finish');
  }

  ionViewWillLeave() {
    console.log('articles-page lifecycle hook: ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('articles-page lifecycle hook: ionViewDidLeave ... waits for animation to finish');
  }

  onClickArticle(article) {

  }

}
