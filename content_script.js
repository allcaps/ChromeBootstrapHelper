var elm = document.createElement('div'),
sizes = ['xs', 'sm', 'md', 'lg'],
uid = 'chromebootstraphelper',
exist = document.getElementById(uid),
i;

elm.id = uid;
elm.style.cssText = 'position:fixed;'
                  + 'top:3px;'
                  + 'left:3px;'
                  + 'z-index:9999;'
                  + 'padding:.25em;'
                  + 'border:1px solid black;'
                  + 'background:white;color:black;';

for (i = 0; i < sizes.length; i++) { 
  var item = document.createElement('div');
  item.className = 'visible-' + sizes[i];
  item.textContent = sizes[i];
    elm.appendChild(item);
}

if (exist === null) {
  document.body.appendChild(elm);
} else {
  exist.parentNode.removeChild(exist);
}
