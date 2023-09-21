import { useMutation } from "@tanstack/react-query"

export const postBasket = async (id) => {
  console.log('add id', id);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/basket`, {
    method: 'POST',
    body: JSON.stringify({ id })
  });

  return res.json();
};

export const usePostBasket = (queryOptions) => {
  return useMutation(postBasket, queryOptions)
}

export default usePostBasket;