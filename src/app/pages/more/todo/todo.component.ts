import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  toDoListForm: FormGroup | any;
  toDoAllList: any[] = [];
  toDoList: any[] = [];
  doneList: any[] = [];
  submitted = false;
  editMode: boolean = false;
  toDo_id: number | any;
  editFromAll: boolean = false;
  editFromTodo: boolean = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.inicializeForm();
    this.getAllTaskList();
    this.getTodoTaskList();
    this.getDoneTaskList();
  }

  get f() { return this.toDoListForm.controls; }

  inicializeForm() {
    this.toDoListForm = this.fb.group({ newtask: ['', [Validators.required, Validators.minLength(10)]] })
  }

  getAllTaskList() {
    this.toDoAllList = JSON.parse(localStorage.getItem("allTask") || '[]');
  }
  getTodoTaskList() {
    this.toDoList = JSON.parse(localStorage.getItem("todoTask") || '[]');
  }
  getDoneTaskList() {
    this.doneList = JSON.parse(localStorage.getItem("doneTask") || '[]');
  }

  addTask() {
    if (!this.editMode) {
      this.submitted = true;
      if (this.toDoListForm.invalid) { return }
      if (this.toDoListForm.valid) {
        this.toDoAllList.push(this.toDoListForm.value);
        localStorage.setItem("allTask", JSON.stringify(this.toDoAllList));
        this.toDoListForm.reset();
        this._snackBar.open('Task is Added!', 'Ok');

      }
    }
    if (this.editMode) {
      if (this.editFromAll) {
        this.toDoAllList[this.toDo_id] = this.toDoListForm.value;
        localStorage.setItem("allTask", JSON.stringify(this.toDoAllList));
        this.toDoListForm.reset();
        this._snackBar.open('Task is Edited!', 'Ok');

      }
      if (this.editFromTodo) {
        this.toDoList[this.toDo_id] = this.toDoListForm.value;
        localStorage.setItem("todoTask", JSON.stringify(this.toDoList));
        this.toDoListForm.reset();
        this._snackBar.open('Task is Edited!', 'Ok');
      }
    }
  }

  editTask(id: number, mode: string) {
    this.toDo_id = id;
    if (mode == 'edit_from_all') {
      this.editFromAll = true;
      this.toDoListForm.patchValue({
        newtask: [this.toDoAllList[id].newtask]
      });
    }
    if (mode == 'edit_from_todo') {
      this.editFromTodo = true;
      this.toDoListForm.patchValue({
        newtask: [this.toDoList[id].newtask]
      });
    }
    this.editMode = true;
  }

  deleteTask(id: number, mode: string) {
    if (mode == 'from_all') {
      this.toDoAllList.splice(id, 1);
      localStorage.setItem("allTask", JSON.stringify(this.toDoAllList));
      this._snackBar.open('Task is Deleted From All Task List!', 'Ok');

    }
    if (mode == 'from_todo') {
      this.toDoList.splice(id, 1);
      localStorage.setItem("todoTask", JSON.stringify(this.toDoList));
      this._snackBar.open('Task is Deleted From ToDo List!', 'Ok');

    }
    if (mode == 'from_done') {
      this.doneList.splice(id, 1);
      localStorage.setItem("doneTask", JSON.stringify(this.doneList));
      this._snackBar.open('Task is Deleted From Done List!', 'Ok');

    }
  }

  move_In_Todo_List(id: number) {
    const todoListItem = this.toDoAllList[id];
    const duplyTask = this.toDoList.includes(todoListItem);
    if (!duplyTask) {
      this.toDoList.push(todoListItem);
      localStorage.setItem("todoTask", JSON.stringify(this.toDoList));
      this._snackBar.open('Task is Moved In ToDo List!', 'Ok');
    } else {
      this._snackBar.open('Task is Already in List!', 'Ok');
    }

  }

  move_To_Done_List(id: number, mode: string) {
    if (mode == 'from_all') {
      const doneListItem = this.toDoAllList[id];
      const duplyTask = this.doneList.includes(doneListItem);
      if (!duplyTask) {
        this.doneList.push(doneListItem);
        localStorage.setItem("doneTask", JSON.stringify(this.doneList));
        this._snackBar.open('Task is moved In Done List!', 'Ok');
      } else {
        this._snackBar.open('Task is Already in List!', 'Ok');
      }
    }
    if (mode == 'from_todo') {
      const doneListItem = this.toDoList[id];
      const duplyTask = this.doneList.includes(doneListItem);
      if (!duplyTask) {
        this.doneList.push(doneListItem);
        localStorage.setItem("doneTask", JSON.stringify(this.doneList));
      }
      this.toDoList.splice(id, 1);
      localStorage.setItem("todoTask", JSON.stringify(this.toDoList));
      this._snackBar.open('Task is moved In Done List!', 'Ok');
    }

  }


}
