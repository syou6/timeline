import styles from '../styles/components/HomeHero.module.scss';
import { TwitterIcon } from './TwitterIcon';

export const HomeHero = () => {
  return (
    <div className={styles.container}>
      <img src="/icon.png" alt="Hello" width={58} height={58} />
      <h1 className={styles.title}>Hi, I'm LofiBoy</h1>
      <p className={styles.description}>
        Lo-fi beatmaker and indie developer sharing chill tunes and side projects.
        Follow{' '}
        <a href="https://x.com/K8292288065827">
          @K8292288065827
          <TwitterIcon width={18} height={18} />
        </a>{' '}
        for daily updates.
      </p>
    </div>
  );
};
