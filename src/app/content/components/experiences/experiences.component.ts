import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

export class FileNode {
  children?: FileNode[];
  name: string;
}
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})

export class ExperiencesComponent implements OnInit {

  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  experiences: FileNode[] = [
    {
      name: 'Hewlett Packard Enterprise (HPE)',
      children: [
        {
          name: 'Cooperative Bachelor for Business Information Sytems: Software Engineering',
          children: [
            {
              name: 'Internship @ Technical Solutions, Engineering Resolution Team',
              children: [              
                {
                  name: `The goal of the internship project was to create Microsoft Windows help files which show information and LED 
                      patterns for fiber channel devices of Brocade and Cisco. These help files with the LED patterns were created using HTML,
                      Java Script and a Tool to form animated GIF graphics. These help files were fabricated to provide better support of 
                      storage systems.`,
                },
              ],
            },
          ],
        },
      ], 
    }
  ];

  nestedTreeControl = new NestedTreeControl<FileNode>(node => node.children);
  nestedDataSource = new MatTreeNestedDataSource<FileNode>();
  
  constructor() {
    this.nestedDataSource.data = this.experiences;
  }
  
  ngOnInit(): void {
    this.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  hasChild = (_: number, node: FileNode) => !!node.children && node.children.length > 0;

  // private _getChildren = (node: FileNode) => node.children;

}
