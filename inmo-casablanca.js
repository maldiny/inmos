/*
	Here are some example ways in which you can use node-fetch. Test each code fragment separately so that you don't get errors related to constant reassigning, etc.

	Top-level `await` support is required.
*/

import fetch from 'node-fetch';
import cheerio from 'cheerio';

const filter_min_habitaciones = 3;
const filter_max_habitaciones = 5;
const filter_min_price = 0;
const filter_max_price = 120000;
const house_link_before = "https://www.casablancasl.com/"

function House(reference, name, link, regimen, m, habitaciones, plaza, banno, image, price) {
	this.reference = reference;
	this.name = name;
	this.link = link;
	this.regimen = regimen;
	this.m = m;
	this.habitaciones = habitaciones;
	this.plaza = plaza;
	this.banno = banno;
	this.image = image;
	this.price = price;
  }

function init(){
	return fetch("https://www.casablancasl.com/wp-content/themes/casablanca/inmuebles/controller.php", {
	"headers": {
	  "accept": "*/*",
	  "accept-language": "es-ES,es;q=0.9",
	  "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
	  "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
	  "sec-ch-ua-mobile": "?0",
	  "sec-ch-ua-platform": "\"Windows\"",
	  "sec-fetch-dest": "empty",
	  "sec-fetch-mode": "cors",
	  "sec-fetch-site": "same-origin",
	  "x-requested-with": "XMLHttpRequest",
	  "cookie": "_gcl_au=1.1.934169519.1675012873; _gid=GA1.2.2122164236.1675012874; _fbp=fb.1.1675012873772.1657111653; cmplz_consented_services=; cmplz_policy_id=18; cmplz_marketing=allow; wpgmza-api-consent-given=1; cmplz_statistics=allow; cmplz_preferences=allow; cmplz_functional=allow; cmplz_banner-status=dismissed; _hjFirstSeen=1; _hjSession_592684=eyJpZCI6IjM3ZmExMGQxLTRjN2YtNGVjZS1hYWEyLTc4OWQ2YTFmMTQ5MCIsImNyZWF0ZWQiOjE2NzUwMTI5NDE0MTUsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; _hjSessionUser_592684=eyJpZCI6ImFiMjA2MWUzLTZlYjMtNWQyZS05YzJjLTJjNmU2MjhkYjRhYSIsImNyZWF0ZWQiOjE2NzUwMTI5Mzg0MTIsImV4aXN0aW5nIjp0cnVlfQ==; _gat_gtag_UA_105175049_1=1; _hjIncludedInPageviewSample=1; _hjIncludedInSessionSample=0; _ga_1R1D7CJPJ2=GS1.1.1675017196.3.1.1675017208.48.0.0; _ga=GA1.1.444096725.1675012874",
	  "Referer": "https://www.casablancasl.com/inmuebles/venta/pisos-apartamentos/Gamonal-Capiscol/-/?orden=&preciodesde=" + filter_min_price + "&preciohasta=" + filter_max_price + "&minmetros=0&maxmetros=10000&minhabitaciones=" + filter_min_habitaciones + "&maxhabitaciones=" + filter_max_habitaciones + "&minbanos=0&maxbanos=8&localidad=Burgos%20Capital&provincia=Burgos&verPagina=1",
	  "Referrer-Policy": "strict-origin-when-cross-origin"
	},
	"body": "orden=&regimen=venta&tipo=pisos-apartamentos&zona=Gamonal-Capiscol&estado=-&minprecio=" + filter_min_price + "&maxprecio=" + filter_max_price + "&minmetros=0&maxmetros=10000&minhabitaciones=" + filter_min_habitaciones + "&maxhabitaciones=" + filter_max_habitaciones + "&minbanos=0&maxbanos=8&ascensor=false&amueblado=false&garaje=false&terraza=false&balcon=false&jardin=false&piscina=false&palabra=&localidad=Burgos+Capital&provincia=Burgos&verPagina=1&URLPagina=%2Finmuebles%2Fventa%2Fpisos-apartamentos%2FGamonal-Capiscol%2F-%2F%3Forden%3D%26preciodesde%3D0%26preciohasta%3D120000%26minmetros%3D0%26maxmetros%3D10000%26minhabitaciones%3D3%26maxhabitaciones%3D5%26minbanos%3D0%26maxbanos%3D8%26localidad%3DBurgos+Capital%26provincia%3DBurgos",
	"method": "POST"
  });
}

async function getHomeDetail(url){
	console.log(url);
	response = await fetch(url, {
		"headers": {
		  "accept": "*/*",
		  "accept-language": "es-ES,es;q=0.9",
		  "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
		  "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"Google Chrome\";v=\"109\", \"Chromium\";v=\"109\"",
		  "sec-ch-ua-mobile": "?0",
		  "sec-ch-ua-platform": "\"Windows\"",
		  "sec-fetch-dest": "empty",
		  "sec-fetch-mode": "cors",
		  "sec-fetch-site": "same-origin",
		  "x-requested-with": "XMLHttpRequest",
		  "cookie": "_gcl_au=1.1.934169519.1675012873; _gid=GA1.2.2122164236.1675012874; _fbp=fb.1.1675012873772.1657111653; cmplz_consented_services=; cmplz_policy_id=18; cmplz_marketing=allow; wpgmza-api-consent-given=1; cmplz_statistics=allow; cmplz_preferences=allow; cmplz_functional=allow; cmplz_banner-status=dismissed; _hjFirstSeen=1; _hjSession_592684=eyJpZCI6IjM3ZmExMGQxLTRjN2YtNGVjZS1hYWEyLTc4OWQ2YTFmMTQ5MCIsImNyZWF0ZWQiOjE2NzUwMTI5NDE0MTUsImluU2FtcGxlIjpmYWxzZX0=; _hjAbsoluteSessionInProgress=0; _hjSessionUser_592684=eyJpZCI6ImFiMjA2MWUzLTZlYjMtNWQyZS05YzJjLTJjNmU2MjhkYjRhYSIsImNyZWF0ZWQiOjE2NzUwMTI5Mzg0MTIsImV4aXN0aW5nIjp0cnVlfQ==; _gat_gtag_UA_105175049_1=1; _hjIncludedInPageviewSample=1; _hjIncludedInSessionSample=0; _ga_1R1D7CJPJ2=GS1.1.1675017196.3.1.1675017208.48.0.0; _ga=GA1.1.444096725.1675012874",
		  "Referer": "https://www.casablancasl.com/inmuebles/venta/pisos-apartamentos/Gamonal-Capiscol/-/?orden=&preciodesde=" + filter_min_price + "&preciohasta=" + filter_max_price + "&minmetros=0&maxmetros=10000&minhabitaciones=" + filter_min_habitaciones + "&maxhabitaciones=" + filter_max_habitaciones + "&minbanos=0&maxbanos=8&localidad=Burgos%20Capital&provincia=Burgos&verPagina=1",
		  "Referrer-Policy": "strict-origin-when-cross-origin"
		},
		"method": "GET"
	  });
	  
	 return await response.text();
}

function getAllHomes(body){
	// parse the html text and extract titles
	const $ = cheerio.load(body);
	const houses = [];
 
	$("div[class='col-xl-4 col-lg-6 inmuebles-column']").each(function (item, house) {
	 var $ = cheerio.load(house);
	 var house_price = $("div[class='card-precio']").text();
	 var house_name = $("div[class='card-text inmuebles-card-calle']").text();
	 var house_link = house_link_before + $("div[class='card-text inmuebles-card-zona']").find("a").attr("href");
	 var house_regimen = $("div[class='card-regimen']").text() || $("div[class='card-regimen regimen-destacado']").text();
	 var house_m = "";
	 var house_habitaciones = "";
	 var house_plaza = "";
	 var house_banno = "";
	 var house_ref = item;
	 var house_image = house_link_before + $("div[class='card-img-top-container']").find("img").attr("src");

	 console.log(house_image);
	 
	 $("div[class='card-text inmuebles-card-data']").each(function(i, house_detail){
		 var $ = cheerio.load(house_detail);
		 var element = $("div[class='card-text inmuebles-card-data']").text();
		 if(element.includes(habitacion_lbl)) house_habitaciones = element.replace(habitacion_lbl,"");
		 if(element.includes(plaza_lbl)) house_plaza = element.replace(plaza_lbl,"");
		 if(element.includes(banno_lbl)) house_banno = element.replace(banno_lbl,"");
		 if(element.includes(metros_lbl)) house_m = element.replace(metros_lbl,"");
	 })

	 houses.push(new House(house_ref, house_name, house_link, house_regimen, house_m, house_habitaciones, house_plaza, house_banno, house_image, house_price));
 
   });

   return houses;
}

  const habitacion_lbl = " habitacion/es";
  const plaza_lbl = " plaza/s";
  const banno_lbl = " baño/s";
  const metros_lbl = " m²";

  var response = await init();

  const body = await response.text();
   
  const houses = await getAllHomes(body);

  houses.forEach(function(house){
  	console.log("Casa: " + house.image + " Name: " + house.name + " - price: " + house.price + " - regimen: " + house.regimen + " M2: " + house.m + " Plaza: " + house.plaza + " Baño: " + house.banno + " Habitaciones: " + house.habitaciones + " Link: " + house.link);
  });
  /* houses.forEach(function(house){
		 
	var body2 = getHomeDetail(house.link);
	body2.then(function(result) {
	   const $ref = cheerio.load(body2);
	   console.log($ref.text());
	   var house_ref = $ref("div[class='slider-header-title']").text();
	   console.log(house_ref);
	   console.log("Casa: " + house.reference + " Name: " + house.name + " - price: " + house.price + " - regimen: " + house.regimen + " M2: " + house.m + " Plaza: " + house.plaza + " Baño: " + house.banno + " Habitaciones: " + house.habitaciones + " Link: " + house.link)
	})

  }); */

