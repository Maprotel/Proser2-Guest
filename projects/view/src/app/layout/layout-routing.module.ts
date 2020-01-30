import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "layout",
        component: LayoutComponent
      },

      {
        path: "view-monitor",
        loadChildren: () =>
          import("./view/display-monitor/display-monitor.module").then(
            m => m.DisplayMonitorModule
          )
      },

      {
        path: "view-interval",
        loadChildren: () =>
          import("./view/calls-indicators-interval-report/calls-indicators-interval-report.module").then(
            m => m.CallsIndicatorsByIntervalReportModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
