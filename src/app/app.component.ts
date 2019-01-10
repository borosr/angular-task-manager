import { Component, TemplateRef, OnInit } from '@angular/core';
import { AppModel, AppInterface } from './app.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public rocketData: string[];

  public taskModel = new AppModel();

  public appImpl: AppInterface = <AppInterface>{};

  public modalRef: BsModalRef;
  public tasks: AppModel[] = [];

  constructor(
    private modalService: BsModalService,
    private taskService: TaskService,
  ) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((response) => {
      this.tasks = response;
    });
  }

  public getRocketData() {
    this.taskService.getRockets().subscribe((response) => {
      // console.log(response);
      this.rocketData = response.map(rocket => rocket.name);
    });
  }

  public showNewTask(modalContent: TemplateRef<any>) {
    this.taskModel = new AppModel();
    this.modalRef = this.modalService.show(modalContent);
  }

  public editList(index: number, modalContent: TemplateRef<any>) {
    this.taskModel = this.tasks[index];
    this.modalRef = this.modalService.show(modalContent);
  }

  public showAppModelValue(event: AppModel) {
    this.modalRef.hide();
    this.tasks.push(event);
  }

  public getColor(checked: boolean): string {
    return checked ? 'green' : 'red';
  }

}
