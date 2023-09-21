import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import AddonsComp from '../components/addons';
import Baket from '../components/basket';

import useGetAddons from '../hooks/useAddons/useGetAddons';
import useGetBasket from '../hooks/useBasket/useGetBasket';
import useDeleteBasket from '../hooks/useBasket/useDeleteBasket';
import usePostBasket from '../hooks/useBasket/usePostBasket';

export default function Addons() {
  const { query } = useRouter();
  const queryClient = useQueryClient();
  const { data: addonsList = [] } = useGetAddons();
  const { data: basketList = [] } = useGetBasket();

  const { mutate: addItem, isLoading: isAdding } = usePostBasket({
    onSuccess: (_, id) => {
      queryClient.setQueryData(['basket'], [...basketList, { id }] );
    }
  });

  const { mutate: removeItem, isLoading: isDeleting } = useDeleteBasket({
    onSuccess: (_, itemId) => {
      queryClient.setQueryData(['basket'], (data) => data?.filter(({ id }) => id !== itemId));
    }
  });

  return (
    <div>
        <Baket basketList={basketList} />
        <h2>Addons</h2>
        <AddonsComp addonsList={addonsList} basketList={basketList} removeItem={removeItem} addItem={addItem} isAdding={isAdding} isDeleting={isDeleting} />
    </div>
  )
}
