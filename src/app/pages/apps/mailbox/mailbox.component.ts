import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {

  mailNavArr: any[] = [
    { icon: "bi bi-envelope", name: "Inbox", badgeType: "badge-primary", badgeValue: 5, selected: true },
    { icon: "bi bi-cursor", name: "Sent", selected: false },
    { icon: "bi bi-envelope-open", name: "Draft", badgeType: "badge-info", badgeValue: 8, selected: false },
    { icon: "bi bi-arrow-clockwise", name: "Outbox", selected: false },
    { icon: "bi bi-star", name: "Starred", badgeType: "badge-warning", badgeValue: 4, selected: false },
    { icon: "bi bi-trash", name: "Trash", badgeType: "badge-danger", badgeValue: 9, selected: false }
  ];
  mailLabelArr: any[] = [
    { status: "danger", name: "Web Design", badgeType: "badge-primary", badgeValue: 5, selected: true },
    { status: "info", name: "Recharge", selected: false },
    { status: "dark", name: "Paypal", badgeType: "badge-info", badgeValue: 8, selected: false },
    { status: "primary", name: "Family", selected: false },
  ];
  mailListArr: any[] = [
    {
      selected: false, sactive: true, name: "Herman Beck", badge: 'badge-info', badgeName: "Marketing", mail_type: "[ThemeForest]",
      mail_msg: "Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar1.jpg", from: "info1@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      selected: false, sactive: false, name: "Mary Adams", mail_type: "[Support]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority",
      img: "assets/avatar/avatar2.jpg", from: "info2@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "June Lane", badge: 'badge-primary', badgeName: "Family", mail_type: "[Support]",
      mail_msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar3.jpg", from: "info3@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Gary Camara", mail_type: "[CSS]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar4.jpg", from: "info4@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Frank Camly", badge: 'badge-danger', badgeName: "Themeforest", mail_type: "[WrapTheme]",
      mail_msg: "Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar5.jpg", from: "info5@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Gary Camara", badge: 'badge-success', badgeName: "Work", mail_type: "[Awwwards]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar1.jpg", from: "info6@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: true, name: "Gary Camara", badge: 'badge-success', badgeName: "Work", mail_type: "[Awwwards]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar2.jpg", from: "info7@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    }
  ];
  archiveListArr: any[] = [
    {
      selected: false, sactive: false, name: "Gary Camara", mail_type: "[CSS]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar1.jpg", from: "info8@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Frank Camly", badge: 'badge-danger', badgeName: "Themeforest", mail_type: "[WrapTheme]",
      mail_msg: "Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar2.jpg", from: "info9@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Gary Camara", badge: 'badge-success', badgeName: "Work", mail_type: "[Awwwards]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar3.jpg", from: "info10@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: true, name: "Gary Camara", badge: 'badge-success', badgeName: "Work", mail_type: "[Awwwards]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar4.jpg", from: "info11@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    }
  ];
  sentMailListArr: any[] = [
    {
      selected: false, sactive: false, name: "June Lane", badge: 'badge-primary', badgeName: "Family", mail_type: "[Support]",
      mail_msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar1.jpg", from: "info12@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Gary Camara", mail_type: "[CSS]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar2.jpg", from: "info13@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      selected: false, sactive: false, name: "June Lane", badge: 'badge-primary', badgeName: "Family", mail_type: "[Support]",
      mail_msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar1.jpg", from: "info12@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Gary Camara", mail_type: "[CSS]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar2.jpg", from: "info13@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
  ];
  draftMailListArr: any[] = [
    {
      selected: false, sactive: true, name: "Praveen Lane", badge: 'badge-primary', badgeName: "Family", mail_type: "[Support]",
      mail_msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar1.jpg", from: "info12@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Kumar Camara", mail_type: "[CSS]", badge: 'badge-danger', badgeName: "Themeforest",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar2.jpg", from: "info13@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Frank Praveen", mail_type: "[WrapTheme]",
      mail_msg: "Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar3.jpg", from: "info14@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    }
  ];
  outboxMailListArr: any[] = [
    {
      selected: false, sactive: false, name: "June", mail_type: "[Support]",
      mail_msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar1.jpg", from: "info12@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: true, name: "Camara", mail_type: "[CSS]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar2.jpg", from: "info13@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Frank", badge: 'badge-danger', badgeName: "Themeforest", mail_type: "[WrapTheme]",
      mail_msg: "Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar3.jpg", from: "info14@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      selected: false, sactive: false, name: "June", mail_type: "[Support]",
      mail_msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar1.jpg", from: "info12@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: true, name: "Camara", mail_type: "[CSS]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar2.jpg", from: "info13@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Frank", badge: 'badge-danger', badgeName: "Themeforest", mail_type: "[WrapTheme]",
      mail_msg: "Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar3.jpg", from: "info14@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      selected: false, sactive: false, name: "June", mail_type: "[Support]",
      mail_msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar1.jpg", from: "info12@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: true, name: "Camara", mail_type: "[CSS]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar2.jpg", from: "info13@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Frank", badge: 'badge-danger', badgeName: "Themeforest", mail_type: "[WrapTheme]",
      mail_msg: "Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar3.jpg", from: "info14@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
  ];
  starredMailListArr: any[] = [
    {
      selected: false, sactive: true, name: "June", mail_type: "[CSS]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar2.jpg", from: "info13@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: true, name: "Gary", badge: 'badge-danger', badgeName: "Themeforest", mail_type: "[WrapTheme]",
      mail_msg: "Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar3.jpg", from: "info14@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      selected: false, sactive: true, name: "Lane", badge: 'badge-primary', badgeName: "Family", mail_type: "[Support]",
      mail_msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar1.jpg", from: "info12@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: true, name: "June", mail_type: "[CSS]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar2.jpg", from: "info13@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: true, name: "Gary", badge: 'badge-danger', badgeName: "Themeforest", mail_type: "[WrapTheme]",
      mail_msg: "Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar3.jpg", from: "info14@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      selected: false, sactive: true, name: "Lane", badge: 'badge-primary', badgeName: "Family", mail_type: "[Support]",
      mail_msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar1.jpg", from: "info12@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: true, name: "June", mail_type: "[CSS]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar2.jpg", from: "info13@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: true, name: "Gary", badge: 'badge-danger', badgeName: "Themeforest", mail_type: "[WrapTheme]",
      mail_msg: "Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar3.jpg", from: "info14@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
  ];
  trashMailListArr: any[] = [
    {
      selected: false, sactive: false, name: "June Lane", badge: 'badge-primary', badgeName: "Family", mail_type: "[Support]",
      mail_msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar1.jpg", from: "info12@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Gary Camara", mail_type: "[CSS]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar2.jpg", from: "info13@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Frank Camly", badge: 'badge-danger', badgeName: "Themeforest", mail_type: "[WrapTheme]",
      mail_msg: "Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar3.jpg", from: "info14@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      selected: false, sactive: false, name: "June Lane", badge: 'badge-primary', badgeName: "Family", mail_type: "[Support]",
      mail_msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar1.jpg", from: "info12@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Gary Camara", mail_type: "[CSS]",
      mail_msg: "There are many variations of passages of Lorem Ipsum available, but the majority.",
      img: "assets/avatar/avatar2.jpg", from: "info13@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    {
      selected: false, sactive: false, name: "Frank Camly", badge: 'badge-danger', badgeName: "Themeforest", mail_type: "[WrapTheme]",
      mail_msg: "Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar3.jpg", from: "info14@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      selected: false, sactive: false, name: "June Lane", badge: 'badge-primary', badgeName: "Family", mail_type: "[Support]",
      mail_msg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "assets/avatar/avatar1.jpg", from: "info12@thememakker.com", to: "Me", cc: [{ ml: "mail1@thememakker.com" }, { ml: "mail2@thememakker.com" }], file_size: "(2 files, 89.2KB)", time: new Date,
      mail_detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrnturies, but also the leap into electronic typesetting, remaining essentially unchanged."

    }
  ];
  length = this.mailListArr?.length;
  pageSize = 5;
  hidePageSize = true;
  detailView: boolean = false;
  allSelected: boolean = false;
  mailFilter: any;
  mailDatail: any = {};
  mailHead: any = "Inbox";
  constructor(private router: Router) { };
  ngOnInit(): void { this.mailFilter = this.mailListArr; };
  handlePageEvent(e: PageEvent) { this.length = e?.length; this.pageSize = e?.pageSize; };
  showDetail(data: any) { this.detailView = true; this.mailDatail = data; };
  closeDetail() { this.detailView = false; };
  someSelected(): boolean {
    if (this.mailListArr == null) { return false };
    return this.mailListArr.filter((t: any) => t.selected).length > 0 && !this.allSelected;
  };
  setAll(selected: boolean) {
    this.allSelected = selected;
    if (this.mailListArr == null) { return }
    this.mailListArr.forEach((t: any) => (t.selected = selected));
  };
  updateAllSelected() { this.allSelected = this.mailListArr != null && this.mailListArr?.every((t: any) => t?.selected) };
  mailAction(data: any, id: any, type: any) {
    if (type === 'archive') {
      this.archiveListArr.push(data);
      this.mailListArr.splice(id, 1);
    }
    if (type === 'trash') {
      this.trashMailListArr.push(data);
      this.mailListArr.splice(id, 1);
    }
    this.detailView = false;
  };
  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl('.', { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  };
  mailTab(type: any) {
    this.detailView = false;
    if (type === 'refresh') { this.reload('app/mail'); };
    if (type === 'archive') { this.mailListArr = this.archiveListArr; };
    if (type === 'trash') { this.mailListArr = this.trashMailListArr; };
  };
  searchInfo(event: any) {
    this.mailListArr = this.mailFilter;
    this.mailListArr = this.mailListArr?.filter(i => i?.name?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  };

  mailSelect(id: any, name: any) {
    this.detailView = false;
    if (name?.name === 'Inbox') {
      this.length = this.mailListArr?.length;
      this.mailListArr = this.mailListArr;
    }
    if (name?.name === 'Sent') {
      this.length = this.sentMailListArr?.length;
      this.mailListArr = this.sentMailListArr;
    }
    if (name?.name === 'Draft') {
      this.length = this.draftMailListArr?.length;
      this.mailListArr = this.draftMailListArr;
    }
    if (name?.name === 'Outbox') {
      this.length = this.outboxMailListArr?.length;
      this.mailListArr = this.outboxMailListArr;
    }
    if (name?.name === 'Starred') {
      this.length = this.starredMailListArr?.length;
      this.mailListArr = this.starredMailListArr;
    }
    if (name?.name === 'Trash') {
      this.length = this.trashMailListArr?.length;
      this.mailListArr = this.trashMailListArr;
    }
    this.mailHead = name?.name;
    this.mailNavArr.forEach((s: any, index: number) => { if (index == id) { s.selected = true; } else { s.selected = false; } });
  };

  starMark(data: any, id: any) {
    if (data === 'Inbox') {
      this.mailListArr[id].sactive ? this.mailListArr[id].sactive = false : this.mailListArr[id].sactive = true;
    }
    if (data === 'Sent') {
      this.sentMailListArr[id].sactive ? this.sentMailListArr[id].sactive = false : this.sentMailListArr[id].sactive = true;
    }
    if (data === 'Draft') {
      this.draftMailListArr[id].sactive ? this.draftMailListArr[id].sactive = false : this.draftMailListArr[id].sactive = true;
    }
    if (data === 'Outbox') {
      this.outboxMailListArr[id].sactive ? this.outboxMailListArr[id].sactive = false : this.outboxMailListArr[id].sactive = true;
    }
    if (data === 'Starred') {
      this.starredMailListArr[id].sactive ? this.starredMailListArr[id].sactive = false : this.starredMailListArr[id].sactive = true;
    }
    if (data === 'Trash') {
      this.trashMailListArr[id].sactive ? this.trashMailListArr[id].sactive = false : this.trashMailListArr[id].sactive = true;
    }
  }

}
