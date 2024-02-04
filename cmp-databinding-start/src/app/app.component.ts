import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: { serverName: string; content: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.content,
    });
  }

  onBlueprintAdded(blueprintData: { blueprintName: string; content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.content,
    });
  }

  onIntervalFired(firedNumber: number) {
    console.log(firedNumber);
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
