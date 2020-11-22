import React from 'react';
import { FilePond } from 'react-filepond';
import { maxImageSize } from '../../../constant/ImageSize';
import { ProductDetailsWrapper } from './css/product';

const imageForm = ({ setImageHandler, imgNum }) => {
  return (
    <ProductDetailsWrapper>
      <FilePond
        className="filepond-image"
        labelIdle={`upload image${imgNum} here <br/><span class="filepond--label-action">Browse</span>`}
        allowFileSizeValidation
        maxFileSize="500KB"
        allowMultiple={false}
        stylePanelLayout="integrated"
        maxFiles={1}
        required
        onupdatefiles={setImageHandler}
        labelMaxFileSize={maxImageSize}
      />
    </ProductDetailsWrapper>
  );
};

export default imageForm;
