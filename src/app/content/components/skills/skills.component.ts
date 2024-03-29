import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      chapter: 'Languages',
      content: [
        {
          skillName: 'German',
          level: 5,
        },
        {
          skillName: 'English',
          level: 4,
        },
        {
          skillName: 'Dutch',
          level: 1,
        },
        {
          skillName: 'Russian',
          level: 1,
        },
      ],
    },
    {
      chapter: 'Programming Languages',
      content: [
        {
          skillName: 'Python',
          level: 4,
        },
        {
          skillName: 'Typescript',
          level: 4,
        },
        {
          skillName: 'R',
          level: 3,
        },
        {
          skillName: 'Javascript',
          level: 3,
        },
        {
          skillName: 'Java',
          level: 2,
        },
      ],
    },
    {
      chapter: 'Other',
      content: [
        {
          skillName: 'Scrum',
          level: 4,
        },
        {
          skillName: 'Git',
          level: 4,
        },
        {
          skillName: 'HTML5/ CSS3',
          level: 4,
        },
        {
          skillName: 'Angular',
          level: 3,
        },
        {
          skillName: 'AWS Sagemaker',
          level: 2,
        },
        {
          skillName: 'Jenkins',
          level: 2,
        },
      ],
    },
  ]

  certificates = [
    {
      name: 'Scrum Master 1',
      url: 'https://www.scrum.org/certificates/578823',
      email: 'gereon.franken@dxc.com',
    },
    {
      name: 'Bayesian Methods for Machine Learning',
      url: 'https://www.coursera.org/account/accomplishments/verify/BTDCZTXNT6KG',
    },
    {
      name: 'AWS Machine Learning Foundations',
      url: `https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/7ad03ab8-f48a-4177-9f76-7e8612932ce3.pdf?utm_campaign=sch_600_auto_ndxxx_aws-ml-completed_global&utm_source=blueshift&utm_medium=email&utm_content=sch_600_auto_ndxxx_aws-ml-complet`,
    },
    {
      name: 'Introduction to Tensorflow for AI, ML and DL',
      url: 'https://www.coursera.org/account/accomplishments/verify/YYEQQJQ6NF3B',
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  getLineRotation(iterationCtr: number) {
    return 'rotate(' + (iterationCtr * 72 - 90) + 'deg)';
  }

  getSkillFilling(level: number) {
    if (level * 72 < 180) {
      return `linear-gradient(` + (level * 72 + 90) + `deg, transparent 50%, white 50%),
        linear-gradient(90deg, white 50%, transparent 50%)`
    } else {
      return `linear-gradient(` + (level * 72 - 90) + `deg, transparent 50%, green 50%),
        linear-gradient(90deg, white 50%, transparent 50%)`
    }
  }

  openCertificate(url: string) {
    window.open(url, "_blank");
  }

}
