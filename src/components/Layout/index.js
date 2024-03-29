import React from "react"
import PropTypes from "prop-types"
import GlobalStyle from "../../styles/global";
import * as S from './styled'
import Sidebar from "../Sidebar";
import MenuBar from "../MenuBar";

const Layout = ({ children }) => {

  return (
    <S.LayoutWrapper>
      <GlobalStyle />
      <Sidebar/>
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
