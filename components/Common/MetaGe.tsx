import React from 'react';
import Head from 'next/head';

type MetaGeProps = {
  title: string;
  desc: string;
  url: string;
};
export default function MetaGe({ title, desc, url }: MetaGeProps): JSX.Element {
  return (
    <Head>
      <meta name="description" content={desc} />
      <meta property="og:site_name" content="라이즈 스튜디오" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta
        property="og:image"
        content="https://lh3.googleusercontent.com/zkXM6petYck9HO6bR041dxgedHpTcZhd5MFh3VKp0M3uPZtAi__8tGD42FE6mqrOPX3DO0PFdnyrwr-J8U43w9m5tQiNglp4o3o7NW_5KvoCxQO5YGhMxBbf22Un-m8KREIPlL7a=w2400"
      />
      <meta property="og:url" content={url} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="라이즈 스튜디오" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta
        property="twitter:image"
        content="https://lh3.googleusercontent.com/zkXM6petYck9HO6bR041dxgedHpTcZhd5MFh3VKp0M3uPZtAi__8tGD42FE6mqrOPX3DO0PFdnyrwr-J8U43w9m5tQiNglp4o3o7NW_5KvoCxQO5YGhMxBbf22Un-m8KREIPlL7a=w2400"
      />
      <meta property="twitter:url" content={url} />
      <link rel="canonical" href={url} />
      <title>{title}</title>
    </Head>
  );
}
