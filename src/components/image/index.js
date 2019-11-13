import React from 'react';
import { Image as BootstrapImage } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './styles.css';

const cx = classNames.bind(styles);

const CLOUDINARY_URL = 'http://res.cloudinary.com/vit134/image/upload';

export const Image = ({ src, rounded, width = 200, height = 200, crop }) => {
  const rootClassName = cx('image', { rounded });
  const transformParams = [
    `w_${width}`,
    `h_${height}`
  ];

  if (crop) {
    transformParams.push('c_crop');
  }

  const filePath = src.split(CLOUDINARY_URL)[1];
  const params = transformParams.join(',');
  const imageUrl = `${CLOUDINARY_URL}/${params}/${filePath}`;

  return (
    <div className={rootClassName}>
      <BootstrapImage src={imageUrl} alt="kartinka" />
    </div>
  );
};
