import { Component, OnInit } from '@angular/core';
import { IWork } from 'src/app/Models/work';
import { WorkService } from 'src/app/Services/work.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  workList !: IWork[];
 
  

  constructor(private WorkService :WorkService ) { }

  ngOnInit(): void {
    this.showWork()
  }
  showWork(){
    this.WorkService.getWorks().subscribe(data => this.workList = data)
  }
  onRemoveItem(id: number) {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm) {
      // call api xoa
      this.WorkService.removeWork(id).subscribe(() => {
        // reRender
        this.workList = this.workList.filter(item => item.id !== id);
      });
    }

  }

}
