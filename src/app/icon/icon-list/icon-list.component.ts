import { Component, OnInit } from '@angular/core';
import {Icon} from '../../model/icon';
import {IconService} from '../../service/icon/icon.service';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class IconListComponent implements OnInit {
  icons: Icon[] = [];

  constructor(private iconService: IconService) { }

  ngOnInit() {
    this.getAllIcon();
  }
  getAllIcon() {
    this.iconService.getAll().subscribe((data) => {
      this.icons = data;
    }, (error) => {
      alert(error);
    });
  }

}
