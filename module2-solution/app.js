(function(){
'use strict';
angular.module('App',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
var showList = this;
showList.getItems=ShoppingListCheckOffService.getItems();

showList.bought=function (itemIndex){
try{ShoppingListCheckOffService.bought(itemIndex) ;}
catch(error){showList.notif1=error.message;}

};




}


AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
var showList2=this;
showList2.Items2= ShoppingListCheckOffService.getItems2();

}

function ShoppingListCheckOffService(){
var service= this;
var tobuyList =[
{name:"cookie",quantity:"10"},
{name:"banana",quantity:"5"},
{name:"orange",quantity:"6"},
{name:"toilet paper",quantity:"9"},
{name:"salami",quantity:"2"}
];
var boughtList =[];

service.getItems = function(){
  return tobuyList;};
service.getItems2= function(){
  return boughtList;};
service.bought = function(itemIndex){
var item=tobuyList[itemIndex];
 boughtList.push(item);
 tobuyList.splice(itemIndex,1);
if (tobuyList.length === 0 ){ throw new Error ("Everything is bought!") }
}







};


}  )();
