/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() { 
  
  /* this is incomplete. Need to be able to handle input that have decimals divided by decimals. aka 3.1/.5miles*/
  
  this.getNum = function(input) {
    var result;
    var processed = input.replace(/[^\d.-./]/g, '');
    var splitted = processed.split('/');
    
    if (splitted[0] == "")
    {
      result = 1;
    }
    else if (splitted.length == 1)
    {
      result = splitted[0];
    }
    else if (splitted.length == 2)
    {
      result = splitted[0] / splitted[1];
    }
    else{
      console.log('invalid number submitted');
      result="invalid number";
    }
    
    return result; /*this does not test for input with multiple .'s or multiple /'s, or numbers after input of unit type*/
  };
  
  this.getUnit = function(input) {
    var result;
    var processed = input.replace(/[^a-zA-Z]+/g, '');
    
    var acceptedUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    var isInArray = acceptedUnits.indexOf(processed.toLowerCase());
    
    if (isInArray != -1)
    {
      result = processed;
    }
    else
    {
      console.log('invalid unit submitted');
      result = "invalid unit";
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit.toLowerCase())
    {
      case 'gal':
        result = "l";
        break;
      case 'l':
        result="gal";
        break;
      case 'kg':
        result = "lbs";
        break;
      case 'lbs':
        result= "kg";
        break;
      case 'mi':
        result="km";
        break;
      case 'km':
        result= 'mi';
        break;
    }
    
    console.log('initial unit: ' + initUnit + ' is converted to ' + result);
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit.toLowerCase())
    {
      case 'gal':
        result = "gallons";
        break;
      case 'l':
        result="liters";
        break;
      case 'kg':
        result = "kilograms";
        break;
      case 'lbs':
        result= "pounds";
        break;
      case 'mi':
        result="miles";
        break;
      case 'km':
        result= 'kilometers';
        break;
    }
    
    console.log('unit spelled out is' + result);
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit.toLowerCase())
    {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result= initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'lbs':
        result= initNum * lbsToKg;
        break;
      case 'mi':
        result= initNum * miToKm;
        break;
      case 'km':
        result=  initNum / miToKm;
        break;    }
    
    console.log('convert result is ' + result);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result =  initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum.toFixed(5) + " " + this.spellOutUnit(returnUnit);
    console.log(result);
    return result;
  };
  
}

module.exports = ConvertHandler;
