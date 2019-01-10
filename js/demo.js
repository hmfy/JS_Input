	var personArr = [
					{name: '刘溜', src: 'image/yellow.bmp', des: '不好不好', age: '18', sex: 'm'},
					{name: '赵莉莉', src: 'image/blue.bmp', des: '好不好', age: '11', sex: 'f'},
					{name: '赵萌', src: 'image/orange.bmp', des: '嘿嘿嘿不好', age: '28', sex: 'f'},
					{name: '王里', src: 'image/gray.bmp', des: '呵呵呵好', age: '8', sex: 'm'},
					{name: '王五', src: 'image/pink.bmp', des: '哈哈哈好', age: '19', sex: 'm'}
	];

	store.subscribe(function(){
		//更新view
		randerPage(filterArr(personArr));
	});
	
	//渲染页面
	var ulList = document.getElementsByTagName("ul")[0];
	function randerPage(data){
		var htmlStr = "";
		data.forEach(function(ele){
			htmlStr = htmlStr + "<li><img src='"+ ele.src +"'><p class='name'>"+ ele.name +"</p><p class='des'>"+ ele.des +"</p></li>"
		});
		ulList.innerHTML = htmlStr;
	}
	randerPage(personArr);

	//input行为————>添加行为， 输入行为， 处理行为
	var input = document.getElementsByTagName("input")[0];
	input.oninput = debounce(function(){
		//分发行为
		store.dispatch({type: 'text',value: this.value});
	},500);

	//btn行为
	var sWrapper = document.getElementsByClassName("sWrapper")[0];
	var btnList = [].slice.call(sWrapper.getElementsByTagName("span"),0);
	var lastBtn = btnList[2];
	btnList.forEach(function(ele){
		ele.onclick = function(){
			classActive(this);
			store.dispatch({type: 'sex',value: this.getAttribute('sex')});
		}
	});

	function classActive(eleBtn){
		lastBtn.className = "btn";
		eleBtn.className = "btn active";
		lastBtn = eleBtn;
	}
	
	//防抖
	function debounce(handler, delay){
		var timer = null;
		return function(e){
			var _self = this, _arg = arguments;
			clearTimeout(timer);
			timer = setTimeout(function(){
				handler.apply(_self, _arg);
			},delay);
		}
	}