import { useState } from "react";
import styles from "../../_css/mypage.module.css";
import List from "@/app/_components/list/postList/List";
import DataNone from "@/app/_components/atoms/DataNone";

//TODO: api
export const dummyListData = [
  {
    isManager: false,
    alt: "",
    src: "",
    title: "제목입니다 1",
    user: "user1 | 2024.05.01",
    value: "평가: 좋음",
    contents: "내용입니다 1. 아주 긴 설명이 여기에 들어갑니다.",
  },
  {
    isManager: false,
    alt: "",
    src: "",
    title:
      "제목입니다 2 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 ",
    user: "user2 | 2024.05.02",
    value: "평가: 보통",
    contents:
      "내용입니다 2. 두 번째 더미 텍스트입니다.1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 ",
  },
  {
    isManager: false,
    alt: "",
    src: "",
    title: "제목입니다 3",
    user: "user3 | 2024.05.03",
    value: "평가: 나쁨",
    contents: "내용입니다 3. 테스트용 텍스트입니다.",
  },
  {
    isManager: false,
    alt: "",
    src: "",
    title: "제목입니다 4",
    user: "user4 | 2024.05.04",
    value: "평가: 우수",
    contents: "내용입니다 4. 관리자 전용 게시글입니다.",
  },
  {
    isManager: false,
    alt: "",
    src: "",
    title: "제목입니다 5",
    user: "user5 | 2024.05.05",
    value: "평가: 좋음",
    contents: "내용입니다 5. 일반 사용자 게시글입니다.",
  },
  {
    isManager: false,
    alt: "",
    src: "",
    title: "제목입니다 6",
    user: "user6 | 2024.05.06",
    value: "평가: 매우 좋음",
    contents: "내용입니다 6. 매우 유용한 정보가 담겨있습니다.",
  },
  {
    isManager: false,
    alt: "",
    src: "",
    title: "제목입니다 7",
    user: "user7 | 2024.05.07",
    value: "평가: 평균",
    contents: "내용입니다 7. 그럭저럭 괜찮은 글입니다.",
  },
  {
    isManager: false,
    alt: "",
    src: "",
    title: "제목입니다 8",
    user: "user8 | 2024.05.08",
    value: "평가: 보통",
    contents: "내용입니다 8. 여덟 번째 더미입니다.",
  },
  {
    isManager: false,
    alt: "",
    src: "",
    title: "제목입니다 9",
    user: "user9 | 2024.05.09",
    value: "평가: 좋음",
    contents: "내용입니다 9. 관리자 공지사항입니다.",
  },
  {
    isManager: false,
    alt: "",
    src: "",
    title: "제목입니다 10",
    user: "user10 | 2024.05.10",
    value: "평가: 괜찮음",
    contents: "내용입니다 10. 마지막 더미 항목입니다.",
  },
];
export type ListTypes = {
  isManager: boolean;
  alt: string;
  src: string;
  title: string;
  user: string;
  value: string;
  contents: string;
};

export default function WrittenReviews() {
  const [reviewList, setReviewList] = useState<ListTypes[]>(dummyListData);

  return (
    <div className={styles.list_contents}>
      {reviewList.length > 0 ? (
        <ul className={styles.list_wrap}>
          {reviewList.map((review, index) => (
            <List
              key={index}
              isManager={review.isManager}
              alt={review.alt}
              src={review.src}
              title={review.title}
              user={review.user}
              value={review.value}
              contents={review.contents}
            />
          ))}
        </ul>
      ) : (
        <DataNone target={'작성한 리뷰'} />
      )}
    </div>
  );
}
