import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { LoadingComponent } from './componenets/loading/loading.component';


@NgModule({
    declarations: [
        SharedComponent,
        LoadingComponent
    ],
    exports: [
        LoadingComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule
    ]
})
export class SharedModule { }
