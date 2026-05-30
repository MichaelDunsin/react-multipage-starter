import { Helmet } from "react-helmet-async";


export default function AboutMe(){

return (
<div>
    <Helmet>
        {/* Standard SEO tags */}
        <title>About Us | My Amazing Website</title>
        <meta name="description" content="Learn more about our team, mission, and what drives us forward." />
        <link rel="canonical" href="https://mywebsite.com/about" />

        {/* Open Graph / Facebook tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Us | My Amazing Website" />
        <meta property="og:description" content="Learn more about our team and mission." />
        <meta property="og:image" content="https://mywebsite.com/assets/about-banner.jpg" />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | My Amazing Website" />
      </Helmet>

</div>
)
};

