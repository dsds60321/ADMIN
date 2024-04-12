import { Logo, MenuContents, NavInnerWrap, NavWrap } from '@layouts/Sidebar/styles.jsx';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NaviItem = ({ item, isSelected }) => {
  return (
    <li style={isSelected ? { display: 'block' } : undefined}>
      <ul>
        <li>
          <p>
            <Link to={item.url}>{item.title}</Link>
          </p>
        </li>
      </ul>
    </li>
  );
};

const Sidebar = ({ data }) => {
  const [selectItem, setSelectItem] = useState({});

  const onSelectItem = useCallback((path) => {
    setSelectItem((prevState) => ({
      ...prevState,
      [path]: !prevState[path],
    }));
  }, []);

  const isSelected = useCallback(
    (path) => {
      return !!selectItem[path];
    },
    [selectItem],
  );

  console.log(selectItem);

  return (
    <NavWrap>
      <Logo>
        <img src="/src/assets/images/logo.png" alt="" />
      </Logo>
      <NavInnerWrap>
        <MenuContents>
          {data.map((navItem, index) => (
            <ul key={`${navItem.title} ${index}`}>
              <li onClick={() => onSelectItem(navItem.title)}>
                <i>
                  <FontAwesomeIcon icon={navItem.icon} />
                </i>
                <p>{navItem.title}</p>
              </li>
              {navItem.item &&
                navItem.item.map((innerItem) => {
                  if (true) {
                    return <NaviItem key={innerItem.title} item={innerItem} isSelected={!!selectItem[navItem.title]} />;
                  } else {
                    return <div>h2</div>;
                  }
                })}
            </ul>
          ))}
        </MenuContents>
      </NavInnerWrap>
    </NavWrap>
  );
};

export default Sidebar;
