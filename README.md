# ban-audio
Ban voice messages from backlisted users.

## Installation:

```
npm i
```

Then you need to add some users to blacklist. Put theirs ids into this.
Also, get token via https://vkhost.github.io/ and put token in config.

```
const blacklist = [
    1, //Пашка 
    77777, //<- your id example
];

const TOKEN = '88888'; //<- your token example

module.exports = { blacklist, TOKEN };

```
For start:
```
npm start
```
