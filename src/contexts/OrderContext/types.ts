import { Dispatch, SetStateAction } from "react";

export interface IOrderContext {
  modalOpen: boolean
  setModalOpen: Dispatch<SetStateAction<boolean>>
  order: IOrder,
  setOrder: Dispatch<SetStateAction<IOrder>>,
  saveProductInfo: (title: string, price: number) => void,
  code: number,
  setCode: Dispatch<SetStateAction<number>>,
  insertData: () => Promise<number>,
  handleInput: (e: any) => void
}

export interface IOrder {
  quantity: number,
  product: string,
  observation: string,
  price: number,
  clientName: string,
  code: number,
}

export interface IOrderProvider {
  children: JSX.Element;
}
