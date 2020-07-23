import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit, OnDestroy {
  loadedArticle: Article;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('detail page lifecycle hook: ngOnInit');
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('articleId')) {
        this.router.navigate(['/articles']);
        return;
      } else {
        const articleId = paramMap.get('articleId');
        this.loadedArticle = this.articlesService.getArticle(articleId);
      }
    });
  }

  ngOnDestroy() {
    console.log('detail page lifecycle hook: ngOnDestroy');
  }

  ionViewWillEnter() {
    console.log('detail page lifecycle hook: ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('detail page lifecycle hook: ionViewDidEnter ... waits for animation to finish');
  }

  ionViewWillLeave() {
    console.log('detail page lifecycle hook: ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('detail page lifecycle hook: ionViewDidLeave ... waits for animation to finish');
  }

}
