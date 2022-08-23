import { Dispatch, SetStateAction } from "react";

export interface IOrderContext {
  modalOpen: boolean
  setModalOpen: Dispatch<SetStateAction<boolean>>
  product: any
  price: number
  setPrice: Dispatch<SetStateAction<number>>
  counter: number,
  setCounter: Dispatch<SetStateAction<number>>,
  observation:string,
  setObservation: Dispatch<SetStateAction<string>>,
  order: IOrder,
  setOrder: Dispatch<SetStateAction<IOrder>>,
  closeAndResetModal: () => void,
  addOrder: () => void,
  productInfo: (infoProduct: IProduct) => void
}

export interface IOrder {
  quantity: number,
  product: string,
  observation: string,
  price: number,
}

export interface IProduct {
  title: string
  description:string
  price: number
}

export interface IOrderProvider {
  children: JSX.Element;
}
