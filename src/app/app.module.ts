import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { WebsiteComponent } from './Pages/website/website.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { WebsiteLayoutComponent } from './Layouts/website-layout/website-layout.component';
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BannerComponent } from './Components/banner/banner.component';
import { CurrentPostComponent } from './Components/current-post/current-post.component';
import { ProjectComponent } from './Components/project/project.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { WorkComponent } from './Pages/work/work.component';
import { WorkDetailComponent } from './Pages/work-detail/work-detail.component';
import { SibarComponent } from './Components/sibar/sibar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterAdminComponent } from './Components/footer-admin/footer-admin.component';
import { TableComponent } from './Components/table/table.component';
import { ManageWorkComponent } from './Pages/manage-work/manage-work.component';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    WebsiteComponent,
    NotfoundComponent,
    WebsiteLayoutComponent,
    AdminLayoutComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    CurrentPostComponent,
    ProjectComponent,
    BlogComponent,
    WorkComponent,
    WorkDetailComponent,
    SibarComponent,
    NavbarComponent,
    FooterAdminComponent,
    TableComponent,
    ManageWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
