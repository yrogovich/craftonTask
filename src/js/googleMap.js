import { Loader } from 'google-maps';

export async function mapLoad(api) {
	const loader = new Loader(api);
	
	const google = await loader.load();

	const image = 'https://raw.githubusercontent.com/yrogovich/craftonTask/150dcb6732ba0336908740253810a4508a70ecb7/img/icons/map-pin.png'
	const point = { lat: 52.40315998103853, lng: 16.90997132280444 }
	const map = new google.maps.Map(document.getElementById('map'), {
		center: point,
		zoom: 17,
		disableDefaultUI: true,
		mapId: '6cb29367d6c907ca',
	})
	const mapMarker = new google.maps.Marker({
		position: point,
		map,
		icon: image,
	})
}