# Bootbuckle Lite

## A super quick starting project for websites that are not massively complex.

This project relies on [Grunt](http://gruntjs.com/) to work. 

* Run `npm install` in the root of this project to grab dependencies. 
* Run `grunt` and leave the hard work to the animal.

### What does Grunt do?

All the code you should write is located in `/source`, which Grunt compiles and places in `/build` directory which it also creates. You only need the build folder for a working site. 

### Jade

Jade is a HTML preprocessor. Jade files should live in `/source/jade` and the compiled files get outputted in `/build`. The syntax is as follows:

    **/source/jade/index.jade**
    html
      head
        link(rel="stylesheet", href="css/style.min.css")
        title = "Bootbuckle"
      body
        .container
          h1 I am a H1
          p= title
  
    **/build/index.html**
    <html>
      <head>
        <link rel="stylesheet" href="css/style.min.css">
        <title>Bootbuckle</title>
      </head>
      <body>
        <div class="container">
          <h1>I am a H1</h1>
          <p>Bootbucle</p>
        </div>
      </body>
    </html>
    
### SASS

SASS is a CSS preprocessor, the main SASS file lives in `/source/scss/style.scss` and the compiled files get outputted as `/build/css/style.css`. [csscomb](http://csscomb.com/) then sorts the file and cssmin minifies it. The file you should link to is `/build/css/style.min.css`. Sass syntax is as follows:
    
    **/source/scss/style.scss**
    $accent: blue;
    body {
      margin: 0;
      padding: 0;
      font-family: "Open Sans";
      .container {
        background-color: $accent;
      }
    }
    
    **/build/css/style.css**
    body {
      margin: 0;
      padding: 0;
      font-family: "Open Sans";
    }
    body .container {
      background-color: blue;
    }

### JS

Any time a file gets added, removed or edited in `/source/js`, the files all get concatenated and minified and are outputted as `/build/js/script.min.js`

### Images

`source/img` gets watched for new files. Images get compressed by the amount specified in `Gruntfile.js`, the default is 3 of 7. The compressed images get outputted to `/build/img`.

