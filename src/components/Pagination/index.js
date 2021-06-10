import React, { useMemo } from 'react';
import { Pagination } from 'react-bootstrap';
import { ScrollTo } from 'react-scroll-to/dist';

import './style.css';

const PaginationBasic = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];
  useMemo(() => {
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(
        <Pagination.Item onClick={() => paginate(i)} key={i}>
          {i}
        </Pagination.Item>
      );
    }
  }, [paginate]);

  return (
    <div className='pagination'>
      <ScrollTo>
        {({ scroll }) => (
          <Pagination onClick={() => scroll({ x: 0, y: 0, smooth: true })}>
            {pageNumbers.map((number) => {
              return number;
            })}
          </Pagination>
        )}
      </ScrollTo>
    </div>
  );
};

export default PaginationBasic;
