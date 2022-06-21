import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Separator } from './ui/Separators';
import { LinkFooter, LinkFooterSocial } from './ui/Links';

const Footer = () => {
  const {allDatoCmsFooterSocialLink} = useStaticQuery(graphql`
      query {
          allDatoCmsFooterSocialLink {
            nodes {
              icon
              link {
                value
              }
            }
          }
      }
  `);
  const socialLinksElements = allDatoCmsFooterSocialLink.nodes.map((item, i) => {
    const {icon, link} = item;
    const socialLink = link?.value?.document?.children[0]?.children[0]?.url;
    const isLast = i === allDatoCmsFooterSocialLink.nodes.length-1;
    return (<LinkFooterSocial key={i} icon={icon} link={socialLink} last={isLast} />);
  });

  return (
    <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
        <div className="container text-center py-5">
            <div className="d-flex justify-content-center mb-4">
              {socialLinksElements}
            </div>
            {/* <div className="d-flex justify-content-center mb-3">
                <LinkFooter name={'Privacy'} link={'/#'} />
                <Separator />
            </div> */}
            <p className="m-0">&copy; <a className="text-white font-weight-bold" href="/#">Domain Name</a>. All Rights Reserved. Designed by <a className="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
            </p>
        </div>
    </div>
  );
}
 
export default Footer;