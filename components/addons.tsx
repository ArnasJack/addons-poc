import styled from 'styled-components'
import Link from 'next/link'

import useBasketDelete from '../hooks/useBasket/useDeleteBasket'
import usePostBasket from '../hooks/useBasket/usePostBasket'

const FlexContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const Card = styled.div`
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  grid-column: 1/-1;

  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`

const StyledLink = ({ href, name }) => (
  <Link href={href} passHref legacyBehavior>
    <StyledA>{name}</StyledA>
  </Link>
)

export default function Addons({ addonsList, basketList, addItem, removeItem, isDeleting, isAdding }) {
  const isItemInBasket = (itemId) => {
    if(basketList.length === 0) {
      return false;
    }

    return basketList.some((item) => item?.id === itemId);
  }

  const handleUpdate = (itemId) => {
    return isItemInBasket(itemId) ? removeItem(itemId) : addItem(itemId);
  }

  return (
    <FlexContainer>
      {addonsList.map(({ title, description, id }) => {
        return (
          <Card key={title}>
            <h3>{title}: {id}</h3>
            <p>{description}</p>
            <button type="button" disabled={isAdding || isDeleting} onClick={() => handleUpdate(id)}>{isItemInBasket(id) ? 'Remove' : 'Add'}</button>
          </Card>
        )
      })}
    </FlexContainer>
  )
}
