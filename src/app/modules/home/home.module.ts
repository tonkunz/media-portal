import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { VjsPlayerComponent } from './components/vjs-player/vjs-player.component';
import { HomeComponent } from './containers/home.component';
import { routes } from './home.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [
    HomeComponent,
    VjsPlayerComponent,
  ],
  providers: [],
})
export class HomeModule { }
