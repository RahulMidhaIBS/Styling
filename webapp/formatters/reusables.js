sap.ui.define([],
function(){
	return{
		fDate : function(date){
			var formattedDate = date.substring(0,2) + "-" + date.substring(2,4) + "-" + date.substring(4);
			return formattedDate;
		}
	};
});