import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';

import { WeaterRoutingModule } from './weater-routing.module';

import { SharedModule } from '../shared/shared.module';

import {
  NgbModule,
  NgbPaginationModule,
  NgbAlertModule,
  ModalDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HomeComponent, SidebarComponent],
  imports: [
    CommonModule,
    WeaterRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HomeComponent, SidebarComponent],
})
export class WeaterModule {}
