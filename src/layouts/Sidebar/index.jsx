import { Logo, NavContents, NavInnerWrap, NavWrap, ThreeDepth } from '@layouts/Sidebar/styles.jsx';
import { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';

const NaviItem = ({ item, isSelected }) => {
  const [selectItem, setSelectItem] = useState({});

  const onSelectItem = useCallback((path) => {
    setSelectItem((prevState) => ({
      ...prevState,
      [path]: !prevState[path],
    }));
  }, []);

  const isThreeDepth = item.list?.length > 0;

  if (isThreeDepth) {
    return (
      <>
        <li onClick={() => onSelectItem(item.title)} style={isSelected ? { display: 'flex' } : undefined}>
          <i>
            <FontAwesomeIcon icon={item.icon} />
          </i>
          <p>{item.title}</p>
        </li>
        {item.list.map((innerItem, index) => (
          <ThreeDepth
            key={`${innerItem.title} ${index}`}
            style={selectItem[item.title] ? { display: 'block' } : undefined}
          >
            <p>
              <Link to={innerItem.url}>{innerItem.title}</Link>
            </p>
          </ThreeDepth>
        ))}
      </>
    );
  } else {
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
  }
};

const Sidebar = ({ data }) => {
  const navigate = useNavigate();
  const [selectItem, setSelectItem] = useState({});

  const onSelectItem = useCallback((path) => {
    setSelectItem((prevState) => ({
      ...prevState,
      [path]: !prevState[path],
    }));
  }, []);

  const onHome = useCallback(() => {
    return navigate('/');
  }, []);

  return (
    <NavWrap>
      <Logo onClick={onHome}>
        <img src="/src/assets/images/logo.png" alt="" />
      </Logo>
      <NavInnerWrap>
        <NavContents>
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
                  return (
                    <NaviItem
                      key={innerItem.title}
                      item={innerItem}
                      selectItem={selectItem}
                      isSelected={!!selectItem[navItem.title]}
                    />
                  );
                })}
            </ul>
          ))}
        </NavContents>
      </NavInnerWrap>
    </NavWrap>
  );
};

export default Sidebar;
