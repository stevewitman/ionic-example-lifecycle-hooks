import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articles: Article[] = [
    { id: 'a1', title: 'Road Closed', author: 'Max Million' },
    { id: 'a2', title: 'Road Reopened', author: 'Max Million' },
  ];

  constructor() { }

  getArticles() {
    return [...this.articles];
  }

  getArticle(articleId: string) {
    return {
      ...this.articles.find(article => {
        return article.id === articleId;
      })
    };
  }

}
