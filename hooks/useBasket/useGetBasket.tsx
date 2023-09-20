import { useQuery } from "@tanstack/react-query"

export const basketGet = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/basket`);

  return res.json();
};

const useGetBasket = () => {
  return useQuery(['basket'], basketGet );
}

export default useGetBasket;