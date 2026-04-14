import Box from "@mui/material/Box";
import {Marker, APIProvider, Map} from "@vis.gl/react-google-maps";

const MyLocationMap = () => {
    const location = {lat: 32.19340, lng: 34.96049};
    return <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Box sx={{height: '550px', width: '100%', py: 5, mx: 'auto'}}>
            <Map
                defaultCenter={location}
                defaultZoom={15}
                gestureHandling={'greedy'}
                disableDefaultUI={false}
            >
                <Marker position={location} />
            </Map>
        </Box>
    </APIProvider>
}
export default MyLocationMap;