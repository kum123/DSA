/**
 * @param {number} capacity
 */
class LRUCache {

    constructor(size){
        this.capacity = size;
        this.cache = new Map();
    }
    put(key,value){
        if(this.cache.has(key)){
            this.cache.delete(key);
        }
        if(this.capacity == this.cache.size){
            this.cache.delete(this.first());
        }
        this.cache.set(key,value);
    }
    first(){
        return this.cache.keys().next().value
    }
    get(key){
        let value = this.cache.get(key);
        if(this.cache.has(key)){
            this.cache.delete(key);
            this.cache.set(key,value);
            return value;
        }
        return -1
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */