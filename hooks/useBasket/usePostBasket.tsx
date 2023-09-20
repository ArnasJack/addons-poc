import { useMutation } from "@tanstack/react-query"

export const postBasket = async (body) => {
  console.log('body', body);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/basket`, {
    method: 'POST',
    body,
  });

  return res.json();
};

export const usePostBasket = (id) => {
  return useMutation(['basket', { id }], postBasket)
}

export default usePostBasket;