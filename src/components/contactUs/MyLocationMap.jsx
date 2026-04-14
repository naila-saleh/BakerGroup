import Box from "@mui/material/Box";
import {APIProvider, Map} from "@vis.gl/react-google-maps";

const MyLocationMap = () => {
    return <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Box sx={{height: '550px', width: '100%', py: 5, mx: 'auto'}}>
            <Map
                defaultCenter={{lat: 32.19340, lng: 34.96049}}
                defaultZoom={15}
                gestureHandling={'greedy'}
                disableDefaultUI={false}
            />
        </Box>
    </APIProvider>
}
export default MyLocationMap;