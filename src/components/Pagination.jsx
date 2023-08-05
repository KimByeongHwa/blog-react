import propTypes from 'prop-types';

function Pagination({ currentPage, totalPages, onClick, limit }) {
  const currentGroup = Math.ceil(currentPage / limit);
  const lastGroup = Math.ceil(totalPages / limit);
  const startPage = limit * (currentGroup - 1) + 1;
  const lastPageInLastGroup = currentGroup === lastGroup ? totalPages % limit : limit;

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        {currentGroup !== 1 && (
          <li className='page-item'>
            <div
              className='page-link cursor-pointer'
              onClick={() => {
                onClick(startPage - limit);
              }}
            >
              Prev
            </div>
          </li>
        )}
        {Array(lastPageInLastGroup)
          .fill(startPage)
          .map((value, index) => value + index)
          .map((pageNumber) => {
            return (
              <li className={`page-item ${currentPage === pageNumber ? 'active' : ''}`} key={pageNumber}>
                <div
                  className='page-link cursor-pointer'
                  onClick={() => {
                    onClick(pageNumber);
                  }}
                >
                  {pageNumber}
                </div>
              </li>
            );
          })}
        {currentGroup !== lastGroup && (
          <li className='page-item'>
            <div className='page-link cursor-pointer' onClick={() => onClick(startPage + limit)}>
              Next
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: propTypes.number,
  totalPages: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
  limit: propTypes.number,
};

Pagination.defaultProps = {
  currentPage: 1,
  limit: 5,
};

export default Pagination;
