import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';

import { MouseMoveDirective } from './directives/mouse-move.directive';

@NgModule({
  declarations: [
    MouseMoveDirective,
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
   
  ],
  entryComponents: [
   
  ]
})
export class ProadjectModule {
  static forRoot(): ModuleWithProviders<ProadjectModule> {
    return {
      ngModule: ProadjectModule,
      providers: []
    };
  }
}
