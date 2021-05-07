import { Loader } from 'google-maps';

export async function mapLoad(api) {
	const loader = new Loader(api);
	
	const google = await loader.load();

	const image = `${window.location.protocol}//${window.location.hostname}/img/icons/map-pin.png`
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