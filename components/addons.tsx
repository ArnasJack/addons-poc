import styled from 'styled-components'
import Link from 'next/link'

import useBasketDelete from '../hooks/useBasket/useDeleteBasket'
import usePostBasket from '../hooks/useBasket/usePostBasket'

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 800px;
  margin-top: 3rem;
`

const Card = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;

  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`

const CardComp = ({ item, isInBasket }) => {
  const { title, description, id } = item;
  const { mutate: deleteItem } = useBasketDelete(item.id, );
  const { mutate: addItem } = usePostBasket(item.id);


  const handleUpdate = () => {
    return isInBasket ? deleteItem(id) : addItem(item);
  }

  return (
    <Card>
      <h3>{title}: {id}</h3>
      <p>{description}</p>
      <button type="button" onClick={handleUpdate}>{isInBasket ? 'Remove' : 'Add'}</button>
    </Card>
  )
}

export default function Addons({ addonsList, basketList}) {
  const isItemInBasket = (itemId) => basketList.some(({ id }) => id === itemId);

  return (
    <FlexContainer>
      {addonsList.map((item) => (
        <CardComp key={item.id} item={item} isInBasket={isItemInBasket(item.id)} />
      ))}
    </FlexContainer>
  )
}
