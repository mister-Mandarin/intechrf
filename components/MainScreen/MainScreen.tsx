import styles from './MainScreen.module.css';
import BlockContainer from '@/components/BlockContainer/BlockContainer';
import Button from '@/components/Button/Button';

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
          старше 3 лет.
        </p>
        <Button icon={'search'}>Подробнее</Button>
      </BlockContainer>
    </div>
  );
}
