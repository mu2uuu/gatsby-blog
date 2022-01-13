import * as React from "react";
import { Link } from "gatsby";

const Pagination = (props) => {
  const { currentPage, numPages, basePath = "/" } = props;
  const prevPath =
    currentPage === 2 ? basePath: `${basePath}page/${currentPage - 1}`;
  return (
    <div>
      {currentPage > 1 && <Link to={prevPath}>Previous</Link>}
      {currentPage !== numPages && (
        <Link to={`${basePath}page/${currentPage + 1}`}>Next</Link>
      )}
    </div>
  )
}
export default Pagination