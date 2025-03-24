export default function Entry() {
    return (

        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src="../Images/Lugano_Lake.jpg" alt="Lugano lake" />
            </div>
            <div className="info-container">
                <img className="marker" src="../Images/Marker.png" alt="Location Marker Icon" />
                <span className="country" >Switzerland</span>
                <a href="https://www.google.com/maps/place/Lake+Lugano/@45.9696564,8.9095428,25419m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47842e8a9ab83885:0x86d13125d560eb81!8m2!3d45.9862544!4d8.9699889!16zL20vMDFyZjc4?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D"> View on Google Maps </a>
                <h2 className="entry-title">Lake Lugano</h2>
                <p className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="entry-text">Lake Lugano is a glacial lake which is situated on the border between southern Switzerland and northern Italy. The lake, named after the city of Lugano, is situated between Lake Como and Lago Maggiore.</p>
            </div>
        </article>
    )
}