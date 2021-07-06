# Nozaki-Components

Modern Vanilla component designed with ES6+ ESM first. These components work in all modern browsers without transpiling and those browsers have 94-97% global penetration. You can of course transpile these components if your business or project has a good usecase that needs transpiling. 

# Set Up
Once you have included `nozaki-components` in your app/site/project the only thing you need to do is specify the base path for the root dir of `nozaki-components`

```html

<html>
    <head>
        ...
        <script type=module>
            //Import the NozakiGlobal module and 
            //set the root dir for the nozaki-components 
            import nozakiGlobal from './modules/NozakiGlobal.js';

            nozakiGlobal.root='/';
        </script>
    </head>
    <body>
        ...
    </body>
</html>
```

# Explicit Dependancies (already included)

1. `[strong-type](https://github.com/RIAEvangelist/strong-type)` Strong typing for vanilla JS  
2. [W3.css](https://www.w3schools.com/w3css/) minimal css library from [w3schools.com](https://www.w3schools.com/)