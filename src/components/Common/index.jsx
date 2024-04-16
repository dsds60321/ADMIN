import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ViewGroup = ({ type, data }) => {
  return (
    <div>
      <div>{data.title}</div>
      <div>
        {type === 'input' && (
          <>
            <input type="text" placeholder={data.placeholder} />
            <button>
              <FontAwesomeIcon icon="fas fa-plus" />
            </button>
          </>
        )}

        {type === 'option' && (
          <div>
            <input type="text" />
            <ul>
              <li>선택</li>
              <li>
                <ul>
                  {data.list.map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
