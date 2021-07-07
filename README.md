# Nozaki-Components | 野崎コンポーネント

Modern Vanilla component designed with ES6+ ESM first. These components work in all modern browsers without transpiling and those browsers have 94-97% global penetration. You can of course transpile these components if your business or project has a good usecase that needs transpiling. 

# Set Up
Once you have included `nozaki-components` in your app/site/project, all hyou have to do is import the components you would like to use.

To include a `nozaki-header` on a page, it would look like this :

![nozaki-coponent example image](/example/imgs/Nozaki-Components.gif)

```html

<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Nozaki Components Header Example</title>
        <script type='module'>
            
            //import components used in the page
            import '/components/NozakiList.js';
        
        </script>
    </head>

    <body>
    
        <nozaki-list
            data-class=''
            data-style=''
        >
            <li>アキラ</li>
            <li>島鉄雄</li>
            <li>金田正太郎</li>
            <li>香織</li>
            <li>ケイ</li>
        </nozaki-list>
    
    </body>
</html>

```

![nozaki-list example image](/example/imgs/nozaki-list.PNG)

# Live Local Demo

Run `npm start` to spawn a server at [http://localhost:8888](http://localhost:8888)

# Nozaki Patterns

These are global patterns that all `nozaki-components` follow.

|property|description|
|--------|-----------|
|`data-class` attribute|The contents of this attribute are appended to the `class` attribute `Shadow Root` main element. This is particularly useful when you want to add additional classes from the [W3.css](https://www.w3schools.com/w3css/) lib.|
|`data-style` attribute|the styles put in this attribute will be used as the last styles before the main content of the `Shadow Root`. This means they will be the most important. |

# nozaki cli

To use the `nozaki cli` anywhere, run `npm i -g nozaki-components`. If hyou are just contributing to `nozaki-components` 

The command `nozaki` will give you access 


# Explicit Dependancies (already included)

1. [`strong-type`](https://github.com/RIAEvangelist/strong-type) Strong typing for vanilla JS  
2. [W3.css](https://www.w3schools.com/w3css/) minimal css library from [W3schools.com](https://www.w3schools.com/)