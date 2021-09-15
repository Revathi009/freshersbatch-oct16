import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public Item: number = 0;
  public searchTerm: string = '';
  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe(res => {
      this.totalItem = res.length;
    });

  }

  // this._cartService.getProducts().subscribe(res => {
  //   this.Item = res.length;
  // })

  search(event: any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this._cartService.search.next(this.searchTerm);
  }

  logout(){
    localStorage.removeItem('token');
}  

}
