var check = ()=>{
    if(document.getElementById('password').value == document.getElementById('checkpassword').value){
        document.getElementById('alert').style.color = '#8cc63E';
        document.getElementById('alert').innerHTML = '<span><i class = "fas fa-check-circle"></i>Match !</span>';
    }else{
        document.getElementById('alert').style.color = '#EE2B39';
        document.getElementById('alert').innerHTML = '<span><i class = "fas fa-exclamation-triangle"></i>Not Match !</span>';
    }
}