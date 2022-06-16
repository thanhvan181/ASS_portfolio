import { Component, OnInit } from '@angular/core';
import { IWork } from 'src/app/Models/work';
import { WorkService } from 'src/app/Services/work.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  workList !: IWork[]
  constructor(private WorkService: WorkService) { }

  ngOnInit(): void {
    this.getWorkList();
  }
  getWorkList() {
    this.WorkService.getWorks().subscribe(data => {
      this.workList = data;
    })
  }
}
