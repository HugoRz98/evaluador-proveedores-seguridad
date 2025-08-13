// Matriz de evaluación para proveedores de custodia/seguridad
const MATRIZ_EVALUACION = [
    {
        titulo: "Documentación Legal y Administrativa",
        requisitos: [
            "Acta constitutiva vigente",
            "RFC y alta en Hacienda",
            "Registro Federal de Contribuyentes",
            "Constancia de situación fiscal",
            "Poderes notariales vigentes",
            "Identificación oficial del representante legal",
            "Comprobante de domicilio fiscal",
            "Registro en el padrón de proveedores"
        ]
    },
    {
        titulo: "Capacidad Financiera",
        requisitos: [
            "Estados financieros auditados",
            "Carta de solvencia bancaria",
            "Referencias comerciales",
            "Capacidad de crédito",
            "Historial crediticio",
            "Capital social mínimo",
            "Flujo de efectivo positivo",
            "Ratios financieros saludables"
        ]
    },
    {
        titulo: "Experiencia y Antecedentes",
        requisitos: [
            "Mínimo 3 años de experiencia",
            "Referencias de clientes anteriores",
            "Certificaciones en seguridad",
            "Historial de cumplimiento",
            "Experiencia en el sector",
            "Casos de éxito documentados",
            "Reconocimientos o premios",
            "Participación en proyectos similares"
        ]
    },
    {
        titulo: "Recursos Humanos",
        requisitos: [
            "Personal capacitado en seguridad",
            "Licencias de portación de armas",
            "Certificaciones de capacitación",
            "Evaluaciones psicológicas",
            "Antecedentes penales limpios",
            "Capacitación continua",
            "Plan de desarrollo profesional",
            "Políticas de recursos humanos"
        ]
    },
    {
        titulo: "Equipamiento y Tecnología",
        requisitos: [
            "Equipos de comunicación",
            "Sistemas de monitoreo",
            "Equipos de protección personal",
            "Vehículos blindados (si aplica)",
            "Sistemas de alarmas",
            "Equipos de primeros auxilios",
            "Tecnología de rastreo GPS",
            "Sistemas de videovigilancia"
        ]
    },
    {
        titulo: "Procedimientos Operativos",
        requisitos: [
            "Manual de procedimientos",
            "Protocolos de emergencia",
            "Plan de contingencia",
            "Procedimientos de reporte",
            "Protocolos de comunicación",
            "Procedimientos de seguridad",
            "Plan de evacuación",
            "Procedimientos de coordinación"
        ]
    },
    {
        titulo: "Cumplimiento Normativo",
        requisitos: [
            "Licencias y permisos vigentes",
            "Cumplimiento de normativas de seguridad",
            "Certificaciones ISO",
            "Cumplimiento de leyes laborales",
            "Seguros de responsabilidad civil",
            "Cumplimiento ambiental",
            "Normativas de transporte",
            "Regulaciones específicas del sector"
        ]
    }
];

// Escala de calificación
const ESCALA_CALIFICACION = [
    { nivel: "ACEPTABLE", status: "ACEPTABLE", min: 76, max: 100, color: "#28a745" },
    { nivel: "INACEPTABLE", status: "INACEPTABLE", min: 51, max: 75, color: "#ffc107" },
    { nivel: "INADMISIBLE", status: "INADMISIBLE", min: 0, max: 50, color: "#dc3545" }
];

// Variables globales
let evaluacionActual = null;
let evaluacionesGuardadas = [];

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    cargarEvaluacionesGuardadas();
    generarMatriz();
    configurarFechaActual();
    configurarEventListeners();
});

// Configurar fecha actual
function configurarFechaActual() {
    const hoy = new Date();
    const fecha = hoy.getDate().toString().padStart(2, '0');
    const mes = (hoy.getMonth() + 1).toString().padStart(2, '0');
    const año = hoy.getFullYear();
    document.getElementById('fecha-evaluacion').value = `${fecha}/${mes}/${año}`;
}

// Configurar event listeners
function configurarEventListeners() {
    const fechaInput = document.getElementById('fecha-evaluacion');
    fechaInput.addEventListener('input', function() {
        formatearFecha(this);
    });
    fechaInput.addEventListener('blur', function() {
        validarFecha(this);
    });
}

// Formatear fecha automáticamente
function formatearFecha(input) {
    let valor = input.value.replace(/\D/g, '');
    if (valor.length > 8) valor = valor.substring(0, 8);
    
    if (valor.length >= 2) {
        valor = valor.substring(0, 2) + '/' + valor.substring(2);
    }
    if (valor.length >= 5) {
        valor = valor.substring(0, 5) + '/' + valor.substring(5);
    }
    
    input.value = valor;
}

// Validar fecha
function validarFecha(input) {
    const valor = input.value;
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    
    if (!regex.test(valor)) {
        input.style.borderColor = '#dc3545';
        return false;
    }
    
    const [, dia, mes, año] = valor.match(regex);
    const fecha = new Date(año, mes - 1, dia);
    const hoy = new Date();
    
    if (fecha > hoy) {
        input.style.borderColor = '#dc3545';
        return false;
    }
    
    input.style.borderColor = '#28a745';
    return true;
}

// Mostrar sección
function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    document.querySelectorAll('main > section').forEach(s => {
        s.classList.remove('seccion-activa');
        s.classList.add('seccion-oculta');
    });
    
    // Mostrar la sección seleccionada
    if (seccion === 'nueva') {
        document.getElementById('nueva-evaluacion').classList.remove('seccion-oculta');
        document.getElementById('nueva-evaluacion').classList.add('seccion-activa');
    } else if (seccion === 'guardadas') {
        document.getElementById('evaluaciones-guardadas').classList.remove('seccion-oculta');
        document.getElementById('evaluaciones-guardadas').classList.add('seccion-activa');
    }
    
    // Actualizar botones de navegación
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Generar matriz de evaluación
function generarMatriz() {
    const container = document.getElementById('matriz-evaluacion');
    container.innerHTML = '';
    
    MATRIZ_EVALUACION.forEach((seccion, seccionIndex) => {
        const seccionDiv = document.createElement('div');
        seccionDiv.className = 'seccion-matriz';
        
        const tituloDiv = document.createElement('div');
        tituloDiv.className = 'seccion-titulo';
        tituloDiv.textContent = seccion.titulo;
        seccionDiv.appendChild(tituloDiv);
        
        seccion.requisitos.forEach((requisito, requisitoIndex) => {
            const requisitoDiv = document.createElement('div');
            requisitoDiv.className = 'requisito';
            
            const textoDiv = document.createElement('div');
            textoDiv.className = 'requisito-texto';
            textoDiv.textContent = requisito;
            requisitoDiv.appendChild(textoDiv);
            
            const opcionesDiv = document.createElement('div');
            opcionesDiv.className = 'requisito-opciones';
            
            const puntuaciones = [
                { valor: 1, texto: 'No Cumple' },
                { valor: 3, texto: 'Cumple Parcialmente' },
                { valor: 5, texto: 'Cumple' }
            ];
            
            puntuaciones.forEach(puntuacion => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'puntuacion-btn';
                btn.setAttribute('data-puntuacion', puntuacion.valor);
                btn.setAttribute('data-seccion', seccionIndex);
                btn.setAttribute('data-requisito', requisitoIndex);
                btn.textContent = puntuacion.texto;
                btn.onclick = function() {
                    seleccionarPuntuacion(this);
                };
                opcionesDiv.appendChild(btn);
            });
            
            requisitoDiv.appendChild(opcionesDiv);
            
            const observacionesDiv = document.createElement('div');
            observacionesDiv.className = 'observaciones';
            const textarea = document.createElement('textarea');
            textarea.placeholder = 'Observaciones (opcional)';
            textarea.setAttribute('data-seccion', seccionIndex);
            textarea.setAttribute('data-requisito', requisitoIndex);
            observacionesDiv.appendChild(textarea);
            requisitoDiv.appendChild(observacionesDiv);
            
            seccionDiv.appendChild(requisitoDiv);
        });
        
        container.appendChild(seccionDiv);
    });
}

// Seleccionar puntuación
function seleccionarPuntuacion(btn) {
    const seccion = btn.getAttribute('data-seccion');
    const requisito = btn.getAttribute('data-requisito');
    const puntuacion = btn.getAttribute('data-puntuacion');
    
    // Remover selección previa en el mismo requisito
    const requisitoDiv = btn.closest('.requisito');
    requisitoDiv.querySelectorAll('.puntuacion-btn').forEach(b => {
        b.classList.remove('selected');
    });
    
    // Seleccionar el botón actual
    btn.classList.add('selected');
}

// Guardar evaluación
function guardarEvaluacion() {
    if (!validarFormulario()) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }
    
    const evaluacion = recopilarDatosEvaluacion();
    evaluacion.id = Date.now();
    evaluacion.fechaGuardado = new Date().toISOString();
    
    evaluacionesGuardadas.push(evaluacion);
    guardarEnLocalStorage();
    
    alert('Evaluación guardada exitosamente.');
}

// Finalizar evaluación
function finalizarEvaluacion() {
    if (!validarFormulario()) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }
    
    evaluacionActual = recopilarDatosEvaluacion();
    generarReporte();
}

// Validar formulario
function validarFormulario() {
    const nombreProveedor = document.getElementById('nombre-proveedor').value.trim();
    const fechaEvaluacion = document.getElementById('fecha-evaluacion').value.trim();
    const nombreEvaluador = document.getElementById('nombre-evaluador').value.trim();
    
    if (!nombreProveedor || !fechaEvaluacion || !nombreEvaluador) {
        return false;
    }
    
    if (!validarFecha(document.getElementById('fecha-evaluacion'))) {
        return false;
    }
    
    return true;
}

// Recopilar datos de evaluación
function recopilarDatosEvaluacion() {
    const evaluacion = {
        nombreProveedor: document.getElementById('nombre-proveedor').value.trim(),
        fechaEvaluacion: document.getElementById('fecha-evaluacion').value.trim(),
        nombreEvaluador: document.getElementById('nombre-evaluador').value.trim(),
        secciones: [],
        puntuacionTotal: 0,
        fechaCreacion: new Date().toISOString()
    };
    
    let totalPuntos = 0;
    let totalRequisitos = 0;
    
    MATRIZ_EVALUACION.forEach((seccion, seccionIndex) => {
        const seccionData = {
            titulo: seccion.titulo,
            requisitos: [],
            puntuacionSeccion: 0
        };
        
        let puntosSeccion = 0;
        let requisitosEvaluados = 0;
        
        seccion.requisitos.forEach((requisito, requisitoIndex) => {
            const btnSeleccionado = document.querySelector(
                `.puntuacion-btn[data-seccion="${seccionIndex}"][data-requisito="${requisitoIndex}"].selected`
            );
            
            const observaciones = document.querySelector(
                `textarea[data-seccion="${seccionIndex}"][data-requisito="${requisitoIndex}"]`
            ).value.trim();
            
            const puntuacion = btnSeleccionado ? parseInt(btnSeleccionado.getAttribute('data-puntuacion')) : 0;
            
            seccionData.requisitos.push({
                texto: requisito,
                puntuacion: puntuacion,
                observaciones: observaciones
            });
            
            if (puntuacion > 0) {
                puntosSeccion += puntuacion;
                requisitosEvaluados++;
            }
        });
        
        seccionData.puntuacionSeccion = requisitosEvaluados > 0 ? (puntosSeccion / requisitosEvaluados) * 20 : 0;
        evaluacion.secciones.push(seccionData);
        
        totalPuntos += puntosSeccion;
        totalRequisitos += requisitosEvaluados;
    });
    
    evaluacion.puntuacionTotal = totalRequisitos > 0 ? Math.round((totalPuntos / totalRequisitos) * 20) : 0;
    
    return evaluacion;
}

// Generar reporte
function generarReporte() {
    document.getElementById('loading').classList.remove('hidden');
    
    setTimeout(() => {
        try {
            const nivelSeguridad = obtenerNivelSeguridad(evaluacionActual.puntuacionTotal);
            
            const contenido = `
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <title>Reporte de Evaluación - ${evaluacionActual.nombreProveedor}</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; background: white; color: #333; }
                        .reporte { max-width: 800px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; }
                        .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 20px; }
                        .info-basica { margin-bottom: 20px; }
                        .info-basica p { margin: 5px 0; }
                        .puntuacion { font-size: 24px; font-weight: bold; text-align: center; margin: 20px 0; padding: 20px; border-radius: 10px; }
                        .aceptable { background: #d4edda; color: #155724; border: 2px solid #c3e6cb; }
                        .inaceptable { background: #fff3cd; color: #856404; border: 2px solid #ffeaa7; }
                        .inadmisible { background: #f8d7da; color: #721c24; border: 2px solid #f5c6cb; }
                        .seccion { margin-bottom: 15px; border-left: 3px solid #007bff; padding-left: 10px; }
                        .seccion h3 { color: #007bff; margin: 0 0 10px 0; }
                        @media print { body { margin: 0; } .reporte { border: none; } }
                    </style>
                </head>
                <body>
                    <div class="reporte">
                        <div class="header">
                            <h1>Reporte de Auditoría - Proveedor de Custodia/Seguridad</h1>
                        </div>
                        
                        <div class="info-basica">
                            <p><strong>Proveedor:</strong> ${evaluacionActual.nombreProveedor}</p>
                            <p><strong>Fecha de Evaluación:</strong> ${evaluacionActual.fechaEvaluacion}</p>
                            <p><strong>Evaluador:</strong> ${evaluacionActual.nombreEvaluador}</p>
                            <p><strong>Nivel de Seguridad:</strong> ${nivelSeguridad.nivel}</p>
                            <p><strong>Status:</strong> ${nivelSeguridad.status}</p>
                        </div>
                        
                        <div class="puntuacion ${nivelSeguridad.status.toLowerCase()}">
                            Puntuación Total: ${evaluacionActual.puntuacionTotal}%
                        </div>
                        
                        <div class="seccion">
                            <h3>Resumen por Categorías</h3>
                            ${evaluacionActual.secciones.map(seccion => 
                                `<p><strong>${seccion.titulo}:</strong> ${seccion.puntuacionSeccion.toFixed(1)}%</p>`
                            ).join('')}
                        </div>
                        
                        <div class="seccion">
                            <h3>Recomendaciones</h3>
                            <p>${nivelSeguridad.status === 'ACEPTABLE' ? '✅ Proveedor recomendado para contratación' : 
                               nivelSeguridad.status === 'INACEPTABLE' ? '⚠️ Proveedor con condiciones, requiere mejoras significativas' : 
                               '❌ Proveedor no recomendado - Status: INADMISIBLE'}</p>
                        </div>
                    </div>
                    
                    <script>
                        window.onload = function() {
                            setTimeout(function() {
                                window.print();
                            }, 500);
                        };
                    </script>
                </body>
                </html>
            `;
            
            const ventana = window.open('', '_blank');
            ventana.document.write(contenido);
            ventana.document.close();
            
            document.getElementById('loading').classList.add('hidden');
            alert('¡Reporte generado exitosamente! Se abrirá en una nueva ventana para imprimir.');
            
        } catch (error) {
            console.error('Error generando reporte:', error);
            document.getElementById('loading').classList.add('hidden');
            alert('Error al generar el reporte. Por favor, intente nuevamente.');
        }
    }, 1000);
}

// Obtener nivel de seguridad
function obtenerNivelSeguridad(puntuacion) {
    return ESCALA_CALIFICACION.find(nivel => 
        puntuacion >= nivel.min && puntuacion <= nivel.max
    ) || ESCALA_CALIFICACION[2]; // Por defecto INADMISIBLE
}

// Cargar evaluaciones guardadas
function cargarEvaluacionesGuardadas() {
    const guardadas = localStorage.getItem('evaluacionesGuardadas');
    if (guardadas) {
        evaluacionesGuardadas = JSON.parse(guardadas);
        mostrarEvaluacionesGuardadas();
    }
}

// Guardar en localStorage
function guardarEnLocalStorage() {
    localStorage.setItem('evaluacionesGuardadas', JSON.stringify(evaluacionesGuardadas));
}

// Mostrar evaluaciones guardadas
function mostrarEvaluacionesGuardadas() {
    const container = document.getElementById('lista-evaluaciones');
    container.innerHTML = '';
    
    if (evaluacionesGuardadas.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #cccccc;">No hay evaluaciones guardadas.</p>';
        return;
    }
    
    evaluacionesGuardadas.forEach(evaluacion => {
        const card = document.createElement('div');
        card.className = 'evaluacion-card';
        
        const nivelSeguridad = obtenerNivelSeguridad(evaluacion.puntuacionTotal);
        
        card.innerHTML = `
            <div class="evaluacion-header">
                <div class="evaluacion-titulo">${evaluacion.nombreProveedor}</div>
                <div class="evaluacion-fecha">${evaluacion.fechaEvaluacion}</div>
            </div>
            <div class="evaluacion-info">
                <p><strong>Evaluador:</strong> ${evaluacion.nombreEvaluador}</p>
                <p><strong>Puntuación:</strong> ${evaluacion.puntuacionTotal}%</p>
                <p><strong>Status:</strong> ${nivelSeguridad.status}</p>
            </div>
            <div class="evaluacion-acciones">
                <button class="btn-continuar" onclick="continuarEvaluacion(${evaluacion.id})">Continuar</button>
                <button class="btn-eliminar" onclick="eliminarEvaluacion(${evaluacion.id})">Eliminar</button>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Continuar evaluación
function continuarEvaluacion(id) {
    const evaluacion = evaluacionesGuardadas.find(e => e.id === id);
    if (!evaluacion) return;
    
    // Cargar datos en el formulario
    document.getElementById('nombre-proveedor').value = evaluacion.nombreProveedor;
    document.getElementById('fecha-evaluacion').value = evaluacion.fechaEvaluacion;
    document.getElementById('nombre-evaluador').value = evaluacion.nombreEvaluador;
    
    // Cargar puntuaciones
    evaluacion.secciones.forEach((seccion, seccionIndex) => {
        seccion.requisitos.forEach((requisito, requisitoIndex) => {
            if (requisito.puntuacion > 0) {
                const btn = document.querySelector(
                    `.puntuacion-btn[data-seccion="${seccionIndex}"][data-requisito="${requisitoIndex}"][data-puntuacion="${requisito.puntuacion}"]`
                );
                if (btn) {
                    btn.classList.add('selected');
                }
                
                const textarea = document.querySelector(
                    `textarea[data-seccion="${seccionIndex}"][data-requisito="${requisitoIndex}"]`
                );
                if (textarea) {
                    textarea.value = requisito.observaciones;
                }
            }
        });
    });
    
    // Cambiar a la sección de nueva evaluación
    mostrarSeccion('nueva');
}

// Eliminar evaluación
function eliminarEvaluacion(id) {
    if (confirm('¿Está seguro de que desea eliminar esta evaluación?')) {
        evaluacionesGuardadas = evaluacionesGuardadas.filter(e => e.id !== id);
        guardarEnLocalStorage();
        mostrarEvaluacionesGuardadas();
    }
}

