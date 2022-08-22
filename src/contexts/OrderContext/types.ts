import { Dispatch, SetStateAction } from "react";

export interface IOrderContext {
  modalOpen: boolean
  setModalOpen: Dispatch<SetStateAction<boolean>>
  product: any
  setProduct: any
  price: number
  setPrice: Dispatch<SetStateAction<number>>
  counter: number,
  setCounter: Dispatch<SetStateAction<number>>
}
export interface IProduct {
  title: string
  description:string
  price: number
}

export interface IOrderProvider {
  children: JSX.Element;
}
