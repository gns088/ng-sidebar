import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidebarModule } from '../../../src';
import { DemoComponent } from './demo.component';
import { MyDemoComponent } from './my-demo.component';
import { MyDemoDivComponent } from './my-demo-div.component';

@NgModule({
  declarations: [DemoComponent, MyDemoComponent, MyDemoDivComponent],
  imports: [BrowserModule, SidebarModule.forRoot()],
  bootstrap: [MyDemoComponent]
})
export class DemoAppModule {
}
