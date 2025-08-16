# Sistema de Evaluación de Proveedores de Custodia/Seguridad

## 📋 Descripción

Sistema integral de evaluación para proveedores de servicios de custodia y seguridad en México. Permite realizar evaluaciones detalladas con 84 criterios específicos organizados en 14 categorías, utilizando un sistema de puntuación del 1 al 10 con ponderación por importancia.

## ✨ Características Principales

### 🎯 Sistema de Evaluación Mejorado
- **84 criterios específicos** organizados en 14 categorías
- **Sistema de puntuación 1-10** con descripciones detalladas
- **Ponderación por importancia**: Crítico (3x), Alto (2x), Medio (1.5x), Bajo (1x)
- **Clasificación final mejorada** con 8 niveles de evaluación

### 📊 Categorías de Evaluación

#### 🔴 CRÍTICO (Peso 3x)
- **Requisitos Legales y Normativos**: Licencias, seguros, antecedentes penales
- **Gestión de Riesgos y Respuesta a Incidentes**: Planes de contingencia, protocolos de emergencia

#### 🟠 ALTO (Peso 2x)
- **Capacidad Operativa y Certificaciones**: ISO, capacidad de respuesta, cobertura
- **Tecnología y Servicios de Vanguardia**: GPS, sistemas encriptados, monitoreo
- **Revisión de Unidades y Equipos**: Estado físico, mantenimiento, certificaciones
- **Evaluación del Personal**: Certificaciones, evaluaciones psicológicas, capacitación
- **Ciberseguridad y Protección de Datos**: Encriptación, LGPD, auditorías

#### 🟡 MEDIO (Peso 1.5x)
- **Atención al Cliente y Transparencia**: Tiempo de respuesta, canales de comunicación
- **Procedimientos Operativos**: Manuales, protocolos, gestión de incidentes
- **Gestión Administrativa**: Facturación, transparencia, contratos
- **Tecnología de Soporte**: Software, apps, integración
- **Continuidad del Negocio**: Planes de respaldo, redundancia, gestión de crisis

#### 🟢 BAJO (Peso 1x)
- **Presentación e Imagen Corporativa**: Uniformes, vehículos, branding
- **Valor Agregado y Servicios Adicionales**: Servicios extra, programas de lealtad
- **Responsabilidad Social y Sostenibilidad**: Programas comunitarios, prácticas ambientales

### 📈 Sistema de Puntuación

| Puntuación | Descripción | Color |
|------------|-------------|-------|
| 1-2 | No cumple en absoluto (crítico) | 🔴 Rojo |
| 3-4 | Cumple mínimamente (deficiente) | 🟠 Naranja |
| 5-6 | Cumple parcialmente (aceptable con reservas) | 🟡 Amarillo |
| 7-8 | Cumple adecuadamente (bueno) | 🔵 Azul |
| 9-10 | Cumple excelentemente (sobresaliente) | 🟢 Verde |

### 🏆 Clasificación Final

| Rango | Nivel | Descripción | Color |
|-------|-------|-------------|-------|
| 90-100 | EXCELENTE | Aceptable sin reservas | 🟢 Verde |
| 80-89 | MUY BUENO | Aceptable con mejoras menores | 🟢 Verde claro |
| 70-79 | BUENO | Aceptable con mejoras | 🔵 Azul |
| 60-69 | ACEPTABLE | Aceptable con mejoras significativas | 🟡 Amarillo |
| 50-59 | DEFICIENTE | Inaceptable - requiere mejoras críticas | 🟠 Naranja |
| 40-49 | INSUFICIENTE | Inaceptable - múltiples deficiencias | 🟣 Rosa |
| 30-39 | CRÍTICO | Inadmisible - deficiencias graves | 🔴 Rojo |
| 0-29 | INADMISIBLE | Inadmisible - no cumple requisitos mínimos | 🟣 Morado |

## 🚀 Funcionalidades

### 📝 Gestión de Evaluaciones
- **Formulario inicial** con datos básicos del proveedor
- **Matriz dinámica** con 84 criterios específicos
- **Sistema de guardado** automático en Local Storage
- **Continuación de evaluaciones** incompletas
- **Gestión de evaluaciones** guardadas

### 📊 Generación de Reportes
- **Reporte HTML completo** con diseño profesional
- **Resumen ejecutivo** con puntuaciones por categoría
- **Detalle de evaluación** con observaciones
- **Nivel de seguridad** con clasificación final
- **Impresión optimizada** para PDF

### 🎨 Interfaz de Usuario
- **Diseño moderno** con tema oscuro
- **Navegación intuitiva** entre secciones
- **Indicadores visuales** de puntuación por colores
- **Responsive design** para dispositivos móviles
- **Animaciones suaves** y efectos visuales

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con gradientes y efectos
- **JavaScript (ES6+)**: Lógica de aplicación y gestión de datos
- **Local Storage**: Persistencia de datos en el navegador
- **Git**: Control de versiones
- **GitHub**: Repositorio remoto

## 📦 Instalación

### Opción 1: Clonar desde GitHub
```bash
git clone https://github.com/HugoRz98/evaluador-proveedores-seguridad.git
cd evaluador-proveedores-seguridad
```

### Opción 2: Descargar archivos
1. Descargar los archivos del proyecto
2. Extraer en una carpeta local

## 🚀 Ejecución

### Opción 1: Servidor Local (Recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js
npx http-server -p 8000
```

### Opción 2: Abrir directamente
Abrir el archivo `index.html` en cualquier navegador moderno.

### Acceso
Abrir el navegador y navegar a: `http://localhost:8000`

## 📁 Estructura del Proyecto

```
evaluador-proveedores-seguridad/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # Lógica JavaScript
├── README.md               # Documentación
├── LICENSE                 # Licencia MIT
└── .gitignore             # Archivos ignorados por Git
```

## 🎯 Uso del Sistema

### 1. Nueva Evaluación
1. Hacer clic en "Nueva Evaluación"
2. Completar datos básicos del proveedor
3. Hacer clic en "Continuar a Evaluación"

### 2. Evaluación de Criterios
1. Revisar cada categoría y sus criterios
2. Asignar puntuación del 1 al 10 según corresponda
3. Agregar observaciones específicas cuando sea necesario
4. Guardar progreso periódicamente

### 3. Finalización
1. Revisar que todos los criterios estén evaluados
2. Hacer clic en "Finalizar y Generar Reporte"
3. El reporte se abrirá en una nueva ventana
4. Imprimir o guardar como PDF

### 4. Gestión de Evaluaciones
1. Ir a "Evaluaciones Guardadas"
2. Ver lista de evaluaciones previas
3. Continuar evaluaciones incompletas
4. Eliminar evaluaciones no deseadas

## 🔧 Personalización

### Modificar Criterios
Editar el array `MATRIZ_EVALUACION` en `script.js`:
```javascript
{
    categoria: "NOMBRE_CATEGORIA",
    peso: 2, // 1, 1.5, 2, o 3
    nivel: "ALTO", // CRÍTICO, ALTO, MEDIO, BAJO
    criterios: [
        { id: "ID1", descripcion: "Descripción del criterio", observaciones: "" }
    ]
}
```

### Ajustar Escala de Calificación
Modificar el array `ESCALA_CALIFICACION` en `script.js`:
```javascript
{
    min: 90,
    max: 100,
    nivel: "EXCELENTE",
    descripcion: "Descripción del nivel",
    color: "#28a745"
}
```

## 🐛 Solución de Problemas

### Problema: No se guardan las evaluaciones
**Solución**: Verificar que el navegador tenga habilitado Local Storage

### Problema: No se genera el reporte
**Solución**: Verificar que el popup blocker esté deshabilitado

### Problema: Los estilos no se aplican
**Solución**: Limpiar caché del navegador (Ctrl+F5)

## 📈 Próximas Mejoras

- [ ] **Base de datos local**: SQLite para mayor capacidad
- [ ] **Exportación a Excel**: Reportes en formato .xlsx
- [ ] **Gráficos interactivos**: Chart.js para visualizaciones
- [ ] **Múltiples usuarios**: Sistema de autenticación
- [ ] **Backup automático**: Sincronización con la nube
- [ ] **API REST**: Integración con sistemas externos
- [ ] **Módulo de auditoría**: Historial de cambios
- [ ] **Plantillas personalizables**: Criterios configurables

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 Autor

**Hugo Ruiz**
- GitHub: [@HugoRz98](https://github.com/HugoRz98)

## 🙏 Agradecimientos

- Comunidad de desarrolladores web
- Estándares de seguridad mexicanos (NOM)
- Mejores prácticas de UX/UI
- Herramientas de desarrollo open source

---

**Versión**: 2.0.0  
**Última actualización**: Diciembre 2024  
**Compatibilidad**: Navegadores modernos (Chrome, Firefox, Safari, Edge)

