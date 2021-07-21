# nozaki-header documentation| 野崎ヘッダ

`HTML` Example

```js

    <script type='module'>
        import '/components/NozakiHeader.js';
    </script>
    <nozaki-header
        data-img='../img/NMLogo.jpg'
        data-text='Nozaki Components'
    ></nozaki-header>

```

`JS` Example

```js
import '/components/NozakiHeader.js';

const header=new NozakiHeader;

//save boilerplate by using with blocks.
//its better for your sanity
with(header.dataset){
    img='../img/NMLogo.jpg';
    text='Nozaki Components';
}

//this could be wherever
document.body.appendChild(header);

```

### Both examples look like this
[See live example of nozaki-header](http://nozaki.ninja/example/nozaki-header.html)

# dataset

|dataset.|expects|description|
|-|-|-|
|class|class names|classnames seperated by spaces|these are appended to the actual components class attribute|
|style|css styles|css inline styles|these are appended to the actual components style attribute|
|text|String|main header text|
|color|[w3c color](https://www.w3schools.com/w3css/w3css_colors.asp)| Defaults to 'gray'. appended like so `w3-${color}` used for the header background color|
|img|path||
|imgclass|class names|classnames for just the image seperated by spaces|
|imgstyle|css styles|css inline styles for just the image|

# Inner Html

Inner HTML is added after the header text. You can even include your own style link or inline style block.
