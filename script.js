// Estructura de Datos de la Malla Curricular Actualizada
const mallaCurricular = {
    "I. NIVEL BÁSICO": {
        "1er SEMESTRE – BÁSICO": {
            "Módulo 1: Introducción a la Informática": ["Tema 1: Qué es informática", "Tema 2: Hardware y software", "Tema 3: Dispositivos de entrada y salida", "Tema 4: Uso básico del computador"],
            "Módulo 2: Pensamiento Computacional": ["Tema 1: Qué es pensamiento computacional", "Tema 2: Resolución de problemas", "Tema 3: Abstracción", "Tema 4: Descomposición"],
            "Módulo 3: Lógica de Programación I": ["Tema 1: Secuencias", "Tema 2: Algoritmos cotidianos", "Tema 3: Introducción a variables", "Tema 4: Representación de soluciones"],
            "Módulo 4: Algoritmos I": ["Tema 1: Qué es un algoritmo", "Tema 2: Pseudocódigo", "Tema 3: Diagramas de flujo", "Tema 4: Ejercicios básicos"],
            "Módulo 5: Módulo Emergente I (IA básica)": ["Tema 1: Qué es la IA", "Tema 2: Uso incorrecto de la IA", "Tema 3: Limitaciones", "Tema 4: Uso responsable"]
        }
    },
    "II. NIVEL AUXILIAR": {
        "2do SEMESTRE – AUXILIAR": {
            "Módulo 1: Lógica de Programación II": ["Tema 1: Variables y tipos de datos", "Tema 2: Operadores", "Tema 3: Expresiones lógicas", "Tema 4: Evaluación"],
            "Módulo 2: Estructuras de Control": ["Tema 1: Condicionales", "Tema 2: Bucles", "Tema 3: Control de flujo", "Tema 4: Casos prácticos"],
            "Módulo 3: Funciones": ["Tema 1: Definición", "Tema 2: Parámetros", "Tema 3: Retorno", "Tema 4: Modularidad"],
            "Módulo 4: Bases de Datos Básicas": ["Tema 1: Qué es una base de datos", "Tema 2: Tablas", "Tema 3: Registros", "Tema 4: Relaciones"],
            "Módulo 5: Módulo Emergente II (Prompts básicos)": ["Tema 1: Qué es un prompt", "Tema 2: Tipos de prompts", "Tema 3: Errores comunes", "Tema 4: Buenas prácticas"]
        }
    },
    "III. NIVEL MEDIO": {
        "3er SEMESTRE – MEDIO I": {
            "Módulo 1: Programación con Python": ["Tema 1: Sintaxis básica", "Tema 2: Entrada y salida", "Tema 3: Condicionales y bucles", "Tema 4: Funciones"],
            "Módulo 2: Estructuras de Datos": ["Tema 1: Listas", "Tema 2: Diccionarios", "Tema 3: Manipulación de datos", "Tema 4: Aplicaciones"],
            "Módulo 3: Bases de Datos I": ["Tema 1: Introducción a SQL", "Tema 2: CRUD", "Tema 3: Consultas", "Tema 4: Filtros"],
            "Módulo 4: Sistemas Operativos y Redes": ["Tema 1: Archivos", "Tema 2: Procesos", "Tema 3: Terminal", "Tema 4: Redes básicas"],
            "Módulo 5: Módulo Emergente III (Prompt estructurado)": ["Tema 1: Prompt estructurado", "Tema 2: Componentes", "Tema 3: Uso en programación", "Tema 4: Mejora de resultados"]
        },
        "4to SEMESTRE – MEDIO II": {
            "Módulo 1: Frontend": ["Tema 1: JavaScript", "Tema 2: DOM", "Tema 3: Eventos", "Tema 4: Formularios"],
            "Módulo 2: Backend Básico": ["Tema 1: Servidor", "Tema 2: Rutas", "Tema 3: APIs", "Tema 4: Testing básico"],
            "Módulo 3: Base de Datos II": ["Tema 1: Relaciones", "Tema 2: Normalización", "Tema 3: Integración", "Tema 4: Consultas complejas"],
            "Módulo 4: Control de Versiones": ["Tema 1: Git", "Tema 2: Repositorios", "Tema 3: Ramas", "Tema 4: Trabajo en equipo"],
            "Módulo 5: Módulo Emergente IV (Contexto IA)": ["Tema 1: Contexto", "Tema 2: Control de salida", "Tema 3: Iteración", "Tema 4: Refinamiento"]
        }
    },
    "IV. NIVEL SUPERIOR": {
        "5to SEMESTRE – SUPERIOR I": {
            "Módulo 1: Frontend Avanzado": ["Tema 1: React", "Tema 2: Componentes", "Tema 3: Estado", "Tema 4: Consumo de APIs"],
            "Módulo 2: Backend Avanzado": ["Tema 1: APIs REST", "Tema 2: Validaciones", "Tema 3: Autenticación (JWT)", "Tema 4: Seguridad básica"],
            "Módulo 3: Arquitectura y Seguridad Informática": ["Tema 1: Capas y MVC", "Tema 2: Diseño modular", "Tema 3: Validación y Autenticación", "Tema 4: SQL Injection y Protección"],
            "Módulo 4: Desarrollo de Aplicaciones Móviles": ["Tema 1: Introducción a React Native/Flutter", "Tema 2: Interfaz y Experiencia de Usuario", "Tema 3: Consumo de APIs Móviles", "Tema 4: Despliegue en App Stores"],
            "Módulo 5: Módulo Emergente V (SDD)": ["Tema 1: Qué es SDD", "Tema 2: Diferencias con desarrollo tradicional", "Tema 3: Ventajas", "Tema 4: Casos de uso"]
        },
        "6to SEMESTRE – SUPERIOR II": {
            "Módulo 1: DevOps y Despliegue": ["Tema 1: CI/CD y Automatización", "Tema 2: Entornos de Desarrollo", "Tema 3: Plataformas de Deploy", "Tema 4: Variables de entorno y Logs"],
            "Módulo 2: Testing de Software": ["Tema 1: Unit testing", "Tema 2: Integration testing", "Tema 3: Pruebas funcionales", "Tema 4: Automatización"],
            "Módulo 3: Internet de las Cosas (IoT) y Domótica": ["Tema 1: Microcontroladores y ESP32", "Tema 2: Circuitos y Sensores", "Tema 3: Sistemas de Relés", "Tema 4: Automatización Física"],
            "Módulo 4: Gestión de Proyectos": ["Tema 1: Scrum", "Tema 2: Tareas", "Tema 3: Priorización", "Tema 4: Trabajo en equipo"],
            "Módulo 5: Módulo Emergente VI (Flujo con IA)": ["Tema 1: Idea del sistema", "Tema 2: Especificación", "Tema 3: Generación de código", "Tema 4: Iteración"]
        }
    },
    "V. NIVEL INGENIERÍA": {
        "7mo SEMESTRE – INGENIERÍA I": {
            "Módulo 1: Estructuras de Datos Avanzadas": ["Tema 1: Árboles", "Tema 2: Grafos", "Tema 3: Recorridos", "Tema 4: Aplicaciones"],
            "Módulo 2: Algoritmos": ["Tema 1: Ordenamiento", "Tema 2: Búsqueda", "Tema 3: Recursividad", "Tema 4: Optimización"],
            "Módulo 3: Complejidad Computacional": ["Tema 1: Big O", "Tema 2: Análisis de algoritmos", "Tema 3: Costos", "Tema 4: Comparación"],
            "Módulo 4: Bases de Datos Avanzadas": ["Tema 1: Índices", "Tema 2: Optimización", "Tema 3: Consultas complejas", "Tema 4: Rendimiento"],
            "Módulo 5: Módulo Emergente VII (Validación IA)": ["Tema 1: Validación de código", "Tema 2: Errores IA", "Tema 3: Seguridad", "Tema 4: Buenas prácticas"]
        },
        "8vo SEMESTRE – INGENIERÍA II": {
            "Módulo 1: Arquitectura Avanzada": ["Tema 1: Microservicios", "Tema 2: Sistemas distribuidos", "Tema 3: Escalabilidad", "Tema 4: Diseño avanzado"],
            "Módulo 2: Cloud Computing": ["Tema 1: AWS/Azure", "Tema 2: Servicios cloud", "Tema 3: Escalabilidad", "Tema 4: Costos"],
            "Módulo 3: Infraestructura": ["Tema 1: Docker", "Tema 2: Contenedores", "Tema 3: Orquestación", "Tema 4: Implementación"],
            "Módulo 4: Seguridad Avanzada": ["Tema 1: OAuth", "Tema 2: Protección APIs", "Tema 3: Seguridad web", "Tema 4: Auditoría"],
            "Módulo 5: Módulo Emergente VIII (Automatización IA)": ["Tema 1: Automatización", "Tema 2: Scripts", "Tema 3: Flujos", "Tema 4: Integración"]
        },
        "9no SEMESTRE – INGENIERÍA III": {
            "Módulo 1: IA en Desarrollo": ["Tema 1: Uso de IA", "Tema 2: Limitaciones", "Tema 3: Casos reales", "Tema 4: Integración"],
            "Módulo 2: Spec-Driven Development (SDD)": ["Tema 1: Especificaciones", "Tema 2: Flujo", "Tema 3: Validación", "Tema 4: Aplicación"],
            "Módulo 3: Ingeniería de Prompts": ["Tema 1: Tipos de prompts", "Tema 2: Estructura", "Tema 3: Optimización", "Tema 4: Casos prácticos"],
            "Módulo 4: Automatización Avanzada": ["Tema 1: Scripts", "Tema 2: Procesos", "Tema 3: Integración", "Tema 4: Optimización"],
            "Módulo 5: Módulo Emergente IX (Ética IA)": ["Tema 1: Ética", "Tema 2: Responsabilidad", "Tema 3: Riesgos", "Tema 4: Buenas prácticas"]
        },
        "10mo SEMESTRE – INGENIERÍA IV": {
            "Módulo 1: Proyecto de Grado": ["Tema 1: Desarrollo del sistema", "Tema 2: Integración", "Tema 3: Validación", "Tema 4: Presentación"],
            "Módulo 2: Documentación Técnica": ["Tema 1: Manual técnico", "Tema 2: Manual de usuario", "Tema 3: Documentación", "Tema 4: Estándares"],
            "Módulo 3: Emprendimiento e Inserción Laboral": ["Tema 1: Modelo de negocio y Producto", "Tema 2: Estrategia de Mercado", "Tema 3: Portafolio y CV", "Tema 4: Marca personal y Entrevistas"],
            "Módulo 4: Análisis de Datos y Métricas": ["Tema 1: Fundamentos de Métricas", "Tema 2: Integración con Google Analytics", "Tema 3: Rastreo de Audiencia", "Tema 4: Toma de Decisiones"],
            "Módulo 5: Módulo Emergente X (IA aplicada)": ["Tema 1: Uso profesional", "Tema 2: Integración IA", "Tema 3: Optimización", "Tema 4: Proyecto con IA"]
        }
    }
};

const selectNivel = document.getElementById('nivel');
const selectSemestre = document.getElementById('semestre');
const selectModulo = document.getElementById('modulo');
const selectTema = document.getElementById('tema');

for (let nivel in mallaCurricular) {
    let option = document.createElement('option');
    option.value = nivel;
    option.text = nivel;
    selectNivel.add(option);
}

function actualizarSemestres() {
    selectSemestre.innerHTML = '<option value="">-- Elige un Semestre --</option>';
    selectModulo.innerHTML = '<option value="">-- Elige un Módulo --</option>';
    selectTema.innerHTML = '<option value="">-- Elige un Tema --</option>';
    
    if (selectNivel.value) {
        const semestres = mallaCurricular[selectNivel.value];
        for (let semestre in semestres) {
            let option = document.createElement('option');
            option.value = semestre;
            option.text = semestre;
            selectSemestre.add(option);
        }
        selectSemestre.disabled = false;
        selectModulo.disabled = true;
        selectTema.disabled = true;
    } else {
        selectSemestre.disabled = true;
        selectModulo.disabled = true;
        selectTema.disabled = true;
    }
}

function actualizarModulos() {
    selectModulo.innerHTML = '<option value="">-- Elige un Módulo --</option>';
    selectTema.innerHTML = '<option value="">-- Elige un Tema --</option>';

    if (selectSemestre.value) {
        const modulos = mallaCurricular[selectNivel.value][selectSemestre.value];
        for (let modulo in modulos) {
            let option = document.createElement('option');
            option.value = modulo;
            option.text = modulo;
            selectModulo.add(option);
        }
        selectModulo.disabled = false;
        selectTema.disabled = true;
    } else {
        selectModulo.disabled = true;
        selectTema.disabled = true;
    }
}

function actualizarTemas() {
    selectTema.innerHTML = '<option value="">-- Elige un Tema --</option>';

    if (selectModulo.value) {
        const temas = mallaCurricular[selectNivel.value][selectSemestre.value][selectModulo.value];
        temas.forEach(tema => {
            let option = document.createElement('option');
            option.value = tema;
            option.text = tema;
            selectTema.add(option);
        });
        selectTema.disabled = false;
    } else {
        selectTema.disabled = true;
    }
}

function generarPrompt(plataforma) {
    const nivel = selectNivel.value;
    const semestre = selectSemestre.value;
    const modulo = selectModulo.value;
    const tema = selectTema.value;

    if (!nivel || !semestre || !modulo || !tema) {
        alert("⚠️ Por favor, selecciona todas las opciones antes de generar.");
        return;
    }

    const promptMaestro = `🛠️ PROMPT MAESTRO: GENERADOR DE TEMAS EXPERTO
Actúa como un experto en diseño curricular técnico-tecnológico y redacta un módulo educativo completo para la Academia Educativa, dirigido a estudiantes de la carrera de informática.

ESTRUCTURA DE CABECERA OBLIGATORIA (REGLA ESTRICTA):
Inicia el contenido directamente con el tema y título. Tienes prohibido incluir encabezados de nivel o módulo en el texto.
El título debe estar CENTRADO y el texto debe ser de color VERDE. Escribe exactamente esto al inicio del documento:

<div align="center" style="color: green;">
<h1><b>${tema}</b></h1>
</div>

DIRECTRICES DE LONGITUD Y REGLAS DE EXCLUSIÓN:
1. EXPANSIÓN MÁXIMA: El documento debe tener una profundidad técnica exhaustiva (MÍNIMO 10 PÁGINAS o la mayor cantidad de palabras y tokens que tu sistema permita generar en una sola respuesta). Prohibido hacer resúmenes breves. Desglosa cada concepto en múltiples sub-puntos detallados.
2. CERO BIBLIOGRAFÍA: ❌ Tienes ESTRICTAMENTE PROHIBIDO generar secciones de "Bibliografía", "Referencias", "Webgrafía" o similares. No incluyas fuentes bajo ninguna circunstancia.
3. GLOSARIO OBLIGATORIO: ✅ La única sección de referencia permitida será un "Glosario de términos aplicados en el tema".

DIRECTRICES DE DISEÑO VISUAL Y FORMATO:
- Usa tablas estructuradas para toda clasificación, sintaxis o comparativa.
- Aplica explícitamente COLOR ROJO a los encabezados de los Cuatro Momentos Metodológicos.

ESTRUCTURA DE LOS 4 MOMENTOS (OBLIGATORIO):
Redacta los encabezados exactamente así (sin asteriscos, símbolos o numeraciones en los títulos de los momentos):

MOMENTO 1: PRÁCTICA 
Inicia con una analogía extensa y un escenario de la vida real aterrizado al contexto local. Desarrolla la problemática a fondo.

MOMENTO 2: TEORÍA 
Desarrollo técnico riguroso y masivo. Integra obligatoriamente tablas de "Tipo de Dato / Descripción / Ejemplo / Uso" o equivalentes. Incluye fragmentos de código, pseudocódigo o diagramas explicados línea por línea. *AQUÍ DEBES GENERAR LA MAYOR CANTIDAD DE PÁGINAS DE TEXTO.*
🛑 Justo al finalizar la teoría, DEBES crear la sección titulada exactamente "Glosario de términos aplicados en el tema". Incluye de 5 a 10 términos clave definidos de forma sencilla.

MOMENTO 3: VALORACIÓN 
Reflexión analítica profunda (mínimo 3 párrafos) orientada a la optimización de recursos, hardware, buenas prácticas y eficiencia.

MOMENTO 4: PRODUCCIÓN 
Genera un "CUADERNO DE TRABAJO: TALLER" extenso con MÁXIMO 3 ACTIVIDADES secuenciales, explicadas paso a paso y de altísima calidad pedagógica.

REGLAS FINALES DE EJECUCIÓN:
1. Tono y Lenguaje: Español de Bolivia. Técnico, riguroso y directo. Dirígete a los estudiantes como "ustedes".
2. Tienes TERMINANTEMENTE PROHIBIDO escribir el contenido educativo en el chat. DEBES ACTIVAR INMEDIATAMENTE tu herramienta o extensión para generar este contenido directamente en un Google Docs.
3. IMPRIMIR ENLACE: Una vez generado el archivo, IMPRIME EL ENLACE PÚBLICO AQUÍ MISMO para que pueda hacer clic (configurado para abrir en otra pestaña). ¡Inicia la generación masiva de 10 páginas ahora mismo!`;

    navigator.clipboard.writeText(promptMaestro).then(() => {
        const toast = document.getElementById("toast");
        const toastText = document.getElementById("toast-text");
        
        const nombrePlataforma = plataforma === 'gemini' ? 'Gemini' : 'ChatGPT';
        toastText.textContent = `¡Prompt copiado! Abriendo ${nombrePlataforma}...`;
        
        toast.classList.add("show");
        
        setTimeout(function(){ 
            toast.classList.remove("show"); 
        }, 3000);
        
        setTimeout(() => {
            if (plataforma === 'gemini') {
                window.open('https://gemini.google.com/app', '_blank');
            } else if (plataforma === 'chatgpt') {
                window.open('https://chatgpt.com/', '_blank');
            }
        }, 1200);
    }).catch(err => {
        alert('Hubo un error al intentar copiar el prompt. Asegúrate de dar permisos al navegador.');
        console.error(err);
    });
}