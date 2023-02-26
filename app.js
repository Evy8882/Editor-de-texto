let editBar = false;
let bg = "#FFFFFF"
let ct = "#d6d6d6"
let fn = "#000000"
let ti = "#000000"
updateBar()

function clicou(){
    editBar = (!editBar)
    // window.alert(editBar)
    updateBar()
}

function updateBar(){
    if (editBar){
        document.querySelector('.editBar').innerHTML = `
                    <h1>Edição</h1>
        <br>
        <div class="personalizacao">
            <input type="color" name="bg" id="bg"> Background 
        </div>
        <div class="personalizacao">
            <input type="color" name="ct" id="ct"> Caixa de texto
        </div>
        <div class="personalizacao">
            <input type="color" name="fn" id="fn"> Letras
        </div>
        <div class="personalizacao">
            <input type="color" name="ti" id="ti"> Título
        </div>
        <div class="personalizacao">
            <input type="text"id="txti"> Título
        </div>
        <div class="personalizacao">
            <div><strong>Texto:</strong></div> 
            <textarea name="" id="txtx" cols="55" rows="8" ></textarea> 
        </div>
        <button class="confirm" onclick="confirmButton()">Confirmar</button>
        <br><br>`;
        document.querySelector('.editBarButton').innerHTML = '❌';
        document.querySelector('#bg').value = bg;
        document.querySelector("#ct").value = ct;
        document.querySelector("#fn").value = fn;
        document.querySelector("#ti").value = ti;
        document.querySelector("#txti").value = document.querySelector('.titulodotexto').innerHTML
        document.querySelector("#txtx").value = document.querySelector('.textText').innerHTML
    }else {
        document.querySelector('.editBar').innerHTML = ''
        document.querySelector('.editBarButton').innerHTML = '🖌️'
    }
}

function confirmButton(){
    bg = document.querySelector('#bg').value;
    ct = document.querySelector("#ct").value;
    fn = document.querySelector("#fn").value;
    ti = document.querySelector("#ti").value;
    

    document.body.style.backgroundColor = bg;
    document.querySelector(".text").style.backgroundColor = ct;
    document.querySelector(".text").style.borderColor = ct;
    document.querySelector(".textText").style.color = fn;
    document.querySelector(".textTitle").style.color = ti;
    document.querySelector('.titulodotexto').innerHTML = document.querySelector("#txti").value
    document.querySelector('.textText').innerHTML = document.querySelector("#txtx").value
}