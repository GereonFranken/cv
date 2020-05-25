import { MatTableModule } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  personalData: {heading: string, content: string}[] = [
    {heading: 'Name', content: 'Gereon Franken'},
    {heading: 'Birthday', content: 'August 25, 1998'},
    {heading: 'Job description', content: 'Agile Software Engineer'},
    {heading: 'Current place of living', content: 'Düsseldorf, Nordrhein - Westfalen'},
  ];

  backgroundData: {heading: string, content: string}[] = [
    {heading: 'Elementary School', content: '2004 - 2008, Haldern'},
    {heading: 'Secondary School', content: '2008 - 2016, Gymnasium Aspel in Rees'},
    {heading: 'Bachelor University', content: '2016 - 2019, Bachelor of Science for Sofware Engineering in Mannheim'},
    {heading: 'Master University', content: '2019 - expected 2022, Master of Science for Big Data & Business Analytics in Düsseldorf'},
  ];

  displayedColumns: string[] = ['heading', 'content'];

  constructor() { }

  ngOnInit(): void {
  }

}
