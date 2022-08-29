export const myRequest=(option)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:option.url,
			method:option.method||"GET",
			header:option.header,
			data:option.data||{},
			success:function(res) {
				if(res.data.status!==0){ resolve(res)}
				else{
					return uni.showToast({
						title:"数据获取失败"
					})
					
				}

			},
			fail:function(err){
				return uni.showToast({
					title:"数据获取失败"
				})
				reject(err)
			}
		})
	})
	
	
}