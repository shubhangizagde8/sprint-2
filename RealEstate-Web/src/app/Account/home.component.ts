import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../services/property.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  
})
export class HomeComponent implements OnInit {

  constructor(private _Propertyservice: PropertyService) { }
  public searchTerm:string ='';
  searchkey:string="";
  public property : any ; 
   ngOnInit(): void {

   
    this._Propertyservice.search.subscribe((val:any)=>{
      this.searchkey=val; })
      this._Propertyservice.getProperty().subscribe(res => this.property = res, err => console.log(err))

  }
  

}
