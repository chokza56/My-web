export const req = async(cb) => {
    try{
        const data = await cb()
        alert(data.message)
        window.location.reload()
        return{ok:true,data}
    }catch(err){
        alert(err)
        return{ok:false,err}
    }
}