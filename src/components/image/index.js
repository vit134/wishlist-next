import React from 'react';
import { Image as BootstrapImage } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './styles.less';

const cx = classNames.bind(styles);

const CLOUDINARY_URL = 'http://res.cloudinary.com/vit134/image/upload';

// http://res.cloudinary.com/vit134/image/upload/w_250,h_200,c_fill/undefined

export const Image = ({
  src,
  rounded,
  width = 200,
  height = 200,
  crop
}) => {
  if (!src) {
    return null;
  }

  const rootClassName = cx('image', { rounded });
  const transformParams = [
    width && `w_${width}`,
    `h_${height}`
  ];

  if (crop) {
    transformParams.push(`c_${typeof crop === 'boolean' ? 'crop' : crop}`);
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
