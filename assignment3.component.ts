import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment3',
  imports: [CommonModule,FormsModule],
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component {
  students: { name: string; grade: string }[] = [];
  name: string = "";
  grade: string = "";
  addStudent(){
      this.students.push({ name: this.name, grade: this.grade});
      this.name = "";
      this.grade = "";  
  }
}
