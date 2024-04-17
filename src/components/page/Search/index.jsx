import {
  Container,
  DateDiv,
  DatePicker,
  DateSelect,
  DetailButton,
  DetailSectionWrap,
  MainOption,
  MainWrap,
  SearchDiv,
  SearchInput,
  SearchWrap,
} from '@components/page/Search/styles.jsx';

import '@/assets/css/search.css';
import React, { useCallback, useMemo, useState } from 'react';
import { useToggle } from '@hooks/useHooks.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommonButton } from '@components/common/styles.jsx';
import { ViewGroup } from '@components/common/index.jsx';

const getSearchOption = (options, number = 3) => {
  const groupedOptions = [];
  for (let i = 0; i < options.length; i += number) {
    let sliceOption = options.slice(i, i + number);
    groupedOptions.push(sliceOption);
  }
  return groupedOptions;
};

// TODO : react 3개가 아니면 div로 미는 코드 추가
/**
 * 검색 필터
 * @param data
 * @returns {unknown[]}
 * @constructor
 */
const SearchFilter = (data) => {
  const options = getSearchOption(data);
  return options.map((optionGroup, index) => (
    <React.Fragment key={`optionGroup_${index}`}>
      <Container>
        {optionGroup.map((option) => (
          <ViewGroup key={option.title} type={option.type} data={option} />
        ))}
      </Container>
    </React.Fragment>
  ));
};

export const Search = ({ data }) => {
  // 기본 data 함수
  const { defaultDay, days, placeholder, searchOptions } = useMemo(() => {
    const defaultDay = data.days.filter((day) => day.default)[0].title;
    const { days, placeholder, searchOptions } = data;
    return { defaultDay, days, placeholder, searchOptions };
  }, [data]);

  const [toggleDetailSearch, _, onToggleDetailSearch] = useToggle(true);
  const [toggleDate, setToggleDate] = useToggle(false);
  const [selectDay, setSelectDay] = useState(defaultDay);

  const onSelectDay = useCallback((val) => {
    setSelectDay(val);
    setToggleDate(false);
  }, []);

  const onToggleDate = useCallback(() => {
    setToggleDate((prevState) => !prevState);
  }, []);

  return (
    <SearchWrap>
      <div>
        <MainWrap toggle={toggleDetailSearch}>
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
                <i>
                  <FontAwesomeIcon icon="fas fa-caret-down" />
                </i>
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
          <DetailButton onClick={onToggleDetailSearch}>
            <i>
              <FontAwesomeIcon icon="fas fa-sort" />
            </i>
            <p>상세 검색</p>
          </DetailButton>
        </MainWrap>
        <DetailSectionWrap toggle={toggleDetailSearch}>
          <div>
            <div>{SearchFilter(searchOptions)}</div>
          </div>
        </DetailSectionWrap>
      </div>
    </SearchWrap>
  );
};

export default Search;
