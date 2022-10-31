export class SignUpModel {
	Id:number=0;
    name:string='';
	email:string='';
	phone:string='';
	password:string='';
	gender:string='';

}
export class Passenger {
	Id:number=0;
	seatno:string='';
    name:string='';
	email:string='';
	phone:string='';
	gender:string='';
    boardingPoint:string='';
	dropingPoint:string='';
	fare:number=0;
	busid:number=0;
	userid:number=0;
}
export class busSeats {
	checked: boolean = false;
	seatno= '';
	}