$("#root").html("");

var color_reserved = "#b9d9f2";
var color_terminal = "#4AF626";
var reserved_words = ["time"]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function find_reserved_word(line){
    for(let i in reserved_words){
        line = line.replace(reserved_words[i], "<span style='color:"+color_reserved+"'>"+reserved_words[i]+"</span>");
    }
    return line;
}

function transform_json_to_lines(json){
    let lines = ["{"];
    if (typeof(json) == "object" && Object.keys(json).length > 0){
        for(let i in Object.keys(json)){
            if (typeof(json[Object.keys(json)[i]]) == "object" && Object.keys(json[Object.keys(json)[i]]).length > 0){
                lines.push("&emsp;"+Object.keys(json)[i]+" {");
                for(let j in Object.keys(json[Object.keys(json)[i]])){
                    lines.push("&emsp; &emsp;"+Object.keys(json[Object.keys(json)[i]])[j]+": "+json[Object.keys(json)[i]][Object.keys(json[Object.keys(json)[i]])[j]]);
                }
                lines.push("&emsp;"+" }");
            }else
            lines.push("&emsp;"+Object.keys(json)[i]+": "+json[Object.keys(json)[i]]);
        }
    }
    lines.push("}");
    return lines;
}

async function write_console(line, time){
    time = time || 20;
    let paused = false;
    let cache = "";
    let elem = $("#root");
    line = await find_reserved_word(line);
    for(let i in line){
        if(line[i] == "<" || line[i] == "&" )paused = true;
        if(paused) cache += line[i];
        else{
            elem.html(elem.html()+line[i]);
            await sleep(time);
        }
        if(line[i] == ">" || line[i] == ";" ){
            paused = false
            if(cache) {
                elem.html(elem.html()+cache);
                cache = "";
            }
        };
    }
}



let data_text = transform_json_to_lines(data)
async function write_data(data){
    for(let i in data){
        await window.scrollTo(0, document.body.scrollHeight);
        await write_console(data[i],30);
        await write_console("<br>",50);
        await window.scrollTo(0, document.body.scrollHeight);
    }
}

async function main(){
    
    await write_data([
        "Welcome to my resume!",
        "",
    ], 50);

    await write_data(data_text,30);

    await write_data([
        "",
        "Thank you for visiting!!",
        "I see you later!",
    ], 50);
}

main();

