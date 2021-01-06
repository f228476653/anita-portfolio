const API_URL = 'https://draw-ky4-staging.begin.app/graphql';
//const API_URL = 'http://127.0.0.1:3333/graphql'

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

async function queryData() {
    let result = await fetch(API_URL, {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify({query})
    });

    return await result.json();
}

export default queryData;