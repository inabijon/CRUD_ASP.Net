import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InspectionService } from './services/inspection.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEditInspectionComponent } from './components/add-edit-inspection/add-edit-inspection.component';
import { ShowInspectionComponent } from './components/show-inspection/show-inspection.component';
import { InspectionComponent } from './components/inspection/inspection.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddEditInspectionComponent,
    ShowInspectionComponent,
    InspectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [InspectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
