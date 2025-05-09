
import Head from 'next/head';

const SeoMeta = ({ title, description, url }: any) => {
    return (
        <Head>
            <title>{title} | مرکزی جمعیت اہل حدیث پاکستان</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`https://www.ahlehadith.pk/${url}`} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="ahlehadith.pk" />
            <meta property="article:publisher" content="https://www.facebook.com/MJA106Pakistan/" />
            <meta property="article:modified_time" content="2023-07-06T22:58:46+00:00" />
            <meta property="og:image" content="https://www.budgetrepaircenter.nz/logo.png" />
            <meta property="og:image:width" content="254" />
            <meta property="og:image:height" content="56" />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ahlehadith" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Head>
    );
};

export default SeoMeta;
