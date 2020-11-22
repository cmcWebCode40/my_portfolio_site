const { default: styled } = require('styled-components');

export const Header = styled.header`
/*${(props) => props.theme.colors.primary}: #6394F8;
$light-text: #ABB0BE; */

lighter-text {
  color: #ABB0BE;
}

.main-color-text {
  color: ${(props) => props.theme.colors.primary};
}

.navbar{
  background: ${(props) => props.theme.colors.whiteColor};
    box-shadow:${(props) => props.theme.styles.boxShadow};
  }

nav {
 
  .navbar-right {
    /* float: right; */
  }
  ul {
    
    li {
      display: inline;
      /* padding-left: 20px; */
      a {
        color: #777777;
        text-decoration: none;
        
        &:hover {
          color: black;
        }
      }
    }
  }
}

.cart {
  margin: 0  1rem;
}

.badge {
    background-color: #6394F8;
    border-radius: 10px;
    color: white;
    display: inline-block;
    font-size: 12px;
    line-height: 1;
    padding: 3px 7px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
}

.shopping-cart {
  margin: 20px 0;
  float: right;
  background: white;
  width: 320px;
  position: relative;
  border-radius: 3px;
  padding: 20px;
  box-shadow:${(props) => props.theme.styles.boxShadow};
  
  
  .shopping-cart-header {
    border-bottom: 1px solid #E8E8E8;
    padding-bottom: 15px;
    
    .shopping-cart-total {
      float: right;
    }
  }
  
  .shopping-cart-items {
    padding-top: 15px;
      li {
        margin-bottom: 18px;
        list-style:none;
      }

    img {
      float: left;
      height:3rem;
      margin: 0 0rem 0 -.1rem;
      width:3rem;
    }
    .item-name {
      display: block;
      padding-top: 10px;
      font-size: 16px;
    }
    
    .item-price {
      color:${(props) => props.theme.colors.primary};
      margin-right: 8px;
    }
    
    .item-quantity {
      color:${(props) => props.theme.colors.black};
    }
  }
   
}

.shopping-cart:after {
    bottom: 100%;
    left: 89%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: white;
    border-width: 8px;
    margin-left: -8px;
}

.cart-icon {
  color: #515783;
  font-size: 24px;
  margin-right: 7px;
  float: left;
}

.button {
  background:${(props) => props.theme.colors.primary};
  color:white;
  text-align: center;
  padding: 9px; 
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 15px 0;

  &-light{
    background:none;
    border:2px solid ${(props) => props.theme.colors.black};
    color:${(props) => props.theme.colors.black};
    &:hover {
    background: ${(props) => props.theme.colors.black};
    color:${(props) => props.theme.colors.whiteColor};
  }
  }
  
  &:hover {
    background: lighten(${(props) => props.theme.colors.primary}, 3%);
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

#wrapper {
      position:absolute;
      padding-left: 0;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      transition: all 0.5s ease;
      z-index:99;
      right:0;
      margin:0 10rem 0 -1rem;
      display:none
    }

    #wrapper.toggled {
      padding-left: 250px;
      display:block;
    }
    
@media ${(props) => props.theme.mediaQueries.medium}{
  #wrapper {
    margin:auto;
  }
}
 

`;
