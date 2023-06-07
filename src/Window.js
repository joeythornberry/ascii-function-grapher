class Window {
    constructor(Xmin,Xmax,Ymin,Ymax,scale) {
        if(Xmin > Xmax | Ymin > Ymax) {
            throw new Error("invalid parameters for window");
        } else {
            this.Xmin = Xmin;
            this.Xmax = Xmax;
            this.Ymin = Ymin;
            this.Ymax = Ymax;
            this.scale = scale;
        }
    }
     emptyGrid() {
        let grid = [] 
            for(let y = this.Ymin; y < this.Ymax; y++) {
                grid.push([])
                for(let x = this.Xmin; x < this.Xmax; x++) {
                    if(y === 0) {
                        grid[y - this.Ymin].push("-")
                        } else if(x === 0) {
                            grid[y - this.Ymin].push("|")
                        }
                         else { 
                            grid[y - this.Ymin].push("0")
                        }
                    
                     }
                };
                return grid;
            }
    }

export default Window;