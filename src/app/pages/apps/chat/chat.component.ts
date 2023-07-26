import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  memberFilter: any;
  selectedMember: any;
  memberList: any[] = [
    { designation:"UI Designer", chat: [{ sender: "hi " }, { own: "hello" }, { sender: "how are you? " }, { own: "i am fine" }, { own: "what about you?" }, { sender: "i am also Fine" }], active: true, img: "assets/avatar/avatar1.jpg", name: "Vincent Porter", status: "offline", time: "left 7 mins ago" },
    { designation:"UI Designer 1", chat: [{ sender: "sender 2 message 1 " }, { own: "owner 2 message 1 " }, { sender: "sender 2 message 2 " }, { own: "owner 2 message 2 " }, { sender: "sender 2 message 3 " }, { own: "owner 2 message 3 " }, { sender: "sender 2 message 1 " }, { own: "owner 2 message 1 " }, { sender: "sender 2 message 2 " }, { own: "owner 2 message 2 " }, { sender: "sender 2 message 3 " }, { own: "owner 2 message 3 " }], active: false, img: "assets/avatar/avatar2.jpg", name: "Aiden Chavez", status: "online", time: "online" },
    { designation:"UI Designer 2", chat: [{ sender: "sender 3 message 1 " }, { own: "owner  3 message 1 " }, { sender: "sender  3 message 2 " }, { own: "owner  3  message 2 " }, { sender: "sender  3  message 3 " }, { own: "owner  3 message 3 " }, { sender: "sender 3 message 1 " }, { own: "owner  3 message 1 " }, { sender: "sender  3 message 2 " }, { own: "owner  3  message 2 " }, { sender: "sender  3  message 3 " }, { own: "owner  3 message 3 " }], active: false, img: "assets/avatar/avatar3.jpg", name: "Mike Thomas", status: "online", time: "online" },
    { designation:"UI Designer 3", chat: [{ sender: "sender 4 message 1 " }, { own: "owner  4 message 1 " }, { sender: "sender  4 message 2 " }, { own: "owner  4  message 2 " }, { sender: "sender  4  message 3 " }, { own: "owner  4 message 3 " }, { sender: "sender 4 message 1 " }, { own: "owner  4 message 1 " }, { sender: "sender  4 message 2 " }, { own: "owner  4  message 2 " }, { sender: "sender  4  message 3 " }, { own: "owner  4 message 3 " }], active: false, img: "assets/avatar/avatar4.jpg", name: "Christian Kelly", status: "offline", time: "left 10 hours ago" },
    { designation:"UI Designer 4", chat: [{ sender: "sender 5 message 1 " }, { own: "owner  5 message 1 " }, { sender: "sender  5 message 2 " }, { own: "owner  5  message 2 " }, { sender: "sender  5  message 3 " }, { own: "owner  5 message 3 " }, { sender: "sender 5 message 1 " }, { own: "owner  5 message 1 " }, { sender: "sender  5 message 2 " }, { own: "owner  5  message 2 " }, { sender: "sender  5  message 3 " }, { own: "owner  5 message 3 " }], active: false, img: "assets/avatar/avatar5.jpg", name: "Monica Ward", status: "online", time: "online" },
    { designation:"UI Designer 5", chat: [{ sender: "sender 6 message 1 " }, { own: "owner  6 message 1 " }, { sender: "sender  6 message 2 " }, { own: "owner  6  message 2 " }, { sender: "sender  6  message 3 " }, { own: "owner  6 message 3 " }, { sender: "sender 6 message 1 " }, { own: "owner  6 message 1 " }, { sender: "sender  6 message 2 " }, { own: "owner  6  message 2 " }, { sender: "sender  6  message 3 " }, { own: "owner  6 message 3 " }], active: false, img: "assets/avatar/avatar1.jpg", name: "Dean Henry", status: "offline", time: "offline since Oct 28" },
    { designation:"UI Designer 6", chat: [{ sender: "sender 7 message 1 " }, { own: "owner  7 message 1 " }, { sender: "sender  7 message 2 " }, { own: "owner  7  message 2 " }, { sender: "sender  7  message 3 " }, { own: "owner  7 message 3 " }, { sender: "sender 7 message 1 " }, { own: "owner  7 message 1 " }, { sender: "sender  7 message 2 " }, { own: "owner  7  message 2 " }, { sender: "sender  7  message 3 " }, { own: "owner  7 message 3 " }], active: false, img: "assets/avatar/avatar2.jpg", name: "Vincent", status: "offline", time: "left 1 mins ago" },
    { designation:"UI Designer 7", chat: [{ sender: "sender 8 message 1 " }, { own: "owner  8 message 1 " }, { sender: "sender  8 message 2 " }, { own: "owner  8  message 2 " }, { sender: "sender  8  message 3 " }, { own: "owner  8 message 3 " }, { sender: "sender 8 message 1 " }, { own: "owner  8 message 1 " }, { sender: "sender  8 message 2 " }, { own: "owner  8  message 2 " }, { sender: "sender  8  message 3 " }, { own: "owner  8 message 3 " }], active: false, img: "assets/avatar/avatar3.jpg", name: "Porter", status: "offline", time: "left 7 days ago" },
    { designation:"UI Designer 8", chat: [{ sender: "sender 9 message 1 " }, { own: "owner  9 message 1 " }, { sender: "sender  9 message 2 " }, { own: "owner  9  message 2 " }, { sender: "sender  9  message 3 " }, { own: "owner  9 message 3 " }, { sender: "sender 9 message 1 " }, { own: "owner  9 message 1 " }, { sender: "sender  9 message 2 " }, { own: "owner  9  message 2 " }, { sender: "sender  9  message 3 " }, { own: "owner  9 message 3 " }], active: false, img: "assets/avatar/avatar4.jpg", name: "Praveen", status: "offline", time: "left 1 week ago" },
    { designation:"UI Designer 9", chat: [{ sender: "sender 10 message 1 " }, { own: "owner 10 message 1 " }, { sender: "sender 10 message 2 " }, { own: "owner 10  message 2 " }, { sender: "sender 10  message 3 " }, { own: "owner 10 message 3 " }, { sender: "sender 10 message 1 " }, { own: "owner 10 message 1 " }, { sender: "sender 10 message 2 " }, { own: "owner 10  message 2 " }, { sender: "sender 10  message 3 " }, { own: "owner 10 message 3 " }], active: false, img: "assets/avatar/avatar5.jpg", name: "Kumar Porter", status: "online", time: "online" },
    { designation:"UI Designer 10", chat: [{ sender: "sender 11 message 1 " }, { own: "owner 11 message 1 " }, { sender: "sender 11 message 2 " }, { own: "owner 11  message 2 " }, { sender: "sender 11  message 3 " }, { own: "owner 11 message 3 " }, { sender: "sender 11 message 1 " }, { own: "owner 11 message 1 " }, { sender: "sender 11 message 2 " }, { own: "owner 11  message 2 " }, { sender: "sender 11  message 3 " }, { own: "owner 11 message 3 " }], active: false, img: "assets/avatar/avatar1.jpg", name: "Dev", status: "online", time: "online" },
    { designation:"UI Designer 11", chat: [{ sender: "sender 12 message 1 " }, { own: "owner 12 message 1 " }, { sender: "sender 12 message 2 " }, { own: "owner 12  message 2 " }, { sender: "sender 12  message 3 " }, { own: "owner 12 message 3 " }, { sender: "sender 12 message 1 " }, { own: "owner 12 message 1 " }, { sender: "sender 12 message 2 " }, { own: "owner 12  message 2 " }, { sender: "sender 12  message 3 " }, { own: "owner 12 message 3 " }], active: false, img: "assets/avatar/avatar2.jpg", name: "Vincent Praveen", status: "offline", time: "left 7 seconds ago" },
  ];
  send_Msg = new FormControl();
  memberChat: any[] = this.memberList[0]?.chat;
  detailedView:boolean = false;
  moreAction:boolean= false;
  @ViewChild('scrollMe') scrollMe: ElementRef | any;
  scrolChat:number | any;
  constructor() { }

  ngOnInit(): void {
    this.memberFilter = this.memberList;
    this.selectedMember = this.memberList[0];
    this.scrolChat = this.scrollMe?.nativeElement?.scrollHeight;
  }

  searchMember(event: any) {
    this.memberList = this.memberFilter;
    this.memberList = this.memberList?.filter(i => i?.name?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  }

  mailSelect(id: any, name: any) {
    this.scrolChat = this.scrollMe?.nativeElement?.scrollHeight;
    this.selectedMember = name;
    this.memberList.forEach((s: any, index: number) => { if (index == id) { s.active = true; this.memberChat = s?.chat; } else { s.active = false; } });
  };

  sendMessage(data:any) { 
    this.scrolChat = this.scrollMe?.nativeElement?.scrollHeight;
    data?.chat?.push({own:this.send_Msg?.value});
    this.send_Msg?.reset();
   }

}
