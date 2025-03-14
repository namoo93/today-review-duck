"use client";

import { useRecoilState } from "recoil";
import { onSearchPageState, themeState } from "../_recoil";
import Banner from "./_components/Banner";

export default function Main() {
  const [theme] = useRecoilState(themeState);
  const [onSearchPage] = useRecoilState(onSearchPageState);
  // console.log("theme -----", theme);

  return (
    <>
      <Banner />
      Main Page - Theme: {theme}
      <br />
      {onSearchPage ? <>-----search list</> : <>-----main list</>}
    </>
  );
}
