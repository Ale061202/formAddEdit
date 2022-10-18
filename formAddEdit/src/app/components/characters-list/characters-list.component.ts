import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/interfaces/characters.interface';
import { CharactersService } from 'src/app/services/characters-list.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  charactersList: CharactersListComponent[] = [];
  numPages = 0;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.getCharactersPage(1);
  }

  getCharactersPage(page: number) {
    this.charactersService.getCharacters(page).subscribe((resp) => {
      this.charactersList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
    });
  }

  counter() {
    return new Array(this.numPages);
  }

  getPhotoUrl(characters: People) {
    let id = characters.url.split('/').reverse()[1];
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }
}
