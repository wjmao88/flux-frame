window.flame = {
  modules: {},

  module: function(name, dependencies){
    if (!dependencies) {
      return modules.name? modules.name : throw 'module ' + name + 'not found';
    }    

       
  }
}