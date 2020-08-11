import { Component } from '@angular/core';

@Component({
  selector: 'my-demo-div',
  template: `
    <div class="my-container">
      <ng-sidebar-container>
        <ng-sidebar
          [mode]="'push'"
          [showBackdrop]="true"
          [position]="'left'"
          [(opened)]="opened"
          [closeOnClickOutside]="false"
          [closeOnClickBackdrop]="true">

          <p>Sidebar contents</p>

          <button (click)="toggleOpened()">Close sidebar</button>
          <hr>

          <ul>
            <li><a href="#">option 1</a></li>
            <li><a href="#">option 2</a></li>
            <li><a href="#">option 3</a></li>
            <li><a href="#">option 4</a></li>
            <li><a href="#">option 5</a></li>
            <li><a href="#">option 6</a></li>
          </ul>

        </ng-sidebar>

        <div ng-sidebar-content>
          <button (click)="toggleOpened()">Toggle sidebar</button>
        </div>
      </ng-sidebar-container>
    </div>
  `,
  styles: [`
    .my-container {
      width: 600px;
      height: 400px;
      border: 1px solid black;
      margin-left: 20%;
      margin-top: 10%;
    }
  `]
})
export class MyDemoDivComponent {

  public opened: boolean = false;

  toggleOpened(): void {
    this.opened = !this.opened;
  }
}
