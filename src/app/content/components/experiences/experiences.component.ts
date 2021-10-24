import { Component, OnInit } from "@angular/core";
import { onMobile } from "src/environments/deviceChecker";

export class FileNode {
  children?: FileNode[];
  name: string;
  duration?: string;
}
@Component({
  selector: "app-experiences",
  templateUrl: "./experiences.component.html",
  styleUrls: ["./experiences.component.scss"],
})
export class ExperiencesComponent implements OnInit {
  selectedDetail: string = "";

  experiences: FileNode[] = [
    {
      name: "Cooperative Bachelor for Business Information Sytems: Software Engineering",
      children: [
        {
          name: "Hewlett Packard Enterprise (HPE)",
          children: [
            {
              name: "Internship @ Technical Solutions, Engineering Resolution Team in Ratingen, Nordrhein-Westfalen, Germany",
              duration: "5 months",
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
              name: "Internship @ WorldWide Distribution Team in Ratingen, Nordrhein-Westfalen, Germany",
              duration: "3 months",
              children: [
                {
                  name: `Analysis of existing QlikSense Business Intelligence Dashboards to fix mistakes, design problems,
                      optimize formatting etc. Furthermore creation of new QlikSense dashboards for distributors information in 
                      cooperation with international teams.`,
                },
              ],
            },
            {
              name: "Internship @Hybrid IT: Big Data Engineering Team in Andover, Massachusetts, USA",
              duration: "4 months",
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
        {
          name: "DXC Technology",
          children: [
            {
              name: "Software Engineer Internship @ Global Rapid Response Team in Ratingen, Nordrhein-Westfalen, Germany",
              duration: "4 months",
              children: [
                {
                  name: `Programming of a tool to automatically detect middleware instances (in this case JBoss/ WildFly Application 
                      Server). The tool is able to read out configuration items, parse them and automatically send them to an 
                      internal database.`,
                },
              ],
            },
            {
              name: "Internship @ Cloud and Automation in Ratingen, Nordrhein-Westfalen, Germany",
              duration: "4 months",
              children: [
                {
                  name: `Bachelor thesis about the automation of Continuous Integration Pipelines.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Cooperate Master Student for Big Data and Business Analytics",
      children: [
        {
          name: "DXC Technology",
          children: [
            {
              name: "Company: Agile Software Engineer project in Angular development",
              duration: "October 2019 - today",
              children: [
                {
                  name: `Working in a team on an Angular Frontend in a Scrum setup. The project is about loading, manipulation and visulaization of timeseries as well as digitalizing various workflows around them. My work is mainly in the Frontend with Angular including e.g. state management with ngxs, data manipulation with lodash and visualization with chartjs. Additionally, I work on API Designs and support with DevOps related tasks.`,
                },
              ],
            },
            {
              name: "University: Big Data & Business Analytics",
              duration: "October 2019 - today",
              children: [
                {
                  name: `During my studies I implemented multiple algortihms of the Data Science field in R and Python from descriptive statistics to reinforcement learning. Some examples are:

                  Master Thesis: Creation of an NLP model to estimate potential risks of institutions by analysing their annual financial reports. This idea is based upon the Lazy Prices paper of the Harvard Business School. It enables the user to quickly filter potentially risky institutions, analyze critical parts in detail and make market decisions.

                  Classification of mathematical functions purely by their images using a Convolutional Neural Network. The purpose was to ensure the possibility to analyse distributions and behaviours of processes without the need of the underlying dataset. A possible application could be electrocardiograms. This project was developed on AWS Sagemaker in combination with an S3 bucket. 
                  
                  Private project to develop a chess engine based on a Reinforcement learning algorithm. The model is an ensemble of a ResNet CNN combined with a Monte Carlo Tree Search (MCTS) as its backbone. Additionally, a reward function is used to punish or reward the CNN for its predictions accordingly. The MCTS can properly calculate win/loss probabilities based on simulations during training to feed the CNN target data. The training was mainly done on a Google Cloud VM. 
                  `,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  emptyCircleIconPath: string = "src\\assets\\icons\\circle-outline.svg";
  filledCircleIconPath: string = "src\\assets\\icons\\circle-slice.svg";
  onMobile = onMobile;

  constructor() {}

  ngOnInit(): void {}
}
