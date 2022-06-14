import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWork } from 'src/app/Models/work';
import { WorkService } from 'src/app/Services/work.service';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
  work !: IWork
  constructor(
    private router: ActivatedRoute,
    private WorkService: WorkService
  ) { 
    const id = this.router.snapshot.paramMap.get('id') as any;
    // this.product = this.productService.getProduct(id)!;
    this.WorkService.getWork(id).subscribe((data) => {
      this.work = data
    })
  }

  ngOnInit(): void {
  }

}
