import { Component } from '@angular/core';
import { CitationListComponent } from '../citation-list/citation-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CitationListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
