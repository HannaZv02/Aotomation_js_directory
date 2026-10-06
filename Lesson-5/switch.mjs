let type;

const fruitName = 'apple';
switch (fruitName) {
	case 'kiwi':
    case 'apple':
    case 'orange':    
		type = 'Fruit';
        break;
	case 'cucumber':
		type = 'Vegetable';
        break;
	default:
		type = 'Unknown';
}
console.log(type);
// case это тоже самое что ИЛИ  (||)

if (fruitName === 'apple' || fruitName === 'orange' || fruitName === 'kiwi'){
    type = 'Fruit';
}
console.log (type);