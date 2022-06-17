import React from "react";
import Bio from "./bio";
import Newsletter from "./newsletter";


const PostClosing = () => {
  return(
    <div>
      <p>
          If you loved this story and want to support future stories please consider <a target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/shawgravitt">
            <img style={{verticalAlign: `text-bottom`, marginBottom: 0}} src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee" />
              <span style={{marginLeft:5}}>Buying me a coffee!</span></a>
      </p>

      <Newsletter />

      <Bio />
    </div>
  )
}

export default PostClosing