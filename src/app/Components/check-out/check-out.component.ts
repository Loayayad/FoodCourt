import { Component, OnInit } from '@angular/core';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  public payPalConfig ? : IPayPalConfig;

  purchasedMeals = this.cartService.getPurchasedItems();


  userID = localStorage.getItem('user');
  totalPrice = this.cartService.getTotal();
  options ='';
  orders:{meals:[], userID:string}[]=[] ;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('user'));
    this.initConfig();

  }
  private initConfig(): void {
    this.payPalConfig = {
        currency: 'EUR',
        clientId: 'ARVegu43K5qlI65PGDVdA87ehCyaUTpVXxnB1F68RZAWMfyTrfel2COGW_h2DMVffreZfaAIxmwjIhuJ',
        createOrderOnClient: (data) => <ICreateOrderRequest> {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'EUR',
                    value: '9.99',
                    breakdown: {
                        item_total: {
                            currency_code: 'EUR',
                            value: '9.99'
                        }
                    }
                },
                items: [{
                    name: 'Food Court',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'EUR',
                        value: '9.99',
                    },
                }]
            }]
        },

        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical',
            size:'small',
            color:'blue',
            shape:'rect'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details: any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);

        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);


        },
        onError: err => {
            console.log('OnError', err);

        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);

        },
    };
}

  sendOrder(){
    if(localStorage.getItem('user') !== null)
    {
      this.cartService.postOrders(this.purchasedMeals, localStorage.getItem('user'), this.options)
      console.log(this.options)
      // localStorage.setItem("orderSent",'true');
    }
    console.log(this.cartService.getOrders())
  }
}
