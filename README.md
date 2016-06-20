# WeatherAPI
Build a functioning Weather app using the [Open Weather API](http://openweathermap.org/api).

**Notes:** Before I ever start a React app I always create a HelloWorld component just to make sure that I've tied everything together properly. I don't expect you to have all this memorized, but do your best in using proper documentation to wire up everything.

**Result:**
 ![image](https://github.com/Lemon23/WeatherAPI/raw/master/images/pic1.jpeg)

##Step 1: Set up all of you need
Prior to this, make sure that you have already installe [Node.js](https://nodejs.org/en/).

* install webpack

	`npm install webpack -g`
	
	Parameter `-g` indicates that we are going global to install webpack.
	
next >>>

1. Create the problemoject directory structure

2. npm install the dependencies you'll need

	`npm install webpack-dev-server -g`
	
	`npm install react react-dom --save`
	
	`npm install react-router --save`
	
	`npm install axios history --save`
	
	`npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev`

3. Create `package.json` file

	If you don't want to configure information, Always Enter. 
	
	Mind! `Name` and `version`, both of which are necessary.

4. Create `webpack.config.js` file

	*	`entry`: Used to define entry files.
	* 	`output`: Used to define the output of the document after construction.
	*  `module`: About the module loading, we define the module.loaders. Here through regular expressions to match different file name, and then give them different definitions of loader. We use webpack+react+es2015, so:
	
		```
		module: {
		    loaders: [
			    {
			      test: /\.js$/,
			      exclude: /node_modules/,
			      loader: 'babel',
			      query: {
			        presets: ['es2015','react']
			      }
			    }
		    ]
	  }
		```
	*  `devServer`: Run webpack-dev-server.

		```
		devServer: {
	    	inline: true, 
	    	port: 3333
	  	}
		```
		`inline: true` : Can monitor JS changes.
		`port: 3333` : You can define your own port number.

5. Create and configure your `.babelrc` file

	```
	{
  		"presets": [
    		"react"
  		]
	}
	```
	Without it your code will not run, do not believe you can try.
	
**final:** Create a HelloWorld component. Start webpack and make sure everything is working

##Step 2: Let React Router handle Routing
Now instead of rendering to the DOM, render your routes configuration. Before I jump into any real coding, again, I make sure everything is wired up correctly.

##Step 3: Building structure of components
- Index
	- Header
	- Home

##Step 4: Weather Button
With the API key we're using, you don't need an API key, but you're going to get rate limited pretty quick. It's free and probably worth it. For more info [click here](http://openweathermap.org/appid). 

We're going to be querying the weather API for two types of data. A specific city's current weather, and the 5 day forecast for a specific city.

>>Statement: a large part of the code from the [react-fundamentals-curriculum](https://github.com/ReactjsProgram/react-fundamentals-curriculum/tree/master). There are more detailed steps to explain. Thanks again!
 
