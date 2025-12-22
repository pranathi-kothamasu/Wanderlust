maptilersdk.config.apiKey = mapToken;

if (!listingCoords || listingCoords.length !== 2) {
  console.error("Invalid coordinates:", listingCoords);
} else {
  const map = new maptilersdk.Map({
    container: "map",
    style: maptilersdk.MapStyle.STREETS,
    center: listingCoords,
    zoom: 12,
  });

  const marker = new maptilersdk.Marker({ color: "#fe424d" })
    .setLngLat(listingCoords)
    .setPopup(
      new maptilersdk.Popup({ offset: 25 }).setHTML(
        `<h4>${listingTitle}</h4>
         <p>Exact location will be provided after booking</p>`
      )
    )
    .addTo(map);
}
