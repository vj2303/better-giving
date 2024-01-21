import {Link} from "react-router-dom";
import React from "react";
import "../styles/MenuCategories.css"
 
const MenuCategories = () => {
  return (
    <div className={"categoryList"}>
      <Link
        href="/blog?cat=style"
        className={`${"categoryItem"} ${"style"}`}
      >
        Style
      </Link>
      <Link href="/blog" className={`${"categoryItem"} ${"fashion"}`}>
        Fashion
      </Link>
      <Link href="/blog" className={`${"categoryItem"} ${"food"}`}>
        Food
      </Link>
      <Link href="/blog" className={`${"categoryItem"} ${"travel"}`}>
        Travel
      </Link>
      <Link href="/blog" className={`${"categoryItem"} ${"culture"}`}>
        Culture
      </Link>
      <Link href="/blog" className={`${"categoryItem"} ${"coding"}`}>
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
