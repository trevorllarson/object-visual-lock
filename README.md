# Object Visual Lock

### jQuery plugin to holding view in place on a specific DOM object.

`var objectVisualLock = require('object-visual-lock');`

#### To utilize:

`$('#element').objectVisualLock();`

#### To set an offset from the top 
This is helpful with fixed headers, or if you just want some breathing room to work

`$('#element').objectVisualLock(100);`

This will push it 100px from the top of the page

#### To activate the lock on page load
Without this passed through, you must manually activate the lock by clicking the on/off button

`$('#element').objectVisualLock(0, true);`
`$('#element').objectVisualLock(100, true);`