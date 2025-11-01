export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NightApp",
    url: "https://apps.liv-jpn.com",
    logo: "https://apps.liv-jpn.com/logo.png",
    description: "ナイト業界の業務効率化を実現する3つのアプリケーション",
    contactPoint: {
      "@type": "ContactPoint",
      email: "app@liv-jpn.com",
      contactType: "Customer Support",
      availableLanguage: ["Japanese"]
    },
    founder: {
      "@type": "Person",
      name: "HIDETA UTSUNO"
    }
  };

  const softwareApplications = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Night名簿帳",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS",
      offers: {
        "@type": "Offer",
        price: "300",
        priceCurrency: "JPY"
      },
      description: "ナイト業界のスタッフ管理アプリケーション",
      author: {
        "@type": "Person",
        name: "HIDETA UTSUNO"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Night契約書",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS",
      offers: {
        "@type": "Offer",
        price: "300",
        priceCurrency: "JPY"
      },
      description: "ナイト業界の契約書管理アプリケーション",
      author: {
        "@type": "Person",
        name: "HIDETA UTSUNO"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Nightアフターバック",
      applicationCategory: "BusinessApplication",
      operatingSystem: "iOS",
      offers: {
        "@type": "Offer",
        price: "480",
        priceCurrency: "JPY"
      },
      description: "ナイト業界の手数料管理アプリケーション",
      author: {
        "@type": "Person",
        name: "HIDETA UTSUNO"
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {softwareApplications.map((app, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }}
        />
      ))}
    </>
  );
}
