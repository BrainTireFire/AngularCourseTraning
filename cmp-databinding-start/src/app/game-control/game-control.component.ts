import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent implements OnInit {
  @Output() invervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() {}

  ngOnInit() {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.invervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
