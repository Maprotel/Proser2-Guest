import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "login",
        loadChildren: () =>
          import("./init/login/login.module").then(m => m.LoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}

// {
//   path: "intro",
//   loadChildren: () =>
//     import("./intro/intro.module").then(m => m.IntroModule)
// },
