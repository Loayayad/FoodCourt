export interface IUser {
  id:number,
  userName:string,
  password:string,
  firstName: string,
  lastName: string,
  phoneNumber:number,
  adress:{
    country:string,
    city:string,
    street:string
  }


}
