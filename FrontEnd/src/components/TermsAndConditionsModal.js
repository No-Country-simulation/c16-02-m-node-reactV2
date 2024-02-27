import { useState } from "react";

export default function TermsAndConditionsModal({ isOpen, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Términos y Condiciones del Festival</h2>
              <button onClick={handleClose} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-gray-700 text-base">
              <ol>
                <li><strong>Introducción</strong><br />
                  Estos términos y condiciones rigen la participación en el evento ‘Club Festival 2024’. Al asistir al festival, aceptas cumplir con estas disposiciones.
                </li>
                <li><strong>Comportamiento y Seguridad</strong><br />
                  Los asistentes deben comportarse de manera respetuosa y seguir las instrucciones del personal del festival. No se tolerará ningún comportamiento violento, discriminatorio o ilegal. El organizador no se hace responsable por pérdidas, daños o lesiones durante el evento.
                </li>
                <li><strong>Propiedad intelectual</strong><br />
                  Todo el contenido generado durante el festival (fotografía, vídeos, etc.) está sujeto a derechos de autor. Los asistentes otorgan al organizador el derecho de uso de imagen para fines promocionales.
                </li>
                <li><strong>Legislación Aplicable</strong><br />
                  Estos términos y condiciones se rigen por las leyes de Argentina. Cualquier disputa se resolverá en los tribunales competentes de la Ciudad Autónoma de Buenos Aires.
                </li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
