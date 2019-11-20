import React from 'react';
import { Pagination as AntdPagination } from 'antd';

export const Pagination = ({ pageSize, currentPage, totalCount, onChange }) => (
  <AntdPagination
    showSizeChanger
    onShowSizeChange={onChange}
    defaultPageSize={pageSize}
    defaultCurrent={currentPage}
    total={totalCount}
  />
);
