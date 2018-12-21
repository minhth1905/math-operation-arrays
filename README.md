# math-operation-arrays
## Installation
```javascript
npm install math-operation-arrays
```
## Usage
```javascript
var array = require("math-operation-arrays");
```

**`difference(arr1, arr2);`**

Return the difference of the given two array.
```javascript
array.difference ([1, 2, 3], [5, 6]); //[1, 2, 3]
array.difference (["hello", 3, 4, 5], ["hello", 4]); // ["hello", 3, 5]
```
**`min(arr);`**

Return minimum element present in the given array.
```javascript
array.min ([1, -2, 3]); //-1
array.min (["a", "b", "c"]); //"a"
array.min ([]); //null
```

**`max(arr);`**

Return maximum element present in the given array.
```javascript
array.max ([1, 2, 3]); //3
array.max (["a", "b", "c"]); //"c"
```

**`union(arr);`**

Return the union of the given two array.
```javascript
array.union ([1, 2, 3], [4]); //[1, 2, 3, 4]
array.union (["a", "b", "c"], [5]); //["a", "b", "c", 5]
```

**`removeDuplicates(arr);`**

Remove the duplicates element present in the given array.
```javascript
array.removeDuplicates ([1, 2, 3, 4, 4, 4]); //[1, 2, 3, 4]
array.removeDuplicates (["a", "b", "c", "a"); //["a", "b", "c"]
```
