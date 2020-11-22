import styled from 'styled-components';

export const AppBar = styled.div`
  .bars{
    position:fixed;
    top:.8rem;
    margin:-1rem -.5rem 0 -.6rem;
    z-index:999
  }
  #wrapper {
      padding-left: 0;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }

    #wrapper.toggled {
      padding-left: 250px;
    }

    #sidebar-wrapper {
      z-index: 1000;
      position: fixed;
      left: 250px;
      width: 0;
      height: 100%;
      margin-left: -250px;
      overflow-y: auto;
      background:${(props) => props.theme.colors.primary};
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }

    #wrapper.toggled #sidebar-wrapper {
      width: 250px;
    }

    #page-content-wrapper {
      width: 100%;
      position: absolute;
      padding: 15px;
      /* margin: 4rem 0 0 0 ; */
    }

    #wrapper.toggled #page-content-wrapper {
      position: absolute;
      margin-right: -250px;
    }

    /* Sidebar Styles */

    .sidebar-nav {
      position: absolute;
      top: 0;
      width: 250px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .sidebar-nav li {
      text-indent: 20px;
      line-height: 40px;
      margin:1rem 0;
      border-bottom :1px solid ${(props) => props.theme.colors.gray};
    }

    .sidebar-nav li a {
      display: block;
      text-decoration: none;
      color:${(props) => props.theme.colors.whiteColor};
    }

    .sidebar-nav li a:hover {
      text-decoration: none;
      color: #fff;
      background: rgba(255, 255, 255, 0.2);
    }

    .sidebar-nav li a:active,
    .sidebar-nav li a:focus {
      text-decoration: none;
    }

    .sidebar-nav>.sidebar-brand {
      height: 65px;
      font-size: 18px;
      line-height: 60px;
    }

    .sidebar-nav>.sidebar-brand a {
      color: #999999;
    }

    .sidebar-nav>.sidebar-brand a:hover {
      color: #fff;
      background: none;
    }

    @media(min-width:768px) {
      #wrapper {
        padding-left: 250px;
      }

      #wrapper.toggled {
        padding-left: 0;
      }

      #sidebar-wrapper {
        width: 250px;
      }

      #wrapper.toggled #sidebar-wrapper {
        width: 0;
      }

      #page-content-wrapper {
        padding: 20px;
        position: relative;
      }

      #wrapper.toggled #page-content-wrapper {
        position: relative;
        margin-right: 0;
      }
    }`;
