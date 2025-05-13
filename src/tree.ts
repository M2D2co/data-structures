class TreeNode<T> {
  private data: T;
  private children: TreeNode<T>[];

  constructor(data: T) {
    this.data = data;
    this.children = [];
  }

  addChild(child: TreeNode<T>): void {
    this.children.push(child);
  }
}
