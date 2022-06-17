import React from "react"
import styled from "styled-components"
import Newsletter from "./newsletter";

const Promotion = ({ location }) => {
  const path = location.pathname;
  const allowPaths = ["/", "/contact", "/about", "/portfolio"];
  const isAllowed = allowPaths.includes(path)

  let showNewsletter 
  if(isAllowed) {
    showNewsletter =(
      <Newsletter />
    )
  } 

  return(
    <aside>
      <StickyWrapper>


        {showNewsletter}
      </StickyWrapper>

    </aside>
  );
}

export default Promotion

const StickyWrapper = styled.div`
  padding: 35px 10px;
  position: sticky;
  top: 25px;
`