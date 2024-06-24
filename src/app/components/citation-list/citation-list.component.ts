import { Component, OnInit } from '@angular/core';
import { CitationService } from '../../citation.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-citation-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './citation-list.component.html',
  styleUrls: ['./citation-list.component.css']
})
export class CitationListComponent implements OnInit {
  citations: { text: string, author: string }[] = [];

  constructor(private citationService: CitationService) {}

  ngOnInit(): void {
    this.citations = this.citationService.getCitations();
  }

  removeCitation(index: number): void {
    this.citationService.removeCitation(index);
  }
}
