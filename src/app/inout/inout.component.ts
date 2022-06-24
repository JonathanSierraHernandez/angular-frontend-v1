import { Component, OnInit, ViewChild } from '@angular/core';
import { Inout } from '../inout';
import { InoutService } from '../inout.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-inout',
  templateUrl: './inout.component.html',
  styleUrls: ['./inout.component.css']
})
export class InoutComponent implements OnInit {

  inOuts: Inout[] = [];
  dataSource = new MatTableDataSource<Inout>(this.inOuts);

  displayedColumns = ['usr', 'enter', 'out', 'detail'];

  @ViewChild('MatSort') sort = new MatSort();
  @ViewChild('MatPaginator') paginator: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inOutService: InoutService
  ) { this.getInOuts; }

  getInOuts(): void {
    this.inOutService.findAll().subscribe(data => {
      this.inOuts = data;
      this.dataSource = new MatTableDataSource<Inout>(this.inOuts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  public doFilter = (event: Event) => {
      this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    }

  ngOnInit(): void {
    this.getInOuts();
  }



}
