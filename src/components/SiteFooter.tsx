import { ContentWrapper } from '../components/ContentWrapper';
import styles from '../styles/components/SiteFooter.module.scss';

export const SiteFooter = () => {
  return (
    <ContentWrapper>
      <div className={styles.container}>
        <a href="https://github.com/syou6" className={styles.link}>
          Follow the project on GitHub
        </a>
      </div>
    </ContentWrapper>
  );
};
