function show()
{
	$("#show").html("");
	$("#title").html($("#input-cari").val());
	$.ajax({
		url: "http://www.omdbapi.com/",
		type: "get",
		dataType: "json",
		data: {
			apikey: "f48d0fc3",
			s: $("#input-cari").val()
		},
		success: function(result){
			if( result.Response === "True" ){
				result = result['Search'];
				$.each(result, function(index,value){
					$("#show").append(`
							<div class="col-md-4">
								<div class="card mb-3">
									<img class="card-img-top" src="`+ result[index].Poster +`" alt="Card image cap">
									<div class="card-body">
										<p class="card-text">`+result[index].Title +`</p>
									</div>
								</div>
							</div>
					`);
				});
			}else{
				$("#show").append(`<h1>`+ result.Error +`</h1>`)
			}
		}
	});
}

$(document).ready(function(){
	$("#input-cari").on("keyup",function(e){
		if( e.keyCode == 13 )
		{
			show();
		}
	})

	$("#btn-cari").on("click",function(){
		show();
	});
});
