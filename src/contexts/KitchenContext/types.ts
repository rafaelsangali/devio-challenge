import { Dispatch, SetStateAction } from "react";

export interface IKitchenContext {
  orderListDone: IOrderListDone[] | any
  setOrderListDone: Dispatch<SetStateAction<any>>
  deleteOrder: (id: number) => void
}

export interface IOrderListDone {
  id: number
  clientName: string
}

export interface IKitchenProvider {
  children: JSX.Element;
}
