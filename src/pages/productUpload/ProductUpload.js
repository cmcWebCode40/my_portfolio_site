import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { RequestLoaderIcon } from '../../components/Loaders/Loader';
import ImageForm from '../../components/products/productForm/imageForm';
import ProductDetails from '../../components/products/productForm/ProductDetails';
import usePostData from '../../hooks/usePostData';
import { ProductWrapper } from './css/products';

const nValues = {
  price: 0,
  discount: 0,
  quantityAvailable: 0
};
const txtValues = {
  productName: '',
  brand: '',
  warranty: '',
  description: '',
  category: ''
};
const booleanValues = {
  productAvailable: false,
};

const imageKeys = {
  imageOne: '',
  imageTwo: '',
  imageThree: '',
};

const ProductUpload = () => {
  const [imageFiles, setImageFiles] = useState(imageKeys);
  const [numberValues, setNumberValues] = useState(nValues);
  const [textValues, setTextValues] = useState(txtValues);
  const [boolValues, setBoolValues] = useState(booleanValues);
  const {
    data, postData, error, loading
  } = usePostData();

  const handleChange = (e) => {
    setTextValues({ ...textValues, [e.target.name]: e.target.value });
  };
  const handleCheckbox = (e) => {
    setBoolValues({ ...boolValues, [e.target.name]: e.target.checked });
  };
  const handleChangeNumber = (e) => {
    setNumberValues({ ...numberValues, [e.target.name]: +e.target.value });
  };

  const setImageHandler = (fileItems, name) => {
    setImageFiles((file) => ({ ...file, [name]: fileItems[0] }));
  };

  const createProduct = async (e) => {
    e.preventDefault();
    const {
      brand, description, productName, category
    } = textValues;
    const {
      discount, price, quantityAvailable
    } = numberValues;
    const {
      productAvailable
    } = boolValues;
    const { imageOne, imageThree, imageTwo } = imageFiles;
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('brand', brand);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('discount', discount);
    formData.append('price', price);
    formData.append('quantityAvailable', quantityAvailable);
    if (imageOne?.file && imageTwo?.file && imageThree?.file) {
      formData.append('productAvailable', productAvailable);
      formData.append('imageOne', imageOne.file);
      formData.append('imageTwo', imageTwo.file);
      formData.append('imageThree', imageThree.file);
    }

    const postValues = {
      url: '/products/new',
      data: formData,
    };

    await postData(postValues);
    toast.success(data.message);
  };

  return (
    <ProductWrapper>
      {loading && (
        <RequestLoaderIcon
          size="3x"
          label="Please wait"
          className="text-primary bg-mid-gray"
        />
      )}
      <form onSubmit={createProduct}>
        {error && (
        <div className={error.class} role="alert">
          {error.message}
        </div>
        )}
        <div className="row">
          <div className="col-md-6 my-2">
            <ProductDetails
              handleChange={handleChange}
              handleChangeNumber={handleChangeNumber}
              handleCheckbox={handleCheckbox}
            />
          </div>
          <div className="col-md-6 my-2">
            <ImageForm
              setImageHandler={(e) => setImageHandler(e, 'imageOne')}
              imgNum="1"
            />
            <ImageForm
              setImageHandler={(e) => setImageHandler(e, 'imageTwo')}
              imgNum="2"
            />
            <ImageForm
              setImageHandler={(e) => setImageHandler(e, 'imageThree')}
              imgNum="3"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn my-3 btn-primary"
        >
          Create Product
        </button>
      </form>
    </ProductWrapper>
  );
};

export default ProductUpload;
