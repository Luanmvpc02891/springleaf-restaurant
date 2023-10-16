import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/interfaces/cart';
import { Reservation } from 'src/app/interfaces/reservation';
import { Table } from 'src/app/interfaces/table';
import { User } from 'src/app/interfaces/user';
import { CartService } from 'src/app/services/cart.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { TableService } from 'src/app/services/table.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent {
  tables: Table[] = [];
  users: User[] = [];
  carts: Cart[] = [];
  reservations: Reservation[] = [];
  reservation: Reservation | undefined;
  fieldNames: string[] = [];
  reservationForm: FormGroup;

  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private userService: UserService,
    private cartService: CartService,
    private tableService: TableService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private zone: NgZone) {
    this.reservationForm = this.formBuilder.group({
      reservationId: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      reservationDate: ['', [Validators.required]],
      numberOfGuest: ['', [Validators.required]],
      tableId: ['', [Validators.required]],
      orderId: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // this.getTable();
    // this.getUser();
    // this.getCart();
    // this.getReservation();

  }
  getReservation(): void {
    this.reservationService.getReservations()
      .subscribe(reservation => this.reservations = reservation);
  }
  getTable(): void {
    this.tableService.getTables()
      .subscribe(table => this.tables = table);
  }

  getUser(): void {
    this.userService.getUsers()
      .subscribe(user => this.users = user);
  }

  getCart(): void {
    this.cartService.getCarts()
      .subscribe(cart => this.carts = cart);
  }

  getTableById(table: number): Observable<Table> {
    return this.tableService.getTable(table);
  }
  // getUserById(user: number): Observable<User> {
  //   return this.userService.getUsers(user);
  // }
  getCartById(cart: number): Observable<Cart> {
    return this.cartService.getCart(cart);
  }


  // openTableDetailModal(table: Table) {
  //   //this.getCategory();
  //   const modalRef = this.modalService.open(AdminTableDetailComponent, { size: 'lg' });
  //   modalRef.componentInstance.table = table;
  // }
}
