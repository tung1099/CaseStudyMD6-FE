import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { PiechartComponent } from './piechart/piechart.component';
import { ChartDisplayComponent } from './chart-display/chart-display.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ PiechartComponent, ChartDisplayComponent],
    imports: [
        CommonModule,
        ChartsRoutingModule,
        ReactiveFormsModule
    ]
})
export class ChartsModule { }
