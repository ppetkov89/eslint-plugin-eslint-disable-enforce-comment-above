# eslint-plugin-eslint-disable-enforce-comment-above

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)


Enforce adding comment above eslint-disable explaining why.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-disable-enforce-comment-above`:

```bash
npm install eslint-plugin-eslint-disable-enforce-comment-above --save-dev
```

## Usage

Add `eslint-disable-enforce-comment-above` to the plugins section of your `.eslintrc`
configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-disable-enforce-comment-above"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "eslint-disable-enforce-comment-above/eslint-disable-enforce-comment-above": "warn"
    }
}
```

## Example

❌ **Bad**:

```javascript
/* eslint-disable */
```

✔️ **Good**:

```javascript
// Add some descriptive comment explaining why.
/* eslint-disable */
```