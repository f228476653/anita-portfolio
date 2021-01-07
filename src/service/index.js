//const API_URL = 'https://draw-ky4-staging.begin.app/graphql';
const API_URL = 'http://127.0.0.1:3333/graphql'

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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    let result = await fetch(API_URL, {
        method: 'POST',
        mode:'cors',
        body: JSON.stringify({query:query})
    });

    return await result.json();
}

export default queryData;

// async function queryData() {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');
//     headers.append('Access-Control-Allow-Origin', '*');
//     headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     let result = await axios.post(API_URL, {
//     method: 'post',
//     body: JSON.stringify({query}),
//     headers: headers
//     });

//     return await result.json();
// }

// async function queryData2() {
//     let query2 = `query contact {
//         contactSubHeading
//         social {
//             img
//             url
//         }
//     }`
//       let result = await fetch(API_URL, {
//         method: 'post',
//         body:query2,
//         headers: {
//             'Content-Type': 'application/json',
//           }
//       })

//     return await result.json();
// }