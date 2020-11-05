# Legal App Readme
================
The legal-app is a static site generator which uses Assemble to convert a number of Markdown documents into web pages.

The live site can be viewed here: http://legal.teamexos.com/

Detailed documentation is located here: https://docs.google.com/a/teamexos.com/document/d/e/2PACX-1vQTKS08h-h8oflnxLhfSnQVc3ohHT9dW_Lbcf6Kh3-NHWYAx2dCko7a6kGGDPd_CtlrgC9WTifoMb6j/pub

# Pre-requisites
--------------
This project relies on Node 0.10 and Ruby 2.0 to install a few utilities that are required to build the project.

**Grunt** is a Node module used to run JavaScript tasks relating to the build. Note that installing grunt-cli does not install the Grunt task runner! The job of the Grunt CLI is simple: run the version of Grunt which has been installed next to a Gruntfile. This allows multiple versions of Grunt to be installed on the same machine simultaneously.

    $ npm install -g grunt-cli

**Bower 1.3** is a Node module used to install client-side dependencies.

    $ npm install -g bower@1.3

**SASS 3.4** is a Ruby gem used for compiling CSS. Intalled via the following command:

    $ gem install sass -v 3.4

If you encounter issues installing any of the above, then you should fix your permissions for Gems and Node modules or use the `sudo` command.

# Getting Started
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

## Development

First, convert your document to markdown. For Google Documents, this can be done easily via the following script.

    https://raw.githubusercontent.com/mangini/gdocs2md/master/converttomarkdown.gapps

For each of your Documents, follow the following process:

    1. Click Tools > Script Editor

    2. Replace the contents of the script editor with the contents of the converttomarkdown script.

    3. Click File > Save. You can enter whatever for the project name.

    4. On the toolbar, run the script by selecting "Convert to Markdown" from the dropdown, and clicking the Play button.

    5. When the "Authorization required" prompt appears, click "Review Permissions".

    6. After selecting your teamexos.com account, click "Allow".

    7. The markdown document will then be emailed to your teamexos.com account.

Once you have the markdown for your page, follow these steps to build the pages.

    1. Save the markdown document into the `app/documents/` folder as CLIENT-NAME-DOCUMENT-NAME.md

    2. The site architecture is layed out in the pages/ folder. This is basically the starting `/` on the legal site, where each page is served from. The pages here are handlebars templates, and include the documents from the documents/ folder using the markdown helper from assemble (http://assemble.io/helpers/helpers-markdown.html).

    3. You can check your work here by starting your local development server and navigating to http://localhost:9000.


# Deployment
----------
This project is automatically deployed to a MediaTemple server using Beanstalk's deployment functionality. To do so, simply commit the built code contained within the `dist` folder.
    1. Run `grunt build`
    2. Commit the `dist` folder.

