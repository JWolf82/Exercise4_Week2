var victims = []
var volunteers = []
var combine = []
var names = []
var names2 = []

var response = prompt("How many victims?")
var vicinfo = function(name, phone, address){
    name = prompt("What is the victims name?")
    phone = prompt("What is the victims phone?")
    address = prompt("What is the victims address?")
    victims.push([name, phone, address])
    names.push(name)
}

for(var i = 0; i<response; i++){
    vicinfo()
}

var response2 = prompt("How many volunteers?")
var volinfo = function(name, phone, address){
    name = prompt("What is the volunteer's name?")
    phone = prompt("What is the volunteer's phone?")
    address = prompt("What is the volunteer's address?")
    volunteers.push([name, phone, address])
    names2.push(name)
}

 for(var i = 0; i<response2; i++){
    volinfo()
}   


alert("Victims " + victims.length + " " + "Volunteers " + volunteers.length + " " + "Victim Names: " + names + " " + "Volunteer Names:" + names2 )