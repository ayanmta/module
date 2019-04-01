import { Component, OnInit } from '@angular/core';


import { Istudent } from './Istudent';
// import { url } from 'inspector';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {



  routes=[

    {linkname:'Profile', url:'profile'},
    {linkname:'Contact' ,url:'contact'}
  ]
 

  isEdit = false;
  studentobj: Istudent = {
    name: '',
    rollno: '',
    school: '',
    source: ''


  }
  studentList: Array<Istudent> = [];
  addvalue() {
    this.studentobj.source = 'name: ' + this.studentobj.name + '                    ' + 'roll no:   ' + this.studentobj.rollno + '     ' + 'school   ' + this.studentobj.school;
    alert(this.studentobj.source)
    if (this.isEdit) {
      this.studentList.forEach((student) => {
      student.rollno === this.studentobj.rolln
          student.name = this.studentobj.name;
          student.school = this.studentobj.school;
        }
      )
      this.isEdit = false;
      this.studentobj = {
        name: '',
        rollno: '',
        school: '',
        source: '',
      }
    } else {
      this.studentList.push(this.studentobj)
      this.studentobj = {
        name: '',
        rollno: '',
        school: '',
        source: '',
      }

    }
  }
  uppdate(studentobj) {
    this.isEdit = true;
    this.studentobj = studentobj;
  }
  delete(student)
  {
    let newstudentobj=this.studentList.filter((studentobj)=>student.rollno !==studentobj.rollno);
    this.studentList=newstudentobj
  }
  ngOnInit() { }
}

