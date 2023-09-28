/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    

            let adj = Array(n).fill().map(()=> Array());
            let visited = Array(n).fill(false);
            for(let i=0; i < edges.length;i++){
                    let [u,v] = edges[i];
                    adj[u].push(v);
                    adj[v].push(u);
                }

            function BFS(v){
                   visited[v] = true; 
                
                for(let i=0; i < adj[v].length;i++){
                       if(!visited[adj[v][i]])
                         BFS(adj[v][i]);
                

            }

         }
         visited[source] = true;
             BFS(source);

        return visited[destination];

};