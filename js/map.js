let map;
const showMap = () => {
    map = new Microsoft.Maps.Map('#map',{
    credentials: 'AnusMaSDvlMyMHhiO4dr9T2XRZPepoJ7LDGNMoAlugHBVIkVqnZoD4-GDh6SzHE-',
    center: new Microsoft.Maps.Location(0.5143, 35.2698),
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    zoom: 14,
    disableScrollWheelZoom:true
});
}