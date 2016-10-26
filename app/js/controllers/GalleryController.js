images = [];
(function() {
	function add(link, thumb, title){
		images.push({img: "img/gallery/" + link, thumb: "img/gallery/" + thumb, description:title});
	}
	add("cottage.jpg", "cottage.jpg", "Cottage Table");
	add("BalsamicChickenwithStiltonandEndive.jpg", "BalsamicChickenwithStiltonandEndiveT.jpg", "Balsamic Chicken with Stilton and Endive");
	add("BraisedBeefandYorkshirePudding.jpg", "BraisedBeefandYorkshirePuddingT.jpg", "Braised Beef and Yorkshire Pudding");
	add("BrineRoastedPorkloin.jpg", "BrineRoastedPorkloinT.jpg", "Brine Roasted Porkloin");
	add("CeleriacSoup.jpg", "CeleriacSoupT.jpg", "Celeriac Soup");
	add("LobsterRisotto.jpg", "LobsterRisottoT.jpg", "Lobster Risotto");
	add("PanzanellaSalad.jpg", "PanzanellaSaladT.jpg", "Panzanella Salad");
	add("RapiniFlatbread.jpg", "RapiniFlatbreadT.jpg", "Rapini Flatbread");
	add("RoastedBrusselSprouts.jpg", "RoastedBrusselSproutsT.jpg", "Roasted Brussel Sprouts");
	add("RootVegetableSalad.jpg", "RootVegetableSaladT.jpg", "Root Vegetable Salad");
	add("SearedGnocchiwithSoubise.jpg", "SearedGnocchiwithSoubiseT.jpg", "Seared Gnocchi with Soubise");
	add("TortadiMelewithAgedCanadianCheddar.jpg", "TortadiMelewithAgedCanadianCheddarT.jpg", "Torta di Mele with Aged Canadian Cheddar");
})();

angular.module("app").controller('GalleryController', function($scope) {
  $scope.images=images;
});