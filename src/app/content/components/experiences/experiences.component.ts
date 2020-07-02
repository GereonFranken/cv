import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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

  faCheck = faCheck;
  selectedDetail: '' | 'Bachelor' | 'Master' = '';
  

  experiences: FileNode[] = [
    {
      name: 'Hewlett Packard Enterprise (HPE)',
      children: [
        {
          name: 'Cooperative Bachelor for Business Information Sytems: Software Engineering',
          children: [
            {
              name: 'Internship @ Technical Solutions, Engineering Resolution Team in Ratingen, Nordrhein-Westfalen, Germany (5 month)',
              children: [              
                {
                  name: `The goal of the internship project was to create Microsoft Windows help files which show information 
                      and LED patterns for fiber channel devices of Brocade and Cisco. These help files with the LED patterns 
                      were created using HTML, Java Script and a Tool to form animated GIF graphics. These help files were 
                      fabricated to provide better support of storage systems.`,
                },
              ],
            },
            {
              name: 'Internship @ WorldWide Distribution Team in Ratingen, Nordrhein-Westfalen, Germany (3 month)',
              children: [              
                {
                  name: `Analysis of existing QlikSense Business Intelligence Dashboards to fix mistakes, design problems,
                      optimize formatting etc. Furthermore creation of new QlikSense dashboards for distributors information in 
                      cooperation with international teams.`,
                },
              ],
            },
            {
              name: 'Internship @Hybrid IT: Big Data Engineering Team in Andover, Massachusetts, USA (4 month)',
              children: [              
                {
                  name: `Development of a Continuous Integration/ Continuous Deployment Pipeline for building, deploying and 
                  testing sofware components (executable files). Establishment of automatic deployment of Big Data Software by 
                  using Git, Jenkins, Artifactory, Ansible and other DevOps tools. In addition work with programming languages 
                  like GO and technologies like virtual machines to ensure that Big Data Software can be run on clusters such as 
                  qumulo or scality.`,
                },
              ],
            },
          ],
        },
      ], 
    },
    {
      name: 'DXC Technology',
      children: [
        {
          name: 'Cooperative Bachelor for Business Information Sytems: Software Engineering',
          children: [
            {
              name:'Internship @ Global Rapid Response Team in Ratingen, Nordrhein-Westfalen, Germany (4 month)',
              children: [
                {
                  name: `Bachelor thesis about the automation of Continuous Integration Pipelines`,
                }
              ]
            },
            {
              name:'Software Engineer Internship @ Global Rapid Response Team in Ratingen, Nordrhein-Westfalen, Germany (4 month)',
              children: [
                {
                  name: `Programming of a tool to automatically detect middleware instances (in this case JBoss/ WildFly Application 
                      Server). The tool is able to read out configuration items, parse them and automatically send them to an 
                      internal database.`,
                }
              ]
            }
          ]
        },
        {
          name:'Cooperate Master Student for Big Data and Business Analytics',
          children: [
            {
              name: 'Agile Software Engineer in various projects (October 2019 - today)',
            }
          ]
        }
      ]
    }
  ];

  emptyCircleIconPath: string = 'src\\assets\\icons\\circle-outline.svg';
  filledCircleIconPath: string = 'src\\assets\\icons\\circle-slice.svg';
  
  constructor() { }
  
  ngOnInit(): void {
  }
}
