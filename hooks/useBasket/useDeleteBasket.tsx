import { useMutation } from "@tanstack/react-query"

export const basketDelete = async (id) => {
  console.log('id', id);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/basket/${id}`, {
    method: 'DELETE',
  });

  return res.json();
};

export const useBasketDelete = (id) => {
  return useMutation(['basket', { id }], basketDelete)
}


export default useBasketDelete;