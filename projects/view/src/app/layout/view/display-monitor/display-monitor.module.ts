import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
registerLocaleData(localeEs, "es");
import { LOCALE_ID } from "@angular/core";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AlertModule } from "shared/modules/alert/alert.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as Chart from "chart.js";
import * as ChartDataLabels from "chartjs-plugin-datalabels";
import { ChartsModule as Ng2Charts } from "ng2-charts";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";

import { SelectorModule } from "shared/modules/selector/selector.module";

import { DisplayHeaderModule } from "projects/view/src/shared/modules/display-header/display-header.module";

import { DisplayMonitorRoutingModule } from "./display-monitor-routing.module";
import { DisplayMonitorComponent } from "./display-monitor.component";

import { DisplayMonitorIndicatorsComponent } from "./display-monitor-indicators/display-monitor-indicators.component";

import { SharedPipesModule } from "shared/pipes/shared-pipes.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";


import { DisplayMonitorIndicatorsHistoricComponent } from './display-monitor-indicators-historic/display-monitor-indicators-historic.component';
import { DisplayMonitorIndicatorsSummaryComponent } from './display-monitor-indicators-summary/display-monitor-indicators-summary.component';


import { ExcelService } from 'projects/view/src/shared/services/';
@NgModule({
  declarations: [
    DisplayMonitorComponent,
    DisplayMonitorIndicatorsComponent,
    DisplayMonitorIndicatorsHistoricComponent,
    DisplayMonitorIndicatorsSummaryComponent
  ],
  imports: [
    CommonModule,
    AlertModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgSelectModule,
    NgxDatatableModule,
    Ng2Charts,

    SharedPipesModule,

    SelectorModule,
    DisplayHeaderModule,

    FontAwesomeModule,
    DisplayMonitorRoutingModule
  ],
  providers: [ExcelService, { provide: LOCALE_ID, useValue: "es" }]
})
export class DisplayMonitorModule { }
