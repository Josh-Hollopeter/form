import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResearchFormComponent } from './research/forms/research-form/research-form.component';
import { ErrorPipePipe } from './research/pipes/error-pipe.pipe';
import { ResearchTableComponent } from './research/tables/research-table/research-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ResearchFormComponent,
    ErrorPipePipe,
    ResearchTableComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
