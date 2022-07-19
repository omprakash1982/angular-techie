import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CountryReports } from 'src/countryReports';
import { Covid19SvcService } from '../covid19-svc.service';


@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {
  ELEMENT_DATA: CountryReports[] = [];
  displayedColumns: string[] = ['country','cases','todayCases','deaths','todayDeaths','recovered','todayRecovered'
  ,'active','critical','casesPerOneMillion','deathsPerOneMillion','tests','testsPerOneMillion'];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort,{ static: true })
  sort!: MatSort;
  constructor(private service:Covid19SvcService) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllReports();
}
  

  public getAllReports(){
    let resp=this.service.covid19Reports();
    resp.subscribe(report=>this.dataSource.data=report as CountryReports[])
  }
  
  applyFilter(event:any){
    const filterValue =(event.target as HTMLInputElement).value;
    this.dataSource.filter =filterValue.trim().toLowerCase();
    
    }
    
  }
