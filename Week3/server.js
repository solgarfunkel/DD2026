// server.mjs
import { createServer } from 'node:http';

// create an array of objects to store our apps content
const content = [
  {title:"Welcome to the Home Page",
    body:"Welcome Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates ipsa fugiat distinctio tempore nulla at rem dolorem nisi tempora.",
    url:"/"
  },

  {title:"Welcome to the About page",
    body:"About Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates ipsa fugiat distinctio tempore nulla at rem dolorem nisi tempora.",
    url:"/about"
  },

  {title:"Welcome to the Contact page",
    body:"Contact Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates ipsa fugiat distinctio tempore nulla at rem dolorem nisi tempora.",
    url:"/contact"
  },

  {title:"Welcome to the Help page",
    body:"Support Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptates ipsa fugiat distinctio tempore nulla at rem dolorem nisi tempora.",
    url:"/help"
  }
];

function answerRequest(statusCode, contentObj, response){

  let template = `<!DOCTYPE html>
<html lang="en">
<head>
    <title>${contentObj.title}</title>
</head>
<body>
    <!-- Navigation -->
     <ul>
        <li> <a href="/">Home</a> </li>
        <li> <a href="/about">About Us</a> </li>
        <li> <a href="/contact">Contact Us</a> </li>
        <li> <a href="/help">Support</a> </li>
        <li> <a href="/catalog">Catalog</a> </li>
     </ul>

     <h1>${contentObj.body}</h1>
     <p> ${contentObj.body}</p>
</body>
</html>`;

  response.writeHead(statusCode, {'Content-Type' : 'text/html'});
  response.end(template);
}

const notfound = {
  title:"404 Not Found",
  body:"We didn't find your page"
}

const server = createServer((req, res) => {
    console.log(`Received request for ${req.url}`);

    const page = content.find((element) => element.url == req.url);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

    if(page){
      // display the content
      answerRequest(200, page, res);
    } else {
      answerRequest(404, notfound, res);
    }
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on http://127.0.0.1:3000 to close use ctrl + C');
});

// run with `node server.mjs`