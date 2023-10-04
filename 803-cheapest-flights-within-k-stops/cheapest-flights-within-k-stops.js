/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
class MinHeap{

constructor(){

    this.heap = [];
    
}
comparator(a,b){

        return a < b ;
}

pop(){
   let ret = this.heap[0];
    this.heap[0] = this.heap[this.heap.length-1];
    this.recurDown(0);
    return ret; 
}
push(node){
        this.heap.push(node);
        let id = this.heap.length-1;
        let par = Math.floor((id-1)/2);
        while(id > 0 && this.comparator(this.heap[id][1], this.heap[par][1])){
            [this.heap[id],this.heap[par]] = [this.heap[par],this.heap[id]]
            id = Math.floor((id-1)/2);
             par = Math.floor((id-1)/2);
                
        }
    }
recurDown(node){
    let cur = node;
        let l = node * 2 + 1;
        let r = node * 2 + 2;
    if (l < this.heap.length && this.comparator(this.heap[cur][1], this.heap[l][1])) cur = l;
    if (r < this.heap.length && this.comparator(this.heap[cur][1], this.heap[r][1])) cur = r;
    if (cur != node) {
      [this.heap[node], this.heap[cur]] = [this.heap[cur], this.heap[node]];
      this.recurDown(cur);
    }
}
 size() {
    return this.heap.length;
  }
  empty() {
    return this.heap.length == 0;
  }
}
var findCheapestPrice = function(n, flights, src, dst, k) {
    
//         let adj = new Map();

//             for(let i=0; i < flights.length;i++){
                
//                 let [src,dest,price] = flights[i];
//                 if(adj.has(src)) adj.get(src).push([dest,price])
//                 else adj.set(src,[[dest,price]]);
            
//             }
//             let  queue = new MinHeap();
//        queue.push([src,0,-1]);
      
//             let minPrice = Number.MAX_SAFE_INTEGER;
//             let value = 0;
//             while(queue.size() > 0){
//                     let [dest,price,stops] = queue.pop();
//                         if(dst == dest){
//                             return price;
//                         }
//                             if(stops < k){
//                       for(let i=0; i < adj[dest].length;i++){
//                             let [d,p,stp] = adj[dest][i];
//                             queue.push([d,price + p,stops+1]);
//                         }
//                     }
//                 }

//           return -1;


 let dMap = new Map()
    
    for(let x = 0; x< flights.length;x++){
        const [ from , to , price] = flights[x]
        if(dMap.has(from)){
            let theArray = dMap.get(from)
            theArray[to] = price
            dMap.set(from,theArray)
        }else{
            let theArray = new Array(n).fill(-1)
            theArray[from] = 0 
            theArray[to] = price
            dMap.set(from, theArray)
        }
    }
    // Map structure = < nodeIndex, [cost price to directly connect to other node]
    
    //return -1 if there's src node has to edge to other node
    if(!dMap.has(src)) return -1;
    
    //BFS on src path 
    let theQ =[[dMap.get(src),0]]
    let numOfStop=0
    const dist = new Array(n).fill(Infinity);
    let temp = []
    while( numOfStop <= k && theQ.length >0){
        temp = []
        for(let y = 0; y < theQ.length ; y++){
          const [city,cost] = theQ[y]
 
          
          for(let x =0; x<city.length;x++){
                if(city[x] !== 0 && city[x] !== -1){
                    if(city[x] + cost  >= dist[x]) continue;
                    
                    dist[x] = cost + city[x]
                    if(dMap.has(x)){
                        temp.push([ dMap.get(x),cost+city[x]])
                    }

                }
            }
        }


        numOfStop++
        theQ = temp
    }
    return dist[dst] !== Infinity ? dist[dst] : -1
};



