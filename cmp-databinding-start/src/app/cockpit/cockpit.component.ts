import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    content: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    blueprintName: string;
    content: string;
  }>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
    // this.blueprintCreated.emit({
    //   blueprintName: this.newServerName,
    //   content: this.newServerContent,
    // });
  }
}
