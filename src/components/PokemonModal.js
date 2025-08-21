import React, { useState } from "react";
import "../css/PokemonModal.css";
import {Oscuros}  from "../components/colors";

export const PokemonModal = ({ pokemon, onClose }) => {
  const [activeTab, setActiveTab] = useState("info"); // info o stats

  if (!pokemon) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-header ">
            <h5 className="modal-title text-capitalize">{pokemon.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          {/* Imagen */}
          <div className="modal-body text-center">
            <img src={pokemon.image} alt={pokemon.name} />
            <div className="mb-2">
                  {pokemon.types.map((type, index) => (
                    <span key={index} className="badge mx-1 text-capitalize"
                    style={{ "--bgColor": Oscuros[type] }}>
                      {type}
                    </span>
                  ))}
                </div>
          </div>
                

          {/* Body con tabs */}
          <div className="modal-body">
            <ul className="nav nav-tabs mb-3">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "info" ? "active" : ""}`}
                  onClick={() => setActiveTab("info")}
                >
                  Información
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "stats" ? "active" : ""}`}
                  onClick={() => setActiveTab("stats")}
                >
                  Stats
                </button>
              </li>
            </ul>

            {/* Contenido de las pestañas */}
            {activeTab === "info" && (
                
              <div className="pokemon-info">
                <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
                <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
                <p><strong>Habilidades:</strong> {pokemon.abilities.join(", ")}</p>
              </div>
            )}

            {activeTab === "stats" && (
              <div>
                {pokemon.stats &&
                  pokemon.stats.map((stat, index) => (
                    <div key={index} className="mb-2">
                      <strong className="text-capitalize">{stat.stat.name}:</strong>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${stat.base_stat}%` }}
                          aria-valuenow={stat.base_stat}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {stat.base_stat}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
