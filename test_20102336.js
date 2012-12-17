function BaseClass () {  
    this.name = "base name";  
    this.type = "base type";    
    this.Run = function () {       
        console.log("Run Base = " + this.name);   
        }  
    this.Exec = function () {  
        console.log("Exec Base = " + this.name);  
        }
            
    }
function SubClass () { 
    this.base = new BaseClass();   
    this.name = "sub name"; 
    this.Run = function () {      
            console.log("Run Sub = " + this.name);  
            this.base.Run();    
        }
                    
    }
    SubClass.prototype = new BaseClass();
    var a = new SubClass();
    console.log(a.name);   
    console.log(a.type);   
    a.Run();
                                   
                  

