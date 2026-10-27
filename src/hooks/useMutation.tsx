
import type { LoginInput, RegisterInput } from "../types/user";
import { login, register } from "../api/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { BorrowRequestInput } from "../types/borrowRequest";
import { approveBorrowRequest, cancelBorrowRequest, createBorrowRequest, markBorrowReturned, rejectBorrowRequest } from "../api/borrowRequest";
import type { OfferInput } from "../types/offer";
import { acceptOffer, cancelOffer, createOffer, rejectOffer } from "../api/offer";
import type { ProductInput } from "../types/product";
import { addProducts, delProducts, editProducts } from "../api/products";
import { addWantedItem, editWantedItem, getMyWantedItems } from "../api/wantedItem";
import type { WantedItemInput } from "../types/wantedItem";
import { blockUser, unblockUser } from "../api/admin";
import { addCatergories, delCatergories, editCatergories } from "../api/category";
import type { Category, CategoryInput } from "../types/category";



export const actionByStatus = {
    APPROVED: approveBorrowRequest,
    REJECTED: rejectBorrowRequest,
    CANCELLED: cancelBorrowRequest,
    RETURNED: markBorrowReturned,
};
export const offerActionByStatus = {
  ACCEPTED: acceptOffer,
  REJECTED: rejectOffer,
  CANCELLED: cancelOffer,
};

export const loginUseMutation = () =>
  useMutation({
    mutationFn: (data: LoginInput) => login(data),
  });

export const registerUseMutation = () =>
  useMutation({
    mutationFn: (data: RegisterInput) => register(data),
  });

export const BorrowRequestUseMutation = (productId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: BorrowRequestInput) => createBorrowRequest(productId, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getMyBorrowRequests"] }),
  });
};

export const offerUseMutation = (wantedItemsId: number) =>{
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: OfferInput) => createOffer(wantedItemsId, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getMyOffers"] }),
  })};

export const updateBorrowStatusUseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: number; status: keyof typeof actionByStatus }) =>
      actionByStatus[status](id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getMyBorrowRequests"] }),
  });
};

export const PouductFormUseMutation = (type:string,id:number) => {
  return useMutation({
    mutationFn: (data:ProductInput) =>
      {if(type=="add")
        return addProducts(data)
        return editProducts(id,data)
      }
  
  });
};
export const WantedItemFormUseMutation = (type: string, id: number) => {
  return useMutation({
    mutationFn: (data: WantedItemInput) => {
      if (type == "add")
        return addWantedItem(data)
      return editWantedItem(id, data)
    }
  });
};

export const updateOfferStatusUseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: number; status: keyof typeof offerActionByStatus }) =>
      offerActionByStatus[status](id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["getMyOffers"] }),
  });
};

export const GetMyWantedItemsUseQuery = (userId: number | undefined) =>
  useQuery({
    queryKey: ["getMyWantedItems", userId],
    queryFn: getMyWantedItems,
  });
  export const deleteProductUseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => delProducts(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getMyProducts"] });
      queryClient.invalidateQueries({ queryKey: ["allProducts"] });
    },
  });
};

  export const BlockUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => blockUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUsers"] });
    },
  });
};

  export const UnBlockUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => unblockUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUsers"] });
    },
  });
};

  export const AddCatergoriesUseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CategoryInput) => addCatergories(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};




  export const EditCatergoriesUseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, name }: { id: number; name: string }) => editCatergories({name},id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};


  export const DelCatergoriesUseMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id:number) => delCatergories(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};