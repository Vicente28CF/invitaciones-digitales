"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  Play,
  CheckCircle,
  ArrowUpRight,
  Star,
  Users,
  Award,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Detect mobile device
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fullText = "Invitaciones que cuentan historias.";
  const testimonials = [
    {
      name: "Juan Ramón",
      event: "Boda - Noviembre 2024",
      text: "Las invitaciones superaron todas nuestras expectativas. El diseño era exactamente lo que queríamos y el servicio fue impecable.",
      image: "/images/Perfil4.jpeg",
      rating: 5,
    },
    {
      name: "Patricia Dominguez",
      event: "Cumpleaños - Febrero 2025",
      text: "¡Increíble trabajo! Mi hija quedó fascinada con el diseño. Todos los invitados preguntaron dónde habíamos hecho la invitación.",
      image: "/images/Perfil2.jpeg",
      rating: 5,
    },
    {
      name: "Lupita",
      event: "Boda - Diciembre 2023",
      text: "Profesionalismo y creatividad en cada detalle. La invitación de nuestra boda fue muy especial y elevó el nivel de nuestro evento.",
      image: "/images/Perfil3.jpeg",
      rating: 5,
    },
    {
      name: "Daniel Santiago",
      event: "Boda - Enero 2025",
      text: "Quedamos completamente enamorados de nuestra invitación digital.",
      image: "/images/Perfil5.jpeg",
      rating: 5,
    },
    {
      name: "Jessica Murillo",
      event: "Bautizo - Enero 2025",
      text: "Las invitaciones para el bautizo de nuestro bebé fueron absolutamente encantadoras. El diseño tierno y personalizado hizo que el evento fuera aún más especial. ¡Superaron todas nuestras expectativas!",
      image: "/images/Perfil6.jpeg",
      rating: 5,
    },
  ];

  // Typing animation effect
  useEffect(() => {
    if (isTyping && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (typedText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [typedText, isTyping]);

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Stats counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Counter component
  const Counter = ({
    end,
    duration = 2000,
  }: {
    end: number;
    duration?: number;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [statsVisible, end, duration]);

    return <span>{count}</span>;
  };

  const images = [
    "/images/Invitacion_eje1.png",
    "/images/Invitacion_eje2.png",
    "/images/Invitacion_eje3.png",
    "/images/Invitacion_eje4.png",
    "/images/Invitacion_eje5.png",
    "/images/Invitacion_eje6.png",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Custom cursor effect */}
      <div
        className="fixed w-4 h-4 bg-[#85cfa3] rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Header with glassmorphism */}
      <header className="px-4 lg:px-8 h-16 flex items-center backdrop-blur-md bg-white/70 sticky top-0 z-40 border-b border-white/20 shadow-lg">
        <Link href="/" className="flex items-center justify-center group">
          <Sparkles className="h-6 w-6 text-[#85cfa3] transition-transform group-hover:rotate-12 group-hover:scale-110" />
          <span className="ml-2 text-xl font-medium transition-colors group-hover:text-[#85cfa3]">
            Invitaciones Digitales
          </span>
        </Link>
        <nav className="ml-auto flex gap-8">
          {["Servicios", "Galería", "Precios", "Contacto"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-[#85cfa3] transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#85cfa3] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section with advanced animations */}
        <section
          ref={heroRef}
          className="w-full min-h-screen flex flex-col justify-center relative overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#85cfa3]/10 to-white z-0">
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[#85cfa3] rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container px-4 md:px-6 mx-auto relative z-10 pt-20 pb-32">
            <div className="flex flex-col items-center text-center space-y-8 animate-on-scroll">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-4xl">
                <span className="inline-block">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p
                className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in-up"
                style={{ animationDelay: "1s", animationFillMode: "forwards" }}
              >
                Diseños digitales que transforman momentos especiales en
                experiencias inolvidables
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 pt-8 opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: "1.5s",
                  animationFillMode: "forwards",
                }}
              >
                <Link href="https://vicenteygaby.my.canva.site/" passHref>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-[#85cfa3] hover:bg-[#6bb989] text-white rounded-full px-8 h-14 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  >
                    <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Ver demostración
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Animated scroll indicator */}
          <div className="w-full flex justify-center absolute bottom-8 animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-400 cursor-pointer hover:text-[#85cfa3] transition-colors" />
          </div>

          {/* Floating elements */}
          <div className="absolute -bottom-[30%] left-1/2 transform -translate-x-1/2 w-[140%] aspect-[16/9] bg-[#85cfa3]/10 rounded-full blur-3xl z-0 animate-pulse"></div>
        </section>

        {/* Stats Section with counters */}
        <section
          ref={statsRef}
          className="w-full py-16 bg-gradient-to-r from-[#85cfa3] to-[#6bb989] text-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Users, label: "Clientes Felices", value: 200 },
                { icon: Award, label: "Proyectos Completados", value: 200 },
                { icon: Star, label: "Calificación Promedio", value: 5 },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="animate-on-scroll group hover:scale-105 transition-transform duration-300"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-4 group-hover:animate-bounce" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.label === "Calificación Promedio" ? (
                      "5.0"
                    ) : (
                      <>
                        <Counter end={stat.value} />
                        {stat.label === "Clientes Felices" && "+"}
                        {stat.label === "Proyectos Completados" && "+"}
                      </>
                    )}
                  </div>
                  <p className="text-white/90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Design with parallax */}
        <section className="w-full py-24 md:py-32 bg-black text-white overflow-hidden relative">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-on-scroll">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Diseño excepcional.
                  <br />
                  <span className="text-[#85cfa3] animate-pulse">
                    Experiencia única.
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-md">
                  Cada invitación es una obra de arte digital, diseñada para
                  impresionar y emocionar a tus invitados desde el primer
                  momento.
                </p>
              </div>
              <div className="relative animate-on-scroll">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#85cfa3] to-[#85cfa3]/60 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black p-1 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 group">
                  <Image
                    src="/images/InviPremium.jpeg"
                    width={400}
                    height={600}
                    alt="Invitación digital premium"
                    className="w-full h-auto rounded-3xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#85cfa3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios with hover effects */}
        <section id="servicios" className="w-full py-24 md:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-20 animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Servicios exclusivos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Soluciones digitales para cada momento especial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Bodas",
                  description:
                    "Invitaciones elegantes que reflejan el romance y la sofisticación de tu día especial.",
                  icon: "💍", // Anillo de compromiso
                  color: "from-pink-500 to-rose-500",
                },
                {
                  title: "Quinceañeras",
                  description:
                    "Diseños vibrantes y modernos que capturan la esencia de esta celebración única.",
                  icon: "👑", // Corona de princesa
                  color: "from-purple-500 to-indigo-500",
                },
                {
                  title: "Eventos Corporativos",
                  description:
                    "Invitaciones profesionales que comunican la importancia de tu evento empresarial.",
                  icon: "🏢", // Edificio de oficinas
                  features: [
                    "Branding corporativo",
                    "Registro de asistentes",
                    "Agenda interactiva",
                    "Integración con calendario",
                  ],
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Cumpleaños",
                  description:
                    "Invitaciones alegres y personalizadas para celebrar un año más de vida con estilo.",
                  icon: "🎉", // Confeti / fiesta
                  features: [
                    "Diseños coloridos",
                    "Galería de fotos",
                    "Cuenta regresiva",
                    "Confirmación por WhatsApp",
                  ],
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  title: "Bautizos",
                  description:
                    "Invitaciones delicadas y emotivas para celebrar un momento especial en familia.",
                  icon: "🕊️", // Paloma blanca
                  features: [
                    "Diseños religiosos",
                    "Mapa interactivo",
                    "Lista de regalos",
                    "Confirmación de asistencia",
                  ],
                  color: "from-sky-400 to-teal-500",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="flex flex-col space-y-6 group animate-on-scroll hover:scale-105 transition-all duration-500 p-6 rounded-2xl hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-white"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold group-hover:text-[#85cfa3] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="space-y-3 pt-4"></ul>
                  <div className="pt-4"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Gallery */}
        <section id="galería" className="w-full py-24 md:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-20 animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Galería de diseños
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Explora nuestra colección de invitaciones digitales
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                images.map((img, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-black animate-on-scroll hover:scale-105 transition-all duration-500 cursor-pointer"
                  >
                    <Image
                      src={img}
                      width={450}
                      height={600}
                      alt={`Diseño de invitación ${i + 1}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Diseño Colección {i + 1}
                        </h3>
                        <p className="text-white/80 mb-4">
                          Invitación digital premium
                        </p>
                        <Button
                          size="sm"
                          className="bg-[#85cfa3] hover:bg-[#6bb989] text-white rounded-full"
                        >
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                )),
              ]}
            </div>

            <div className="flex justify-center mt-16 animate-on-scroll"></div>
          </div>
        </section>

        {/* Interactive Testimonial Carousel */}
        <section className="w-full py-24 md:py-32 bg-white overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Lo que dicen nuestros clientes
              </h2>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="absolute -inset-4 bg-[#85cfa3]/10 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="relative group">
                      <Image
                        src={
                          testimonials[currentTestimonial].image ||
                          "/placeholder.svg"
                        }
                        width={400}
                        height={400}
                        alt="Cliente satisfecho"
                        className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#85cfa3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-6 w-6 text-yellow-400 fill-current animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        )
                      )}
                    </div>
                    <p className="text-2xl md:text-3xl font-light italic text-gray-700 transition-all duration-500">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div>
                      <p className="text-lg font-semibold">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonial].event}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial indicators */}
                <div className="flex justify-center mt-8 gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === currentTestimonial
                          ? "bg-[#85cfa3] scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Pricing */}
        <section
          id="precios"
          className="w-full py-24 md:py-32 bg-black text-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-20 animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Planes diseñados para ti
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl">
                Soluciones para cada necesidad y presupuesto
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Paquete Basico",
                  price: "$800",
                  description: "Perfecto para eventos pequeños",
                  features: [
                    "1 diseño personalizado",
                    "Datos del Evento",
                    "Elementos Graficos Basicos",
                    "Formato digital",
                    "Entrega en 3 días habiles",
                  ],
                  highlighted: false,
                },
                {
                  name: "Paquete Premium",
                  price: "$1200",
                  description: "Ideal para eventos especiales",
                  features: [
                    "Diseño 100% personalizado (colores, tematica, tipografía)",
                    "Invitación Digital",
                    "Mapa de Ubicación (enlace directo a Google Maps)",
                    "Musica de fondo",
                    "Datos del evento",
                    "Animaciones incluidas",
                    "Galeria de 4 fotos",
                    "2 revisiones",
                    "Entrega en 4 dias habiles",
                  ],
                  highlighted: true,
                },
                {
                  name: "Paquete VIP",
                  price: "$1800",
                  description: "Para eventos únicos e inolvidables",
                  features: [
                    "Diseño exclusivo totalmente personalizado",
                    "Invitación digital",
                    "Galeria de fotos ilimitada",
                    "video clip corto, OPCIONAL",
                    "Animaciones premium",
                    "Mapa con ubicaciones interactiva",
                    "Cuenta regresiva al evento",
                    "Confirmación de asistencia",
                    "Musica de fondo personalizada",
                    "Revisiones ilimitadas",
                    "Entrega en 5 días hábiles",
                  ],
                  highlighted: false,
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-3xl p-6 md:p-8 flex flex-col h-full transition-all duration-500 ${
                    !isMobile && "hover:scale-105"
                  } animate-on-scroll group cursor-pointer ${
                    plan.highlighted
                      ? "bg-[#85cfa3] text-black relative overflow-hidden hover:shadow-2xl hover:shadow-[#85cfa3]/50"
                      : "bg-gray-900 hover:bg-gray-800 hover:shadow-2xl"
                  }`}
                >
                  {plan.highlighted && (
                    <>
                      <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg animate-pulse">
                        POPULAR
                      </div>
                      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-ping"></div>
                    </>
                  )}
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl md:text-4xl font-bold group-hover:scale-110 transition-transform duration-300">
                        {plan.price}
                      </span>
                      <span
                        className={`ml-2 ${
                          plan.highlighted ? "text-black/70" : "text-gray-400"
                        }`}
                      >
                        MXN
                      </span>
                    </div>
                    <p
                      className={`mt-2 ${
                        plan.highlighted ? "text-black/80" : "text-gray-400"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1">
                    {plan.features.map((feature, j) => (
                      <li
                        key={j}
                        className={`flex items-center gap-3 ${
                          isMobile
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        } transition-all duration-300`}
                        style={{ transitionDelay: `${j * 50}ms` }}
                      >
                        <CheckCircle
                          className={`h-5 w-5 ${
                            plan.highlighted ? "text-black" : "text-[#85cfa3]"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`rounded-full px-6 md:px-8 h-12 mt-auto transition-all duration-300 ${
                      !isMobile && "hover:scale-105"
                    } ${
                      plan.highlighted
                        ? "bg-black text-white hover:bg-gray-800 hover:shadow-lg"
                        : "bg-[#85cfa3] text-black hover:bg-[#6bb989] hover:shadow-lg hover:shadow-[#85cfa3]/50"
                    }`}
                  >
                    Elegir plan
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="w-full py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#85cfa3]/20 to-white z-0"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto animate-on-scroll">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Tu evento Comienza aquí...
              </h2>
              {/* <p className="text-xl text-gray-600">
                Comienza hoy y transforma tus eventos en experiencias
                inolvidables.
              </p> */}

              {/* Mensaje de contacto */}
              <div className="mt-6 text-center space-y-4">
                <p className="text-lg text-gray-700">
                  ¿Te interesa una invitación digital personalizada?
                </p>
                <p className="text-lg font-semibold text-black">
                  Contáctanos por WhatsApp y recibe atención inmediata.
                </p>
                <a
                  href="https://wa.me/3332229246" // 👈 Reemplaza con tu número real
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#85cfa3] hover:bg-[#6bb989] text-white px-6 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Escríbenos por WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <p className="text-sm text-gray-500 animate-pulse">
                  Respondemos en menos de 2 horas
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer
        id="contacto"
        className="w-full py-12 bg-gray-50 border-t border-gray-100"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 animate-on-scroll">
              <div className="flex items-center group">
                <Sparkles className="h-6 w-6 text-[#85cfa3] transition-transform group-hover:rotate-12" />
                <span className="ml-2 text-xl font-medium">
                  Invitaciones Digitales
                </span>
              </div>
              <p className="text-gray-600">
                Creando invitaciones digitales excepcionales para momentos
                inolvidables.
              </p>
            </div>

            {[
              {
                title: "Servicios",
                links: [
                  "Bodas",
                  "Quinceañeros",
                  "Baby Showers",
                  "Eventos Corporativos",
                ],
              },
              {
                title: "Empresa",
                links: [
                  "Transformamos tus momentos especiales en experiencias digitales inolvidables. Somos más que una simple plataforma de invitaciones; somos artesanos digitales que combinan diseño, tecnología y emoción para crear piezas únicas que reflejen la esencia de tu evento.",
                ],
              },
              {
                title: "Contacto",
                links: ["+52 333-222-9246"],
              },
            ].map((section, i) => (
              <div key={i} className="animate-on-scroll">
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-[#85cfa3] transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-on-scroll">
            <p className="text-gray-600 text-sm">
              © 2025. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {["Términos", "Privacidad", "Cookies"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-[#85cfa3] transition-all duration-300 hover:scale-105"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .animate-on-scroll.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Mejorar rendimiento de animaciones en móviles */
        @media (max-width: 768px) {
          .animate-pulse, .animate-bounce {
            animation-duration: 1.5s;
          }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
