const str = 'foo["bar"].baz';
const replacedStr = str.replace(/([*.+?\[\]])/g, '\\$1');
console.log(replacedStr); // foo\\["bar"]\\["baz"]
