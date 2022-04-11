## I got stuck because of webpack
then I've solved it by following: https://github.com/ChainSafe/web3.js#web3-and-create-react-app

But this shows up :/
````
Compiled with problems:X

ERROR in ./node_modules/framer-motion/dist/es/utils/process.mjs 9:25-32

Module not found: Error: Can't resolve 'process/browser' in '/Users/me/Documents/codix/platzi-punks-interface/node_modules/framer-motion/dist/es/utils'
Did you mean 'browser.js'?
BREAKING CHANGE: The request 'process/browser' failed to resolve only because it was resolved as fully specified
(probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"').
The extension in the request is mandatory for it to be fully specified.
Add the extension to the request.

````
