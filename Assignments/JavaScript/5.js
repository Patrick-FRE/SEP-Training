let text = 'This is a random text';
console.log(text.split(' ').map(a => a.charAt(0).toUpperCase() + a.slice(1)).join(' '));