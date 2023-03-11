import { Component } from '@angular/core';

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./myteam.component.css']
})
export class MyteamComponent {
  cards = [
    {name:'Mark Rockwell',img:'https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg',position:'CEO - Consultant'},
    {name:'Mark Rockwell',img:'https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg',position:'CEO - Consultant'},
    {name:'Mark Rockwell',img:'https://bootstrapious.com/i/snippets/sn-cards/profile-1_dewapk.jpg',position:'CEO - Consultant'},
  ]
}
