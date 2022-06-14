import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/Services/work.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IWork } from 'src/app/Models/work';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  work: IWork = {
    
    workname: "",
    img: "",
    desc: "",
    status: "",
    year: ""


    
  }
 

  constructor(private WorkService: WorkService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) { }
    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.paramMap.get('id') as any;
      if (id) {
        // nếu có id thì call service get product để lấy thông tin trả về form
        this.WorkService.getWork(id).subscribe(data => this.work = data);
      }
    }

  onSubmit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // call services edit product
      // nếu thành công thì trả về sản phẩm vừa cập nhật xong
      this.WorkService.updateWork(this.work).subscribe(data => console.log(data))
    } else {
      // call service add product
      this.WorkService.addWork(this.work).subscribe(data => {
        // chuyển hướng router
        this.router.navigateByUrl('/admin/a-work');
      })
    }
  }
    

}
