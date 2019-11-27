import React from 'react';
import { Pagination as AntdPagination } from 'antd';

export const Pagination = ({ pageSize, currentPage, totalCount, onChange }) => (
  <AntdPagination
    showSizeChanger
    defaultPageSize={pageSize}
    defaultCurrent={currentPage}
    total={totalCount}
    onShowSizeChange={onChange}
    onChange={onChange}
  />
);
