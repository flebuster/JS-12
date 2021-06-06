function Laptop(title, ram, year, proc, core, material, weight){
    this.title = title;
    this.ram = ram;
    this.year = year; 
    this.proc = proc;
    this.core = core;
    this.material = material;
    this.weight = weight;
    this.getWeight = function(){
        if (this.weight <= 3000){
          return this.weight;
        } else{
            this.weight = 'error'
            return this.weight;
        
          }
      }
      this.getWeight();

      
};

function Ultrabook(title, ram, year, proc, core, material, weight) {
  
    Laptop.call(this, title, ram, year, proc, core, material, weight);
    this.getUWeight = function(){
                if (this.weight <= 1500){
                  return this.weight;
                } else{
                    this.weight = 'error'
                    return this.weight;
                
                  }
              }
        this.getUWeight();

};
Ultrabook.prototype = Object.create(Laptop.prototype);
