# layout-assembly
This is assembly for comfortable layout making. It allows: 
* minify css
* automaticaly connect fonts
* minify weight of images and to use .webp extension instead of .jpg
* make zip archive of your project


## start

To start working with this assembly download this code and open it in any code editing programm (VScode recommended)
Then in terminal write npm i and wait till loading ends.

press F1 (if you are in VScode) and type: open settings (json)

then paste this code inside: 

    "path-autocomplete.pathMappings": {
        "@img": "${folder}/src/img",
        "@scss": "${folder}/src/scss"
    }

And then if you want to connect img into your html or scss you need to type:
   
    <img src="@img/path_starting_from_img_folder" alt="alt"> // in html
  
    background-image: url('@img/path_starting_from_img_folder'); // as a style for scss

VScode will automatically find all @img/ and replace them in correct way so you don't need to worry about it.

If you want to create zip file of your project just write npm run zip in terminal.

## html

You can write html code in different files inside of src/html folder and then include them in src/yourFile.html:

  <body>
	  @@include('html/header.html', {})
  
	  <main></main>
  
	  @@include('html/footer.html', {})
  </body>
  
Also you can pass some parameters: 
    
    // src/index.html
    
    <htm>
      @@include('html/head.html', {
	      "title":"main"
      })
      
      <body>
      
      </body>
    </html>
    
    
    
    // src/html/head.html
    
    <head>
	    <meta charset="UTF-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <link rel="stylesheet" href="css/style.min.css">
	    <title> @@title </title> // taking parament
    </head>
  
  
  
When you crate img tag and if browser supports .webp files picture tag will automatically create and .webp image will be connected in dist folder.

## scss

You can write scss in /src/scss. Attention! It must be file style.scss there obligatory.
After running gulp in terminal you will get some features in your dist(result) folder:

1. in folder dist/css you will get two files style.css and style.min.css (minified version of your css)
2. all same media queries will be grouped in one media queries
3. you have no need to write cross-browser styles because compiler will automatically write cross-browser props

## fonts

As I said in my very first words: "Fonts will be written automatically". It means that you only need to put .ttf extension font file in src/fonts 
and you will automatically get file src/scss/fonts.scss. You only need to include them into your main file.

Attention! If you want to add some more fonts and you already have fonts.scss file you need to delete this file and rum gulp because new font face won't
be created if fonts.scss already exists.

Also you will get .woff and .woff2 fonts in dist/fonts folder.

## images

After you run gulp in terminal in dist/img you will get this image but its weight will be reduced nearly in 4 of 5 times.
And also you will get .webp img its weight will be even more reduced (nearly in 8 times)

## typescript 

After you run gulp in terminal two folder will create in dist folder:
* script - compiled ts files
* typescript-maps - sourcemaps for typescript 

You can change compiling settings in tsconfig.json





