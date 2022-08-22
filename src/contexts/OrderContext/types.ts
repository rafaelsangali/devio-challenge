import { Dispatch, SetStateAction } from "react";

export interface IOrderContext {
  modalOpen: boolean
  setModalOpen: Dispatch<SetStateAction<boolean>>
  product: any
  setProduct: any

}
export interface IProduct {
  title: string
  description:string
  price: number
}

export interface IOrderProvider {
  children: JSX.Element;
}
