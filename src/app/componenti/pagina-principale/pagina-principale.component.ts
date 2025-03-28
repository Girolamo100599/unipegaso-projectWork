import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-principale',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pagina-principale.component.html',
  styleUrls: ['./pagina-principale.component.css']
})
export class PaginaPrincipaleComponent {
  searchTerm: string = ''; // Termini di ricerca
  items: string[] = [
    'Sostenibilità ambientale',
    'Innovazione tecnologica responsabile',
    'Diversità e inclusione',
    'Report annuale 2023',
    'Strategia aziendale sostenibile'
  ]; // Elenco di elementi
  filteredItems: string[] = [...this.items]; // Risultati filtrati
  hoverItem: string | null = null; // Elemento su cui l'utente passa il mouse

  filterResults() {
    this.filteredItems = this.items.filter(item =>
      item.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectItem(item: string) {
    this.searchTerm = item; // Imposta l'elemento selezionato come valore nella barra di ricerca
    this.filteredItems = []; // Nascondi la tendina
  }

  downloadDocument() {
    const link = document.createElement('a');
    link.href = 'assets/documents/ibm_2023_esg_report.pdf'; //percorso del file
    link.download = 'Report_Sostenibilita_IBM.pdf'; //nome del file da scaricare
    link.click();
  }
}
