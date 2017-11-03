import { Component } from '@angular/core';

@Component({
  selector: 'sponsors-page',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css'],
})
export class SponsorsPageComponent {
  tiles = [
    { text: 'One', cols: 3, rows: 2, color: 'lightblue', name: "Blue LTD." },
    { text: 'Two', cols: 1, rows: 3, color: 'lightgreen', name: "Green Co." },
    { text: 'Three', cols: 1, rows: 2, color: 'lightpink', name: "Pink United" },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', name: "Another Purple" },
    { text: 'Five', cols: 3, rows: 3, color: '#0099cc', name: "Blueberry" },
    { text: 'Six', cols: 1, rows: 4, color: '#0d03da', name: "Colours" },
    { text: 'Seven', cols: 3, rows: 2, color: 'grey', name: "Grey" },
    { text: 'Eight', cols: 4, rows: 1, color: '#77348c', name: "Purple" },
  ];
}
