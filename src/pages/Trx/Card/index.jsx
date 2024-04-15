import PageTitle from '@components/Page/Title/index.jsx';
import Search from '@components/Page/Search/index.jsx';
import { TRX_CARD } from '@/data/seachFilters.js';

const Card = () => {
  return (
    <>
      <PageTitle title="거래" location={['홈', '거래', '카드']} />
      <div>
        <Search data={TRX_CARD} />
      </div>
    </>
  );
};

export default Card;
