Legal App Readme
================
The legal-app is a static site generator which uses Assemble to convert a number of Markdown documents into web pages.

The live site can be viewed here: http://legal.teamexos.com/

Pre-requisites
--------------
This project relies on Node 0.10 and Ruby 2.0 to install a few utilities that are required to build the project.

**Grunt** is a Node module used to run JavaScript tasks relating to the build. Note that installing grunt-cli does not install the Grunt task runner! The job of the Grunt CLI is simple: run the version of Grunt which has been installed next to a Gruntfile. This allows multiple versions of Grunt to be installed on the same machine simultaneously.

    $ npm install -g grunt-cli

**Bower 1.3** is a Node module used to install client-side dependencies.

    $ npm install -g bower@1.3

**SASS 3.4** is a Ruby gem used for compiling CSS. Intalled via the following command:

    $ gem install sass -v 3.4

If you encounter issues installing any of the above, then you should fix your permissions for Gems and Node modules or use the `sudo` command.

Getting Started
---------------

Once everything is installed you can check out the source, install required local node modules and bower components. Note: `npm install` will call `bower install` so you don't need to call it separately.

    $ mkdir legal-app && cd $_
    $ svn checkout https://ap.svn.beanstalkapp.com/legal-app/ .
    $ npm install

Start the local development server

    $ grunt server

Build the site into the dist directory

    $ grunt build

Build and view the site in your browser

    $ grunt server:dist

Deployment
----------
This project is automaticallt deployed to a MediaTemple server using Beanstalk's deployment functionality. To do so, simply commit the built code contained within the `dist` folder.
