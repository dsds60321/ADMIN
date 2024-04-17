import { Container, Tab, Tabs } from '@components/page/Table/Summary/styles.jsx';

const TabItem = ({ text, cnt, sum }) => {
  return (
    <Tab>
      <input type="hidden" />
      <div>
        <p>{text}</p>
        <p>({cnt}건)</p>
      </div>
      <p>
        <span>합계</span>:<span>{sum}</span>
      </p>
    </Tab>
  );
};
const Summary = (extra) => {
  return (
    <Container>
      <Tabs>
        <TabItem text="전체" cnt={extra.allCnt || 0} sum={extra.allAmt || 0} />
        <TabItem text="승인" cnt={extra.payCnt || 0} sum={extra.payAmt || 0} />
        <TabItem text="취소" cnt={extra.voidCnt || 0} sum={extra.rfdAmt || 0} />
      </Tabs>
    </Container>
  );
};

export default Summary;
