define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,d){require(["css!charts/indicators/alma/alma.css"]),require(["text!charts/indicators/alma/alma.html"],function(e){var f="#cd0a0a";e=a(e),e.appendTo("body"),e.find("input[type='button']").button(),e.find("#alma_stroke").colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#alma_stroke").css({background:"#"+c.formatted}).val(""),f="#"+c.formatted},ok:function(b,c){a("#alma_stroke").css({background:"#"+c.formatted}).val(""),f="#"+c.formatted}});var g="Solid";a("#alma_dashStyle").ddslick({imagePosition:"left",width:138,background:"white",onSelected:function(b){a("#alma_dashStyle .dd-selected-image").css("max-width","105px"),g=b.selectedData.value}}),a("#alma_dashStyle .dd-option-image").css("max-width","105px"),e.dialog({autoOpen:!1,resizable:!1,modal:!0,width:280,my:"center",at:"center",of:window,dialogClass:"alma-ui-dialog",buttons:[{text:"OK",click:function(){var c=!0;if(a(".alma_input_width_for_period").each(function(){if(!isNumericBetween(parseInt(a(this).val()),parseInt(a(this).attr("min")),parseInt(a(this).attr("max")))){var b=a(this);return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+b.attr("min")+" to "+b.attr("max")+" is allowed for "+b.closest("tr").find("td:first").text()+"!"})}),void(c=!1)}}),c){var d={period:parseInt(e.find("#alma_period").val()),sigma:parseInt(e.find("#alma_sigma").val()),offset:parseFloat(e.find("#alma_offset").val()),stroke:f,strokeWidth:parseInt(e.find("#alma_strokeWidth").val()),dashStyle:g,appliedTo:parseInt(e.find("#alma_appliedTo").val())};a(a(".alma").data("refererChartID")).highcharts().series[0].addIndicator("alma",d),b.call(e)}}},{text:"Cancel",click:function(){b.call(this)}}]}),e.find("select").selectmenu({width:140}),"function"==typeof d&&d(c)})}return{open:function(b){return 0==a(".alma").length?void c(b,this.open):void a(".alma").data("refererChartID",b).dialog("open")}}});