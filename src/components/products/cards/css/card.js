import styled from 'styled-components';

export const CardWrapper = styled.div`

a{
  text-decoration:none;
}
.product-card {
    width: 300px;
    position: relative;
    box-shadow:${(props) => props.theme.styles.boxShadow};
    border-radius:${(props) => props.theme.styles.borderRadius};
    margin: 10px auto 50px auto;
    background: ${(props) => props.theme.colors.whiteColor};
}

.badge {
    position: absolute;
    left: 0;
    top: 20px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    background: red;
    color: #fff;
    padding: 7px 15px;
}

.product-tumb {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 260px;
    padding: 50px;
    background: #f0f0f0;
}

.product-tumb img {
    max-width: 100%;
    max-height: 100%;
}

.product-details {
    padding: 30px;
}

.product-catagory {
    display: block;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ccc;
    margin-bottom: 18px;
}

.product-details h5 a {
    font-weight: 500;
    display: block;
    /* margin-bottom: 15px; */
    text-transform: uppercase;
    color: #363636;
    text-decoration: none;
    transition: 0.3s;
}

.product-details h4 a:hover {
    color: #fbb72c;
}

.product-details p {
    font-size: 15px;
    line-height: 22px;
    /* margin-bottom: 18px; */
    color: #999;
    
}

.product-bottom-details {
    overflow: hidden;
    border-top: 1px solid #eee;
    /* padding-top: 20px; */
}

.product-bottom-details div {
    /* float: left; */
    /* width: 50%; */
}

.product-price {
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
    font-weight: 600;
}

.product-price small {
    font-size: 80%;
    font-weight: 400;
    text-decoration: line-through;
    display: inline-block;
    margin-right: 5px;
}

.product-links {
    text-align: right;
    display:flex;
    justify-content:space-between;
    padding:0 1rem 1rem 1rem ;
    
}

`;
