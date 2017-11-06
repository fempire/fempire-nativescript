import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule
    };
  }
}
