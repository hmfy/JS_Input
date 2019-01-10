//input条件筛选
	function filterByText(dataText,text){
		if(!text){
			return dataText;
		}else{
			return dataText.filter(function(ele){
				return ele.name.indexOf(text) == 0;
			});
		}
	}

