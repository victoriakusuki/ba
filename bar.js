function multiplicar()
{
 
    antes = parseFloat(document.getElementById ("antes").value)
    depois = parseFloat(document.getElementById ("depois").value)
    v= antes 
    p = depois + (depois *0.10)
    vf = p+v
    alert ("O valor total é: "+vf)

}