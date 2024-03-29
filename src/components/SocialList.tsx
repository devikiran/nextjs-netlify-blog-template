import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import Medium from "../assets/medium-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="GitHub"
        href={`https://devikiran.github.io`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Medium"
        href={`https://medium.com/@devikiran`}
        target="_blank"
        rel="noopener"
      >
        <Medium width={24} height={24} fill={"#130c0c"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
