import { BookOpen, Camera, TrendingUp, Home, PaintBucket, Wrench } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

export type ArticleType = {
    slug: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    image: string;
    title: string;
    excerpt: string;
    readTime: string;
    content: {
        subtitle: string;
        text: string;
    }[];
};

export const articles: ArticleType[] = [
    {
        slug: "mejorar-calidad-fotos-5-pasos",
        icon: Camera,
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop",
        title: "Mejora la calidad de tus fotos en 5 pasos",
        excerpt: "Descubre técnicas profesionales para capturar espacios arquitectónicos que enamoren a primera vista.",
        readTime: "4 minutos de lectura",
        content: [
            {
                subtitle: "1. Iluminación Natural es tu Mejor Aliada",
                text: "Fotografía siempre durante el día, preferiblemente en la mañana (9-11am) o tarde (3-5pm) cuando la luz es suave y cálida. Abre todas las cortinas y ventanas para aprovechar la luz natural. Evita usar flash directo."
            },
            {
                subtitle: "2. Despeja y Organiza el Espacio",
                text: "Retira objetos personales, cables visibles y elementos que distraigan. Un espacio limpio y ordenado se ve más amplio y profesional. Menos es más en fotografía inmobiliaria."
            },
            {
                subtitle: "3. Mantén la Cámara a la Altura Correcta",
                text: "Fotografía a la altura del pecho (aproximadamente 1.5m del suelo). Esta perspectiva es la más natural y evita distorsiones. Usa un trípode o apoya el celular en una superficie estable."
            },
            {
                subtitle: "4. Captura Ángulos Amplios",
                text: "Ubícate en las esquinas de la habitación para mostrar la mayor cantidad de espacio posible. Usa el modo gran angular de tu cámara o celular para capturar más del ambiente."
            },
            {
                subtitle: "5. Ajusta el Balance de Blancos",
                text: "Asegúrate de que los colores se vean naturales. Si las fotos salen muy amarillas o azules, ajusta el balance de blancos en la configuración de tu cámara o móvil."
            }
        ]
    },
    {
        slug: "aprovecha-funciones-movil",
        icon: Camera,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        title: "Aprovecha al máximo las funciones de tu móvil",
        excerpt: "Tu smartphone tiene todo lo necesario para crear fotografías de nivel profesional si sabes cómo usarlo.",
        readTime: "3 minutos de lectura",
        content: [
            {
                subtitle: "Modo HDR (Alto Rango Dinámico)",
                text: "Activa el HDR cuando fotografíes habitaciones con ventanas. Esta función combina varias exposiciones para mostrar detalles tanto en las áreas iluminadas como en las sombras, evitando fotos 'quemadas' o muy oscuras."
            },
            {
                subtitle: "Cuadrícula de Composición",
                text: "Activa la cuadrícula (grid) en la configuración de tu cámara. Usa la 'regla de los tercios' para posicionar elementos importantes en las intersecciones de las líneas. Mantén las líneas horizontales (pisos, techos) perfectamente niveladas."
            },
            {
                subtitle: "Modo Panorámico para Espacios Amplios",
                text: "Usa el modo panorámico para capturar jardines, terrazas o espacios muy amplios. Muévete lentamente y mantén el teléfono estable. Esta función es ideal para mostrar la amplitud de exteriores."
            },
            {
                subtitle: "Edición Básica Integrada",
                text: "Usa las herramientas de edición de tu móvil para ajustar brillo, contraste y saturación. Sube ligeramente el brillo (+10-20%) y la nitidez. Evita filtros exagerados que distorsionen los colores reales."
            },
            {
                subtitle: "Fotografía en Máxima Resolución",
                text: "Configura tu cámara para tomar fotos en la máxima resolución disponible. Esto te permitirá recortar o redimensionar sin perder calidad. Libera espacio en tu teléfono antes de la sesión fotográfica."
            }
        ]
    },
    {
        slug: "5-razones-fotos-vender-rapido",
        icon: TrendingUp,
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
        title: "5 razones por las que tus fotos te ayudan a vender más rápido",
        excerpt: "El 90% de los compradores buscan propiedades online primero. Tus fotos son tu primera (y a veces única) oportunidad.",
        readTime: "3 minutos de lectura",
        content: [
            {
                subtitle: "1. La Primera Impresión es Digital",
                text: "El 90% de los compradores comienza su búsqueda en internet. Si tus fotos no los capturan en los primeros 3 segundos, pasarán a la siguiente propiedad. Fotos profesionales generan hasta 3 veces más consultas que fotos amateur."
            },
            {
                subtitle: "2. Justifican el Precio de Venta",
                text: "Propiedades con fotografías de alta calidad justifican precios más altos. Los compradores perciben espacios bien fotografiados como más valiosos y mejor mantenidos. La inversión en buenas fotos se traduce en mejor ROI."
            },
            {
                subtitle: "3. Reducen el Tiempo en el Mercado",
                text: "Propiedades con fotos profesionales se venden hasta un 32% más rápido que aquellas con fotos de baja calidad. Menos tiempo en el mercado significa menos gastos de mantenimiento y mayor poder de negociación."
            },
            {
                subtitle: "4. Filtran Compradores Serios",
                text: "Fotos de calidad atraen a compradores realmente interesados y cualificados. Reducen visitas innecesarias de personas que 'solo estaban curioseando'. Esto ahorra tiempo tanto al vendedor como al agente."
            },
            {
                subtitle: "5. Generan Conexión Emocional",
                text: "Las personas compran con emoción primero, y justifican con lógica después. Fotos bien hechas permiten que los compradores se 'vean viviendo ahí'. Esta conexión emocional es el factor decisivo en la mayoría de las ventas."
            }
        ]
    },
    {
        slug: "preparar-propiedad-open-house",
        icon: Home,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        title: "Cómo preparar tu propiedad para una visita abierta (Open House) exitosa",
        excerpt: "Consejos clave para que los visitantes se sientan como en casa y aumenten las ofertas el día de la muestra.",
        readTime: "5 minutos de lectura",
        content: [
            {
                subtitle: "1. Limpieza Profunda",
                text: "No subestimes el poder del olor a limpio. Contrata un servicio de limpieza profesional que deje impecables las ventanas, pisos, alfombras y juntas de los baños. Un lugar reluciente inspira más confianza hacia el estado general de la casa."
            },
            {
                subtitle: "2. Despersonaliza los Ambientes",
                text: "A los visitantes les gusta imaginarse su vida allí. Para esto, esconde porta retratos, medallas, objetos religiosos y colecciones personales excesivas. El objetivo es que la propiedad luzca como una casa modelo de revista."
            },
            {
                subtitle: "3. Crea un Ambiente Acogedor",
                text: "Abre persianas para que entre luz solar. Enciende lámparas para evitar esquinas oscuras. Una temperatura interior regulada (fresca en verano, cálida en invierno) influye sutilmente pero con fuerza en la estadía del potencial comprador."
            },
            {
                subtitle: "4. Ocúpate de las Mascotas",
                text: "El día del Open House, las mascotas (y sus platos, cajas de arena o juguetes) deberían irse temporalmente de la casa. Algunos compradores tienen alergias severas o pueden distraerse con ellas, arruinando la visita."
            },
            {
                subtitle: "5. Detalles de Bienvenida",
                text: "Una bandeja con agua, galletas o hasta el sutil olor de pan recién horneado actúan poderosamente en el cerebro instintivo. Hacen sentir cómodos y predispuestos a los visitantes a pasar más tiempo recorriendo la propiedad."
            }
        ]
    },
    {
        slug: "impacto-home-staging-venta",
        icon: PaintBucket,
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
        title: "El impacto de la decoración neutra (Home Staging) en tu decisión de venta",
        excerpt: "Descubre por qué decorar tu casa pensando en el comprador neutro puede subir un 15% el valor de tu inmueble.",
        readTime: "4 minutos de lectura",
        content: [
            {
                subtitle: "¿Qué es el Home Staging?",
                text: "Es una técnica de marketing inmobiliario enfocada en despersonalizar y optimizar visualmente una propiedad con muebles modernos, neutrales, arte estratégico y detalles decorativos con el objetivo de encantar al mayor número posible de compradores."
            },
            {
                subtitle: "Las Matemáticas Detrás de la Neuroestética",
                text: "Una habitación vacía parece más pequeña de lo que realmente es, porque los compradores pierden la escala visual. Por otro lado, una casa muy recargada abruma. El Home staging equilibra esto mostrando el potencial exacto de la habitación, incrementando ofertas."
            },
            {
                subtitle: "Colores Neutros",
                text: "El blanco hueso, el beige, y los grises suaves reflejan más la luz y dan una apariencia enorme, fresca y lista para mudarse a la casa. Evita dejar paredes pintadas de fucsia o azul intenso, que distraen negativamente la imaginación del cliente."
            },
            {
                subtitle: "Zonas Clave a Priorizar",
                text: "Estadísticamente, el living, la cocina y el dormitorio principal son las tres habitaciones donde debes invertir tu mayor presupuesto de Home Staging, ya que es donde las familias proyectan pasar el 80% de su tiempo."
            },
            {
                subtitle: "Menos Objeciones",
                text: "Las estadísticas afirman que la casa con 'Home Staging' atrae a mucha más gente y recibe mucho menos regateo porque los compradores ya están cautivos con la bella experiencia. El Staging paga su propio costo al elevar el precio final vendido."
            }
        ]
    },
    {
        slug: "pequenas-reformas-mayor-roi",
        icon: Wrench,
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop",
        title: "Pequeñas reformas con mayor retorno de inversión (ROI) antes de vender",
        excerpt: "No necesitas demoler paredes. Conoce las inversiones estratégicas y económicas que triplican su valor en el precio de lista.",
        readTime: "6 minutos de lectura",
        content: [
            {
                subtitle: "1. Refresca la Pintura",
                text: "Es la inversión número uno con mayor ROI (hasta un 100% o 150%). Una casa recién pintada huele a nuevo, borra años de uso y desgaste visual de inmediato. Usa blanco o colores grisáceos muy sutiles."
            },
            {
                subtitle: "2. Mejoras Superficiales en la Cocina",
                text: "Una cocina de los 90s reduce drásticamente las ofertas. Modernízala sin gran obra pintando las alacenas, cambiando las perillas y tiradores por herrajes modernos de acero o negro mate, y reemplazando un grifo viejo por uno actual tipo industrial."
            },
            {
                subtitle: "3. La Fachada Importa (Curb Appeal)",
                text: "La decisión emocional inicia al pisar la vereda. Invierte en césped nuevo y verde, arregla la puerta de entrada (píntala de un color de contraste, ej: azul marino, o lija y barniza la madera), compra números nuevos para la dirección de la casa y agrega una planta junto al pórtico."
            },
            {
                subtitle: "4. Iluminación Actualizada",
                text: "Saca las lámparas viejas y ventiladores anticuados y pon nuevas pantallas LED de luz blanca cálida o estilo farmhouse/modernas. Actualizar las placas de interruptores luz de un plástico amarillento a placas blancas y frescas cambia absolutamente todo."
            },
            {
                subtitle: "5. Baños como Spa",
                text: "Nadie quiere lidiar con un inodoro gastado u hongos. Resella los bordes de la ducha, renueva la grifería para una moderna de cromo brillante, pon un espejo bonito con buena luz y reemplaza cortinas de baño por algo pulcro y blanco. Parece un baño re-hecho con a penas $100."
            }
        ]
    }
];
