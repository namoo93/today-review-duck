import styles from "./_css/toggle.module.css";

type Props = { text: string };
export default function Toggle({}: Props) {
  return <span className={styles.toggle}></span>;
}
