
var jump_max = 1

const moviments = {
    ArrowUp: (object) => {
        // object.position.y +=0.1
        if (object.jump && object.position.y <= jump_max){
            object.position.y +=0.1
        }else if (object.jump && object.position.y > jump_max){
            object.jump = false
            object.position.y -=0.1
        }else if (!object.jump && !object.inbase){
            object.position.y -=0.1
        } else if (!object.jump && object.inbase) {
            object.position.y = 0
        }
    },
    ArrowDown: (object)=>{
        object.position.y -=0.1
    },
    ArrowRight: (object)=>{
        object.position.x +=0.1
    },
    ArrowLeft:(object)=>{
        object.position.x -=0.1
    }
}


export default (object, key) => {

    if (key in moviments)
        moviments[key](object)
    
    console.log("key "+key)
}