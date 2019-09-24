

export interface IOrder {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  selfRemoval: boolean;
  address: string;
}

export class OrderModel implements IOrder {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public selfRemoval: boolean = false,
    public address: string
  ) {
  }
}
