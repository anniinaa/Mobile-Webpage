
import { PhoneService } from './phone.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { PhonelistComponent } from './phonelist/phonelist.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { OrderModule } from 'ngx-order-pipe';
import { SearchfilterPipe } from './searchfilter.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PhonelistComponent,
    PhoneDetailsComponent,
    SearchfilterPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    OrderModule,
    ReactiveFormsModule
   
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
