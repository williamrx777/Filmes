import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/models/Home';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filmes:Filme[] = [];
  constructor(private home:HomeService) {}
  ngOnInit(): void {
    this.home.get().subscribe((data:Filme[]) => {
      this.filmes = data;
    })
  }

}
