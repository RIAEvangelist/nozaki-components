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
|class|classnames seperated by spaces||
|style|css inline styles||
|text|main header text||
|color|w3c css color name|used for the header background color|
|img|path to image if you want one||
|imgclass|classnames for just the image seperated by spaces||
|imgstyle|css inline styles for just the image||

# Inner Html

Inner HTML is added after the header text. You can even include your own style link or inline style block.
