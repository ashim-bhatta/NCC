import ConverterCard from '../components/organisms/ConverterCard/ConverterCard';
import withDefaultTemplate from '../components/templates/DefaultTemplate/DefaultTemplate';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={`section ${styles.home}`}>
      <ConverterCard />
    </div>
  );
};

export default withDefaultTemplate(Home);
