import { FormEvent, useEffect, useState } from 'react'

const navItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Giới thiệu', href: '/about' },
  { label: 'Nhật ký', href: '/post' },
  { label: 'Liên hệ', href: '/contact' },
]

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {diagonal ? (
        <path d="M7 17 17 7M8 7h9v9" />
      ) : (
        <path d="M5 12h14m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function Spark({ className = '' }: { className?: string }) {
  return (
    <svg className={`spark ${className}`} aria-hidden="true" viewBox="0 0 60 60">
      <path d="M30 0c1.7 19.6 10.4 28.3 30 30-19.6 1.7-28.3 10.4-30 30C28.3 40.4 19.6 31.7 0 30 19.6 28.3 28.3 19.6 30 0Z" />
    </svg>
  )
}

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M20.4 15.2A8.5 8.5 0 0 1 8.8 3.6 8.5 8.5 0 1 0 20.4 15.2Z" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function Flower({ className = '' }: { className?: string }) {
  return (
    <svg className={`flower ${className}`} aria-hidden="true" viewBox="0 0 160 160">
      <g>
        <ellipse cx="80" cy="42" rx="23" ry="39" />
        <ellipse cx="80" cy="118" rx="23" ry="39" />
        <ellipse cx="42" cy="80" rx="39" ry="23" />
        <ellipse cx="118" cy="80" rx="39" ry="23" />
        <circle cx="80" cy="80" r="21" />
      </g>
    </svg>
  )
}

function OrnamentalWing({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      className={`ornamental-wing ${flip ? 'wing-flip' : ''}`}
      aria-hidden="true"
      viewBox="0 0 360 560"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M332 54C211 45 116 114 121 207c4 74 76 102 121 62 34-30 24-85-13-99-33-12-68 12-65 45" />
        <path d="M330 93c-73 7-130 63-128 126 2 56 47 97 98 93" />
        <path d="M297 312c-86-12-163 37-180 111-11 49 18 91 65 91 51 0 91-52 71-95-14-30-58-38-79-11" />
        <path d="M119 171C76 188 43 231 48 279c5 53 52 77 93 54 29-16 35-54 13-76-18-18-47-13-57 8" />
        <path d="M69 357c-21 27-34 62-31 98" />
        <path d="M132 95C96 72 58 63 19 72" />
      </g>
      <g fill="currentColor">
        <path d="M119 122c-28-56-69-66-86-62 12 40 37 70 86 62Z" />
        <path d="M210 117c13-53 49-76 82-75-3 39-26 70-82 75Z" />
        <path d="M112 357c-50-4-79 22-89 51 40 9 73-3 89-51Z" />
        <path d="M256 348c48-10 77 12 91 39-35 18-73 10-91-39Z" />
        <circle cx="124" cy="207" r="13" />
        <circle cx="118" cy="425" r="10" />
      </g>
    </svg>
  )
}

function ButtonLink({
  href,
  children,
  variant = 'primary',
  onNavigate,
}: {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'light'
  onNavigate?: (href: string) => void
}) {
  return (
    <a
      className={`button button-${variant}`}
      href={href}
      onClick={(event) => {
        if (!onNavigate) return
        event.preventDefault()
        onNavigate(href)
      }}
    >
      <span>{children}</span>
      <ArrowIcon diagonal={variant === 'secondary'} />
    </a>
  )
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <p>{children}</p>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('Tất cả')
  const [showTop, setShowTop] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle')
  const [error, setError] = useState('')
  const [path, setPath] = useState(() => window.location.pathname)
  const [darkMode, setDarkMode] = useState(
    () =>
      window.localStorage.getItem('cha-theme') === 'dark' ||
      (!window.localStorage.getItem('cha-theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches),
  )

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 700)
    const handlePopState = () => setPath(window.location.pathname)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    window.localStorage.setItem('cha-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  function navigate(href: string) {
    if (href === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    window.history.pushState({}, '', href)
    setPath(href)
    setMenuOpen(false)
    window.scrollTo({ top: 0 })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    if (!form.get('name') || !form.get('email') || !form.get('message')) {
      setError('Bạn vui lòng điền đầy đủ ba trường trước khi gửi.')
      return
    }
    setError('')
    setFormState('loading')
    window.setTimeout(() => setFormState('success'), 900)
  }

  const normalizedPath = path !== '/' ? path.replace(/\/+$/, '') : path
  const currentPath = ['/', '/about', '/post', '/contact'].includes(normalizedPath)
    ? normalizedPath
    : '/'

  return (
    <main className={darkMode ? 'theme-dark' : 'theme-light'}>
      <header className="site-header">
        <a
          className="brand"
          href="/"
          aria-label="CHA — về trang chủ"
          onClick={(event) => {
            event.preventDefault()
            navigate('/')
          }}
        >
          C<span>H</span>A
        </a>
        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={currentPath === item.href ? 'current' : ''}
              onClick={(event) => {
                event.preventDefault()
                navigate(item.href)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-tools">
          <button
            className="theme-button"
            type="button"
            aria-label={darkMode ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
            title={darkMode ? 'Chế độ sáng' : 'Chế độ tối'}
            onClick={() => setDarkMode((dark) => !dark)}
          >
            <ThemeIcon dark={darkMode} />
          </button>
          <a
            className="header-cta"
            href="/contact"
            onClick={(event) => {
              event.preventDefault()
              navigate('/contact')
            }}
          >
            Let’s talk <ArrowIcon diagonal />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {currentPath === '/' && (
      <section className="hero route-page" id="home">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <OrnamentalWing />
        <OrnamentalWing flip />
        <Spark className="hero-spark-one" />
        <Spark className="hero-spark-two" />
        <div className="hero-copy">
          <div className="eyebrow-row">
            <span className="eyebrow">Portfolio · 2024—2028</span>
            <span className="mini-sticker">Cà Mau <Spark /></span>
          </div>
          <p className="hero-kicker">Xin chào, mình là</p>
          <h1>
            <span>Dương Hoàng</span>
            <em>Anh Chương.</em>
          </h1>
          <div className="hero-bottom">
            <p>
              Sinh viên Công nghệ thông tin tại Phân hiệu Cà Mau, lưu giữ hành trình học tập
              bằng màu sắc, con chữ và những khám phá mới.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/about" onNavigate={navigate}>Khám phá hành trình</ButtonLink>
              <ButtonLink href="/post" variant="secondary" onNavigate={navigate}>
                Xem nhật ký
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="route-hint">
          <span>Chọn một trang để khám phá</span>
          <i />
        </div>
      </section>
      )}

      {currentPath === '/about' && (
      <>
      <section className="manifesto route-page" id="about">
        <SectionLabel index="01">Đôi nét về mình</SectionLabel>
        <div className="manifesto-grid">
          <div className="portrait-frame">
            <div className="portrait-art" role="img" aria-label="Chữ CHA được tạo hình nghệ thuật">
              <Flower className="portrait-flower flower-one" />
              <Flower className="portrait-flower flower-two" />
              <span>CHA</span>
              <p>stay curious</p>
            </div>
            <span className="tape tape-one">Student</span>
            <span className="tape tape-two">Digital journal</span>
          </div>
          <div className="manifesto-copy">
            <Spark className="manifesto-spark" />
            <p className="big-statement">
              Mình đang học cách biến <em>tò mò</em> thành kiến thức, và biến mỗi ngày thành
              một phần của <strong>hành trình.</strong>
            </p>
            <div className="about-notes">
              <p>
                Đây là không gian cá nhân để mình ghi lại quá trình học tập, những điều đang
                tìm hiểu và các cột mốc sẽ dần được lấp đầy.
              </p>
              <dl>
                <div>
                  <dt>Chuyên ngành</dt>
                  <dd>Công nghệ thông tin</dd>
                </div>
                <div>
                  <dt>Nơi học</dt>
                  <dd>Phân hiệu Cà Mau</dd>
                </div>
                <div>
                  <dt>Niên khóa</dt>
                  <dd>2024—2028</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="journey">
        <div className="marquee" aria-hidden="true">
          <div>
            LEARN <Spark /> CREATE <Flower /> EXPLORE <Spark /> LEARN <Spark /> CREATE{' '}
            <Flower /> EXPLORE
          </div>
        </div>
        <div className="journey-inner">
          <SectionLabel index="02">Hành trình đang mở</SectionLabel>
          <div className="journey-title">
            <h2>
              Một timeline
              <br />
              <em>chưa có hồi kết.</em>
            </h2>
            <p>
              Không cần vội vàng để có mọi câu trả lời. Mỗi giai đoạn là một khoảng trống
              đẹp để học, thử và trưởng thành.
            </p>
          </div>
          <div className="timeline">
            <article>
              <span>2024</span>
              <div className="timeline-dot" />
              <h3>Bắt đầu</h3>
              <p>Khởi đầu hành trình tại Phân hiệu Cà Mau.</p>
            </article>
            <article>
              <span>Hiện tại</span>
              <div className="timeline-dot" />
              <h3>Đang học hỏi</h3>
              <p>Tích lũy kiến thức, quan sát và khám phá từng ngày.</p>
            </article>
            <article className="timeline-future">
              <span>2028</span>
              <div className="timeline-dot" />
              <h3>Điểm đến mới</h3>
              <p>Một chương tiếp theo đang chờ được viết.</p>
            </article>
          </div>
        </div>
      </section>
      </>
      )}

      {currentPath === '/post' && (
      <section className="journal route-page" id="journal">
        <SectionLabel index="03">Digital journal</SectionLabel>
        <div className="journal-heading">
          <h2>
            Ghi chép từ
            <br />
            <em>một tâm trí tò mò.</em>
          </h2>
          <p>
            Một góc nhỏ dành cho các ghi chú học tập, khám phá và suy nghĩ cá nhân trong
            tương lai.
          </p>
        </div>
        <div className="filters" aria-label="Lọc bài viết">
          {['Tất cả', 'Học tập', 'Khám phá', 'Ghi chú'].map((item) => (
            <button
              type="button"
              key={item}
              className={filter === item ? 'active' : ''}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="journal-grid">
          <article className="feature-card">
            <div className="feature-visual">
              <span className="coming-sticker">Coming soon</span>
              <Flower className="feature-flower" />
              <div className="feature-type">
                <span>NEW</span>
                <em>IDEAS</em>
              </div>
            </div>
            <div className="card-copy">
              <span>Featured note · {filter}</span>
              <h3>Những trang viết đầu tiên đang được chuẩn bị.</h3>
              <p>Không gian này sẽ sớm được lấp đầy bằng những điều thật sự đáng chia sẻ.</p>
            </div>
          </article>
          <article className="empty-card">
            <div className="empty-icon">
              <Spark />
              <span>01</span>
            </div>
            <div>
              <span>Archive</span>
              <h3>Chưa có bài viết trong mục này.</h3>
              <p>Hãy quay lại sau để xem hành trình đã có thêm điều gì mới.</p>
            </div>
          </article>
        </div>
      </section>
      )}

      {currentPath === '/contact' && (
      <section className="contact route-page" id="contact">
        <OrnamentalWing />
        <OrnamentalWing flip />
        <div className="contact-heading">
          <span>04 · Kết nối</span>
          <h2>
            Cùng bắt đầu một
            <br />
            <em>cuộc trò chuyện.</em>
          </h2>
          <p>
            Nếu bạn muốn chia sẻ một ý tưởng hoặc chỉ đơn giản là nói lời chào, hãy để lại
            lời nhắn tại đây.
          </p>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <label>
            <span>Tên của bạn</span>
            <input name="name" type="text" placeholder="Bạn muốn mình gọi là..." />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="hello@example.com" />
          </label>
          <label>
            <span>Lời nhắn</span>
            <textarea name="message" rows={3} placeholder="Viết điều bạn đang nghĩ..." />
          </label>
          {error && <p className="form-message error">{error}</p>}
          {formState === 'success' ? (
            <div className="success-message">
              <Spark />
              <span>
                Đã nhận lời nhắn!
                <small>Đây là trạng thái minh họa của biểu mẫu.</small>
              </span>
            </div>
          ) : (
            <button className="submit-button" type="submit" disabled={formState === 'loading'}>
              <span>{formState === 'loading' ? 'Đang gửi...' : 'Gửi lời nhắn'}</span>
              <ArrowIcon />
            </button>
          )}
        </form>
      </section>
      )}

      <footer>
        <div className="footer-wordmark">CHA</div>
        <div className="footer-meta">
          <p>
            Dương Hoàng Anh Chương
            <span>Sinh viên Công nghệ thông tin</span>
          </p>
          <p>
            Phân hiệu Cà Mau
            <span>2024—2028</span>
          </p>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault()
              navigate('/')
            }}
          >
            Trang chủ <ArrowIcon />
          </a>
        </div>
        <p className="footer-note">Made with curiosity & electric colors.</p>
      </footer>

      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        type="button"
        aria-label="Trở về đầu trang"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowIcon />
      </button>
    </main>
  )
}
