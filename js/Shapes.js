function Cell(r,c,img){//专门定义每个格子数据结构的类型
	this.r=r;//格子所在的行下标
	this.c=c;//格子所在的列下标
	this.img=img; //格子所用的图片
}
function Shape(cells){//专门定义所有图形的公共类型
	this.cells=cells;
}
//在Shape类型的原型中，集中定义所有图形共有的数据和方法
//专门保存每种图形的格子使用的图片路径
Shape.prototype.IMGS={
	I:"img/I.png",
	O:"img/O.png",
	T:"img/T.png",
	Z:"img/Z.png"
};
Shape.prototype.moveDown=function(){//当前图形下落一格
	//this指当前调用moveDown方法的shape对象
	//遍历当前图形的每个格
	for(var i=0;i<this.cells.length;i++){
		this.cells[i].r+=1;//	将每个格的r+=1
	}
};
Shape.prototype.moveLeft=function(){//当前图形左移一格
	//遍历当前图形的每个格
	//	将每个格的c-1
	for(var i=0;i<this.cells.length;i++){
		this.cells[i].c-=1;
	}
};
Shape.prototype.moveRight=function(){//当前图形右移一格
	//遍历当前图形的每个格
	//	将每个格的c+1
	for(var i=0;i<this.cells.length;i++){
		this.cells[i].c+=1;
	}
};
//创建具体图形类型,继承Shape类型结构以及原型对象：
function T(){//专门描述所有T型图形的数据结构
	Shape.call(this,[//this->正在创建的新对象
		new Cell(0,3,this.IMGS.T),//因为T类型继承了Shape
		new Cell(0,4,this.IMGS.T),
		new Cell(0,5,this.IMGS.T),
		new Cell(1,4,this.IMGS.T),
	]);
}
Object.setPrototypeOf(T.prototype,Shape.prototype);
function O(){//专门描述所有O型图形的数据结构
	Shape.call(this,[//this->正在创建的新对象
		new Cell(0,4,this.IMGS.O),//因为T类型继承了Shape
		new Cell(0,5,this.IMGS.O),
		new Cell(1,4,this.IMGS.O),
		new Cell(1,5,this.IMGS.O),
	]);
}
Object.setPrototypeOf(O.prototype,Shape.prototype);
function I(){//专门描述所有I型图形的数据结构
	Shape.call(this,[//this->正在创建的新对象
		new Cell(0,3,this.IMGS.I),//因为T类型继承了Shape
		new Cell(0,4,this.IMGS.I),
		new Cell(0,5,this.IMGS.I),
		new Cell(0,6,this.IMGS.I),
	]);
}
Object.setPrototypeOf(I.prototype,Shape.prototype);

function Z(){//专门描述所有I型图形的数据结构
	Shape.call(this,[//this->正在创建的新对象
		new Cell(0,3,this.IMGS.Z),//因为T类型继承了Shape
		new Cell(0,4,this.IMGS.Z),
		new Cell(1,4,this.IMGS.Z),
		new Cell(1,5,this.IMGS.Z),
	]);
}
Object.setPrototypeOf(Z.prototype,Shape.prototype);