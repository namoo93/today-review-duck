"use client";

import styles from "./terms.module.css";

export default function TermsPage() {
  return (
    <section className={styles.termsPage}>
      <h1>서비스 이용약관</h1>

      <h2>제1조 (목적)</h2>
      <p>
        본 약관은 리뷰 서비스 이용에 관한 기본적인 사항을 규정함을 목적으로
        합니다.
      </p>

      <h2>제2조 (리뷰 작성 원칙)</h2>
      <ul>
        <li>&bull; 실제 경험에 근거한 솔직하고 객관적인 리뷰 작성</li>
        <li>&bull; 타인의 권리를 침해하거나 명예를 훼손하는 내용 금지</li>
        <li>&bull; 허위 정보나 과장된 내용 작성 금지</li>
        <li>&bull; 개인정보 보호를 위한 민감한 정보 노출 금지</li>
      </ul>

      <h2>제3조 (리뷰 관리)</h2>
      <ul>
        <li>&bull; 부적절한 리뷰는 사전 통보 없이 삭제될 수 있음</li>
        <li>&bull; 악의적인 리뷰 작성 시 서비스 이용이 제한될 수 있음</li>
      </ul>

      <h2>제4조 (저작권)</h2>
      <p>
        리뷰 작성자는 작성한 리뷰에 대한 저작권을 보유하며, 서비스 제공자는
        서비스 내에서 해당 리뷰를 사용할 수 있는 권한을 가집니다.
      </p>

      <h2>제5조 (개인정보보호)</h2>
      <p>
        리뷰 작성 시 수집되는 개인정보는 개인정보처리방침에 따라 안전하게
        보호됩니다.
      </p>

      <h2>제6조 (약관 변경)</h2>
      <p>
        본 약관의 변경 사항이 있을 경우 시행 7일 전부터 공지사항을 통해
        안내합니다.
      </p>
    </section>
  );
}
