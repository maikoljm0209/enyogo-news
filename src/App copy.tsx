import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* NAVBAR (full width) */}
      <nav className="navbar navbar-expand-lg py-1 mt-1" style={{ backgroundColor: "#dedede", borderRadius: "5px", marginLeft: "10px", marginRight: "10px" }} >
        <div className="container-fluid">
           <a className="navbar-brand" href="#">
            <img style={{borderRadius: "5px"}} src="data:image/jpeg;base64,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" alt="logo-page" width="30" height="30"/>
           </a>
  
          <a className="navbar-brand py-0" href="#">
            Menu
          </a>

          <button
            className="navbar-toggler py-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-0">
              <li className="nav-item">
                <a className="nav-link active py-1" aria-current="page" href="#">
                  Página Principal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link py-1" href="#">
                  Novedades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link py-1" href="#">
                  Lo último en IA
                </a>
              </li>
            </ul>

            <span className="navbar-text py-0">
              Tu página de noticias de tecnología en español
            </span>
          </div>
        </div>
      </nav>

      {/* MAIN: crece para empujar el footer abajo */}
      <main className="flex-grow-1">
        <div className="container py-4">
          {/* Hero */}
          <div className="row mb-4">
            <div className="col">
              <h1 className="mb-1">Últimas Noticias de Tecnología en español</h1>
              <p className="mb-0">Fecha: {getSpanishDate()}</p>
            </div>
          </div>

          {/* Content grid */}
          <div className="row g-3">
            <aside className="col-12 col-lg-3">
              <div className="p-3 border rounded">Sidebar</div>
            </aside>

            <section className="col-12 col-lg-9">
              <div className="p-3 border rounded">
                <div className="row">
                  <p className="text-center fs-4">Principales Noticias del Día</p>
                </div>

                <div className="row">

                  <div className="col-12 col-md-6 col-lg-4">
                    {/* Card 1 */}
                    <div className="card w-100">
                      <img src="https://fotografias-2.larazon.es/clipping/cmsimages02/2025/12/02/47B61738-BB6A-4A1C-971C-A364DCC3AD87/realme-8-pro_98.jpg?crop=1900,1069,x0,y0&optimize=low&format=webply" 
                           className="card-img-top" alt="realme"/>
                      <div className="card-body">
                        <h5 className="card-title">Realme 8 Pro</h5>
                        <p className="card-text">El móvil con características más bestiales tiene ofertón : Snapdragon 8 Elite Gen 5 , cámara de 200 MP y 7000 mAh</p>
                        <a href="https://www.larazon.es/compras/nuestra-eleccion/movil-caracteristicas-mas-bestiales-tiene-oferton-snapdragon-8-elite-gen-5-camara-200-7000-mah_2026031169b143936cf703292f6cd760.html" 
                        className="btn btn-primary" target="blank">Ver noticia</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                   {/* Card 2 */}
                    <div className="card w-100">
                      <img src="https://noticierodigital.com/wp-content/uploads/2026/03/IMG-20260311-WA0098.jpg" 
                           className="card-img-top" alt="realme"/>
                      <div className="card-body">
                        <h5 className="card-title">El poder de un editor PDF</h5>
                        <p className="card-text">Editor PDF : cómo un potente editor transforma tu flujo de trabajo diario</p>
                        <a href="https://noticierodigital.com/2026/03/editor-pdf-como-un-potente-editor-transforma-tu-flujo-de-trabajo-diario/" 
                        className="btn btn-primary" target="blank">Ver noticia</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                   {/* Card 3 */}
                    <div className="card w-100">
                      <img src="https://i0.wp.com/laverdadnoticias.com/wp-content/uploads/2026/03/Ultima-filtracion-del-iPhone-18-Pro-revela-cambio-que-no-llegara.webp" 
                           className="card-img-top" alt="realme"/>
                      <div className="card-body">
                        <h5 className="card-title">Última filtración del iPhone 18 Pro</h5>
                        <p className="card-text">Última filtración del iPhone 18 Pro revela cambio que no llegará</p>
                        <a href="https://laverdadnoticias.com/futuro-ahora/gadgets-que-importan/ultima-filtracion" 
                        className="btn btn-primary" target="blank">Ver noticia</a>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </section>
          </div>
        </div>
      </main>

      {/* FOOTER (abajo) */}
      <footer className="mt-auto py-3 border-top">
        <div className="container">
          <small>© Enyogo News 2026, SPA - MaikolJM</small>
        </div>
      </footer>
    </div>
  );
};

function getSpanishDate(){
  const today = new Date();

  // Options to specify the desired format (weekday, day, month, year)
  const options: Intl.DateTimeFormatOptions = {
      weekday: 'long', // full name of the day (e.g., 'jueves')
      year: 'numeric', // full year (e.g., '2026')
      month: 'long',   // full name of the month (e.g., 'marzo')
      day: 'numeric'   // day of the month (e.g., '12')
  };

  // Format the date using the Spanish locale (es-ES)
  const spanishDate = today.toLocaleDateString('es-ES', options);
  return spanishDate;
}

export default App;