Save the Children : Front end developer/engineer Test
========================================

For this test you are required to build a HTML component using the JSON file included ([data/test.json](data/test.json))

The component should be similar to the one shown in [example.png](example.png) though creativitity is encouraged.

* The component must be responsive
* The html should be able to be reused to display the component in various layouts using only css.
* The css should be wrote using [scss](http://sass-lang.com/) 

Kens Notes :

The request to make the html reusable was a little unclear.
In a real example with more html markup and a complete JSON file a modular approach would have been easier to deliver.

The JS has had an initial step towards re-use by adding some parameters when calling the function. 

The JSON file was altered to include:
~ Text position - to allow for different image focus points
~ Alt image paths - to not load large images in mobile mode. 

When loading at mobile width ONLY the small images are loaded - else the bigger images (main_full.jpg) are used. 
On resize, the img src is altered.

Enquire JS would be better employed to 'sniff for page width' - this aspect is not production ready, Rather just a POC. 

The SASS was not written as 'Mobile-first' given that I had no mobile / tablet design. There may be a small number of redundant styles in styles.scss.

If I had been supplied three designs It would hve been easier to code the SASS using 'Mobile-first' approach.