import styles from './some-list.module.css';

/* eslint-disable-next-line */
export interface SomeListProps {}

export function SomeList(props: SomeListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SomeList!!</h1>
    </div>
  );
}

export default SomeList;
