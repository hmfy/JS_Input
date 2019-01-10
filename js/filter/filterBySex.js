//btn筛选
	function filterBySex(dataSex,sex){
		if(sex == "a"){
			return dataSex;
		}else{
			return dataSex.filter(function(ele){
				return ele.sex == sex;
			});
		}
	}