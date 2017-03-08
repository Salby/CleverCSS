#CleverCSS

##Dependencies

CleverCSS requires JQUERY for certain elements to function properly

###JQUERY

JQuery can be installed from [jquery.com](jquery.com)

You can also use a link from Google APIs

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

####CleverCSS includes:
* Headers
* Buttons
* Responsive Grid
* Navigation Bar

###Hero

If you want a header or image that fills the entire viewport, you can do that with the .hero class

    <header class="hero">
      <h1>This is a header</h1>
    </header>

###Navigation bar

    <nav>
      <ul>
        <li><a>Home</a></li>
        <li id="drawerButtonItem"><button class="drawerButton"></button>
      </ul>
    </nav>

###Buttons

    <button class="buttonFlat">button</button>
    <button class="buttonRaised">button</button>
    <button class="buttonAction">button</button>

##Animations

CleverCSS includes some animations that can be utilized

###Ripple Effect

CleverCSS includes a material-design inspired ripple effect that reacts to user input

    <button class="buttonRaised ripple">ripple</button>
