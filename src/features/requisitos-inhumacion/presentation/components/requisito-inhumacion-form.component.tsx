"use client";

import { useState } from "react";
import RHFCementerySelect from "@/shared/components/form/rhf/rhf-cementery-select";
import { RequisitoInhumacionEntity } from "../../domain/entities/requisito-inhumacion.entity";
import { useRequisitoInhumacionForm } from "../hooks/use-requisito-inhumacion-form";
import { FormProvider } from "react-hook-form";
import RHFInput from "@/shared/components/form/rhf/rhf-input";
import RHFSelect from "@/shared/components/form/rhf/rhf-select";
import RHFAutocompletePerson from "@/shared/components/form/rhf/rhf-autocomplete-person";
import RHFTextarea from "@/shared/components/form/rhf/rhf-text-area";
import RHFDatePicker from "@/shared/components/form/rhf/rhf-calendar";
import RHFCheckbox from "@/shared/components/form/rhf/rhf-chechbox";
import RHFHuecoNichoSelect from "@/shared/components/form/rhf/rhf-hueco-nicho-select";

interface RequisitoInhumacionFormProps {
    requistoInhumacion?: RequisitoInhumacionEntity;
}

const metodoSolicitudOptions = [
    { value: "escrita", label: "Escrita" },
    { value: "verbal", label: "Verbal" },
];

const steps = [
    {
        id: 1,
        title: "Información General",
        description: "Datos básicos del cementerio y solicitud",
        color: "bg-blue-500",
        fields: ["idCementerio", "pantoneroACargo", "metodoSolicitud", "idHuecoNicho"]
    },
    {
        id: 2,
        title: "Personas Involucradas",
        description: "Datos del solicitante y fallecido",
        color: "bg-green-500",
        fields: ["idSolicitante", "idFallecido", "observacionSolicitante"]
    },
    {
        id: 3,
        title: "Programación",
        description: "Fecha y hora de la inhumación",
        color: "bg-purple-500",
        fields: ["fechaInhumacion", "horaInhumacion"]
    },
    {
        id: 4,
        title: "Documentos",
        description: "Requisitos y documentación",
        color: "bg-red-500",
        fields: ["copiaCertificadoDefuncion", "informeEstadisticoINEC", "copiaCedula", "pagoTasaInhumacion", "copiaTituloPropiedadNicho"]
    },
    {
        id: 5,
        title: "Autorización",
        description: "Firma y confirmación final",
        color: "bg-orange-500",
        fields: ["firmaAceptacionSepulcro"]
    }
];

export function RequisitoInhumacionForm({ requistoInhumacion }: RequisitoInhumacionFormProps) {
    const { methods, onSubmit, isPending } = useRequisitoInhumacionForm(requistoInhumacion);
    const [currentStep, setCurrentStep] = useState(1);

    const validateStep = async (stepFields: string[]) => {
        const result = await methods.trigger(stepFields as any);
        return result;
    };

    const handleNext = async () => {
        const currentStepData = steps.find(step => step.id === currentStep);
        if (currentStepData) {
            const isValid = await validateStep(currentStepData.fields);
            if (isValid) {
                setCurrentStep(prev => Math.min(prev + 1, steps.length));
            }
        }
    };

    const handlePrevious = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    const goToStep = async (stepNumber: number) => {
        if (stepNumber <= currentStep) {
            setCurrentStep(stepNumber);
            return;
        }

        for (let i = 1; i < stepNumber; i++) {
            const stepData = steps.find(step => step.id === i);
            if (stepData) {
                const isValid = await validateStep(stepData.fields);
                if (!isValid) {
                    return; 
                }
            }
        }
        setCurrentStep(stepNumber);
    };

    const currentStepData = steps.find(step => step.id === currentStep);

    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Header del Wizard */}
            <div className="bg-white shadow-lg rounded-lg mb-6">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800">Registro de Requisitos de Inhumación</h2>
                    <p className="text-gray-600 mt-1">Paso {currentStep} de {steps.length}: {currentStepData?.description}</p>
                </div>

                <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-center">
                                <button
                                    onClick={() => goToStep(step.id)}
                                    className={`
                                        flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm transition-all duration-200
                                        ${currentStep === step.id 
                                            ? `${step.color} text-white shadow-lg` 
                                            : currentStep > step.id 
                                                ? 'bg-gray-400 text-white cursor-pointer hover:bg-gray-500' 
                                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                        }
                                    `}
                                    disabled={currentStep < step.id}
                                >
                                    {currentStep > step.id ? '✓' : step.id}
                                </button>
                                <div className="ml-3 hidden md:block">
                                    <p className={`text-sm font-medium ${currentStep === step.id ? 'text-gray-900' : 'text-gray-500'}`}>
                                        {step.title}
                                    </p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`w-8 h-0.5 mx-4 ${currentStep > step.id ? 'bg-gray-400' : 'bg-gray-200'}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="p-6">
                        
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div className="flex items-center mb-6">
                                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                                    <h3 className="text-xl font-semibold text-gray-800">Información General</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <RHFCementerySelect 
                                        name="idCementerio" 
                                        label="Cementerio" 
                                        placeholder="Selecciona un cementerio" 
                                    />
                                    <RHFInput 
                                        name="pantoneroACargo" 
                                        label="Panteonero a Cargo" 
                                        placeholder="Nombre del panteonero a cargo" 
                                    />
                                    <RHFSelect 
                                        name="metodoSolicitud" 
                                        label="Método de Solicitud" 
                                        options={metodoSolicitudOptions} 
                                        placeholder="Selecciona el método de solicitud" 
                                    />
                                    <RHFHuecoNichoSelect
                                    name="idHuecoNicho"
                                    label="Hueco/Nicho"
                                    placeholder="Selecciona un hueco o nicho"
                                    />
                                    {/* <RHFInput 
                                        name="idHuecoNicho" 
                                        label="ID Hueco/Nicho" 
                                        placeholder="Identificador del hueco o nicho" 
                                    /> */}
                                </div>
                            </div>
                        )}

                        {/* Paso 2: Personas Involucradas */}
                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <div className="flex items-center mb-6">
                                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                                    <h3 className="text-xl font-semibold text-gray-800">Personas Involucradas</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <RHFAutocompletePerson 
                                        name="idSolicitante" 
                                        label="Solicitante" 
                                        placeholder="Selecciona un solicitante" 
                                    />
                                    <RHFAutocompletePerson 
                                        name="idFallecido" 
                                        label="Fallecido" 
                                        placeholder="Ingrese a la persona fallecida" 
                                    />
                                </div>
                                <div className="col-span-2">
                                    <RHFTextarea 
                                        name="observacionSolicitante" 
                                        label="Observación del Solicitante" 
                                        placeholder="Observaciones del solicitante" 
                                        rows={4}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Paso 3: Programación */}
                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <div className="flex items-center mb-6">
                                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                                    <h3 className="text-xl font-semibold text-gray-800">Programación de Inhumación</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <RHFDatePicker 
                                        name="fechaInhumacion" 
                                        label="Fecha de Inhumación" 
                                    />
                                    <RHFInput
                                        name="horaInhumacion"
                                        label="Hora de Inhumación"
                                        type="time"
                                        placeholder="HH:MM"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Paso 4: Documentos */}
                        {currentStep === 4 && (
                            <div className="space-y-6">
                                <div className="flex items-center mb-6">
                                    <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                                    <h3 className="text-xl font-semibold text-gray-800">Documentos y Requisitos</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <RHFCheckbox 
                                        name="copiaCertificadoDefuncion" 
                                        label="Copia de Certificado de Defunción"
                                        description="Documento requerido para el proceso"
                                    />
                                    <RHFCheckbox 
                                        name="informeEstadisticoINEC" 
                                        label="Informe Estadístico INEC"
                                        description="Reporte estadístico del Instituto Nacional"
                                    />
                                    <RHFCheckbox 
                                        name="copiaCedula" 
                                        label="Copia de Cédula"
                                        description="Identificación del solicitante"
                                    />
                                    <RHFCheckbox 
                                        name="pagoTasaInhumacion" 
                                        label="Pago de Tasa de Inhumación"
                                        description="Comprobante de pago de tasas"
                                    />
                                    <RHFCheckbox 
                                        name="copiaTituloPropiedadNicho" 
                                        label="Copia Título de Propiedad del Nicho"
                                        description="Documento de propiedad del espacio"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Paso 5: Autorización */}
                        {currentStep === 5 && (
                            <div className="space-y-6">
                                <div className="flex items-center mb-6">
                                    <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                                    <h3 className="text-xl font-semibold text-gray-800">Autorización Final</h3>
                                </div>
                                <RHFInput 
                                    name="firmaAceptacionSepulcro" 
                                    label="Firma de Aceptación del Sepulcro" 
                                    placeholder="Firma digitalizada o nombre completo"
                                />
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                                    <h4 className="font-semibold text-blue-800 mb-2">Resumen de la Solicitud</h4>
                                    <p className="text-blue-700 text-sm">
                                        Por favor, revise todos los datos antes de enviar la solicitud. Una vez enviada, 
                                        algunos campos no podrán ser modificados.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Botones de Navegación */}
                        <div className="flex justify-between pt-8 border-t border-gray-200 mt-8">
                            <button 
                                type="button" 
                                onClick={handlePrevious}
                                disabled={currentStep === 1}
                                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                            >
                                ← Anterior
                            </button>

                            <div className="flex space-x-4">
                                {currentStep < steps.length ? (
                                    <button 
                                        type="button" 
                                        onClick={handleNext}
                                        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        Siguiente →
                                    </button>
                                ) : (
                                    <button 
                                        type="submit" 
                                        className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                                        disabled={isPending}
                                    >
                                        {isPending ? 'Guardando...' : '✓ Guardar Requisitos'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}