import { NgModule } from '@angular/core';
import { NucelarUiComponent } from './nucelar-ui.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './wrappers/card/card.component';
import { ListComponent } from './wrappers/list/list.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    NucelarUiComponent,
    ButtonComponent,
    CardComponent,
    ListComponent,
    SkeletonComponent,
    SpinnerComponent
  ],
  imports: [
  ],
  exports: [
    NucelarUiComponent
  ]
})
export class NucelarUiModule { }
