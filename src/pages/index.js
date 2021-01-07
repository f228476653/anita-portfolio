import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

// Components
import Header from '../components/Header';
import Work from '../components/Work';
import About from '../components/about';
import Skills from '../components/skills';
import Footer from '../components/Footer';

// Service
import schema from '../schema';
//import queryData from '../service';
const query = `
{  
    header {
        name,
        avatarImg,
        headerTagline,
        headerParagraph,
        contactEmail
    }
    work {
        id,
        title,
        para,
        imageSrc,
        url
    }
    about {
        aboutParaOne,
        aboutParaTwo,
        aboutParaThree,
        aboutParaFour,
        aboutImage
    }
    skills {
        id
        img,
        para,
        references {
            title,
            description,
            link
        }
    }
    contact {
        contactSubHeading
        social {
            img
            url
        }
    }
}`;

const IndexPage = () => {
  const [data, setData] = useState(undefined);

  useState(() => {
    // queryData().then(response => {
    //   setData(response.data);
    // });
    setData(schema.schema);
  });


  // async function queryData() {
  //   return await fetch('http://127.0.0.1:3333/graphql', {
  //     method: 'POST',
  //     mode: 'no-cors',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({query})
  //   })
  // }
  
  return (
    <Layout>
      <SEO title="Anita's Portfolio" />
      {data ?
        <div>
          <Header header={data.header}></Header>
          <Work work={data.work}></Work>
          <About about={data.about}></About>
          <Skills skills={data.skills}></Skills>
          <Footer contact={data.contact} header={data.header}></Footer>
        </div>
      : ''}
    </Layout>
  );
};

export default IndexPage;
