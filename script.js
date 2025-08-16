// Variables globales
let evaluacionActual = null;
let evaluacionesGuardadas = [];

// Matriz de evaluación mejorada con 84 criterios específicos
const MATRIZ_EVALUACION = [
    {
        categoria: "REQUISITOS LEGALES Y NORMATIVOS",
        peso: 3,
        nivel: "CRÍTICO",
        criterios: [
            { id: "RL1", descripcion: "Licencias federales vigentes (NOM aplicables)", observaciones: "" },
            { id: "RL2", descripcion: "Permisos estatales y municipales", observaciones: "" },
            { id: "RL3", descripcion: "Seguros de responsabilidad civil (mínimo $5M MXN)", observaciones: "" },
            { id: "RL4", descripcion: "Antecedentes penales del personal", observaciones: "" },
            { id: "RL5", descripcion: "Cumplimiento fiscal y laboral", observaciones: "" },
            { id: "RL6", descripcion: "Registros ante autoridades competentes", observaciones: "" }
        ]
    },
    {
        categoria: "CAPACIDAD OPERATIVA Y CERTIFICACIONES",
        peso: 2,
        nivel: "ALTO",
        criterios: [
            { id: "CO1", descripcion: "Certificaciones ISO 9001, 14001, 45001", observaciones: "" },
            { id: "CO2", descripcion: "Capacidad de respuesta (tiempo máximo)", observaciones: "" },
            { id: "CO3", descripcion: "Cobertura geográfica", observaciones: "" },
            { id: "CO4", descripcion: "Flota de vehículos (edad, mantenimiento)", observaciones: "" },
            { id: "CO5", descripcion: "Equipamiento de seguridad", observaciones: "" },
            { id: "CO6", descripcion: "Infraestructura operativa", observaciones: "" }
        ]
    },
    {
        categoria: "TECNOLOGÍA Y SERVICIOS DE VANGUARDIA",
        peso: 2,
        nivel: "ALTO",
        criterios: [
            { id: "TS1", descripcion: "GPS en tiempo real", observaciones: "" },
            { id: "TS2", descripcion: "Sistemas de comunicación encriptados", observaciones: "" },
            { id: "TS3", descripcion: "Cámaras de vigilancia", observaciones: "" },
            { id: "TS4", descripcion: "Software de gestión de rutas", observaciones: "" },
            { id: "TS5", descripcion: "Backup de datos y redundancia", observaciones: "" },
            { id: "TS6", descripcion: "Sistemas de monitoreo avanzados", observaciones: "" }
        ]
    },
    {
        categoria: "REVISIÓN DE UNIDADES Y EQUIPOS",
        peso: 2,
        nivel: "ALTO",
        criterios: [
            { id: "RU1", descripcion: "Estado físico de vehículos", observaciones: "" },
            { id: "RU2", descripcion: "Equipamiento de seguridad", observaciones: "" },
            { id: "RU3", descripcion: "Mantenimiento preventivo", observaciones: "" },
            { id: "RU4", descripcion: "Certificaciones de equipos", observaciones: "" },
            { id: "RU5", descripcion: "Inventario actualizado", observaciones: "" },
            { id: "RU6", descripcion: "Condiciones de almacenamiento", observaciones: "" }
        ]
    },
    {
        categoria: "GESTIÓN DE RIESGOS Y RESPUESTA A INCIDENTES",
        peso: 3,
        nivel: "CRÍTICO",
        criterios: [
            { id: "GR1", descripcion: "Plan de contingencia documentado", observaciones: "" },
            { id: "GR2", descripcion: "Protocolos de emergencia", observaciones: "" },
            { id: "GR3", descripcion: "Capacitación en primeros auxilios", observaciones: "" },
            { id: "GR4", descripcion: "Seguros contra robo y daños", observaciones: "" },
            { id: "GR5", descripcion: "Coordinación con autoridades", observaciones: "" },
            { id: "GR6", descripcion: "Análisis de vulnerabilidades", observaciones: "" }
        ]
    },
    {
        categoria: "EVALUACIÓN DEL PERSONAL",
        peso: 2,
        nivel: "ALTO",
        criterios: [
            { id: "EP1", descripcion: "Certificaciones de seguridad", observaciones: "" },
            { id: "EP2", descripcion: "Evaluaciones psicológicas", observaciones: "" },
            { id: "EP3", descripcion: "Capacitación continua (horas/año)", observaciones: "" },
            { id: "EP4", descripcion: "Rotación de personal", observaciones: "" },
            { id: "EP5", descripcion: "Supervisión y auditorías", observaciones: "" },
            { id: "EP6", descripcion: "Antecedentes verificados", observaciones: "" }
        ]
    },
    {
        categoria: "ATENCIÓN AL CLIENTE Y TRANSPARENCIA",
        peso: 1.5,
        nivel: "MEDIO",
        criterios: [
            { id: "AC1", descripcion: "Tiempo de respuesta a consultas", observaciones: "" },
            { id: "AC2", descripcion: "Canales de comunicación disponibles", observaciones: "" },
            { id: "AC3", descripcion: "Proceso de resolución de quejas", observaciones: "" },
            { id: "AC4", descripcion: "Atención personalizada", observaciones: "" },
            { id: "AC5", descripcion: "Flexibilidad en servicios", observaciones: "" },
            { id: "AC6", descripcion: "Transparencia en operaciones", observaciones: "" }
        ]
    },
    {
        categoria: "PROCEDIMIENTOS OPERATIVOS",
        peso: 1.5,
        nivel: "MEDIO",
        criterios: [
            { id: "PO1", descripcion: "Manuales de procedimientos actualizados", observaciones: "" },
            { id: "PO2", descripcion: "Protocolos de comunicación interna", observaciones: "" },
            { id: "PO3", descripcion: "Sistema de reportes y documentación", observaciones: "" },
            { id: "PO4", descripcion: "Procedimientos de mantenimiento preventivo", observaciones: "" },
            { id: "PO5", descripcion: "Protocolos de limpieza y sanitización", observaciones: "" },
            { id: "PO6", descripcion: "Gestión de incidentes", observaciones: "" }
        ]
    },
    {
        categoria: "GESTIÓN ADMINISTRATIVA",
        peso: 1.5,
        nivel: "MEDIO",
        criterios: [
            { id: "GA1", descripcion: "Procesos de facturación claros", observaciones: "" },
            { id: "GA2", descripcion: "Transparencia en costos", observaciones: "" },
            { id: "GA3", descripcion: "Contratos y términos claros", observaciones: "" },
            { id: "GA4", descripcion: "Gestión de documentación", observaciones: "" },
            { id: "GA5", descripcion: "Cumplimiento de plazos administrativos", observaciones: "" },
            { id: "GA6", descripcion: "Sistemas de control interno", observaciones: "" }
        ]
    },
    {
        categoria: "TECNOLOGÍA DE SOPORTE",
        peso: 1.5,
        nivel: "MEDIO",
        criterios: [
            { id: "TSO1", descripcion: "Software de gestión administrativa", observaciones: "" },
            { id: "TSO2", descripcion: "Sistemas de facturación", observaciones: "" },
            { id: "TSO3", descripcion: "Plataforma de atención al cliente", observaciones: "" },
            { id: "TSO4", descripcion: "Apps móviles para seguimiento", observaciones: "" },
            { id: "TSO5", descripcion: "Integración con sistemas del cliente", observaciones: "" },
            { id: "TSO6", descripcion: "Herramientas de análisis", observaciones: "" }
        ]
    },
    {
        categoria: "PRESENTACIÓN E IMAGEN CORPORATIVA",
        peso: 1,
        nivel: "BAJO",
        criterios: [
            { id: "PI1", descripcion: "Uniformes del personal", observaciones: "" },
            { id: "PI2", descripcion: "Presentación de vehículos", observaciones: "" },
            { id: "PI3", descripcion: "Materiales promocionales", observaciones: "" },
            { id: "PI4", descripcion: "Imagen corporativa", observaciones: "" },
            { id: "PI5", descripcion: "Higiene personal del personal", observaciones: "" },
            { id: "PI6", descripcion: "Branding consistente", observaciones: "" }
        ]
    },
    {
        categoria: "VALOR AGREGADO Y SERVICIOS ADICIONALES",
        peso: 1,
        nivel: "BAJO",
        criterios: [
            { id: "VA1", descripcion: "Servicios adicionales ofrecidos", observaciones: "" },
            { id: "VA2", descripcion: "Programas de lealtad", observaciones: "" },
            { id: "VA3", descripcion: "Beneficios para el cliente", observaciones: "" },
            { id: "VA4", descripcion: "Innovación en servicios", observaciones: "" },
            { id: "VA5", descripcion: "Diferenciación competitiva", observaciones: "" },
            { id: "VA6", descripcion: "Flexibilidad en soluciones", observaciones: "" }
        ]
    },
    {
        categoria: "RESPONSABILIDAD SOCIAL Y SOSTENIBILIDAD",
        peso: 1,
        nivel: "BAJO",
        criterios: [
            { id: "RS1", descripcion: "Programas comunitarios", observaciones: "" },
            { id: "RS2", descripcion: "Prácticas ambientales", observaciones: "" },
            { id: "RS3", descripcion: "Inclusión laboral", observaciones: "" },
            { id: "RS4", descripcion: "Transparencia corporativa", observaciones: "" },
            { id: "RS5", descripcion: "Ética empresarial", observaciones: "" },
            { id: "RS6", descripcion: "Impacto social positivo", observaciones: "" }
        ]
    },
    {
        categoria: "CIBERSEGURIDAD Y PROTECCIÓN DE DATOS",
        peso: 2,
        nivel: "ALTO",
        criterios: [
            { id: "CP1", descripcion: "Protección de información sensible", observaciones: "" },
            { id: "CP2", descripcion: "Encriptación de comunicaciones", observaciones: "" },
            { id: "CP3", descripcion: "Seguridad de sistemas informáticos", observaciones: "" },
            { id: "CP4", descripcion: "Cumplimiento de LGPD", observaciones: "" },
            { id: "CP5", descripcion: "Backup y recuperación de datos", observaciones: "" },
            { id: "CP6", descripcion: "Auditorías de seguridad informática", observaciones: "" }
        ]
    },
    {
        categoria: "CONTINUIDAD DEL NEGOCIO",
        peso: 1.5,
        nivel: "MEDIO",
        criterios: [
            { id: "CN1", descripcion: "Planes de respaldo operativo", observaciones: "" },
            { id: "CN2", descripcion: "Redundancia de sistemas críticos", observaciones: "" },
            { id: "CN3", descripcion: "Procedimientos de recuperación", observaciones: "" },
            { id: "CN4", descripcion: "Gestión de crisis", observaciones: "" },
            { id: "CN5", descripcion: "Coordinación con proveedores alternativos", observaciones: "" },
            { id: "CN6", descripcion: "Pruebas de contingencia", observaciones: "" }
        ]
    }
];

// Escala de calificación mejorada (1-10)
const ESCALA_CALIFICACION = [
    { min: 90, max: 100, nivel: "EXCELENTE", descripcion: "Aceptable sin reservas", color: "#28a745" },
    { min: 80, max: 89, nivel: "MUY BUENO", descripcion: "Aceptable con mejoras menores", color: "#20c997" },
    { min: 70, max: 79, nivel: "BUENO", descripcion: "Aceptable con mejoras", color: "#17a2b8" },
    { min: 60, max: 69, nivel: "ACEPTABLE", descripcion: "Aceptable con mejoras significativas", color: "#ffc107" },
    { min: 50, max: 59, nivel: "DEFICIENTE", descripcion: "Inaceptable - requiere mejoras críticas", color: "#fd7e14" },
    { min: 40, max: 49, nivel: "INSUFICIENTE", descripcion: "Inaceptable - múltiples deficiencias", color: "#e83e8c" },
    { min: 30, max: 39, nivel: "CRÍTICO", descripcion: "Inadmisible - deficiencias graves", color: "#dc3545" },
    { min: 0, max: 29, nivel: "INADMISIBLE", descripcion: "Inadmisible - no cumple requisitos mínimos", color: "#6f42c1" }
];

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    configurarFechaActual();
    cargarEvaluacionesGuardadas();
    mostrarSeccion('formulario');
});

// Configurar fecha actual en formato DD/MM/YYYY
function configurarFechaActual() {
    const fechaInput = document.getElementById('fechaEvaluacion');
    if (fechaInput) {
        const hoy = new Date();
        const dia = String(hoy.getDate()).padStart(2, '0');
        const mes = String(hoy.getMonth() + 1).padStart(2, '0');
        const año = hoy.getFullYear();
        fechaInput.value = `${dia}/${mes}/${año}`;
    }
}

// Formatear fecha para validación
function formatearFecha(fecha) {
    const partes = fecha.split('/');
    if (partes.length === 3) {
        const dia = parseInt(partes[0]);
        const mes = parseInt(partes[1]) - 1;
        const año = parseInt(partes[2]);
        return new Date(año, mes, dia);
    }
    return null;
}

// Validar formato de fecha
function validarFecha(fecha) {
    const fechaObj = formatearFecha(fecha);
    if (!fechaObj || isNaN(fechaObj.getTime())) {
        return false;
    }
    
    const partes = fecha.split('/');
    const dia = parseInt(partes[0]);
    const mes = parseInt(partes[1]);
    const año = parseInt(partes[2]);
    
    return dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && año >= 2020 && año <= 2030;
}

// Mostrar sección específica
function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    document.querySelectorAll('.seccion').forEach(s => s.style.display = 'none');
    
    // Mostrar la sección solicitada
    const seccionElement = document.getElementById(seccion);
    if (seccionElement) {
        seccionElement.style.display = 'block';
    }
    
    // Generar matriz si es la sección de evaluación
    if (seccion === 'evaluacion') {
        generarMatriz();
    }
}

// Generar matriz de evaluación
function generarMatriz() {
    const contenedor = document.getElementById('matrizEvaluacion');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    MATRIZ_EVALUACION.forEach((categoria, indexCategoria) => {
        const categoriaDiv = document.createElement('div');
        categoriaDiv.className = 'categoria';
        categoriaDiv.innerHTML = `
            <h3 class="categoria-titulo">
                ${categoria.categoria}
                <span class="peso-badge peso-${categoria.nivel.toLowerCase()}">
                    ${categoria.nivel} (Peso: ${categoria.peso}x)
                </span>
            </h3>
            <div class="criterios-container">
                ${categoria.criterios.map((criterio, indexCriterio) => `
                    <div class="criterio" data-categoria="${indexCategoria}" data-criterio="${indexCriterio}">
                        <div class="criterio-header">
                            <span class="criterio-id">${criterio.id}</span>
                            <span class="criterio-descripcion">${criterio.descripcion}</span>
                        </div>
                        <div class="criterio-controls">
                            <div class="puntuacion-buttons">
                                ${[1,2,3,4,5,6,7,8,9,10].map(puntuacion => `
                                    <button class="puntuacion-btn" 
                                            data-puntuacion="${puntuacion}" 
                                            data-categoria="${indexCategoria}" 
                                            data-criterio="${indexCriterio}"
                                            onclick="seleccionarPuntuacion(${indexCategoria}, ${indexCriterio}, ${puntuacion})">
                                        ${puntuacion}
                                    </button>
                                `).join('')}
                            </div>
                            <textarea class="observaciones" 
                                      placeholder="Observaciones..."
                                      data-categoria="${indexCategoria}" 
                                      data-criterio="${indexCriterio}"
                                      onchange="actualizarObservaciones(${indexCategoria}, ${indexCriterio}, this.value)">
                            </textarea>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        contenedor.appendChild(categoriaDiv);
    });
    
    // Cargar datos si hay una evaluación en progreso
    if (evaluacionActual) {
        cargarDatosEvaluacion();
    }
}

// Seleccionar puntuación
function seleccionarPuntuacion(categoriaIndex, criterioIndex, puntuacion) {
    // Remover selección previa
    const criterio = document.querySelector(`[data-categoria="${categoriaIndex}"][data-criterio="${criterioIndex}"]`);
    if (criterio) {
        criterio.querySelectorAll('.puntuacion-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Seleccionar nuevo botón
        const botonSeleccionado = criterio.querySelector(`[data-puntuacion="${puntuacion}"]`);
        if (botonSeleccionado) {
            botonSeleccionado.classList.add('selected');
        }
    }
    
    // Actualizar datos de evaluación
    if (!evaluacionActual) {
        evaluacionActual = {
            datos: {},
            evaluaciones: {}
        };
    }
    
    if (!evaluacionActual.evaluaciones[categoriaIndex]) {
        evaluacionActual.evaluaciones[categoriaIndex] = {};
    }
    
    evaluacionActual.evaluaciones[categoriaIndex][criterioIndex] = {
        puntuacion: puntuacion,
        observaciones: evaluacionActual.evaluaciones[categoriaIndex][criterioIndex]?.observaciones || ''
    };
}

// Actualizar observaciones
function actualizarObservaciones(categoriaIndex, criterioIndex, observaciones) {
    if (!evaluacionActual) {
        evaluacionActual = {
            datos: {},
            evaluaciones: {}
        };
    }
    
    if (!evaluacionActual.evaluaciones[categoriaIndex]) {
        evaluacionActual.evaluaciones[categoriaIndex] = {};
    }
    
    if (!evaluacionActual.evaluaciones[categoriaIndex][criterioIndex]) {
        evaluacionActual.evaluaciones[categoriaIndex][criterioIndex] = {};
    }
    
    evaluacionActual.evaluaciones[categoriaIndex][criterioIndex].observaciones = observaciones;
}

// Guardar evaluación
function guardarEvaluacion() {
    if (!validarFormulario()) return;
    
    recopilarDatosEvaluacion();
    
    if (!evaluacionActual.id) {
        evaluacionActual.id = Date.now().toString();
        evaluacionActual.fechaCreacion = new Date().toISOString();
    }
    
    evaluacionActual.fechaModificacion = new Date().toISOString();
    evaluacionActual.estado = 'en_progreso';
    
    guardarEnLocalStorage();
    alert('Evaluación guardada exitosamente');
}

// Finalizar evaluación
function finalizarEvaluacion() {
    if (!validarFormulario()) return;
    
    recopilarDatosEvaluacion();
    
    if (!evaluacionActual.id) {
        evaluacionActual.id = Date.now().toString();
        evaluacionActual.fechaCreacion = new Date().toISOString();
    }
    
    evaluacionActual.fechaModificacion = new Date().toISOString();
    evaluacionActual.estado = 'finalizada';
    
    guardarEnLocalStorage();
    generarReporte();
}

// Validar formulario
function validarFormulario() {
    const nombreProveedor = document.getElementById('nombreProveedor').value.trim();
    const fechaEvaluacion = document.getElementById('fechaEvaluacion').value.trim();
    const nombreEvaluador = document.getElementById('nombreEvaluador').value.trim();
    
    if (!nombreProveedor) {
        alert('Por favor ingrese el nombre del proveedor');
        return false;
    }
    
    if (!fechaEvaluacion) {
        alert('Por favor ingrese la fecha de evaluación');
        return false;
    }
    
    if (!validarFecha(fechaEvaluacion)) {
        alert('Por favor ingrese una fecha válida en formato DD/MM/YYYY');
        return false;
    }
    
    if (!nombreEvaluador) {
        alert('Por favor ingrese el nombre del evaluador');
        return false;
    }
    
    return true;
}

// Recopilar datos del formulario
function recopilarDatosEvaluacion() {
    evaluacionActual.datos = {
        nombreProveedor: document.getElementById('nombreProveedor').value.trim(),
        fechaEvaluacion: document.getElementById('fechaEvaluacion').value.trim(),
        nombreEvaluador: document.getElementById('nombreEvaluador').value.trim()
    };
}

// Generar reporte
function generarReporte() {
    if (!evaluacionActual) return;
    
    const reporteHTML = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Reporte de Evaluación - ${evaluacionActual.datos.nombreProveedor}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
                .info-basic { margin-bottom: 30px; }
                .info-basic table { width: 100%; border-collapse: collapse; }
                .info-basic td { padding: 8px; border: 1px solid #ddd; }
                .info-basic td:first-child { font-weight: bold; background-color: #f5f5f5; }
                .resumen { margin-bottom: 30px; }
                .resumen h3 { color: #333; border-bottom: 1px solid #333; padding-bottom: 5px; }
                .puntuacion-final { font-size: 24px; font-weight: bold; text-align: center; padding: 20px; margin: 20px 0; border: 2px solid #333; }
                .categoria-resumen { margin-bottom: 20px; }
                .categoria-resumen h4 { color: #666; margin-bottom: 10px; }
                .criterio-detalle { margin-left: 20px; margin-bottom: 10px; }
                .criterio-detalle strong { color: #333; }
                .observaciones { font-style: italic; color: #666; margin-left: 20px; }
                .nivel-seguridad { text-align: center; font-size: 20px; font-weight: bold; margin: 20px 0; padding: 15px; border-radius: 5px; }
                @media print { body { margin: 10px; } }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Reporte de Evaluación de Proveedor</h1>
                <h2>Sistema de Custodia y Seguridad</h2>
            </div>
            
            <div class="info-basic">
                <h3>Información General</h3>
                <table>
                    <tr><td>Proveedor:</td><td>${evaluacionActual.datos.nombreProveedor}</td></tr>
                    <tr><td>Fecha de Evaluación:</td><td>${evaluacionActual.datos.fechaEvaluacion}</td></tr>
                    <tr><td>Evaluador:</td><td>${evaluacionActual.datos.nombreEvaluador}</td></tr>
                    <tr><td>Estado:</td><td>${evaluacionActual.estado === 'finalizada' ? 'Finalizada' : 'En Progreso'}</td></tr>
                </table>
            </div>
            
            <div class="resumen">
                <h3>Resumen de Evaluación</h3>
                ${generarResumenEvaluacion()}
            </div>
            
            <div class="puntuacion-final">
                Puntuación Final: ${calcularPuntuacionFinal()} / 100
            </div>
            
            <div class="nivel-seguridad" style="background-color: ${obtenerColorNivelSeguridad()}; color: white;">
                Nivel de Seguridad: ${obtenerNivelSeguridad()}
            </div>
            
            <div class="detalle-evaluacion">
                <h3>Detalle por Categoría</h3>
                ${generarDetalleEvaluacion()}
            </div>
        </body>
        </html>
    `;
    
    const ventana = window.open('', '_blank');
    ventana.document.write(reporteHTML);
    ventana.document.close();
    ventana.print();
}

// Generar resumen de evaluación
function generarResumenEvaluacion() {
    let resumen = '<table style="width: 100%; border-collapse: collapse; margin-top: 15px;">';
    resumen += '<tr style="background-color: #f5f5f5;"><th style="border: 1px solid #ddd; padding: 10px;">Categoría</th><th style="border: 1px solid #ddd; padding: 10px;">Peso</th><th style="border: 1px solid #ddd; padding: 10px;">Puntuación</th><th style="border: 1px solid #ddd; padding: 10px;">Puntuación Ponderada</th></tr>';
    
    let puntuacionTotal = 0;
    let pesoTotal = 0;
    
    MATRIZ_EVALUACION.forEach((categoria, indexCategoria) => {
        const evaluacionesCategoria = evaluacionActual.evaluaciones[indexCategoria] || {};
        let puntuacionCategoria = 0;
        let criteriosEvaluados = 0;
        
        categoria.criterios.forEach((criterio, indexCriterio) => {
            if (evaluacionesCategoria[indexCriterio]) {
                puntuacionCategoria += evaluacionesCategoria[indexCriterio].puntuacion;
                criteriosEvaluados++;
            }
        });
        
        const puntuacionPromedio = criteriosEvaluados > 0 ? puntuacionCategoria / criteriosEvaluados : 0;
        const puntuacionPonderada = puntuacionPromedio * categoria.peso;
        
        puntuacionTotal += puntuacionPonderada;
        pesoTotal += categoria.peso;
        
        resumen += `<tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${categoria.categoria}</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${categoria.peso}x</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${puntuacionPromedio.toFixed(1)}</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${puntuacionPonderada.toFixed(1)}</td>
        </tr>`;
    });
    
    const puntuacionFinal = pesoTotal > 0 ? (puntuacionTotal / pesoTotal) * 10 : 0;
    
    resumen += `<tr style="background-color: #e9ecef; font-weight: bold;">
        <td style="border: 1px solid #ddd; padding: 10px;">TOTAL</td>
        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${pesoTotal.toFixed(1)}x</td>
        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">-</td>
        <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">${puntuacionFinal.toFixed(1)}</td>
    </tr>`;
    
    resumen += '</table>';
    return resumen;
}

// Generar detalle de evaluación
function generarDetalleEvaluacion() {
    let detalle = '';
    
    MATRIZ_EVALUACION.forEach((categoria, indexCategoria) => {
        const evaluacionesCategoria = evaluacionActual.evaluaciones[indexCategoria] || {};
        
        detalle += `<div class="categoria-resumen">
            <h4>${categoria.categoria} (${categoria.nivel} - Peso: ${categoria.peso}x)</h4>`;
        
        categoria.criterios.forEach((criterio, indexCriterio) => {
            const evaluacion = evaluacionesCategoria[indexCriterio];
            if (evaluacion) {
                detalle += `<div class="criterio-detalle">
                    <strong>${criterio.id}:</strong> ${criterio.descripcion} - Puntuación: ${evaluacion.puntuacion}/10
                    ${evaluacion.observaciones ? `<div class="observaciones">Observaciones: ${evaluacion.observaciones}</div>` : ''}
                </div>`;
            }
        });
        
        detalle += '</div>';
    });
    
    return detalle;
}

// Calcular puntuación final
function calcularPuntuacionFinal() {
    let puntuacionTotal = 0;
    let pesoTotal = 0;
    
    MATRIZ_EVALUACION.forEach((categoria, indexCategoria) => {
        const evaluacionesCategoria = evaluacionActual.evaluaciones[indexCategoria] || {};
        let puntuacionCategoria = 0;
        let criteriosEvaluados = 0;
        
        categoria.criterios.forEach((criterio, indexCriterio) => {
            if (evaluacionesCategoria[indexCriterio]) {
                puntuacionCategoria += evaluacionesCategoria[indexCriterio].puntuacion;
                criteriosEvaluados++;
            }
        });
        
        const puntuacionPromedio = criteriosEvaluados > 0 ? puntuacionCategoria / criteriosEvaluados : 0;
        puntuacionTotal += puntuacionPromedio * categoria.peso;
        pesoTotal += categoria.peso;
    });
    
    return pesoTotal > 0 ? Math.round((puntuacionTotal / pesoTotal) * 10) : 0;
}

// Obtener nivel de seguridad
function obtenerNivelSeguridad() {
    const puntuacion = calcularPuntuacionFinal();
    const nivel = ESCALA_CALIFICACION.find(escala => puntuacion >= escala.min && puntuacion <= escala.max);
    return nivel ? nivel.nivel : 'NO EVALUADO';
}

// Obtener color del nivel de seguridad
function obtenerColorNivelSeguridad() {
    const puntuacion = calcularPuntuacionFinal();
    const nivel = ESCALA_CALIFICACION.find(escala => puntuacion >= escala.min && puntuacion <= escala.max);
    return nivel ? nivel.color : '#6c757d';
}

// Cargar evaluaciones guardadas
function cargarEvaluacionesGuardadas() {
    const guardadas = localStorage.getItem('evaluacionesGuardadas');
    if (guardadas) {
        evaluacionesGuardadas = JSON.parse(guardadas);
    }
}

// Guardar en Local Storage
function guardarEnLocalStorage() {
    // Actualizar o agregar la evaluación actual
    const index = evaluacionesGuardadas.findIndex(e => e.id === evaluacionActual.id);
    if (index !== -1) {
        evaluacionesGuardadas[index] = evaluacionActual;
    } else {
        evaluacionesGuardadas.push(evaluacionActual);
    }
    
    localStorage.setItem('evaluacionesGuardadas', JSON.stringify(evaluacionesGuardadas));
}

// Mostrar evaluaciones guardadas
function mostrarEvaluacionesGuardadas() {
    const contenedor = document.getElementById('evaluacionesGuardadas');
    if (!contenedor) return;
    
    contenedor.innerHTML = '';
    
    if (evaluacionesGuardadas.length === 0) {
        contenedor.innerHTML = '<p class="no-evaluaciones">No hay evaluaciones guardadas</p>';
        return;
    }
    
    evaluacionesGuardadas.forEach(evaluacion => {
        const evaluacionDiv = document.createElement('div');
        evaluacionDiv.className = 'evaluacion-guardada';
        evaluacionDiv.innerHTML = `
            <div class="evaluacion-info">
                <h4>${evaluacion.datos.nombreProveedor}</h4>
                <p><strong>Fecha:</strong> ${evaluacion.datos.fechaEvaluacion}</p>
                <p><strong>Evaluador:</strong> ${evaluacion.datos.nombreEvaluador}</p>
                <p><strong>Estado:</strong> ${evaluacion.estado === 'finalizada' ? 'Finalizada' : 'En Progreso'}</p>
                <p><strong>Última modificación:</strong> ${new Date(evaluacion.fechaModificacion).toLocaleString()}</p>
            </div>
            <div class="evaluacion-actions">
                <button onclick="continuarEvaluacion('${evaluacion.id}')" class="btn-continuar">Continuar</button>
                <button onclick="eliminarEvaluacion('${evaluacion.id}')" class="btn-eliminar">Eliminar</button>
            </div>
        `;
        contenedor.appendChild(evaluacionDiv);
    });
}

// Continuar evaluación
function continuarEvaluacion(id) {
    evaluacionActual = evaluacionesGuardadas.find(e => e.id === id);
    if (evaluacionActual) {
        // Llenar formulario
        document.getElementById('nombreProveedor').value = evaluacionActual.datos.nombreProveedor;
        document.getElementById('fechaEvaluacion').value = evaluacionActual.datos.fechaEvaluacion;
        document.getElementById('nombreEvaluador').value = evaluacionActual.datos.nombreEvaluador;
        
        // Ir a evaluación
        mostrarSeccion('evaluacion');
    }
}

// Eliminar evaluación
function eliminarEvaluacion(id) {
    if (confirm('¿Está seguro de que desea eliminar esta evaluación?')) {
        evaluacionesGuardadas = evaluacionesGuardadas.filter(e => e.id !== id);
        guardarEnLocalStorage();
        mostrarEvaluacionesGuardadas();
    }
}

// Cargar datos de evaluación en la matriz
function cargarDatosEvaluacion() {
    if (!evaluacionActual || !evaluacionActual.evaluaciones) return;
    
    Object.keys(evaluacionActual.evaluaciones).forEach(categoriaIndex => {
        const evaluacionesCategoria = evaluacionActual.evaluaciones[categoriaIndex];
        Object.keys(evaluacionesCategoria).forEach(criterioIndex => {
            const evaluacion = evaluacionesCategoria[criterioIndex];
            
            // Seleccionar puntuación
            const boton = document.querySelector(`[data-categoria="${categoriaIndex}"][data-criterio="${criterioIndex}"][data-puntuacion="${evaluacion.puntuacion}"]`);
            if (boton) {
                boton.classList.add('selected');
            }
            
            // Llenar observaciones
            const textarea = document.querySelector(`[data-categoria="${categoriaIndex}"][data-criterio="${criterioIndex}"].observaciones`);
            if (textarea) {
                textarea.value = evaluacion.observaciones || '';
            }
        });
    });
}

