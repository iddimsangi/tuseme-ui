import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* services for the application */
import { TaarifaService } from './taarifa.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ TaarifaService ]
})
export class CoreModule { }
