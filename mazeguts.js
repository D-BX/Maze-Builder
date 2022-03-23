function Cell(i, j) {
  //create the cells or 'mazeguts'
  this.i = i; 
  this.j = j; 

  this.walls = [true, true, true, true, true, true];
  this.visited = false;

  this.checkNeighbors = function() {
    var neighbors = [];

    var N = grid[index(i-1, j)];
    var NE = grid[index(i-(j+1)%2, j+1)];
    var SE = grid[index(i+j%2, j+1)];
    var S = grid[index(i+1, j)];
    var SW = grid[index(i+j%2, j-1)];
    var NW = grid[index(i-(j+1)%2, j-1)];

    if (N && !N.visited) {
      neighbors.push(N);
    }
    if (NE && !NE.visited) {
      neighbors.push(NE);
    }
    if (SE && !SE.visited) {
      neighbors.push(SE);
    }
    if (S && !S.visited) {
      neighbors.push(S);
    }
    if (SW && !SW.visited) {
      neighbors.push(SW);
    }
    if (NW && !NW.visited) {
      neighbors.push(NW);
    }

    if (neighbors.length > 0) {
      var r = floor(random(0, neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }
  
  this.highlight = function() {
    var x = this.j*(3/2)*w;
    var y = (2*this.i + (this.j)%2)*(sqrt(3)/2)*w;
    noStroke();
    fill(255, 0, 0, 100);
    beginShape();
      vertex(x+w/2, y);
      vertex(x+3*w/2, y);
      vertex(x+2*w, y+sqrt(3)/2*w);
      vertex(x+3*w/2, y+sqrt(3)*w);
      vertex(x+w/2, y+sqrt(3)*w);
      vertex(x, y+sqrt(3)/2*w);
    endShape(CLOSE);
  }

  this.show = function() {
    var x = this.j*(3/2)*w;
    var y = (2*this.i + (this.j)%2)*(sqrt(3)/2)*w;
    stroke(92);
    strokeWeight(4);
    if (this.walls[0]) {
      line(x+w/2, y+0, x+3*w/2, y+0);
    }
    if (this.walls[1]) {
      line(x+3*w/2, y+0, x+2*w, y+sqrt(3)*w/2);
    }
    if (this.walls[2]) {
      line(x+2*w, y+sqrt(3)*w/2, x+3*w/2, y+sqrt(3)*w);
    }
    if (this.walls[3]) {
      line(x+3*w/2, y+sqrt(3)*w, x+w/2, y+sqrt(3)*w);
    }
    if (this.walls[4]) {
      line(x+w/2, y+sqrt(3)*w, x+0, y+sqrt(3)*w/2);
    }
    if (this.walls[5]) {
      line(x+0, y+sqrt(3)*w/2, x+w/2, y+0);
    }

    if (this.visited) {
      noStroke();
      fill(255, 85, 5, 100);
      beginShape();
        vertex(x+w/2, y);
        vertex(x+3*w/2, y);
        vertex(x+2*w, y+sqrt(3)/2*w);
        vertex(x+3*w/2, y+sqrt(3)*w);
        vertex(x+w/2, y+sqrt(3)*w);
        vertex(x, y+sqrt(3)/2*w);
      endShape(CLOSE);
    }
  }
}
