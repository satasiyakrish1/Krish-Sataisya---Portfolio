if( navigator.userAgent.indexOf("Firefox") > -1) alert("Please consider using chrome/edge for better performance, firefox is slow for some reason :(");

class Complex {

    constructor(re, im) {

        this.re = re;
        this.im = im;
    }

    arg() {

        return Math.atan2(this.im, this.re);
    }

    mod() {

        return Math.sqrt(this.re*this.re + this.im*this.im);
    }
}

function comExp(x) {

    // e^(ix)
    return new Complex(Math.cos(x), Math.sin(x));
}

function comAdd(z1, z2) {

    // z1+z2
    return new Complex(z1.re+z2.re, z1.im+z2.im);
}

function comSub(z1, z2) {

    // z1-z2
    return new Complex(z1.re-z2.re, z1.im-z2.im);
}

function comMul(z1, z2) {

    // z1*z2
    return new Complex(z1.re*z2.re-z1.im*z2.im, z1.re*z2.im+z1.im*z2.re);
}

function comDiv(z1, z2) {

    // z1/z2
    var denominator = z2.re*z2.re + z2.im*z2.im;
    return new Complex((z1.re*z2.re+z1.im*z2.im)/denominator, (z1.im*z2.im-z1.re*z2.re)/denominator);
}

function comScale(z1, s) {

    // z1*s
    return new Complex(z1.re*s, z1.im*s);
}


class Matrix {

    constructor(rows, cols) {

        this.r = rows;
        this.c = cols;
        this.l = rows*cols;
        this.data = new Array(rows*cols).fill(0);
    }

    static from( data ) {

        const rows   = data.length;
        const cols   = data[0].length;
        const length = rows * cols;

        const temp = new Matrix( rows, cols );
        temp.data = data.flat();

        return temp;
    }

    index(row, col) {

        return row*this.c + col;
    }

    set(row, col, value) {

        this.data[row*this.c + col] = value;
    }

    get(row, col) {

        return this.data[row*this.c + col];
    }

    getRow( row ) {

        return this.data.slice( row*this.c, (row+1)*this.c );
    }

    T() {

        // returns transpose as new matrix

        // create new array to fill with transposed elements
        var temp = new Matrix(this.c, this.r);

        // set indices
        var i=0;
        var j=0;

        for(var t=0; t<this.l; ++t) {

            // set element in temp matrix
            temp.data[t] = this.data[j*this.c + i];

            // update indices
            ++j;

            if(j==temp.c) {

                ++i;
                j = 0;
            }
        }

        return temp;
    }

    det() {

        // find the determinant of matrix - must be square

        // temporary variable to store output
        var temp = 0;

        // if its a 2x2 matrix, return the determinant directly
        if(this.r == 2 && this.c == 2) {

            return this.data[0] * this.data[3] - this.data[1] * this.data[2];
        }

        // loop over first row, recursively calling det on the minors
        for(var t=0; t<this.c; ++t) {

            temp += (-t%2 * 2 + 1) * this.data[t] * (this.minor(0, t)).det();
        }

        return temp;
    }

    inv() {

        // invert matrix - square matrices only
        var temp = new Matrix(this.r, this.c);
        var transpose = this.T();
        var determinant = this.det();

        // if its a 2x2 matrix return the inverse
        if(this.r == 2 && this.c == 2) {

            temp.data[0] =   1/determinant * this.data[3];
            temp.data[1] = - 1/determinant * this.data[1];
            temp.data[2] = - 1/determinant * this.data[2];
            temp.data[3] =   1/determinant * this.data[0];

            return temp;
        }

        for(var t=0; t<this.l; ++t) {

            temp.data[t] = ( (t + (this.c%2==0 ? Math.floor(t/this.c) : 0))%2 * -2 + 1 )/determinant * transpose.minor(Math.floor(t/this.c)%this.r, t%this.c).det();
        }

        return temp;
    }

    invf() {

        // const I = Matrix.identity()
    }

    plu() {

        // lu of 3x3

        let u1 = this.data[0];
        let u2 = this.data[1];
        let u3 = this.data[2];
        let l1 = 1;
        let l4 = this.data[3] / u1;
        let l7 = this.data[6] / u1;

        let u4 = 0;
        let u5 = this.data[4] - u2 * l4;
        let u6 = this.data[5] - u3 * l4;
        let l2 = 0;
        let l5 = 1;
        let l8 = ( this.data[7] - u2 * l4 ) / u5;

        let u7 = 0;
        let u8 = 0;
        let u9 = this.data[8];
        let l3 = 0;
        let l6 = 0;
        let l9 = 1;

        console.log( l1, l2, l3 )
        console.log( l4, l5, l6 )
        console.log( l7, l8, l9 )
        console.log()
        console.log( u1, u2, u3 )
        console.log( u4, u5, u6 )
        console.log( u7, u8, u9 )
    }

    minor(r1, c1) {

        // temporary matrix to store result
        var temp = new Matrix(this.r-1, this.c-1);

        // index of current element in the minor matrix
        var im = 0;

        // iterate over elements of temp matrix
        for(var t=0; t<temp.l; ++t, ++im) {

            // skip if im is inside the crossed out row/column
            while(im%this.c == c1 || Math.floor(im/this.c)%this.r == r1) {

                ++im;
            }

            temp.data[t] = this.data[im];
        }

        return temp;
    }
}

function matMul(M1, M2) {

    // multiply 2 matrices and return new matrix

    // initialise result matrix
    var temp = new Matrix(M1.r, M2.c);

    // indices of entry in result matrix
    var i = 0;
    var j = 0;

    for(var t=0; t<temp.l; ++t) {

        // sum for entry in result matrix
        var sum = 0;

        // calculate entry
        for(var k=0; k<M2.r; k++) {

            sum += M1.data[i*M1.c + k] * M2.data[k*M2.c + j];
        }

        // assign entry to value of sum
        temp.data[t] = sum;

        // update indices
        ++j;

        if(j==temp.c) {

            ++i;
            j = 0;
        }
    }

    return temp;
}






// Oscar Saharoy 2021

const sum = (arr, f = x => x ) => arr.reduce( (acc, v) => acc + f(v), 0 ); 
const sf3 = x => x.toPrecision(3);

function linearRegression() {

    // y = ax+b

    // find a and b to minimise square residuals of dataset
    const sx  = sum( dataPoints, p => p.x       );
    const sx2 = sum( dataPoints, p => p.x ** 2  );
    const sy  = sum( dataPoints, p => p.y       );
    const sxy = sum( dataPoints, p => p.x * p.y );
    
    const N = dataPoints.length;
    const a = (sxy/sx - sy/N) / (sx2/sx - sx/N);
    const b = sxy/sx - a*sx2/sx;

    // set curve function and point function
    curveFunction = x => a*x + b;
    pointFunction = p => true;

    // set equation display and code boxes
    codeString = `${ sf3(a) } * ${ variableName } + ${ sf3(b) }`.replace("+ -", "- ");

    codeboxes.forEach( box => box.value = codeString );
}

function powerlawRegression() {

    // y = px^b

    // filter datapoints - only x>0 and y>0 allowed
    const powerlawPoints = dataPoints.filter( p => p.x > 0 && p.y > 0 );

    // find a and b to minimise square residuals of dataset
    const slnx    = sum( powerlawPoints, p => Math.log(p.x)                 );
    const slnx2   = sum( powerlawPoints, p => Math.log(p.x) ** 2            );
    const slny    = sum( powerlawPoints, p => Math.log(p.y)                 );
    const slnxlny = sum( powerlawPoints, p => Math.log(p.x) * Math.log(p.y) );
    const N       = powerlawPoints.length;

    let b = ( slnxlny/slnx - slny/N ) / ( slnx2/slnx - slnx/N );
    let a = Math.exp( slnxlny/slnx - b*slnx2/slnx );

    // set curve function and point function
    curveFunction = x => a * x ** b;
    pointFunction = p => p.x > 0 && p.y > 0;

    // get stringw which contain the code for the function
    const codeString1 = `${sf3(a)} * ${ variableName } ** ${ sf3(b) }`;
    const codeString2 = `${sf3(a)} * pow( ${ variableName }, ${ sf3(b) } )`;

    // set code boxes
    codeboxes[0].value = codeString1;
    codeboxes[1].value = codeString2;
    codeboxes[2].value = codeString2.replace( "pow", "Math.Pow" );
    codeboxes[3].value = codeString1;
    codeboxes[4].value = codeString2;
}

function exponentialRegression() {

    // y = ab^x

    // get points above 0
    let exponentialPoints = dataPoints.filter( p => p.y > 0 );

    // find a and b to minimise square residuals of dataset
    const sx    = sum( exponentialPoints, p => p.x                 );
    const sx2   = sum( exponentialPoints, p => p.x ** 2            );
    const slny  = sum( exponentialPoints, p => Math.log(p.y)       );
    const sxlny = sum( exponentialPoints, p => p.x * Math.log(p.y) );
    const N     = exponentialPoints.length;

    // calculate a and b
    const b = Math.exp( (slny - N*sxlny/sx) / (sx - N*sx2/sx) );
    const a = Math.exp( slny/N - Math.log(b)*sx/N );

    // set curve function & point function
    curveFunction = x => a * b ** x;
    pointFunction = p => p.y > 0;

    // set equation display and code boxes
    const codeString1 = `${ sf3(a) } * ${ sf3(b) } ** ${ variableName }`;
    const codeString2 = `${ sf3(a) } * pow( ${ sf3(b) }, ${ variableName } )`;

    codeboxes[0].value = codeString1;
    codeboxes[1].value = codeString2;
    codeboxes[2].value = codeString2.replace( "pow", "Math.Pow" );
    codeboxes[3].value = codeString1;
    codeboxes[4].value = codeString2;
}

function bellcurveRegression() {

    // y = ab^-(x^2)

    // get points above 0
    let bellcurvePoints = dataPoints.filter( p => p.y > 0 );

    // find a and b to minimise square residuals of dataset
    const sx2    = sum( bellcurvePoints, p => p.x ** 2                );
    const sx4    = sum( bellcurvePoints, p => p.x ** 4                );
    const slny   = sum( bellcurvePoints, p => Math.log(p.y)           );
    const sx2lny = sum( bellcurvePoints, p => p.x **2 * Math.log(p.y) );
    const N      = bellcurvePoints.length;

    const lnb = (sx2lny - slny*sx2/N) / (sx2*sx2/N - sx4);
    const lna = slny/N + sx2*lnb/N;
    const a   = Math.exp(lna);
    const b   = Math.exp(lnb);

    // set curve function & point function
    curveFunction = x => a * b ** -(x*x);
    pointFunction = p => p.y > 0;

    // get strings to put into the codeboxes
    const codeString1 = `${ sf3(a) } * ${ sf3(b) } ** -(${ variableName }*${ variableName })`;
    const codeString2 = `${ sf3(a) } * pow( ${ sf3(b) }, -(${ variableName }*${ variableName }) )`;

    codeboxes[0].value = codeString1;
    codeboxes[1].value = codeString2;
    codeboxes[2].value = codeString2.replace( "pow", "Math.Pow" );
    codeboxes[3].value = codeString1;
    codeboxes[4].value = codeString2;
}

function polynomialRegression(order) {

    // y = c[0] + c[1]x + c[2]x^2 + c[3]x^3 ...

    // initialise variables and matrices
    let n = dataPoints.length;

    let x  = math.zeros(order+1, n);
    let y  = math.zeros(n, 1);

    // populate matrices

    // loop over first row in x to fill it
    for(let i=0; i<order+1; ++i) {

        // loop over dataPoints to set each value in x and y
        for(let p=0; p<dataPoints.length; ++p) {

            let xiToPower = Math.pow(dataPoints[p].x, i);

            x._data[i][p] = xiToPower;
            y._data[p][0] = dataPoints[p].y;
        }
    }

    // calculate polynomial coefficients
    let c = math.transpose( math.multiply( math.multiply( math.inv( math.multiply( x, math.transpose(x) ) ), x), y) )._data[0];
    
    // set curve function and point function
    curveFunction = x => c.reduce( (acc, cur, idx) => ( acc + cur*Math.pow(x, idx) ) );
    pointFunction = p => true;

    // set equation display and code boxes
    //⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹
    let powers = ["", "x", "x²", "x³", "x⁴", "x⁵", "x⁶", "x⁷", "x⁸", "x⁹"];
    mathText = c.reduce( (acc, cur, idx) => (acc + (acc=="" ? "y = " : " + ") + cur.toPrecision(3)+powers[idx] ), "" ).replace("+ -", "- ");

    // arrays to help format code
    let powersccpp = ["", "*x", "*x*x", "*pow(x,3)", "*pow(x,4)", "*pow(x,5)", "*pow(x,6)", "*pow(x,7)", "*pow(x,8)", "*pow(x,9)"].map( s => s.replaceAll( "x", variableName) );
    let powerscsh  = ["", "*x", "*x*x", "*Math.Pow(x,3)", "*Math.Pow(x,4)", "*Math.Pow(x,5)", "*Math.Pow(x,6)", "*Math.Pow(x,7)", "*Math.Pow(x,8)", "*Math.Pow(x,9)"].map( s => s.replaceAll( "x", variableName) );
    let powerspy   = ["", "*x", "*x*x", "*x**3", "*x**4", "*x**5", "*x**6", "*x**7", "*x**8", "*x**9"].map( s => s.replaceAll( "x", variableName) );

    // code output function
    outputCode = (c_arr, powerslang) => (c_arr.reduce( (acc, cur, idx) => (acc + (acc=="" ? "" : " + ") + cur.toPrecision(3)+powerslang[idx] ), "" ).replace("+ -", "- "));

    codeboxes[0].value = outputCode(c, powerspy  ).replace("+ -", "- ");
    codeboxes[1].value = outputCode(c, powersccpp).replace("+ -", "- ");
    codeboxes[2].value = outputCode(c, powerscsh ).replace("+ -", "- ");
    codeboxes[3].value = outputCode(c, powerspy  ).replace("+ -", "- ");
    codeboxes[4].value = outputCode(c, powersccpp).replace("+ -", "- ");
}


function fourierSeries(startX, endX, maxFreq) {

    // make sure we have the limits the right way around
    [startX, endX] = [Math.min( startX, endX ), Math.max( startX, endX )];

    // period is the length of 1 complete cycle
    let period = endX - startX;

    // get sorted list of points within the target period
    let fourierPoints = dataPoints.filter( (point) => (point.x >= startX && point.x <= startX+period) );
    fourierPoints.sort( (a,b) => (a.x < b.x ? -1 : 1) );

    if( !fourierPoints.length ) return;

    // add extra point onto the end of the sequence to make function loop smoothly
    fourierPoints.push(new vec2(fourierPoints[0].x+period, fourierPoints[0].y));

    // array of fourier coefficients
    let c = new Array(maxFreq*2+1);

    // loop over frequency components
    for(let freq=-maxFreq; freq<=maxFreq; ++freq) {

        // calulate fourier coefficient as value of integral
        let integral = new Complex(0, 0);

        for(let i=0; i<fourierPoints.length-1; ++i) {

            // setup some variables
            const x_a = fourierPoints[i].x;
            const y_a = fourierPoints[i].y;
            const x_b = fourierPoints[i+1].x;
            const y_b = fourierPoints[i+1].y;

            // line is the interpolation function between the 2 points
            const grad = (y_b-y_a)/(x_b-x_a);
            const line = (x) => (grad*(x-x_a) + y_a);

            let u = 0;

            // increment value of integral
            if(freq != 0) {

                const freq2pi = 2*freq*Math.PI/period;

                u = comAdd(
                        comSub(
                            comMul(
                                new Complex(0, y_b / freq2pi),
                                comExp(-freq2pi*x_b)
                            ), 
                            comMul(
                                new Complex(0, y_a / freq2pi),
                                comExp(-freq2pi*x_a)
                            )
                        ),
                        comScale(
                            comSub(
                                comExp(-freq2pi*x_b), 
                                comExp(-freq2pi*x_a)
                            ),
                            grad/(freq2pi*freq2pi)
                        )
                    );
            }
            else {
                u = new Complex(grad/2 * (x_b*x_b - x_a*x_a) + (y_a - grad*x_a) * (x_b - x_a), 0);
            }

            // increment integral
            integral = comAdd(integral, u);
        }

        // set value in c
        c[freq+maxFreq] = integral;
    }

    // set curve function & point funtion
    const fourierFunction = (x) => (c.reduce( (acc, cur, idx) => ( acc + comMul(cur, comExp(2*Math.PI*(idx-maxFreq)*x/period)).re ), 0 )/period );
    curveFunction = fourierFunction;
    pointFunction = (point) => (point.x >= startX && point.x <= startX+period);

    // get positive frequencies
    cpos = c.slice(maxFreq);

    // variables to help format code
    let cosccpp = " * cos(M_PI*";
    let coscsh  = " * Math.Cos(Math.PI*";
    let cosjs   = " * Math.cos(Math.PI*";
    let cospy   = " * math.cos(math.pi*";
    let coshlsl = " * cos(pi*";

    // code ouput function
    outputCode = (c_arr, coslang) => (c_arr.reduce( (acc, cur, idx) => (acc + (acc=="" ? (cur.mod()/period).toPrecision(3) : " + "+(cur.mod()*2/period).toPrecision(3)) + (acc=="" ? "" : coslang+(2*idx/period).toPrecision(3)+"*x + "+cur.arg().toPrecision(3)+")") ), "" ));

    codeboxes[0].value = outputCode(cpos, cosjs  ).replaceAll("x", variableName).replaceAll("+ -", "- ");
    codeboxes[1].value = outputCode(cpos, cosccpp).replaceAll("x", variableName).replaceAll("+ -", "- ");
    codeboxes[2].value = outputCode(cpos, coscsh ).replaceAll("x", variableName).replaceAll("+ -", "- ");
    codeboxes[3].value = outputCode(cpos, cospy  ).replaceAll("x", variableName).replaceAll("+ -", "- ");
    codeboxes[4].value = outputCode(cpos, coshlsl).replaceAll("x", variableName).replaceAll("+ -", "- ");
}







// Oscar Saharoy 2021

class vec2 {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    setxy(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    setv(vec) {
        this.x = vec.x;
        this.y = vec.y;
        return this;
    }

    incBy(vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }

    decBy(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }

    scaleBy(S) {
        this.x *= S;
        this.y *= S;
        return this;
    }

    mulBy(vec) {
        this.x *= vec.x;
        this.y *= vec.y;
        return this;
    }

    divBy(vec) {
        this.x /= vec.x;
        this.y /= vec.y;
        return this;
    }

    clamp(lower, upper) {
        this.x = this.x < lower.x ? lower.x : this.x > upper.x ? upper.x : this.x;
        this.y = this.y < lower.y ? lower.y : this.y > upper.y ? upper.y : this.y;
        return this;
    }

    abs() {
        this.x = Math.abs(this.x);
        this.y = Math.abs(this.y);
        return this;
    }

    setIfGreater(vec) {
        this.x = Math.max( this.x, vec.x );
        this.y = Math.max( this.y, vec.y );
        return this;
    }

    setIfLess(vec) {
        this.x = Math.min( this.x, vec.x );
        this.y = Math.min( this.y, vec.y );
        return this;
    }

    static clone(vec) {
        return new vec2(vec.x, vec.y);
    }

    static fromPolar(r, theta) {
        return new vec2( Math.cos(theta), Math.sin(theta) ).scaleBy( r );
    }

    static get zero() {
        return new vec2( 0, 0 );
    }

    static get notANumber() {
        return new vec2( NaN, NaN );
    }

    static get infinity() {
        return new vec2( Infinity, Infinity );
    }

    static get minusInfinity() {
        return new vec2( -Infinity, -Infinity );
    }

    static isNaN(vec) {
        return isNaN( vec.x ) || isNaN( vec.y );
    }

    static add(vecA, vecB) {
        return new vec2( vecA.x + vecB.x, vecA.y + vecB.y );
    }

    static sub(vecA, vecB) {
        return new vec2( vecA.x - vecB.x, vecA.y - vecB.y );
    }

    static mul(vecA, vecB) {
        return new vec2( vecA.x * vecB.x, vecA.y * vecB.y );
    }

    static div(vecA, vecB) {
        return new vec2( vecA.x / vecB.x, vecA.y / vecB.y );
    }

    static neg(vec) {
        return new vec2( -vec.x, -vec.y );
    }

    static scale(vec, S) {
        return new vec2( S * vec.x, S * vec.y );
    }

    static sqrDist(vecA, vecB) {
        return ( vecA.x - vecB.x ) ** 2 + ( vecA.y - vecB.y ) ** 2;
    }

    static dist(vecA, vecB) {
        return this.sqrDist(vecA, vecB) ** 0.5;
    }

    static taxiDist(vecA, vecB) {
        return Math.abs( vecA.x - vecB.x ) + Math.abs( vecA.y - vecB.y ); 
    }

    static grad(vec) {
        return vec.y / vec.x;
    }

    static lerp(vecA, vecB, d) {
        return vec2.scale(vecB, d).incBy( vec2.scale(vecA, 1-d) );
    }

    static dot(vecA, vecB) {
        return vecA.x * vecB.x + vecA.y * vecB.y;
    }
}



class Graph {

    constructor(graphID) {

        // get canvas and drawing context
        this.canvas = document.getElementById(graphID);
        this.ctx    = this.canvas.getContext("2d");

        // declare properties
        this.boundingRect         = null;
        this.canvasSize           = vec2.zero;
        this.canvasToGraphScale   = new vec2(0.01, -0.01); // 2d scale factor that converts from canvas space to graph space
        this.originOffset         = vec2.zero; // offset of the origin from top corner of canvas in graph space
        this.originFixedInCanvas  = vec2.zero;
        this.mousePos             = vec2.zero; // position of the mouse hovering over the graph
        this.preventPanning       = false;
        this.dpr                  = window.devicePixelRatio || 1;
        this.rem = parseInt( getComputedStyle(document.documentElement).fontSize )
                 * window.devicePixelRatio || 1;
        
        // arrays of pointer positions and active pointers
        this.activePointers   = [];
        this.pointerPositions = {};

        // mean pointer position and that of last frame
        this.meanPointer     = vec2.zero;
        this.lastMeanPointer = vec2.zero;

        // spread of pointers and that of last frame
        this.pointerSpread     = 0;
        this.lastPointerSpread = 0;

        // we need to keep a bool telling us to
        // skip a zoom/pan frame when a new pointer is added
        this.skip1Frame = false;

        // get mean and spread of a list of pointer positions
        this.getMeanPointer   = arr => arr.reduce( (acc, val) => acc.incBy( vec2.scale(val, 1/arr.length ) ), vec2.zero );
        this.getPointerSpread = (positions, mean) => positions.reduce( (acc, val) => acc + ((val.x-mean.x)**2 + (val.y-mean.y)**2)**0.5, 0 );
 
        // data variables 
        this.points = [];

        // user-changeable drawing functions
        this.curveDrawingFunction = graphjsDefaultDrawCurve;
        this.userDrawFunctions    = [];

        // functions to  translate from graph space to canvas space
        this.canvasToGraph  = point  => vec2.mul( point, this.canvasToGraphScale ).decBy( this.originOffset );
        this.graphToCanvas  = point  => vec2.add( point, this.originOffset ).divBy( this.canvasToGraphScale );

        this.graphToCanvasX = graphX => (graphX + this.originOffset.x) / this.canvasToGraphScale.x;
        this.graphToCanvasY = graphY => (graphY + this.originOffset.y) / this.canvasToGraphScale.y;

        // returns true if a point is inside the graph viewport
        this.insideViewport = point  => point.x > - this.originOffset.x
                                     && point.y < - this.originOffset.y
                                     && point.x < this.canvasSize.x * this.canvasToGraphScale.x - this.originOffset.x 
                                     && point.y > this.canvasSize.y * this.canvasToGraphScale.y - this.originOffset.y;

        // function to determine if we must draw a point or if we can skip it to save performance
        this.mustDrawPoint = (p, i, arr) => this.insideViewport( p ) 
                                         || i != 0            && this.insideViewport( arr[i-1] )
                                         || i != arr.length-1 && this.insideViewport( arr[i+1] );

        // initial canvas resize, center canvas & draw
        this.resize();
        this.centre = vec2.zero;
        this.redraw();

        // link all the events to their callbacks
        new ResizeObserver( () => this.resize() ).observe( this.canvas );

        this.canvas.addEventListener( "mousemove",    event => this.mousemove(   event ) );
        this.canvas.addEventListener( "pointerdown",  event => this.pointerdown( event ) );
        this.canvas.addEventListener( "pointerup",    event => this.pointerup(   event ) );
        this.canvas.addEventListener( "pointerleave", event => this.pointerup(   event ) );
        this.canvas.addEventListener( "pointermove",  event => this.pointermove( event ) );
        this.canvas.addEventListener( "wheel",        event => this.wheel(       event ) ); 

        // pipe event listeners on the graph through to the canvas
        this.addEventListener = (...args) => this.canvas.addEventListener(...args);
    }

    resize() {

        // document rem may have changed
        this.rem = parseInt( getComputedStyle(document.documentElement).fontSize )
                 * window.devicePixelRatio || 1;

        // set canvas to have 1:1 canvas pixel to screen pixel ratio
        this.boundingRect = this.canvas.getBoundingClientRect();
        this.canvasSize.setxy( this.boundingRect.width * this.dpr, this.boundingRect.height * this.dpr );

        this.canvas.width  = this.canvasSize.x;
        this.canvas.height = this.canvasSize.y;
    }
    
    mousemove( event ) {
        
        // set the mouse pos for the numbers in the top right
        this.mousePos.setv( this.canvasToGraph( new vec2( event.offsetX * this.dpr, event.offsetY * this.dpr ) ) );
    }

    setPointerMeanAndSpread() {

        // get al the pointer vectors
        const pointers     = Object.values( this.pointerPositions );

        // use fnuctions to find mean and spread
        this.meanPointer   = this.getMeanPointer( pointers );
        this.pointerSpread = this.getPointerSpread( pointers, this.meanPointer );
        
        // get the mean pointer in graph space
        this.meanPointerOnGraph = this.canvasToGraph( this.meanPointer.scaleBy( this.dpr ) );
    }

    pointerdown( event ) {

        event.preventDefault();

        // if the event's target element is in the preventDrag array then return
        //if( preventDrag.reduce( (result, elm) => result || elm == event.target, false) ) return;

        // otherwise add the pointer to pointerPositions and activePointers
        this.pointerPositions[event.pointerId] = new vec2(event.offsetX, event.offsetY);
        this.activePointers.push( event.pointerId );

        // set the mean pointer position so that we have access to the new meanPionter straight away
        this.setPointerMeanAndSpread()

        // we added a new pointer so skip a frame to prevent
        // a step change in pan position
        this.skip1Frame = true;
    }

    pointermove( event ) {

        event.preventDefault();

        // if this pointer isn't an active pointer
        // (pointerdown occured over a preventDrag element)
        // then do nothing
        if( !this.activePointers.includes(event.pointerId) ) return;

        // keep track of the pointer pos
        this.pointerPositions[event.pointerId] = new vec2(event.offsetX, event.offsetY);
    }

    pointerup( event ) {

        // remove the pointer from active pointers and pointerPositions
        // (does nothing if it wasnt in them)
        this.activePointers = this.activePointers.filter( id => id != event.pointerId );
        delete this.pointerPositions[event.pointerId];

        // we lost a pointer so skip a frame to prevent
        // a step change in pan position
        this.skip1Frame = true;
    }

    panAndZoom() {

        // theres no active pointers do nothing
        if( !this.activePointers.length ) return;

        // set the mean pointer and spread
        this.setPointerMeanAndSpread()
        
        // we have to skip a frame when we change number of pointers to avoid a jump
        // also don't pan/zoom if this.preventPanning is true
        if( !this.skip1Frame && !this.preventPanning ) {
            
            // increment the originOffset by the mean pointer movement, scaled to graph space
            this.originOffset.incBy( vec2.sub( this.meanPointer, this.lastMeanPointer ).mulBy( this.canvasToGraphScale ) );
            
            // call the wheel function with a constructed event to zoom with pinch
            this.wheel( { offsetX: this.meanPointer.x / this.dpr,
                          offsetY: this.meanPointer.y / this.dpr,                
                          deltaY: (this.lastPointerSpread - this.pointerSpread) * 2.7 } );
        }

        // update the vars to prepare for the next frame
        this.lastMeanPointer.setv( this.meanPointer );
        this.lastPointerSpread = this.pointerSpread;
        this.skip1Frame        = false;
    }

    wheel( event ) {

        // prevent browser from doing anything
        event.preventDefault?.();

        // adjust the zoom level and update the container
        const zoomAmount = event.deltaY / 600;

        // use ctrl and shift keys to decide whether to zoom in x or y directions or both
        if( !event.ctrlKey ) {

            // have to shift the origin to make the mouse the centre of enlargement
            this.originOffset.x       += event.offsetX * this.dpr * zoomAmount * this.canvasToGraphScale.x;
            this.canvasToGraphScale.x *= 1 + zoomAmount;
        }

        if( !event.shiftKey ) {

            this.originOffset.y       += event.offsetY * this.dpr * zoomAmount * this.canvasToGraphScale.y;
            this.canvasToGraphScale.y *= 1 + zoomAmount;
        }
    }

    redraw( once = false ) {

        // clear canvas
        this.ctx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
        
        // run pan and zoom function
        this.panAndZoom();

        // set origin position fixed inside the canvas
        this.originFixedInCanvas.setv( 
            vec2.div( this.originOffset, this.canvasToGraphScale ).clamp( new vec2(0, 0), this.canvasSize ) );

        // get positions of gridlines on graph
        const gridlinePositions = this.getGridlinePositions();

        // map points to canvas space - used for drawing them
        const pointsOnCanvas = this.points.filter( this.mustDrawPoint ).map( this.graphToCanvas );

        // draw the graph elements
        this.drawAxes();
        this.drawGridlines(gridlinePositions);
        this.curveDrawingFunction( pointsOnCanvas, this );
        this.drawLabels(gridlinePositions);
        this.drawMousePosition();

        // call each of the user functions
        this.userDrawFunctions.forEach( func => func(this) );
        
        // continue draw loop
        if( !once ) requestAnimationFrame( () => this.redraw() );
    }

    getGridlinePositions() {

        // object to hold the gridlines in x and y directions
        const gridlines = { x: [], y: [] };

        // size of the graph in graph space, compensated for size on screen
        const graphSize = vec2.mul( this.canvasSize, this.canvasToGraphScale ).abs();
        const compensatedSize = vec2.div(graphSize, this.canvasSize ).scaleBy( this.rem * 45 );

        // calculate space between the gridlines in graph units
        let gridlineSpacingX = Math.pow( 10, Math.floor( Math.log10(compensatedSize.x) ) );
        let gridlineSpacingY = Math.pow( 10, Math.floor( Math.log10(compensatedSize.y) ) );

        // adjust the gridline spacing to get a nice number of gridlines
        if      ( compensatedSize.x / gridlineSpacingX < 2.5 ) gridlineSpacingX /= 5;
        else if ( compensatedSize.x / gridlineSpacingX < 6   ) gridlineSpacingX /= 2;
        if      ( compensatedSize.y / gridlineSpacingY < 2.5 ) gridlineSpacingY /= 5;
        else if ( compensatedSize.y / gridlineSpacingY < 6   ) gridlineSpacingY /= 2;

        // calculate positions of the most negative gridline in graph space
        const firstGridlineX = Math.floor( - this.originOffset.x                / gridlineSpacingX ) * gridlineSpacingX;
        const firstGridlineY = Math.floor( -(this.originOffset.y + graphSize.y) / gridlineSpacingY ) * gridlineSpacingY;

        // keep adding grid lines at a spacing of gridlineSpacing until the whole graph is covered
        for(let x = firstGridlineX; x < firstGridlineX + graphSize.x + gridlineSpacingX; x += gridlineSpacingX)
            gridlines.x.push(x);

        // no gridline at y=0 to avoid drawing the 0 label twice
        for(let y = firstGridlineY; y < firstGridlineY + graphSize.y + gridlineSpacingY; y += gridlineSpacingY)
            if( Math.abs(y) > 1e-9 ) gridlines.y.push(y);

        return gridlines;
    }

    drawAxes() {

        // draw the x and y axes

        this.ctx.lineWidth   = 3 * this.dpr;
        this.ctx.strokeStyle = "black";

        this.drawVerticalLine(   this.originFixedInCanvas.x );
        this.drawHorizontalLine( this.originFixedInCanvas.y );
    }

    drawGridlines(gridlinePositions) {

        // change style for gridlines
        this.ctx.lineWidth   = 1 * this.dpr;
        this.ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";

        gridlinePositions.x.forEach( x => this.drawVerticalLine(   this.graphToCanvasX( x ) ) );
        gridlinePositions.y.forEach( y => this.drawHorizontalLine( this.graphToCanvasY( y ) ) );
    }

    drawLabels(gridlinePositions) {

        // change style for labels
        this.ctx.fillStyle = "black";
        this.ctx.font      = `500 ${this.rem}px Roboto Mono`;

        gridlinePositions.x.forEach( x => this.drawXLabel( x ) );
        gridlinePositions.y.forEach( y => this.drawYLabel( y ) );
    }

    drawMousePosition() {

        this.ctx.font = `500 ${this.rem*1.2}px Roboto Mono`;

        // get text from mousePos
        const text = this.mousePos.x.toPrecision(3) + ", " + this.mousePos.y.toPrecision(3);
        const textWidth = this.ctx.measureText(text).width;

        // clear box behind
        this.ctx.clearRect(0, 0, this.rem/2+textWidth, this.rem*1.8);

        // draw numbers
        this.ctx.fillStyle = "black";
        this.ctx.fillText(text, this.rem/2, this.rem*1.55);
    }

    drawVerticalLine(canvasX) {

        // draws a line down the canvas at a given y coordinate
        this.ctx.beginPath();
        this.ctx.moveTo(canvasX,                 0);
        this.ctx.lineTo(canvasX, this.canvasSize.y);
        this.ctx.stroke();
    }

    drawHorizontalLine(canvasY) {

        // draws a line across the canvas at a given y coordinate
        this.ctx.beginPath();
        this.ctx.moveTo(                0, canvasY);
        this.ctx.lineTo(this.canvasSize.x, canvasY);
        this.ctx.stroke();
    }

    drawXLabel(graphX) {

        // get coordinates of label in canvas space
        const canvasX = this.graphToCanvasX( graphX );
        const canvasY = this.originFixedInCanvas.y;

        // draw number
        const text       = graphjsFormatNumber(graphX);
        const textHeight = this.rem;
        const textX      = canvasX + textHeight / 2;
        const textY      = canvasY-textHeight*2 < 0 ? textHeight*1.5 : canvasY-textHeight/2;

        this.ctx.fillText( text, textX, textY );
    }

    drawYLabel(graphY) {

        // get y coordinate of label in canvas space
        const canvasY = this.graphToCanvasY( graphY );
        const canvasX = this.originFixedInCanvas.x;

        // draw number
        const text       = graphjsFormatNumber(graphY);
        const textHeight = this.rem;
        const textWidth  = this.ctx.measureText( text ).width;
        const textX      = canvasX+textHeight+textWidth > this.canvasSize.x ? this.canvasSize.x-textHeight/2-textWidth : canvasX+textHeight/2;
        const textY      = canvasY - textHeight / 2;

        this.ctx.fillText( text, textX, textY );
    }

    // public functions

    addPoint(point) {

        this.points.push( point );
    }

    addPoints(points) {

        points.forEach( point => this.points.push(point) );
    }

    removePoint(point) {

        this.points = this.points.filter( x => x != point );
    }

    clearPoints() {

        this.points = [];
    }

    get centre() {

        return vec2.mul( this.canvasSize, this.canvasToGraphScale ).scaleBy( 0.5 ).decBy( this.originOffset );
    }

    set centre( point ) {

        // set the centre of the graph to be point
        this.originOffset.setv( vec2.mul(this.canvasSize, this.canvasToGraphScale).scaleBy( 0.5 ).decBy( point ) );
    }

    get xRange() {

        // get the min and max x coords of the graph
        const minX = - this.originOffset.x;
        const maxX = this.canvasSize.x * this.canvasToGraphScale.x - this.originOffset.x;

        return [minX, maxX];
    }

    set xRange( [minX, maxX] ) {

        // set the graph to range from minX to maxX on x axis
        this.canvasToGraphScale.x = (maxX - minX) / this.canvasSize.x;
        this.originOffset.x       = (this.canvasSize.x * this.canvasToGraphScale.x - minX - maxX) / 2;
    }

    get yRange() {

        // get the min and max y coords of the graph
        const minX = - this.originOffset.y;
        const maxX = -this.canvasSize.x * this.canvasToGraphScale.x - this.originOffset.y;

        return [minX, maxX];
    }

    set yRange( [minY, maxY] ) {

        // set the graph to range from minY to maxY on y axis
        this.canvasToGraphScale.y = (maxY - minY) / -this.canvasSize.y;
        this.originOffset.y       = (this.canvasSize.y * this.canvasToGraphScale.y - minY - maxY) / 2;
    }

    set range( [bottomLeft, topRight] ) {

        // set graph range using 2 points
        this.canvasToGraphScale   = vec2.sub( topRight, bottomLeft ).divBy( this.canvasSize ).mulBy( new vec2(1, -1) );
        this.originOffset         = vec2.mul(this.canvasSize, this.canvasToGraphScale).decBy( bottomLeft ).decBy( topRight ).scaleBy( 0.5 );
    }
}


// default curve drawing function
function graphjsDefaultDrawCurve(points, graph) {

    if( !points.length ) return;

    // set style
    graph.ctx.strokeStyle = "#54f330";
    graph.ctx.lineWidth   = 2.5 * graph.dpr;

    graph.ctx.beginPath();
    graph.ctx.moveTo( points[0].x, points[0].y );

    // keep track of the last point that we drew
    let lastDrawnPoint = points[0];

    for(point of points) {

        // for each next point, only draw it if its more than 3 pixels away from the last one we drew
        if( vec2.taxiDist(point, lastDrawnPoint) < 3 ) continue;

        lastDrawnPoint = point;
        graph.ctx.lineTo( point.x, point.y );
    }

    graph.ctx.stroke();
}

// number formatting function
function graphjsFormatNumber(x) {

    // if x is basically 0 then just return that
    if( Math.abs(x) < 1e-10 ) return "0";
    
    // use x.toString unless number is very small or very big then use toExponential
    let text = x.toString();
    if( Math.abs(x) > 10000 || Math.abs(x) < 0.001 ) text = x.toExponential();

    let fixed;

    // fix numbers like 57.5699999999995e+12
    const ninesRegexMatch = text.match( /(9|\.|\-){4,}(\d)*/ );

    if( ninesRegexMatch ) {

        let incrementPower = false;

        // if start of string is nines (9.999932) then handle this case
        if( ninesRegexMatch.index == 0 ) {

            fixed = x>0 ? "1" : "-1";
            incrementPower = true;
        }

        else {
            
            // extract correct part of string (except digit to be incremented)
            fixed = text.substring(0, ninesRegexMatch.index-1);

            // increment last correct digit and add it on to make up for nines
            fixed += parseInt( text[ninesRegexMatch.index-1] ) + 1;
        }

        // match suffix of the form e+xxx and add it back on
        const suffix = text.match( /e(\+|\-)(\d+)/ );
        
        if( suffix ) {

            let power = parseInt( suffix[2] )

            if(incrementPower) power += Math.abs(x) > 1 ? 1 : -1;

            fixed += "e" + suffix[1] + power;
        }

        return fixed;
    }

    // fix numbers like 5.560000000001e-5
    const zerosRegexMatch = text.match( /(0|\.){5,}(\d)+/ );

    if( zerosRegexMatch ) {

        // extract correct part of string
        fixed = text.substring(0, zerosRegexMatch.index);

        // match suffix of the form e+xxx and add it back on
        const suffix = text.match( /e(\+|\-)(\d+)/ );

        if(suffix) fixed += suffix[0];

        return fixed;
    }

    return text;
}






// Oscar Saharoy 2021

class DropDown {

    constructor( dropdownId, initial=0 ) {

        // get all the elements (this.entries is an array containing all the entries)
        this.outerDiv = document.querySelector( `#${dropdownId}` );
        this.innerDiv = document.querySelector( `#${dropdownId} .inner` );
        this.entries  = Array.from( document.querySelectorAll( `#${dropdownId} p` ) );

        // state for the DropDown - the selected element is stored in this.selected
        // and this.open is true when the dropdown is open
        // this.ignoreFocus deactivates the focus event callbacks
        this.selected    = this.entries[initial];
        this.isOpen      = true;
        this.ignoreFocus = false;

        // close the menu to start with - hide all but selected element
        this.close();

        // add event listeners
        this.outerDiv.addEventListener( "pointerdown", event => this.pointerdown(event)  );
        this.outerDiv.addEventListener( "focusout",    event => this.focusout(event)     );
        this.outerDiv.addEventListener( "focusin",     event => this.focusin(event)      );

        this.entries.forEach( elm => elm.addEventListener( "pointerdown", () => this.clickEntry( event, elm ) ) );
        this.entries.forEach( elm => elm.addEventListener( "keydown",  event => this.keydown(    event, elm ) ) );

        // pipe addEventListener through to the outer div
        this.addEventListener = (...args) => this.outerDiv.addEventListener(...args);

        // also have an onchange event which can be assigned a function
        this.onchange = idx => {};
    }

    close() {

        // menu is now closed
        this.isOpen = false;

        // hide all elements that aren't this.selected
        this.entries.forEach( elm => elm.className = elm == this.selected ? "" : "hidden" );
    }

    open() {

        // menu is now open
        this.isOpen = true;

        // make all elements visible
        this.entries.forEach( elm => elm.className = "" );
    }

    ignoreFocusWhileClosing() {

        // set ignoreFocus to true and set it back to false after the time it takes
        // to close the dropdown
        this.ignoreFocus = true;
        setTimeout( () => this.ignoreFocus = false, 220 );
    }

    focusin( event ) {

        // when one of the p elements inside gets focused, open the dropdown
        // unless this.ignoreFocus is true then do nothing
        if( !this.ignoreFocus ) this.open();
    }


    focusout( event ) {

        // when one of the p elements inside loses focus, close the dropdown
        // unless this.ignoreFocus is true then do nothing
        if( !this.ignoreFocus ) this.close();
    }

    pointerdown( event ) {

        // if the menu is closed open it or if it is open close it 
        if( this.isOpen ) {

            // need to ignore focus events while the menu is closing or it will reopen
            this.ignoreFocusWhileClosing();

            this.close();
        }

        else this.open();
    }

    keydown( event, elm = null ) {

        // only act if its a space or enter keypress
        if( event.key != " " && event.key != "Enter" ) return;

        // avoid browser scrolling down on space
        event.preventDefault();

        // select the focused element and close the dropdown
        this.selected = elm;
        this.close();

        // call the onchange function
        this.onchange( this.index )
    }

    clickEntry( event, elm = null ) {

        if( !this.isOpen ) return;

        // when one of the entries is clicked, make it the selected one
        this.selected = elm;

        // call the onchange function
        this.onchange( this.index )
    }

    get value() {

        return this.selected.innerHTML;
    }

    get index() {

        return this.entries.indexOf( this.selected );
    }

    set index( value ) {

        // set this.selected by the values provided
        this.selected = this.entries[value];

        // hide all elements that aren't this.selected
        this.entries.forEach( elm => elm.className = elm == this.selected ? "" : "hidden" );
    }
}






// Oscar Saharoy 2021

class Slider {
    
    constructor( sliderId, pId = null, inputId = null ) {
        
        // get the slider and throw an error if it wasn't found
        this.slider = document.getElementById( sliderId );
        if( !this.slider ) throw `Slider instatiated with invalid slider id: "${sliderId}"`;
        
        // get the p and throw an error if it wasn't found
        this.p = pId ? document.getElementById( pId ) : null;
        if( pId && !this.p ) throw `Slider instatiated with invalid p id: "${pId}"`;
        
        // get the input and throw an error if it wasn't found
        this.input = inputId ? document.getElementById( inputId ) : null;
        if( inputId && !this.input ) throw `Slider instatiated with invalid input id: "${inputId}"`;
        
        // this._value is the current value of the slider
        this._value = this.sliderValue;
        
        // connect the callback to be called when the slider is changed
        this.slider.addEventListener( "input", () => this.sliderChange() );

        // if there's an input connect it to its callback
        this.input?.addEventListener( "input", () => this.inputChange()  );
        
        // decimal places of the slider
        this.decimalPlaces = this.slider.step.split(".")[1]?.length || 0;

        // method that can be overridden to change number formatting
        this.format = x => x.toString();

        // add an onchange callback that can be set by the user
        this.onchange = () => {};
    }

    get sliderValue() {

        return +this.slider.value;
    }

    set sliderValue( newValue ) {

        this.slider.value = newValue;
    }

    sliderChange() {

        // get the value from the slider
        this._value = this.sliderValue;

        // put the value into the p or input if they were supplied
        if( this.p     ) this.p.innerHTML = this.format( this._value );
        if( this.input ) this.input.value = this.format( this._value );

        this.onchange();
    }

    inputChange() {

        // get the value from the input
        this._value = +this.input.value;

        // put the value into the slider
        this.sliderValue = this._value;

        this.onchange();
    }

    get value() {

        return this._value;
    }

    set value( newValue ) {

        this._value = newValue;
        
        // put the value into the slider
        this.sliderValue = this._value;

        // put the value into the p or input if they were supplied
        if( this.p )
            this.p.innerHTML = this.format( this._value );
        
        if( this.input && this.input != document.activeElement )
            this.input.value = this.format( this._value );
    }
}

class LogSlider extends Slider {
    
    constructor( sliderId, numberId = null) {
        
        super( sliderId, numberId );
        
        // cache the initial value of the slider
        const initialValue = this.value;
        
        // setup min and max values from the slider
        this.max = this.slider.max;
        this.min = this.slider.min;
        
        // add a method to get the slider's value adjusted for log
        this.getValue = () => Math.exp( this.slider.value );
        
        // make the slider step small as log space is much smaller than actual space
        this.slider.setAttribute( "step", "0.00001" );
        
        // map the slider to log space
        this.slider.max = Math.log(this.max);
        this.slider.min = Math.log(this.min);
   
        this.round = (x, n) => x > 1 ? Math.round(x) : +x.toPrecision(n);
        
        this.onSliderChange = () => {
            
            this.value = this.getValue();
            this.number.innerHTML = this.round( this.value, 2 );
        };
        
        // forces a value into the slider (self.value may not equal self.slider.value)
        this.forceValue = newValue => {
            
            this.slider.value = Math.log(newValue);
            this.value = newValue;
            this.number.innerHTML = this.round(newValue);
        };
        
        // map the initial slider value into log space
        this.slider.value = Math.log( initialValue );
    }
}

class InfiniteRangeSlider extends Slider {

    constructor( sliderId, pId = null, inputId = null) {
        
        super( sliderId, pId, inputId );

        // slider goes between almost -1 and 1
        this.slider.max =  1 - 1e-7;
        this.slider.min = -1 + 1e-7;

        // set slider step very small to allow good control
        this.slider.setAttribute( "step", "0.000000001" );

        // set the format function to use 3sf
        this.format = x => x.toPrecision(3);
    }

    get sliderValue() {

        const x = +this.slider.value;
        return - 50 / (x**3-1) - 50 / (x**3+1)
    }

    set sliderValue( newValue ) {

        const y = newValue;
        this.slider.value = Math.cbrt( ((y**2 + 50**2)**0.5) / y - 50 / y );
    }
}





// Oscar Saharoy 2021

// return the first point found close to mousePos
const areClose = (point1, point2) => vec2.sqrDist( graph.graphToCanvas(point1), graph.graphToCanvas(point2) ) < graph.rem*45
const getClosePoint = mousePos => dataPoints.reduce( (acc, val) => acc ? acc : areClose(mousePos, val) ? val : null, null );

// some variables used for interaction with the graph
let draggedPoint    = null;
let pointerHasMoved = false;
let originalPos     = vec2.zero;

function mousemove() {

    // when the mouse moves over the graph, set the cursor to indicate the action

    // if we are close to a point, use the move cursor
    if( getClosePoint( graph.mousePos ) ) graph.canvas.style.cursor = "move";

    // if we are panning the graph, use the grab cursor
    else if( graph.activePointers.length == 1 ) graph.canvas.style.cursor = "grabbing";

    // otherwise the normal cursor
    else graph.canvas.style.cursor = "auto";
}

function pointerdown() {

    // if we don't only have one active pointer we don't want to be dragging a point
    if( graph.activePointers.length != 1 ) {

        // this setting of the variables prevents any of the points being adjusted
        closePoint           = null; 
        graph.preventPanning = false;
        pointerHasMoved      = true;

        return;
    }

    // try to get a close point
    draggedPoint = getClosePoint( graph.meanPointerOnGraph );

    // preventPanning will be true if draggedPoint isn't null
    graph.preventPanning = !!draggedPoint;

    // pointer has not yet moved
    pointerHasMoved = false;

    // record the original position
    originalPos.setv( graph.meanPointer );
}

function pointermove() {

    // only do something if there are active pointers on the graph
    if( !graph.activePointers.length ) return;

    // pointer has moved
    pointerHasMoved |= vec2.dist( originalPos, graph.meanPointer ) > 3 * graph.dpr;

    if( draggedPoint ) {

        // if we are dragging a point then set it to be at the pointer's position
        draggedPoint.setv( graph.meanPointerOnGraph );
    
        // update the model
        updateModel();
    }
}

function pointerup() {

    // if the pointer has moved there's nothing we need to do
    if( pointerHasMoved || !graph.meanPointerOnGraph ) return;

    // if we are dragging a point but haven't moved the cursor, delete that point
    if( draggedPoint )
        dataPoints = dataPoints.filter( point => point != draggedPoint );

    // if we aren't dragging a point but we havent moved the cursor, add a point there
    if( !draggedPoint )
        dataPoints.push( vec2.clone( graph.meanPointerOnGraph ) );    

    // update the model
    updateModel();
}


function drawPoint(graph, colour, pos) {

    // setup ctx style
    graph.ctx.strokeStyle = colour;
    graph.ctx.lineWidth   = 0.19 * graph.rem;
    graph.ctx.fillStyle   = "white";

    // draw circle at pos
    graph.ctx.beginPath();
    graph.ctx.arc( pos.x, pos.y, graph.rem/2, 0, 6.28 );
    graph.ctx.fill();
    graph.ctx.stroke();
}

function drawPoints( graph ) {
 
    // loop over and draw each point
    for(let point of dataPoints) {

        // use pointFunction to determine point colour
        let pointColour = pointFunction(point) ? "#8decd3" : "#bbbbbb";
        drawPoint( graph, pointColour, graph.graphToCanvas( point ) );
    }
}

function drawCurve(graph) {

    // get the visible range of x values on the graph
    const [minX, maxX] = graph.xRange;
    const width = maxX - minX;

    // set style for curve
    graph.ctx.strokeStyle = "#8decd3";
    graph.ctx.lineWidth   = 0.19 * graph.rem;
    graph.ctx.beginPath();

    // loop over the range of x currently visible and plot the curve at a spacing of 3*dpr pixels
    for( let x = minX; x < maxX; x += 3*graph.dpr * graph.canvasToGraphScale.x ) {

        // get y coord at that value of x
        let canvasY = graph.graphToCanvasY( curveFunction(x) );

        // limit y coord so that stroke works properly
        canvasY = canvasY > graph.canvasSize.y+10 ? graph.canvasSize.y+10 : canvasY < -10 ? -10 : canvasY;

        graph.ctx.lineTo( graph.graphToCanvasX(x), canvasY );
    }

    graph.ctx.stroke();
}

// put the graph object into global namespace
const graph = new Graph("graphjs");

// centre the graph but after all the other code runs
// setTimeout( () => graph.centre = new vec2(0, 1), 0 );

// add our draw functions and callbacks onto the graph
graph.userDrawFunctions.push( drawCurve, drawPoints );
graph.addEventListener( "mousemove"  , mousemove    );
graph.addEventListener( "pointerdown", pointerdown  );
graph.addEventListener( "pointermove", pointermove  );
graph.addEventListener( "pointerup"  , pointerup    );





// Oscar Saharoy 2021

// get the central div
const central = document.querySelector( ".central" );

// get the divider between the graph and UI
const dragHandle = document.querySelector( "#drag-handle" );
let dragHandleClicked = false;
let dragHandleX = 0;

const rem = parseInt( getComputedStyle(document.documentElement).fontSize );

// event listeners to enable dragging of the divider
dragHandle.addEventListener( "pointerdown",  e => dragHandleClicked = true  );
document.addEventListener(   "pointerup",    e => dragHandleClicked = false );
document.addEventListener(   "pointerleave", e => dragHandleClicked = false );
document.addEventListener(   "pointermove",  e => dragHandleX = e.clientX   );


function dragHandleLoop() {

    requestAnimationFrame( dragHandleLoop );
    
    if( !window.matchMedia('screen and (min-width:1200px)').matches && central.style.gridTemplateColumns ) 
        central.style.gridTemplateColumns = "";

    // only act if the dragHandle is being dragged
    if( !dragHandleClicked ) return;

    // calculate ui width from mouse position
    const uiWidth = Math.max( dragHandleX-rem, 30*rem );

    // change the central div's column template - change amount of screen that is graph/UI
    central.style.gridTemplateColumns = `${uiWidth}px 2rem auto`;
}

dragHandleLoop();






// Oscar Saharoy 2021

function updatePoints() {
    
    // get the string in the textarea, split it into vec2s and set datapoints to that

    // array of lines of the text that contain a digit character
    const lines  = pointsTextarea.value.split( /\r?\n/ ).filter( s => s.match( /\d/) );

    // split each line by the comma in the middle, parse each as a float,
    // correct NaNs to 0, and take only 2 numbers from each line
    let xyValues = lines.map( point => point.split(",")
                                            .map( parseFloat )
                                            .map( v => isNaN(v) ? 0 : v )
                                            .slice(0, 2) );

    // get rid of lines where only 1 number was found
    // and map float arrays to vectors
    dataPoints   = xyValues.filter( point => point.length == 2 )
                           .map( xy => new vec2(xy[0], xy[1]) );

    // update the model
    regressionFunction();
}

// get the points text area and add callbacks
const pointsTextarea = document.querySelector("#points-textarea");

const openTextarea  = () => { pointsTextarea.style.height   = "25rem";
                              pointsTextarea.style.minWidth = "11rem"; };

const closeTextarea = () => { pointsTextarea.style.height   = "100%" ;
                              pointsTextarea.style.minWidth = ""     ; };

pointsTextarea.addEventListener( "focusin" , openTextarea  );
pointsTextarea.addEventListener( "focusout", closeTextarea );
pointsTextarea.addEventListener( "input"   , updatePoints  );




// Oscar Saharoy 2021

const variableNameInput = document.getElementById( "variable-name-input" );
var variableName = "x";

variableNameInput.addEventListener( "input", handleNameInput );

function handleNameInput() {

    // when the variable name changes, update the global variable
    // variableName and update the model

    variableName = variableNameInput.value;
    updateModel();
}






// Oscar Saharoy 2021

// get the js code box and add the callback
const jsBox = document.getElementById( "code-js" );
jsBox.addEventListener( "input"   , handleJSCodeInput );
jsBox.addEventListener( "focusin" , () => customRegressionPaused = true  );
jsBox.addEventListener( "focusout", () => customRegressionPaused = false );

function setErrorBorder( box ) {

    // set the box's border to be red
    box.style.boxShadow = "0 0 0 2px #F84444";
    box.style.border    = "3px solid #F84444";
}

function unsetErrorBorder( box ) {

    // unset the box's red border if there is one
    box.style.boxShadow = "";
    box.style.border    = "";
}

function handleJSCodeInput() {

    // get the user's function string
    const funcString = jsBox.value;

    // try to set the curve function to that
    try {

        let detectedVariableName;

        // regex that matches if the current variableName is in the string
        const matchVariableName = new RegExp( `(^|\\W)${variableName}(\\W|$)`,"" );

        // if the user is using the current variableName then use that
        if( funcString.match( matchVariableName ) ) detectedVariableName = variableName;

        // otherwise detect the variable name being used in the function
        else detectedVariableName = funcString.match( /[a-zA-Z_$][a-zA-Z_$0-9]*/ )[0];

        // eval the function definition and put the result into evaluatedFunction
        const evaluatedFunction = eval( `${detectedVariableName} => ${funcString}` );

        // check if calling the function causes an error
        evaluatedFunction(0);

        // if its all good put the function into curveFunction
        curveFunction = evaluatedFunction;

        // worked so clear the error outline
        unsetErrorBorder( jsBox );

    }
    catch( err ) {

        // console log the error
        console.log(err);

        // give the code box a red highlight to show the error
        setErrorBorder( jsBox );

        return;
    }
}






// Oscar Saharoy 2021

// initial values for customFunc and nVars
let customFunc = x => beta[0] / (beta[1] + beta[2] * beta[3] ** x) + beta[4];
let nVars = 5;

// function iteration variables
const varNames  = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ];
const varRegexs = varNames.map( c => new RegExp( `\\b${c}\\b`, "g" ) );
let beta        = Array(10).fill(1);
let customRegressionEnabled = false;
let customRegressionPaused  = false;


// get the formula textarea and add callback
const customOptions  = document.querySelector( "#custom-options"  );
const customTexterea = document.querySelector( "#custom-textarea" );
customTexterea.addEventListener( "input", customChange );


// make an array of all the variable sliders and those in use
const sliders = [];
let activeSliders = [];

// and an array of the divs that hold them
const sliderDivs = [];

// get the slider template
const sliderTemplate = document.querySelector( "#var-slider-template" );

// make a slider for each variable letter and add it into the dom
for( let c of varNames ) {

    // get the slider holder and the elements inside
    const sliderHolderDiv = sliderTemplate.cloneNode( true );
    const heading     = sliderHolderDiv.querySelector( "h4"          );
    const sliderInput = sliderHolderDiv.querySelector( ".var-slider" );
    const numberInput = sliderHolderDiv.querySelector( ".var-number" );

    // add the div into the DOM
    customOptions.appendChild( sliderHolderDiv );
    sliderDivs.push( sliderHolderDiv );

    // set the heading and IDs of elements
    heading.innerHTML = c;
    sliderInput.id    = `${c}-slider`;
    numberInput.id    = `${c}-number`;

    // make an infiniteRangeSlider and push it to the sliders array
    const slider      = new InfiniteRangeSlider( `${c}-slider`, null, `${c}-number` );
    sliders.push( slider );

    // setup all the sliders to pause the regression when they are used
    slider.slider.addEventListener( "pointerdown", () => customRegressionPaused = true  );
    slider.slider.addEventListener( "pointerup"  , () => customRegressionPaused = false );
    slider.slider.addEventListener( "touchend"   , () => customRegressionPaused = false );
}

// get rid of the template slider holder
sliderTemplate.remove();

// get the var reset button and add it into the DOM
const resetButton = document.querySelector( "#reset-vars" );
resetButton.remove();
customOptions.appendChild( resetButton );

// when reset is pressed, map beta array to small random numbers
resetButton.onpointerdown = () => beta = beta.map( v => Math.random() * 2 - 1 ); 


function customChange() {

    // handle a change to the custom function formula being used

    // get the user's function string
    let funcString = customTexterea.value;

    // try to set the curve function to that
    try {

        let detectedVariableName;

        // regex that matches if the current variableName is in the string
        const matchVariableName = new RegExp( `(^|\\W)${variableName}(\\W|$)`,"" );

        // if the user is using the current variableName then use that
        if( funcString.match( matchVariableName ) ) detectedVariableName = variableName;

        // otherwise try to detect the variable name being used in the function
        else detectedVariableName = funcString.match( /(?:[^\w.](?!\bMath\.\w+\b))(([l-zA-Z_$](?=$| |\W))|([a-zA-Z_$][a-zA-Z0-9_$]+))/ )[1];

        // reset some vars to be set now
        nVars = 0;
        activeSliders = [];

        for( let i = 0; i < varNames.length; ++i ) {

            // get the regex for this var
            const re = varRegexs[i];

            // if the var is found in the function string then
            if( funcString.match( re ) ) {

                // replace it with an element of the beta array
                funcString = funcString.replaceAll( re, `beta[${nVars}]` );
                
                // show the slider for this variable and add its slider to activsSliders
                sliderDivs[i].style.display = "grid";
                activeSliders.push( sliders[i] );

                // we have found 1 more var
                ++nVars;
            }

            else {

                // for vars that aren't in the function, hide the slider
                sliderDivs[i].style.display = "none";
            }
        }

        // eval the function definition and put the result into evaluatedFunction
        const evaluatedFunction = eval( `${detectedVariableName} => ${funcString}` );

        // check if calling the function causes an error
        evaluatedFunction(0);

        // if its all good put the function into customFunc
        customFunc = evaluatedFunction;

        // worked so clear the error outline
        unsetErrorBorder( customTexterea );

        // link each slider to change its variable
        activeSliders.forEach( (elm, i) => elm.onchange = () => beta[i] = elm.value );
    }

    catch( err ) {

        // console log the error
        console.log(err);

        // give the code box a red highlight to show the error
        setErrorBorder( customTexterea );
    }
}

function customRegressionLoop() {

    // run this again next frame
    requestAnimationFrame( () => customRegressionLoop() );

    // only run when customRegressionEnabled is true and custom regression isnt paused
    if( !customRegressionEnabled || customRegressionPaused ) return;

    // only do 8000 inner loops to keep performance
    let innerLoops = 0;
    while( innerLoops < 8000 && nVars && dataPoints.length ) {

        // array containing sum of partial derivatives of error with respect to each parameter
        let dbeta = new Array(nVars).fill(0);

        // loop over datapoints and find partial derivative of error from that point with respect to each parameter
        for( let i = 0; i < dataPoints.length; ++i ) {

            let xi = dataPoints[i].x;
            let yi = dataPoints[i].y;

            for( let j = 0; j < nVars; ++j ) {

                // fill the right entry of dbeta using 2 sided difference approximation
                // todo automatic differentiation

                beta[j] += 1e-4;

                const forward = customFunc(xi);

                beta[j] -= 2e-4;

                const backward = customFunc(xi);

                beta[j] += 1e-4;

                // increment partial derivative
                dbeta[j] += ( (yi - forward) ** 2  - (yi - backward) ** 2 ) / 2e-4;

                ++innerLoops;
            }
        }

        // change the parameters proportional to their derivative
        dbeta.forEach( (d,i) => beta[i] -= 1e-4 * d );
    }

    // if any of the vars became NaN then change them back to a random number between 0 and 1
    beta = beta.map( x => isNaN(x) ? Math.random() : x );

    // set the curveFunction to the optimised function
    curveFunction = customFunc;
    pointFunction = () => true;

    // get the function string from the customTextarea
    let funcString = customFunc.toString();

    // sub in the calculated values of the variables
    for( let i = 0; i < nVars; ++i )
        funcString = funcString.replaceAll( new RegExp( `beta\\[${i}\\]`, "g" ), beta[i].toPrecision(3) );

    // gets the string from the => onwards
    funcString = funcString.match( /(?:=> )(.*)/ )[1];

    // put that into the JS box after some formatting
    codeboxes[0].value = funcString.replaceAll( / *\+ *- */g, " - " ).replaceAll( / +/g, " " );

    // set the values of all the var sliders
    activeSliders.forEach( (elm, i) => elm.value = beta[i] );
}

customChange();
customRegressionLoop();






// Oscar Saharoy 2021

// todo: fix graph zooming, add sharpness to fourier fit, improve performance in custom regression

// points on the graph
let dataPoints = [ new vec2(-1.5, 3), new vec2(-0.25, 0.7), new vec2(0.4, 2), new vec2(3, 0.1), new vec2(0.8, 0.8) ];

// initial function values
let curveFunction  = x => NaN;
let pointFunction  = point => true;
let regressionFunction = () => {};

// get the help button and text
const helpButton = document.querySelector( "#help-button" );
const helpText   = document.querySelector( "#help-text"   );

// state for the help button
let helpClicked = false;
let helpFlipped = false;

helpButton.onclick = () => {

    // alternate the animation frames of the button
    helpClicked ^= 1;
    helpFlipped ^= 1 & helpClicked;

    // set the next frame of the button
    const nextClass      = helpFlipped ? "kf3" : "kf1";
    helpButton.className = helpClicked ? "kf2" : nextClass;

    // show or hide help text
    helpClicked ? helpText.classList.remove("hide") : helpText.classList.add("hide");
}


// get the sliders
const polynomialTerms     = new Slider( "polynomial-terms-slider", null, "polynomial-terms-number" );
const fourierTerms        = new Slider( "fourier-terms-slider"   , null, "fourier-terms-number"    );
const fourierStart        = new Slider( "fourier-start-slider"   , null, "fourier-start-number"    );
const fourierEnd          = new Slider( "fourier-end-slider"     , null, "fourier-end-number"      );
// const fourierSharpness    = new Slider( "fourier-sharp-slider"   , null, "fourier-sharp-number"    );

// link all to cause model update
polynomialTerms.onchange  = updateModel;
fourierTerms.onchange     = updateModel;
fourierStart.onchange     = updateModel;
fourierEnd.onchange       = updateModel;
// fourierSharpness.onchange = updateModel;


const regressionFunctions = [() => (linearRegression()),
                             () => (polynomialRegression( parseFloat(polynomialTerms.value) )),
                             () => (powerlawRegression()),
                             () => (bellcurveRegression()),
                             () => (exponentialRegression()),
                             () => (fourierSeries(parseFloat(fourierStart.value), parseFloat(fourierEnd.value), parseFloat(fourierTerms.value))),
                             () => {} ];

const equationLabels = Array.from( document.querySelectorAll( ".equation-label" ) );
const codeboxes      = Array.from( document.getElementsByClassName("codebox") ); 

const options        = Array.from( document.querySelectorAll( ".options" ) );
const optionsDict    = { "polynomial":     document.getElementById("polynomial-options"   ),
                         "fourier series": document.getElementById("fourierseries-options"),
                         "custom":         document.getElementById("custom-options"       ) }

const nonJsOptions   = Array.from( document.querySelectorAll( ".codes *" ) ).slice(3);
const jsCodeLabel    = document.querySelector( "#js-code-label" );

const functionDropdown = new DropDown("function-dropdown");
functionDropdown.onchange = equationSelect;

function equationSelect( idx ) {
    
    // show equation for current fit
    equationLabels.forEach( (elm, i) => elm.style.display = i==idx ? "grid" : "none" );

    // set only the currently applicable options to show
    options.forEach( elm => elm.style.display = "none" );
    if( optionsDict[ functionDropdown.value ] )
        optionsDict[ functionDropdown.value ].style.display = "grid";

    // set regression mode and update regression model
    regressionFunction = regressionFunctions[ idx ];
    updateModel();

    // handle the custom regression case
    customRegressionEnabled = functionDropdown.value == "custom";

    // if we are usiung custom regression we only want to show the JS box
    nonJsOptions.forEach( elm => elm.style.display = customRegressionEnabled ? "none" : "grid" );
    jsCodeLabel.innerHTML = customRegressionEnabled ? "JavaScript" : "JavaScript<br>(editable)";
}

function updateModel() {

    // fill the points textarea with the positions of the points
    pointsTextarea.value = dataPoints.reduce(
        (text, vec) => text + `${vec.x.toPrecision(3)}, ${vec.y.toPrecision(3)}\n`, "" );

    // run the regression function
    regressionFunction();

    // in case the JS code box has an error clear it
    unsetErrorBorder( jsBox );
}

equationSelect(0);