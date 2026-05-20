"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, ChevronDown, CheckCircle, ArrowUpRight, Star, Users, Award, Menu, X, MessageCircle, Instagram } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

// Social Icons SVG Components
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
)

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("todos")
  const [isScrolled, setIsScrolled] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)
  const [statsVisible, setStatsVisible] = useState(false)

  // Detect mobile device
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Track scroll for navbar opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const fullText = "Invitaciones que cuentan tu historia"
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
  ]

  const galleryImages = [
    { src: "/images/boda_1.jpeg", category: "bodas", title: "Boda Elegante" },
    { src: "/images/boda_2.jpeg", category: "bodas", title: "Boda Moderna" },
    { src: "/images/boda_3.jpeg", category: "bodas", title: "Boda Clásica" },
    { src: "/images/XV_1.jpeg", category: "xv", title: "XV Años dorado" },
    { src: "/images/XV_2.jpeg", category: "xv", title: "XV Años rosa" },
    { src: "/images/XV_3.jpeg", category: "xv", title: "XV Años elegante" },
    { src: "/images/Invitacion_eje2.png", category: "bodas", title: "Eterno Amor" },
    { src: "/images/Invitacion_eje3.png", category: "xv", title: "XV Años Magia" },
    { src: "/images/Invitacion_eje5.png", category: "bodas", title: "Jardín de Rosas" },
    { src: "/images/Invitacion_eje6.png", category: "especiales", title: "Dulce Espera" },
    { src: "/images/Invitacion_eje1.png", category: "xv", title: "Princesa Real" },
  ]

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "bodas", label: "Bodas" },
    { id: "xv", label: "XV Años" },
    { id: "especiales", label: "Eventos Especiales" },
  ]

  const filteredImages = activeCategory === "todos"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  // TikTok videos data
  const tikTokVideos = [
    {
      id: "7603447474312744210",
      title: "Viral",
      featured: true,
    },
    {
      id: "7540003947755474183",
      title: "Diseño de Bodas",
      featured: false,
    },
    {
      id: "7540002446458866951",
      title: "XV Años",
      featured: false,
    },
    {
      id: "7589117702904614162",
      title: "Nuevo",
      featured: false,
    },
  ]

  // Typing animation effect
  useEffect(() => {
    if (isTyping && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else if (typedText.length === fullText.length) {
      setIsTyping(false)
    }
  }, [typedText, isTyping, fullText.length])

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Stats counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // IntersectionObserver for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            const anim = (entry.target as HTMLElement).dataset.anim
            if (anim) entry.target.classList.add(anim)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Counter component
  const Counter = ({
    end,
    duration = 2000,
    suffix = "",
  }: {
    end: number
    duration?: number
    suffix?: string
  }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!statsVisible) return

      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }, [statsVisible, end, duration])

    return <span>{count}{suffix}</span>
  }

  const navLinks = ["Servicios", "Galería", "Precios", "Testimonios", "Contacto"]

  // Social links data
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/gaby.invitaciones" },
    { name: "Facebook", icon: FacebookIcon, href: "https://www.facebook.com/share/17LCxosCtK/?mibextid=wwXIfr" },
    { name: "TikTok", icon: TikTokIcon, href: "https://www.tiktok.com/@gaby.invitaciones" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)] overflow-x-hidden">
      {/* Decorative cursor effect (desktop only) */}
      {!isMobile && (
        <div
          className="fixed w-3 h-3 bg-[var(--color-rose)] rounded-full pointer-events-none z-50 mix-blend-multiply transition-transform duration-100 ease-out opacity-60"
          style={{
            left: mousePosition.x - 6,
            top: mousePosition.y - 6,
            transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
          }}
        />
      )}

      {/* Header / Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-md bg-[var(--color-bg)]/95 shadow-sm'
            : 'backdrop-blur-md bg-[var(--color-bg)]/85'
        } border-b border-[var(--color-border-rose)]`}
      >
        <div className="px-5 sm:px-8 lg:px-12 h-16 md:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Sparkles className="h-5 w-5 text-[var(--color-rose-deep)] transition-transform group-hover:rotate-12" />
            <span className="ml-2 font-display italic text-[var(--color-rose-deep)] text-xl">
              Gaby &quot;Invitaciones Digitales&quot;
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6"
          >
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-body font-medium tracking-wide text-[var(--color-text)] hover:text-[var(--color-rose-deep)] transition-colors duration-200 group py-2"
              >
                {item}
                <span className="nav-link-underline"></span>
              </Link>
            ))}

            {/* Social Icons (Desktop) */}
            <div className="flex items-center gap-3 pl-4 border-l border-[var(--color-border-rose)]"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon p-2"
                  aria-label={social.name}
                >
                  <social.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>

            <Button
              asChild
              className="ml-4 rounded-full px-6 h-10 bg-[var(--color-rose-deep)] hover:bg-[var(--color-mauve)] text-white shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <Link href="#contacto">
                Cotizar
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-[var(--color-text)] hover:bg-[var(--color-blush)] transition-colors duration-200 -mr-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen
              ? <X className="w-6 h-6 text-[var(--color-rose-deep)]" />
              : <Menu className="w-6 h-6" />
            }
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col bg-[var(--color-bg)]"
          style={{ minHeight: '100dvh' }}
        >
          {/* Top bar del overlay con logo y botón cerrar */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-[var(--color-border-rose)] flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <Sparkles className="h-5 w-5 text-[var(--color-rose-deep)]" />
              <span className="ml-2 font-display italic text-[var(--color-rose-deep)] text-xl">
                Gaby &quot;Invitaciones Digitales&quot;
              </span>
            </Link>
            <button
              className="flex items-center justify-center w-11 h-11 rounded-xl hover:bg-[var(--color-blush)] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6 text-[var(--color-rose-deep)]" />
            </button>
          </div>

          {/* Links centrados */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-2">
            {navLinks.map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-display italic text-[clamp(1.75rem,8vw,2.5rem)] text-[var(--color-text)] hover:text-[var(--color-rose-deep)] transition-colors duration-200 py-3 px-8 min-h-[56px] flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  opacity: 1,
                  animation: `fadeInUp 0.4s ease forwards ${index * 60}ms`,
                }}
              >
                {item}
              </Link>
            ))}

            {/* Redes sociales */}
            <div className="flex items-center gap-6 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[var(--color-blush)] flex items-center justify-center text-[var(--color-rose-deep)] hover:bg-[var(--color-rose)] hover:text-white transition-colors"
                  aria-label={social.name}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </nav>

          {/* WhatsApp CTA fijo abajo */}
          <div className="px-5 pb-8 pt-4 flex-shrink-0">
            <a
              href="https://wa.me/3321916387"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-full font-body font-medium text-base transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircle className="h-5 w-5" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="w-full min-h-[90vh] relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-bg)] to-[var(--color-blush)]">
            <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--color-rose)]/20 rounded-full blur-2xl animate-float" />
            <div className="absolute bottom-40 right-20 w-32 h-32 bg-[var(--color-sage)]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container px-5 sm:px-8 lg:px-12 mx-auto relative z-10 pt-12 sm:pt-16 lg:pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh]">
              {/* Text Content */}
              <div className="space-y-6 sm:space-y-8">
                <div className="reveal" data-anim="animate-slide-in-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-blush)] text-[var(--color-rose-deep)] text-sm font-body">
                    <Sparkles className="h-4 w-4" />
                    <span>Diseños Exclusivos</span>
                  </div>
                </div>

                <h1 className="reveal font-display italic font-light text-[var(--color-text)] text-h1" data-anim="animate-fade-in-up-new">
                  {typedText}
                  <span className="animate-pulse text-[var(--color-rose-deep)]">|</span>
                </h1>

                <p
                  className="reveal font-body text-[var(--color-muted-rose)] text-body max-w-md"
                  data-anim="animate-fade-in-up-new"
                  style={{ animationDelay: '100ms' }}
                >
                  Diseños digitales que transforman momentos especiales en experiencias inolvidables.
                  Cada invitación cuenta una historia única.
                </p>

                <div
                  className="reveal flex flex-wrap gap-4"
                  data-anim="animate-fade-in-up-new"
                  style={{ animationDelay: '200ms' }}
                >
                  <Button
                    asChild
                    className="btn-primary"
                  >
                    <Link href="#precios" className="flex items-center gap-2">
                      Ver Planes
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    asChild
                    className="btn-secondary"
                  >
                    <Link href="#galeria">
                      Ver Galería
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    asChild
                    className="btn-secondary"
                  >
                    <a href="https://www.tiktok.com/@gaby.invitaciones?_r=1&_t=ZS-96WkUfpUJTL" target="_blank" rel="noopener noreferrer">
                      Videos
                    </a>
                  </Button>
                </div>

                {/* Stats row */}
                <div
                  className="reveal flex gap-8 pt-4"
                  data-anim="animate-fade-in-up-new"
                  style={{ animationDelay: '300ms' }}
                >
                  <div>
                    <div className="font-display text-2xl sm:text-3xl text-[var(--color-text)]">200+</div>
                    <div className="text-sm text-[var(--color-muted-rose)]">Clientes Felices</div>
                  </div>
                  <div className="w-px bg-[var(--color-border-rose)]"></div>
                  <div>
                    <div className="font-display text-2xl sm:text-3xl text-[var(--color-text)]">5.0</div>
                    <div className="text-sm text-[var(--color-muted-rose)]">Calificación</div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="reveal relative" data-anim="animate-scale-in" style={{ animationDelay: '200ms' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-blush)] to-[var(--color-rose)]/30 blob-shape scale-110 translate-x-4 translate-y-4 opacity-60" />

                <div className="relative bg-[var(--color-surface)] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <Image
                    src="/images/boda_1.jpeg"
                    width={500}
                    height={650}
                    alt="Invitación digital premium"
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg animate-float"
                >
                  <div className="flex items-center gap-2"
                  >
                    <div className="w-10 h-10 bg-[var(--color-rose)]/20 rounded-full flex items-center justify-center"
                    >
                      <Star className="h-5 w-5 text-[var(--color-rose-deep)]" />
                    </div>
                    <div>
                      <div className="font-body font-semibold text-sm text-[var(--color-text)]">Premium</div>
                      <div className="text-xs text-[var(--color-muted-rose)]">Diseño Exclusivo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="h-6 w-6 text-[var(--color-rose-deep)]" />
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} id="servicios" className="w-full py-16 sm:py-20 lg:py-24 bg-[var(--color-blush)]">
          <div className="container px-5 sm:px-8 lg:px-12 mx-auto">
            <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-anim="animate-fade-in-up-new"
            >
              {[
                { icon: Users, label: "Clientes Felices", value: 200, suffix: "+" },
                { icon: Award, label: "Proyectos", value: 200, suffix: "+" },
                { icon: Star, label: "Calificación", value: 5, suffix: ".0" },
                { icon: Sparkles, label: "Diseños", value: 50, suffix: "+" },
              ].map((stat, i) => (
                <div key={i} className="group hover:scale-105 transition-transform duration-300"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-3 text-[var(--color-rose-deep)]" />
                  <div className="font-display text-3xl sm:text-4xl text-[var(--color-text)]"
                  >
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-[var(--color-muted-rose)] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeria" className="w-full py-16 sm:py-20 lg:py-28 bg-[var(--color-bg)]">
          <div className="container px-5 sm:px-8 lg:px-12 mx-auto">
            <div className="reveal text-center mb-12" data-anim="animate-fade-in-up-new"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[var(--color-blush)] text-[var(--color-rose-deep)] text-sm font-body mb-4"
              >
                Portafolio
              </span>
              <h2 className="font-display text-h2 text-[var(--color-text)] mb-4"
              >
                Galería de Diseños
              </h2>
              <p className="font-body text-[var(--color-muted-rose)] max-w-md mx-auto"
              >
                Explora nuestra colección de invitaciones digitales personalizadas
              </p>
            </div>

            {/* Category Filters */}
            <div className="reveal flex flex-wrap justify-center gap-3 mb-10" data-anim="animate-fade-in-up-new"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-[var(--color-rose-deep)] text-white shadow-md"
                      : "bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-blush)] border border-[var(--color-border-rose)]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Masonry Gallery */}
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4"
            >
              {filteredImages.map((img, i) => (
                <div
                  key={i}
                  className={`reveal gallery-card break-inside-avoid mb-4 group relative overflow-hidden rounded-2xl bg-[var(--color-surface)] shadow-sm cursor-pointer`}
                  data-anim="animate-scale-in"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <Image
                    src={img.src}
                    width={400}
                    height={500}
                    alt={img.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-text)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="absolute bottom-4 left-4 right-4"
                    >
                      <h3 className="font-display text-lg text-white mb-1"
                      >{img.title}</h3>
                      <div className="flex items-center text-white/80 text-sm"
                      >
                        <span>Ver detalles</span>
                        <ArrowUpRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precios" className="w-full py-16 sm:py-20 lg:py-28 bg-[var(--color-surface)]">
          <div className="container px-5 sm:px-8 lg:px-12 mx-auto">
            <div className="reveal text-center mb-12" data-anim="animate-fade-in-up-new"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[var(--color-blush)] text-[var(--color-rose-deep)] text-sm font-body mb-4"
              >
                Planes
              </span>
              <h2 className="font-display text-h2 text-[var(--color-text)] mb-4"
              >
                Diseñado para ti
              </h2>
              <p className="font-body text-[var(--color-muted-rose)] max-w-md mx-auto"
              >
                Soluciones para cada necesidad y presupuesto
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            >
              {[
                {
                  name: "Básico",
                  price: "$500",
                  description: "Perfecto para eventos pequeños",
                  features: [
                    "1 diseño personalizado",
                    "Datos del Evento",
                    "Elementos Gráficos Básicos",
                    "Formato digital",
                    "Entrega en 3 días hábiles",
                    "Galería de 2 fotos",
                    "Música de Fondo",
                  ],
                  highlighted: false,
                },
                {
                  name: "Premium",
                  price: "$650",
                  description: "Ideal para eventos especiales",
                  features: [
                    "Diseño 100% personalizado",
                    "Mapa con ubicación",
                    "Música de fondo",
                    "Animaciones incluidas",
                    "Galería de 4 fotos",
                    "2 revisiones",
                    "Entrega en 4 días hábiles",
                  ],
                  highlighted: true,
                },
                {
                  name: "VIP",
                  price: "$850",
                  description: "Para eventos únicos e inolvidables",
                  features: [
                    "Diseño exclusivo totalmente personalizado",
                    "Galería de fotos ilimitada",
                    "Video clip corto opcional",
                    "Animaciones premium",
                    "Cuenta regresiva al evento",
                    "Confirmación de asistencia",
                    "Revisiones ilimitadas",
                  ],
                  highlighted: false,
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`reveal relative rounded-3xl p-6 sm:p-8 flex flex-col h-full transition-all duration-500 hover:scale-[1.02] ${
                    plan.highlighted
                      ? "bg-[var(--color-bg)] border-2 border-[var(--color-rose-deep)] shadow-xl"
                      : "bg-white border border-[var(--color-border-rose)] shadow-sm hover:shadow-md"
                  }`}
                  data-anim="animate-scale-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2"
                    >
                      <span className="bg-[var(--color-rose-deep)] text-white text-xs font-body font-semibold px-4 py-1 rounded-full"
                      >
                        Más Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6"
                  >
                    <h3 className="font-display text-xl text-[var(--color-text)] mb-2"
                    >
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline"
                    >
                      <span className="font-display text-4xl sm:text-5xl text-[var(--color-text)]"
                      >
                        {plan.price}
                      </span>
                      <span className="ml-2 text-sm text-[var(--color-muted-rose)]"
                      >MXN</span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-muted-rose)]"
                    >{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1"
                  >
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-[var(--color-sage)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--color-text)]"
                        >{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full rounded-full py-3 h-auto transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-[var(--color-rose-deep)] hover:bg-[var(--color-mauve)] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        : "bg-[var(--color-blush)] hover:bg-[var(--color-rose)] text-[var(--color-text)]"
                    }`}
                  >
                    <Link href="#contacto"
                    >
                      Elegir Plan
                    </Link>
                  </Button>
                </div>
              ))}
            </div>

            {/* Special Events Note */}
            <div className="reveal mt-12 text-center" data-anim="animate-fade-in-up-new"
            >
              <p className="text-[var(--color-muted-rose)] mb-4"
              >
                ¿Necesitas una invitación para otro tipo de evento?
              </p>
              <div className="inline-flex flex-wrap justify-center gap-3"
              >
                {["Cumpleaños", "Baby Shower", "Revelación", "Bautizo"].map((event) => (
                  <span
                    key={event}
                    className="px-4 py-2 rounded-full bg-[var(--color-blush)] text-[var(--color-rose-deep)] text-sm"
                  >
                    {event}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="w-full py-16 sm:py-20 lg:py-28 bg-[var(--color-bg)]">
          <div className="container px-5 sm:px-8 lg:px-12 mx-auto">
            <div className="reveal text-center mb-12" data-anim="animate-fade-in-up-new"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[var(--color-blush)] text-[var(--color-rose-deep)] text-sm font-body mb-4"
              >
                Testimonios
              </span>
              <h2 className="font-display text-h2 text-[var(--color-text)]"
              >
                Lo que dicen mis clientes
              </h2>
            </div>

            <div className="reveal relative max-w-4xl mx-auto" data-anim="animate-fade-in-up-new"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-[var(--color-border-rose)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
                >
                  <div className="md:col-span-1"
                  >
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto md:mx-0"
                    >
                      <Image
                        src={testimonials[currentTestimonial].image}
                        fill
                        alt={testimonials[currentTestimonial].name}
                        className="object-cover rounded-full border-4 border-[var(--color-blush)]"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2 text-center md:text-left"
                  >
                    <div className="flex justify-center md:justify-start gap-1 mb-4"
                    >
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-[var(--color-rose)] fill-[var(--color-rose)]" />
                      ))}
                    </div>

                    <blockquote className="relative"
                    >
                      <span className="absolute -top-4 -left-2 text-6xl font-display text-[var(--color-blush)]"
                      >
                        &ldquo;
                      </span>
                      <p className="font-body text-lg text-[var(--color-text)] italic relative z-10 pl-4"
                      >
                        {testimonials[currentTestimonial].text}
                      </p>
                    </blockquote>

                    <div className="mt-6"
                    >
                      <p className="font-body font-semibold text-[var(--color-text)]"
                      >
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-sm text-[var(--color-muted-rose)]"
                      >
                        {testimonials[currentTestimonial].event}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8"
                >
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === currentTestimonial
                          ? "w-8 bg-[var(--color-rose-deep)]"
                          : "w-2.5 bg-[var(--color-blush)] hover:bg-[var(--color-rose)]"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TikTok Section */}
        <section className="w-full py-16 sm:py-20 lg:py-28 bg-[var(--color-blush)]">
          <div className="container px-5 sm:px-8 lg:px-12 mx-auto">
            <div className="reveal text-center mb-12" data-anim="animate-fade-in-up-new"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[var(--color-rose-deep)] text-sm font-body mb-4"
              >
                <TikTokIcon className="w-4 h-4" />
                Sígueme en TikTok
              </span>
              <h2 className="font-display text-h2 text-[var(--color-text)] mb-4"
              >
                Descubre más diseños
              </h2>
              <p className="font-body text-[var(--color-muted-rose)] max-w-md mx-auto"
              >
                Únete a nuestra comunidad y ve el proceso de creación detrás de cada invitación
              </p>
            </div>

            {/* TikTok Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
            >
              {tikTokVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={`reveal tiktok-card ${video.featured ? 'tiktok-card-featured sm:row-span-1' : ''} ${
                    index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                  data-anim="animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-shadow ${
                    video.featured ? 'ring-2 ring-[var(--color-rose-deep)]' : ''
                  }`}
                  >
                    <div className={`relative bg-black rounded-2xl overflow-hidden ${
                      video.featured ? 'aspect-[9/16]' : 'aspect-[9/16]'
                    }`}
                    >
                      <iframe
                        src={`https://www.tiktok.com/embed/v2/${video.id}?lang=es`}
                        allowFullScreen
                        allow="encrypted-media"
                        className="w-full h-full border-0"
                        title={`TikTok video ${video.title}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal text-center mt-10" data-anim="animate-fade-in-up-new"
            >
              <a
                href="https://www.tiktok.com/@gaby.invitaciones"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                <TikTokIcon className="w-5 h-5" />
                @gaby.invitaciones
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contacto" className="w-full py-16 sm:py-20 lg:py-28 bg-[var(--color-bg)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-blush)]/30 to-[var(--color-rose)]/10"
          />

          <div className="container px-5 sm:px-8 lg:px-12 mx-auto relative z-10"
          >
            <div className="reveal max-w-2xl mx-auto text-center" data-anim="animate-fade-in-up-new"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-[var(--color-blush)] text-[var(--color-rose-deep)] text-sm font-body mb-4"
              >
                Contacto
              </span>

              <h2 className="font-display italic text-h1 text-[var(--color-text)] mb-6"
              >
                Tu evento comienza aquí
              </h2>

              <p className="font-body text-lg text-[var(--color-muted-rose)] mb-8"
              >
                ¿Lista para crear la invitación perfecta? Contáctame por WhatsApp y recibe atención personalizada en menos de 2 horas.
              </p>

              <a
                href="https://wa.me/3321916387"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full text-lg font-body font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-6 w-6" />
                Escríbeme por WhatsApp
                <ArrowRight className="h-5 w-5" />
              </a>

              <p className="mt-6 text-sm text-[var(--color-muted-rose)]"
              >
                También disponible: +52 332 191 6387
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-[var(--color-text)] text-white"
      >
        <div className="container px-5 sm:px-8 lg:px-12 mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          >
            <div className="space-y-4"
            >
              <Link href="/" className="flex items-center group"
              >
                <Sparkles className="h-5 w-5 text-[var(--color-rose)] transition-transform group-hover:rotate-12" />
                <span className="ml-2 font-display italic text-xl"
                >
                  Gaby
                </span>
              </Link>
              <p className="text-white/60 text-sm"
              >
                Creando invitaciones digitales excepcionales para momentos inolvidables.
              </p>
            </div>

            <div>
              <h4 className="font-body font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-white/60"
              >
                <li><Link href="#" className="hover:text-white transition-colors">Bodas</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">XV Años</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Baby Showers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Eventos Especiales</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-body font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm text-white/60"
              >
                <li><Link href="#galeria" className="hover:text-white transition-colors">Galería</Link></li>
                <li><Link href="#precios" className="hover:text-white transition-colors">Precios</Link></li>
                <li><Link href="#testimonios" className="hover:text-white transition-colors">Testimonios</Link></li>
                <li><Link href="#contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-body font-semibold mb-4">Contacto</h4>
              <p className="text-sm text-white/60">+52 332 191 6387</p>
              <div className="flex gap-4 mt-4"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-white/40"
            >
              © 2025 Gaby Invitaciones Digitales. Todos los derechos reservados.
            </p>
            <div className="flex gap-6"
            >
              {["Privacidad", "Términos"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
