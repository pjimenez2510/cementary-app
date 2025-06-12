import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { RequisitoInhumacionEntity } from "../../domain/entities/requisito-inhumacion.entity";
import { useState } from "react";

interface RequisitoInhumacionInfoCardProps {
  requisitoInhumacion: RequisitoInhumacionEntity;
}

export function RequisitoInhumacionCard({
  requisitoInhumacion,
}: RequisitoInhumacionInfoCardProps) {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (sectionKey: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "No especificado";
    return new Date(dateString).toLocaleDateString('es-ES');
  };

  const formatBoolean = (value: boolean) => value ? "Sí" : "No";

  const getStatusColor = (status: string) => {
    switch (status?.toUpperCase()) {
      case 'ACTIVO':
      case 'DISPONIBLE':
      case 'LIBRE':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'INACTIVO':
      case 'OCUPADO':
      case 'NO_DISPONIBLE':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'MANTENIMIENTO':
      case 'PENDIENTE':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const SectionHeader = ({ 
    title, 
    sectionKey, 
    bgColor = "bg-gray-50", 
    textColor = "text-gray-800",
    borderColor = "border-gray-400"
  }: {
    title: string;
    sectionKey: string;
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
  }) => (
    <div 
      className={`${bgColor} ${borderColor} border-l-4 p-3 cursor-pointer hover:opacity-80 transition-opacity`}
      onClick={() => toggleSection(sectionKey)}
    >
      <div className="flex justify-between items-center">
        <h3 className={`font-semibold text-lg ${textColor}`}>{title}</h3>
        <span className={`transform transition-transform ${expandedSections[sectionKey] ? 'rotate-180' : ''} ${textColor}`}>
          ▼
        </span>
      </div>
    </div>
  );

  return (
    <Card className="p-2 md:p-6 mb-6 border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-black">
          Información del Requisito de Inhumación
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        
        {/* Datos Básicos */}
        <div>
          <SectionHeader 
            title="Datos Básicos" 
            sectionKey="basicos"
            bgColor="bg-gray-50"
            textColor="text-black"
            borderColor="border-gray-500"
          />
          {expandedSections.basicos && (
            <div className="p-4 bg-white border border-gray-200 border-t-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>
                  <span className="font-medium text-black">ID:</span>{" "}
                  <span className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">
                    {requisitoInhumacion.idRequsitoInhumacion}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-black">Pantonero a Cargo:</span>{" "}
                  <span className="text-gray-700">{requisitoInhumacion.pantoneroACargo}</span>
                </p>
                <p>
                  <span className="font-medium text-black">Método de Solicitud:</span>{" "}
                  <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                    {requisitoInhumacion.metodoSolicitud}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-black">Fecha de Inhumación:</span>{" "}
                  <span className="text-gray-700">{formatDate(requisitoInhumacion.fechaInhumacion)}</span>
                </p>
                <p>
                  <span className="font-medium text-black">Hora de Inhumación:</span>{" "}
                  <span className="text-gray-700">{requisitoInhumacion.horaInhumacion || "No especificado"}</span>
                </p>
                <p>
                  <span className="font-medium text-black">Firma Aceptación:</span>{" "}
                  <span className="text-gray-700">{requisitoInhumacion.firmaAceptacionSepulcro || "No especificado"}</span>
                </p>
              </div>
              {requisitoInhumacion.observacionSolicitante && (
                <div className="mt-4">
                  <p className="font-medium mb-2 text-black">Observaciones:</p>
                  <p className="text-sm bg-gray-50 text-gray-700 p-3 rounded border">
                    {requisitoInhumacion.observacionSolicitante}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Información del Cementerio */}
        <div>
          <SectionHeader 
            title="Información del Cementerio" 
            sectionKey="cementerio"
            bgColor="bg-gray-100"
            textColor="text-black"
            borderColor="border-gray-600"
          />
          {expandedSections.cementerio && (
            <div className="p-4 bg-white border border-gray-200 border-t-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>
                  <span className="font-medium text-black">Nombre:</span>{" "}
                  <span className="text-gray-700">{requisitoInhumacion.idCementerio?.nombre || "No especificado"}</span>
                </p>
                <p>
                  <span className="font-medium text-black">Estado:</span>{" "}
                  <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(requisitoInhumacion.idCementerio?.estado)}`}>
                    {requisitoInhumacion.idCementerio?.estado || "No especificado"}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-black">Dirección:</span>{" "}
                  <span className="text-gray-700">{requisitoInhumacion.idCementerio?.direccion || "No especificado"}</span>
                </p>
                <p>
                  <span className="font-medium text-black">Teléfono:</span>{" "}
                  <span className="text-gray-700">{requisitoInhumacion.idCementerio?.telefono || "No especificado"}</span>
                </p>
                <p>
                  <span className="font-medium text-black">Responsable:</span>{" "}
                  <span className="text-gray-700">{requisitoInhumacion.idCementerio?.responsable || "No especificado"}</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Datos del Solicitante */}
        <div>
          <SectionHeader 
            title="Datos del Solicitante" 
            sectionKey="solicitante"
            bgColor="bg-gray-50"
            textColor="text-black"
            borderColor="border-gray-500"
          />
          {expandedSections.solicitante && (
            <div className="p-4 bg-white border border-gray-200 border-t-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>
                  <span className="font-medium text-black">Nombre Completo:</span>{" "}
                  <span className="font-semibold text-gray-800">
                    {`${requisitoInhumacion.idSolicitante?.nombres || ""} ${requisitoInhumacion.idSolicitante?.apellidos || ""}`.trim() || "No especificado"}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-black">Cédula:</span>{" "}
                  <span className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">
                    {requisitoInhumacion.idSolicitante?.cedula || "No especificado"}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-black">Teléfono:</span>{" "}
                  <span className="text-gray-700">{requisitoInhumacion.idSolicitante?.telefono || "No especificado"}</span>
                </p>
                <p>
                  <span className="font-medium text-black">Correo:</span>{" "}
                  <span className="text-gray-700">{requisitoInhumacion.idSolicitante?.correo || "No especificado"}</span>
                </p>
                <p>
                  <span className="font-medium text-black">Dirección:</span>{" "}
                  <span className="text-gray-700">{requisitoInhumacion.idSolicitante?.direccion || "No especificado"}</span>
                </p>
                <p>
                  <span className="font-medium text-black">Tipo:</span>{" "}
                  <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                    {requisitoInhumacion.idSolicitante?.tipo || "No especificado"}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Datos del Fallecido */}
        <div>
          <SectionHeader 
            title="Datos del Fallecido" 
            sectionKey="fallecido"
            bgColor="bg-gray-100"
            textColor="text-black"
            borderColor="border-gray-600"
          />
          {expandedSections.fallecido && (
            <div className="p-4 bg-white border border-gray-200 border-t-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>
                  <span className="font-medium text-black">Nombre Completo:</span>{" "}
                  <span className="font-semibold text-gray-800">
                    {`${requisitoInhumacion.idFallecido?.nombres || ""} ${requisitoInhumacion.idFallecido?.apellidos || ""}`.trim() || "No especificado"}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-black">Cédula:</span>{" "}
                  <span className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">
                    {requisitoInhumacion.idFallecido?.cedula || "No especificado"}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-black">Fecha de Nacimiento:</span>{" "}
                  <span className="text-gray-700">{formatDate(requisitoInhumacion.idFallecido?.fecha_nacimiento)}</span>
                </p>
                <p>
                  <span className="font-medium text-black">Fecha de Defunción:</span>{" "}
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                    {requisitoInhumacion.idFallecido?.fecha_defuncion 
                      ? formatDate(requisitoInhumacion.idFallecido.fecha_defuncion)
                      : "No especificado"}
                  </span>
                </p>
                <p>
                  <span className="font-medium text-black">Lugar de Defunción:</span>{" "}
                  <span className="text-gray-700">{requisitoInhumacion.idFallecido?.lugar_defuncion || "No especificado"}</span>
                </p>
                <p>
                  <span className="font-medium text-black">Causa de Defunción:</span>{" "}
                  <span className="text-gray-700">{requisitoInhumacion.idFallecido?.causa_defuncion || "No especificado"}</span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Ubicación del Sepulcro */}
        <div>
          <SectionHeader 
            title="Ubicación del Sepulcro" 
            sectionKey="ubicacion"
            bgColor="bg-gray-50"
            textColor="text-black"
            borderColor="border-gray-500"
          />
          {expandedSections.ubicacion && (
            <div className="p-4 bg-white border border-gray-200 border-t-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-black border-b border-gray-200 pb-1">Datos del Hueco</h4>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium text-black">ID Hueco:</span>{" "}
                      <span className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">
                        {requisitoInhumacion.idHuecoNicho?.idDetalleHueco || "No especificado"}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-black">Número de Hueco:</span>{" "}
                      <span className="font-bold text-lg text-black">
                        {requisitoInhumacion.idHuecoNicho?.numHueco || "No especificado"}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium text-black">Estado:</span>{" "}
                      <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(requisitoInhumacion.idHuecoNicho?.estado)}`}>
                        {requisitoInhumacion.idHuecoNicho?.estado || "No especificado"}
                      </span>
                    </p>
                  </div>
                </div>
                
                {requisitoInhumacion.idHuecoNicho?.idNicho && (
                  <div>
                    <h4 className="font-medium mb-3 text-black border-b border-gray-200 pb-1">Datos del Nicho</h4>
                    <div className="space-y-2">
                      <p>
                        <span className="font-medium text-black">Ubicación:</span>{" "}
                        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm font-medium">
                          Sector {requisitoInhumacion.idHuecoNicho.idNicho.sector} - 
                          Fila {requisitoInhumacion.idHuecoNicho.idNicho.fila} - 
                          #{requisitoInhumacion.idHuecoNicho.idNicho.numero}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium text-black">Tipo:</span>{" "}
                        <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                          {requisitoInhumacion.idHuecoNicho.idNicho.tipo}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium text-black">Estado:</span>{" "}
                        <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(requisitoInhumacion.idHuecoNicho.idNicho.estado)}`}>
                          {requisitoInhumacion.idHuecoNicho.idNicho.estado}
                        </span>
                      </p>
                      <p>
                        <span className="font-medium text-black">Total de Huecos:</span>{" "}
                        <span className="text-gray-700">{requisitoInhumacion.idHuecoNicho.idNicho.numHuecos}</span>
                      </p>
                      {requisitoInhumacion.idHuecoNicho.idNicho.observaciones && (
                        <p>
                          <span className="font-medium text-black">Observaciones:</span>{" "}
                          <span className="text-sm bg-gray-50 text-gray-700 p-2 rounded border">
                            {requisitoInhumacion.idHuecoNicho.idNicho.observaciones}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Requisitos Documentales */}
        <div>
          <SectionHeader 
            title="Requisitos Documentales" 
            sectionKey="documentos"
            bgColor="bg-gray-100"
            textColor="text-black"
            borderColor="border-gray-600"
          />
          {expandedSections.documentos && (
            <div className="p-4 bg-white border border-gray-200 border-t-0">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded border border-gray-300 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <span className={`w-4 h-4 rounded-full ${
                      requisitoInhumacion.copiaCertificadoDefuncion ? 'bg-green-500' : 'bg-red-500'
                    }`}></span>
                    <span className="text-black font-medium">Certificado de Defunción</span>
                  </div>
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    requisitoInhumacion.copiaCertificadoDefuncion 
                      ? 'bg-green-100 text-green-800 border border-green-300' 
                      : 'bg-red-100 text-red-800 border border-red-300'
                  }`}>
                    {formatBoolean(requisitoInhumacion.copiaCertificadoDefuncion)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded border border-gray-300 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <span className={`w-4 h-4 rounded-full ${
                      requisitoInhumacion.informeEstadisticoINEC ? 'bg-green-500' : 'bg-red-500'
                    }`}></span>
                    <span className="text-black font-medium">Informe Estadístico INEC</span>
                  </div>
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    requisitoInhumacion.informeEstadisticoINEC 
                      ? 'bg-green-100 text-green-800 border border-green-300' 
                      : 'bg-red-100 text-red-800 border border-red-300'
                  }`}>
                    {formatBoolean(requisitoInhumacion.informeEstadisticoINEC)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded border border-gray-300 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <span className={`w-4 h-4 rounded-full ${
                      requisitoInhumacion.copiaCedula ? 'bg-green-500' : 'bg-red-500'
                    }`}></span>
                    <span className="text-black font-medium">Copia de Cédula</span>
                  </div>
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    requisitoInhumacion.copiaCedula 
                      ? 'bg-green-100 text-green-800 border border-green-300' 
                      : 'bg-red-100 text-red-800 border border-red-300'
                  }`}>
                    {formatBoolean(requisitoInhumacion.copiaCedula)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded border border-gray-300 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <span className={`w-4 h-4 rounded-full ${
                      requisitoInhumacion.pagoTasaInhumacion ? 'bg-green-500' : 'bg-red-500'
                    }`}></span>
                    <span className="text-black font-medium">Pago Tasa Inhumación</span>
                  </div>
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    requisitoInhumacion.pagoTasaInhumacion 
                      ? 'bg-green-100 text-green-800 border border-green-300' 
                      : 'bg-red-100 text-red-800 border border-red-300'
                  }`}>
                    {formatBoolean(requisitoInhumacion.pagoTasaInhumacion)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded border border-gray-300 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <span className={`w-4 h-4 rounded-full ${
                      requisitoInhumacion.copiaTituloPropiedadNicho ? 'bg-green-500' : 'bg-red-500'
                    }`}></span>
                    <span className="text-black font-medium">Copia Título Propiedad Nicho</span>
                  </div>
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    requisitoInhumacion.copiaTituloPropiedadNicho 
                      ? 'bg-green-100 text-green-800 border border-green-300' 
                      : 'bg-red-100 text-red-800 border border-red-300'
                  }`}>
                    {formatBoolean(requisitoInhumacion.copiaTituloPropiedadNicho)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Documentos Adjuntos */}
        {requisitoInhumacion.pdfUrls && requisitoInhumacion.pdfUrls.length > 0 && (
          <div>
            <SectionHeader 
              title="Documentos Adjuntos" 
              sectionKey="pdfs"
              bgColor="bg-gray-50"
              textColor="text-black"
              borderColor="border-gray-500"
            />
            {expandedSections.pdfs && (
              <div className="p-4 bg-white border border-gray-200 border-t-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {requisitoInhumacion.pdfUrls.map((url, index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <span className="mr-2">📄</span>
                      Documento {index + 1}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}