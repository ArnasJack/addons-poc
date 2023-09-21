import { useMutation } from "@tanstack/react-query"

export const basketDelete = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/basket/${id}`, {
    method: 'DELETE',
  });

  return res.json();
};

export const useBasketDelete = (queryOptions) => {
  return useMutation(basketDelete, queryOptions)
}


export default useBasketDelete;