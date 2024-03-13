import { KindService } from '../../services/kind.service';
import { Kind } from '../../model/kind';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kind-list',
  templateUrl: './kind-list.component.html',
  styleUrls: ['./kind-list.component.css'],
})
export class KindListComponent implements OnInit {
  kinds: Kind[] = [];

  constructor(private kindService: KindService) {}

  ngOnInit(): void {
    this.readKinds();
  }

  readKinds(): void {
    this.kindService.readAll().subscribe({
      next: (kinds) => {
        this.kinds = kinds;
        console.log(kinds);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
