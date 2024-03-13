import { Category } from './../../model/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categorys: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.readCategorys();
  }

  readCategorys(): void {
    this.categoryService.readAll().subscribe({
      next: (categorys) => {
        this.categorys = categorys;
        console.log(categorys);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
