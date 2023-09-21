import { useQuery, useMutation } from "@tanstack/react-query"

const addonsGet = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/addons`);

  return res.json();
};

export const useAddons = (queryOptions?: any) => {
  return useQuery(['addons'], addonsGet, queryOptions);
}



export default useAddons;