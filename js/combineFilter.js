function combineFilter(config){
//返回一个合成的函数
 	return function(data){
 		for(var prop in config){
			data = config[prop](data,store.getState(prop));
		}
		return data;
 	}
}

var filterArr = combineFilter({
	text: filterByText,
	sex: filterBySex
}); 
//1.执行combineFilter——>返回出一个函数function(data)
