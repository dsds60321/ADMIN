import PageTitle from '@components/page/Title/index.jsx';
import Search from '@components/page/Search/index.jsx';
import PageWrap from '@components/page/PageWrap/index.jsx';

// 테이블에 들어갈 리스트
const Contents = () => {
  return <div>contents</div>;
};
const Card = ({ data }) => {
  return (
    <>
      <PageTitle title="거래" location={['홈', '거래', '카드']} />
      <Search data={data} />
      <PageWrap>{Contents()}</PageWrap>
    </>
  );
};

export default Card;
