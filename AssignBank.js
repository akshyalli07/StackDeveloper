var closingBalance
document.getElementById("action").addEventListener("click",()=>{
    var availBal=document.getElementById("bal").innerHTML
    console.log(availBal)
    var dropDown=document.getElementById("drpdown").value
    console.log(dropDown)

    var description=document.getElementById("depowith").value
    console.log(description)

    var amountEntered=document.getElementById("amount").value
    console.log(amountEntered)
    var dropDown=dropDown.toLowerCase()
    if (dropDown=="deposit") 
    {
        if (amountEntered>0) 
        {
            document.getElementById("depo").innerHTML=amountEntered+".00"
            closingBalance= Number (amountEntered)+ Number (availBal)
            document.getElementById("bal").innerHTML=closingBalance

            var trNode=document.createElement("tr")
            var tableElement=document.getElementById("passbook")
            tableElement.appendChild(trNode)


            var tdNode=document.createElement("td")
            var textNode=document.createTextNode(dropDown.toUpperCase())
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var year= new Date().getFullYear()
            var month=new Date().getMonth()
            var date=new Date().getDate()
            var transdate=year+"-"+month+"-"+date
            var textNode=document.createTextNode(transdate)
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var textNode=document.createTextNode(availBal+".00")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var textNode=document.createTextNode(amountEntered+".00")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)
            
            var tdNode=document.createElement("td")
            var textNode=document.createTextNode(description.toUpperCase())
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var textNode=document.createTextNode(closingBalance+".00")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)


            //tableElement.insertBefore(trNode,element.childNodes[0])
        } 
        else 
        {
            alert("Please!! \n Enter the Correct Amount")
        }
    } 
    else if (dropDown=="withdraw") 
    {
        
        if (amountEntered>0 && amountEntered<closingBalance) 
        {
            document.getElementById("withdraw").innerHTML=amountEntered+".00"
            closingBalance=Number (closingBalance)-Number (amountEntered)
            document.getElementById("bal").innerHTML=closingBalance

            var trNode=document.createElement("tr")
            var tableElement=document.getElementById("passbook")
            tableElement.appendChild(trNode)


            var tdNode=document.createElement("td")
            var textNode=document.createTextNode(dropDown.toUpperCase())
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var year= new Date().getFullYear()
            var month=new Date().getMonth()
            var date=new Date().getDate()
            var transdate=year+"-"+month+"-"+date
            var textNode=document.createTextNode(transdate)
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var textNode=document.createTextNode(availBal+".00")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var textNode=document.createTextNode(amountEntered+".00")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)
            
            var tdNode=document.createElement("td")
            var textNode=document.createTextNode(description.toUpperCase())
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)

            var tdNode=document.createElement("td")
            var textNode=document.createTextNode(closingBalance+".00")
            tdNode.appendChild(textNode)
            trNode.appendChild(tdNode)


            //tableElement.insertBefore(trNode,element.childNodes[0])
        }
        else{
            alert("Please enter less amount")
        }
    }
    else 
    {
        alert("please choose a correct option")
    }
})
