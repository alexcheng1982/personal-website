/**
 * @author Cheng Fu
 */

function JSnake() {
	this._model = new JSnakeModel(20, 20);
	this._view = new JSnakeView(this._model, 16, 16);
	this._controller = new JSnakeController(this._model, this._view);
}

JSnake.prototype = {
	startGame : function(speed) {
		this._controller.startGame(speed);
	},
	
	stopGame : function() {
		this._controller.stopGame();
	}
};

var JSnakeConstant = {
	MOVE_DIR :  {
		LEFT: 0,
		UP: 1,
		RIGHT: 2,
		DOWN: 3
	},
	GRID_STATUS: {
		EMPTY: 0,
		PODITE_HEADER: 100,
		PODITE_NORMAL: 101,
		FOOD: 200
	}
};

function JSnakeModel(gridNumX, gridNumY) {
	this._podites = [];
	this.currentPosX = -1;
	this.currentPosY = -1;
	this.currentDirection = -1;
	this.gridNumberX = gridNumX || 0;
	this.gridNumberY = gridNumY || 0;
	this.gridStatus = new Array(this.gridNumberX * this.gridNumberY);
}

JSnakeModel.prototype = {
	MOVE_DIR :  {
		LEFT: 0,
		UP: 1,
		RIGHT: 2,
		DOWN: 3
	},
	Podite : function(posX, posY) {
		this.posX = posX || -1;
		this.posY = posY || -1;
	},
	
	makePodite: function(posX, posY) {
		return new this.Podite(posX, posY);
	},
	reset : function() {
		this._podites = [];
		this.gridStatus = new Array(this.gridNumberX * this.gridNumberY);
	}, 
	grow : function(x, y) {
		var podite = new this.Podite(x, y);
		this._podites.push(podite);
		dojo.publish("SnakeGrowed", [podite]);
	},

	updateGridStatus: function(x, y, status) {
		if (!this.isOutOfBound({x: x, y: y})) {
			this.gridStatus[x + "." + y] = status;
		}
	},
	
	_getGridStatus: function(x, y) {
		if (!this.isOutOfBound({x: x, y: y})) {
			return this.gridStatus[x + "." + y];
		}
		return -1;
	},
	
	isGridFood: function(x, y) {
		return this._getGridStatus(x, y) == JSnakeConstant.GRID_STATUS.FOOD;
	},
	
	createHeader: function() {
		var x = parseInt(Math.random() * this.gridNumberX);
		var y = parseInt(Math.random() * this.gridNumberY);
		this.currentPosX = x;
		this.currentPosY = y;
		var podite = new this.Podite(x, y);
		this._podites.push(podite);
		dojo.publish("SnakeHeaderCreated", [{x : x, y : y}]);
		this.updateGridStatus(x, y, JSnakeConstant.GRID_STATUS.PODITE_HEADER);
	},
	
	isOutOfBound: function(pos) {
		var pos = pos  || this.getTargetPosition();
		if (pos.x < 0 || pos.x >= this.gridNumberX || pos.y < 0 || pos.y >= this.gridNumberY) {
			return true;
		}
		return false;
	},
	
	getTargetPosition: function() {
		switch (this.currentDirection) {
			case JSnakeConstant.MOVE_DIR.LEFT:
				return {x : this.currentPosX - 1, y : this.currentPosY};
			case JSnakeConstant.MOVE_DIR.UP:
				return {x : this.currentPosX, y : this.currentPosY - 1};
			case JSnakeConstant.MOVE_DIR.RIGHT:
				return {x : this.currentPosX + 1, y : this.currentPosY};
			case JSnakeConstant.MOVE_DIR.DOWN:
				return {x : this.currentPosX, y : this.currentPosY + 1};
		}
	}
};

function JSnakeView(model, poditeWidth, poditeHeight) {
	this._snakePodites = [];
	this._model = model;
	this._canvas = $("#canvas");
	var _this = this;
	this._gridWidth = poditeWidth || 16;
	this._gridHeight = poditeHeight || 16;
	$(this._canvas).width(this._model.gridNumberX * this._gridWidth).height(this._model.gridNumberY * this._gridHeight);
	
	dojo.subscribe("SnakeHeaderCreated", this, "onSnakeHeaderCreated");
	dojo.subscribe("FoodCreated", this, "onFoodCreated");
	dojo.subscribe("Moved", this, "onMoved");
	this._foodElements = {};
}

JSnakeView.prototype = {
	reset : function() {
		$(this._canvas).empty();
	},

	onSnakeHeaderCreated: function(pos) {
		var node = this._makeSnakeHeader(pos);
		$(this._canvas).append(node);
	},
	
	onFoodCreated: function(pos) {
		var domNode = this._makeFood(pos);
		if (domNode != null) {
			$(domNode).prependTo(this._canvas);
			this._foodElements[pos.x + "." + pos.y] = domNode;
		}
		
	},
	_makeSnakeHeader: function(pos) {
		var header = $("<div/>").addClass("SnakeHeader");
		var ap = this._calculateActualPos(pos);
		header.css({"left" : ap.x, "top" : ap.y}).width(this._gridWidth).height(this._gridHeight);
		return header;
	},
	_makeSnakePodite: function(podite) {
		var domNode = $("<div/>").addClass("SnakePodite").text("");
		var pos = this._calculatePos(podite);
		domNode.css({"left" : pos.x, "top" : pos.y}).width(this._gridWidth).height(this._gridHeight);
		return domNode;
	},
	_makeFood: function(pos) {
		var x = pos.x || -1;
		var y = pos.y || -1;
		if (x >=0 && y >=0) {
			var domNode = $("<span/>").addClass("Food");
			var ap = this._calculateActualPos(pos);
			domNode.css({"left" : ap.x, "top" : ap.y}).width(this._gridWidth).height(this._gridHeight);
			return domNode;
		}
		return null;
	},
	_calculatePos: function(podite) {
		return {x: podite.posX * this._gridWidth, y: podite.posY * this._gridHeight};
	},
	_calculateActualPos: function(pos) {
		return {x: (pos.x || 0) * this._gridWidth, y: (pos.y || 0) * this._gridHeight};
	},
	onMoved: function(moveMsg) {
		var pos = moveMsg.pos;
		var podites = $("#canvas div");
		var header = podites[0];
		var lastX = $(header).css("left");
		var lastY = $(header).css("top");
		var ap = this._calculateActualPos(pos);
		$(header).css({"left" : ap.x, "top" : ap.y});
		var newPodite = null, inserted = null;
		if (moveMsg.newPodite) {
			newPodite = this._makeSnakePodite(moveMsg.newPodite);
			if (this._foodElements[pos.x + "." + pos.y]) {
			this._foodElements[pos.x + "." + pos.y].remove();}
			inserted = newPodite;
		}
		if (newPodite != null) {
			$(newPodite).insertAfter(header);
		}
		else {
			if (podites.length > 1) {
				var lastPodite = podites[podites.length - 1];
				if (podites.length > 2) {
					$(lastPodite).insertAfter(header);
				}		
				inserted = lastPodite;
			}
		}
		if (inserted != null) {
			$(inserted).css({"left" : lastX, "top" : lastY});
		}
	}
};

function JSnakeController(model, view) {
	this._hookKey();
	
	this._model = model;
	this._view = view;
	this._generator = new JSnakeController.FoodGenerator(model);
	this._gameStarted = false;
}

JSnakeController.prototype = {
	startGame : function(speed) {
		speed = 400 - speed * 3.5;
		this._model.reset(); 
		this._view.reset();
		
		this._speed = speed;
		this._generator.start(6 * speed);
		this._model.createHeader();
		this._gameStarted = true;
	},
	
	stopGame : function() {
		this._generator.stop();
		this.stopAutoMove();
		this._gameStarted = false;
	},

	_hookKey: function() {
		var canvas = dojo.byId("canvas");
		var _this = this;
		$(document).keydown(function(event) {
			if (!_this._gameStarted) {
				return;
			}
			switch (event.keyCode) {
				case 38:
					_this._move(JSnakeConstant.MOVE_DIR.UP);
					break;
				case 39:
					_this._move(JSnakeConstant.MOVE_DIR.RIGHT);
					break;
				case 40:
					_this._move(JSnakeConstant.MOVE_DIR.DOWN);
					break;
				case 37:
					_this._move(JSnakeConstant.MOVE_DIR.LEFT);
					break;
			}
		});
	},
		
	_move: function(dir) {
		if (!this._autoMoveTimer) {
			this.startAutoMove();
		}
		
		var oldDir = this._model.currentDirection;
		this._model.currentDirection = dir;
		if (this._model.isOutOfBound()) {
			this.stopAutoMove();
			this._generator.stop();
			dojo.publish("GameOver");
			alert("游戏结束！");
			return;
		}
		var pos = this._model.getTargetPosition();
		var isFood = this._model.isGridFood(pos.x, pos.y);
		var newPodite = null;
		if (isFood) {
			newPodite = this._model.makePodite(this._model.currentPosX, this._model.currentPosY);
			this._model._podites.splice(1, 0, newPodite);
			this._model.updateGridStatus(pos.x, pos.y, JSnakeConstant.GRID_STATUS.PODITE_NORMAL);
		}		
		this._model.currentPosX = pos.x;
		this._model.currentPosY = pos.y;
		
		var moveMsg = {
			pos: pos,
			newPodite: newPodite
		};

		dojo.publish("Moved", [moveMsg]);
		if (oldDir != this._model.currentDirection) {
			this.startAutoMove();
		}
 	},	
	
	startAutoMove : function() {
	if (this._autoMoveTimer) {
			clearInterval(this._autoMoveTimer);
		}
		this._autoMoveTimer = setInterval(dojo.hitch(this, function() {
			var currDir = this._model.currentDirection;
			this._move(currDir);
		}), this._speed);
	},
	
	stopAutoMove : function() {
	  if (this._autoMoveTimer) {
			clearInterval(this._autoMoveTimer);
		}
	}
};

JSnakeController.FoodGenerator = function(model) {
	this._model = model;
}

JSnakeController.FoodGenerator.prototype = {
	_generate:function() {
		var x = parseInt(Math.random() * this._model.gridNumberX);
		var y = parseInt(Math.random() * this._model.gridNumberY);
		dojo.publish("FoodCreated", [{"x":x, "y":y}]);
	},
	start: function(interval) {
		interval = interval || 1000;
		if (this._timer) {
			clearInterval(this._timer);
		}
		this._timer = setInterval(dojo.hitch(this, function() {
		
		while (true) {
			var x = parseInt(Math.random() * this._model.gridNumberX);
			var y = parseInt(Math.random() * this._model.gridNumberY);
			if (this._model._getGridStatus(x, y) != JSnakeConstant.GRID_STATUS.FOOD) {
				this._model.updateGridStatus(x, y, JSnakeConstant.GRID_STATUS.FOOD);	
				dojo.publish("FoodCreated", [{"x":x, "y":y}]);
				break;
			}
		}
	}), interval);
	},
	stop: function() {
	if (this._timer) {
		clearInterval(this._timer);
		}
	}
};