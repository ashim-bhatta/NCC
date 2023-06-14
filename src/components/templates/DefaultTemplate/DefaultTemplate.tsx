import { ComponentType } from 'react';
import Navbar from '../../organisms/Navbar/Navbar';
import Footer from '../../organisms/Footer/Footer';
import styles from './DefaultTemplate.module.css';

const withDefaultTemplate = (WrappedComponent: ComponentType) => {
  return () => (
    <div className={styles.defaultTemplate}>
      <Navbar />
      <div className={styles.content}>
        <WrappedComponent />
      </div>
      <Footer />
    </div>
  );
};

export default withDefaultTemplate;
