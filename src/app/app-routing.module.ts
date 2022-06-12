import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './Layouts/website-layout/website-layout.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { ManageWorkComponent } from './Pages/manage-work/manage-work.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { WebsiteComponent } from './Pages/website/website.component';
import { WorkDetailComponent } from './Pages/work-detail/work-detail.component';
import { WorkComponent } from './Pages/work/work.component';

const routes: Routes = [
  
 
  {path: "admin", component: AdminLayoutComponent , children: [
    { path: "", component: AdminComponent },

    { path: "a-work", component: ManageWorkComponent },
   

  ]},
  {path: "", component: WebsiteLayoutComponent , children: [
    { path: "", component: WebsiteComponent },
    { path: "blog", component: BlogComponent },
    { path: "work", component: WorkComponent },
    { path: "work-detail", component: WorkDetailComponent },
    
    

  ]},
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
