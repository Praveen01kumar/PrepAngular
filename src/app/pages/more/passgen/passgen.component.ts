import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-passgen',
  templateUrl: './passgen.component.html',
  styleUrls: ['./passgen.component.scss']
})
export class PassgenComponent implements OnInit {

  password: string = '';
  passLenth: number = 4;
  minPasslen: number = 4;
  maxPasslen: number = 32;
  allComplete: boolean = false;
  labelVal: any = { Length_: "Length:", Your_Password: "Your Password", Generate_Password: "Generate", Copy_Password: "Copy", Paste_Here: "Paste Here" };

  constructor(private _snackBar: MatSnackBar) { }
  ngOnInit(): void { }

  task = {
    name: 'Includes All', completed: false, color: 'accent', subtasks: [
      { name: 'Upper Case', completed: false, color: 'accent' },
      { name: 'Lower Case', completed: false, color: 'accent' },
      { name: 'Numbers', completed: false, color: 'accent' },
      { name: 'Special Characters', completed: false, color: 'accent' },
    ],
  };

  updateAllComplete() { this.allComplete = this.task.subtasks != null && this.task.subtasks.every((t: any) => t.completed) }
  someComplete(): boolean {
    if (this.task.subtasks == null) { return false }
    return this.task.subtasks.filter((t: any) => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) { return }
    this.task.subtasks.forEach((t: any) => (t.completed = completed));
  }
  onInputChange(event: any) { this.passLenth = event.value }
  generatePassword() {
    const A_Z = this.task?.subtasks[0].completed ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : '';
    const a_z = this.task?.subtasks[1].completed ? "abcdefghijklmnopqrstuvwxyz" : '';
    const num = this.task?.subtasks[2].completed ? "0123456789" : '';
    const s_symbol = this.task?.subtasks[3].completed ? "!@#$%^&*-_=+\\|:;',.\<>/?~" : '';
    let all_char = this.allComplete ? (A_Z + a_z + num + s_symbol) : (A_Z + a_z + num + s_symbol);
    if (all_char == "") { all_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" }
    this.password = '';
    for (let i = 0; i < this.passLenth; i++) { this.password += all_char[Math.floor(Math.random() * (all_char.length))] }
  }

  copyMessage(password: string) {
    if (password) {
      navigator.clipboard.writeText(password).then().catch(e => console.log(e));
      this.labelVal.Copy_Password = "Copied";
      setTimeout(() => { this.labelVal.Copy_Password = "Copy" }, 3000);
      this.password = '';
    } else { this._snackBar.open("Please First Generate Password!", "Ok", { "duration": 2000 }) }

  }

}
