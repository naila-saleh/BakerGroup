import Box from "@mui/material/Box";
import {Marker, APIProvider, Map} from "@vis.gl/react-google-maps";

const MyLocationMap = () => {
    const location = {lat: 32.19340, lng: 34.96049};

    const openInGoogleMaps = () => {
        const {lat, lng} = location;
        const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Box sx={{height: '550px', width: '100%', py: 5, mx: 'auto'}}>
            <Map
                defaultCenter={location}
                defaultZoom={15}
                gestureHandling={'greedy'}
                disableDefaultUI={false}
            >
                <Marker position={location} onClick={openInGoogleMaps}/>
            </Map>
        </Box>
    </APIProvider>
}
export default MyLocationMap;