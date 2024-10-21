import styles from './MainScreen.module.css';
import BlockContainer from '@/components/BlockContainer/BlockContainer';

export default function MainScreen() {
  return (
    <div className={styles.hero}>
      <BlockContainer>
        <h1 className={styles.title}>
          Новые и оригинальные электронные компоненты от ведущих мировых
          производителей
        </h1>
        <p className={styles.description}>
          Поставка компонентов с гарантией качества и датой производства не
          старше 3 лет.{' '}
        </p>
        <a href="#contact" className={styles.button}>
          Связаться с нами
        </a>
      </BlockContainer>
    </div>
  );
}
