# is-unique

> Predicate that returns true if collection contains unique values.

# Install

```bash
npm install is-unique
```

```bash
bower install is-unique
```

# Usage

```javascript
const isUnique = require('is-unique');

console.log(isUnique('foo')); // false
console.log(isUnique('bar')); // true
console.log(isUnique(['f','o','o'])); // false
console.log(isUnique(['b','a','r'])); // true
console.log(isUnique(122)); // false
console.log(isUnique(123)); // true
```

# Test

```bash
npm test
```

# License

MIT
