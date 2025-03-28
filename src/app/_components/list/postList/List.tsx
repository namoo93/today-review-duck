import { Icon } from "../../atoms";
import styles from "./list.module.css";
import ImgDefault from "@/../public/images/img-default-post.svg";
import ImgManager from "@/../public/images/img-manager.svg";

interface Props {
  width?: string;
  onClkickList?: () => void;
  alt?: string;
  src?: string;
  title?: string;
  user?: string;
  value?: string;
  contents?: string;
  isManager?: boolean;
}

export default function List({
  width = "100%",
  alt = "게시글 이미지",
  src = "",
  title,
  user,
  value,
  contents,
  isManager,
  onClkickList,
}: Props) {
  return (
    <li className={styles.list_box} style={{ width }}>
      <button
        type="button"
        className={styles.list_button}
        onClick={onClkickList}
      >
        <span className={styles.list_img}>
          {isManager ? (
            <Icon
              alt={alt}
              src={src ? src : ImgManager}
              height={300}
              width={300}
            />
          ) : (
            <Icon
              alt={alt}
              src={src ? src : ImgDefault}
              height={300}
              width={300}
            />
          )}
        </span>

        <span className={styles.list_info}>
          <span className={`${styles.list_title} elipsis_1_lines`}>
            {title}
          </span>
          <span className={styles.list_user}>{user}</span>
          {!isManager && <span className={styles.list_value}>{value}</span>}
          <span className={`elipsis_5_lines ${styles.list_contents}`}>
            {contents}
          </span>
        </span>
      </button>
    </li>
  );
}
