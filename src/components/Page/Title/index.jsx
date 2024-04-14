import { Location, Title } from '@components/Page/Title/styles.jsx';

const PageTitle = ({ title, location }) => {
  return (
    <>
      <Title>{title}</Title>
      <Location>{Array.isArray(location) ? location.slice(0, 8).join(' > ') : location}</Location>
    </>
  );
};

export default PageTitle;
