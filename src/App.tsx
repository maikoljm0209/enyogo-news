import React from "react";
import "./App.css";
import { useNews } from "@/hooks/useNews";
import { NewsCard } from "@/components/NewsCard";
import logo from "@/assets/img/Logo-Enyogo-News-Trasnparente.png";

const App: React.FC = () => {
  const { news, loading, error } = useNews();
      return (
      <div className="min-vh-100 d-flex flex-column" id="general-content-spa">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg py-0 mt-1" id="main-navbar">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img style={{borderRadius: "5px"}} src={logo} alt="logo-page" width="50" height="50"/>
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
          <div className="container py-3">
            {/* Hero */}
            <div className="row mb-3 colorhint-gradient margins-and-borders-title-new-and-date">
              <div className="col mt-2">
                <h1 className="mb-3">Últimas Noticias de Tecnología en Español</h1>
                <p className="mb-0">Fecha: {getSpanishDate()}</p>
              </div>
            </div>

            {/* Content grid */}
            <div className="row g-3 content-grid">
              <aside className="col-12 col-lg-3">
                <div className="p-3 border rounded sidebar-color">Sidebar</div>
              </aside>

              <section className="col-12 col-lg-9">
                <div className="p-3 border rounded sidebar-color" style={{ marginBottom: "16px" }}>
                  <div className="row">
                    <p className="text-center fs-4">Principales Noticias del Día</p>
                  </div>
                  {/* Seccion de noticias */}
                  <div className="row g-3">
                    {loading && (
                      <div className="col-12">
                        <div className="alert alert-info mb-0" role="alert">
                          Cargando noticias, permitanos un instante!!!
                        </div>
                      </div>
                    )}

                    {error && !loading && (
                      <div className="col-12">
                        <div className="alert alert-danger mb-0" role="alert">
                         Disculpe, se presento un error al cargar las noticias, presione F5 para recargar o espere de 10 a 5 segundos: {error}
                        </div>
                      </div>
                    )}

                    {!loading && !error && news.length === 0 && (
                      <div className="col-12">
                        <div className="alert alert-warning mb-0" role="alert">
                          Disculpe, al parecer no hay noticias disponibles en este momento, por favor visitenos nuevamente más tarde.
                        </div>
                      </div>
                    )}

                    {!loading && !error && news.length > 0 && news.map((article) =>(
                      <div className="col-12 col-md-6 col-lg-4" key={article.url}>
                        <NewsCard article={article} />
                      </div>
                    ))}
                  </div>

                </div>
              </section>
            </div>
          </div>
        </main>

        {/* FOOTER*/}
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
