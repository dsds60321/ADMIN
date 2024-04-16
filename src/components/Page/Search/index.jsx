import {
  DateDiv,
  DatePicker,
  DateSelect,
  DetailButton,
  DetailSectionWrap,
  Down,
  MainOption,
  SearchDiv,
  SearchInput,
  SearchWrap,
  TabWrap,
} from '@components/Page/Search/styles.jsx';

import '@/assets/css/search.css';
import { useCallback, useMemo, useState } from 'react';
import { useToggle } from '@hooks/useHooks.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommonButton, Container } from '@components/Common/styles.jsx';

export const Search = ({ data }) => {
  // 기본 data 함수
  const { defaultDay, days, placeholder } = useMemo(() => {
    const defaultDay = data.days.filter((day) => day.default)[0].title;
    const { days, placeholder } = data;
    return { defaultDay, days, placeholder };
  }, [data]);

  const [selectDay, setSelectDay] = useState(defaultDay);
  const [toggleDate, setToggleDate] = useToggle(false);

  const onToggleDate = useCallback(() => {
    setToggleDate((prevState) => !prevState);
  }, []);

  const onSelectDay = useCallback((val) => {
    setSelectDay(val);
    setToggleDate(false);
  }, []);

  return (
    <SearchWrap>
      <div>
        <TabWrap>
          <MainOption>
            <DateDiv>
              <DateSelect>
                <ul>
                  <input type="hidden" />
                  <li className="val" onClick={onToggleDate}>
                    {selectDay}
                  </li>
                  {toggleDate && (
                    <li>
                      <ul>
                        {days.map((day) => (
                          <li
                            key={day.title}
                            onClick={() => {
                              onSelectDay(day.title);
                            }}
                          >
                            {day.title}
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>
              </DateSelect>
            </DateDiv>
            <DateDiv>
              <DatePicker>
                <Down>
                  <FontAwesomeIcon icon="fas fa-caret-down" />
                </Down>
              </DatePicker>
            </DateDiv>
            <SearchDiv>
              <i>
                <FontAwesomeIcon icon="fas fa-search" />
              </i>
              <SearchInput placeholder={placeholder} />
              <CommonButton theme="gray">검색</CommonButton>
            </SearchDiv>
          </MainOption>
          <DetailButton>
            <i>
              <FontAwesomeIcon icon="fas fa-sort" />
            </i>
            <p>상세 검색</p>
          </DetailButton>
        </TabWrap>
        <DetailSectionWrap>
          <div>
            <div>
              <Container col="three">
                <div></div>
                <div></div>
                <div></div>
              </Container>
            </div>
          </div>
        </DetailSectionWrap>
      </div>
    </SearchWrap>
  );
};

export default Search;
