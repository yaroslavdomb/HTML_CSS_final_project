ReadMe - V1.5
Date: 30/DEC/2025

Project purpose:
    Final project for HTML+CSS section of learning in HackerU for "Full stack engineer".


Files & Folders structure:
    Code
        JS = a small part of JS is used to support dark/light mode on page reload
        CSS
            color-scheme-mode.css = dark/light mode colors configuration
            fonts = font configuration
            responsivity = configuration for screens of different sizes
            style_index = main CSS file for index page 
        HTML
            index = main (and single, as it should be a single-page project) file
        WP = folder for WordPress files. WP is going to be part of one of the sub-projects
    Resources
        Additional = additional files for support project
        fonts = font files themselves
        music
        pics = collection of pictures to be used in project
        video
    Docs
        ReadMe.txt = currently you are reading this file
        CSS_HTML_expected = a very common description of what is expected from graduates of the course
        script.html = script to create example of Sitemap.xml & run from html page
        sitemap.xml = sitemap generated for my site

Rules used for site creation:
    1) Any id should be named as "<id-name-here>-id"
        1.1) Ends with "-id"
        1.2) All letters are small (not capitals)
        1.3) Use "-" (hyphen) as a word separator

    2) Any custom CSS variables name should be named as --my-<variable-name>
        2.1) Start with "--my"
        2.2) All letters are small (not capitals)
        2.3) Use "-" (hyphen) as a word separator

    3) "em" and "px" is not used; only "rem" and "%"

    4) We have not yet learned JS, so the only JS solution used is to preserve the dark/light mode selection when the page is reloaded

    5) Pages:
        index.html - Main (default) page
        About.html - About me, option to download my CV in different formats
        Contact.html - Way to contact me
        subProject.html - contain list of sub projects, linked to other pages
        trafficLight - first subproject, traffic light, fast developed, shows primitive CSS animation 

    6) No in-line styles

File splitting structure:
    CSS files are split by their functionality (self-explained by naming).

CSS including order:
    Globally, there are no dependencies between files, so they can be re-ordered if needed.
    1) fonts.css
    2) style_index.css
    3) color-scheme-mode.css
    4) responsivity.css = should be last to adjust navigation design on small (<800px) screens

JS files
    The only file used is darkMode.js.
    Purpose of the file - to keep the status of dark/light mode selector.
    It is executed by setting the appropriate value into a local variable.
    The page may be reloaded when the user clicks the "Send" button in the get-in-touch section.

List of customized variables
    Colors:
        --my-bg-color
        --my-txt-color
        --my-txt-color-2
        --my-txt-color-3
        --my-border-color
        --my-nav-menu-bg-color
        --my-button-bg-color
        --my-placeholder-txt-clr
        --my-border-color-traffic
        
    Responsivity:
        --my-margin-top-right-side
        --my-margin-top-h1 
        --my-margin-top-h2
        --my-gap-bottom-menu
        --my-top-shift-h1:
        --my-image-width:
        --my-image-height:
        --my-go-home-text-gap
        --my-font-size
        --my-font-size-h1
        --my-font-size-h2
        --my-font-size-h3
        --my-logo-width
        --my-logo-height
        --my-margin-top-with-logo
        --my-height-tlight
        --my-width-tlight

Pictures resources:

1) woman jumper = pole vault clipart #4009885 (License. Personal Use) (https://clipart-library.com/clipart/pole-vault-clipart_10.html)
2) trafficLight = icon for traffic light subproject (https://pixabay.com/vectors/button-icon-symbol-traffic-light-7850702/)