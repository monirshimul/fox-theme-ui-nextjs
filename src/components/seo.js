import React from "react";
import Head from "next/head";

export default function SEO({
  description = "End to End IT Solution Provider Operating in South East Asia's Fastest Growing IT Hub Bangladesh. Experienced in Providing Offshore & Custom Software Development Services With Excellence.",
  author = "FoxCatcher IT Solutions",
  meta,
  title = "FoxCatcher IT Solutions",
  image = "/img/newLogo.png",
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: "og:image",
      content: image,
    },
    {
      name: "og:image:type",
      content: "image/png",
    },
    {
      name: "og:image:width",
      content: 1024,
    },
    {
      name: "og:image:height",
      content: 1024,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
