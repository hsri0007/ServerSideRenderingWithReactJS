import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

const UserPage = () => {
  const { value: data } = useSelector((state) => state.counter);
  return (
    <div>
      <Helmet>
        <title>About Us - Global Online Training Providers | Mindmajix</title>
        <meta charset="utf-8" />

        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="description"
          content="About Us - Mindmajix world's largest IT Training provider for beginners to professionals. Know about Mindmajix values, clients, partners. Read Now."
        />
        <meta name="author" content="" />
        <link
          rel="shortcut icon"
          href="https://cdn.mindmajix.com/images/mindmajix-fav-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn.mindmajix.com/images/mindmajix-fav-icon.png"
        />
        <link rel="canonical" href="https://mindmajix.com/about" />
        <meta
          name="google-site-verification"
          content="BZ-x6vbnZIFORbdOm7Qc69DGYv_GdEphiPhLQ4DtQm4"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Us - Global Online Training Providers | Mindmajix"
        />
        <meta
          property="og:description"
          content="About Us - Mindmajix world's largest IT Training provider for beginners to professionals. Know about Mindmajix values, clients, partners. Read Now."
        />
        <meta property="og:url" content="https://mindmajix.com/about" />
        <meta property="og:site_name" content="Mindmajix" />
        <meta
          property="og:image"
          content="https://cdn.mindmajix.com/images/mindmajix-logo-5.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="About Us - Mindmajix world's largest IT Training provider for beginners to professionals. Know about Mindmajix values, clients, partners. Read Now."
        />
        <meta
          name="twitter:title"
          content="About Us - Global Online Training Providers | Mindmajix"
        />
        <meta name="twitter:site" content="@MindMajix1" />
        <meta
          name="twitter:image"
          content="https://cdn.mindmajix.com/images/Mindmajix_logo2.png"
        />
        <meta name="twitter:creator" content="@MindMajix1" />
      </Helmet>
      {data[0].name}
    </div>
  );
};

export default UserPage;
