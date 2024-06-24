import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitationService {
  private citations: { text: string, author: string }[] = [];

  getCitations() {
    return this.citations;
  }

  addCitation(citation: { text: string, author: string }) {
    this.citations.push(citation);
  }

  removeCitation(index: number) {
    this.citations.splice(index, 1);
  }
}
