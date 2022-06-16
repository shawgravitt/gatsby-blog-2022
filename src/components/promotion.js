import React from "react"
import styled from "styled-components"
import Newsletter from "./newsletter";


const Promotion = () => {
  return(
    <aside>
      <StickyWrapper>
        <Newsletter />
      </StickyWrapper>

    </aside>
  );
}

export default Promotion

const StickyWrapper = styled.div`
  padding: 35px 10px;
  position: sticky;
  top: 25px;
  height: 100vh;
`