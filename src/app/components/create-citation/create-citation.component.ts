import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CitationService } from '../../citation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-citation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-citation.component.html',
  styleUrls: ['./create-citation.component.css']
})
export class CreateCitationComponent {
  citation = { text: '', author: '' };

  constructor(private citationService: CitationService, private router: Router) {}

  onSubmit(): void {
    this.citationService.addCitation(this.citation);
    this.router.navigate(['/']);
  }
}
