import loadable from '@loadable/component';

const Card = () => {
  const PageTitle = loadable(() => import('@components/Page/Title/index.jsx'));

  return <PageTitle title="리스트_샘플" location={['홈', '리스트', '리스트_샘플']}></PageTitle>;
};

export default Card;
