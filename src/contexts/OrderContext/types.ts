import { Dispatch, SetStateAction } from "react";

export interface IOrderContext {
  modalOpen: boolean
  setModalOpen: Dispatch<SetStateAction<boolean>>
  order: IOrder,
  setOrder: Dispatch<SetStateAction<IOrder>>,
  saveProductInfo: (title: string, price: number) => void,
  insertData: () => Promise<number>,
  handleInput: (e: any) => void
}

export interface IOrder {
  quantity: number,
  product: string,
  observation: string,
  price: number,
  clientName: string,
}

export interface IOrderProvider {
  children: JSX.Element;
}
