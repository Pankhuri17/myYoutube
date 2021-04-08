import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges  {
 

  constructor(private service : ApiService) { }

  @Input() tableData : any;
  @Output() editTableData = new EventEmitter;

data: any;

ngOnChanges(changes: SimpleChanges) {

  console.log("hey",this.tableData)

 if(this.tableData == true){
  this.getData();
 }
}

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.service.get().subscribe((res: any) => {
      // console.log('hieeeee', res);
      this.data = res;
      // this.Author = '';
      // this.Timestamp = '';
      // this.attchment = '';
      // this.TicketId! = 0;
    })
  }


  edit(data: any){
    console.log(data);
    this.editTableData.emit(data);
    
  }

  deleteTicket(id: any) {
    this.service.deleteTicket(id).subscribe(res => {
      // console.log(res)
      this.getData();
    })
  }

}
