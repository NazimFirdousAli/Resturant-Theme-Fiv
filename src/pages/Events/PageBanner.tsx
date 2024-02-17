import React from "react";

interface PageBannerProps {
  pageTitle?: string;
  pageName?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ pageTitle, pageName }) => {
  return (
    <>
      <div className="page-title-area page-title-bg2">
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>{pageName}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
