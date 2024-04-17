import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Label, Value, ViewGroupWrap } from '@components/common/styles.jsx';
import { useToggle } from '@hooks/useHooks.js';

/**
 *
 * @param type input, option
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
export const ViewGroup = ({ type, data }) => {
  const [toggle, _, onToggle] = useToggle(false);

  return (
    <ViewGroupWrap>
      <Label>{data?.title}</Label>
      <Value toggle={toggle}>
        {type === 'input' && (
          <>
            <input type="text" placeholder={data?.placeholder} />
            <button>
              <FontAwesomeIcon icon="fas fa-plus" />
            </button>
          </>
        )}

        {type === 'option' && (
          <div>
            <input type="text" />
            <ul onClick={onToggle}>
              <li>선택</li>
              <li>
                <ul>
                  {data?.list.map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        )}
      </Value>
    </ViewGroupWrap>
  );
};
