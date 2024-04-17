import Summary from '@components/page/Table/Summary/index.jsx';
import Action from '@components/page/Table/Action/index.jsx';
import Paging from '@components/page/Table/Paging/index.jsx';
import { PageContainer } from '@components/page/PageWrap/styles.jsx';

const PageWrap = ({ children }) => {
  return (
    <>
      <PageContainer>
        <Summary />
        <Action />
        {children}
        <Paging />
      </PageContainer>
    </>
  );
};

export default PageWrap;
