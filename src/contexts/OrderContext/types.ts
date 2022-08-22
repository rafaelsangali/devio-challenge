import { Dispatch, SetStateAction } from "react";

export interface IOrderContext {
  modalOpen: boolean
  setModalOpen: Dispatch<SetStateAction<boolean>>

}
export interface IOrderProvider {
  children: JSX.Element;
}
