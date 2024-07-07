/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
  class MinHeap{
    constructor(){
        this.heap = [];
    }
    isEmpty() {
        return this.heap.length ? true : false;
    }
    top() {
        if(this.heap.length > 0) return this.heap[0];
        return undefined;
    }
    push(node){
        this.heap.push(node);
        let id = this.heap.length-1;
        let parent = Math.floor((id-1)/2);
        while( id > 0 && this.heap[id] < this.heap[parent]){
            [this.heap[id],this.heap[parent]] = [this.heap[parent],this.heap[id]];
            id = Math.floor((id-1)/2);
            parent = Math.floor((id-1)/2);
        }
    }
    pop() {
        let item = this.heap[0];
        this.heap[0] =this.heap[this.heap.length-1];
        this.heap.pop();
        this.recurdown(0);
        return item;
    }
    recurdown(index) {
        let l = index * 2 + 1;
        let r = index * 2 + 2;
        let cur = index;
        if( l < this.heap.length && this.heap[cur] > this.heap[l]) cur = l;
        if( r < this.heap.length && this.heap[cur] > this.heap[r]) cur = r;
        if(cur != index){
            [this.heap[cur],this.heap[index]] = [this.heap[index],this.heap[cur]];
            this.recurdown(cur);
        }
    }
    }
var findMedianSortedArrays = function(nums1, nums2) {
    let M = nums1.length;
    let N = nums2.length;
    let pq= new MinHeap();
    for(let i=0; i < nums1.length; i++){
        pq.push(nums1[i])
    }
      for(let j=0; j < nums2.length; j++){
        pq.push(nums2[j])
    }
    let check = N + M;
    let count = -1;
    let mid1,mid2;
    while( pq.isEmpty()){
        count++;
        if( check%2 !== 0 && count == Math.floor(check/2)) {
               return pq.top();
        }
        if( check%2 == 0 && count ==(check/2)-1) {
                mid1 = pq.top();

        }
        if( check%2 == 0 && count == check/2) {
                mid2 = pq.top();
                return (mid1 + mid2) / 2;
                
        }
        pq.pop();
    }
    //return 0.000;

   

};
