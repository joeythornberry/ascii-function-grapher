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
}

export default Window;