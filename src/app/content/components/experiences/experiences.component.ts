import { TreeDataService, FileNode } from './../tree-data.service';
import { Component, OnInit } from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})



export class ExperiencesComponent implements OnInit {

  experiences = {
    'Hewlett Packard Enterprise (HPE)': {
      'Cooperative Bachelor for Business Information Sytems: Software Engineering': {
        'Internship @ Technical Solutions, Engineering Resolution Team': 
          `The goal of the internship project was to create Microsoft Windows help files which show information and LED 
          patterns for fiber channel devices of Brocade and Cisco. These help files with the LED patterns were created using HTML,
          Java Script and a Tool to form animated GIF graphics. These help files were fabricated to provide better support of 
          storage systems.`,
      },
    },
    'DXC Technology': {
      'Cooperative Bachelor for Business Information Sytems: Software Engineering': {
        
      },
      'Cooperative Master Student for Big Data and Business Analytics': {

      },
    },
  };

  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  database: TreeDataService;
  
  constructor(database: TreeDataService) {
    this.database = database;
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
  }
  
  ngOnInit(): void { 
    
    this.database.initialize(this.experiences);
    this.database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.type;

  private _getChildren = (node: FileNode) => node.children;

}
