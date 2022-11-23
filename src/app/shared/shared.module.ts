import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES } from './services';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...SERVICES],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
