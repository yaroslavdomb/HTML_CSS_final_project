ReadMe - V1.4
Date: 17/DEC/2025

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

    3) "em" is not used; only "rem" and "px"

    4) We have not yet learned JS, so the only JS solution used is to preserve the dark/light mode selection when the page is reloaded

    5) The project should be a single page site, so all structure related to a multipage site is currently not relevant.

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
        --my-bg-color  = background color for dark/light mode
        --my-txt-color = text color for dark/light mode
        --my-txt-color-2 = additional text color
        --my-txt-color-3 = text color for footer header for dark/light mode
        --my-border-color = border color for dark/light mode
        --my-nav-menu-bg-color = background color for navigation elements on hover
        --my-button-bg-color = background color for file "download" button on hover
        --my-placeholder-txt-clr = placeholder color
        
    Responsivity:
        --my-margin-top-right-side = top margin for the message field
        --my-margin-top-h1 = top margin for the h1
        --my-gap-bottom-menu = gap between elements in bottom menu
        --my-image-width = resource and go home image width 
        --my-image-height = resource and go home image height
        --my-font-size = font size for go home tooltip

Pictures resources:

1) woman jumper = pole vault clipart #4009885 (License. Personal Use) (https://clipart-library.com/clipart/pole-vault-clipart_10.html)
2)  = background for light mode (https://pixabay.com/illustrations/ai-generated-ship-border-sea-sail-8321771/)
3) trafficLight = icon for traffic light subproject (https://pixabay.com/vectors/button-icon-symbol-traffic-light-7850702/)