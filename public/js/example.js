/**
 * 
 */

HashTable.prototype.put = function(key, value) {
	if(this.limit>=this.size) throw 'hash table is full'
	
	var hashedIndex = this.hash(key), squareIndex = 1;
	
	//이차 탐사
	while(this.keys[hashedIndex]!=null) {
		hashedIndex += Math.pow(squareIndex, 2);
		
		hashedIndex = hashedIndex % this.size;
		squareIndex++;
	}
	
	this.keys[hashedIndex] = key;
	this.values[hashedIndex] = value;
	this.limit++;
}

HashTable.prototype.get = function(key) {
	var hashedIndex = this.hash(key), squareIndex = 1;
	
	while(this.keys[hashedIndex]!=key) {
		hashedIndex +=Math.pow(squareIndex, 2);
		
		hashedIndex = hashedIndex % this.size;
		squareIndex++;
	}
	
	
	return this.values[hashedIndex];
}

