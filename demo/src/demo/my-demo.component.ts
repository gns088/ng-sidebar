import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <ng-sidebar-container>
      <ng-sidebar
        [(opened)]="opened"
        [closeOnClickOutside]="true"
        [closeOnClickBackdrop]="true">

        <p>Sidebar contents</p>

        <button (click)="toggleOpened()">Close sidebar</button>
        <p><a closeSidebar>This will close the sidebar too</a></p>
        <hr>

        <ul>
          <li><a href="#">option 1</a></li>
          <li><a href="#">option 2</a></li>
          <li><a href="#">option 3</a></li>
          <li><a href="#">option 4</a></li>
          <li><a href="#">option 5</a></li>
          <li><a href="#">option 6</a></li>
          <li><a href="#">option 7</a></li>
          <li><a href="#">option 8</a></li>
          <li><a href="#">option 9</a></li>
          <li><a href="#">option 10</a></li>
          <li><a href="#">option 11</a></li>
          <li><a href="#">option 12</a></li>
          <li><a href="#">option 13</a></li>
          <li><a href="#">option 14</a></li>
          <li><a href="#">option 15</a></li>
          <li><a href="#">option 16</a></li>
          <li><a href="#">option 17</a></li>
          <li><a href="#">option 18</a></li>
          <li><a href="#">option 19</a></li>
        </ul>

      </ng-sidebar>

      <div ng-sidebar-content>
        <header>
          <button (click)="toggleOpened()">Toggle sidebar</button>
          <span>ng-sidebar</span>
        </header>

        <my-demo-div></my-demo-div>
      </div>
    </ng-sidebar-container>
  `
})
export class MyDemoComponent {

  public opened: boolean = false;

  toggleOpened(): void {
    this.opened = !this.opened;
  }
}
