# 🛡️ Evaluador de Proveedores de Custodia/Seguridad

Sistema de evaluación integral para proveedores de servicios de custodia y seguridad en México.

## 📋 Características Principales

- **Matriz de Evaluación Completa**: 7 categorías con 57 criterios específicos
- **Sistema de Puntuación**: Escala de 1-5 con niveles de seguridad
- **Formato de Fecha Mexicano**: DD/MM/AAAA con validación automática
- **Guardado de Evaluaciones**: Persistencia en localStorage
- **Generación de Reportes**: Reportes HTML imprimibles
- **Diseño Responsivo**: Funciona en dispositivos móviles y desktop
- **Interfaz Moderna**: Diseño oscuro y profesional

## 🎯 Escala de Calificación

| Nivel | Rango | Status | Color | Recomendación |
|-------|-------|--------|-------|---------------|
| **ACEPTABLE** | 76-100% | ✅ ACEPTABLE | Verde | Proveedor recomendado |
| **INACEPTABLE** | 51-75% | ⚠️ INACEPTABLE | Amarillo | Requiere mejoras |
| **INADMISIBLE** | 0-50% | ❌ INADMISIBLE | Rojo | No recomendado |

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional)

### Instalación Local

1. **Clonar el repositorio:**
```bash
git clone https://github.com/tu-usuario/evaluador-proveedores-seguridad.git
cd evaluador-proveedores-seguridad
```

2. **Abrir la aplicación:**
   - **Opción 1**: Abrir `index.html` directamente en el navegador
   - **Opción 2**: Usar un servidor local:
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

3. **Acceder a la aplicación:**
   - Navegar a `http://localhost:8000`

## 📊 Matriz de Evaluación

### 1. Documentación Legal y Administrativa
- Acta constitutiva vigente
- RFC y alta en Hacienda
- Registro Federal de Contribuyentes
- Constancia de situación fiscal
- Poderes notariales vigentes
- Identificación oficial del representante legal
- Comprobante de domicilio fiscal
- Registro en el padrón de proveedores

### 2. Capacidad Financiera
- Estados financieros auditados
- Carta de solvencia bancaria
- Referencias comerciales
- Capacidad de crédito
- Historial crediticio
- Capital social mínimo
- Flujo de efectivo positivo
- Ratios financieros saludables

### 3. Experiencia y Antecedentes
- Mínimo 3 años de experiencia
- Referencias de clientes anteriores
- Certificaciones en seguridad
- Historial de cumplimiento
- Experiencia en el sector
- Casos de éxito documentados
- Reconocimientos o premios
- Participación en proyectos similares

### 4. Recursos Humanos
- Personal capacitado en seguridad
- Licencias de portación de armas
- Certificaciones de capacitación
- Evaluaciones psicológicas
- Antecedentes penales limpios
- Capacitación continua
- Plan de desarrollo profesional
- Políticas de recursos humanos

### 5. Equipamiento y Tecnología
- Equipos de comunicación
- Sistemas de monitoreo
- Equipos de protección personal
- Vehículos blindados (si aplica)
- Sistemas de alarmas
- Equipos de primeros auxilios
- Tecnología de rastreo GPS
- Sistemas de videovigilancia

### 6. Procedimientos Operativos
- Manual de procedimientos
- Protocolos de emergencia
- Plan de contingencia
- Procedimientos de reporte
- Protocolos de comunicación
- Procedimientos de seguridad
- Plan de evacuación
- Procedimientos de coordinación

### 7. Cumplimiento Normativo
- Licencias y permisos vigentes
- Cumplimiento de normativas de seguridad
- Certificaciones ISO
- Cumplimiento de leyes laborales
- Seguros de responsabilidad civil
- Cumplimiento ambiental
- Normativas de transporte
- Regulaciones específicas del sector

## 🎨 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript (ES6+)**: Lógica de la aplicación
- **LocalStorage**: Persistencia de datos
- **Responsive Design**: Adaptable a diferentes dispositivos

## 📁 Estructura del Proyecto

```
evaluador-proveedores-seguridad/
├── index.html          # Página principal
├── styles.css          # Estilos de la aplicación
├── script.js           # Lógica JavaScript
├── README.md           # Documentación
└── .gitignore          # Archivos a ignorar
```

## 🔧 Funcionalidades

### Evaluación de Proveedores
- Formulario de datos básicos
- Matriz de evaluación interactiva
- Sistema de puntuación visual
- Campo de observaciones por criterio

### Gestión de Evaluaciones
- Guardado de evaluaciones incompletas
- Carga de evaluaciones guardadas
- Continuación de evaluaciones previas
- Eliminación de evaluaciones

### Generación de Reportes
- Reporte HTML imprimible
- Información completa del proveedor
- Puntuación por categorías
- Recomendaciones automáticas
- Impresión automática

## 🚀 Próximas Mejoras

- [ ] Exportación a PDF
- [ ] Gráficos de radar/spider
- [ ] Base de datos local
- [ ] Múltiples evaluadores
- [ ] Historial de cambios
- [ ] Backup automático
- [ ] Modo offline
- [ ] API REST

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- Estándares de seguridad mexicanos
- Comunidad de desarrolladores web
- Contribuidores del proyecto

---

**Versión**: 1.0.0  
**Última actualización**: Agosto 2025

