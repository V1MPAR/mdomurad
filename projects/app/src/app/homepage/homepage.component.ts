import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {

  public techs: any[] = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'WordPress', 'Angular', 'Symfony', 'Laravel', 'Docker'
  ];

  @ViewChild('techlist')
  public techlist: any;

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.animateTechs();
    setInterval(() => {
      this.animateTechs();
    }, 12000)
  }

  public animateTechs(): void {
    const lis = [...this.techlist.nativeElement.children];
    this.techs.forEach((tech, index) => {
      setTimeout(() => {
        let li = lis.find((item: any) => item.innerHTML == tech);
        console.log(li, 1200 * (index + 1));
        li.className = 'underline-start'
        setTimeout(() => {
          li.className = 'underline-end';
        }, 1200);
      }, 1200 * (index + 1));
    })
  }
}
