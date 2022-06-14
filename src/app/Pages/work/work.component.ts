import { Component, OnInit } from '@angular/core';
import { IWork } from 'src/app/Models/work';
import { WorkService } from 'src/app/Services/work.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
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
