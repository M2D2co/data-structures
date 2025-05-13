class GraphNode<T> {
  private data: T;
  private neighbors: GraphNode<T>[];

  constructor(data: T) {
    this.data = data;
    this.neighbors = [];
  }

  addNeighbor(child: GraphNode<T>): void {
    this.neighbors.push(child);
  }
}


class Graph<T> {
  nodes: GraphNode<T>[];

  constructor() {
    this.nodes = [];
  }

  addNode(value: any) {
    const node = new GraphNode<T>(value);
    this.nodes.push(node);
  }

  addEdge(source: GraphNode<T>, destination: GraphNode<T>) {
    source.addNeighbor(destination);
    destination.addNeighbor(source);
  }
}
