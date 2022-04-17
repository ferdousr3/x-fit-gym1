import React from "react";
import { Link} from "react-router-dom";

const FooterLink = ({linkTitle,path,linkTitle1,path1, linkTitle2,path2 ,linkTitle3,path3, linkTitle4,path4,linkTitle5,path5}) => {

  return (
    <div>
      <ul>
        <li className="mb-3">
          <Link
            className=" hover:text-mains  text-four text-sm font-light"
            to={`/${path}`}
          >
            {linkTitle}
          </Link>
        </li>
        <li className="mb-3">
          <Link
            className="hover:text-mains text-four text-sm font-light"
            to={`/${path1}`}
          >
            {linkTitle1}
          </Link>
        </li>
        <li className="mb-3">
          <Link
            className="hover:text-mains text-four text-sm font-light"
            to={`/${path2}`}
          >
            {linkTitle2}
          </Link>
        </li>
        <li className="mb-3">
          <Link
            className="hover:text-mains text-four text-sm font-light"
            to={`/${path3}`}
          >
            {linkTitle3}
          </Link>
        </li>
        <li className="mb-3">
          <Link
            className="hover:text-mains text-four text-sm font-light"
            to={`/${path4}`}
          >
            {linkTitle4}
          </Link>
        </li>
        <li className="mb-3">
          <Link
            className="hover:text-mains text-four text-sm font-light"
            to={`/${path5}`}
          >
            {linkTitle5}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLink;
