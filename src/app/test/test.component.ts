import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  Author: any;
  Timestamp: any;
  Note: any; TicketId!: Number;
  data: any;

  id: any;
  attchment: any;
  attachment: any[] = [];
  filesDataArray: any[] = [];
  fileDetails: any;
  tableRes: boolean = false;
  saveBtn: boolean = true;
  editBtn: boolean = false;
  imgType: any[] = [];
  // imgType: any;
  searchData : any;


  constructor(
    private service: ApiService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // this.getData();

    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', '563492ad6f9170000100000175c261b42ae049738e9fa8a979fb1e6c');

    // this.http.get("https://api.pexels.com/v1/search?query=cars", { headers: headers }).subscribe(res => {
    //   this.imgType = res.photos;
    //   console.log("this is api res", this.imgType);
    // })

  }


  // getData() {
  //   this.service.get().subscribe(res => {
  //     console.log('hieeeee', res);
  //     this.data = res;
  //     // this.imgType = '';
  //     // this.Author = '';
  //     // this.Timestamp = '';
  //     // this.attchment = '';
  //     // this.TicketId! = 0;
  //   })
  // }

  submit(data1: any) {

    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', '563492ad6f9170000100000175c261b42ae049738e9fa8a979fb1e6c');
    // Uri const baseUri = new Uri("https://api.pexels.com/v1/search?query=");
    // Uri const myUri = new Uri(baseUri, this.imgType);
    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=' + data1 + '&type=video&key=' + 'AIzaSyDjjOCLq77DmGM_ZqG6mL4xHSU0b6KkPOk';

    this.http.get(url).subscribe(res => {
      this.data = res;
      this.imgType = this.data.items;
      console.log("this is api res", this.imgType);
    })

    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', '563492ad6f9170000100000175c261b42ae049738e9fa8a979fb1e6c');
    // // Uri const baseUri = new Uri("https://api.pexels.com/v1/search?query=");
    // // Uri const myUri = new Uri(baseUri, this.imgType);
    // const url = 'https://api.pexels.com/v1/search?query=' + data1;

    // this.http.get(url, { headers: headers }).subscribe(res => {
    //   this.imgType = res.photos;
    //   console.log("this is api res", this.imgType);
    // })
    // // console.log('hieeeee', data1, data2, data3, data4, );

    // let payload = {
    //   "author": data1,
    //   "timestamp": data2,
    //   "note": data3,
    //   "ticketId": JSON.parse(data4),
    //   "attachment": this.attachment,
    // }

    // console.log("this is payload data", payload);

    // if (this.saveBtn == false) {
    //   this.service.put(this.id, payload).subscribe(res => {
    //     console.log("success", res);


    //     this.tableRes = true;
    //   })
    // } else if (this.editBtn == false) {
    //   this.service.post(payload).subscribe(res => {
    //     // console.log("this is post res", res);

    //     if (res) {
    //       this.tableRes = true;
    //     }

    //   })
    // }

  }


  fileUpload(event: any) {
    this.filesDataArray = this.attachment;
    this.fileDetails = event;
    if (event.target.files && event.target.files[0]) {
      const dataLength: any = event.target.files;
      for (var i = 0; i < dataLength.length; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(dataLength[i]);
        let fileNameType: any = dataLength[i].name;
        reader.onload = (element: any) => {
          let fileData = element.target.result;
          let base64Data = fileData.split(',')[1];
          let filePayload = {
            FileName: fileNameType,
            FileContent: base64Data,
          };
          this.filesDataArray.push(filePayload);
        };
      }
    }
    // console.log(this.filesDataArray)
    // console.log(event.target.files)
  }




  editData(event: any) {
    console.log("edit data", event);
    if (event) {
      this.id = event.id;
      this.attchment = event.attachment;
      this.Author = event.author;
      this.Timestamp = event.timestamp;
      this.Note = event.note;
      this.TicketId = event.ticketId;

    }
    this.editBtn = true;
    this.saveBtn = false;
  }



}

