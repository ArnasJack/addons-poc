import { Container, Main, Title, Description } from '../components/sharedstyles'

import AddonsComp from '../components/addons';
import Baket from '../components/basket';

import useGetAddons from '../hooks/useAddons/useGetAddons';
import useGetBasket from '../hooks/useBasket/useGetBasket';

export default function Addons() {
  const { data: addonsList = [] } = useGetAddons();
  const { data: basketList = [] } = useGetBasket();

  return (
    <Container>
      <Main>
        <Baket basketList={basketList} />
        <Title>Addons</Title>
        <AddonsComp addonsList={addonsList} basketList={basketList} />
      </Main>
    </Container>
  )
}
