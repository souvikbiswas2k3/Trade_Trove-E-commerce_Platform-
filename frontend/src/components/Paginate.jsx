import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './custom.css';

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  const generatePageNumbers = () => {
    const visiblePages = 3;
    let startPage = Math.max(1, page - Math.floor(visiblePages / 2));
    let endPage = Math.min(pages, startPage + visiblePages - 1);

    if (pages - page < Math.floor(visiblePages / 2)) {
      startPage = Math.max(1, pages - visiblePages + 1);
      endPage = pages;
    } else if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  return (
    pages > 1 && (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination>
          {/* Previous page arrow */}
          <LinkContainer
            to={
              !isAdmin
                ? keyword && page > 1
                  ? `/search/${keyword}/page/${page - 1}`
                  : page > 1
                  ? `/page/${page - 1}`
                  : ''
                : page > 1
                ? `/admin/productlist/${page - 1}`
                : ''
            }
            className="pagination-link"
          >
            <Pagination.Prev disabled={page === 1} />
          </LinkContainer>

          {/* Render page numbers */}
          {generatePageNumbers().map((pageNumber) => (
            <LinkContainer
              key={pageNumber}
              to={
                !isAdmin
                  ? keyword
                    ? `/search/${keyword}/page/${pageNumber}`
                    : `/page/${pageNumber}`
                  : `/admin/productlist/${pageNumber}`
              }
            >
              <Pagination.Item active={pageNumber === page}>{pageNumber}</Pagination.Item>
            </LinkContainer>
          ))}

          {/* Next page arrow */}
          <LinkContainer
            to={
              !isAdmin
                ? keyword && page < pages
                  ? `/search/${keyword}/page/${page + 1}`
                  : page < pages
                  ? `/page/${page + 1}`
                  : ''
                : page < pages
                ? `/admin/productlist/${page + 1}`
                : ''
            }
            className="pagination-link"
          >
            <Pagination.Next disabled={page === pages} />
          </LinkContainer>
        </Pagination>
      </div>
    )
  );
};

export default Paginate;
