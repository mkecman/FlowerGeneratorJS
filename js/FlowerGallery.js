var FlowerGallery = function( divId )
{
	this.div = $('#' + divId );
}

FlowerGallery.prototype.draw = function( flowers ) 
{
	var output = "";
	for (var i = 0; i < flowers.length; i++) 
	{
		var flower = flowers[ i ];
		output += this.generateHtml( flower.id, flower.name, flower.author, flower.likes );
	}
	this.div.html( output );
};

FlowerGallery.prototype.generateHtml = function(id, name, author, likes) 
{
	if( author != "" )
		author = " by " + author;

	var output = 
	'<div class="gallery-thumb">'+
	'	<div class="gallery-thumb-image"><img src="flowers/thumbs/flower-'+id+'.png" onclick="openFlower('+id+')" /></div>'+
	'	<div class="gallery-thumb-title">'+
	'		<div class="gallery-thumb-title-likes" onclick="likeFlower('+id+')"><img src="img/heart-icon.png" width="24" height="24" />'+likes+'</div>'+
	'		<div class="gallery-thumb-title-name"><div class="gallery-thumb-title-name-tekst">'+name+''+author+'</div></div>'+
	'	</div>'+
	'</div>';

	return output;
};