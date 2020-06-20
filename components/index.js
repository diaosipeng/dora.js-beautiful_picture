module.exports = {
  type:'list',
  style:'simple',
  async fetch({args,page}) {
    let resp = await $http.get('https://api.apiopen.top/getImages')
    let result=resp.data.result
    let items=[]
    this.getphoto(result,items)
    return {
      items:items
    }
  },


  getphoto(result,items){
    for (var i=0;i<result.length;i++){
      items.push({
        style:'gallery',
        title:result[i].id,
        image:result[i].img,
        onClick:item=>{
          $router.to($route('picture',{pic:'eab5867a-32a3-4a9e-9327-57e05cd937dc'}))
        }
      })
      items.push({
        style:'simple',
        title:'this is the picture '+i
      })
    }    
  }
}