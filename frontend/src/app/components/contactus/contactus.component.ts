import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const GITHUB = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
</svg>
`;

const LINKDIN = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<rect x="4" y="4" width="16" height="16" rx="2" />
<line x1="8" y1="11" x2="8" y2="16" />
<line x1="8" y1="8" x2="8" y2="8.01" />
<line x1="12" y1="16" x2="12" y2="11" />
<path d="M16 16v-3a2 2 0 0 0 -4 0" />
</svg>
`;


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  team: any = [
    { name: "Adarsh Pandey", class: "adarsh", avatar: "assets/images/team/Adarsh_Pandey.JPG", image: "assets/images/team/Adarsh_Pandey.JPG", desc: "Student  CDAC-ecity (Diploma in Advanced Computing), Bengaluru, Karnataka, India. Roll No.: 200251920000 ", designation: "Developer", git: "/", mail: "/", fb: "/", linkedin: "/" },
    { name: "Rishabh Aggarwal", class: "rishabh", avatar: "assets/images/team/rishabh_avater.jpg", image: "assets/images/team/rishabh_aggarwal.jpeg", desc: "Student  CDAC-ecity (Diploma in Advanced Computing), Bengaluru, Karnataka, India. Roll No.: 200251920076 ", designation: "Developer", git: "https://github.com/rishcodelib", mail: "rishabhaggarwal23@gmail.com", fb: "https://www.facebook.com/iam.rishabhhh", linkedin: "http://www.linkedin.com/in/iamrishabhh" },
    { name: "Deepak Thakur", class: "deepak", avatar: "assets/images/team/rishabh.jpg", image: "/", desc: "Student  CDAC-ecity (Diploma in Advanced Computing), Bengaluru, Karnataka, India. Roll No.: 200251920000 ", designation: "Developer", git: "/", mail: "/", fb: "/", linkedin: "/" },
    { name: "Pranjali Inglae", class: "pranjali", avatar: "assets/images/team/rishabh.jpg", image: "/", desc: "Student  CDAC-ecity (Diploma in Advanced Computing), Bengaluru, Karnataka, India. Roll No.: 200251920000 ", designation: "Developer", git: "/", mail: "/", fb: "/", linkedin: "/" }];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('GITHUB', sanitizer.bypassSecurityTrustHtml(GITHUB));
    iconRegistry.addSvgIconLiteral('LINKDIN', sanitizer.bypassSecurityTrustHtml(LINKDIN));
  }

  ngOnInit(): void {
  }
}




